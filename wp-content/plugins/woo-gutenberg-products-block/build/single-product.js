this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={37:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({1:"atomic-block-components/add-to-cart--atomic-block-components/image--atomic-block-components/title",2:"atomic-block-components/add-to-cart--atomic-block-components/button",3:"atomic-block-components/sale-badge",7:"atomic-block-components/add-to-cart",8:"atomic-block-components/button",9:"atomic-block-components/category-list",10:"atomic-block-components/image",11:"atomic-block-components/price",12:"atomic-block-components/rating",13:"atomic-block-components/sku",14:"atomic-block-components/stock-indicator",15:"atomic-block-components/summary",16:"atomic-block-components/tag-list",17:"atomic-block-components/title"}[e]||e)+".js"}(e);var u=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;return c.push([888,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},105:function(e,t){},107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},118:function(e,t){},127:function(e,t,n){"use strict";var r=n(0),o=n(1),c=n(55),i=n(158),a=n(3),u=n(22),s=n(39);t.a=function(e){var t=(Object(s.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(r.createElement)(u.InspectorControls,null,Object(r.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(r.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(r.createElement)("a",{href:"".concat(a.ADMIN_URL,"post.php?post=").concat(t,"&action=edit"),target:"_blank",rel:"noopener noreferrer"},Object(o.__)("Edit this product's details","woo-gutenberg-products-block"),Object(r.createElement)(c.a,{srcElement:i.a,size:16}))),Object(r.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(o.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}},13:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},135:function(e,t){!function(){e.exports=this.wp.wordcount}()},136:function(e,t,n){"use strict";var r=n(30),o=n.n(r),c=n(11),i=n.n(c),a=n(0),u=n(1),s=n(8),l=(n(2),n(46)),d=n(4),p=n(7),f=n.n(p),m=n(15),b=n.n(m),g=n(16),h=n.n(g),O=n(17),v=n.n(O),j=n(18),w=n.n(j),y=n(10),k=n.n(y),E=n(139);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w()(this,n)}}var _=Object(E.a)((function(e){var t=function(t){v()(r,t);var n=S(r);function r(){return b()(this,r),n.apply(this,arguments)}return h()(r,[{key:"render",value:function(){var t=this.props.selected,n=null==t;return Object(a.createElement)(e,i()({},this.props,{selected:n?[]:[t]}))}}]),r}(a.Component);return t.defaultProps={selected:null},t}),"withTransformSingleSelectToMultipleSelect"),P=n(279),x=n(27),B=n.n(x),C=n(12),N=n.n(C),I=n(5),R=n.n(I),z=n(13),M=n.n(z),A=n(33),L=n.n(A),D=n(36),V=n(38);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){R()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w()(this,n)}}var G=Object(E.a)((function(e){var t=function(t){v()(r,t);var n=U(r);function r(){var e;b()(this,r);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=n.call.apply(n,[this].concat(o)),R()(N()(e),"state",{error:null,loading:!1,variations:{}}),R()(N()(e),"loadVariations",(function(){var t=e.props.products,n=e.state,r=n.loading,o=n.variations;if(!r){var c=e.getExpandedProduct();if(c&&!o[c]){var i=t.find((function(e){return e.id===c}));i.variations&&0!==i.variations.length?(e.setState({loading:!0}),Object(D.g)(c).then((function(t){var n=t.map((function(e){return H(H({},e),{},{parent:c})}));e.setState({variations:H(H({},e.state.variations),{},R()({},c,n)),loading:!1,error:null})})).catch(function(){var t=B()(M.a.mark((function t(n){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(V.a)(n);case 2:r=t.sent,e.setState({variations:H(H({},e.state.variations),{},R()({},c,null)),loading:!1,error:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):e.setState({variations:H(H({},e.state.variations),{},R()({},c,null)),loading:!1,error:null})}}})),e}return h()(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selected,n=e.showVariations;t&&n&&this.loadVariations()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.isLoading,r=t.selected;t.showVariations&&(!L()(e.selected,r)||e.isLoading&&!n)&&this.loadVariations()}},{key:"isProductId",value:function(e){return this.props.products.some((function(t){return t.id===e}))}},{key:"findParentProduct",value:function(e){return this.props.products.filter((function(t){return t.variations&&t.variations.find((function(t){return t.id===e}))}))[0].id}},{key:"getExpandedProduct",value:function(){var e=this.props,t=e.isLoading,n=e.selected;if(!e.showVariations)return null;var r=n&&n.length?n[0]:null;return r?this.prevSelectedItem=r:this.prevSelectedItem&&(t||this.isProductId(this.prevSelectedItem)||(r=this.prevSelectedItem)),!t&&r?this.isProductId(r)?r:this.findParentProduct(r):null}},{key:"render",value:function(){var t=this.props,n=t.error,r=t.isLoading,o=this.state,c=o.error,u=o.loading,s=o.variations;return Object(a.createElement)(e,i()({},this.props,{error:c||n,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:s,variationsLoading:u}))}}]),r}(a.Component);return R()(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),q=n(55),F=n(31),Q=Object(a.createElement)(F.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),W=Object(a.createElement)(F.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#757575",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),J=n(45);n(186);function X(e,t){if(!t)return e;var n=new RegExp(Object(s.escapeRegExp)(t),"ig");return e.replace(n,"<strong>$&</strong>")}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(a.createElement)(q.a,{srcElement:Q}):Object(a.createElement)(q.a,{srcElement:W})},K={list:Object(u.__)("Products","woo-gutenberg-products-block"),noItems:Object(u.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(u.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(u.__)("Product search results updated.","woo-gutenberg-products-block")},$=function(e){var t=e.expandedProduct,n=e.error,r=e.isLoading,c=e.onChange,p=e.onSearch,m=e.products,b=e.renderItem,g=e.selected,h=e.showVariations,O=e.variations,v=e.variationsLoading,j=function(e){var n=e.item,r=e.search,o=e.depth,c=void 0===o?0:o,p=e.isSelected,m=e.onSelect,b=n.variations&&Array.isArray(n.variations)?n.variations.length:0,g=f()("woocommerce-search-product__item","woocommerce-search-list__item","depth-".concat(c),{"is-searching":r.length>0,"is-skip-level":0===c&&0!==n.parent,"is-variable":b>0}),h=Object.assign({},e);delete h.isSingle;var O={role:"menuitemradio"};return n.breadcrumbs.length&&(O["aria-label"]="".concat(n.breadcrumbs[0],": ").concat(n.name)),b&&(O["aria-expanded"]=n.id===t),n.breadcrumbs.length?(Object(s.isEmpty)(n.variation)||(n.name=n.variation),Object(a.createElement)(l.b,i()({className:g},e,O))):[Object(a.createElement)(d.MenuItem,i()({key:"product-".concat(n.id),isSelected:p},h,O,{className:g,onClick:function(){m(n)()}}),Object(a.createElement)("span",{className:"woocommerce-search-list__item-state"},Y(p)),Object(a.createElement)("span",{className:"woocommerce-search-list__item-label"},Object(a.createElement)("span",{className:"woocommerce-search-list__item-name",dangerouslySetInnerHTML:{__html:X(n.name,r)}})),b?Object(a.createElement)("span",{className:"woocommerce-search-list__item-variation-count"},Object(u.sprintf)(Object(u._n)("%d variation","%d variations",b,"woo-gutenberg-products-block"),b)):null),t===n.id&&b>0&&v&&Object(a.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-search-product__itemdepth-1 is-loading is-not-active"},Object(a.createElement)(d.Spinner,null))]};if(n)return Object(a.createElement)(J.a,{error:n});var w=O&&O[t]?O[t]:[],y=[].concat(o()(m),o()(w));return Object(a.createElement)(l.a,{className:"woocommerce-products",list:y,isLoading:r,isSingle:!0,selected:y.filter((function(e){var t=e.id;return g.includes(t)})),onChange:c,renderItem:b||(h?j:null),onSearch:p,messages:K,isHierarchical:!0})};$.defaultProps={expandedProduct:null,selected:[],showVariations:!1};t.a=_(Object(P.a)(G($)))},137:function(e,t,n){"use strict";var r=n(15),o=n.n(r),c=n(16),i=n.n(c),a=n(12),u=n.n(a),s=n(17),l=n.n(s),d=n(18),p=n.n(d),f=n(10),m=n.n(f),b=n(5),g=n.n(b),h=n(0),O=(n(2),n(9)),v=n(1),j=n(6),w=function(e){var t=e.imageUrl,n=void 0===t?"".concat(j.T,"img/block-error.svg"):t,r=e.header,o=void 0===r?Object(v.__)("Oops!","woo-gutenberg-products-block"):r,c=e.text,i=void 0===c?Object(v.__)("There was an error loading the content.","woo-gutenberg-products-block"):c,a=e.errorMessage,u=e.errorMessagePrefix,s=void 0===u?Object(v.__)("Error:","woo-gutenberg-products-block"):u;return Object(h.createElement)("div",{className:"wc-block-error wc-block-components-error"},n&&Object(h.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:n,alt:""}),Object(h.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},o&&Object(h.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},o),i&&Object(h.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},i),a&&Object(h.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},s?s+" ":"",a)))};n(242);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var k=function(e){l()(n,e);var t=y(n);function n(){var e;o()(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),g()(u()(e),"state",{errorMessage:"",hasError:!1}),e}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.imageUrl,r=e.showErrorMessage,o=e.text,c=e.errorMessagePrefix,i=e.renderError,a=this.state,u=a.errorMessage;return a.hasError?"function"==typeof i?i({errorMessage:u}):Object(h.createElement)(w,{errorMessage:r?u:null,header:t,imageUrl:n,text:o,errorMessagePrefix:c}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(h.createElement)(h.Fragment,null,Object(h.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),n}(O.Component);k.defaultProps={showErrorMessage:!0};t.a=k},138:function(e,t,n){"use strict";var r=n(0),o=n(31),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},140:function(e,t){},158:function(e,t,n){"use strict";var r=n(0),o=n(31),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=c},186:function(e,t){},19:function(e,t){!function(){e.exports=this.wp.apiFetch}()},190:function(e,t){!function(){e.exports=this.wp.warning}()},20:function(e,t){!function(){e.exports=this.wp.url}()},21:function(e,t){!function(){e.exports=this.wp.data}()},22:function(e,t){!function(){e.exports=this.wp.blockEditor}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},242:function(e,t){},26:function(e,t){!function(){e.exports=this.moment}()},279:function(e,t,n){"use strict";var r=n(11),o=n.n(r),c=n(27),i=n.n(c),a=n(15),u=n.n(a),s=n(16),l=n.n(s),d=n(12),p=n.n(d),f=n(17),m=n.n(f),b=n(18),g=n.n(b),h=n(10),O=n.n(h),v=n(0),j=n(13),w=n.n(j),y=n(8),k=n(139),E=(n(2),n(6)),S=n(36),_=n(38);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}var x=Object(k.a)((function(e){var t=function(t){m()(c,t);var n,r=P(c);function c(){var e;return u()(this,c),(e=r.apply(this,arguments)).state={list:[],loading:!0},e.setError=e.setError.bind(p()(e)),e.debouncedOnSearch=Object(y.debounce)(e.onSearch.bind(p()(e)),400),e}return l()(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(S.h)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(e){var t=this,n=this.props.selected;Object(S.h)({selected:n,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"setError",value:(n=i()(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)(t);case 2:n=e.sent,this.setState({list:[],loading:!1,error:n});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this,n=this.state,r=n.error,c=n.list,i=n.loading;return Object(v.createElement)(e,o()({},this.props,{error:r,products:c,isLoading:i,onSearch:E.u?function(e){t.setState({loading:!0}),t.debouncedOnSearch(e)}:null}))}}]),c}(v.Component);return t.defaultProps={selected:[]},t}),"withSearchedProducts");t.a=x},28:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},31:function(e,t){!function(){e.exports=this.wp.primitives}()},33:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},34:function(e,t){!function(){e.exports=this.wp.dataControls}()},36:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"i",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return j}));var r=n(5),o=n.n(r),c=n(20),i=n(19),a=n.n(i),u=n(8),s=n(6);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.selected,n=void 0===t?[]:t,r=e.search,o=void 0===r?"":r,i=e.queryArgs,l=function(e){var t=e.selected,n=void 0===t?[]:t,r=e.search,o=void 0===r?"":r,i=e.queryArgs,a=void 0===i?[]:i,u={per_page:s.u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",d(d({},u),a))];return s.u&&n.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:n})),l}({selected:n,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id").map((function(e){return d(d({},e),{},{parent:0})}))})).catch((function(e){throw e}))},f=function(e){return a()({path:"/wc/store/products/".concat(e)})},m=function(){return a()({path:"wc/store/products/attributes"})},b=function(e){return a()({path:"wc/store/products/attributes/".concat(e,"/terms")})},g=function(e){var t=e.selected,n=function(e){var t=e.selected,n=void 0===t?[]:t,r=e.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.w?100:0,orderby:s.w?"count":"name",order:s.w?"desc":"asc",search:r})];return s.w&&n.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:n})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(n.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id")}))},h=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products/categories",d({per_page:0},e))})},O=function(e){return a()({path:"wc/store/products/categories/".concat(e)})},v=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},j=function(e,t){if(!e.title.raw)return e.slug;var n=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(n?"":" - ".concat(e.slug))}},37:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(27),o=n.n(r),c=n(13),i=n.n(c),a=n(1),u=function(){var e=o()(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},39:function(e,t){!function(){e.exports=this.wc.wcSharedContext}()},4:function(e,t){!function(){e.exports=this.wp.components}()},43:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},45:function(e,t,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(43));t.a=function(e){var t,n,i,a=e.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(t=a).message,i=t.type,n?"general"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):"api"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):n:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},49:function(e,t){!function(){e.exports=this.wp.keycodes}()},51:function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()},524:function(e,t,n){"use strict";var r=n(11),o=n.n(r),c=n(27),i=n.n(c),a=n(15),u=n.n(a),s=n(16),l=n.n(s),d=n(12),p=n.n(d),f=n(17),m=n.n(f),b=n(18),g=n.n(b),h=n(10),O=n.n(h),v=n(5),j=n.n(v),w=n(0),y=n(13),k=n.n(y),E=n(139),S=n(36),_=n(38);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}var x=Object(E.a)((function(e){return function(t){m()(r,t);var n=P(r);function r(){var e;u()(this,r);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=n.call.apply(n,[this].concat(o)),j()(p()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),j()(p()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(S.e)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch(function(){var t=i()(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(n);case 2:r=t.sent,e.setState({product:null,loading:!1,error:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):e.setState({product:null,loading:!1,error:null}))})),e}return l()(r,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var t=this.state,n=t.error,r=t.loading,c=t.product;return Object(w.createElement)(e,o()({},this.props,{error:n,getProduct:this.loadProduct,isLoading:r,product:c}))}}]),r}(w.Component)}),"withProduct");t.a=x},55:function(e,t,n){"use strict";var r=n(5),o=n.n(r),c=n(24),i=n.n(c),a=n(9);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,c=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},c)):null}},6:function(e,t,n){"use strict";n.d(t,"l",(function(){return o})),n.d(t,"I",(function(){return c})),n.d(t,"P",(function(){return i})),n.d(t,"y",(function(){return a})),n.d(t,"A",(function(){return u})),n.d(t,"m",(function(){return s})),n.d(t,"z",(function(){return l})),n.d(t,"C",(function(){return d})),n.d(t,"o",(function(){return p})),n.d(t,"B",(function(){return f})),n.d(t,"n",(function(){return m})),n.d(t,"E",(function(){return b})),n.d(t,"u",(function(){return g})),n.d(t,"w",(function(){return h})),n.d(t,"r",(function(){return O})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return j})),n.d(t,"k",(function(){return w})),n.d(t,"L",(function(){return y})),n.d(t,"Q",(function(){return k})),n.d(t,"q",(function(){return E})),n.d(t,"p",(function(){return S})),n.d(t,"H",(function(){return _})),n.d(t,"c",(function(){return P})),n.d(t,"v",(function(){return x})),n.d(t,"J",(function(){return B})),n.d(t,"T",(function(){return N})),n.d(t,"U",(function(){return I})),n.d(t,"K",(function(){return R})),n.d(t,"a",(function(){return z})),n.d(t,"N",(function(){return M})),n.d(t,"b",(function(){return A})),n.d(t,"M",(function(){return L})),n.d(t,"D",(function(){return D})),n.d(t,"i",(function(){return V})),n.d(t,"O",(function(){return U})),n.d(t,"h",(function(){return G})),n.d(t,"j",(function(){return q})),n.d(t,"G",(function(){return F})),n.d(t,"F",(function(){return Q})),n.d(t,"S",(function(){return W})),n.d(t,"R",(function(){return J})),n.d(t,"d",(function(){return X})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return K})),n.d(t,"g",(function(){return $})),n.d(t,"x",(function(){return Z})),n.d(t,"X",(function(){return te})),n.d(t,"Y",(function(){return ne})),n.d(t,"V",(function(){return re})),n.d(t,"W",(function(){return oe}));var r=n(3),o=Object(r.getSetting)("currentUserIsAdmin",!1),c=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),a=Object(r.getSetting)("max_columns",6),u=Object(r.getSetting)("min_columns",1),s=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),d=Object(r.getSetting)("min_rows",1),p=Object(r.getSetting)("default_rows",3),f=Object(r.getSetting)("min_height",500),m=Object(r.getSetting)("default_height",500),b=Object(r.getSetting)("placeholderImgSrc",""),g=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),h=Object(r.getSetting)("limitTags"),O=Object(r.getSetting)("hasProducts",!0),v=Object(r.getSetting)("hasTags",!0),j=Object(r.getSetting)("homeUrl",""),w=Object(r.getSetting)("couponsEnabled",!0),y=Object(r.getSetting)("shippingEnabled",!0),k=Object(r.getSetting)("taxesEnabled",!0),E=(Object(r.getSetting)("displayItemizedTaxes",!1),Object(r.getSetting)("hasDarkEditorStyleSupport",!1)),S=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),_=Object(r.getSetting)("productCount",0),P=Object(r.getSetting)("attributes",[]),x=Object(r.getSetting)("isShippingCalculatorEnabled",!0),B=Object(r.getSetting)("shippingCostRequiresAddress",!1),C=(Object(r.getSetting)("isShippingCostHidden",!1),Object(r.getSetting)("woocommerceBlocksPhase",1)),N=Object(r.getSetting)("wcBlocksAssetUrl",""),I=Object(r.getSetting)("wcBlocksBuildUrl",""),R=Object(r.getSetting)("shippingCountries",{}),z=Object(r.getSetting)("allowedCountries",{}),M=Object(r.getSetting)("shippingStates",{}),A=Object(r.getSetting)("allowedStates",{}),L=Object(r.getSetting)("shippingMethodsExist",!1),D=Object(r.getSetting)("paymentGatewaySortOrder",[]),V=Object(r.getSetting)("checkoutShowLoginReminder",!0),T={id:0,title:"",permalink:""},H=Object(r.getSetting)("storePages",{myaccount:T,shop:T,cart:T,checkout:T,privacy:T,terms:T}),U=H.shop.permalink,G=H.checkout.id,q=H.checkout.permalink,F=H.privacy.permalink,Q=H.privacy.title,W=H.terms.permalink,J=H.terms.title,X=H.cart.id,Y=H.cart.permalink,K=Object(r.getSetting)("checkoutAllowsGuest",!1),$=Object(r.getSetting)("checkoutAllowsSignup",!1),Z=H.myaccount.permalink?H.myaccount.permalink:Object(r.getSetting)("loginUrl","/wp-login.php"),ee=n(23),te=function(e,t){if(C>2)return Object(ee.registerBlockType)(e,t)},ne=function(e,t){if(C>1)return Object(ee.registerBlockType)(e,t)},re=function(){return C>2},oe=function(){return C>1}},61:function(e,t){!function(){e.exports=this.wp.hooks}()},62:function(e,t){!function(){e.exports=this.wc.priceFormat}()},66:function(e,t){!function(){e.exports=this.wc.wcSharedHocs}()},67:function(e,t){!function(){e.exports=this.wp.dom}()},70:function(e,t){!function(){e.exports=this.wp.deprecated}()},71:function(e,t){!function(){e.exports=this.wp.a11y}()},73:function(e,t){!function(){e.exports=this.ReactDOM}()},77:function(e,t){!function(){e.exports=this.wp.viewport}()},78:function(e,t){!function(){e.exports=this.wp.date}()},8:function(e,t){!function(){e.exports=this.lodash}()},888:function(e,t,n){e.exports=n(894)},889:function(e,t){},89:function(e,t,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(55)),i=n(138),a=n(7),u=n.n(a),s=n(4),l=n(45);n(140);t.a=function(e){var t=e.className,n=e.error,a=e.isLoading,d=e.onRetry;return Object(r.createElement)(s.Placeholder,{icon:Object(r.createElement)(c.a,{srcElement:i.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:u()("wc-block-api-error",t)},Object(r.createElement)(l.a,{error:n}),d&&Object(r.createElement)(r.Fragment,null,a?Object(r.createElement)(s.Spinner,null):Object(r.createElement)(s.Button,{isSecondary:!0,onClick:d},Object(o.__)("Retry","woo-gutenberg-products-block"))))}},894:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(6),c=n(14),i=n.n(c),a=n(0),u=n(4),s=n(524),l=n(137),d=n(127),p=Object(a.createElement)("img",{src:o.T+"img/single-product-preview.svg",alt:"",width:"230",height:"250",style:{width:"100%"}}),f=n(22),m=(n(889),n(89)),b=function(e){var t=e.error,n=e.isLoading,r=e.getProduct;return Object(a.createElement)(m.a,{className:"wc-block-single-product-error",error:t,isLoading:n,onRetry:r})},g=n(136),h=function(e){var t=e.attributes,n=e.setAttributes;return Object(a.createElement)(g.a,{selected:t.productId||0,showVariations:!0,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e[0]?e[0].id:0;n({productId:t})}})},O=function(e){var t=e.isEditing,n=e.setIsEditing;return Object(a.createElement)(f.BlockControls,null,Object(a.createElement)(u.ToolbarGroup,{controls:[{icon:"edit",title:Object(r.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return n(!t)},isActive:t}]}))},v=n(21),j=n(39),w=n(23),y=n(55),k=n(31),E=Object(a.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-5 0-9 4-9 9H0l4 4 4-4H5a7 7 0 113 5.7l-1.5 1.4A9 9 0 1012 3z"})),S=n(30),_=n.n(S),P=Object(a.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)("path",{d:"M21 4H3a2 2 0 00-2 2v13c0 1.1.9 2 2 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"})),x=n(917),B="woocommerce/single-product",C=Object(r.__)("Single Product","woo-gutenberg-products-block"),N=Object(a.createElement)(y.a,{srcElement:P}),I=Object(r.__)("Display a single product.","woo-gutenberg-products-block"),R=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],z=["core/columns","core/column"].concat(_()(Object.keys(Object(x.a)(B)))),M=function(e){var t=e.isLoading,n=e.product,o=e.clientId,c=Object(v.useDispatch)("core/block-editor").replaceInnerBlocks,s=Object(a.useCallback)((function(){c(o,function e(t){return t.map((function(t){var n=i()(t,3),r=n[0],o=n[1],c=void 0===o?{}:o,a=n[2],u=void 0===a?[]:a,s=u?e(u):[];return Object(w.createBlock)(r,c,s)}))}(R),!1)}),[o,c]);return Object(a.createElement)(j.InnerBlockLayoutContextProvider,{parentName:B,parentClassName:"wc-block-single-product wc-block-layout"},Object(a.createElement)(j.ProductDataContextProvider,{product:n,isLoading:t},Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(u.PanelBody,{title:Object(r.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(a.createElement)(u.Button,{label:Object(r.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:s,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(a.createElement)(y.a,{srcElement:E})," ",Object(r.__)("Reset layout","woo-gutenberg-products-block")))),Object(a.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(a.createElement)(f.InnerBlocks,{template:R,allowedBlocks:z,templateLock:!1,renderAppender:!1}))))},A=Object(s.a)((function(e){var t=e.className,n=e.attributes,o=e.setAttributes,c=e.error,s=e.getProduct,m=e.product,g=e.isLoading,v=e.clientId,j=n.productId,w=n.isPreview,y=Object(a.useState)(!j),k=i()(y,2),E=k[0],S=k[1];return w?p:c?Object(a.createElement)(b,{error:c,isLoading:g,getProduct:s}):Object(a.createElement)("div",{className:t},Object(a.createElement)(l.a,{header:Object(r.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(a.createElement)(O,{setIsEditing:S,isEditing:E}),E?Object(a.createElement)(u.Placeholder,{icon:N,label:C,className:"wc-block-single-product"},I,Object(a.createElement)("div",{className:"wc-block-single-product__selection"},Object(a.createElement)(h,{attributes:n,setAttributes:o}),Object(a.createElement)(u.Button,{isSecondary:!0,onClick:function(){S(!1)}},Object(r.__)("Done","woo-gutenberg-products-block")))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(u.PanelBody,{title:Object(r.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(a.createElement)(h,{attributes:n,setAttributes:o}))),Object(a.createElement)(d.a,{productId:j}),Object(a.createElement)(M,{clientId:v,product:m,isLoading:g}))))})),L=n(7),D=n.n(L),V=function(e){var t=e.attributes;return Object(a.createElement)("div",{className:D()("is-loading",t.className)},Object(a.createElement)(f.InnerBlocks.Content,null))},T={isPreview:{type:"boolean",default:!1,save:!1},productId:{type:"number"}},H={title:C,icon:{src:N,foreground:"#96588a"},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:I,supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:T,edit:A,save:V};Object(o.X)(B,H)},9:function(e,t){!function(){e.exports=this.React}()},91:function(e,t){!function(){e.exports=this.wp.autop}()},917:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(51),o=n(0),c=n(6);n.p=c.U,Object(r.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,525))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(10)]).then(n.bind(null,938))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,939))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(o.lazy)((function(){return n.e(12).then(n.bind(null,526))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,527))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(o.lazy)((function(){return n.e(15).then(n.bind(null,530))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(o.lazy)((function(){return n.e(3).then(n.bind(null,280))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(o.lazy)((function(){return n.e(13).then(n.bind(null,531))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(o.lazy)((function(){return n.e(9).then(n.bind(null,532))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(o.lazy)((function(){return n.e(16).then(n.bind(null,533))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(o.lazy)((function(){return n.e(14).then(n.bind(null,534))}))}),Object(r.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,940))}))});var i=function(e){return Object(r.getRegisteredBlockComponents)(e)}}});