!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).DearImage=e()}(this,(function(){"use strict";class t{constructor(t){this.context=t}get canvas(){return this.context.canvas}get sizeX(){return this.canvas.width}get sizeY(){return this.canvas.height}}function e(){try{return document.createElement("canvas")}catch{}throw new Error("HTMLCanvasElement is not supported.")}function n(){try{return new OffscreenCanvas}catch{}throw new Error("OffscreenCanvas is not supported.")}function r(){try{return e()}catch{}try{return n()}catch{}return function(){try{let{Canvas:t}=require("canvas");return new t}catch{}throw new Error("Canvas is not supported.")}()}function i(t){return Number.isFinite(t)&&t>0}function s(t){return function(t){let{HTMLCanvasElement:e}=globalThis;return!!e&&t instanceof e}(t)||function(t){let{OffscreenCanvas:e}=globalThis;return!!e&&t instanceof e}(t)||function(t){try{let{Canvas:e}=require("canvas");return t instanceof e}catch{}return!1}(t)}function a(t){return"string"==typeof t}t.blank=function(t,e){t=i(t)?Math.round(t):0,e=i(e)?Math.round(e):0;let n=r();return n.width=t,n.height=e,new this(n.getContext("2d"))},t.is=function(t){return t instanceof this};var o=/^data:(.*?)(;base64)?,(.*)$/;var u={is:function(t){return t instanceof this},isString:function(t){return!!this.parse(t)},parse:function(t){if(a(t)){let e=o.exec(t);if(e){let n=e[1],r=e[3];return Object.assign(new this,{type:n,data:r,toString:()=>t})}}return!1}};var c={isEmpty:function(){return!this.data}};let l=class{},{prototype:h}=l;function f(){try{return new Image}catch{}throw new Error("HTMLImageElement is not supported.")}function m(){try{return f()}catch{}return function(){try{let{Image:t}=require("canvas");return new t}catch{}throw new Error("Image is not supported.")}()}function p(t){return function(t){let{HTMLImageElement:e}=globalThis;return!!e&&t instanceof e}(t)||function(t){try{let{Image:e}=require("canvas");return t instanceof e}catch{}return!1}(t)}function y(t){let{ImageData:e}=globalThis;return!!e&&t instanceof e||function(t){try{let{ImageData:e}=require("canvas");return t instanceof e}catch{}return!1}(t)}function d(t){let{URL:e}=globalThis;return!!e&&t instanceof e}Object.assign(l,u),Object.assign(h,c);let g=function(t){let e=this.blank(t.width,t.height);return e.sizeX&&e.sizeY&&e.context.putImageData(t,0,0),e},w=function(t,e,n){let r=this.blank(e,n);return r.sizeX&&r.sizeY&&r.context.drawImage(t,0,0),r},z=function(t){return w.call(this,t,t.width,t.height)},v=function(t){return w.call(this,t,t.naturalWidth,t.naturalHeight)},b=function(t){return z.call(this,t.canvas)},x=function(e){if(t.is(e))return b.call(this,e);if(y(e))return g.call(this,e);if(s(e))return z.call(this,e);if(p(e))return v.call(this,e);throw new Error},M=async function(t){return await async function(t){if(!t.complete)try{await new Promise((e,n)=>{t.onload=e,t.onerror=n})}finally{t.onload=null,t.onerror=null}}(t),v.call(this,t)},X=async function(t){let e=m();return e.src=t,M.call(this,e)},Y=async function(t){return t.length?X.call(this,t):this.blank()},I=async function(t){if(!t.size)return this.blank();let e=URL.createObjectURL(t);try{return X.call(this,e)}finally{URL.revokeObjectURL(e)}},L=async function(t){return t.isEmpty()?this.blank():X.call(this,""+t)},C=async function(t){{let e=l.parse(t);if(e)return L.call(this,e)}return X.call(this,t)},E=async function(t){return X.call(this,""+t)};function O(t){if(t){let e=typeof t;return"object"===e||"function"===e}return!1}Object.assign(t,{from:x,loadFrom:async function(t){return a(t)?C.call(this,t):d(t)?E.call(this,t):function(t){let{Buffer:e}=globalThis;return!!e&&t instanceof e}(t)?Y.call(this,t):function(t){let{Blob:e}=globalThis;return!!e&&t instanceof e}(t)?I.call(this,t):p(t)?M.call(this,t):x.call(this,t)}}),t.fromExcept=function(t){return this.is(t)?t:this.from(t)},t.isDearImage=t.is.bind(t);function T(t){return a(t)&&!function(t){return!t}(t)}function j(t){return T(t)?t:"sans-serif"}var F=new Set(["normal","italic","oblique"]);var U=new Set(["normal","small-caps"]);function D(t,...e){return function(t){return"number"==typeof t&&!Number.isNaN(t)}(t)&&function(t,e,n,r,i){return(r?t>=e:t>e)&&(i?t<=n:t<n)}(t,...e)}var S=new Set(["normal","bold"]);var k={from:function(t){let e="sans-serif",n="normal",r="normal",i="normal";return a(t)?e=j(t):O(t)&&(e=j(t.family),n=function(t){return a(t)&&(t=t.trim().toLowerCase(),F.has(t))?t:"normal"}(t.style),r=function(t){return a(t)&&(t=t.trim().toLowerCase(),U.has(t))?t:"normal"}(t.variant),i=function(t){if(a(t)){if(t=t.trim().toLowerCase(),S.has(t))return t}else if(D(t,1,1e3,!0,!0))return t=Math.round(t);return"normal"}(t.weight)),Object.assign(new this,{family:e,style:n,variant:r,weight:i})},fromExcept:function(t){return this.is(t)?t:this.from(t)},is:function(t){return t instanceof this}};function R(t,e,n,r,i){return[n,r,i,e+"px",t].join(" ")}function q(t){return function(t){return void 0===t}(t)||function(t){return null===t}(t)}var B={load:async function(t){let{family:e,style:n,variant:r,weight:i}=this;if(q(t))try{await document.fonts.load(R(e,10,n,r,i))}catch{}else{try{await new FontFace(e,t,{style:n,variant:r,weight:i}).load()}catch{}try{let{registerFont:s}=require("canvas");await s(t,{family:e,style:n,variant:r,weight:i})}catch{}}}};let N=class{},{prototype:H}=N;Object.assign(N,k),N.default=N.from(),Object.assign(H,B),t.loadFontFace=async function(t,e){return N.fromExcept(t).load(e)},t.loadFromExcept=async function(t){return this.is(t)?t:this.loadFrom(t)};function A(t){return Number.isFinite(t)&&!function(t){return t<0}(t)}var P={from:function(t){let e=N.default,n=10;O(t)&&(e=N.from(t),n=function(t){return A(t)?t=Math.round(t):10}(t.size));let{family:r,style:i,variant:s,weight:a}=e;return Object.assign(new this,{family:r,size:n,style:i,variant:s,weight:a})},fromExcept:function(t){return this.is(t)?t:this.from(t)},is:function(t){return t instanceof this}};var W={toCSS:function(){let{family:t,size:e,style:n,variant:r,weight:i}=this;return R(t,e,n,r,i)}};let $=class{},{prototype:G}=$;function J(t,...e){return function(...n){return t.call(this,...e,...n)}}Object.assign($,P),$.default=$.from(),Object.assign(G,W),t.measureText=function(t,e){t=q(t)?"":""+t;let{context:n}=this.blank();return n.font=$.fromExcept(e).toCSS(),n.measureText(t)},t.text=function(t,e){t=q(t)?"":""+t;let n="#000",r=$.default,i=.28;O(e)&&(T(e.fill)&&(n=e.fill),r=$.fromExcept(e.font),A(e.padding)&&(i=e.padding)),i=Math.ceil(i*r.size);let s=this.blank(this.measureText(t,r).width+2*i,r.size+2*i),{context:a}=s;return a.save(),a.font=r.toCSS(),a.textBaseline="top",a.textAlign="left",a.fillStyle=n,a.fillText(t,i,i),a.restore(),s},t.prototype.crop=function(t,e,n,r){if(Number.isFinite(t)?(t=Math.round(t))<0&&(t+=this.sizeX):t=0,Number.isFinite(e)?(e=Math.round(e))<0&&(e+=this.sizeY):e=0,Number.isFinite(n)?(n=Math.round(n))<0&&(t+=n,n*=-1):({sizeX:n}=this),Number.isFinite(r)?(r=Math.round(r))<0&&(e+=r,r*=-1):({sizeY:r}=this),t||e||n!==this.sizeX||r!==this.sizeY){let i=this.constructor.blank(n,r);return n&&r&&this.sizeX&&this.sizeY&&i.context.drawImage(this.canvas,-t,-e),i}return this};let K=function(t,e){let{sizeX:n,sizeY:r}=this;if(n&&r){let i=this.constructor.blank(n,r),{context:s}=i;return s.save(),s.translate(t?n:0,e?r:0),s.scale(t?-1:1,e?-1:1),s.drawImage(this.canvas,0,0),s.restore(),i}return this};Object.assign(t.prototype,{flipX:J(K,!0,!1),flipY:J(K,!1,!0)}),t.prototype.reframe=function(t,e,n,r){A(t)?t=Math.round(t):({sizeX:t}=this),A(e)?e=Math.round(e):({sizeY:e}=this);let i=(()=>{if(a(n))switch(n.trim().toLowerCase()){case"start":return 0;case"end":return-t}return(this.sizeX+t)/-2})(),s=(()=>{if(a(r))switch(r.trim().toLowerCase()){case"start":return 0;case"end":return-e}return(this.sizeY+e)/-2})();return this.crop(i,s,t,e)},t.prototype.resize=function(t,e){if(A(t)?t=Math.round(t):({sizeX:t}=this),A(e)?e=Math.round(e):({sizeY:e}=this),t!==this.sizeX||e!==this.sizeY){let n=this.constructor.blank(t,e);if(t&&e&&this.sizeX&&this.sizeY){let r=t/this.sizeX,i=e/this.sizeY,{context:s}=n;s.save(),s.scale(r,i),s.drawImage(this.canvas,0,0),s.restore()}return n}return this},t.prototype.rescale=function(t,e){let{sizeX:n,sizeY:r}=this;return A(t)&&(n*=t),A(e)&&(r*=e),this.resize(n,r)},t.prototype.scale=function(t){return this.rescale(t,t)},t.prototype.resizeX=function(t,e){return e?this.sizeX&&A(t)?(t=Math.round(t),this.scale(t/this.sizeX)):this:this.resize(t,this.sizeY)},t.prototype.resizeY=function(t,e){return e?this.sizeY&&A(t)?(t=Math.round(t),this.scale(t/this.sizeY)):this:this.resize(this.sizeX,t)},t.prototype.toBuffer=function(...t){return this.sizeX&&this.sizeY?this.canvas.toBuffer(...t):Buffer.alloc(0)},t.prototype.saveToFileSystem=function(t,...e){return new Promise((n,r)=>{let i=require("fs"),s=require("path"),a=this.toBuffer(...e);i.mkdir(s.dirname(t),{recursive:!0},e=>{e?r(e):i.writeFile(t,a,t=>{t?r(t):n()})})})};let Q=function(t,e,n){A(e)?e=Math.round(e):({sizeX:e}=this),A(n)?n=Math.round(n):({sizeY:n}=this);let r=[];if(e&&this.sizeX){let t=e/this.sizeX;r.push(t)}if(n&&this.sizeY){let t=n/this.sizeY;r.push(t)}if(r.length){let e=t(r);return this.scale(e)}return this};function V(t){return!!function(t){if(a(t)){let{URL:e}=globalThis;if(e){let{document:n}=globalThis,r=n&&n.location&&n.location.origin;try{return new e(t,r)}catch{}}}return!1}(t)}return Object.assign(t.prototype,{scaleDownIn:J(Q,t=>Math.min(Math.min(...t),1)),scaleDownOut:J(Q,t=>Math.min(Math.max(...t),1)),scaleIn:J(Q,t=>Math.min(...t)),scaleOut:J(Q,t=>Math.max(...t)),scaleUpIn:J(Q,t=>Math.max(Math.min(...t),1)),scaleUpOut:J(Q,t=>Math.max(Math.max(...t),1))}),t.prototype.toDataURL=function(...t){return this.canvas.toDataURL(...t)},t.prototype.toBlob=function(...t){let{data:e,type:n}=l.parse(this.toDataURL(...t)),r=function(t){let{length:e}=t,n=new Uint8Array(e);for(let r=0;r<e;r++)n[r]=t.charCodeAt(r);return n}(atob(e));return new Blob([r],{type:n})},t.prototype.toHTMLCanvasElement=function(){let t=e(),{sizeX:n,sizeY:r}=this;return t.width=n,t.height=r,n&&r&&t.getContext("2d").drawImage(this.canvas,0,0),t},t.prototype.toHTMLImageElement=function(...t){let e=f();return e.src=this.toDataURL(...t),e},t.prototype.toImageData=function(){return this.context.getImageData(0,0,this.sizeX,this.sizeY)},t.prototype.toOffscreenCanvas=function(){let t=n(),{sizeX:e,sizeY:r}=this;return t.width=e,t.height=r,e&&r&&t.getContext("2d").drawImage(this.canvas,0,0),t},t.utils={},t.utils.isDataURL=function(t){return l.is(t)||l.isString(t)},t.utils.isURL=function(t){return d(t)||V(t)},t}));
