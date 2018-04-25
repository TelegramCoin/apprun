!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class l{constructor(){this._events={}}on(e,t,n={}){this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})}run(e,...t){const n=this._events[e];console.assert(!!n,"No subscriber for event: "+e),n&&(this._events[e]=n.filter(n=>{let{fn:l,options:a}=n;return a.delay?this.delay(e,l,t,a):l.apply(this,t),!n.options.once}))}once(e,t){this.on(e,t)}delay(e,t,n,l){l._t&&clearTimeout(l._t),l._t=setTimeout(()=>{clearTimeout(l._t),t.apply(this,n)},l.delay)}}t.App=l,t.default=new l},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const l=n(0),a=n(8),o=n(6);t.Component=o.Component;const r=n(5),s=n(2);t.on=s.on,t.update=s.update,t.event=s.update;const u=n(4);l.default.createElement=a.createElement,l.default.render=a.render,l.default.Fragment=a.Fragment,l.default.webComponent=u.default,l.default.start=((e,t,n,l,a)=>{const r=Object.assign(a||{},{render:!0,global_event:!0}),s=new o.Component(t,n,l);return a&&a.rendered&&(s.rendered=a.rendered),s.mount(e,r),s});let i=l.default;const d=e||window;d.app&&d.app.start?i=d.app:(d.app=i,"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>new r.default)),t.default=i,l.default.on("debug",e=>0)}).call(this,n(9))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n={}){return(l,a,o)=>(e=`${a}${e?","+e:""}`,t.Reflect.defineMetadata(`apprun-update:${e}`,{name:e,action:[o.value,n]},l),o)},t.on=function(e,n={}){return function(n,l){e=`${l}${e?","+e:""}`,t.Reflect.defineMetadata(`apprun-update:${e}`,{name:e,key:l},n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(7),a="_props";function o(e){const t=[],n=e=>{null!==e&&void 0!==e&&""!==e&&t.push("function"==typeof e||"object"==typeof e?e:`${e}`)};return e&&e.forEach(e=>{Array.isArray(e)?e.forEach(e=>n(e)):n(e)}),t}t.createElement=function(e,t,...n){const a=o(n);if("string"==typeof e)return{tag:e,props:t,children:a};if(void 0===e&&n)return a;if(Object.getPrototypeOf(e).__isAppRunComponent){const n=t&&t.id||`_${e.name}_${++r}`;return l.default(e,n,t)}return e(t,a)};let r=0;const s={};function u(e,t){if(r=0,null!=t&&e)if(Array.isArray(t))d(e,t);else{const n=t;e.firstElementChild?i(e.firstElementChild,n):e.appendChild(f(n))}}function i(e,t){console.assert(!!e),function(e,t){return e.nodeName===`${t.tag||""}`.toUpperCase()}(e,t)?(d(e,t.children),p(e,t.props)):e.parentNode.replaceChild(f(t),e)}function d(e,t){const n=Math.min(e.childNodes.length,t.length);for(let l=0;l<n;l++){const n=t[l],a=e.childNodes[l];if("string"==typeof n)a.textContent!==n&&(3===a.nodeType?a.textContent=n:e.replaceChild(c(n),a));else{const t=n.props&&n.props.key;if(t)if(a.key===t)i(e.childNodes[l],n);else{const o=t&&s[t];o?(e.replaceChild(o,a),e.appendChild(a),i(e.childNodes[l],n)):(e.appendChild(f(n),a),i(e.childNodes[l],n))}else i(e.childNodes[l],n)}}let l=e.childNodes.length;for(;l>n;)e.removeChild(e.lastChild),l--;if(t.length>n){const l=document.createDocumentFragment();for(let e=n;e<t.length;e++)l.appendChild(f(t[e]));e.appendChild(l)}}function c(e){if(0===e.indexOf("_html:")){const t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function f(e){if(console.assert(null!==e&&void 0!==e),"string"==typeof e)return c(e);if(!e.tag)return c(JSON.stringify(e));const t="svg"===e.tag?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return p(t,e.props),e.children&&e.children.forEach(e=>t.appendChild(f(e))),t}function p(e,t){console.assert(!!e);const n=e[a]||{};t=function(e,t){const n={};return e&&Object.keys(e).forEach(e=>n[e]=""),t&&Object.keys(t).forEach(e=>n[e]=t[e]),n}(n,t),e[a]=t;for(let l in t){const a=t[l];if(n[l]!==a)if("style"===l){e.style.cssText&&(e.style.cssText="");for(let t in a)e.style[t]!==a[t]&&(e.style[t]=a[t])}else if(l.startsWith("data-")){const t=l.substring(5);e.dataset[t]!==a&&(e.dataset[t]=a)}else e[l]!==a&&(e[l]=a),"key"===l&&a&&(s[a]=e)}}t.updateElement=u,t.render=u,t.Fragment=function(e,...t){return o(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.customElement=((e,t={})=>(class extends HTMLElement{constructor(){super();const n=Object.assign({global_event:!0,render:!0,shadow:!1},t);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const l={};Array.from(this.attributes).forEach(e=>l[e.name]=e.value),this.children&&(l.children=Array.from(this.children),l.children.forEach(e=>e.parentElement.removeChild(e))),this._component=new e(l).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}get state(){return this._component.state}})),t.default=((e,n,l)=>{customElements&&customElements.define(e,t.customElement(n,l))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(0),a="//";l.default.on("//",e=>{}),l.default.on("#",e=>{});t.default=class{route(e){if(e||(e="#"),e.indexOf("/")>0){const[t,...n]=e.split("/");l.default.run(t,...n),l.default.run(a,t,...n)}else l.default.run(e),l.default.run(a,e)}constructor(){l.default.on("route",e=>this.route(e)),window.onpopstate=(e=>this.route(location.hash)),this.route(location.hash)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(0),a=n(2);class o{constructor(e,t,n,a){this.state=e,this.view=t,this.update=n,this.options=a,this._app=new l.App,this._history=[],this._history_idx=-1,this.start=((e=null,t={render:!0})=>this.mount(e,Object.assign({},t,{render:!0}))),this.render=(()=>this.view(this.state))}renderState(e){if(!this.view)return;const t=this.view(e);l.default.run("debug",{component:this,state:e,vdom:t||"[vdom is null - no render]"});const n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&l.default.render&&(l.default.render(n,t),this.rendered&&this.rendered(this.state))}setState(e,t){if(e instanceof Promise)e.then(e=>{this.setState(e,t)}).catch(e=>{throw console.error(e),e});else{if(null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=[...this._history,e],this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}}mount(e=null,t){if(console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){const e=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(t.history.prev||"history-prev",e),this.on(t.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this}is_global_event(e){return e&&(e.startsWith("#")||e.startsWith("/"))}add_action(e,t,n={}){t&&"function"==typeof t&&this.on(e,(...a)=>{const o=t(this.state,...a);l.default.run("debug",{component:this,event:e,e:a,state:this.state,newState:o,options:n}),this.setState(o,n)},n)}add_actions(){const e=this.update||{};a.Reflect.getMetadataKeys(this).forEach(t=>{if(t.startsWith("apprun-update:")){const n=a.Reflect.getMetadata(t,this);e[n.name]=n.action||this[n.key]}});const t={};Object.keys(e).forEach(n=>{const l=e[n];("function"==typeof l||Array.isArray(l))&&n.split(",").forEach(e=>t[e.trim()]=l)}),Object.keys(t).forEach(e=>{const n=t[e];"function"==typeof n?this.add_action(e,n):Array.isArray(n)&&this.add_action(e,n[0],n[1])})}run(e,...t){return this.global_event||this.is_global_event(e)?l.default.run(e,...t):this._app.run(e,...t)}on(e,t,n){return this.global_event||this.is_global_event(e)?l.default.on(e,t,n):this._app.on(e,t,n)}}o.__isAppRunComponent=!0,t.Component=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(0),a={};t.default=function(e,t,n){const o=a[t]?a[t]:a[t]=new e(n).mount(t);return l.default.createElement("div",{id:t},o.render&&o.render())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(3);t.createElement=l.createElement,t.Fragment=l.Fragment,t.render=function(e,t){console.assert(!!e),l.updateElement(e,t)}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,function(e,t,n){"use strict";var l=this&&this.__decorate||function(e,t,n,l){var a,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,l);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,n,r):a(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(t,"__esModule",{value:!0});const a=n(1);let o=a.default.createElement;const r=e=>(t,n,...l)=>(n&&Object.keys(n).forEach(t=>{if(t.startsWith("on")&&"function"!=typeof event){const l=n[t];"boolean"==typeof l?n[t]=(n=>e.run(t,n)):"string"==typeof l?n[t]=(t=>e.run(l,t)):l instanceof a.Component?n[t]=(e=>l.run(t,e)):Array.isArray(l)&&(n[t]=(e=>l[0].run(l[1]||t,e)))}}),o(t,n,...l));class s extends a.Component{constructor(){super(...arguments),this.model="world",this.view=(e=>a.default.createElement("div",null,a.default.createElement("h1",null,"Hello: ",e),a.default.createElement("input",{oninput:e=>this.run("input",e)}))),this.hello=(e=>e),this.oninput=((e,t)=>t.target.value)}}l([a.on("#hello")],s.prototype,"hello",void 0),l([a.on("input")],s.prototype,"oninput",void 0),t.HelloComponent=s;class u extends a.Component{constructor(){super(...arguments),this.model="world",this.view=(e=>a.default.createElement("div",null,a.default.createElement("div",null,"Test push state"),a.default.createElement("h1",null,"Hello: ",e),a.default.createElement("input",{oninput:e=>this.run("input",e)}))),this.hello=((e,t)=>t||e),this.oninput=((e,t)=>(history.pushState(null,null,"#hello-pushstate/"+t.target.value),t.target.value))}}l([a.on("#hello-pushstate")],u.prototype,"hello",void 0),l([a.on("input")],u.prototype,"oninput",void 0),t.HelloStateComponent=u;class i extends a.Component{constructor(){super(...arguments),this.model="world",this.view=(e=>a.default.createElement("div",null,a.default.createElement("div",null,"Test delayed event (1s)"),a.default.createElement("h1",null,"Hello: ",e),a.default.createElement("input",{oninput:e=>this.run("input",e)}))),this.hello=(e=>e),this.update={input:[(e,t)=>t.target.value,{delay:1e3,debug:!0}]}}}l([a.on("#hello-delayed")],i.prototype,"hello",void 0),t.HelloDelayComponent=i;class d extends a.Component{constructor(){super(...arguments),this.model="world",this.view=(e=>{a.default.createElement=r(this);const t=a.default.createElement("div",null,a.default.createElement("div",null,"Test directive"),a.default.createElement("h1",null,"Hello: ",e),a.default.createElement("table",null,a.default.createElement("tr",null,a.default.createElement("td",null,"Default event:"),a.default.createElement("td",null,"<input oninput />"),a.default.createElement("td",null,a.default.createElement("input",{value:e,oninput:!0}))),a.default.createElement("tr",null,a.default.createElement("td",null,"Named event:"),a.default.createElement("td",null,"<input oninput='oninput' />"),a.default.createElement("td",null,a.default.createElement("input",{value:e,oninput:"oninput"}))),a.default.createElement("tr",null,a.default.createElement("td",null,"Set target:"),a.default.createElement("td",null,"<input oninput=","{this}"," />"),a.default.createElement("td",null,a.default.createElement("input",{value:e,oninput:this}))),a.default.createElement("tr",null,a.default.createElement("td",null,"Set target and name:"),a.default.createElement("td",null,"<input oninput=",'{[this, "oninput"]}'," />"),a.default.createElement("td",null,a.default.createElement("input",{value:e,oninput:[this,"oninput"]})))));return a.default.createElement=o,t}),this.hello=(e=>e),this.oninput=((e,t)=>t.target.value)}}l([a.on("#hello-directive")],d.prototype,"hello",void 0),l([a.on("oninput")],d.prototype,"oninput",void 0),t.HelloDirectiveComponent=d,t.default=(e=>{(new s).mount(e),(new u).mount(e),(new i).mount(e),(new d).mount(e)})},function(e,t,n){"use strict";function l(e){return Math.round(1e3*Math.random())%e}Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this.data=[],this.backup=null,this.selected=null,this.id=1}buildData(e=1e3){for(var t=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],n=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],a=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],o=[],r=0;r<e;r++)o.push({id:this.id++,label:t[l(t.length)]+" "+n[l(n.length)]+" "+a[l(a.length)]});return o}updateData(e=10){for(let e=0;e<this.data.length;e+=10)this.data[e].label+=" !!!"}delete(e){this.data=this.data.filter((t,n)=>t.id!=e)}run(){this.data=this.buildData(),this.selected=null}add(){this.data=this.data.concat(this.buildData(1e3)),this.selected=null}update(){this.updateData(),this.selected=null}select(e){this.selected=e}hideAll(){this.backup=this.data,this.data=[],this.selected=null}showAll(){this.data=this.backup,this.backup=null,this.selected=null}runLots(){this.data=this.buildData(1e4),this.selected=null}clear(){this.data=[],this.selected=null}swapRows(){if(this.data.length>998){var e=this.data[1];this.data[1]=this.data[998],this.data[998]=e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1);var a,o,r=function(e){a=performance.now(),o=e},s=function(){window.setTimeout(function(){var e=performance.now();console.log(o+" took "+(e-a))},0)};const u=new(n(12).default),i={"#benchmark":e=>e,run:e=>(e.run(),e),add:e=>(e.add(),e),remove(e,t){return t==e.selected&&this.unselect(e),e.delete(t),document.getElementById(t).remove(),e.no_render=!0,e},select:(e,t)=>(e.selected&&(document.getElementById(e.selected).className="",e.selected=null),e.select(t),document.getElementById(t).className="danger",e.no_render=!0,e),updaterow:e=>(e.update(),e),runlots:e=>(e.runLots(),e),clear:e=>(e.clear(),e),swaprows:e=>(e.swapRows(),e)},d=e=>{for(;e;){if("TR"===e.tagName)return e.id;e=e.parentNode}};document.body.addEventListener("click",e=>{const t=e.target;t&&("BUTTON"===t.tagName&&t.id?(e.preventDefault(),r(t.id),c.run(t.id),s()):t.matches(".remove")?(e.preventDefault(),r("remove"),c.run("remove",d(t)),s()):t.matches(".lbl")&&(e.preventDefault(),r("select"),c.run("select",d(t)),s()))});let c=new l.Component(u,e=>{if(e.no_render)return void delete e.no_render;const t=e.data.map(t=>{const n=t.id==e.selected?"danger":"",a=t.id;return l.default.createElement("tr",{className:n,id:a,key:a},l.default.createElement("td",{className:"col-md-1"},a),l.default.createElement("td",{className:"col-md-4"},l.default.createElement("a",{className:"lbl"},t.label)),l.default.createElement("td",{className:"col-md-1"},l.default.createElement("a",{className:"remove"},l.default.createElement("span",{className:"glyphicon glyphicon-remove remove","aria-hidden":"true"}))),l.default.createElement("td",{className:"col-md-6"}))});return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("button",{type:"button",id:"run"},"Create 1,000 rows"),l.default.createElement("button",{type:"button",id:"runlots"},"Create 10,000 rows"),l.default.createElement("button",{type:"button",id:"add"},"Append 1,000 rows"),l.default.createElement("button",{type:"button",id:"updaterow"},"Update every 10th row"),l.default.createElement("button",{type:"button",id:"clear"},"Clear"),l.default.createElement("button",{type:"button",id:"swaprows"},"Swap Rows")),l.default.createElement("br",null),l.default.createElement("table",{className:"table table-hover table-striped test-data",id:"main-table"},l.default.createElement("tbody",null,t)))},i);t.default=(e=>c.mount(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1),a={input:"",selectIdx:-1,selected:[],options:[]},o=e=>l.default.createElement("div",{className:"typeahead multi-selection"},l.default.createElement("div",null,l.default.createElement("ul",{className:"selections"},e.selected.map((e,t)=>l.default.createElement("li",null,e,l.default.createElement("i",{className:"icon-delete",onclick:()=>l.default.run("de-select",t)},"x")))),l.default.createElement("input",{value:e.input,oninput:e=>l.default.run("input",e),onkeyup:e=>l.default.run("keyup",e)})),l.default.createElement("ul",{className:"options"},e.options.map((t,n)=>l.default.createElement("li",{className:n===e.selectIdx?"selected":"",onclick:()=>l.default.run("select",t)},t)))),r={"#multi-selection":e=>e,input:(e,t)=>Object.assign({},e,{input:t.target.value,selectIdx:-1,options:i(t.target.value)}),keyup:(e,t)=>{switch(t.keyCode){case 38:return s(e,e.selectIdx-1);case 40:return s(e,e.selectIdx+1);case 13:return u(e,t.target.value);default:return e}},select:(e,t)=>u(e,t),"de-select":(e,t)=>Object.assign({},e,{selected:[...e.selected.slice(0,t),...e.selected.slice(t+1)]})},s=(e,t)=>(t<0&&(t=0),t>=e.options.length&&(t=e.options.length-1),Object.assign({},e,{selectIdx:t,input:e.options[t]})),u=(e,t)=>Object.assign({},e,{input:"",options:[],selected:[...e.selected,t]}),i=e=>e?[1,2,3,4,5].map(t=>e+t):[];t.default=(e=>l.default.start(e,a,o,r))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1);var a;!function(e){e[e.all=0]="all",e[e.todo=1]="todo",e[e.done=2]="done"}(a||(a={}));const o=({todo:e,idx:t})=>l.default.createElement("li",{onclick:()=>u.run("toggle",t),style:{color:e.done?"green":"red",textDecoration:e.done?"line-through":"none",cursor:"pointer"}},e.value),r=e=>{const t=document.getElementById("new-todo");13===e&&t.value&&(u.run("add",t.value),t.value="")},s={"#todo":e=>e,add:(e,t)=>Object.assign({},e,{todos:[...e.todos,{value:t,done:!1}]}),toggle:(e,t)=>Object.assign({},e,{todos:[...e.todos.slice(0,t),Object.assign({},e.todos[t],{done:!e.todos[t].done}),...e.todos.slice(t+1)]}),filter:(e,t)=>Object.assign({},e,{filter:t}),clear:e=>Object.assign({},e,{todos:[]})};let u=new l.Component({filter:0,todos:[]},e=>{const t=t=>({"font-weight":e.filter===t?"bold":"normal",cursor:"pointer"});return l.default.createElement("div",null,l.default.createElement("h1",null,"Todo"),l.default.createElement("div",null,l.default.createElement("span",null,"Show:"),l.default.createElement("span",null," ",l.default.createElement("a",{style:t(0),onclick:()=>u.run("filter",0)},"All"))," |",l.default.createElement("span",null," ",l.default.createElement("a",{style:t(1),onclick:()=>u.run("filter",1)},"Todo"))," |",l.default.createElement("span",null," ",l.default.createElement("a",{style:t(2),onclick:()=>u.run("filter",2)},"Done"))),l.default.createElement("ul",null,e.todos.filter(t=>0===e.filter||1===e.filter&&!t.done||2===e.filter&&t.done).map((e,t)=>l.default.createElement(o,{todo:e,idx:t}))),l.default.createElement("div",null,l.default.createElement("input",{id:"new-todo",placeholder:"add todo",onkeyup:e=>r(e.keyCode)}),l.default.createElement("button",{onclick:e=>r(13)},"Add"),l.default.createElement("button",{onclick:()=>u.run("clear")},"Clear")),l.default.createElement("br",null),l.default.createElement("div",null,l.default.createElement("button",{onclick:()=>u.run("todo-undo")}," Undo "),l.default.createElement("button",{onclick:()=>u.run("todo-redo")}," Redo ")))},s);t.default=(e=>u.mount(e,{history:{prev:"todo-undo",next:"todo-redo"}}))},function(e,t,n){"use strict";var l=this&&this.__decorate||function(e,t,n,l){var a,o=arguments.length,r=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,l);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,n,r):a(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(t,"__esModule",{value:!0});const a=n(1),o=({id:e,title:t})=>a.default.createElement("div",{className:"panel panel-default"},a.default.createElement("div",{className:"panel-heading"},t,a.default.createElement("span",{className:"pull-right"},a.default.createElement("a",{href:"#",onclick:t=>{t.preventDefault(),a.default.run("#clear-panel",e)}},"x"))),a.default.createElement("div",{className:"panel-body",id:e}));let r=0;class s extends a.Component{constructor(){super(...arguments),this.state=r,this.view=(e=>a.default.createElement("div",null,a.default.createElement("h1",null,e))),this._render=(e=>e)}}l([a.on("render")],s.prototype,"_render",void 0);const u=()=>{const e=`${++r}`,t=(new s).mount(e);a.default.run("#add-panel",{id:e,title:`#${r}`,component:t})};class i extends a.Component{constructor(){super(...arguments),this.state={panels:{}},this.view=(e=>{const t=Object.keys(e.panels).map(t=>e.panels[t]);return a.default.createElement("div",null,a.default.createElement("div",null,a.default.createElement("button",{onclick:()=>this.run("clear")},"Clear All")," ",a.default.createElement("button",{onclick:()=>u()},"Add blade")),a.default.createElement("br",null),a.default.createElement("div",{className:"row panel-container"},t.map(e=>a.default.createElement(o,{id:e.id,title:e.title}))))}),this.rendered=(()=>{Object.keys(this.state.panels).map(e=>this.state.panels[e]).forEach(e=>e&&e.component&&e.component.run("render"));const e=document.querySelector(".panel-container");e.scrollLeft=e.scrollWidth-e.clientWidth}),this.update={"#blade":e=>e,"#add-panel":(e,t,n)=>(e.panels[t.id]=t,n&&n.forEach(t=>delete e.panels[t]),e),"#clear-panel":(e,t)=>(delete e.panels[t],e),clear:e=>(r=0,{panels:{}})}}}t.BladeHostComponent=i,t.default=(e=>(new i).mount(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1),a=()=>{},o={dragging:!1,position:{x:100,y:100},start:{x:0,y:0}},r=e=>{const t={userSelect:"none",cursor:"move",position:"absolute",padding:"50px",border:"1px solid black",color:e.dragging?"gold":"white","background-color":"#3C8D2F",left:`${e.position.x}px`,top:`${e.position.y}px`};return l.default.createElement("div",{onmousedown:e=>l.default.run("drag",e),onmousemove:e=>l.default.run("move",e),onmouseup:e=>l.default.run("drop"),style:t}," Drag me!")},s={"#dragdrop":e=>e,drag:(e,t)=>Object.assign({},e,{dragging:!0,start:{x:t.pageX,y:t.pageY}}),move:(e,t)=>{if(!e.dragging)return Object.assign({},e,{view:a});const n={x:t.pageX,y:t.pageY},l={x:e.position.x+t.pageX-e.start.x,y:e.position.y+t.pageY-e.start.y};return Object.assign({},e,{start:n,position:l})},drop:e=>Object.assign({},e,{dragging:!1})};t.default=(e=>l.default.start(e,o,r,s))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1),a=[],o=({num:e,idx:t})=>l.default.createElement("div",null,l.default.createElement("h1",null,e),l.default.createElement("button",{onclick:()=>l.default.run("-1",t)},"-1"),l.default.createElement("button",{onclick:()=>l.default.run("+1",t)},"+1"),l.default.createElement("button",{onclick:()=>l.default.run("remove-counter",t)},"x")),r=({counters:e})=>e.map((e,t)=>l.default.createElement(o,{num:e,idx:t})),s=e=>(console.log(e),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("button",{onclick:()=>l.default.run("history-prev")}," << "),l.default.createElement("button",{onclick:()=>l.default.run("history-next")}," >> "),l.default.createElement("button",{onclick:()=>l.default.run("add-counter")},"add counter"),l.default.createElement("button",{onclick:()=>l.default.run("remove-counter",e.length-1),disabled:e.length<=0},"remove counter")),l.default.createElement("br",null),l.default.createElement(r,{counters:e}))),u={"#counters":e=>e,"add-counter":e=>[...e,0],"remove-counter":(e,t)=>[...e.slice(0,t),...e.slice(t+1)],"+1":(e,t)=>[...e.slice(0,t),e[t]+1,...e.slice(t+1)],"-1":(e,t)=>[...e.slice(0,t),e[t]-1,...e.slice(t+1)]};t.default=(e=>l.default.start(e,a,s,u,{history:!0}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1),a=e=>l.default.createElement("div",null,l.default.createElement("h1",null,e),l.default.createElement("button",{onclick:()=>l.default.run("DECREASE")},"-1"),l.default.createElement("button",{onclick:()=>l.default.run("INCREASE")},"+1")),o={"#counter":e=>e,INCREASE:e=>e+1,DECREASE:e=>e-1};t.default=(e=>l.default.start(e,0,a,o))},function(e,t,n){"use strict";let l;Object.defineProperty(t,"__esModule",{value:!0}),n(1).default.on("#",()=>{l.innerHTML="<div></div>",$(l.firstChild).load("demo/components/home.html")}),t.default=(e=>l=e)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(1);l.default.on("//",e=>{const t=document.querySelectorAll(".navbar-nav li");for(let e=0;e<t.length;++e)t[e].classList.remove("active");const n=document.querySelector(`[href='${e}']`);n&&n.parentElement.classList.add("active")}),l.default.on("debug",e=>console.log(e));const a=n(20),o=n(19),r=n(18),s=n(17),u=n(16),i=n(15),d=n(14),c=n(13),f=n(11),p=document.getElementById("my-app");[a.default,f.default,u.default,o.default,r.default,s.default,i.default,d.default,c.default].forEach(e=>e(p))}])});
//# sourceMappingURL=app.js.map