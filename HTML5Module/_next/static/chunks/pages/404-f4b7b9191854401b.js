(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{98730:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.__N_SSG=void 0,t.default=function(e){return a.default.createElement(l.default,e)};var l=r(n(12918)),a=r(n(67294));t.__N_SSG=!0},99651:function(e,t,n){"use strict";var r=n(64836),l=r(n(56690)),a=r(n(89728)),i=r(n(61655)),o=r(n(94993)),u=r(n(73808));function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var l=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return(0,o.default)(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=s(n(67294)),d=s(n(72717));function s(e){return e&&e.__esModule?e:{default:e}}var p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var v=function(e){(0,i.default)(n,e);var t=c(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:g.error},f.default.createElement(d.default,null,f.default.createElement("title",null,e?e+": "+t:"Application error: a client-side exception has occurred")),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:g.h1},e):null,f.default.createElement("div",{style:g.desc},f.default.createElement("h2",{style:g.h2},this.props.title||e?t:f.default.createElement(f.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),n}(f.default.Component);v.displayName="ErrorPage",v.getInitialProps=h,v.origGetInitialProps=h,t.default=v;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},28250:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(98730)}])},12918:function(e,t,n){e.exports=n(99651)}},function(e){e.O(0,[888,774,179],(function(){return t=28250,e(e.s=t);var t}));var t=e.O();_N_E=t}]);