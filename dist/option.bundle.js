(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(r){h=function(t,e,r){return t[e]=r}}function m(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=m;var d="suspendedStart",y="suspendedYield",p="executing",v="completed",g={};function b(){}function E(){}function w(){}var L={};h(L,u,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(P([])));I&&I!==o&&i.call(I,u)&&(L=I);var B=w.prototype=b.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function A(e,r){function n(o,a,c,u){var s=f(e[o],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,n){var o=d;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(t,e,n);if("normal"===s.type){if(o=n.done?v:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return E.prototype=w,a(B,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:E,configurable:!0}),E.displayName=h(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,l,"GeneratorFunction")),t.prototype=Object.create(B),t},n.awrap=function(t){return{__await:t}},k(A.prototype),h(A.prototype,s,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new A(m(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(B),h(B,l,"Generator"),h(B,u,(function(){return this})),h(B,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}document.addEventListener("DOMContentLoaded",(function(){chrome.storage.local.get(null,function(){var t,n=(t=e().mark((function t(r){var n,o,i,a,c,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.habit&&document.getElementById("option-habit-checkbox").setAttribute("checked",!0),r.savedTemplate&&(document.getElementById("option-template-textarea").value=r.savedTemplate),r.savedCommit&&(document.getElementById("option-commit-input").value=r.savedCommit),r.savedCommit||(document.getElementById("option-commit-input").value="Create new Markdown file"),r.isLight&&"yes"!==r.isLight?(a=document.getElementById("extension-body"),c=document.getElementById("theme-button"),u=document.getElementById("theme-img"),c.setAttribute("data-isLight","no"),u.setAttribute("src","../assets/moon.svg"),a.setAttribute("class","dark-theme"),chrome.storage.local.set({isLight:"no"})):(n=document.getElementById("extension-body"),o=document.getElementById("theme-button"),i=document.getElementById("theme-img"),o.setAttribute("data-isLight","yes"),i.setAttribute("src","../assets/sun.svg"),n.setAttribute("class",""),chrome.storage.local.set({isLight:"yes"}));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}()),document.getElementById("theme-button").addEventListener("click",(function(){var t=document.getElementById("extension-body"),e=document.getElementById("theme-button"),r=document.getElementById("theme-img");chrome.storage.local.get("isLight",(function(n){"yes"===n.isLight?(e.setAttribute("data-isLight","no"),r.setAttribute("src","../assets/moon.svg"),t.setAttribute("class","dark-theme"),chrome.storage.local.set({isLight:"no"})):(e.setAttribute("data-isLight","yes"),r.setAttribute("src","../assets/sun.svg"),t.setAttribute("class",""),chrome.storage.local.set({isLight:"yes"}))}))})),document.getElementById("option-habit-checkbox").addEventListener("change",(function(t){t.target.checked?chrome.storage.local.set({habit:!0}):chrome.storage.local.set({habit:!1})})),document.getElementById("option-commit-save-button").addEventListener("click",(function(){var t=document.getElementById("option-commit-input");t.value&&""!=t.value.trim()?(chrome.storage.local.set({savedCommit:t.value}),alert("커밋 메세지가 저장되었습니다!")):alert("커밋 메세지는 반드시 있어야 합니다.")})),document.getElementById("option-commit-reset-button").addEventListener("click",(function(){chrome.storage.local.remove(["savedCommit"]),document.getElementById("option-commit-input").value="Create new Markdown file",alert("커밋 메세지를 초기화했습니다!")})),document.getElementById("option-template-save-button").addEventListener("click",(function(){var t=document.getElementById("option-template-textarea");chrome.storage.local.set({savedTemplate:t.value}),alert("템플릿이 저장되었습니다!")})),document.getElementById("option-template-reset-button").addEventListener("click",(function(){chrome.storage.local.remove(["savedTemplate"]),document.getElementById("option-template-textarea").value="",alert("템플릿을 삭제했습니다!")}))}))})();