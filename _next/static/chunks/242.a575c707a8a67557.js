(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{5242:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r=t(5893),o=t(7294);const u=(0,o.createContext)(null),c=u.Provider;var i=t(5243);function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function l({children:n,className:e,id:t,placeholder:r,style:u,whenCreated:l,...s}){const f=(0,o.useRef)(null),d=function(n,e){const[t,r]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(null!==n.current&&null===t){const t=new i.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),r(t)}}),[n,t,e]),t}(f,s),p=(0,o.useRef)(!1);(0,o.useEffect)((()=>{null!=d&&!1===p.current&&null!=l&&(p.current=!0,l(d))}),[d,l]);const[g]=(0,o.useState)({className:e,id:t,style:u}),y=(0,o.useMemo)((()=>d?{__version:1,map:d}:null),[d]),h=y?o.createElement(c,{value:y},n):r??null;return o.createElement("div",a({},g,{ref:f}),h)}t(3935);function s(n,e){return null==e?function(e,t){return(0,o.useRef)(n(e,t))}:function(t,r){const u=(0,o.useRef)(n(t,r)),c=(0,o.useRef)(t),{instance:i}=u.current;return(0,o.useEffect)((function(){c.current!==t&&(e(i,t,c.current),c.current=t)}),[i,t,r]),u}}function f(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function d(n){return function(e){const t=function(){const n=(0,o.useContext)(u);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}(),r=n(f(e,t),t);return function(n,e){const t=(0,o.useRef)(e);(0,o.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}(t.map,e.attribution),function(n,e){const t=(0,o.useRef)();(0,o.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}(r.current,e.eventHandlers),function(n,e){(0,o.useEffect)((function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var t;null==(t=e.layerContainer)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}(r.current,t),r}}const p=function(n){function e(e,t){const{instance:r}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null}return(0,o.forwardRef)(e)}(d(s((function({url:n,...e},t){return{instance:new i.TileLayer(n,f(e,t)),context:t}}),(function(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}))));const g=function(n,e){return function(n){function e(e,t){const{instance:r,context:u}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null==e.children?null:o.createElement(c,{value:u},e.children)}return(0,o.forwardRef)(e)}(d(s(n,e)))}((function({position:n,...e},t){const r=new i.Marker(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())}));t(3325);var y=new i.Icon({iconUrl:"".concat("/ip-address-tracker","/images/icon-location.svg"),iconAnchor:[12,41]}),h=function(n){var e=n.location;return(0,r.jsxs)(l,{center:[e.lat,e.lng],zoom:13,scrollWheelZoom:!1,children:[(0,r.jsx)(p,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(g,{position:[e.lat,e.lng],icon:y})]})}},3325:function(){}}]);