!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}run(t,...e){const n=this._events[t];console.assert(!!n,"No subscriber for event: "+t),n&&(this._events[t]=n.filter(n=>{let{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once}))}once(t,e){this.on(t,e)}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}e.App=s,e.default=new s},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o=n(8),i=n(6);e.Component=i.Component;const r=n(5),a=n(2);e.on=a.on,e.update=a.update,e.event=a.update;const c=n(4);s.default.createElement=o.createElement,s.default.render=o.render,s.default.Fragment=o.Fragment,s.default.webComponent=c.default,s.default.start=((t,e,n,s,o)=>{const r=Object.assign(o||{},{render:!0,global_event:!0}),a=new i.Component(e,n,s);return o&&o.rendered&&(a.rendered=o.rendered),a.mount(t,r),a});let d=s.default;const l=t||window;l.app&&l.app.start?d=l.app:(l.app=d,"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>new r.default)),e.default=d,s.default.on("debug",t=>0)}).call(this,n(9))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n={}){return(s,o,i)=>(t=`${o}${t?","+t:""}`,e.Reflect.defineMetadata(`apprun-update:${t}`,{name:t,action:[i.value,n]},s),i)},e.on=function(t,n={}){return function(n,s){t=`${s}${t?","+t:""}`,e.Reflect.defineMetadata(`apprun-update:${t}`,{name:t,key:s},n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(7),o="_props";function i(t){const e=[],n=t=>{null!==t&&void 0!==t&&""!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}e.createElement=function(t,e,...n){const o=i(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent){const n=e&&e.id||`_${t.name}_${++r}`;return s.default(t,n,e)}return t(e,o)};let r=0;const a={};function c(t,e){if(r=0,null!=e&&t)if(Array.isArray(e))l(t,e);else{const n=e;t.firstElementChild?d(t.firstElementChild,n):t.appendChild(h(n))}}function d(t,e){console.assert(!!t),function(t,e){return t.nodeName===`${e.tag||""}`.toUpperCase()}(t,e)?(l(t,e.children),f(t,e.props)):t.parentNode.replaceChild(h(e),t)}function l(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(u(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)d(t.childNodes[s],n);else{const i=e&&a[e];i?(t.replaceChild(i,o),t.appendChild(o),d(t.childNodes[s],n)):(t.appendChild(h(n),o),d(t.childNodes[s],n))}else d(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(h(e[t]));t.appendChild(s)}}function u(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function h(t){if(console.assert(null!==t&&void 0!==t),"string"==typeof t)return u(t);if(!t.tag)return u(JSON.stringify(t));const e="svg"===t.tag?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return f(e,t.props),t.children&&t.children.forEach(t=>e.appendChild(h(t))),e}function f(t,e){console.assert(!!t);const n=t[o]||{};e=function(t,e){const n={};return t&&Object.keys(t).forEach(t=>n[t]=""),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(n,e),t[o]=e;for(let s in e){const o=e[s];if(n[s]!==o)if("style"===s){t.style.cssText&&(t.style.cssText="");for(let e in o)t.style[e]!==o[e]&&(t.style[e]=o[e])}else if(s.startsWith("data-")){const e=s.substring(5);t.dataset[e]!==o&&(t.dataset[e]=o)}else t[s]!==o&&(t[s]=o),"key"===s&&o&&(a[o]=t)}}e.updateElement=c,e.render=c,e.Fragment=function(t,...e){return i(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=((t,e={})=>(class extends HTMLElement{constructor(){super();const n=Object.assign({global_event:!0,render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value),this.children&&(s.children=Array.from(this.children),s.children.forEach(t=>t.parentElement.removeChild(t))),this._component=new t(s).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}get state(){return this._component.state}})),e.default=((t,n,s)=>{customElements&&customElements.define(t,e.customElement(n,s))})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o="//";s.default.on("//",t=>{}),s.default.on("#",t=>{});e.default=class{route(t){if(t||(t="#"),t.indexOf("/")>0){const[e,...n]=t.split("/");s.default.run(e,...n),s.default.run(o,e,...n)}else s.default.run(t),s.default.run(o,t)}constructor(){s.default.on("route",t=>this.route(t)),window.onpopstate=(t=>this.route(location.hash)),this.route(location.hash)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o=n(2);class i{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.App,this._history=[],this._history_idx=-1,this.start=((t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0}))),this.render=(()=>this.view(this.state))}renderState(t){if(!this.view)return;const e=this.view(t);s.default.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"});const n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&s.default.render&&(s.default.render(n,e),this.rendered&&this.rendered(this.state))}setState(t,e){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t});else{if(null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(this.options||{},e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){const t=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(e.history.prev||"history-prev",t),this.on(e.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this}is_global_event(t){return t&&(t.startsWith("#")||t.startsWith("/"))}add_action(t,e,n={}){e&&"function"==typeof e&&this.on(t,(...o)=>{const i=e(this.state,...o);s.default.run("debug",{component:this,event:t,e:o,state:this.state,newState:i,options:n}),this.setState(i,n)},n)}add_actions(){const t=this.update||{};o.Reflect.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=o.Reflect.getMetadata(e,this);t[n.name]=n.action||this[n.key]}});const e={};Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){return this.global_event||this.is_global_event(t)?s.default.run(t,...e):this._app.run(t,...e)}on(t,e,n){return this.global_event||this.is_global_event(t)?s.default.on(t,e,n):this._app.on(t,e,n)}}i.__isAppRunComponent=!0,e.Component=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o={};e.default=function(t,e,n){const i=o[e]?o[e]:o[e]=new t(n).mount(e);return s.default.createElement("div",{id:e},i.render&&i.render())}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(3);e.createElement=s.createElement,e.Fragment=s.Fragment,e.render=function(t,e){console.assert(!!t),s.updateElement(t,e)}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(1);s.default.webComponent("my-app",class extends s.Component{constructor({num:t,children:e}){super(),this.view=(t=>s.default.createElement("div",null,s.default.createElement("h1",null,t))),this.update={"-1":t=>t-1,"+1":t=>t+1},this.rendered=(t=>{this.children.forEach(t=>{this.element.firstElementChild.appendChild(t)}),this.element.setAttribute("num",t)}),this.children=e,this.state=parseInt(t)}})}])});
//# sourceMappingURL=app.js.map