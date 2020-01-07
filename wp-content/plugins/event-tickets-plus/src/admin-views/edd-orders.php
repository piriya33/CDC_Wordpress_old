<?php
/**
 * @var Tribe__Tickets_Plus__Commerce__EDD__Status_Manager   $order_overview
 * @var array                                                $tickets_sold
 */

/**
 * Whether or not we should display order report title.
 *
 * @since  4.10.6
 *
 * @param  boolean $show_title (false) Whether or not to show the title.
 */
$show_title = apply_filters( 'tribe_tickets_order_report_show_title', false );

/**
 * Whether or not we should display order report title for EDD orders.
 *
 * @since  4.10.6
 *
 * @param  boolean $show_title (false) Whether or not to show the title.
 */
$show_title = apply_filters( 'tribe_tickets_edd_order_report_show_title', $show_title );

$title = __( 'Orders Report', 'event-tickets-plus' );
/**
 * Allows filtering of the EDD order report title
 *
 * @since  4.10.6
 *
 * @param  string $title the title.
 */
$title = apply_filters( 'tribe_tickets_edd_order_report_title', $title );
?>

<div class="wrap tribe-report-page">
	<?php if ( $show_title ) : ?>
	<h1><?php echo esc_html( $title ); ?></h1>
	<?php endif; ?>
	<div id="icon-edit" class="icon32 icon32-tickets-orders"><br></div>

	<div id="tribe-order-summary" class="welcome-panel tribe-report-panel">
		<div class="welcome-panel-content">
			<div class="welcome-panel-column-container">

				<div class="welcome-panel-column welcome-panel-first">
					<h3><?php esc_html_e( 'Event Details', 'event-tickets-plus' ); ?></h3>
					<ul>
						<?php
						/**
						 * Provides an action that allows for the injections of fields at the top of the order report details meta ul
						 *
						 * @since 4.10
						 *
						 * @var $post_id
						 */
						do_action( 'tribe_tickets_plus_report_event_details_list_top', $post_id );

						/**
						 * Provides an action that allows for the injections of fields at the bottom of the order report details ul
						 *
						 * @since 4.10
						 *
						 * @var $post_id
						 */
						do_action( 'tribe_tickets_plus_report_event_details_list_bottom', $post_id );
						?>
					</ul>

					<?php
					/**
					 * Fires after the event details list (in the context of the EDD Orders admin view).
					 *
					 * @param WP_Post      $event
					 * @param bool|WP_User $author
					 */
					do_action( 'tribe_tickets_plus_after_event_details_list', $post, $author );
					?>

				</div>
				<div class="welcome-panel-column welcome-panel-middle">
					<h3>
						<?php esc_html_e( 'Sales by Ticket Type', 'event-tickets-plus' ); ?>
						<?php echo $order_overview->get_sale_by_ticket_tooltip(); ?>
					</h3>
					<?php
					foreach ( $tickets_sold as $ticket_sold ) {
						if ( ! $ticket_sold['ticket'] instanceof Tribe__Tickets__Ticket_Object ) {
							continue;
						}

						// Skip non-EDD tickets.
						if ( 'Tribe__Tickets_Plus__Commerce__EDD__Main' != $ticket_sold['ticket']->provider_class ) {
							continue;
						}

						echo $order_overview->get_ticket_sale_infomation( $ticket_sold, $post_id );
					}
					?>
				</div>
				<div class="welcome-panel-column welcome-panel-last alternate">

					<div class="totals-header">
						<h3>
							<?php
							/** @var Tribe__Tickets_Plus__Commerce__EDD__Status__Complete $completed_status */
							$completed_status = $order_overview->get_completed_status_class();
							$totals_header = sprintf(
								'%1$s: %2$s (%3$s)',
								__( 'Total Ticket Sales', 'event-tickets-plus' ),
								tribe_format_currency( number_format( $completed_status->get_line_total(), 2 ), $post_id ),
								$completed_status->get_qty()
							);
							echo esc_html( $totals_header );
							echo $order_overview->get_total_sale_tooltip();
							?>
						</h3>

						<div class="order-total">
							<?php
							$totals_header = sprintf(
								'%1$s: %2$s (%3$s)',
								__( 'Total Tickets Ordered', 'event-tickets-plus' ),
								tribe_format_currency( number_format( $order_overview->get_line_total(), 2 ), $post_id ),
								$order_overview->get_qty()
							);
							echo esc_html( $totals_header );
							echo $order_overview->get_total_order_tooltip();
							?>
						</div>
					</div>

					<ul id="sales_breakdown_wrapper" class="tribe-event-meta-note">

						<?php
						/**
						 * Add Completed Status First and Skip in Loop
						 */
						?>
						<li>
							<strong><?php esc_html_e( 'Completed', 'event-tickets-plus' ); ?>:</strong>
							<?php echo esc_html( tribe_format_currency( number_format( $completed_status->get_line_total(), 2 ), $post_id ) ); ?>
							<span id="total_issued">(<?php echo esc_html( $completed_status->get_qty() ); ?>)</span>
						</li>

						<?php
						foreach ( $order_overview->statuses as $provider_key => $status ) {

							// skip the completed order as we always display it above
							if ( $order_overview->completed_status_id === $provider_key ) {
								continue;
							}

							// do not show status if no tickets
							if ( 0 >= (int) $status->get_qty() ) {
								continue;
							}
							?>
							<li>
								<strong><?php esc_html_e( $status->name, 'event-tickets-plus' ); ?>:</strong>
								<?php echo esc_html( tribe_format_currency( number_format( $status->get_line_total(), 2 ), $post_id ) ); ?>
								<span id="total_issued">(<?php echo esc_html( $status->get_qty() ); ?>)</span>
							</li>
							<?php
						}
						?>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<form id="topics-filter" method="get">
		<input type="hidden" name="<?php echo esc_attr( is_admin() ? 'page' : 'tribe[page]' ); ?>" value="<?php echo esc_attr( isset( $_GET['page'] ) ? $_GET['page'] : '' ); ?>"/>
		<input type="hidden" name="<?php echo esc_attr( is_admin() ? 'event_id' : 'tribe[event_id]' ); ?>" id="event_id" value="<?php echo esc_attr( $post_id ); ?>"/>
		<input type="hidden" name="<?php echo esc_attr( is_admin() ? 'post_type' : 'tribe[post_type]' ); ?>" value="<?php echo esc_attr( $post->post_type ); ?>"/>
		<?php echo $table; ?>
	</form>
</div>
