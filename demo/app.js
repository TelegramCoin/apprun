!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(){this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.off=function(e,t){var n=this._events[e];n&&((n=n.filter(function(e){return e.fn!==t})).length?this._events[e]=n:delete this._events[e])},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e];console.assert(!!o,"No subscriber for event: "+e),o&&((o=o.filter(function(r){var o=r.fn,u=r.options;return u.delay?t.delay(e,o,n,u):o.apply(t,n),!r.options.once})).length?this._events[e]=o:delete this._events[e])},e.prototype.once=function(e,t,r){void 0===r&&(r={}),this.on(e,t,n({},r,{once:!0}))},e.prototype.delay=function(e,t,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),t.apply(o,n)},r.delay)},e}();t.App=o;var u=e||window;u.app&&u.app.start?r=u.app:(r=new o,u.app=r),t.default=r}).call(this,n(3))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(8),u=n(6);t.Component=u.Component;var a=n(2);t.on=a.on,t.update=a.update,t.event=a.update;var l=n(5);r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,r.default.start=function(e,t,n,r,o){var a=Object.assign(o||{},{render:!0,global_event:!0}),l=new u.Component(t,n,r);return o&&o.rendered&&(l.rendered=o.rendered),l.mount(e,a),l},r.default.route||(r.default.route=l.default,r.default.on("//",function(e){}),r.default.on("#",function(e){}),r.default.on("route",function(e){return l.default(e)}),"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){window.onpopstate=function(){return l.default(location.hash)},l.default(location.hash)})),t.default=r.default,r.default.on("debug",function(e){return 0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n){return void 0===n&&(n={}),function(r,o,u){return e=e||o,t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:o,options:n},r),u}},t.on=function(e,n){return void 0===n&&(n={}),function(r,o){e=e||o,t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:o,options:n},r)}}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o="_props";function u(e){var t=[],n=function(e){null!==e&&void 0!==e&&""!==e&&!1!==e&&t.push("function"==typeof e||"object"==typeof e?e:""+e)};return e&&e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return n(e)}):n(e)}),t}t.createElement=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=u(n);return"string"==typeof e?{tag:e,props:t,children:o}:void 0===e&&n?o:Object.getPrototypeOf(e).__isAppRunComponent?{tag:e,props:t,children:o}:e(t,o)};var a={};function l(e,t,n){if(void 0===n&&(n={}),null!=t&&(t=r.default(t,n),e))if(Array.isArray(t))c(e,t);else{var o=t;e.firstChild?i(e.firstChild,o):e.appendChild(s(o))}}function i(e,t){console.assert(!!e),function(e,t){var n=e.nodeName,r=""+(t.tag||"");return n.toUpperCase()===r.toUpperCase()}(e,t)?(c(e,t.children),f(e,t.props)):e.parentNode.replaceChild(s(t),e)}function c(e,t){for(var n=Math.min(e.childNodes.length,t.length),r=0;r<n;r++){var o=t[r],u=e.childNodes[r];if("string"==typeof o)u.textContent!==o&&(3===u.nodeType?u.textContent=o:e.replaceChild(d(o),u));else{var l=o.props&&o.props.key;if(l)if(u.key===l)i(e.childNodes[r],o);else{var c=l&&a[l];c?(e.replaceChild(c,u),e.appendChild(u),i(e.childNodes[r],o)):(e.appendChild(s(o),u),i(e.childNodes[r],o))}else i(e.childNodes[r],o)}}for(var f=e.childNodes.length;f>n;)e.removeChild(e.lastChild),f--;if(t.length>n){var p=document.createDocumentFragment();for(r=n;r<t.length;r++)p.appendChild(s(t[r]));e.appendChild(p)}}function d(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function s(e,t){if(void 0===t&&(t=!1),console.assert(null!==e&&void 0!==e),"string"==typeof e)return d(e);if(!e.tag||"function"==typeof e.tag)return d(JSON.stringify(e));var n=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return f(n,e.props),e.children&&e.children.forEach(function(e){return n.appendChild(s(e,t))}),n}function f(e,t){console.assert(!!e);var n=e[o]||{};for(var r in t=function(e,t){var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=""}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(n,t),e[o]=t,t){var u=t[r];if("style"===r)for(var l in e.style.cssText&&(e.style.cssText=""),u)e.style[l]!==u[l]&&(e.style[l]=u[l]);else if(r.startsWith("data-")){var i=r.substring(5);e.dataset[i]!==u&&(e.dataset[i]=u)}else e instanceof SVGElement||r.startsWith("role")||r.startsWith("aria-")?e.getAttribute(r)!==u&&e.setAttribute(r,u):(e[r]!==u&&(e[r]=u),"key"===r&&u&&(a[u]=e))}}t.updateElement=l,t.render=l,t.Fragment=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return u(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o="//";t.default=function(e){if(e||(e="#"),e.startsWith("#")){var t=e.split("/"),n=t[0],u=t.slice(1);r.default.run.apply(r.default,[n].concat(u)),r.default.run.apply(r.default,[o,n].concat(u))}else if(e.startsWith("/")){var a=e.split("/"),l=(a[0],a[1]);u=a.slice(2),r.default.run.apply(r.default,["/"+l].concat(u)),r.default.run.apply(r.default,[o,"/"+l].concat(u))}else r.default.run(e),r.default.run(o,e)}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=n(2),a={};o.default.on("get-components",function(e){return e.components=a});var l=function(){function e(e,t,n,u){var a=this;this.state=e,this.view=t,this.update=n,this.options=u,this._app=new o.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),a.mount(e,r({},t,{render:!0}))}}return e.prototype.renderState=function(e){if(this.view){var t=this.view(e);if(o.default.run("debug",{component:this,state:e,vdom:t||"[vdom is null - no render]"}),"object"==typeof document){var n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),o.default.render(n,t,this),this.rendered&&this.rendered(this.state)}}},e.prototype.setState=function(e,t){var n=this;if(void 0===t&&(t={render:!0,history:!1}),e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e}),this._state=e;else{if(this._state=e,null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=this._history.concat([e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){var n=this;if(void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){this.on(t.history.prev||"history-prev",function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0}),this.on(t.history.next||"history-next",function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1})}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),a[e]=a[e]||[],a[e].push(this),this},e.prototype.is_global_event=function(e){return e&&(e.startsWith("#")||e.startsWith("/"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&this.on(e,function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];var l=t.apply(void 0,[r.state].concat(u));o.default.run("debug",{component:r,event:e,e:u,state:r.state,newState:l,options:n}),r.setState(l,n)},n)},e.prototype.add_actions=function(){var e=this,t=this.update||{};u.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=u.Reflect.getMetadata(n,e);t[r.name]=[e[r.key].bind(e),r.options]}});var n={};Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(e)?o.default.run.apply(o.default,[e].concat(n)):(t=this._app).run.apply(t,[e].concat(n))},e.prototype.on=function(e,t,n){return this._actions.push({name:e,fn:t}),this.global_event||this.is_global_event(e)?o.default.on(e,t,n):this._app.on(e,t,n)},e.prototype.unmount=function(){var e=this;this._actions.forEach(function(t){var n=t.name,r=t.fn;e.global_event||e.is_global_event(n)?o.default.off(n,r):e._app.off(n,r)})},e.__isAppRunComponent=!0,e}();t.Component=l},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function e(t,n,u){if(void 0===u&&(u=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(function(t){return e(t,n,u++)});var a=t;return t&&t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(a=function(e,t,n){var u=e.tag,a=e.props,l=e.children,i=a&&a.id,c="_"+u.name+"_"+n;i?c="_"+u.name+"_"+i:i="_"+u.name+"_"+n,t.__componentCache||(t.__componentCache={});var d=t.__componentCache[c];d||(d=t.__componentCache[c]=new u(r({},a,{children:l})).mount(i)),d.mounted&&d.mounted(a,l);var s=d.state,f="";return s instanceof Promise||!d.view||(f=d.view(s),d.rendered&&setTimeout(function(){return d.rendered(s)})),o.default.createElement("div",{id:i},f)}(t,n,u++)),a&&a.children&&(a.children=a.children.map(function(t){return e(t,n,u++)})),a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.createElement=r.createElement,t.Fragment=r.Fragment,t.render=function(e,t,n){r.updateElement(e,t,n)}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=[{id:"yellow",rot:0},{id:"green",rot:60},{id:"magenta",rot:120},{id:"red",rot:180},{id:"cyan",rot:240},{id:"blue",rot:300}],a=new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=0,t.view=function(e){return o.default.createElement("div",{className:"view"},o.default.createElement("h1",null,"AppRun SVG Carousel"),o.default.createElement("svg",{width:"380",height:"380",viewBox:"-190,-190,380,380"},o.default.createElement("g",{id:"carousel",transform:"rotate("+e+")"},u.map(function(e){return o.default.createElement("polygon",{id:e.id,points:"-50,-88 0,-175 50,-88",transform:"rotate("+e.rot+")","stroke-width":"3"})}))),o.default.createElement("button",{onclick:function(){return t.run("rot+60")}},"Rotate Clockwise"),o.default.createElement("button",{onclick:function(){return t.run("rot-60")}},"Rotate Anticlockwise"),o.default.createElement("button",{onclick:function(){return t.run("reset")}},"Reset"),o.default.createElement("div",null,"It is a reimplementation of ",o.default.createElement("a",{href:"https://github.com/snabbdom/snabbdom/tree/master/examples/carousel-svg"},"a snabbdom example"),"."))},t.update={"rot+60":function(e){return e+60},"rot-60":function(e){return e-60},reset:function(e){return 0},"#svg":function(e){return e}},t}return r(t,e),t}(o.Component));t.default=function(e){return a.mount(e)}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,u=arguments.length,a=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(u<3?o(a):u>3?o(t,n,a):o(t,n))||a);return u>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=u.default.createElement,l=function(e){return function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return n&&Object.keys(n).forEach(function(t){if(t.startsWith("on")&&"function"!=typeof event){var r=n[t];"boolean"==typeof r?n[t]=function(n){return e.run(t,n)}:"string"==typeof r?n[t]=function(t){return e.run(r,t)}:r instanceof u.Component?n[t]=function(e){return r.run(t,e)}:Array.isArray(r)&&(n[t]=function(e){return r[0].run(r[1]||t,e)})}}),a.apply(void 0,[t,n].concat(r))}},i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){return u.default.createElement("div",null,u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("input",{oninput:function(e){return t.run("input",e)}}))},t.hello=function(e){return e},t.oninput=function(e,t){return t.target.value},t}return r(t,e),o([u.on("#hello")],t.prototype,"hello",void 0),o([u.on("input")],t.prototype,"oninput",void 0),t}(u.Component);t.HelloComponent=i;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){return u.default.createElement("div",null,u.default.createElement("div",null,"Test push state"),u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("input",{oninput:function(e){return t.run("input",e)}}))},t.hello=function(e,t){return t||e},t.oninput=function(e,t){return history.pushState(null,null,"#hello-pushstate/"+t.target.value),t.target.value},t}return r(t,e),o([u.on("#hello-pushstate")],t.prototype,"hello",void 0),o([u.on("input")],t.prototype,"oninput",void 0),t}(u.Component);t.HelloStateComponent=c;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){return u.default.createElement("div",null,u.default.createElement("div",null,"Test delayed event (1s)"),u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("input",{oninput:function(e){return t.run("input",e)}}))},t.hello=function(e){return e},t.update={input:[function(e,t){return t.target.value},{delay:1e3,debug:!0}]},t}return r(t,e),o([u.on("#hello-delayed")],t.prototype,"hello",void 0),t}(u.Component);t.HelloDelayComponent=d;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.model="world",t.view=function(e){u.default.createElement=l(t);var n=u.default.createElement("div",null,u.default.createElement("div",null,"Test directive"),u.default.createElement("h1",null,"Hello: ",e),u.default.createElement("table",null,u.default.createElement("tr",null,u.default.createElement("td",null,"Default event:"),u.default.createElement("td",null,"<input oninput />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:!0}))),u.default.createElement("tr",null,u.default.createElement("td",null,"Named event:"),u.default.createElement("td",null,"<input oninput='oninput' />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:"oninput"}))),u.default.createElement("tr",null,u.default.createElement("td",null,"Set target:"),u.default.createElement("td",null,"<input oninput=","{this}"," />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:t}))),u.default.createElement("tr",null,u.default.createElement("td",null,"Set target and name:"),u.default.createElement("td",null,"<input oninput=",'{[this, "oninput"]}'," />"),u.default.createElement("td",null,u.default.createElement("input",{value:e,oninput:[t,"oninput"]})))));return u.default.createElement=a,n},t.hello=function(e){return e},t.oninput=function(e,t){return t.target.value},t}return r(t,e),o([u.on("#hello-directive")],t.prototype,"hello",void 0),o([u.on("oninput")],t.prototype,"oninput",void 0),t}(u.Component);t.HelloDirectiveComponent=s,t.default=function(e){(new i).mount(e),(new c).mount(e),(new d).mount(e),(new s).mount(e)}},function(e,t,n){"use strict";function r(e){return Math.round(1e3*Math.random())%e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.data=[],this.backup=null,this.selected=null,this.id=1}return e.prototype.buildData=function(e){void 0===e&&(e=1e3);for(var t=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],n=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],o=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],u=[],a=0;a<e;a++)u.push({id:this.id++,label:t[r(t.length)]+" "+n[r(n.length)]+" "+o[r(o.length)]});return u},e.prototype.updateData=function(e){void 0===e&&(e=10);for(var t=0;t<this.data.length;t+=10)this.data[t].label+=" !!!"},e.prototype.delete=function(e){this.data=this.data.filter(function(t,n){return t.id!=e}),this.selected=null},e.prototype.run=function(){this.data=this.buildData(),this.selected=null},e.prototype.add=function(){this.data=this.data.concat(this.buildData(1e3)),this.selected=null},e.prototype.update=function(){this.updateData(),this.selected=null},e.prototype.select=function(e){this.selected=e},e.prototype.hideAll=function(){this.backup=this.data,this.data=[],this.selected=null},e.prototype.showAll=function(){this.data=this.backup,this.backup=null,this.selected=null},e.prototype.runLots=function(){this.data=this.buildData(1e4),this.selected=null},e.prototype.clear=function(){this.data=[],this.selected=null},e.prototype.swapRows=function(){if(this.data.length>998){var e=this.data[1];this.data[1]=this.data[998],this.data[998]=e}},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,u=n(1),a=function(e){r=performance.now(),o=e},l=function(){window.setTimeout(function(){var e=performance.now();console.log(o+" took "+(e-r))},0)},i=new(n(11).default),c={"#benchmark":function(e){return e},run:function(e){return e.run(),e},add:function(e){return e.add(),e},remove:function(e,t){e.delete(t),document.getElementById(t).remove()},select:function(e,t){e.selected&&(document.getElementById(e.selected).className="",e.selected=null),e.select(t),document.getElementById(t).className="danger"},updaterow:function(e){return e.update(),e},runlots:function(e){return e.runLots(),e},clear:function(e){return e.clear(),e},swaprows:function(e){return e.swapRows(),e}},d=function(e){for(;e;){if("TR"===e.tagName)return e.id;e=e.parentNode}};document.body.addEventListener("click",function(e){var t=e.target;t&&("BUTTON"===t.tagName&&t.id?(e.preventDefault(),a(t.id),s.run(t.id),l()):t.matches(".remove")?(e.preventDefault(),a("remove"),s.run("remove",d(t)),l()):t.matches(".lbl")&&(e.preventDefault(),a("select"),s.run("select",d(t)),l()))});var s=new u.Component(i,function(e){var t=e.data.map(function(t){var n=t.id==e.selected?"danger":"",r=t.id;return u.default.createElement("tr",{className:n,id:r,key:r},u.default.createElement("td",{className:"col-md-1"},r),u.default.createElement("td",{className:"col-md-4"},u.default.createElement("a",{className:"lbl"},t.label)),u.default.createElement("td",{className:"col-md-1"},u.default.createElement("a",{className:"remove"},u.default.createElement("span",{className:"glyphicon glyphicon-remove remove","aria-hidden":"true"}))),u.default.createElement("td",{className:"col-md-6"}))});return u.default.createElement("div",null,u.default.createElement("div",null,u.default.createElement("button",{type:"button",id:"run"},"Create 1,000 rows"),u.default.createElement("button",{type:"button",id:"runlots"},"Create 10,000 rows"),u.default.createElement("button",{type:"button",id:"add"},"Append 1,000 rows"),u.default.createElement("button",{type:"button",id:"updaterow"},"Update every 10th row"),u.default.createElement("button",{type:"button",id:"clear"},"Clear"),u.default.createElement("button",{type:"button",id:"swaprows"},"Swap Rows")),u.default.createElement("br",null),u.default.createElement("table",{className:"table table-hover table-striped test-data",id:"main-table"},u.default.createElement("tbody",null,t)))},c);t.default=function(e){return s.mount(e)}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u={input:"",selectIdx:-1,selected:[],options:[]},a=function(e){return o.default.createElement("div",{className:"typeahead multi-selection"},o.default.createElement("div",null,o.default.createElement("ul",{className:"selections"},e.selected.map(function(e,t){return o.default.createElement("li",null,e,o.default.createElement("i",{className:"icon-delete",onclick:function(){return o.default.run("de-select",t)}},"x"))})),o.default.createElement("input",{value:e.input,oninput:function(e){return o.default.run("input",e)},onkeyup:function(e){return o.default.run("keyup",e)}})),o.default.createElement("ul",{className:"options"},e.options.map(function(t,n){return o.default.createElement("li",{className:n===e.selectIdx?"selected":"",onclick:function(){return o.default.run("select",t)}},t)})))},l={"#multi-selection":function(e){return e},input:function(e,t){return r({},e,{input:t.target.value,selectIdx:-1,options:d(t.target.value)})},keyup:function(e,t){switch(t.keyCode){case 38:return i(e,e.selectIdx-1);case 40:return i(e,e.selectIdx+1);case 13:return c(e,t.target.value);default:return e}},select:function(e,t){return c(e,t)},"de-select":function(e,t){return r({},e,{selected:e.selected.slice(0,t).concat(e.selected.slice(t+1))})}},i=function(e,t){return t<0&&(t=0),t>=e.options.length&&(t=e.options.length-1),r({},e,{selectIdx:t,input:e.options[t]})},c=function(e,t){return r({},e,{input:"",options:[],selected:e.selected.concat([t])})},d=function(e){return e?[1,2,3,4,5].map(function(t){return e+t}):[]};t.default=function(e){return o.default.start(e,u,a,l)}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o,u=n(1);!function(e){e[e.all=0]="all",e[e.todo=1]="todo",e[e.done=2]="done"}(o||(o={}));var a=function(e){var t=e.todo,n=e.idx;return u.default.createElement("li",{onclick:function(){return c.run("toggle",n)},style:{color:t.done?"green":"red",textDecoration:t.done?"line-through":"none",cursor:"pointer"}},t.value)},l=function(e){var t=document.getElementById("new-todo");13===e&&t.value&&(c.run("add",t.value),t.value="")},i={"#todo":function(e){return e},add:function(e,t){return r({},e,{todos:e.todos.concat([{value:t,done:!1}])})},toggle:function(e,t){return r({},e,{todos:e.todos.slice(0,t).concat([r({},e.todos[t],{done:!e.todos[t].done})],e.todos.slice(t+1))})},filter:function(e,t){return r({},e,{filter:t})},clear:function(e){return r({},e,{todos:[]})}},c=new u.Component({filter:0,todos:[]},function(e){var t=function(t){return{"font-weight":e.filter===t?"bold":"normal",cursor:"pointer"}};return u.default.createElement("div",null,u.default.createElement("h1",null,"Todo"),u.default.createElement("div",null,u.default.createElement("span",null,"Show:"),u.default.createElement("span",null," ",u.default.createElement("a",{style:t(0),onclick:function(){return c.run("filter",0)}},"All"))," |",u.default.createElement("span",null," ",u.default.createElement("a",{style:t(1),onclick:function(){return c.run("filter",1)}},"Todo"))," |",u.default.createElement("span",null," ",u.default.createElement("a",{style:t(2),onclick:function(){return c.run("filter",2)}},"Done"))),u.default.createElement("ul",null,e.todos.filter(function(t){return 0===e.filter||1===e.filter&&!t.done||2===e.filter&&t.done}).map(function(e,t){return u.default.createElement(a,{todo:e,idx:t})})),u.default.createElement("div",null,u.default.createElement("input",{id:"new-todo",placeholder:"add todo",onkeyup:function(e){return l(e.keyCode)}}),u.default.createElement("button",{onclick:function(e){return l(13)}},"Add"),u.default.createElement("button",{onclick:function(){return c.run("clear")}},"Clear")),u.default.createElement("br",null),u.default.createElement("div",null,u.default.createElement("button",{onclick:function(){return c.run("todo-undo")}}," Undo "),u.default.createElement("button",{onclick:function(){return c.run("todo-redo")}}," Redo ")))},i);t.default=function(e){return c.mount(e,{history:{prev:"todo-undo",next:"todo-redo"}})}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,u=arguments.length,a=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(u<3?o(a):u>3?o(t,n,a):o(t,n))||a);return u>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=function(e){var t=e.id,n=e.title;return u.default.createElement("div",{className:"panel panel-default"},u.default.createElement("div",{className:"panel-heading"},n,u.default.createElement("span",{className:"pull-right"},u.default.createElement("a",{href:"#",onclick:function(e){e.preventDefault(),u.default.run("#clear-panel",t)}},"x"))),u.default.createElement("div",{className:"panel-body",id:t}))},l=0,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=l,t.view=function(e){return u.default.createElement("div",null,u.default.createElement("h1",null,e))},t._render=function(e){return e},t}return r(t,e),o([u.on("render")],t.prototype,"_render",void 0),t}(u.Component),c=function(){var e=""+ ++l,t=(new i).mount(e);u.default.run("#add-panel",{id:e,title:"#"+l,component:t})},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={panels:{}},t.view=function(e){var n=Object.keys(e.panels).map(function(t){return e.panels[t]});return u.default.createElement("div",null,u.default.createElement("div",null,u.default.createElement("button",{onclick:function(){return t.run("clear")}},"Clear All")," ",u.default.createElement("button",{onclick:function(){return c()}},"Add blade")),u.default.createElement("br",null),u.default.createElement("div",{className:"row panel-container"},n.map(function(e){return u.default.createElement(a,{id:e.id,title:e.title})})))},t.rendered=function(){Object.keys(t.state.panels).map(function(e){return t.state.panels[e]}).forEach(function(e){return e&&e.component&&e.component.run("render")});var e=document.querySelector(".panel-container");e.scrollLeft=e.scrollWidth-e.clientWidth},t.update={"#blade":function(e){return e},"#add-panel":function(e,t,n){return e.panels[t.id]=t,n&&n.forEach(function(t){return delete e.panels[t]}),e},"#clear-panel":function(e,t){return delete e.panels[t],e},clear:function(e){return l=0,{panels:{}}}},t}return r(t,e),t}(u.Component);t.BladeHostComponent=d,t.default=function(e){return(new d).mount(e)}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=function(){},a={dragging:!1,position:{x:100,y:100},start:{x:0,y:0}},l=function(e){var t={userSelect:"none",cursor:"move",position:"absolute",padding:"50px",border:"1px solid black",color:e.dragging?"gold":"white","background-color":"#3C8D2F",left:e.position.x+"px",top:e.position.y+"px"};return o.default.createElement("div",{onmousedown:function(e){return o.default.run("drag",e)},onmousemove:function(e){return o.default.run("move",e)},onmouseup:function(e){return o.default.run("drop")},style:t}," Drag me!")},i={"#dragdrop":function(e){return e},drag:function(e,t){return r({},e,{dragging:!0,start:{x:t.pageX,y:t.pageY}})},move:function(e,t){if(!e.dragging)return r({},e,{view:u});var n={x:t.pageX,y:t.pageY},o={x:e.position.x+t.pageX-e.start.x,y:e.position.y+t.pageY-e.start.y};return r({},e,{start:n,position:o})},drop:function(e){return r({},e,{dragging:!1})}};t.default=function(e){return o.default.start(e,a,l,i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=[],u=function(e){var t=e.num,n=e.idx;return r.default.createElement("div",null,r.default.createElement("h1",null,t),r.default.createElement("button",{onclick:function(){return r.default.run("-1",n)}},"-1"),r.default.createElement("button",{onclick:function(){return r.default.run("+1",n)}},"+1"),r.default.createElement("button",{onclick:function(){return r.default.run("remove-counter",n)}},"x"))},a=function(e){return e.counters.map(function(e,t){return r.default.createElement(u,{num:e,idx:t})})},l=function(e){return console.log(e),r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("button",{onclick:function(){return r.default.run("history-prev")}}," << "),r.default.createElement("button",{onclick:function(){return r.default.run("history-next")}}," >> "),r.default.createElement("button",{onclick:function(){return r.default.run("add-counter")}},"add counter"),r.default.createElement("button",{onclick:function(){return r.default.run("remove-counter",e.length-1)},disabled:e.length<=0},"remove counter")),r.default.createElement("br",null),r.default.createElement(a,{counters:e}))},i={"#counters":function(e){return e},"add-counter":function(e){return e.concat([0])},"remove-counter":function(e,t){return e.slice(0,t).concat(e.slice(t+1))},"+1":function(e,t){return e.slice(0,t).concat([e[t]+1],e.slice(t+1))},"-1":function(e,t){return e.slice(0,t).concat([e[t]-1],e.slice(t+1))}};t.default=function(e){return r.default.start(e,o,l,i,{history:!0})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return r.default.createElement("div",null,r.default.createElement("h1",null,e),r.default.createElement("button",{onclick:function(){return r.default.run("DECREASE")}},"-1"),r.default.createElement("button",{onclick:function(){return r.default.run("INCREASE")}},"+1"))},u={"#counter":function(e){return e},INCREASE:function(e){return e+1},DECREASE:function(e){return e-1}};t.default=function(e){return r.default.start(e,0,o,u)}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),n(1).default.on("#",function(){r.innerHTML="<div></div>",$(r.firstChild).load("demo/components/home.html")}),t.default=function(e){return r=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(1).default.on("//",function(e){for(var t=document.querySelectorAll(".navbar-nav li"),n=0;n<t.length;++n)t[n].classList.remove("active");var r=document.querySelector("[href='"+e+"']");r&&r.parentElement.classList.add("active")});var r=n(19),o=n(18),u=n(17),a=n(16),l=n(15),i=n(14),c=n(13),d=n(12),s=n(10),f=n(9),p=document.getElementById("my-app");[r.default,s.default,l.default,o.default,u.default,a.default,i.default,c.default,d.default,f.default].forEach(function(e){return e(p)})}])});
//# sourceMappingURL=app.js.map