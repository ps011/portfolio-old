/*!
 * techdom: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)M.push(arguments[f]);for(;M.length>0;){var c=M.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)M.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&M.push(f);t.class=M.join(" "),M.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],k):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"techdom";return L||(L=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),R[s].u(function i(n){var t=j(n),e=t.s,r=p(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!R[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),R[s]=N(s,u,n,i,c,o,r)}if(window.customStyleShim)return R[s].l=window.customStyleShim,R[s].l.initShim().then(t);t()})}this&&this.v;var i=this&&this.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=this&&this.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,k:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=this,f=function(){};function applyPolyfills(n){n.j=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,g=void 0,M=function(n,t){S[m]=n,S[m+1]=t,2===(m+=2)&&(g?g(e):O())},k=(y=void 0!==n?n:void 0)||{},j=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().T("vertx");return void 0!==(b=n.W||n.P)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.U=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.B=function(n){g=n},L.I=function(n){M=n},L.G=M,L.Y=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.Y(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Z||1===r.Z&&!t.K.J)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.V.head;if(e.J)if(1===r.Z)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.X.get(f);if(s||t.X.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.nn("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.tn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},l=function(n){return null!=n},v=function(n){return n.toLowerCase()},p=function(n){return v(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},d=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.en(t);f&&f.rn&&f.rn[e]?y(t,e,i):"ref"!==e&&(y(t,e,null==i?"":i),null!=i&&!1!==i||n.K.in(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",v(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",v(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.K.on(t,e)&&(null==i||!1===i))&&n.K.in(t,e);else e=v(e)in t?v(e.substring(2)):v(e[2])+e.substring(3),i?i!==r&&n.K.un(t,e,i):n.K.fn(t,e);else if(r!==i){var c=h(r),a=h(i),s=c.filter(function(n){return!a.includes(n)}),l=h(t.className).filter(function(n){return!s.includes(n)}),p=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,p),t.className=l.join(" ")}},h=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},y=function(n,t,e){try{n[t]=e}catch(n){}},w=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||d(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||d(n,o,i,u[i],f[i],r,e.o)},m=!1,b=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){b(n,t)}))},g=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},M=[],k={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},j=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{cn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={an:e[1],sn:!!e[2],cn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,ln:e[4]};return{t:r,s:i,rn:Object.assign({},c),Z:u,vn:f?f.map($):void 0}},$=function(n){return{pn:n[0],dn:n[1],hn:!!n[2],yn:!!n[3],wn:!!n[4]}},A=function(n,t){return l(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},E=function(n,t,e){n.mn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.gn?n.queue.write(function(){return C(n,t,e)}):n.queue.tick(function(){return C(n,t,e)}))},C=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.bn.delete(r),n.Mn.has(r))return[3,12];if(a=n.kn.get(r))return[3,6];if((s=n.jn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){C(n,r,f)}),[2];if(!(a=T(n,r,n.$n.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.k(),o.label=3;case 3:return[3,5];case 4:return i=o.k(),n.An(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.k(),o.label=9;case 9:return[3,11];case 10:return u=o.k(),n.An(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.En.host,f=r.En.encapsulation,c="shadow"===f&&n.K.J,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.Cn(n,n.K,r,i);var s=i["s-sc"];s&&(n.K.Sn(i,t(s,!0)),"scoped"===f&&n.K.Sn(i,t(s)))}if(o.render||o.hostData||u){n.On=!0;var l=o.render&&o.render();n.On=!1;var v=e(null,void 0,l),p=n._n.get(i)||{};p.i=a,n._n.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.On=!1,n.An(t,8,i,!0)}})(n,n.en(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},S=function(n,t,e,r,i,o,u){(u=n.xn.get(t))||n.xn.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.kn.get(t))){var c=u[x+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.On&&t["s-rn"]&&E(n,t,i)}},O=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},_=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},x="wc-",T=function(n,t,e,r,i,o){try{i=new(o=n.en(t).En),function(n,t,e,r,i,o){n.Tn.set(r,e),n.xn.has(e)||n.xn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n.xn.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Wn)&&l(c=f[t.attr])&&(a[i]=A(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=A(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[x+i]=t.watchCallbacks.slice()),_(r,i,function s(t){return(t=n.xn.get(n.Tn.get(this)))&&t[i]},function v(e,r){(r=n.Tn.get(this))&&(t.state||t.mutable)&&S(n,r,i,e,u)})}else if(t.elementRef)O(r,i,e);else if(t.context){var p=n.Pn(t.context);void 0!==p&&O(r,i,p.getContext&&p.getContext(e)||p)}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r)}catch(e){i={},n.An(e,7,t,!0)}return n.kn.set(t,i),i},W=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.en(r)&&!n.Nn.has(r))return!1;if(!W(n,r))return!1}}return!0},P=function(n,t,e,r,i,o){if(n.mn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Rn.length&&!n.mn.size)for(;o=n.Rn.shift();)o()},N=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},p=r[n]=r[n]||{},d=function(n,t,e){var r=new WeakMap,i={V:e,J:!!e.documentElement.attachShadow,Ln:!1,Dn:function(n){return n.nodeType},nn:function(n){return e.createElement(n)},Fn:function(n,t){return e.createElementNS(n,t)},Hn:function(n){return e.createTextNode(n)},qn:function(n){return e.createComment(n)},tn:function(n,t,e){return n.insertBefore(t,e)},Un:function(n){return n.remove()},Bn:function(n,t){return n.appendChild(t)},Sn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},In:function(n){return n.childNodes},Gn:function(n){return n.parentNode},Qn:function(n){return n.nextSibling},Yn:function(n){return n.previousSibling},Zn:function(n){return v(n.nodeName)},zn:function(n){return n.textContent},Jn:function(n,t){return n.textContent=t},Kn:function(n,t){return n.getAttribute(t)},Vn:function(n,t,e){return n.setAttribute(t,e)},in:function(n,t){return n.removeAttribute(t)},on:function(n,t){return n.hasAttribute(t)},Xn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},nt:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.tt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},un:function(t,e,o,u,f,c,a,s,l){var v=t,p=o,d=r.get(t);l=e,d&&d[l]&&d[l](),"object"==typeof c&&(v=c),v&&(a=i.Ln?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,p,a),d||r.set(t,d={}),d[l]=function(){v&&n.rel(v,e,p,a),d[l]=null})},fn:function(n,t,e){(e=r.get(n))&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},et:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},tt:function(n,t){return(t=i.Gn(n))&&11===i.Dn(t)?t.host:t},rt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},it:function(n,t){return n.attachShadow(t)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),i}(p,r,i),h=d.V.documentElement,y=r["s-defined"]=r["s-defined"]||{},M={K:d,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.Mn.delete(e),n.Nn.has(e)||(n.ot=!0,n.mn.add(e),n.Nn.set(e,!0),function(n,t,e){for(e=t;e=n.K.tt(e);)if(n.ut(e)){n.ft.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.$n.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.Xn(e)),e["s-cr"]||n.Kn(e,"ssrv")||n.J&&1===t.Z||(e["s-cr"]=n.Hn(""),e["s-cr"]["s-cn"]=!0,n.tn(e,e["s-cr"],n.In(e)[0])),n.J||1!==t.Z||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),1===t.Z&&n.J&&!e.shadowRoot&&n.it(e,{mode:"open"}),r={Wn:{}},t.rn&&Object.keys(t.rn).forEach(function(o){(i=t.rn[o].cn)&&(r.Wn[i]=n.Kn(e,i))}),r}(n.K,t,e)),n.ct(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.at&&function(n,t){for(;t;){if(!n.Gn(t))return 9!==n.Dn(t);t=n.Gn(t)}}(n.K,t)&&(n.Mn.set(t,!0),P(n,t),b(n._n.get(t),!0),n.K.fn(t),n.st.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.lt,n.$n].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(W(n,t)&&(i=n.kn.get(t))&&!n.Mn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ft.set(t,!0),(u=n.vt.has(t))||(n.vt.set(t,!0),t["s-ld"]=void 0,n.K.Sn(t,e));try{b(n._n.get(t)),(o=n.lt.get(t))&&(o.forEach(function(n){return n(t)}),n.lt.delete(t)),!u&&i.componentDidLoad?i.componentDidLoad():u&&i.componentDidUpdate&&i.componentDidUpdate()}catch(e){n.An(e,4,t)}P(n,t)}})(n,this,r)},e.forceUpdate=function(){E(n,this,i)},t.rn){var o=Object.entries(t.rn),u={};o.forEach(function(n){var t=n[0],e=n[1].cn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[v(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.an&&_(e,i,function t(){return(n.xn.get(this)||{})[i]},function t(e){S(n,this,i,A(o.ln,e),r)})})}(n,0,e,i)}}(M,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.rn).map(function(n){return n.cn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},en:function(n){return a[d.Zn(n)]},Pn:function(n){return t[n]},isClient:!0,ut:function(n){return!(!y[d.Zn(n)]&&!M.en(n))},An:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=g(p,r),ct:function(n,t){var e=!d.J,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.En=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Z,e.style,e.styleMode)}catch(t){console.error(t),n.En=function i(){}}E(M,t,f)})},On:!1,gn:!1,at:!1,Cn:s,jn:new WeakMap,X:new WeakMap,Nn:new WeakMap,st:new WeakMap,vt:new WeakMap,ft:new WeakMap,Tn:new WeakMap,$n:new WeakMap,kn:new WeakMap,Mn:new WeakMap,bn:new WeakMap,lt:new WeakMap,pt:new WeakMap,_n:new WeakMap,xn:new WeakMap,mn:new Set,Rn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,p.h=e,p.Context=t,p.onReady=function(){return new Promise(function(n){return M.queue.write(function(){return M.mn.size?M.Rn.push(n):n()})})},M.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,v,p,d,h,y,b,g,M){if(g=v.vchildren[p],e||(o=!0,"slot"===g.vtag&&(r&&t.Sn(d,r+"-s"),g.vchildren?g.dt=!0:g.ht=!0)),l(g.vtext))g.i=t.Hn(g.vtext);else if(g.ht)g.i=t.Hn("");else{if(y=g.i=m||"svg"===g.vtag?t.Fn("http://www.w3.org/2000/svg",g.vtag):t.nn(g.dt?"slot-fb":g.vtag),n.ut(y)&&n.ft.delete(c),m="svg"===g.vtag||"foreignObject"!==g.vtag&&m,w(n,null,g,m),l(r)&&y["s-si"]!==r&&t.Sn(y,y["s-si"]=r),g.vchildren)for(h=0;h<g.vchildren.length;++h)(b=a(i,g,h,y))&&t.Bn(y,b);"svg"===g.vtag&&(m=!1)}return g.i["s-hn"]=f,(g.dt||g.ht)&&(g.i["s-sr"]=!0,g.i["s-cr"]=u,g.i["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===g.vtag&&i.i&&s(i.i)),g.i},s=function(e,r,i,u){n.at=!0;var c=t.In(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Un(u),t.tn(y(u),u,h(u)),t.Un(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.at=!1},v=function(n,e,r,i,o,u,c,s){var v=n["s-cr"];for((c=v&&t.Gn(v)||n).shadowRoot&&t.Zn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=l(i[o].vtext)?t.Hn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.tn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)l(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Un(o["s-ol"]):s(o,!0),t.Un(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Gn(n["s-ol"]?n["s-ol"]:n)},b=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;m=r.i&&l(t.tt(r.i))&&void 0!==r.i.ownerSVGElement,m="svg"===r.vtag||"foreignObject"!==r.vtag&&m,l(r.vtext)?(i=o["s-cr"])?t.Jn(t.Gn(i),r.vtext):e.vtext!==r.vtext&&t.Jn(o,r.vtext):("slot"!==r.vtag&&w(n,e,r,m),l(u)&&l(f)?function(n,e,r,i,o,u,f,c){for(var w=0,m=0,g=e.length-1,M=e[0],k=e[g],j=i.length-1,$=i[0],A=i[j];w<=g&&m<=j;)if(null==M)M=e[++w];else if(null==k)k=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--j];else if(d(M,$))b(M,$),M=e[++w],$=i[++m];else if(d(k,A))b(k,A),k=e[--g],A=i[--j];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(M.i)),b(M,A),t.tn(n,M.i,t.Qn(k.i)),M=e[++w],A=i[--j];else if(d(k,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(k.i)),b(k,$),t.tn(n,k.i,M.i),k=e[--g],$=i[++m];else{for(o=null,u=w;u<=g;++u)if(e[u]&&l(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}l(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(b(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.tn(y(M.i),f,h(M.i))}w>g?v(n,null==i[j+1]?null:i[j+1].i,r,i,m,j):m>j&&p(e,w,g)}(o,u,r,f):l(f)?(l(e.vtext)&&t.Jn(o,""),v(o,null,r,f,0,f.length-1)):l(u)&&p(u,0,u.length-1)),m&&"svg"===r.vtag&&(m=!1)},g=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.In(n)).length;i<o;i++)if(e=r[i],1===t.Dn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Dn(r[u]),""!==f){if(1===c&&f===t.Kn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.zn(r[u]).trim()){e.hidden=!0;break}g(e)}},M=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.In(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.In(t.Gn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Dn(o))||8===l)&&""===s||1===l&&null===t.Kn(o,"slot")&&""===s||1===l&&t.Kn(o,"slot")===s)&&(M.some(function(n){return n.yt===o})||(i=!0,o["s-sn"]=s,M.push({wt:r,yt:o})));1===t.Dn(r)&&k(r)}};return function(a,s,l,v,p,d,h,y,w,m,j,$){if(c=a,f=t.Zn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,b(s,l),o){for(k(l.i),h=0;h<M.length;h++)(y=M[h]).yt["s-ol"]||((w=t.Hn(""))["s-nr"]=y.yt,t.tn(t.Gn(y.yt),y.yt["s-ol"]=w,y.yt));for(n.at=!0,h=0;h<M.length;h++){for(y=M[h],j=t.Gn(y.wt),$=t.Qn(y.wt),w=y.yt["s-ol"];w=t.Yn(w);)if((m=w["s-nr"])&&m&&m["s-sn"]===y.yt["s-sn"]&&j===t.Gn(m)&&(m=t.Qn(m))&&m&&!m["s-nr"]){$=m;break}(!$&&j!==t.Gn(y.yt)||t.Qn(y.yt)!==$)&&y.yt!==$&&(t.Un(y.yt),t.tn(j,y.yt,$))}n.at=!1}return i&&g(l.i),M.length=0,l}}(M,d),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=function(){M.ft.set(h,p.loaded=M.gn=!0),d.et(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.en(t);if(r)if(n.ft.has(t))e(t);else{var i=n.lt.get(t)||[];i.push(e),n.lt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(M,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,M},R={},L=!1;export{r as defineCustomElement,e as h};