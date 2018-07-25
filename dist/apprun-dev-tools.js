!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.apprun=n():e.apprun=n()}(this,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=23)}({0:function(e,n,t){"use strict";(function(e){var t=this&&this.__assign||Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e};Object.defineProperty(n,"__esModule",{value:!0});var o,r=function(){function e(){this._events={}}return e.prototype.on=function(e,n,t){void 0===t&&(t={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:n,options:t})},e.prototype.off=function(e,n){var t=this._events[e];t&&((t=t.filter(function(e){return e.fn!==n})).length?this._events[e]=t:delete this._events[e])},e.prototype.run=function(e){for(var n=this,t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var r=this._events[e];console.assert(!!r,"No subscriber for event: "+e),r&&((r=r.filter(function(o){var r=o.fn,u=o.options;return u.delay?n.delay(e,r,t,u):r.apply(n,t),!o.options.once})).length?this._events[e]=r:delete this._events[e])},e.prototype.once=function(e,n,o){void 0===o&&(o={}),this.on(e,n,t({},o,{once:!0}))},e.prototype.delay=function(e,n,t,o){var r=this;o._t&&clearTimeout(o._t),o._t=setTimeout(function(){clearTimeout(o._t),n.apply(r,t)},o.delay)},e}();n.App=r;var u=e||window;u.app&&u.app.start?o=u.app:(o=new r,u.app=o),n.default=o}).call(this,t(3))},22:function(e,n,t){"use strict";function o(e){return Object.keys(e).map(function(n){return" "+("className"===n?"class":n)+'="'+function(e){return"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e.toString()}(e[n])+'"'}).join("")}function r(e){return e.map(function(e){return u(e)}).join("")}function u(e){if(!e)return"";if(function e(n){for(var t in n)null==n[t]?delete n[t]:"object"==typeof n[t]&&e(n[t])}(e),Array.isArray(e))return r(e);if("string"==typeof e)return e.startsWith("_html:")?e.substring(6):e;if(e.tag){var n=e.props?o(e.props):"",t=e.children?r(e.children):"";return"<"+e.tag+n+">"+t+"</"+e.tag+">"}return"object"==typeof e?JSON.stringify(e):void 0}Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},23:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(22);function u(e){var n=window.open("","_apprun_debug","toolbar=0");n.document.write("<html>\n  <title>AppRun Analyzer | "+document.location.href+'</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n    li { margin-left: 80px; }\n  </style>\n  <body>\n  <div id="main">'+e+"</div>\n  <\/script>\n  </body>\n  </html>"),n.document.close()}window["_apprun-help"]=["",function(){Object.keys(window).forEach(function(e){e.startsWith("_apprun-")&&("_apprun-help"===e?console.log("AppRun Commands:"):console.log("* "+e.substring(8)+": "+window[e][0]))})}];var l=function(){var e={components:{}};return o.default.run("get-components",e),e.components},i=function(e){var n=o.default._events,t={},i=l();Object.keys(i).forEach(function(e){i[e].forEach(function(e){e._actions.forEach(function(n){t[n.name]=t[n.name]||[],t[n.name].push(e)})})});var a=[];if(Object.keys(t).forEach(function(e){a.push({event:e,components:t[e],global:!!n[e]})}),a.sort(function(e,n){return e.event>n.event?1:-1}).map(function(e){return e.event}),e){var c=function(e){var n=function(e){var n=e.components;return o.default.createElement("ul",null,n.map(function(e){return o.default.createElement("li",null,o.default.createElement("div",null,e.constructor.name))}))},t=function(e){var t=e.events,r=e.global;return o.default.createElement("ul",null,t&&t.filter(function(e){return e.global===r}).map(function(e){var t=e.event,r=e.components;return o.default.createElement("li",null,o.default.createElement("div",null,t),o.default.createElement(n,{components:r}))}))};return o.default.createElement("div",null,o.default.createElement("div",null,"GLOBAL EVENTS"),o.default.createElement(t,{events:e,global:!0}),o.default.createElement("div",null,"LOCAL EVENTS"),o.default.createElement(t,{events:e,global:!1}))}(a);u(r.default(c))}else console.log("=== GLOBAL EVENTS ==="),a.filter(function(e){return e.global}).forEach(function(e){var n=e.event,t=e.components;return console.log({event:n},t)}),console.log("=== LOCAL EVENTS ==="),a.filter(function(e){return!e.global}).forEach(function(e){var n=e.event,t=e.components;return console.log({event:n},t)})},a=function(e){var n=l(),t=[];if(Object.keys(n).forEach(function(e){var o="string"==typeof e?document.getElementById(e):e,r=n[e].map(function(e){return{component:e,events:e._actions}});t.push({element:o,comps:r})}),e){var i=function(e){var n=function(e){var n=e.events;return o.default.createElement("ul",null,n&&n.map(function(e){return o.default.createElement("li",null,e.name)}))},t=function(e){var t=e.components;return o.default.createElement("ul",null,t.map(function(e){return o.default.createElement("li",null,o.default.createElement("div",null,e.constructor.name),o.default.createElement(n,{events:e._actions}))}))};return o.default.createElement("ul",null,Object.keys(e).map(function(n){return o.default.createElement("li",null,o.default.createElement("div",null,"#",n),o.default.createElement(t,{components:e[n]}))}))}(n);u(r.default(i))}else t.forEach(function(e){var n=e.element,t=e.comps;return console.log(n,t)})},c=0;o.default.on("debug",function(e){1&c&&e.event&&console.log(e),2&c&&e.vdom&&console.log(e)}),window["_apprun-components"]=["components [print]",function(e){a("print"===e)}],window["_apprun-events"]=["events [print]",function(e){i("print"===e)}],window["_apprun-log"]=["log [event|view] on|off",function(e,n){"on"===e?c=3:"off"===e?c=0:"event"===e?"on"===n?c|=1:"off"===n&&(c&=-2):"view"===e&&("on"===n?c|=2:"off"===n&&(c&=-3)),console.log("* log "+e+" "+(n||""))}],window._apprun=function(e){var n=e[0].split(" ").filter(function(e){return!!e}),t=n[0],o=n.slice(1),r=window["_apprun-"+t];r?r[1].apply(r,o):window["_apprun-help"][1]()},console.info('AppRun DevTools 0.2: type "_apprun `help`" to list all available commands.');var f=!1,s=window.__REDUX_DEVTOOLS_EXTENSION__.connect();s.subscribe(function(e){"START"===e.type?f=!0:"STOP"===e.type?f=!1:e.type}),o.default.on("debug",function(e){if(f&&e.event){var n=e.newState,t={type:e.event,payload:e.e};n instanceof Promise?n.then(function(e){return s.send(t,e)}):s.send(t,n)}})},3:function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t}})});
//# sourceMappingURL=apprun-dev-tools.js.map