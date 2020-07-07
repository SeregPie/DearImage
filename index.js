!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).DearImage=e()}(this,(function(){"use strict";class t{constructor(t){this.context=t}get canvas(){return this.context.canvas}get sizeX(){return this.canvas.width}get sizeY(){return this.canvas.height}}function e(){try{return document.createElement("canvas")}catch{}throw new Error("HTMLCanvasElement is not supported.")}function n(t){return require(""+t)}function i(){try{return new OffscreenCanvas}catch{}throw new Error("OffscreenCanvas is not supported.")}function r(){try{return e()}catch{}try{return i()}catch{}return function(){try{let{Canvas:t}=n("canvas");return new t}catch{}throw new Error("Canvas is not supported.")}()}function s(t){return Number.isFinite(t)&&t>0}function a(t){return function(t){let{HTMLCanvasElement:e}=globalThis;return!!e&&t instanceof e}(t)||function(t){let{OffscreenCanvas:e}=globalThis;return!!e&&t instanceof e}(t)||function(t){try{let{Canvas:e}=n("canvas");return t instanceof e}catch{}return!1}(t)}function o(t){return"string"==typeof t}t.blank=function(t,e){t=s(t)?Math.round(t):0,e=s(e)?Math.round(e):0;let n=r();return n.width=t,n.height=e,new this(n.getContext("2d"))},t.is=function(t){return t instanceof this};var u=/^data:(.*?)(;base64)?,(.*)$/;var c={is:function(t){return t instanceof this},isString:function(t){return!!this.parse(t)},parse:function(t){if(o(t)){let e=u.exec(t);if(e){let n=e[1],i=e[3];return Object.assign(new this,{type:n,data:i,toString:()=>t})}}return!1}};var l={isEmpty:function(){return!this.data}};let h=class{},{prototype:f}=h;function m(){try{return new Image}catch{}throw new Error("HTMLImageElement is not supported.")}function p(){try{return m()}catch{}return function(){try{let{Image:t}=n("canvas");return new t}catch{}throw new Error("Image is not supported.")}()}function y(t){return function(t){let{HTMLImageElement:e}=globalThis;return!!e&&t instanceof e}(t)||function(t){try{let{Image:e}=n("canvas");return t instanceof e}catch{}return!1}(t)}function d(t){let{ImageData:e}=globalThis;return!!e&&t instanceof e||function(t){try{let{ImageData:e}=n("canvas");return t instanceof e}catch{}return!1}(t)}function g(t){let{URL:e}=globalThis;return!!e&&t instanceof e}Object.assign(h,c),Object.assign(f,l);let w=function(t){let e=this.blank(t.width,t.height);return e.sizeX&&e.sizeY&&e.context.putImageData(t,0,0),e},z=function(t,e,n){let i=this.blank(e,n);return i.sizeX&&i.sizeY&&i.context.drawImage(t,0,0),i},v=function(t){return z.call(this,t,t.width,t.height)},b=function(t){return z.call(this,t,t.naturalWidth,t.naturalHeight)},x=function(t){return v.call(this,t.canvas)},M=function(e){if(t.is(e))return x.call(this,e);if(d(e))return w.call(this,e);if(a(e))return v.call(this,e);if(y(e))return b.call(this,e);throw new Error},X=async function(t){return await async function(t){if(!t.complete)try{await new Promise((e,n)=>{t.onload=e,t.onerror=n})}finally{t.onload=null,t.onerror=null}}(t),b.call(this,t)},Y=async function(t){let e=p();return e.src=t,X.call(this,e)},I=async function(t){return t.length?Y.call(this,t):this.blank()},L=async function(t){if(!t.size)return this.blank();let e=URL.createObjectURL(t);try{return Y.call(this,e)}finally{URL.revokeObjectURL(e)}},C=async function(t){return t.isEmpty()?this.blank():Y.call(this,""+t)},E=async function(t){{let e=h.parse(t);if(e)return C.call(this,e)}return Y.call(this,t)},O=async function(t){return Y.call(this,""+t)};function T(t){if(t){let e=typeof t;return"object"===e||"function"===e}return!1}Object.assign(t,{from:M,loadFrom:async function(t){return o(t)?E.call(this,t):g(t)?O.call(this,t):function(t){let{Buffer:e}=globalThis;return!!e&&t instanceof e}(t)?I.call(this,t):function(t){let{Blob:e}=globalThis;return!!e&&t instanceof e}(t)?L.call(this,t):y(t)?X.call(this,t):M.call(this,t)}}),t.fromExcept=function(t){return this.is(t)?t:this.from(t)},t.isDearImage=t.is.bind(t);function j(t){return o(t)&&!function(t){return!t}(t)}function F(t){return j(t)?t:"sans-serif"}var U=new Set(["normal","italic","oblique"]);var D=new Set(["normal","small-caps"]);function S(t,...e){return function(t){return"number"==typeof t&&!Number.isNaN(t)}(t)&&function(t,e,n,i,r){return(i?t>=e:t>e)&&(r?t<=n:t<n)}(t,...e)}var k=new Set(["normal","bold"]);var R={from:function(t){let e="sans-serif",n="normal",i="normal",r="normal";return o(t)?e=F(t):T(t)&&(e=F(t.family),n=function(t){return o(t)&&(t=t.trim().toLowerCase(),U.has(t))?t:"normal"}(t.style),i=function(t){return o(t)&&(t=t.trim().toLowerCase(),D.has(t))?t:"normal"}(t.variant),r=function(t){if(o(t)){if(t=t.trim().toLowerCase(),k.has(t))return t}else if(S(t,1,1e3,!0,!0))return t=Math.round(t);return"normal"}(t.weight)),Object.assign(new this,{family:e,style:n,variant:i,weight:r})},fromExcept:function(t){return this.is(t)?t:this.from(t)},is:function(t){return t instanceof this}};function B(t,e,n,i,r){return[n,i,r,e+"px",t].join(" ")}function N(t){return function(t){return void 0===t}(t)||function(t){return null===t}(t)}var H={load:async function(t){let{family:e,style:i,variant:r,weight:s}=this;if(N(t))try{await document.fonts.load(B(e,10,i,r,s))}catch{}else{try{await new FontFace(e,t,{style:i,variant:r,weight:s}).load()}catch{}try{let{registerFont:a}=n("canvas");await a(t,{family:e,style:i,variant:r,weight:s})}catch{}}}};let A=class{},{prototype:q}=A;Object.assign(A,R),A.default=A.from(),Object.assign(q,H),t.loadFontFace=async function(t,e){return A.fromExcept(t).load(e)},t.loadFromExcept=async function(t){return this.is(t)?t:this.loadFrom(t)};function P(t){return Number.isFinite(t)&&!function(t){return t<0}(t)}var W={from:function(t){let e=A.default,n=10;T(t)&&(e=A.from(t),n=function(t){return P(t)?t=Math.round(t):10}(t.size));let{family:i,style:r,variant:s,weight:a}=e;return Object.assign(new this,{family:i,size:n,style:r,variant:s,weight:a})},fromExcept:function(t){return this.is(t)?t:this.from(t)},is:function(t){return t instanceof this}};var $={toCSS:function(){let{family:t,size:e,style:n,variant:i,weight:r}=this;return B(t,e,n,i,r)}};let G=class{},{prototype:J}=G;function K(t,...e){return function(...n){return t.call(this,...e,...n)}}Object.assign(G,W),G.default=G.from(),Object.assign(J,$),t.measureText=function(t,e){t=N(t)?"":""+t;let{context:n}=this.blank();return n.font=G.fromExcept(e).toCSS(),n.measureText(t)},t.text=function(t,e){t=N(t)?"":""+t;let n="#000",i=G.default,r=.28;T(e)&&(j(e.fill)&&(n=e.fill),i=G.fromExcept(e.font),P(e.padding)&&(r=e.padding)),r=Math.ceil(r*i.size);let s=this.blank(this.measureText(t,i).width+2*r,i.size+2*r),{context:a}=s;return a.save(),a.font=i.toCSS(),a.textBaseline="top",a.textAlign="left",a.fillStyle=n,a.fillText(t,r,r),a.restore(),s},t.prototype.crop=function(t,e,n,i){if(Number.isFinite(t)?(t=Math.round(t))<0&&(t+=this.sizeX):t=0,Number.isFinite(e)?(e=Math.round(e))<0&&(e+=this.sizeY):e=0,Number.isFinite(n)?(n=Math.round(n))<0&&(t+=n,n*=-1):({sizeX:n}=this),Number.isFinite(i)?(i=Math.round(i))<0&&(e+=i,i*=-1):({sizeY:i}=this),t||e||n!==this.sizeX||i!==this.sizeY){let r=this.constructor.blank(n,i);return n&&i&&this.sizeX&&this.sizeY&&r.context.drawImage(this.canvas,-t,-e),r}return this};let Q=function(t,e){let{sizeX:n,sizeY:i}=this;if(n&&i){let r=this.constructor.blank(n,i),{context:s}=r;return s.save(),s.translate(t?n:0,e?i:0),s.scale(t?-1:1,e?-1:1),s.drawImage(this.canvas,0,0),s.restore(),r}return this};Object.assign(t.prototype,{flipX:K(Q,!0,!1),flipY:K(Q,!1,!0)}),t.prototype.reframe=function(t,e,n,i){P(t)?t=Math.round(t):({sizeX:t}=this),P(e)?e=Math.round(e):({sizeY:e}=this);let r=(()=>{if(o(n))switch(n.trim().toLowerCase()){case"start":return 0;case"end":return-t}return(this.sizeX+t)/-2})(),s=(()=>{if(o(i))switch(i.trim().toLowerCase()){case"start":return 0;case"end":return-e}return(this.sizeY+e)/-2})();return this.crop(r,s,t,e)},t.prototype.resize=function(t,e){if(P(t)?t=Math.round(t):({sizeX:t}=this),P(e)?e=Math.round(e):({sizeY:e}=this),t!==this.sizeX||e!==this.sizeY){let n=this.constructor.blank(t,e);if(t&&e&&this.sizeX&&this.sizeY){let i=t/this.sizeX,r=e/this.sizeY,{context:s}=n;s.save(),s.scale(i,r),s.drawImage(this.canvas,0,0),s.restore()}return n}return this},t.prototype.rescale=function(t,e){let{sizeX:n,sizeY:i}=this;return P(t)&&(n*=t),P(e)&&(i*=e),this.resize(n,i)},t.prototype.scale=function(t){return this.rescale(t,t)},t.prototype.resizeX=function(t,e){return e?this.sizeX&&P(t)?(t=Math.round(t),this.scale(t/this.sizeX)):this:this.resize(t,this.sizeY)},t.prototype.resizeY=function(t,e){return e?this.sizeY&&P(t)?(t=Math.round(t),this.scale(t/this.sizeY)):this:this.resize(this.sizeX,t)},t.prototype.toBuffer=function(...t){return this.sizeX&&this.sizeY?this.canvas.toBuffer(...t):Buffer.alloc(0)},t.prototype.saveToFileSystem=function(t,...e){return new Promise((i,r)=>{let s=n("fs"),a=n("path"),o=this.toBuffer(...e);s.mkdir(a.dirname(t),{recursive:!0},e=>{e?r(e):s.writeFile(t,o,t=>{t?r(t):i()})})})};let V=function(t,e,n){P(e)?e=Math.round(e):({sizeX:e}=this),P(n)?n=Math.round(n):({sizeY:n}=this);let i=[];if(e&&this.sizeX){let t=e/this.sizeX;i.push(t)}if(n&&this.sizeY){let t=n/this.sizeY;i.push(t)}if(i.length){let e=t(i);return this.scale(e)}return this};function Z(t){return!!function(t){if(o(t)){let{URL:e}=globalThis;if(e){let{document:n}=globalThis,i=n&&n.location&&n.location.origin;try{return new e(t,i)}catch{}}}return!1}(t)}return Object.assign(t.prototype,{scaleDownIn:K(V,t=>Math.min(Math.min(...t),1)),scaleDownOut:K(V,t=>Math.min(Math.max(...t),1)),scaleIn:K(V,t=>Math.min(...t)),scaleOut:K(V,t=>Math.max(...t)),scaleUpIn:K(V,t=>Math.max(Math.min(...t),1)),scaleUpOut:K(V,t=>Math.max(Math.max(...t),1))}),t.prototype.toDataURL=function(...t){return this.canvas.toDataURL(...t)},t.prototype.toBlob=function(...t){let{data:e,type:n}=h.parse(this.toDataURL(...t)),i=function(t){let{length:e}=t,n=new Uint8Array(e);for(let i=0;i<e;i++)n[i]=t.charCodeAt(i);return n}(atob(e));return new Blob([i],{type:n})},t.prototype.toHTMLCanvasElement=function(){let t=e(),{sizeX:n,sizeY:i}=this;return t.width=n,t.height=i,n&&i&&t.getContext("2d").drawImage(this.canvas,0,0),t},t.prototype.toHTMLImageElement=function(...t){let e=m();return e.src=this.toDataURL(...t),e},t.prototype.toImageData=function(){return this.context.getImageData(0,0,this.sizeX,this.sizeY)},t.prototype.toOffscreenCanvas=function(){let t=i(),{sizeX:e,sizeY:n}=this;return t.width=e,t.height=n,e&&n&&t.getContext("2d").drawImage(this.canvas,0,0),t},t.utils={},t.utils.isDataURL=function(t){return h.is(t)||h.isString(t)},t.utils.isURL=function(t){return g(t)||Z(t)},t}));
