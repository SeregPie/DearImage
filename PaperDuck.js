!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.PaperDuck=n()}(this,function(){"use strict";var t=function(t){this.context=t},n={canvas:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};function e(){return document.createElement("canvas")}function r(t){return new Promise(function(n){n(t())})}function i(t){var n=this;return r(function(){return t.readyState>1?n.load(t.result):new Promise(function(n,i){e=n,r=i,t.addEventListener("load",e),t.addEventListener("error",r)}).finally(function(){t.removeEventListener("load",e),t.removeEventListener("error",r)}).then(function(){return n.load(t.result)});var e,r})}function a(t){var n=this;return r(function(){var e=new FileReader;return e.readAsDataURL(t),i.call(n,e)})}function o(t){var n=this;return r(function(){return t.complete?n.from(t):new Promise(function(n,i){e=n,r=i,t.addEventListener("load",e),t.addEventListener("error",r)}).finally(function(){t.removeEventListener("load",e),t.removeEventListener("error",r)}).then(function(){return n.from(t)});var e,r})}function u(t){for(var n=[],e=arguments.length-1;e-- >0;)n[e]=arguments[e+1];return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.call.apply(t,[this].concat(n,e))}}function s(t,n){var e=this.width,r=this.height;if(0===e||0===r)return this;var i=this.constructor.blankContext(e,r);return i.save(),i.translate(t?e:0,n?r:0),i.scale(t?-1:1,n?-1:1),i.drawImage(this.canvas,0,0),i.restore(),new this.constructor(i)}function c(t){var n=this.height,e=this.width;if(0===n||0===e)return n===e?this:this.constructor.blank(n,e);var r=this.constructor.blankContext(n,e);return r.save(),r.translate(n/2,e/2),r.rotate(Math.PI/(t?-2:2)),r.drawImage(this.canvas,e/-2,n/-2),r.restore(),new this.constructor(r)}return n.canvas.get=function(){return this.context.canvas},n.width.get=function(){return this.canvas.width},n.height.get=function(){return this.canvas.height},Object.defineProperties(t.prototype,n),t.blank=function(t,n){return new this(this.blankContext(t,n))},t.blankContext=function(t,n){return this.blankCanvas(t,n).getContext("2d")},t.from=function(t){return function(t){var n=t.naturalWidth||t.width,e=t.naturalHeight||t.height,r=this.blankContext(n,e);return r.drawImage(t,0,0),new this(r)}.call(this,t)},t.load=function(t){var n=this;return r(function(){return function(t){return"string"==typeof t}(t)?function(t){var n=this;return r(function(){var e=new Image;return e.crossOrigin="anonymous",e.src=t,o.call(n,e)})}.call(n,t):t instanceof HTMLImageElement?o.call(n,t):t instanceof HTMLInputElement?function(t){var n=this;return r(function(){return"file"===t.type?a.call(n,t.files[0]):n.load(t.value)})}.call(n,t):t instanceof File?a.call(n,t):t instanceof FileReader?i.call(n,t):n.from(t)})},t.prototype.flop=u(s,!0,!1),t.prototype.flip=u(s,!1,!0),t.prototype.rotate180=u(s,!0,!0),t.prototype.resize=function(t,n,e){if(t=Number.parseInt(t),n=Number.parseInt(n),!Number.isFinite(t)&&!Number.isFinite(n))return this;Number.isFinite(t)&&(t=Math.abs(t)),Number.isFinite(n)&&(n=Math.abs(n));var r,i=this.width,a=this.height;if(Number.isFinite(t)){if(!Number.isFinite(n)){if(0===i)return this.constructor.blank(t,0);n=Math.round(a*t/i)}}else{if(0===a)return this.constructor.blank(0,n);t=Math.round(i*n/a)}if(t===i&&n===a)return this;if(0===i||0===a||0===t||0===n)return this.constructor.blank(t,n);e=Number.parseFloat(e),Number.isFinite(e)?e>1?e/=e-1:e=1/0:e=2;for(var o=function(t,n){if(t<n)t=Math.min(Math.round(t*e),n);else{if(!(t>n))return n;t=Math.max(Math.round(t/e),n)}return r=!1,t},u=this.toCanvas(),s=64;s--;){r=!0;var c=o(i,t),f=o(a,n);if(r)break;var h=this.constructor.blankContext(c,f);h.scale(c/i,f/a),h.drawImage(u,0,0),i=c,a=f,u=h.canvas}return this.constructor.from(u)},t.prototype.rotate90=u(c,!1),t.prototype.rotate270=u(c,!0),Object.assign(t,{createCanvas:e,blankCanvas:function(t,n){void 0===t&&(t=0),void 0===n&&(n=0);var r=e();return r.width=t,r.height=n,r}}),t});
