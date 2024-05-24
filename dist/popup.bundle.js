(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(n){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(r||[]);return a(i,"_invoke",{value:_(t,n,c)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};h(E,u,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(G([])));k&&k!==o&&i.call(k,u)&&(E=k);var S=x.prototype=w.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,n){function r(o,a,c,u){var s=p(e[o],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&i.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(t,e,r);if("normal"===s.type){if(o=r.done?m:d,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function T(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},j(O.prototype),h(O.prototype,s,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),h(S,l,"Generator"),h(S,u,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=G,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return o.apply(this,arguments)}function o(){var t;return t=e().mark((function t(n){var r,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.github.com/user",{headers:{Authorization:"token ".concat(n)}});case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,i=o.login,t.abrupt("return",i);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})),o=function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))},o.apply(this,arguments)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};h(E,u,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(G([])));k&&k!==n&&r.call(k,u)&&(E=k);var S=x.prototype=w.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==i(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,n,r){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(e,n,r);if("normal"===s.type){if(o=r.done?m:d,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return b.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(O.prototype),h(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),h(S,l,"Generator"),h(S,u,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:G(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function c(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function u(t){return s.apply(this,arguments)}function s(){var t;return t=a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.github.com/user/repos",{headers:{Authorization:"token ".concat(e)}});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})),s=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))},s.apply(this,arguments)}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function h(){h=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};s(E,a,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(G([])));k&&k!==n&&r.call(k,a)&&(E=k);var S=x.prototype=w.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==l(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(e,n,r);if("normal"===s.type){if(o=r.done?m:d,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return b.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:G(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function f(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function p(t,e){return y.apply(this,arguments)}function y(){var t;return t=h().mark((function t(e,n){var r,o,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://github.com/login/oauth/access_token",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({client_id:"Ov23liS8uJ1LJSioNTPc",client_secret:"904fcc78be315af16780349f2f74d701aeb3fd34",code:e,redirect_uri:n})});case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,i=o.access_token,t.abrupt("return",i);case 11:t.prev=11,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),y=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){f(i,r,o,a,c,"next",t)}function c(t){f(i,r,o,a,c,"throw",t)}a(void 0)}))},y.apply(this,arguments)}function d(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t){var e=(new TextEncoder).encode(t);return btoa(String.fromCharCode.apply(String,d(e)))}function g(){document.getElementById("extension-login-button").style.display="flex",document.getElementById("extension-logout-button").style.display="none",document.getElementById("extension-user-section").style.display="none",document.getElementById("extension-repoList-section").style.display="none",document.getElementById("extension-post-section").style.display="none"}function w(t,e){document.getElementById("extension-login-button").style.display="none",document.getElementById("extension-logout-button").style.display="flex",document.getElementById("extension-post-section").style.display="flex",document.getElementById("extension-repoList-section").style.display="none",document.getElementById("extension-user-section").style.display="flex",document.getElementById("extension-user-nickname-p").style.display="flex",document.getElementById("extension-user-selectedRepo-p").style.display="flex",document.getElementById("extension-user-selectedRepo-span").innerHTML='<a href="https://www.github.com/'.concat(t,"/").concat(e,'" target="_blank" class="text--highlighted">').concat(e,"</a>")}function b(t,e){var n=document.getElementById("extension-repoList-ul");n&&(n.innerHTML="",n.addEventListener("click",(function(t){var n=t.target;"LI"===n.tagName&&chrome.storage.local.set({selectedRepo:n.textContent},(function(){w(e,n.textContent)}))})),t.length>0?t.forEach((function(t){var e=document.createElement("li");e.setAttribute("class","extension-li"),e.textContent=t.name,n.appendChild(e)})):n.innerHTML="Your repository not exist!! Please make your own.")}function x(t,e){document.getElementById("extension-user-selectedRepo-span").innerHTML='<a href="https://www.github.com/'.concat(e,"/").concat(t,'" target="_blank" class="text--highlighted">').concat(t,"</a>")}function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function L(){L=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function m(){}function g(){}function w(){}var b={};s(b,a,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(G([])));k&&k!==n&&r.call(k,a)&&(b=k);var S=w.prototype=m.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==E(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=f;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var s=h(e,n,r);if("normal"===s.type){if(o=r.done?d:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function G(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(E(e)+" is not iterable")}return g.prototype=w,o(S,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:G(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function k(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){k(i,r,o,a,c,"next",t)}function c(t){k(i,r,o,a,c,"throw",t)}a(void 0)}))}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O,_,T,I=[(T=new Date).getFullYear().toString(),(T.getMonth()+1).toString().padStart(2,"0"),T.getDate().toString().padStart(2,"0")],P=(_=3,function(t){if(Array.isArray(t))return t}(O=I)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(O,_)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}(O,_)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),N=P[0],G=P[1],A=P[2],B="".concat(N).concat(G).concat(A);document.addEventListener("DOMContentLoaded",(function(){chrome.storage.local.get(["githubToken","selectedRepo","nickname","savedText","savedTemplate","habit","submissionDate"],function(){var t=S(L().mark((function t(e){var n,r;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.githubToken?e.selectedRepo?(w(e.nickname,e.selectedRepo),o=e.nickname,document.getElementById("extension-user-nickname-p").style.display="flex",document.getElementById("extension-user-nickname-span").innerHTML='<a href="https://www.github.com/'.concat(o,'" target="_blank" class="text--highlighted">').concat(o,"</a>"),x(e.selectedRepo,e.nickname),n=document.getElementById("extension-post-textarea"),e.savedText?n.value=e.savedText:e.savedTemplate&&(n.value=e.savedTemplate),r=document.getElementById("extension-optional-habit-article"),e.habit?(r.style.display="flex",e.submissionDate!=="".concat(N).concat(G).concat(A)?r.textContent="".concat(N,"년 ").concat(G,"월 ").concat(A,"일 회고를 작성하지 않았어요! 😐"):r.textContent="".concat(N,"년 ").concat(G,"월 ").concat(A,"일 회고를 작성했어요! 💯")):r.style.display="none"):chrome.storage.local.remove(["githubToken","selectedRepo","nickname","savedText"],(function(){g()})):g();case 1:case"end":return t.stop()}var o}),t)})));return function(e){return t.apply(this,arguments)}}()),document.getElementById("extension-login-button").addEventListener("click",(function(){var t=chrome.identity.getRedirectURL(),e="https://github.com/login/oauth/authorize?client_id=Ov23liS8uJ1LJSioNTPc&redirect_uri=".concat(encodeURIComponent(t),"&scope=repo");chrome.identity.launchWebAuthFlow({url:e,interactive:!0},function(){var e=S(L().mark((function e(n){var o,i,a,c;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!chrome.runtime.lastError){e.next=3;break}return e.abrupt("return");case 3:return o=new URLSearchParams(new URL(n).search),i=o.get("code"),e.next=7,p(i,t);case 7:return a=e.sent,chrome.storage.local.set({githubToken:a},(function(){document.getElementById("extension-login-button").style.display="none",document.getElementById("extension-logout-button").style.display="flex",document.getElementById("extension-repoList-section").style.display="flex",document.getElementById("extension-user-section").style.display="none",document.getElementById("extension-post-section").style.display="none"})),e.next=11,r(a);case 11:return c=e.sent,chrome.storage.local.set({nickname:c},(function(){})),e.next=15,u(a);case 15:b(e.sent,c);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),document.getElementById("extension-logout-button").addEventListener("click",(function(){chrome.storage.local.remove(["githubToken","selectedRepo","nickname","savedText","savedTemplate","habit","submissionDate"],(function(){g()}))})),document.getElementById("extension-save-button").addEventListener("click",(function(){var t=document.getElementById("extension-post-textarea");chrome.storage.local.set({savedText:t.value}),alert("임시 저장되었습니다! submit 버튼으로 제출하면 자동으로 저장된 내용은 사라집니다.")})),document.getElementById("extension-submit-button").addEventListener("click",(function(){chrome.storage.local.get("githubToken",(function(t){var e=t.githubToken;chrome.storage.local.get("selectedRepo",(function(t){var n=t.selectedRepo,r=document.getElementById("extension-post-textarea").value,o="".concat(B,".md");chrome.storage.local.get("nickname",(function(t){var i=t.nickname;i&&function(t,e,n,r,o){function i(t,e,n,r,o,i){fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/contents/").concat(i),{method:"GET",headers:{Authorization:"token ".concat(t)}}).then((function(u){return 404===u.status?a(t,e,n,r,o,i):c(t,e,n,r,o,i)})).catch((function(t){}))}function a(t,e,n,r,o,i){var a=i.split("/").pop(),u=i.split("/").slice(0,-1).join("/");m("");fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/contents/").concat(u),{method:"GET",headers:{Authorization:"token ".concat(t)}}).then((function(t){return t.json()})).then((function(n){var r=n.sha;return fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/git/trees"),{method:"POST",headers:{Authorization:"token ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({base_tree:r,tree:[{path:a,mode:"040000",type:"tree",content:""}]})})})).then((function(t){return t.json()})).then((function(n){var r=n.sha;return fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/git/commits"),{method:"POST",headers:{Authorization:"token ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({message:"Create new folder",tree:r,parents:[]})})})).then((function(t){return t.json()})).then((function(n){var r=n.sha;return fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/git/refs/heads/main"),{method:"PATCH",headers:{Authorization:"token ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({sha:r})})})).then((function(){return c(t,e,n,r,o,i)})).catch((function(t){}))}function c(t,e,n,r,o,i){fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/contents/").concat(i,"/").concat(n),{method:"GET",headers:{Authorization:"token ".concat(t)}}).then((function(a){if(404===a.status)return fetch("https://api.github.com/repos/".concat(o,"/").concat(e,"/contents/").concat(i,"/").concat(n),{method:"PUT",headers:{Authorization:"token ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({message:"Create new Markdown file",content:m(r)})});var u=prompt("파일 이름 '".concat(n,"'이 이미 존재합니다. 새 파일 이름을 입력하세요."));if(u)return c(t,e,u+".md",r,o,i);throw new Error("파일 이름 입력이 취소되었습니다.")})).then((function(t){if(201!==t.status)throw new Error("Failed to create file");var e;chrome.storage.local.set({submissionDate:B}),document.getElementById("extension-optional-habit-article").textContent="".concat(N,"년 ").concat(G,"월 ").concat(A,"일 회고를 작성했어요! 💯"),alert("파일 ".concat(n,"이(가) 생성되었습니다."));var r=null!==(e=chrome.storage.local.get("savedTemplate"))&&void 0!==e?e:"";document.getElementById("extension-post-textarea").value=r})).catch((function(t){"Failed to create file"===t.message&&alert("Error: 커밋에 실패했습니다.")}))}var u="".concat(N,"/").concat(G);i(t,e,n,r,o,u)}(e,n,o,r,i)}))}))})),chrome.storage.local.remove(["savedText"],(function(){}))}))}))})();