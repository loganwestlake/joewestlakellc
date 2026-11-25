var Nh=Object.defineProperty;var Mh=(r,t,e)=>t in r?Nh(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var ri=(r,t,e)=>Mh(r,typeof t!="symbol"?t+"":t,e);import{s as hi,g as Ft,b as Fh,h as Oh,F as Lh,L as Uh,m as Wt,u as Ku,i as es,v as Bh,S as qh,r as jh,C as Gh,w as zh}from"./index.esm2017-B97NKA06.js";import{d as Kh,e as $h,b as Qh,v as Wh,r as Hh}from"./index-r3MSizL7.js";var Jh="firebase",Xh="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(Jh,Xh,"app");var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Se,$u;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function y(){}y.prototype=p.prototype,T.D=p.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,w,A){for(var _=Array(arguments.length-2),zt=2;zt<arguments.length;zt++)_[zt-2]=arguments[zt];return p.prototype[w].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,y){y||(y=0);var E=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)E[w]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(w=0;16>w;++w)E[w]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=T.g[0],y=T.g[1],w=T.g[2];var A=T.g[3],_=p+(A^y&(w^A))+E[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=A+(w^p&(y^w))+E[1]+3905402710&4294967295,A=p+(_<<12&4294967295|_>>>20),_=w+(y^A&(p^y))+E[2]+606105819&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(p^w&(A^p))+E[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(A^y&(w^A))+E[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(w^p&(y^w))+E[5]+1200080426&4294967295,A=p+(_<<12&4294967295|_>>>20),_=w+(y^A&(p^y))+E[6]+2821735955&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(p^w&(A^p))+E[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(A^y&(w^A))+E[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(w^p&(y^w))+E[9]+2336552879&4294967295,A=p+(_<<12&4294967295|_>>>20),_=w+(y^A&(p^y))+E[10]+4294925233&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(p^w&(A^p))+E[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(A^y&(w^A))+E[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=A+(w^p&(y^w))+E[13]+4254626195&4294967295,A=p+(_<<12&4294967295|_>>>20),_=w+(y^A&(p^y))+E[14]+2792965006&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(p^w&(A^p))+E[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(w^A&(y^w))+E[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(p^y))+E[6]+3225465664&4294967295,A=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(A^p))+E[11]+643717713&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(w^A))+E[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^A&(y^w))+E[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(p^y))+E[10]+38016083&4294967295,A=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(A^p))+E[15]+3634488961&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(w^A))+E[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^A&(y^w))+E[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(p^y))+E[14]+3275163606&4294967295,A=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(A^p))+E[3]+4107603335&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(w^A))+E[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^A&(y^w))+E[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(p^y))+E[2]+4243563512&4294967295,A=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(A^p))+E[7]+1735328473&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^p&(w^A))+E[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(y^w^A)+E[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^w)+E[8]+2272392833&4294967295,A=p+(_<<11&4294967295|_>>>21),_=w+(A^p^y)+E[11]+1839030562&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^p)+E[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^A)+E[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^w)+E[4]+1272893353&4294967295,A=p+(_<<11&4294967295|_>>>21),_=w+(A^p^y)+E[7]+4139469664&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^p)+E[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^A)+E[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^w)+E[0]+3936430074&4294967295,A=p+(_<<11&4294967295|_>>>21),_=w+(A^p^y)+E[3]+3572445317&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^p)+E[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^A)+E[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=A+(p^y^w)+E[12]+3873151461&4294967295,A=p+(_<<11&4294967295|_>>>21),_=w+(A^p^y)+E[15]+530742520&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^p)+E[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(w^(y|~A))+E[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~w))+E[7]+1126891415&4294967295,A=p+(_<<10&4294967295|_>>>22),_=w+(p^(A|~y))+E[14]+2878612391&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~p))+E[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~A))+E[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~w))+E[3]+2399980690&4294967295,A=p+(_<<10&4294967295|_>>>22),_=w+(p^(A|~y))+E[10]+4293915773&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~p))+E[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~A))+E[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~w))+E[15]+4264355552&4294967295,A=p+(_<<10&4294967295|_>>>22),_=w+(p^(A|~y))+E[6]+2734768916&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~p))+E[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~A))+E[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=A+(y^(p|~w))+E[11]+3174756917&4294967295,A=p+(_<<10&4294967295|_>>>22),_=w+(p^(A|~y))+E[2]+718787259&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+A&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var y=p-this.blockSize,E=this.B,w=this.h,A=0;A<p;){if(w==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(E[w++]=T.charCodeAt(A++),w==this.blockSize){s(this,E),w=0;break}}else for(;A<p;)if(E[w++]=T[A++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var y=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=y&255,y/=256;for(this.u(T),T=Array(16),p=y=0;4>p;++p)for(var E=0;32>E;E+=8)T[y++]=this.g[p]>>>E&255;return T};function i(T,p){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=p(T)}function a(T,p){this.h=p;for(var y=[],E=!0,w=T.length-1;0<=w;w--){var A=T[w]|0;E&&A==p||(y[w]=A,E=!1)}this.g=y}var u={};function l(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return D(d(-T));for(var p=[],y=1,E=0;T>=y;E++)p[E]=T/y|0,y*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return D(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),E=g,w=0;w<T.length;w+=8){var A=Math.min(8,T.length-w),_=parseInt(T.substring(w,w+A),p);8>A?(A=d(Math.pow(p,A)),E=E.j(A).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=l(0),I=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(M(this))return-D(this).m();for(var T=0,p=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(M(this))return"-"+D(this).toString(T);for(var p=d(Math.pow(T,6)),y=this,E="";;){var w=J(y,p).g;y=G(y,w.j(p));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=w,C(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function M(T){return T.h==-1}r.l=function(T){return T=G(this,T),M(T)?-1:C(T)?0:1};function D(T){for(var p=T.g.length,y=[],E=0;E<p;E++)y[E]=~T.g[E];return new a(y,~T.h).add(I)}r.abs=function(){return M(this)?D(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0,w=0;w<=p;w++){var A=E+(this.i(w)&65535)+(T.i(w)&65535),_=(A>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=_>>>16,A&=65535,_&=65535,y[w]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(T,p){return T.add(D(p))}r.j=function(T){if(C(this)||C(T))return g;if(M(this))return M(T)?D(this).j(D(T)):D(D(this).j(T));if(M(T))return D(this.j(D(T)));if(0>this.l(S)&&0>T.l(S))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,y=[],E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var A=this.i(E)>>>16,_=this.i(E)&65535,zt=T.i(w)>>>16,yn=T.i(w)&65535;y[2*E+2*w]+=_*yn,q(y,2*E+2*w),y[2*E+2*w+1]+=A*yn,q(y,2*E+2*w+1),y[2*E+2*w+1]+=_*zt,q(y,2*E+2*w+1),y[2*E+2*w+2]+=A*zt,q(y,2*E+2*w+2)}for(E=0;E<p;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=p;E<2*p;E++)y[E]=0;return new a(y,0)};function q(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function J(T,p){if(C(p))throw Error("division by zero");if(C(T))return new B(g,g);if(M(T))return p=J(D(T),p),new B(D(p.g),D(p.h));if(M(p))return p=J(T,D(p)),new B(D(p.g),p.h);if(30<T.g.length){if(M(T)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,E=p;0>=E.l(T);)y=tt(y),E=tt(E);var w=Q(y,1),A=Q(E,1);for(E=Q(E,2),y=Q(y,2);!C(E);){var _=A.add(E);0>=_.l(T)&&(w=w.add(y),A=_),E=Q(E,1),y=Q(y,1)}return p=G(T,w.j(p)),new B(w,p)}for(w=g;0<=T.l(p);){for(y=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(y),_=A.j(p);M(_)||0<_.l(T);)y-=E,A=d(y),_=A.j(p);C(A)&&(A=I),w=w.add(A),T=G(T,_)}return new B(w,T)}r.A=function(T){return J(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function tt(T){for(var p=T.g.length+1,y=[],E=0;E<p;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function Q(T,p){var y=p>>5;p%=32;for(var E=T.g.length-y,w=[],A=0;A<E;A++)w[A]=0<p?T.i(A+y)>>>p|T.i(A+y+1)<<32-p:T.i(A+y);return new a(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,$u=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Se=a}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qu,Wu,jn,Hu,$r,di,Ju,Xu,Yu;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ur=="object"&&Ur];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var v=o[f];if(!(v in h))break t;h=h[v]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,v={next:function(){if(!f&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),o.apply(c,v)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,I.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,v,P){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return c.prototype[v].apply(f,k)}}function M(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const v=o.length||0,P=f.length||0;o.length=v+P;for(let k=0;k<P;k++)o[v+k]=f[k]}else o.push(f)}}class G{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function J(o){return J[" "](o),o}J[" "]=function(){};var tt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Q(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(h in f)o[h]=f[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function _(){var o=ks;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class zt{constructor(){this.h=this.g=null}add(c,h){const f=yn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var yn=new G(()=>new Zl,o=>o.reset());class Zl{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let In,Tn=!1,ks=new zt,Do=()=>{const o=u.Promise.resolve(void 0);In=()=>{o.then(th)}};var th=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var c=yn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Tn=!1};function Zt(){this.s=this.s,this.C=this.C}Zt.prototype.s=!1,Zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var eh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function En(o,c){if(It.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(tt){t:{try{J(c.nodeName);var v=!0;break t}catch{}v=!1}v||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&En.aa.h.call(this)}}C(En,It);var nh={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Er="closure_listenable_"+(1e6*Math.random()|0),rh=0;function sh(o,c,h,f,v){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=v,this.key=++rh,this.da=this.fa=!1}function wr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vr(o){this.src=o,this.g={},this.h=0}vr.prototype.add=function(o,c,h,f,v){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=Ms(o,c,f,v);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new sh(c,this.src,P,!!f,v),c.fa=h,o.push(c)),c};function Ns(o,c){var h=c.type;if(h in o.g){var f=o.g[h],v=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=v)&&Array.prototype.splice.call(f,v,1),P&&(wr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ms(o,c,h,f){for(var v=0;v<o.length;++v){var P=o[v];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==f)return v}return-1}var Fs="closure_lm_"+(1e6*Math.random()|0),Os={};function xo(o,c,h,f,v){if(Array.isArray(c)){for(var P=0;P<c.length;P++)xo(o,c[P],h,f,v);return null}return h=Mo(h),o&&o[Er]?o.K(c,h,d(f)?!!f.capture:!1,v):ih(o,c,h,!1,f,v)}function ih(o,c,h,f,v,P){if(!c)throw Error("Invalid event type");var k=d(v)?!!v.capture:!!v,Z=Us(o);if(Z||(o[Fs]=Z=new vr(o)),h=Z.add(c,h,f,k,P),h.proxy)return h;if(f=oh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)eh||(v=k),v===void 0&&(v=!1),o.addEventListener(c.toString(),f,v);else if(o.attachEvent)o.attachEvent(No(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function oh(){function o(h){return c.call(o.src,o.listener,h)}const c=ah;return o}function ko(o,c,h,f,v){if(Array.isArray(c))for(var P=0;P<c.length;P++)ko(o,c[P],h,f,v);else f=d(f)?!!f.capture:!!f,h=Mo(h),o&&o[Er]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=Ms(P,h,f,v),-1<h&&(wr(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Us(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ms(c,h,f,v)),(h=-1<o?c[o]:null)&&Ls(h))}function Ls(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Er])Ns(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(No(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Us(c))?(Ns(h,o),h.h==0&&(h.src=null,c[Fs]=null)):wr(o)}}}function No(o){return o in Os?Os[o]:Os[o]="on"+o}function ah(o,c){if(o.da)o=!0;else{c=new En(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ls(o),o=h.call(f,c)}return o}function Us(o){return o=o[Fs],o instanceof vr?o:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(o){return typeof o=="function"?o:(o[Bs]||(o[Bs]=function(c){return o.handleEvent(c)}),o[Bs])}function Tt(){Zt.call(this),this.i=new vr(this),this.M=this,this.F=null}C(Tt,Zt),Tt.prototype[Er]=!0,Tt.prototype.removeEventListener=function(o,c,h,f){ko(this,o,c,h,f)};function Rt(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new It(c,o);else if(c instanceof It)c.target=c.target||o;else{var v=c;c=new It(f,o),E(c,v)}if(v=!0,h)for(var P=h.length-1;0<=P;P--){var k=c.g=h[P];v=Ar(k,f,!0,c)&&v}if(k=c.g=o,v=Ar(k,f,!0,c)&&v,v=Ar(k,f,!1,c)&&v,h)for(P=0;P<h.length;P++)k=c.g=h[P],v=Ar(k,f,!1,c)&&v}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)wr(h[f]);delete o.g[c],o.h--}}this.F=null},Tt.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Tt.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Ar(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var v=!0,P=0;P<c.length;++P){var k=c[P];if(k&&!k.da&&k.capture==h){var Z=k.listener,gt=k.ha||k.src;k.fa&&Ns(o.i,k),v=Z.call(gt,f)!==!1&&v}}return v&&!f.defaultPrevented}function Fo(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Oo(o){o.g=Fo(()=>{o.g=null,o.i&&(o.i=!1,Oo(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class uh extends Zt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(o){Zt.call(this),this.h=o,this.g={}}C(wn,Zt);var Lo=[];function Uo(o){Q(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ls(c)},o),o.g={}}wn.prototype.N=function(){wn.aa.N.call(this),Uo(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=u.JSON.stringify,ch=u.JSON.parse,lh=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function js(){}js.prototype.h=null;function Bo(o){return o.h||(o.h=o.i())}function qo(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gs(){It.call(this,"d")}C(Gs,It);function zs(){It.call(this,"c")}C(zs,It);var _e={},jo=null;function Rr(){return jo=jo||new Tt}_e.La="serverreachability";function Go(o){It.call(this,_e.La,o)}C(Go,It);function An(o){const c=Rr();Rt(c,new Go(c))}_e.STAT_EVENT="statevent";function zo(o,c){It.call(this,_e.STAT_EVENT,o),this.stat=c}C(zo,It);function Pt(o){const c=Rr();Rt(c,new zo(c,o))}_e.Ma="timingevent";function Ko(o,c){It.call(this,_e.Ma,o),this.size=c}C(Ko,It);function Rn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Pn(){this.g=!0}Pn.prototype.xa=function(){this.g=!1};function hh(o,c,h,f,v,P){o.info(function(){if(o.g)if(P)for(var k="",Z=P.split("&"),gt=0;gt<Z.length;gt++){var W=Z[gt].split("=");if(1<W.length){var Et=W[0];W=W[1];var wt=Et.split("_");k=2<=wt.length&&wt[1]=="type"?k+(Et+"="+W+"&"):k+(Et+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+c+`
`+h+`
`+k})}function dh(o,c,h,f,v,P,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+c+`
`+h+`
`+P+" "+k})}function Ue(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+mh(o,h)+(f?" "+f:"")})}function fh(o,c){o.info(function(){return"TIMEOUT: "+c})}Pn.prototype.info=function(){};function mh(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var P=v[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<v.length;k++)v[k]=""}}}}return qs(h)}catch{return c}}var Pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$o={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ks;function Sr(){}C(Sr,js),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},Ks=new Sr;function te(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qo}function Qo(){this.i=null,this.g="",this.h=!1}var Wo={},$s={};function Qs(o,c,h){o.L=1,o.v=Dr(Kt(c)),o.m=h,o.P=!0,Ho(o,null)}function Ho(o,c){o.F=Date.now(),Vr(o),o.A=Kt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),ca(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Qo,o.g=Sa(o.j,h?c:null,!o.m),0<o.O&&(o.M=new uh(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var v="readystatechange";Array.isArray(v)||(v&&(Lo[0]=v.toString()),v=Lo);for(var P=0;P<v.length;P++){var k=xo(h,v[P],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),An(),hh(o.i,o.u,o.A,o.l,o.R,o.m)}te.prototype.ca=function(o){o=o.target;const c=this.M;c&&$t(o)==3?c.j():this.Y(o)},te.prototype.Y=function(o){try{if(o==this.g)t:{const wt=$t(this.g);var c=this.g.Ba();const je=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||pa(this.g)))){this.J||wt!=4||c==7||(c==8||0>=je?An(3):An(2)),Ws(this);var h=this.g.Z();this.X=h;e:if(Jo(this)){var f=pa(this.g);o="";var v=f.length,P=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ye(this),Sn(this);var k="";break e}this.h.i=new u.TextDecoder}for(c=0;c<v;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(P&&c==v-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,dh(this.i,this.u,this.A,this.l,this.R,wt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,gt=this.g;if((Z=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Z)){var W=Z;break e}}W=null}if(h=W)Ue(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hs(this,h);else{this.o=!1,this.s=3,Pt(12),ye(this),Sn(this);break t}}if(this.P){h=!0;let Ot;for(;!this.J&&this.C<k.length;)if(Ot=gh(this,k),Ot==$s){wt==4&&(this.s=4,Pt(14),h=!1),Ue(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Wo){this.s=4,Pt(15),Ue(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Ue(this.i,this.l,Ot,null),Hs(this,Ot);if(Jo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||k.length!=0||this.h.h||(this.s=1,Pt(16),h=!1),this.o=this.o&&h,!h)Ue(this.i,this.l,k,"[Invalid Chunked Response]"),ye(this),Sn(this);else if(0<k.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ei(Et),Et.M=!0,Pt(11))}}else Ue(this.i,this.l,k,null),Hs(this,k);wt==4&&ye(this),this.o&&!this.J&&(wt==4?va(this.j,this):(this.o=!1,Vr(this)))}else xh(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),ye(this),Sn(this)}}}catch{}finally{}};function Jo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function gh(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?$s:(h=Number(c.substring(h,f)),isNaN(h)?Wo:(f+=1,f+h>c.length?$s:(c=c.slice(f,f+h),o.C=f+h,c)))}te.prototype.cancel=function(){this.J=!0,ye(this)};function Vr(o){o.S=Date.now()+o.I,Xo(o,o.I)}function Xo(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rn(I(o.ba,o),c)}function Ws(o){o.B&&(u.clearTimeout(o.B),o.B=null)}te.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(fh(this.i,this.A),this.L!=2&&(An(),Pt(17)),ye(this),this.s=2,Sn(this)):Xo(this,this.S-o)};function Sn(o){o.j.G==0||o.J||va(o.j,o)}function ye(o){Ws(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Uo(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Hs(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Js(h.h,o))){if(!o.K&&Js(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Fr(h),Nr(h);else break t;ti(h),Pt(18)}}else h.za=v[1],0<h.za-h.T&&37500>v[2]&&h.F&&h.v==0&&!h.C&&(h.C=Rn(I(h.Za,h),6e3));if(1>=ta(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Te(h,11)}else if((o.K||h.g==o)&&Fr(h),!q(c))for(v=h.Da.g.parse(c),c=0;c<v.length;c++){let W=v[c];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const Et=W[3];Et!=null&&(h.la=Et,h.j.info("VER="+h.la));const wt=W[4];wt!=null&&(h.Aa=wt,h.j.info("SVER="+h.Aa));const je=W[5];je!=null&&typeof je=="number"&&0<je&&(f=1.5*je,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ot=o.g;if(Ot){const Lr=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lr){var P=f.h;P.g||Lr.indexOf("spdy")==-1&&Lr.indexOf("quic")==-1&&Lr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Xs(P,P.h),P.h=null))}if(f.D){const ni=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;ni&&(f.ya=ni,nt(f.I,f.D,ni))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=Pa(f,f.J?f.ia:null,f.W),k.K){ea(f.h,k);var Z=k,gt=f.L;gt&&(Z.I=gt),Z.B&&(Ws(Z),Vr(Z)),f.g=k}else Ea(f);0<h.i.length&&Mr(h)}else W[0]!="stop"&&W[0]!="close"||Te(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Te(h,7):Zs(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}An(4)}catch{}}var ph=class{constructor(o,c){this.g=o,this.map=c}};function Yo(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zo(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ta(o){return o.h?1:o.g?o.g.size:0}function Js(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Xs(o,c){o.g?o.g.add(c):o.h=c}function ea(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Yo.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function na(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return M(o.i)}function _h(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function yh(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function ra(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=yh(o),f=_h(o),v=f.length,P=0;P<v;P++)c.call(void 0,f[P],h&&h[P],o)}var sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ih(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),v=null;if(0<=f){var P=o[h].substring(0,f);v=o[h].substring(f+1)}else P=o[h];c(P,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ie(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ie){this.h=o.h,br(this,o.j),this.o=o.o,this.g=o.g,Cr(this,o.s),this.l=o.l;var c=o.i,h=new Cn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ia(this,h),this.m=o.m}else o&&(c=String(o).match(sa))?(this.h=!1,br(this,c[1]||"",!0),this.o=Vn(c[2]||""),this.g=Vn(c[3]||"",!0),Cr(this,c[4]),this.l=Vn(c[5]||"",!0),ia(this,c[6]||"",!0),this.m=Vn(c[7]||"")):(this.h=!1,this.i=new Cn(null,this.h))}Ie.prototype.toString=function(){var o=[],c=this.j;c&&o.push(bn(c,oa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(bn(c,oa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(bn(h,h.charAt(0)=="/"?wh:Eh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",bn(h,Ah)),o.join("")};function Kt(o){return new Ie(o)}function br(o,c,h){o.j=h?Vn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Cr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ia(o,c,h){c instanceof Cn?(o.i=c,Rh(o.i,o.h)):(h||(c=bn(c,vh)),o.i=new Cn(c,o.h))}function nt(o,c,h){o.i.set(c,h)}function Dr(o){return nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Vn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Th),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Th(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var oa=/[#\/\?@]/g,Eh=/[#\?:]/g,wh=/[#\?]/g,vh=/[#\?@]/g,Ah=/#/g;function Cn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ee(o){o.g||(o.g=new Map,o.h=0,o.i&&Ih(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Cn.prototype,r.add=function(o,c){ee(this),this.i=null,o=Be(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function aa(o,c){ee(o),c=Be(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ua(o,c){return ee(o),c=Be(o,c),o.g.has(c)}r.forEach=function(o,c){ee(this),this.g.forEach(function(h,f){h.forEach(function(v){o.call(c,v,f,this)},this)},this)},r.na=function(){ee(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const v=o[f];for(let P=0;P<v.length;P++)h.push(c[f])}return h},r.V=function(o){ee(this);let c=[];if(typeof o=="string")ua(this,o)&&(c=c.concat(this.g.get(Be(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return ee(this),this.i=null,o=Be(this,o),ua(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ca(o,c,h){aa(o,c),0<h.length&&(o.i=null,o.g.set(Be(o,c),M(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const P=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var v=P;k[f]!==""&&(v+="="+encodeURIComponent(String(k[f]))),o.push(v)}}return this.i=o.join("&")};function Be(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Rh(o,c){c&&!o.j&&(ee(o),o.i=null,o.g.forEach(function(h,f){var v=f.toLowerCase();f!=v&&(aa(this,f),ca(this,v,h))},o)),o.j=c}function Ph(o,c){const h=new Pn;if(u.Image){const f=new Image;f.onload=S(ne,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(ne,h,"TestLoadImage: error",!1,c,f),f.onabort=S(ne,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(ne,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Sh(o,c){const h=new Pn,f=new AbortController,v=setTimeout(()=>{f.abort(),ne(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(v),P.ok?ne(h,"TestPingServer: ok",!0,c):ne(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),ne(h,"TestPingServer: error",!1,c)})}function ne(o,c,h,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(h)}catch{}}function Vh(){this.g=new lh}function bh(o,c,h){const f=h||"";try{ra(o,function(v,P){let k=v;d(v)&&(k=qs(v)),c.push(f+P+"="+encodeURIComponent(k))})}catch(v){throw c.push(f+"type="+encodeURIComponent("_badmap")),v}}function Dn(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Dn,js),Dn.prototype.g=function(){return new xr(this.l,this.j)},Dn.prototype.i=function(o){return function(){return o}}({});function xr(o,c){Tt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(xr,Tt),r=xr.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,kn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;la(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function la(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?xn(this):kn(this),this.readyState==3&&la(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,xn(this))},r.Qa=function(o){this.g&&(this.response=o,xn(this))},r.ga=function(){this.g&&xn(this)};function xn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,kn(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function kn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ha(o){let c="";return Q(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ys(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=ha(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):nt(o,c,h))}function ot(o){Tt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ot,Tt);var Ch=/^https?$/i,Dh=["POST","PUT"];r=ot.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ks.g(),this.v=this.o?Bo(this.o):Bo(Ks),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){da(this,P);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)h.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),v=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Dh,c,void 0))||f||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of h)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ga(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){da(this,P)}};function da(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,fa(o),kr(o)}function fa(o){o.A||(o.A=!0,Rt(o,"complete"),Rt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Rt(this,"complete"),Rt(this,"abort"),kr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kr(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ma(this):this.bb())},r.bb=function(){ma(this)};function ma(o){if(o.h&&typeof a<"u"&&(!o.v[1]||$t(o)!=4||o.Z()!=2)){if(o.u&&$t(o)==4)Fo(o.Ea,0,o);else if(Rt(o,"readystatechange"),$t(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var v=String(o.D).match(sa)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),f=!Ch.test(v?v.toLowerCase():"")}h=f}if(h)Rt(o,"complete"),Rt(o,"success");else{o.m=6;try{var P=2<$t(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",fa(o)}}finally{kr(o)}}}}function kr(o,c){if(o.g){ga(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Rt(o,"ready");try{h.onreadystatechange=f}catch{}}}function ga(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function $t(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ch(c)}};function pa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xh(o){const c={};o=(o.g&&2<=$t(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(q(o[f]))continue;var h=w(o[f]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[v]||[];c[v]=P,P.push(h)}T(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function _a(o){this.Aa=0,this.i=[],this.j=new Pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nn("baseRetryDelayMs",5e3,o),this.cb=Nn("retryDelaySeedMs",1e4,o),this.Wa=Nn("forwardChannelMaxRetries",2,o),this.wa=Nn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yo(o&&o.concurrentRequestLimit),this.Da=new Vh,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_a.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,f){Pt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Pa(this,null,this.W),Mr(this)};function Zs(o){if(ya(o),o.G==3){var c=o.U++,h=Kt(o.I);if(nt(h,"SID",o.K),nt(h,"RID",c),nt(h,"TYPE","terminate"),Mn(o,h),c=new te(o,o.j,c),c.L=2,c.v=Dr(Kt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Sa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vr(c)}Ra(o)}function Nr(o){o.g&&(ei(o),o.g.cancel(),o.g=null)}function ya(o){Nr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Fr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Mr(o){if(!Zo(o.h)&&!o.s){o.s=!0;var c=o.Ga;In||Do(),Tn||(In(),Tn=!0),ks.add(c,o),o.B=0}}function kh(o,c){return ta(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rn(I(o.Ga,o,c),Aa(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const v=new te(this,this.j,o);let P=this.o;if(this.S&&(P?(P=p(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(v.H=P,P=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Ta(this,v,c),h=Kt(this.I),nt(h,"RID",o),nt(h,"CVER",22),this.D&&nt(h,"X-HTTP-Session-Id",this.D),Mn(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(ha(P)))+"&"+c:this.m&&Ys(h,this.m,P)),Xs(this.h,v),this.Ua&&nt(h,"TYPE","init"),this.P?(nt(h,"$req",c),nt(h,"SID","null"),v.T=!0,Qs(v,h,null)):Qs(v,h,c),this.G=2}}else this.G==3&&(o?Ia(this,o):this.i.length==0||Zo(this.h)||Ia(this))};function Ia(o,c){var h;c?h=c.l:h=o.U++;const f=Kt(o.I);nt(f,"SID",o.K),nt(f,"RID",h),nt(f,"AID",o.T),Mn(o,f),o.m&&o.o&&Ys(f,o.m,o.o),h=new te(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ta(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xs(o.h,h),Qs(h,f,c)}function Mn(o,c){o.H&&Q(o.H,function(h,f){nt(c,f,h)}),o.l&&ra({},function(h,f){nt(c,f,h)})}function Ta(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;t:{var v=o.i;let P=-1;for(;;){const k=["count="+h];P==-1?0<h?(P=v[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let Z=!0;for(let gt=0;gt<h;gt++){let W=v[gt].g;const Et=v[gt].map;if(W-=P,0>W)P=Math.max(0,v[gt].g-100),Z=!1;else try{bh(Et,k,"req"+W+"_")}catch{f&&f(Et)}}if(Z){f=k.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,f}function Ea(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;In||Do(),Tn||(In(),Tn=!0),ks.add(c,o),o.v=0}}function ti(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rn(I(o.Fa,o),Aa(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,wa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Nr(this),wa(this))};function ei(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function wa(o){o.g=new te(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Kt(o.qa);nt(c,"RID","rpc"),nt(c,"SID",o.K),nt(c,"AID",o.T),nt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&nt(c,"TO",o.ja),nt(c,"TYPE","xmlhttp"),Mn(o,c),o.m&&o.o&&Ys(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Dr(Kt(c)),h.m=null,h.P=!0,Ho(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Nr(this),ti(this),Pt(19))};function Fr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function va(o,c){var h=null;if(o.g==c){Fr(o),ei(o),o.g=null;var f=2}else if(Js(o.h,c))h=c.D,ea(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var v=o.B;f=Rr(),Rt(f,new Ko(f,h)),Mr(o)}else Ea(o);else if(v=c.s,v==3||v==0&&0<c.X||!(f==1&&kh(o,c)||f==2&&ti(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),v){case 1:Te(o,5);break;case 4:Te(o,10);break;case 3:Te(o,6);break;default:Te(o,2)}}}function Aa(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Te(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const v=!f;f=new Ie(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||br(f,"https"),Dr(f),v?Ph(f.toString(),h):Sh(f.toString(),h)}else Pt(2);o.G=0,o.l&&o.l.sa(c),Ra(o),ya(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ra(o){if(o.G=0,o.ka=[],o.l){const c=na(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function Pa(o,c,h){var f=h instanceof Ie?Kt(h):new Ie(h);if(f.g!="")c&&(f.g=c+"."+f.g),Cr(f,f.s);else{var v=u.location;f=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;var P=new Ie(null);f&&br(P,f),c&&(P.g=c),v&&Cr(P,v),h&&(P.l=h),f=P}return h=o.D,c=o.ya,h&&c&&nt(f,h,c),nt(f,"VER",o.la),Mn(o,f),f}function Sa(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ot(new Dn({eb:h})):new ot(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Va(){}r=Va.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Or(){}Or.prototype.g=function(o,c){return new Dt(o,c)};function Dt(o,c){Tt.call(this),this.g=new _a(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!q(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new qe(this)}C(Dt,Tt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Zs(this.g)},Dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qs(o),o=h);c.i.push(new ph(c.Ya++,o)),c.G==3&&Mr(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Zs(this.g),delete this.g,Dt.aa.N.call(this)};function ba(o){Gs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(ba,Gs);function Ca(){zs.call(this),this.status=1}C(Ca,zs);function qe(o){this.g=o}C(qe,Va),qe.prototype.ua=function(){Rt(this.g,"a")},qe.prototype.ta=function(o){Rt(this.g,new ba(o))},qe.prototype.sa=function(o){Rt(this.g,new Ca)},qe.prototype.ra=function(){Rt(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Yu=function(){return new Or},Xu=function(){return Rr()},Ju=_e,di={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pr.NO_ERROR=0,Pr.TIMEOUT=8,Pr.HTTP_ERROR=6,$r=Pr,$o.COMPLETE="complete",Hu=$o,qo.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,jn=qo,Wu=Dn,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,Qu=ot}).apply(typeof Ur<"u"?Ur:typeof self<"u"?self:typeof window<"u"?window:{});const xa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Uh("@firebase/firestore");function He(){return Ve.logLevel}function b(r,...t){if(Ve.logLevel<=Wt.DEBUG){const e=t.map(Oi);Ve.debug(`Firestore (${mn}): ${r}`,...e)}}function ut(r,...t){if(Ve.logLevel<=Wt.ERROR){const e=t.map(Oi);Ve.error(`Firestore (${mn}): ${r}`,...e)}}function Yn(r,...t){if(Ve.logLevel<=Wt.WARN){const e=t.map(Oi);Ve.warn(`Firestore (${mn}): ${r}`,...e)}}function Oi(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const t=`FIRESTORE (${mn}) INTERNAL ASSERTION FAILED: `+r;throw ut(t),new Error(t)}function L(r,t){r||F()}function O(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Lh{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(At.UNAUTHENTICATED))}shutdown(){}}class td{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Yh(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new At(t)}}class ed{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nd{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ed(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new rd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=id(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function j(r,t){return r<t?-1:r>t?1:0}function nn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function tc(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new it(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new it(0,0))}static max(){return new U(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(),n===void 0?n=t.length-e:n>t.length-e&&F(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Zn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Zn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends Zn{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const od=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Zn{construct(t,e,n){return new st(t,e,n)}static isValidIdentifier(t){return od.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(H.fromString(t))}static fromName(t){return new N(H.fromString(t).popFirst(5))}static empty(){return new N(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new H(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function fi(r){return r.fields.find(t=>t.kind===2)}function we(r){return r.fields.filter(t=>t.kind!==2)}ns.UNKNOWN_ID=-1;class Qr{constructor(t,e){this.fieldPath=t,this.kind=e}}class tr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new tr(0,Nt.min())}}function ec(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new it(e+1,0):new it(e,n));return new Nt(s,N.empty(),t)}function nc(r){return new Nt(r.readTime,r.key,-1)}class Nt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Nt(U.min(),N.empty(),-1)}static max(){return new Nt(U.max(),N.empty(),-1)}}function Li(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==rc)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(s=>s?R.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new R((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(m=>{a[d]=m,++u,u===i&&n(a)},m=>s(m))}})}static doWhile(t,e){return new R((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Bt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new $n(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Ui(n.target.error);this.V.reject(new $n(t,s))}}static open(t,e,n,s){try{return new ps(e,t.transaction(s,n))}catch(i){throw new $n(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(b("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new ud(e)}}class ae{constructor(t,e,n){this.name=t,this.version=e,this.p=n,ae.S(es())===12.2&&ut("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return b("SimpleDb","Removing database:",t),ve(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Bh())return!1;if(ae.C())return!0;const t=es(),e=ae.S(t),n=0<e&&e<10,s=ic(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.v)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new $n(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new $n(t,a))},s.onupgradeneeded=i=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.p.O(a,s.transaction,i.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=ps.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),R.reject(d))).toPromise();return l.catch(()=>{}),await u.m,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(b("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ic(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class ad{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return ve(this.B.delete())}}class $n extends x{constructor(t,e){super(V.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function me(r){return r.name==="IndexedDbTransactionError"}class ud{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),ve(n)}add(t){return b("SimpleDb","ADD",this.store.name,t,t),ve(this.store.add(t))}get(t){return ve(this.store.get(t)).next(e=>(e===void 0&&(e=null),b("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return b("SimpleDb","DELETE",this.store.name,t),ve(this.store.delete(t))}count(){return b("SimpleDb","COUNT",this.store.name),ve(this.store.count())}U(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new R((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.W(i,(u,l)=>{a.push(l)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new R((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}j(t,e){b("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const s=this.cursor(n);return this.W(s,(i,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.W(s,e)}Y(t){const e=this.cursor({});return new R((n,s)=>{e.onerror=i=>{const a=Ui(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new R((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new ad(u),d=e(u.primaryKey,u.value,l);if(d instanceof R){const m=d.catch(g=>(l.done(),R.reject(g)));n.push(m)}l.isDone?s():l.K===null?u.continue():u.continue(l.K)}}).next(()=>R.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ve(r){return new R((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Ui(n.target.error);e(s)}})}let ka=!1;function Ui(r){const t=ae.S(es());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ka||(ka=!0,setTimeout(()=>{throw n},0)),n}}return r}class cd{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){b("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{b("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){me(e)?b("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await fe(e)}await this.X(6e4)})}}class ld{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let s=e,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return b("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(s,i)).next(u=>(b("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=nc(i);Li(a,n)>0&&(n=a)}),new Nt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}bt.oe=-1;function lr(r){return r==null}function er(r){return r===0&&1/r==-1/0}function oc(r){return typeof r=="number"&&Number.isInteger(r)&&!er(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Na(t)),t=hd(r.get(e),t);return Na(t)}function hd(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function Na(r){return r+""}function qt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===""&&r.charAt(1)===""),H.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf("",i);switch((a<0||a>e)&&F(),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:F()}i=a+2}return new H(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(r,t){return[r,St(t)]}function ac(r,t,e){return[r,St(t),e]}const dd={},fd=["prefixPath","collectionGroup","readTime","documentId"],md=["prefixPath","collectionGroup","documentId"],gd=["collectionGroup","readTime","prefixPath","documentId"],pd=["canonicalId","targetId"],_d=["targetId","path"],yd=["path","targetId"],Id=["collectionId","parent"],Td=["indexId","uid"],Ed=["uid","sequenceNumber"],wd=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vd=["indexId","uid","orderedDocumentKey"],Ad=["userId","collectionPath","documentId"],Rd=["userId","collectionPath","largestBatchId"],Pd=["userId","collectionGroup","largestBatchId"],uc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Sd=[...uc,"documentOverlays"],cc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lc=cc,hc=[...lc,"indexConfiguration","indexState","indexEntries"],Vd=hc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends sc{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function mt(r,t){const e=O(r);return ae.F(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Fe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function dc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Br(this.root,t,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Br(this.root,t,this.comparator,!0)}}class Br{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new pt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oa(this.data.getIterator())}getIteratorFrom(t){return new Oa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Y(this.comparator);return e.data=t,e}}class Oa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ge(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new Y(st.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fc("Invalid base64 string: "+i):i}}(t);return new ft(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const bd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(r){if(L(!!r),typeof r=="string"){let t=0;const e=bd.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ce(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function qi(r){const t=r.mapValue.fields.__previous_value__;return Bi(t)?qi(t):t}function nr(r){const t=Xt(r.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,n,s,i,a,u,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class be{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new be("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof be&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Hr={nullValue:"NULL_VALUE"};function Ce(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Bi(r)?4:mc(r)?9007199254740991:10:F()}function Gt(r,t){if(r===t)return!0;const e=Ce(r);if(e!==Ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return nr(r).isEqual(nr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xt(s.timestampValue),u=Xt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ce(s.bytesValue).isEqual(ce(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),u=at(i.doubleValue);return a===u?er(a)===er(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return nn(r.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Fa(a)!==Fa(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Gt(a[l],u[l])))return!1;return!0}(r,t);default:return F()}}function rr(r,t){return(r.values||[]).find(e=>Gt(e,t))!==void 0}function le(r,t){if(r===t)return 0;const e=Ce(r),n=Ce(t);if(e!==n)return j(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=at(i.integerValue||i.doubleValue),l=at(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return La(r.timestampValue,t.timestampValue);case 4:return La(nr(r),nr(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ce(i),l=ce(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=j(u[d],l[d]);if(m!==0)return m}return j(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=j(at(i.latitude),at(a.latitude));return u!==0?u:j(at(i.longitude),at(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(i,a){const u=i.values||[],l=a.values||[];for(let d=0;d<u.length&&d<l.length;++d){const m=le(u[d],l[d]);if(m)return m}return j(u.length,l.length)}(r.arrayValue,t.arrayValue);case 10:return function(i,a){if(i===oe.mapValue&&a===oe.mapValue)return 0;if(i===oe.mapValue)return 1;if(a===oe.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const I=j(l[g],m[g]);if(I!==0)return I;const S=le(u[l[g]],d[m[g]]);if(S!==0)return S}return j(l.length,m.length)}(r.mapValue,t.mapValue);default:throw F()}}function La(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=Xt(r),n=Xt(t),s=j(e.seconds,n.seconds);return s!==0?s:j(e.nanos,n.nanos)}function rn(r){return gi(r)}function gi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Xt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ce(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return N.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=gi(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${gi(e.fields[a])}`;return s+"}"}(r.mapValue):F()}function sr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function pi(r){return!!r&&"integerValue"in r}function ir(r){return!!r&&"arrayValue"in r}function Ua(r){return!!r&&"nullValue"in r}function Ba(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Jr(r){return!!r&&"mapValue"in r}function Qn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Fe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Qn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function mc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Dd(r){return"nullValue"in r?Hr:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?sr(be.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:F()}function xd(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?sr(be.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?oe:F()}function qa(r,t){const e=le(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function ja(r,t){const e=le(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.value=t}static empty(){return new _t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Jr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qn(e)}setAll(t){let e=st.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Qn(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Jr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Jr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Fe(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new _t(Qn(this.value))}}function gc(r){const t=[];return Fe(r.fields,(e,n)=>{const s=new st([e]);if(Jr(n)){const i=gc(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new rt(t,0,U.min(),U.min(),U.min(),_t.empty(),0)}static newFoundDocument(t,e,n,s){return new rt(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new rt(t,2,e,U.min(),U.min(),_t.empty(),0)}static newUnknownDocument(t,e){return new rt(t,3,e,U.min(),U.min(),_t.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e){this.position=t,this.inclusive=e}}function Ga(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),e.key):n=le(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function za(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Gt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e="asc"){this.field=t,this.dir=e}}function kd(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{}class K extends pc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Nd(t,e,n):e==="array-contains"?new Od(t,n):e==="in"?new wc(t,n):e==="not-in"?new Ld(t,n):e==="array-contains-any"?new Ud(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Md(t,n):new Fd(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(le(e,this.value)):e!==null&&Ce(this.value)===Ce(e)&&this.matchesComparison(le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class X extends pc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new X(t,e)}matches(t){return on(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function on(r){return r.op==="and"}function _i(r){return r.op==="or"}function ji(r){return _c(r)&&on(r)}function _c(r){for(const t of r.filters)if(t instanceof X)return!1;return!0}function yi(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+rn(r.value);if(ji(r))return r.filters.map(t=>yi(t)).join(",");{const t=r.filters.map(e=>yi(e)).join(",");return`${r.op}(${t})`}}function yc(r,t){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&Gt(n.value,s.value)}(r,t):r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&yc(a,s.filters[u]),!0):!1}(r,t):void F()}function Ic(r,t){const e=r.filters.concat(t);return X.create(e,r.op)}function Tc(r){return r instanceof K?function(e){return`${e.field.canonicalString()} ${e.op} ${rn(e.value)}`}(r):r instanceof X?function(e){return e.op.toString()+" {"+e.getFilters().map(Tc).join(" ,")+"}"}(r):"Filter"}class Nd extends K{constructor(t,e,n){super(t,e,n),this.key=N.fromName(n.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class Md extends K{constructor(t,e){super(t,"in",e),this.keys=Ec("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Fd extends K{constructor(t,e){super(t,"not-in",e),this.keys=Ec("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ec(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>N.fromName(n.referenceValue))}class Od extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ir(e)&&rr(e.arrayValue,this.value)}}class wc extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&rr(this.value.arrayValue,e)}}class Ld extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!rr(this.value.arrayValue,e)}}class Ud extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ir(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>rr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function Ii(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Bd(r,t,e,n,s,i,a)}function De(r){const t=O(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>yi(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>rn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>rn(n)).join(",")),t.ue=e}return t.ue}function hr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!kd(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!yc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!za(r.startAt,t.startAt)&&za(r.endAt,t.endAt)}function ss(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function is(r,t){return r.filters.filter(e=>e instanceof K&&e.field.isEqual(t))}function Ka(r,t,e){let n=Hr,s=!0;for(const i of is(r,t)){let a=Hr,u=!0;switch(i.op){case"<":case"<=":a=Dd(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Hr}qa({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];qa({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function $a(r,t,e){let n=oe,s=!0;for(const i of is(r,t)){let a=oe,u=!0;switch(i.op){case">=":case">":a=xd(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=oe}ja({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];ja({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vc(r,t,e,n,s,i,a,u){return new dr(r,t,e,n,s,i,a,u)}function fr(r){return new dr(r)}function Qa(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ac(r){return r.collectionGroup!==null}function Wn(r){const t=O(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Y(st.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new rs(i,n))}),e.has(st.keyField().canonicalString())||t.ce.push(new rs(st.keyField(),n))}return t.ce}function kt(r){const t=O(r);return t.le||(t.le=qd(t,Wn(r))),t.le}function qd(r,t){if(r.limitType==="F")return Ii(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rs(s.field,i)});const e=r.endAt?new sn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new sn(r.startAt.position,r.startAt.inclusive):null;return Ii(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ti(r,t){const e=r.filters.concat([t]);return new dr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Ei(r,t,e){return new dr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function _s(r,t){return hr(kt(r),kt(t))&&r.limitType===t.limitType}function Rc(r){return`${De(kt(r))}|lt:${r.limitType}`}function Je(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Tc(s)).join(", ")}]`),lr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>rn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>rn(s)).join(",")),`Target(${n})`}(kt(r))}; limitType=${r.limitType})`}function mr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of Wn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=Ga(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,Wn(n),s)||n.endAt&&!function(a,u,l){const d=Ga(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,Wn(n),s))}(r,t)}function Pc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Sc(r){return(t,e)=>{let n=!1;for(const s of Wn(r)){const i=jd(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function jd(r,t,e){const n=r.field.isKeyField()?N.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?le(l,d):F()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Fe(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return dc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new et(N.comparator);function xt(){return Gd}const Vc=new et(N.comparator);function Gn(...r){let t=Vc;for(const e of r)t=t.insert(e.key,e);return t}function bc(r){let t=Vc;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function jt(){return Hn()}function Cc(){return Hn()}function Hn(){return new ge(r=>r.toString(),(r,t)=>r.isEqual(t))}const zd=new et(N.comparator),Kd=new Y(N.comparator);function z(...r){let t=Kd;for(const e of r)t=t.add(e);return t}const $d=new Y(j);function Gi(){return $d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(t)?"-0":t}}function xc(r){return{integerValue:""+r}}function Qd(r,t){return oc(t)?xc(t):Dc(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this._=void 0}}function Wd(r,t,e){return r instanceof or?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bi(i)&&(i=qi(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):r instanceof an?Nc(r,t):r instanceof un?Mc(r,t):function(s,i){const a=kc(s,i),u=Wa(a)+Wa(s.Pe);return pi(a)&&pi(s.Pe)?xc(u):Dc(s.serializer,u)}(r,t)}function Hd(r,t,e){return r instanceof an?Nc(r,t):r instanceof un?Mc(r,t):e}function kc(r,t){return r instanceof ar?function(n){return pi(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class or extends ys{}class an extends ys{constructor(t){super(),this.elements=t}}function Nc(r,t){const e=Fc(t);for(const n of r.elements)e.some(s=>Gt(s,n))||e.push(n);return{arrayValue:{values:e}}}class un extends ys{constructor(t){super(),this.elements=t}}function Mc(r,t){let e=Fc(t);for(const n of r.elements)e=e.filter(s=>!Gt(s,n));return{arrayValue:{values:e}}}class ar extends ys{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Wa(r){return at(r.integerValue||r.doubleValue)}function Fc(r){return ir(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,e){this.field=t,this.transform=e}}function Xd(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof an&&s instanceof an||n instanceof un&&s instanceof un?nn(n.elements,s.elements,Gt):n instanceof ar&&s instanceof ar?Gt(n.Pe,s.Pe):n instanceof or&&s instanceof or}(r.transform,t.transform)}class Yd{constructor(t,e){this.version=t,this.transformResults=e}}class lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Is{}function Oc(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ts(r.key,lt.none()):new gn(r.key,r.data,lt.none());{const e=r.data,n=_t.empty();let s=new Y(st.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new Yt(r.key,n,new Ct(s.toArray()),lt.none())}}function Zd(r,t,e){r instanceof gn?function(s,i,a){const u=s.value.clone(),l=Ja(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof Yt?function(s,i,a){if(!Xr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Ja(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Lc(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Jn(r,t,e,n){return r instanceof gn?function(i,a,u,l){if(!Xr(i.precondition,a))return u;const d=i.value.clone(),m=Xa(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof Yt?function(i,a,u,l){if(!Xr(i.precondition,a))return u;const d=Xa(i.fieldTransforms,l,a),m=a.data;return m.setAll(Lc(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return Xr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function tf(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=kc(n.transform,s||null);i!=null&&(e===null&&(e=_t.empty()),e.set(n.field,i))}return e||null}function Ha(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&nn(n,s,(i,a)=>Xd(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class gn extends Is{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yt extends Is{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lc(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Ja(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Hd(a,u,e[s]))}return n}function Xa(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Wd(i,a,t))}return n}class Ts extends Is{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zi extends Is{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Zd(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Jn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Jn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Cc();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=Oc(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&nn(this.mutations,t.mutations,(e,n)=>Ha(e,n))&&nn(this.baseMutations,t.baseMutations,(e,n)=>Ha(e,n))}}class $i{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=function(){return zd}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new $i(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,$;function Uc(r){switch(r){default:return F();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Bc(r){if(r===void 0)return ut("GRPC error has no .code"),V.UNKNOWN;switch(r){case ct.OK:return V.OK;case ct.CANCELLED:return V.CANCELLED;case ct.UNKNOWN:return V.UNKNOWN;case ct.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ct.INTERNAL:return V.INTERNAL;case ct.UNAVAILABLE:return V.UNAVAILABLE;case ct.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ct.NOT_FOUND:return V.NOT_FOUND;case ct.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ct.ABORTED:return V.ABORTED;case ct.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ct.DATA_LOSS:return V.DATA_LOSS;default:return F()}}($=ct||(ct={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Se([4294967295,4294967295],0);function Ya(r){const t=nf().encode(r),e=new $u;return e.update(t),new Uint8Array(e.digest())}function Za(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Se([e,n],0),new Se([s,i],0)]}class Wi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new zn(`Invalid padding: ${e}`);if(n<0)throw new zn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new zn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new zn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Se.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Se.fromNumber(n)));return s.compare(rf)===1&&(s=new Se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ya(t),[n,s]=Za(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Wi(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Ya(t),[n,s]=Za(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,pr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new gr(U.min(),s,new et(j),xt(),z())}}class pr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new pr(n,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class qc{constructor(t,e){this.targetId=t,this.me=e}}class jc{constructor(t,e,n=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class tu{constructor(){this.fe=0,this.ge=nu(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=z(),e=z(),n=z();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:F()}}),new pr(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=nu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sf{constructor(t){this.Le=t,this.Be=new Map,this.ke=xt(),this.qe=eu(),this.Qe=new et(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:F()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(ss(i))if(n===0){const a=new N(i.path);this.Ue(e,a,rt.newNoDocument(a,U.min()))}else L(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),l=u?this.Xe(u,t,a):1;if(l!==0){this.je(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ce(n).toUint8Array()}catch(l){if(l instanceof fc)return Yn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Wi(a,s,i)}catch(l){return Yn(l instanceof zn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const u=this.Je(a);if(u){if(i.current&&ss(u.target)){const l=new N(u.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,rt.newNoDocument(l,t))}i.be&&(e.set(a,i.Ce()),i.ve())}});let n=z();this.qe.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new gr(t,e,this.Qe,this.ke,n);return this.ke=xt(),this.qe=eu(),this.Qe=new et(j),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new tu,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Y(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new tu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function eu(){return new et(N.comparator)}function nu(){return new et(N.comparator)}const of={asc:"ASCENDING",desc:"DESCENDING"},af={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uf={and:"AND",or:"OR"};class cf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wi(r,t){return r.useProto3Json||lr(t)?t:{value:t}}function cn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gc(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function lf(r,t){return cn(r,t.toTimestamp())}function dt(r){return L(!!r),U.fromTimestamp(function(e){const n=Xt(e);return new it(n.seconds,n.nanos)}(r))}function Hi(r,t){return vi(r,t).canonicalString()}function vi(r,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function zc(r){const t=H.fromString(r);return L(Zc(t)),t}function ur(r,t){return Hi(r.databaseId,t.path)}function Jt(r,t){const e=zc(t);if(e.get(1)!==r.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new N(Qc(e))}function Kc(r,t){return Hi(r.databaseId,t)}function $c(r){const t=zc(r);return t.length===4?H.emptyPath():Qc(t)}function Ai(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Qc(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ru(r,t,e){return{name:ur(r,t),fields:e.value.mapValue.fields}}function hf(r,t,e){const n=Jt(r,t.name),s=dt(t.updateTime),i=t.createTime?dt(t.createTime):U.min(),a=new _t({mapValue:{fields:t.fields}}),u=rt.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function df(r,t){return"found"in t?function(n,s){L(!!s.found),s.found.name,s.found.updateTime;const i=Jt(n,s.found.name),a=dt(s.found.updateTime),u=s.found.createTime?dt(s.found.createTime):U.min(),l=new _t({mapValue:{fields:s.found.fields}});return rt.newFoundDocument(i,a,u,l)}(r,t):"missing"in t?function(n,s){L(!!s.missing),L(!!s.readTime);const i=Jt(n,s.missing),a=dt(s.readTime);return rt.newNoDocument(i,a)}(r,t):F()}function ff(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string"),ft.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ft.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?V.UNKNOWN:Bc(d.code);return new x(m,d.message||"")}(a);e=new jc(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Jt(r,n.document.name),i=dt(n.document.updateTime),a=n.document.createTime?dt(n.document.createTime):U.min(),u=new _t({mapValue:{fields:n.document.fields}}),l=rt.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Yr(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Jt(r,n.document),i=n.readTime?dt(n.readTime):U.min(),a=rt.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Yr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Jt(r,n.document),i=n.removedTargetIds||[];e=new Yr([],i,s,null)}else{if(!("filter"in t))return F();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new ef(s,i),u=n.targetId;e=new qc(u,a)}}return e}function cr(r,t){let e;if(t instanceof gn)e={update:ru(r,t.key,t.value)};else if(t instanceof Ts)e={delete:ur(r,t.key)};else if(t instanceof Yt)e={update:ru(r,t.key,t.data),updateMask:If(t.fieldMask)};else{if(!(t instanceof zi))return F();e={verify:ur(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof an)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof un)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ar)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw F()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(r,t.precondition)),e}function Ri(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?lt.updateTime(dt(i.updateTime)):i.exists!==void 0?lt.exists(i.exists):lt.none()}(t.currentDocument):lt.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),l=new or;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new an(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new un(m)}else"increment"in u?l=new ar(a,u.increment):F();const d=st.fromServerFormat(u.fieldPath);return new Jd(d,l)}(r,s)):[];if(t.update){t.update.name;const s=Jt(r,t.update.name),i=new _t({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ct(d.map(m=>st.fromServerFormat(m)))}(t.updateMask);return new Yt(s,i,a,e,n)}return new gn(s,i,e,n)}if(t.delete){const s=Jt(r,t.delete);return new Ts(s,e)}if(t.verify){const s=Jt(r,t.verify);return new zi(s,e)}return F()}function mf(r,t){return r&&r.length>0?(L(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?dt(s.updateTime):dt(i);return a.isEqual(U.min())&&(a=dt(i)),new Yd(a,s.transformResults||[])}(e,t))):[]}function Wc(r,t){return{documents:[Kc(r,t.path)]}}function Hc(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Kc(r,s);const i=function(d){if(d.length!==0)return Yc(X.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:Xe(I.field),direction:pf(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=wi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Jc(r){let t=$c(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=function(g){const I=Xc(g);return I instanceof X&&ji(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(I=>function(C){return new rs(Ye(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(g){let I;return I=typeof g=="object"?g.value:g,lr(I)?null:I}(e.limit));let l=null;e.startAt&&(l=function(g){const I=!!g.before,S=g.values||[];return new sn(S,I)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const I=!g.before,S=g.values||[];return new sn(S,I)}(e.endAt)),vc(t,s,a,i,u,"F",l,d)}function gf(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xc(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ye(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ye(e.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ye(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ye(e.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(e){return K.create(Ye(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return X.create(e.compositeFilter.filters.map(n=>Xc(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(r):F()}function pf(r){return of[r]}function _f(r){return af[r]}function yf(r){return uf[r]}function Xe(r){return{fieldPath:r.canonicalString()}}function Ye(r){return st.fromServerFormat(r.fieldPath)}function Yc(r){return r instanceof K?function(e){if(e.op==="=="){if(Ba(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ba(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xe(e.field),op:_f(e.op),value:e.value}}}(r):r instanceof X?function(e){const n=e.getFilters().map(s=>Yc(s));return n.length===1?n[0]:{compositeFilter:{op:yf(e.op),filters:n}}}(r):F()}function If(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zc(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,n,s,i=U.min(),a=U.min(),u=ft.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){this.ct=t}}function Tf(r,t){let e;if(t.document)e=hf(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=N.fromSegments(t.noDocument.path),s=ke(t.noDocument.readTime);e=rt.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return F();{const n=N.fromSegments(t.unknownDocument.path),s=ke(t.unknownDocument.version);e=rt.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new it(s[0],s[1]);return U.fromTimestamp(i)}(t.readTime)),e}function su(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:os(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:ur(i,a.key),fields:a.data.value.mapValue.fields,updateTime:cn(i,a.version.toTimestamp()),createTime:cn(i,a.createTime.toTimestamp())}}(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:xe(t.version)};else{if(!t.isUnknownDocument())return F();n.unknownDocument={path:e.path.toArray(),version:xe(t.version)}}return n}function os(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function xe(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function ke(r){const t=new it(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function Ae(r,t){const e=(t.baseMutations||[]).map(i=>Ri(r.ct,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>Ri(r.ct,i)),s=it.fromMillis(t.localWriteTimeMs);return new Ki(t.batchId,s,e,n)}function Kn(r){const t=ke(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?ke(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),kt(fr($c(i.documents[0])))}(r.query):function(i){return kt(Jc(i))}(r.query),new Ht(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ft.fromBase64String(r.resumeToken))}function el(r,t){const e=xe(t.snapshotVersion),n=xe(t.lastLimboFreeSnapshotVersion);let s;s=ss(t.target)?Wc(r.ct,t.target):Hc(r.ct,t.target)._t;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:De(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function nl(r){const t=Jc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ei(t,t.limit,"L"):t}function si(r,t){return new Qi(t.largestBatchId,Ri(r.ct,t.overlayMutation))}function iu(r,t){const e=t.path.lastSegment();return[r,St(t.path.popLast()),e]}function ou(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:xe(n.readTime),documentKey:St(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{getBundleMetadata(t,e){return au(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:ke(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return au(t).put(function(s){return{bundleId:s.id,createTime:xe(dt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return uu(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:nl(i.bundledQuery),readTime:ke(i.readTime)}}(n)})}saveNamedQuery(t,e){return uu(t).put(function(s){return{name:s.name,readTime:xe(dt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function au(r){return mt(r,"bundles")}function uu(r){return mt(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new Es(t,n)}getOverlay(t,e){return Fn(t).get(iu(this.userId,e)).next(n=>n?si(this.serializer,n):null)}getOverlays(t,e){const n=jt();return R.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new Qi(e,a);s.push(this.ht(t,u))}),R.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(St(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Fn(t).j("collectionPathOverlayIndex",u))}),R.waitFor(i)}getOverlaysForCollection(t,e,n){const s=jt(),i=St(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Fn(t).U("collectionPathOverlayIndex",a).next(u=>{for(const l of u){const d=si(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=jt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Fn(t).J({index:"collectionGroupOverlayIndex",range:u},(l,d,m)=>{const g=si(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()}).next(()=>i)}ht(t,e){return Fn(t).put(function(s,i,a){const[u,l,d]=iu(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:cr(s.ct,a.mutation)}}(this.serializer,this.userId,e))}}function Fn(r){return mt(r,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(at(t.integerValue));else if("doubleValue"in t){const n=at(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),er(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Et(e,20),typeof n=="string"&&(n=Xt(n)),e.At(`${n.seconds||""}`),e.dt(n.nanos||0)}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(ce(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?mc(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):F()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const s of Object.keys(n))this.Rt(s,e),this.It(n[s],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const s of n)this.It(s,e)}gt(t,e){this.Et(e,37),N.fromName(t).path.forEach(n=>{this.Et(e,60),this.St(n,e)})}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Re.bt=new Re;function wf(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function cu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=wf(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class vf{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ct(n.value),n=e.next();this.vt()}Ft(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Mt(n.value),n=e.next();this.xt()}Ot(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ct(n);else if(n<2048)this.Ct(960|n>>>6),this.Ct(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ct(480|n>>>12),this.Ct(128|63&n>>>6),this.Ct(128|63&n);else{const s=e.codePointAt(0);this.Ct(240|s>>>18),this.Ct(128|63&s>>>12),this.Ct(128|63&s>>>6),this.Ct(128|63&s)}}this.vt()}Nt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Mt(n);else if(n<2048)this.Mt(960|n>>>6),this.Mt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Mt(480|n>>>12),this.Mt(128|63&n>>>6),this.Mt(128|63&n);else{const s=e.codePointAt(0);this.Mt(240|s>>>18),this.Mt(128|63&s>>>12),this.Mt(128|63&s>>>6),this.Mt(128|63&s)}}this.xt()}Lt(t){const e=this.Bt(t),n=cu(e);this.kt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}qt(t){const e=this.Bt(t),n=cu(e);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(t){this.kt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Wt(){return this.buffer.slice(0,this.position)}Bt(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Ct(t){const e=255&t;e===0?(this.Kt(0),this.Kt(255)):e===255?(this.Kt(255),this.Kt(0)):this.Kt(e)}Mt(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(t){this.kt(1),this.buffer[this.position++]=t}Ut(t){this.kt(1),this.buffer[this.position++]=~t}kt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Af{constructor(t){this.Gt=t}ft(t){this.Gt.Dt(t)}At(t){this.Gt.Ot(t)}dt(t){this.Gt.Lt(t)}Tt(){this.Gt.Qt()}}class Rf{constructor(t){this.Gt=t}ft(t){this.Gt.Ft(t)}At(t){this.Gt.Nt(t)}dt(t){this.Gt.qt(t)}Tt(){this.Gt.$t()}}class On{constructor(){this.Gt=new vf,this.zt=new Af(this.Gt),this.jt=new Rf(this.Gt)}seed(t){this.Gt.seed(t)}Ht(t){return t===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}Jt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Pe(this.indexId,this.documentKey,this.arrayValue,n)}}function re(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=lu(r.arrayValue,t.arrayValue),e!==0?e:(e=lu(r.directionalValue,t.directionalValue),e!==0?e:N.comparator(r.documentKey,t.documentKey)))}function lu(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t){this.Yt=new Y((e,n)=>st.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Zt=t.orderBy,this.Xt=[];for(const e of t.filters){const n=e;n.isInequality()?this.Yt=this.Yt.add(n):this.Xt.push(n)}}get en(){return this.Yt.size>1}tn(t){if(L(t.collectionGroup===this.collectionId),this.en)return!1;const e=fi(t);if(e!==void 0&&!this.nn(e))return!1;const n=we(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.nn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Yt.size>0){const u=this.Yt.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.rn(u,l)||!this.sn(this.Zt[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.Zt.length||!this.sn(this.Zt[a++],u))return!1}return!0}on(){if(this.en)return null;let t=new Y(st.comparator);const e=[];for(const n of this.Xt)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Qr(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Qr(n.field,0))}for(const n of this.Zt)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Qr(n.field,n.dir==="asc"?0:1)));return new ns(ns.UNKNOWN_ID,this.collectionId,e,tr.empty())}nn(t){for(const e of this.Xt)if(this.rn(e,t))return!0;return!1}rn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}sn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r){var t,e;if(L(r instanceof K||r instanceof X),r instanceof K){if(r instanceof wc){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>K.create(r.field,"==",i)))||[];return X.create(s,"or")}return r}const n=r.filters.map(s=>rl(s));return X.create(n,r.op)}function Pf(r){if(r.getFilters().length===0)return[];const t=Vi(rl(r));return L(sl(t)),Pi(t)||Si(t)?[t]:t.getFilters()}function Pi(r){return r instanceof K}function Si(r){return r instanceof X&&ji(r)}function sl(r){return Pi(r)||Si(r)||function(e){if(e instanceof X&&_i(e)){for(const n of e.getFilters())if(!Pi(n)&&!Si(n))return!1;return!0}return!1}(r)}function Vi(r){if(L(r instanceof K||r instanceof X),r instanceof K)return r;if(r.filters.length===1)return Vi(r.filters[0]);const t=r.filters.map(n=>Vi(n));let e=X.create(t,r.op);return e=as(e),sl(e)?e:(L(e instanceof X),L(on(e)),L(e.filters.length>1),e.filters.reduce((n,s)=>Ji(n,s)))}function Ji(r,t){let e;return L(r instanceof K||r instanceof X),L(t instanceof K||t instanceof X),e=r instanceof K?t instanceof K?function(s,i){return X.create([s,i],"and")}(r,t):du(r,t):t instanceof K?du(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),on(s)&&on(i))return Ic(s,i.getFilters());const a=_i(s)?s:i,u=_i(s)?i:s,l=a.filters.map(d=>Ji(d,u));return X.create(l,"or")}(r,t),as(e)}function du(r,t){if(on(t))return Ic(t,r.getFilters());{const e=t.filters.map(n=>Ji(r,n));return X.create(e,"or")}}function as(r){if(L(r instanceof K||r instanceof X),r instanceof K)return r;const t=r.getFilters();if(t.length===1)return as(t[0]);if(_c(r))return r;const e=t.map(s=>as(s)),n=[];return e.forEach(s=>{s instanceof K?n.push(s):s instanceof X&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:X.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this._n=new Xi}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Nt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Nt.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Xi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Y(H.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Y(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Uint8Array(0);class Vf{constructor(t,e){this.databaseId=e,this.an=new Xi,this.un=new ge(n=>De(n),(n,s)=>hr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.an.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.an.add(e)});const i={collectionId:n,parent:St(s)};return fu(t).put(i)}return R.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[tc(e),""],!1,!0);return fu(t).U(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(qt(a.parent))}return n})}addFieldIndex(t,e){const n=Ln(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=Ke(t);return i.next(u=>{a.put(ou(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=Ln(t),s=Ke(t),i=ze(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Ln(t),n=ze(t),s=Ke(t);return e.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(t,e){return R.forEach(this.cn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new hu(n).on();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=ze(t);let s=!0;const i=new Map;return R.forEach(this.cn(e),a=>this.ln(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=z();const u=[];return R.forEach(i,(l,d)=>{b("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(J=>`${J.fieldPath}:${J.kind}`).join(",")}`}(l)} to execute ${De(e)}`);const m=function(B,J){const tt=fi(J);if(tt===void 0)return null;for(const Q of is(B,tt.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(d,l),g=function(B,J){const tt=new Map;for(const Q of we(J))for(const T of is(B,Q.fieldPath))switch(T.op){case"==":case"in":tt.set(Q.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return tt.set(Q.fieldPath.canonicalString(),T.value),Array.from(tt.values())}return null}(d,l),I=function(B,J){const tt=[];let Q=!0;for(const T of we(J)){const p=T.kind===0?Ka(B,T.fieldPath,B.startAt):$a(B,T.fieldPath,B.startAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new sn(tt,Q)}(d,l),S=function(B,J){const tt=[];let Q=!0;for(const T of we(J)){const p=T.kind===0?$a(B,T.fieldPath,B.endAt):Ka(B,T.fieldPath,B.endAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new sn(tt,Q)}(d,l),C=this.hn(l,d,I),M=this.hn(l,d,S),D=this.Pn(l,d,g),G=this.In(l.indexId,m,C,I.inclusive,M,S.inclusive,D);return R.forEach(G,q=>n.G(q,e.limit).next(B=>{B.forEach(J=>{const tt=N.fromSegments(J.documentKey);a.has(tt)||(a=a.add(tt),u.push(tt))})}))}).next(()=>u)}return R.resolve(null)})}cn(t){let e=this.un.get(t);return e||(t.filters.length===0?e=[t]:e=Pf(X.create(t.filters,"and")).map(n=>Ii(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.un.set(t,e),e)}In(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const I=e?this.Tn(e[g/d]):qr,S=this.En(t,I,n[g%d],s),C=this.dn(t,I,i[g%d],a),M=u.map(D=>this.En(t,I,D,!0));m.push(...this.createRange(S,C,M))}return m}En(t,e,n,s){const i=new Pe(t,N.empty(),e,n);return s?i:i.Jt()}dn(t,e,n,s){const i=new Pe(t,N.empty(),e,n);return s?i.Jt():i}ln(t,e){const n=new hu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.tn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.cn(e);return R.forEach(s,i=>this.ln(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new Y(st.comparator),m=!1;for(const g of l.filters)for(const I of g.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?m=!0:d=d.add(I.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}An(t,e){const n=new On;for(const s of we(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Ht(s.kind);Re.bt.Pt(i,a)}return n.Wt()}Tn(t){const e=new On;return Re.bt.Pt(t,e.Ht(0)),e.Wt()}Rn(t,e){const n=new On;return Re.bt.Pt(sr(this.databaseId,e),n.Ht(function(i){const a=we(i);return a.length===0?0:a[a.length-1].kind}(t))),n.Wt()}Pn(t,e,n){if(n===null)return[];let s=[];s.push(new On);let i=0;for(const a of we(t)){const u=n[i++];for(const l of s)if(this.Vn(e,a.fieldPath)&&ir(u))s=this.mn(s,a,u);else{const d=l.Ht(a.kind);Re.bt.Pt(u,d)}}return this.fn(s)}hn(t,e,n){return this.Pn(t,e,n.position)}fn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Wt();return e}mn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new On;l.seed(u.Wt()),Re.bt.Pt(a,l.Ht(e.kind)),i.push(l)}return i}Vn(t,e){return!!t.filters.find(n=>n instanceof K&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Ln(t),s=Ke(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(i=>{const a=[];return R.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(m,g){const I=g?new tr(g.sequenceNumber,new Nt(ke(g.readTime),new N(qt(g.documentKey)),g.largestBatchId)):tr.empty(),S=m.fields.map(([C,M])=>new Qr(st.fromServerFormat(C),M));return new ns(m.indexId,m.collectionGroup,S,I)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:j(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=Ln(t),i=Ke(t);return this.gn(t).next(a=>s.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>R.forEach(u,l=>i.put(ou(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return R.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?R.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),R.forEach(u,l=>this.pn(t,s,l).next(d=>{const m=this.yn(i,l);return d.isEqual(m)?R.resolve():this.wn(t,i,l,d,m)}))))})}Sn(t,e,n,s){return ze(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Rn(n,e.key),documentKey:e.key.path.toArray()})}bn(t,e,n,s){return ze(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Rn(n,e.key),e.key.path.toArray()])}pn(t,e,n){const s=ze(t);let i=new Y(re);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Rn(n,e)])},(a,u)=>{i=i.add(new Pe(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}yn(t,e){let n=new Y(re);const s=this.An(e,t);if(s==null)return n;const i=fi(e);if(i!=null){const a=t.data.field(i.fieldPath);if(ir(a))for(const u of a.arrayValue.values||[])n=n.add(new Pe(e.indexId,t.key,this.Tn(u),s))}else n=n.add(new Pe(e.indexId,t.key,qr,s));return n}wn(t,e,n,s,i){b("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(l,d,m,g,I){const S=l.getIterator(),C=d.getIterator();let M=Ge(S),D=Ge(C);for(;M||D;){let G=!1,q=!1;if(M&&D){const B=m(M,D);B<0?q=!0:B>0&&(G=!0)}else M!=null?q=!0:G=!0;G?(g(D),D=Ge(C)):q?(I(M),M=Ge(S)):(M=Ge(S),D=Ge(C))}}(s,i,re,u=>{a.push(this.Sn(t,e,n,u))},u=>{a.push(this.bn(t,e,n,u))}),R.waitFor(a)}gn(t){let e=1;return Ke(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>re(a,u)).filter((a,u,l)=>!u||re(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=re(a,t),l=re(a,e);if(u===0)s[0]=t.Jt();else if(u>0&&l<0)s.push(a),s.push(a.Jt());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Dn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,qr,[]],l=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,qr,[]];i.push(IDBKeyRange.bound(u,l))}return i}Dn(t,e){return re(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(mu)}getMinOffset(t,e){return R.mapArray(this.cn(e),n=>this.ln(t,n).next(s=>s||F())).next(mu)}}function fu(r){return mt(r,"collectionParents")}function ze(r){return mt(r,"indexEntries")}function Ln(r){return mt(r,"indexConfiguration")}function Ke(r){return mt(r,"indexState")}function mu(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Li(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Nt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(r,t,e){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.J({range:a},(m,g,I)=>(u++,I.delete()));i.push(l.next(()=>{L(u===1)}));const d=[];for(const m of e.mutations){const g=ac(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return R.waitFor(i).next(()=>d)}function us(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw F();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);class ws{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Cn={}}static lt(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new ws(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return se(t).J({index:"userMutationsIndex",range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=Ze(t),a=se(t);return a.add({}).next(u=>{L(typeof u=="number");const l=new Ki(u,e,n,s),d=function(S,C,M){const D=M.baseMutations.map(q=>cr(S.ct,q)),G=M.mutations.map(q=>cr(S.ct,q));return{userId:C,batchId:M.batchId,localWriteTimeMs:M.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,l),m=[];let g=new Y((I,S)=>j(I.canonicalString(),S.canonicalString()));for(const I of s){const S=ac(this.userId,I.key.path,u);g=g.add(I.key.path.popLast()),m.push(a.put(d)),m.push(i.put(S,dd))}return g.forEach(I=>{m.push(this.indexManager.addToCollectionParentIndex(t,I))}),t.addOnCommittedListener(()=>{this.Cn[u]=l.keys()}),R.waitFor(m).next(()=>l)})}lookupMutationBatch(t,e){return se(t).get(e).next(n=>n?(L(n.userId===this.userId),Ae(this.serializer,n)):null)}vn(t,e){return this.Cn[e]?R.resolve(this.Cn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Cn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return se(t).J({index:"userMutationsIndex",range:s},(a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n),i=Ae(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return se(t).J({index:"userMutationsIndex",range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return se(t).U("userMutationsIndex",e).next(n=>n.map(s=>Ae(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Wr(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return Ze(t).J({range:s},(a,u,l)=>{const[d,m,g]=a,I=qt(m);if(d===this.userId&&e.path.isEqual(I))return se(t).get(g).next(S=>{if(!S)throw F();L(S.userId===this.userId),i.push(Ae(this.serializer,S))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Y(j);const s=[];return e.forEach(i=>{const a=Wr(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=Ze(t).J({range:u},(d,m,g)=>{const[I,S,C]=d,M=qt(S);I===this.userId&&i.path.isEqual(M)?n=n.add(C):g.done()});s.push(l)}),R.waitFor(s).next(()=>this.Fn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Wr(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new Y(j);return Ze(t).J({range:a},(l,d,m)=>{const[g,I,S]=l,C=qt(I);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(S)):m.done()}).next(()=>this.Fn(t,u))}Fn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(se(t).get(i).next(a=>{if(a===null)throw F();L(a.userId===this.userId),n.push(Ae(this.serializer,a))}))}),R.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return il(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.Mn(e.batchId)}),R.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}Mn(t){delete this.Cn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return R.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return Ze(t).J({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=qt(i[1]);s.push(l)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(t,e){return ol(t,this.userId,e)}xn(t){return al(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ol(r,t,e){const n=Wr(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return Ze(r).J({range:i,H:!0},(u,l,d)=>{const[m,g,I]=u;m===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function se(r){return mt(r,"mutations")}function Ze(r){return mt(r,"documentMutations")}function al(r){return mt(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ne(0)}static Ln(){return new Ne(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Bn(t).next(e=>{const n=new Ne(e.highestTargetId);return e.highestTargetId=n.next(),this.kn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Bn(t).next(e=>U.fromTimestamp(new it(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Bn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.Bn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.kn(t,s)))}addTargetData(t,e){return this.qn(t,e).next(()=>this.Bn(t).next(n=>(n.targetCount+=1,this.Qn(e,n),this.kn(t,n))))}updateTargetData(t,e){return this.qn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>$e(t).delete(e.targetId)).next(()=>this.Bn(t)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.kn(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return $e(t).J((a,u)=>{const l=Kn(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(t,e){return $e(t).J((n,s)=>{const i=Kn(s);e(i)})}Bn(t){return pu(t).get("targetGlobalKey").next(e=>(L(e!==null),e))}kn(t,e){return pu(t).put("targetGlobalKey",e)}qn(t,e){return $e(t).put(el(this.serializer,e))}Qn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Bn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=De(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return $e(t).J({range:s,index:"queryTargetsIndex"},(a,u,l)=>{const d=Kn(u);hr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=ie(t);return e.forEach(a=>{const u=St(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),R.waitFor(s)}removeMatchingKeys(t,e,n){const s=ie(t);return R.forEach(e,i=>{const a=St(i.path);return R.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=ie(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ie(t);let i=z();return s.J({range:n,H:!0},(a,u,l)=>{const d=qt(a[1]),m=new N(d);i=i.add(m)}).next(()=>i)}containsKey(t,e){const n=St(e.path),s=IDBKeyRange.bound([n],[tc(n)],!1,!0);let i=0;return ie(t).J({index:"documentTargetsIndex",H:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}ot(t,e){return $e(t).get(e).next(n=>n?Kn(n):null)}}function $e(r){return mt(r,"targets")}function pu(r){return mt(r,"targetGlobal")}function ie(r){return mt(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u([r,t],[e,n]){const s=j(r,e);return s===0?j(t,n):s}class Cf{constructor(t){this.Kn=t,this.buffer=new Y(_u),this.$n=0}Un(){return++this.$n}Wn(t){const e=[t,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();_u(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Df{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(t){b("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){me(e)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await fe(e)}await this.zn(3e5)})}}class xf{constructor(t,e){this.jn=t,this.params=e}calculateTargetCount(t,e){return this.jn.Hn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return R.resolve(bt.oe);const n=new Cf(e);return this.jn.forEachTarget(t,s=>n.Wn(s.sequenceNumber)).next(()=>this.jn.Jn(t,s=>n.Wn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(gu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gu):this.Yn(t,e))}getCacheSize(t){return this.jn.getCacheSize(t)}Yn(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),He()<=Wt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function kf(r,t){return new xf(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e){this.db=t,this.garbageCollector=kf(this,e)}Hn(t){const e=this.Zn(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}Zn(t){let e=0;return this.Jn(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Jn(t,e){return this.Xn(t,(n,s)=>e(s))}addReference(t,e,n){return jr(t,n)}removeReference(t,e,n){return jr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return jr(t,e)}er(t,e){return function(s,i){let a=!1;return al(s).Y(u=>ol(s,u,i).next(l=>(l&&(a=!0),R.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Xn(t,(a,u)=>{if(u<=e){const l=this.er(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,U.min()),ie(t).delete(function(g){return[0,St(g.path)]}(a))))});s.push(l)}}).next(()=>R.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return jr(t,e)}Xn(t,e){const n=ie(t);let s,i=bt.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==bt.oe&&e(new N(qt(s)),i),i=d,s=l):i=bt.oe}).next(()=>{i!==bt.oe&&e(new N(qt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function jr(r,t){return ie(r).put(function(n,s){return{targetId:0,path:St(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.changes=new ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Ee(t).put(n)}removeEntry(t,e,n){return Ee(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],os(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.tr(t,n)))}getEntry(t,e){let n=rt.newInvalidDocument(e);return Ee(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(Un(e))},(s,i)=>{n=this.nr(e,i)}).next(()=>n)}rr(t,e){let n={size:0,document:rt.newInvalidDocument(e)};return Ee(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(Un(e))},(s,i)=>{n={document:this.nr(e,i),size:us(i)}}).next(()=>n)}getEntries(t,e){let n=xt();return this.ir(t,e,(s,i)=>{const a=this.nr(s,i);n=n.insert(s,a)}).next(()=>n)}sr(t,e){let n=xt(),s=new et(N.comparator);return this.ir(t,e,(i,a)=>{const u=this.nr(i,a);n=n.insert(i,u),s=s.insert(i,us(a))}).next(()=>({documents:n,_r:s}))}ir(t,e,n){if(e.isEmpty())return R.resolve();let s=new Y(Tu);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Un(s.first()),Un(s.last())),a=s.getIterator();let u=a.getNext();return Ee(t).J({index:"documentKeyIndex",range:i},(l,d,m)=>{const g=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Tu(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.$(Un(u)):m.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),os(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ee(t).U(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let m=xt();for(const g of d){const I=this.nr(N.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);I.isFoundDocument()&&(mr(e,I)||s.has(I.key))&&(m=m.insert(I.key,I))}return m})}getAllFromCollectionGroup(t,e,n,s){let i=xt();const a=Iu(e,n),u=Iu(e,Nt.max());return Ee(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(l,d,m)=>{const g=this.nr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(t){return new Ff(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return yu(t).get("remoteDocumentGlobalKey").next(e=>(L(!!e),e))}tr(t,e){return yu(t).put("remoteDocumentGlobalKey",e)}nr(t,e){if(e){const n=Tf(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return rt.newInvalidDocument(t)}}function cl(r){return new Mf(r)}class Ff extends ul{constructor(t,e){super(),this.ar=t,this.trackRemovals=e,this.ur=new ge(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new Y((i,a)=>j(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.ur.get(i);if(e.push(this.ar.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=su(this.ar.serializer,a);s=s.add(i.path.popLast());const d=us(l);n+=d-u.size,e.push(this.ar.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=su(this.ar.serializer,a.convertToNoDocument(U.min()));e.push(this.ar.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.ar.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.ar.updateMetadata(t,n)),R.waitFor(e)}getFromCache(t,e){return this.ar.rr(t,e).next(n=>(this.ur.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.ar.sr(t,e).next(({documents:n,_r:s})=>(s.forEach((i,a)=>{this.ur.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function yu(r){return mt(r,"remoteDocumentGlobal")}function Ee(r){return mt(r,"remoteDocumentsV14")}function Un(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Iu(r,t){const e=t.documentKey.path.toArray();return[r,os(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Tu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=j(e[i],n[i]),s)return s;return s=j(e.length,n.length),s||(s=j(e[e.length-2],n[n.length-2]),s||j(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Jn(n.mutation,s,Ct.empty(),it.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,z()).next(()=>n))}getLocalViewOfDocuments(t,e,n=z()){const s=jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=Gn();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,z()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=xt();const a=Hn(),u=function(){return Hn()}();return e.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Yt)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Jn(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var g;return u.set(d,new Of(m,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=Hn();let s=new et((a,u)=>a-u),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Ct.empty();m=u.applyToLocalView(d,m),n.set(l,m);const g=(s.get(u.batchId)||z()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,g=Cc();m.forEach(I=>{if(!i.has(I)){const S=Oc(e.get(I),n.get(I));S!==null&&g.set(I,S),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return R.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ac(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):R.resolve(jt());let u=-1,l=i;return a.next(d=>R.forEach(d,(m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?R.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{l=l.insert(m,I)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,z())).next(m=>({batchId:u,changes:bc(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(n=>{let s=Gn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Gn();return this.indexManager.getCollectionParents(t,i).next(u=>R.forEach(u,l=>{const d=function(g,I){return new dr(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,rt.newInvalidDocument(m)))});let u=Gn();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&Jn(m.mutation,d,Ct.empty(),it.now()),mr(e,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:dt(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:nl(s.bundledQuery),readTime:dt(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.overlays=new et(N.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jt();return R.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.ht(t,e,i)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const s=jt(),i=e.length+1,a=new N(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new et((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=jt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=jt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return R.resolve(u)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Qi(e,n));let i=this.hr.get(e);i===void 0&&(i=z(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.Pr=new Y(ht.Ir),this.Tr=new Y(ht.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new ht(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new ht(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new N(new H([])),n=new ht(e,t),s=new ht(e,t+1),i=[];return this.Tr.forEachInRange([n,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new N(new H([])),n=new ht(e,t),s=new ht(e,t+1);let i=z();return this.Tr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new ht(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ht{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return N.comparator(t.key,e.key)||j(t.pr,e.pr)}static Er(t,e){return j(t.pr,e.pr)||N.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Y(ht.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ki(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.wr=this.wr.add(new ht(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,s],a=>{const u=this.Sr(a.pr);i.push(u)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Y(j);return e.forEach(s=>{const i=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],u=>{n=n.add(u.pr)})}),R.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;N.isDocumentKey(i)||(i=i.child(""));const a=new ht(new N(i),0);let u=new Y(j);return this.wr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.pr)),!0)},a),R.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(n=>{const s=this.Sr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return R.forEach(e.mutations,s=>{const i=new ht(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new ht(e,0),s=this.wr.firstAfterOrEqual(n);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.vr=t,this.docs=function(){return new et(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():rt.newInvalidDocument(e))}getEntries(t,e){let n=xt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=xt();const a=e.path,u=new N(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Li(nc(m),n)<=0||(s.has(m.key)||mr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(t,e,n,s){F()}Fr(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new jf(this)}getSize(t){return R.resolve(this.size)}}class jf extends ul{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t){this.persistence=t,this.Mr=new ge(e=>De(e),hr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yi,this.targetCount=0,this.Lr=Ne.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),R.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.Br={},this.overlays={},this.kr=new bt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Gf(this),this.indexManager=new Sf,this.remoteDocumentCache=function(s){return new qf(s)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new tl(e),this.$r=new Lf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Uf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Bf(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new zf(this.kr.next());return this.referenceDelegate.Ur(),n(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return R.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class zf extends sc{constructor(t){super(),this.currentSequenceNumber=t}}class vs{constructor(t){this.persistence=t,this.zr=new Yi,this.jr=null}static Hr(t){return new vs(t)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,n=>{const s=N.fromPath(n);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,U.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.serializer=t}O(t,e,n,s){const i=new ps("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(t),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ma,{unique:!0}),l.createObjectStore("documentMutations")}(t),Eu(t),function(l){l.createObjectStore("remoteDocuments")}(t));let a=R.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(t),Eu(t)),a=a.next(()=>function(l){const d=l.store("targetGlobal"),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",m)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store("mutations").U().next(m=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ma,{unique:!0});const g=d.store("mutations"),I=m.map(S=>g.put(S));return R.waitFor(I)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.Xr(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(t),this.ei(i)))),n<7&&s>=7&&(a=a.next(()=>this.ti(i))),n<8&&s>=8&&(a=a.next(()=>this.ni(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.ri(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:Ad});d.createIndex("collectionPathOverlayIndex",Rd,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",Pd,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:fd});d.createIndex("documentKeyIndex",md),d.createIndex("collectionGroupIndex",gd)}(t)).next(()=>this.ii(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(a=a.next(()=>this.si(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Td}).createIndex("sequenceNumberIndex",Ed,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:wd}).createIndex("documentKeyIndex",vd,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),a}ei(t){let e=0;return t.store("remoteDocuments").J((n,s)=>{e+=us(s)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Xr(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(s=>R.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>R.forEach(u,l=>{L(l.userId===i.userId);const d=Ae(this.serializer,l);return il(t,i.userId,d).next(()=>{})}))}))}ti(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((a,u)=>{const l=new H(a),d=function(g){return[0,St(g)]}(l);i.push(e.get(d).next(m=>m?R.resolve():(g=>e.put({targetId:0,path:St(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(i))})}ni(t,e){t.createObjectStore("collectionParents",{keyPath:Id});const n=e.store("collectionParents"),s=new Xi,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:St(l)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const l=new H(a);return i(l.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,l],d)=>{const m=qt(u);return i(m.popLast())}))}ri(t){const e=t.store("targets");return e.J((n,s)=>{const i=Kn(s),a=el(this.serializer,i);return e.put(a)})}ii(t,e){const n=e.store("remoteDocuments"),s=[];return n.J((i,a)=>{const u=e.store("remoteDocumentsV14"),l=function(g){return g.document?new N(H.fromString(g.document.name).popFirst(5)):g.noDocument?N.fromSegments(g.noDocument.path):g.unknownDocument?N.fromSegments(g.unknownDocument.path):F()}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>R.waitFor(s))}si(t,e){const n=e.store("mutations"),s=cl(this.serializer),i=new hl(vs.Hr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(l=>{var d;let m=(d=u.get(l.userId))!==null&&d!==void 0?d:z();Ae(this.serializer,l).keys().forEach(g=>m=m.add(g)),u.set(l.userId,m)}),R.forEach(u,(l,d)=>{const m=new At(d),g=Es.lt(this.serializer,m),I=i.getIndexManager(m),S=ws.lt(m,this.serializer,I,i.referenceDelegate);return new ll(s,S,g,I).recalculateAndSaveOverlaysForDocumentKeys(new mi(e,bt.oe),l).next()})})}}function Eu(r){r.createObjectStore("targetDocuments",{keyPath:_d}).createIndex("documentTargetsIndex",yd,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pd,{unique:!0}),r.createObjectStore("targetGlobal")}const ii="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zi{constructor(t,e,n,s,i,a,u,l,d,m,g=16){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.oi=i,this.window=a,this.document=u,this._i=d,this.ai=m,this.ui=g,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=I=>Promise.resolve(),!Zi.D())throw new x(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Nf(this,s),this.Ti=e+"main",this.serializer=new tl(l),this.Ei=new ae(this.Ti,this.ui,new Kf(this.serializer)),this.Qr=new bf(this.referenceDelegate,this.serializer),this.remoteDocumentCache=cl(this.serializer),this.$r=new Ef,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,m===!1&&ut("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(V.FAILED_PRECONDITION,ii);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Qr.getHighestSequenceNumber(t))}).then(t=>{this.kr=new bt(t,this._i)}).then(()=>{this.qr=!0}).catch(t=>(this.Ei&&this.Ei.close(),Promise.reject(t)))}fi(t){return this.Ii=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ei.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Gr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(t).next(e=>{e||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(t)).next(e=>this.isPrimary&&!e?this.yi(t).next(()=>!1):!!e&&this.wi(t).next(()=>!0))).catch(t=>{if(me(t))return b("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.oi.enqueueRetryable(()=>this.Ii(t)),this.isPrimary=t})}gi(t){return Bn(t).get("owner").next(e=>R.resolve(this.Si(e)))}bi(t){return Gr(t).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=mt(e,"clientMetadata");return n.U().next(s=>{const i=this.vi(s,18e5),a=s.filter(u=>i.indexOf(u)===-1);return R.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.di)for(const e of t)this.di.removeItem(this.Fi(e.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(t){return!!t&&t.ownerId===this.clientId}pi(t){return this.ai?R.resolve(!0):Bn(t).get("owner").next(e=>{if(e!==null&&this.Ci(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)){if(this.Si(e)&&this.networkEnabled)return!0;if(!this.Si(e)){if(!e.allowTabSynchronization)throw new x(V.FAILED_PRECONDITION,ii);return!1}}return!(!this.networkEnabled||!this.inForeground)||Gr(t).U().next(n=>this.vi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&b("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new mi(t,bt.oe);return this.yi(e).next(()=>this.bi(e))}),this.Ei.close(),this.Li()}vi(t,e){return t.filter(n=>this.Ci(n.updateTimeMs,e)&&!this.Mi(n.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",t=>Gr(t).U().next(e=>this.vi(e,18e5).map(n=>n.clientId)))}get started(){return this.qr}getMutationQueue(t,e){return ws.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Vf(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Es.lt(this.serializer,t)}getBundleCache(){return this.$r}runTransaction(t,e,n){b("IndexedDbPersistence","Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===16?Vd:l===15?hc:l===14?lc:l===13?cc:l===12?Sd:l===11?uc:void F()}(this.ui);let a;return this.Ei.runTransaction(t,s,i,u=>(a=new mi(u,this.kr?this.kr.next():bt.oe),e==="readwrite-primary"?this.gi(a).next(l=>!!l||this.pi(a)).next(l=>{if(!l)throw ut(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new x(V.FAILED_PRECONDITION,rc);return n(a)}).next(l=>this.wi(a).next(()=>l)):this.ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}ki(t){return Bn(t).get("owner").next(e=>{if(e!==null&&this.Ci(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)&&!this.Si(e)&&!(this.ai||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(V.FAILED_PRECONDITION,ii)})}wi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Bn(t).put("owner",e)}static D(){return ae.D()}yi(t){const e=Bn(t);return e.get("owner").next(n=>this.Si(n)?(b("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):R.resolve())}Ci(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ut(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;Ku()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(t){var e;try{const n=((e=this.di)===null||e===void 0?void 0:e.getItem(this.Fi(t)))!==null;return b("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ut("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(t){ut("Failed to set zombie client id.",t)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Bn(r){return mt(r,"owner")}function Gr(r){return mt(r,"clientMetadata")}function dl(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=z(),s=z();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new to(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ku()?8:ic(es())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ji(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $f;return this.Ji(t,e,a).next(u=>{if(i.result=u,this.Ui)return this.Yi(t,e,a,u.size)})}).next(()=>i.result)}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(He()<=Wt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(He()<=Wt.DEBUG&&b("QueryEngine","Query:",Je(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(He()<=Wt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):R.resolve())}ji(t,e){if(Qa(e))return R.resolve(null);let n=kt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ei(e,null,"F"),n=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=z(...i);return this.zi.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Zi(e,u);return this.Xi(e,d,a,l.readTime)?this.ji(t,Ei(e,null,"F")):this.es(t,d,e,l)}))})))}Hi(t,e,n,s){return Qa(e)||s.isEqual(U.min())?R.resolve(null):this.zi.getDocuments(t,n).next(i=>{const a=this.Zi(e,i);return this.Xi(e,a,n,s)?R.resolve(null):(He()<=Wt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Je(e)),this.es(t,a,e,ec(s,-1)).next(u=>u))})}Zi(t,e){let n=new Y(Sc(t));return e.forEach((s,i)=>{mr(t,i)&&(n=n.add(i))}),n}Xi(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,n){return He()<=Wt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Je(e)),this.zi.getDocumentsMatchingQuery(t,e,Nt.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new et(j),this.rs=new ge(i=>De(i),hr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ll(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function ml(r,t,e,n){return new Qf(r,t,e,n)}async function gl(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function Wf(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,m){const g=d.batch,I=g.keys();let S=R.resolve();return I.forEach(C=>{S=S.next(()=>m.getEntry(l,C)).next(M=>{const D=d.docVersions.get(C);L(D!==null),M.version.compareTo(D)<0&&(g.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),m.addEntry(M)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function pl(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Hf(r,t){const e=O(r),n=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const u=[];t.targetChanges.forEach((m,g)=>{const I=s.get(g);if(!I)return;u.push(e.Qr.removeMatchingKeys(i,m.removedDocuments,g).next(()=>e.Qr.addMatchingKeys(i,m.addedDocuments,g)));let S=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?S=S.withResumeToken(ft.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(g,S),function(M,D,G){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,S,m)&&u.push(e.Qr.updateTargetData(i,S))});let l=xt(),d=z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))}),u.push(Jf(i,a,t.documentUpdates).next(m=>{l=m.cs,d=m.ls})),!n.isEqual(U.min())){const m=e.Qr.getLastRemoteSnapshotVersion(i).next(g=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(m)}return R.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.ns=s,i))}function Jf(r,t,e){let n=z(),s=z();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=xt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):b("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{cs:a,ls:s}})}function Xf(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function cs(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Qr.getTargetData(n,t).next(i=>i?(s=i,R.resolve(s)):e.Qr.allocateTargetId(n).next(a=>(s=new Ht(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.ns.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function ln(r,t,e){const n=O(r),s=n.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!me(a))throw a;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.ns=n.ns.remove(t),n.rs.delete(s.target)}function bi(r,t,e){const n=O(r);let s=U.min(),i=z();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const g=O(l),I=g.rs.get(m);return I!==void 0?R.resolve(g.ns.get(I)):g.Qr.getTargetData(d,m)}(n,a,kt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.ts.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:z())).next(u=>(Il(n,Pc(t),u),{documents:u,hs:i})))}function _l(r,t){const e=O(r),n=O(e.Qr),s=e.ns.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,t).next(a=>a?a.target:null))}function yl(r,t){const e=O(r),n=e.ss.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.os.getAllFromCollectionGroup(s,t,ec(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Il(e,t,s),s))}function Il(r,t,e){let n=r.ss.get(t)||U.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ss.set(t,n)}function wu(r,t){return`firestore_clients_${r}_${t}`}function vu(r,t,e){let n=`firestore_mutations_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function oi(r,t){return`firestore_targets_${r}_${t}`}class ls{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Es(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new x(s.error.code,s.error.message))),a?new ls(t,e,s.state,i):(ut("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}ds(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Xn{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Es(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new x(n.error.code,n.error.message))),i?new Xn(t,n.state,s):(ut("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}ds(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class hs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Es(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Gi();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=oc(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new hs(t,i):(ut("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class eo{constructor(t,e){this.clientId=t,this.onlineState=e}static Es(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new eo(e.clientId,e.onlineState):(ut("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Ci{constructor(){this.activeTargetIds=Gi()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ai{constructor(t,e,n,s,i){this.window=t,this.oi=e,this.persistenceKey=n,this.Vs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new et(j),this.started=!1,this.ys=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ws=wu(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Ci),this.bs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Bi();for(const n of t){if(n===this.Vs)continue;const s=this.getItem(wu(this.persistenceKey,n));if(s){const i=hs.Es(n,s);i&&(this.ps=this.ps.insert(i.clientId,i))}}this.Ms();const e=this.storage.getItem(this.vs);if(e){const n=this.xs(e);n&&this.Os(n)}for(const n of this.ys)this.gs(n);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ss,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(t){let e=!1;return this.ps.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Ls(t,"pending")}updateMutationState(t,e,n){this.Ls(t,e,n),this.Bs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(oi(this.persistenceKey,t));if(n){const s=Xn.Es(t,n);s&&(e=s.state)}}return this.ks.As(t),this.Ms(),e}removeLocalQueryTarget(t){this.ks.Rs(t),this.Ms()}isLocalQueryTarget(t){return this.ks.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(oi(this.persistenceKey,t))}updateQueryState(t,e,n){this.qs(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.Bs(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Qs(t)}notifyBundleLoaded(t){this.Ks(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return b("SharedClientState","READ",t,e),e}setItem(t,e){b("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){b("SharedClientState","REMOVE",t),this.storage.removeItem(t)}gs(t){const e=t;if(e.storageArea===this.storage){if(b("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ws)return void ut("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.bs.test(e.key)){if(e.newValue==null){const n=this.$s(e.key);return this.Us(n,null)}{const n=this.Ws(e.key,e.newValue);if(n)return this.Us(n.clientId,n)}}else if(this.Ds.test(e.key)){if(e.newValue!==null){const n=this.Gs(e.key,e.newValue);if(n)return this.zs(n)}}else if(this.Cs.test(e.key)){if(e.newValue!==null){const n=this.js(e.key,e.newValue);if(n)return this.Hs(n)}}else if(e.key===this.vs){if(e.newValue!==null){const n=this.xs(e.newValue);if(n)return this.Os(n)}}else if(e.key===this.Ss){const n=function(i){let a=bt.oe;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){ut("SharedClientState","Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==bt.oe&&this.sequenceNumberHandler(n)}else if(e.key===this.Fs){const n=this.Js(e.newValue);await Promise.all(n.map(s=>this.syncEngine.Ys(s)))}}}else this.ys.push(e)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(t,e,n){const s=new ls(this.currentUser,t,e,n),i=vu(this.persistenceKey,this.currentUser,t);this.setItem(i,s.ds())}Bs(t){const e=vu(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Qs(t){const e={clientId:this.Vs,onlineState:t};this.storage.setItem(this.vs,JSON.stringify(e))}qs(t,e,n){const s=oi(this.persistenceKey,t),i=new Xn(t,e,n);this.setItem(s,i.ds())}Ks(t){const e=JSON.stringify(Array.from(t));this.setItem(this.Fs,e)}$s(t){const e=this.bs.exec(t);return e?e[1]:null}Ws(t,e){const n=this.$s(t);return hs.Es(n,e)}Gs(t,e){const n=this.Ds.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return ls.Es(new At(i),s,e)}js(t,e){const n=this.Cs.exec(t),s=Number(n[1]);return Xn.Es(s,e)}xs(t){return eo.Es(t)}Js(t){return JSON.parse(t)}async zs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Zs(t.batchId,t.state,t.error);b("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Hs(t){return this.syncEngine.Xs(t.targetId,t.state,t.error)}Us(t,e){const n=e?this.ps.insert(t,e):this.ps.remove(t),s=this.Ns(this.ps),i=this.Ns(n),a=[],u=[];return i.forEach(l=>{s.has(l)||a.push(l)}),s.forEach(l=>{i.has(l)||u.push(l)}),this.syncEngine.eo(a,u).then(()=>{this.ps=n})}Os(t){this.ps.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Ns(t){let e=Gi();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class Tl{constructor(){this.no=new Ci,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ci,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr=null;function ui(){return zr===null?zr=function(){return 268435456+Math.round(2147483648*Math.random())}():zr++,"0x"+zr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class em extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(e,n,s,i,a){const u=ui(),l=this.vo(e,n.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${u}:`,l,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,a),this.Mo(e,l,d,s).then(m=>(b("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw Yn("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",l,"request:",s),m})}xo(e,n,s,i,a,u){return this.Co(e,n,s,i,a)}Fo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}vo(e,n){const s=Zf[e];return`${this.wo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,s){const i=ui();return new Promise((a,u)=>{const l=new Qu;l.setWithCredentials(!0),l.listenOnce(Hu.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $r.NO_ERROR:const m=l.getResponseJson();b(vt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(m)),a(m);break;case $r.TIMEOUT:b(vt,`RPC '${t}' ${i} timed out`),u(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const g=l.getStatus();if(b(vt,`RPC '${t}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const C=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN}(S.status);u(new x(C,S.message))}else u(new x(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new x(V.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{b(vt,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);b(vt,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",d,n,15)})}Oo(t,e,n){const s=ui(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Yu(),u=Xu(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.xmlHttpFactory=new Wu({})),this.Fo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");b(vt,`Creating RPC '${t}' stream ${s}: ${m}`,l);const g=a.createWebChannel(m,l);let I=!1,S=!1;const C=new tm({lo:D=>{S?b(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(b(vt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),I=!0),b(vt,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},ho:()=>g.close()}),M=(D,G,q)=>{D.listen(G,B=>{try{q(B)}catch(J){setTimeout(()=>{throw J},0)}})};return M(g,jn.EventType.OPEN,()=>{S||(b(vt,`RPC '${t}' stream ${s} transport opened.`),C.mo())}),M(g,jn.EventType.CLOSE,()=>{S||(S=!0,b(vt,`RPC '${t}' stream ${s} transport closed`),C.po())}),M(g,jn.EventType.ERROR,D=>{S||(S=!0,Yn(vt,`RPC '${t}' stream ${s} transport errored:`,D),C.po(new x(V.UNAVAILABLE,"The operation could not be completed")))}),M(g,jn.EventType.MESSAGE,D=>{var G;if(!S){const q=D.data[0];L(!!q);const B=q,J=B.error||((G=B[0])===null||G===void 0?void 0:G.error);if(J){b(vt,`RPC '${t}' stream ${s} received error:`,J);const tt=J.status;let Q=function(y){const E=ct[y];if(E!==void 0)return Bc(E)}(tt),T=J.message;Q===void 0&&(Q=V.INTERNAL,T="Unknown error status: "+tt+" with message "+J.message),S=!0,C.po(new x(Q,T)),g.close()}else b(vt,`RPC '${t}' stream ${s} received:`,q),C.yo(q)}}),M(u,Ju.STAT_EVENT,D=>{D.stat===di.PROXY?b(vt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===di.NOPROXY&&b(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof window<"u"?window:null}function Zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r){return new cf(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e,n=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e,n,s,i,a,u,l){this.oi=t,this.Go=n,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new no(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(ut(e.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.jo===e&&this.u_(n,s)},n=>{t(()=>{const s=new x(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(s)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{n(()=>this.c_(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nm extends wl{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=ff(this.serializer,t),n=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?dt(a.readTime):U.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=Ai(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=ss(l)?{documents:Wc(i,l)}:{query:Hc(i,l)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Gc(i,a.resumeToken);const d=wi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=cn(i,a.snapshotVersion.toTimestamp());const d=wi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=gf(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=Ai(this.serializer),e.removeTarget=t,this.i_(e)}}class rm extends wl{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=mf(t.writeResults,t.commitTime),n=dt(t.commitTime);return this.listener.A_(n,e)}return L(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Ai(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>cr(this.serializer,n))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(t,vi(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(V.UNKNOWN,i.toString())})}xo(t,e,n,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(t,vi(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(V.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class im{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ut(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{n.enqueueAndForget(async()=>{Oe(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=O(l);d.M_.add(4),await _r(d),d.N_.set("Unknown"),d.M_.delete(4),await Rs(d)}(this))})}),this.N_=new im(n,s)}}async function Rs(r){if(Oe(r))for(const t of r.x_)await t(!0)}async function _r(r){for(const t of r.x_)await t(!1)}function Ps(r,t){const e=O(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),io(e)?so(e):_n(e).Xo()&&ro(e,t))}function hn(r,t){const e=O(r),n=_n(e);e.F_.delete(t),n.Xo()&&vl(e,t),e.F_.size===0&&(n.Xo()?n.n_():Oe(e)&&e.N_.set("Unknown"))}function ro(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}_n(r).P_(t)}function vl(r,t){r.L_.xe(t),_n(r).I_(t)}function so(r){r.L_=new sf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),_n(r).start(),r.N_.w_()}function io(r){return Oe(r)&&!_n(r).Zo()&&r.F_.size>0}function Oe(r){return O(r).M_.size===0}function Al(r){r.L_=void 0}async function am(r){r.N_.set("Online")}async function um(r){r.F_.forEach((t,e)=>{ro(r,t)})}async function cm(r,t){Al(r),io(r)?(r.N_.D_(t),so(r)):r.N_.set("Unknown")}async function lm(r,t,e){if(r.N_.set("Online"),t instanceof jc&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.F_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.F_.delete(u),s.L_.removeTarget(u))}(r,t)}catch(n){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ds(r,n)}else if(t instanceof Yr?r.L_.Ke(t):t instanceof qc?r.L_.He(t):r.L_.We(t),!e.isEqual(U.min()))try{const n=await pl(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.L_.rt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.F_.get(d);m&&i.F_.set(d,m.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const m=i.F_.get(l);if(!m)return;i.F_.set(l,m.withResumeToken(ft.EMPTY_BYTE_STRING,m.snapshotVersion)),vl(i,l);const g=new Ht(m.target,l,d,m.sequenceNumber);ro(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){b("RemoteStore","Failed to raise snapshot:",n),await ds(r,n)}}async function ds(r,t,e){if(!me(t))throw t;r.M_.add(1),await _r(r),r.N_.set("Offline"),e||(e=()=>pl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await Rs(r)})}function Rl(r,t){return t().catch(e=>ds(r,e,t))}async function pn(r){const t=O(r),e=he(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;hm(t);)try{const s=await Xf(t.localStore,n);if(s===null){t.v_.length===0&&e.n_();break}n=s.batchId,dm(t,s)}catch(s){await ds(t,s)}Pl(t)&&Sl(t)}function hm(r){return Oe(r)&&r.v_.length<10}function dm(r,t){r.v_.push(t);const e=he(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function Pl(r){return Oe(r)&&!he(r).Zo()&&r.v_.length>0}function Sl(r){he(r).start()}async function fm(r){he(r).V_()}async function mm(r){const t=he(r);for(const e of r.v_)t.d_(e.mutations)}async function gm(r,t,e){const n=r.v_.shift(),s=$i.from(n,t,e);await Rl(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await pn(r)}async function pm(r,t){t&&he(r).E_&&await async function(n,s){if(function(a){return Uc(a)&&a!==V.ABORTED}(s.code)){const i=n.v_.shift();he(n).t_(),await Rl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pn(n)}}(r,t),Pl(r)&&Sl(r)}async function Ru(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const n=Oe(e);e.M_.add(3),await _r(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Rs(e)}async function Di(r,t){const e=O(r);t?(e.M_.delete(2),await Rs(e)):t||(e.M_.add(2),await _r(e),e.N_.set("Unknown"))}function _n(r){return r.B_||(r.B_=function(e,n,s){const i=O(e);return i.f_(),new nm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Po:am.bind(null,r),To:um.bind(null,r),Ao:cm.bind(null,r),h_:lm.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),io(r)?so(r):r.N_.set("Unknown")):(await r.B_.stop(),Al(r))})),r.B_}function he(r){return r.k_||(r.k_=function(e,n,s){const i=O(e);return i.f_(),new rm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:fm.bind(null,r),Ao:pm.bind(null,r),R_:mm.bind(null,r),A_:gm.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await pn(r)):(await r.k_.stop(),r.v_.length>0&&(b("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new oo(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ao(r,t){if(ut("AsyncQueue",`${t}: ${r}`),me(r))return new x(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.comparator=t?(e,n)=>t(e,n)||N.comparator(e.key,n.key):(e,n)=>N.comparator(e.key,n.key),this.keyedMap=Gn(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new en(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof en)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new en;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.q_=new et(N.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):F():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class dn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new dn(t,e,en.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_s(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class ym{constructor(){this.queries=new ge(t=>Rc(t),_s),this.onlineState="Unknown",this.z_=new Set}}async function uo(r,t){const e=O(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.W_()&&t.G_()&&(n=2):(i=new _m,n=t.G_()?0:1);try{switch(n){case 0:i.K_=await e.onListen(s,!0);break;case 1:i.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=ao(a,`Initialization of query '${Je(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&lo(e)}async function co(r,t){const e=O(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.U_.indexOf(t);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Im(r,t){const e=O(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.U_)u.H_(s)&&(n=!0);a.K_=s}}n&&lo(e)}function Tm(r,t,e){const n=O(r),s=n.queries.get(t);if(s)for(const i of s.U_)i.onError(e);n.queries.delete(t)}function lo(r){r.z_.forEach(t=>{t.next()})}var xi,Su;(Su=xi||(xi={})).J_="default",Su.Cache="cache";class ho{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new dn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=dn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==xi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.key=t}}class bl{constructor(t){this.key=t}}class Em{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=z(),this.mutatedKeys=z(),this.Ia=Sc(t),this.Ta=new en(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new Pu,s=e?e.Ta:this.Ta;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,g)=>{const I=s.get(m),S=mr(this.query,g)?g:null,C=!!I&&this.mutatedKeys.has(I.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;I&&S?I.data.isEqual(S.data)?C!==M&&(n.track({type:3,doc:S}),D=!0):this.Ra(I,S)||(n.track({type:2,doc:S}),D=!0,(l&&this.Ia(S,l)>0||d&&this.Ia(S,d)<0)&&(u=!0)):!I&&S?(n.track({type:0,doc:S}),D=!0):I&&!S&&(n.track({type:1,doc:I}),D=!0,(l||d)&&(u=!0)),D&&(S?(a=a.add(S),i=M?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{Ta:a,Aa:n,Xi:u,mutatedKeys:i}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((m,g)=>function(S,C){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return M(S)-M(C)}(m.type,g.type)||this.Ia(m.doc,g.doc)),this.Va(n),s=s!=null&&s;const u=e&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,d=l!==this.ha;return this.ha=l,a.length!==0||d?{snapshot:new dn(this.query,t.Ta,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Pu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=z(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new bl(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new Vl(n))}),e}pa(t){this.la=t.hs,this.Pa=z();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return dn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class wm{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class vm{constructor(t){this.key=t,this.wa=!1}}class Am{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new ge(u=>Rc(u),_s),this.Da=new Map,this.Ca=new Set,this.va=new et(N.comparator),this.Fa=new Map,this.Ma=new Yi,this.xa={},this.Oa=new Map,this.Na=Ne.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Rm(r,t,e=!0){const n=Ss(r);let s;const i=n.ba.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Cl(n,t,e,!0),s}async function Pm(r,t){const e=Ss(r);await Cl(e,t,!0,!1)}async function Cl(r,t,e,n){const s=await cs(r.localStore,kt(t)),i=s.targetId,a=e?r.sharedClientState.addLocalQueryTarget(i):"not-current";let u;return n&&(u=await fo(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Ps(r.remoteStore,s),u}async function fo(r,t,e,n,s){r.Ba=(g,I,S)=>async function(M,D,G,q){let B=D.view.da(G);B.Xi&&(B=await bi(M.localStore,D.query,!1).then(({documents:T})=>D.view.da(T,B)));const J=q&&q.targetChanges.get(D.targetId),tt=q&&q.targetMismatches.get(D.targetId)!=null,Q=D.view.applyChanges(B,M.isPrimaryClient,J,tt);return ki(M,D.targetId,Q.fa),Q.snapshot}(r,g,I,S);const i=await bi(r.localStore,t,!0),a=new Em(t,i.hs),u=a.da(i.documents),l=pr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);ki(r,e,d.fa);const m=new wm(t,e,a);return r.ba.set(t,m),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),d.snapshot}async function Sm(r,t,e){const n=O(r),s=n.ba.get(t),i=n.Da.get(s.targetId);if(i.length>1)return n.Da.set(s.targetId,i.filter(a=>!_s(a,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ln(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&hn(n.remoteStore,s.targetId),fn(n,s.targetId)}).catch(fe)):(fn(n,s.targetId),await ln(n.localStore,s.targetId,!0))}async function Vm(r,t){const e=O(r),n=e.ba.get(t),s=e.Da.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),hn(e.remoteStore,n.targetId))}async function bm(r,t,e){const n=_o(r);try{const s=await function(a,u){const l=O(a),d=it.now(),m=u.reduce((S,C)=>S.add(C.key),z());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=xt(),M=z();return l.os.getEntries(S,m).next(D=>{C=D,C.forEach((G,q)=>{q.isValidDocument()||(M=M.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,C)).next(D=>{g=D;const G=[];for(const q of u){const B=tf(q,g.get(q.key).overlayedDocument);B!=null&&G.push(new Yt(q.key,B,gc(B.value.mapValue),lt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,G,u)}).next(D=>{I=D;const G=D.applyToLocalDocumentSet(g,M);return l.documentOverlayCache.saveOverlays(S,D.batchId,G)})}).then(()=>({batchId:I.batchId,changes:bc(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.xa[a.currentUser.toKey()];d||(d=new et(j)),d=d.insert(u,l),a.xa[a.currentUser.toKey()]=d}(n,s.batchId,e),await pe(n,s.changes),await pn(n.remoteStore)}catch(s){const i=ao(s,"Failed to persist write");e.reject(i)}}async function Dl(r,t){const e=O(r);try{const n=await Hf(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Fa.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?L(a.wa):s.removedDocuments.size>0&&(L(a.wa),a.wa=!1))}),await pe(e,n,t)}catch(n){await fe(n)}}function Vu(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ba.forEach((i,a)=>{const u=a.view.j_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=O(a);l.onlineState=u;let d=!1;l.queries.forEach((m,g)=>{for(const I of g.U_)I.j_(u)&&(d=!0)}),d&&lo(l)}(n.eventManager,t),s.length&&n.Sa.h_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Cm(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Fa.get(t),i=s&&s.key;if(i){let a=new et(N.comparator);a=a.insert(i,rt.newNoDocument(i,U.min()));const u=z().add(i),l=new gr(U.min(),new Map,new et(j),a,u);await Dl(n,l),n.va=n.va.remove(i),n.Fa.delete(t),po(n)}else await ln(n.localStore,t,!1).then(()=>fn(n,t,e)).catch(fe)}async function Dm(r,t){const e=O(r),n=t.batch.batchId;try{const s=await Wf(e.localStore,t);go(e,n,null),mo(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await pe(e,s)}catch(s){await fe(s)}}async function xm(r,t,e){const n=O(r);try{const s=await function(a,u){const l=O(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(L(g!==null),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,t);go(n,t,e),mo(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await pe(n,s)}catch(s){await fe(s)}}function mo(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function go(r,t,e){const n=O(r);let s=n.xa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.xa[n.currentUser.toKey()]=s}}function fn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||xl(r,n)})}function xl(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(hn(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),po(r))}function ki(r,t,e){for(const n of e)n instanceof Vl?(r.Ma.addReference(n.key,t),km(r,n)):n instanceof bl?(b("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||xl(r,n.key)):F()}function km(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(b("SyncEngine","New document in limbo: "+e),r.Ca.add(n),po(r))}function po(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new N(H.fromString(t)),n=r.Na.next();r.Fa.set(n,new vm(e)),r.va=r.va.insert(e,n),Ps(r.remoteStore,new Ht(kt(fr(e.path)),n,"TargetPurposeLimboResolution",bt.oe))}}async function pe(r,t,e){const n=O(r),s=[],i=[],a=[];n.ba.isEmpty()||(n.ba.forEach((u,l)=>{a.push(n.Ba(l,t,e).then(d=>{if((d||e)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(l.targetId,d!=null&&d.fromCache?"not-current":"current"),d){s.push(d);const m=to.Ki(l.targetId,d);i.push(m)}}))}),await Promise.all(a),n.Sa.h_(s),await async function(l,d){const m=O(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>R.forEach(d,I=>R.forEach(I.qi,S=>m.persistence.referenceDelegate.addReference(g,I.targetId,S)).next(()=>R.forEach(I.Qi,S=>m.persistence.referenceDelegate.removeReference(g,I.targetId,S)))))}catch(g){if(!me(g))throw g;b("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const S=m.ns.get(I),C=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(C);m.ns=m.ns.insert(I,M)}}}(n.localStore,i))}async function Nm(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const n=await gl(e.localStore,t);e.currentUser=t,function(i,a){i.Oa.forEach(u=>{u.forEach(l=>{l.reject(new x(V.CANCELLED,a))})}),i.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await pe(e,n.us)}}function Mm(r,t){const e=O(r),n=e.Fa.get(t);if(n&&n.wa)return z().add(n.key);{let s=z();const i=e.Da.get(t);if(!i)return s;for(const a of i){const u=e.ba.get(a);s=s.unionWith(u.view.Ea)}return s}}async function Fm(r,t){const e=O(r),n=await bi(e.localStore,t.query,!0),s=t.view.pa(n);return e.isPrimaryClient&&ki(e,t.targetId,s.fa),s}async function Om(r,t){const e=O(r);return yl(e.localStore,t).then(n=>pe(e,n))}async function Lm(r,t,e,n){const s=O(r),i=await function(u,l){const d=O(u),m=O(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>m.vn(g,l).next(I=>I?d.localDocuments.getDocuments(g,I):R.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await pn(s.remoteStore):e==="acknowledged"||e==="rejected"?(go(s,t,n||null),mo(s,t),function(u,l){O(O(u).mutationQueue).Mn(l)}(s.localStore,t)):F(),await pe(s,i)):b("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Um(r,t){const e=O(r);if(Ss(e),_o(e),t===!0&&e.La!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await bu(e,n.toArray());e.La=!0,await Di(e.remoteStore,!0);for(const i of s)Ps(e.remoteStore,i)}else if(t===!1&&e.La!==!1){const n=[];let s=Promise.resolve();e.Da.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(fn(e,a),ln(e.localStore,a,!0))),hn(e.remoteStore,a)}),await s,await bu(e,n),function(a){const u=O(a);u.Fa.forEach((l,d)=>{hn(u.remoteStore,d)}),u.Ma.mr(),u.Fa=new Map,u.va=new et(N.comparator)}(e),e.La=!1,await Di(e.remoteStore,!1)}}async function bu(r,t,e){const n=O(r),s=[],i=[];for(const a of t){let u;const l=n.Da.get(a);if(l&&l.length!==0){u=await cs(n.localStore,kt(l[0]));for(const d of l){const m=n.ba.get(d),g=await Fm(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await _l(n.localStore,a);u=await cs(n.localStore,d),await fo(n,kl(d),a,!1,u.resumeToken)}s.push(u)}return n.Sa.h_(i),s}function kl(r){return vc(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Bm(r){return function(e){return O(O(e).persistence).Bi()}(O(r).localStore)}async function qm(r,t,e,n){const s=O(r);if(s.La)return void b("SyncEngine","Ignoring unexpected query state notification.");const i=s.Da.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await yl(s.localStore,Pc(i[0])),u=gr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",ft.EMPTY_BYTE_STRING);await pe(s,a,u);break}case"rejected":await ln(s.localStore,t,!0),fn(s,t,n);break;default:F()}}async function jm(r,t,e){const n=Ss(r);if(n.La){for(const s of t){if(n.Da.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){b("SyncEngine","Adding an already active target "+s);continue}const i=await _l(n.localStore,s),a=await cs(n.localStore,i);await fo(n,kl(i),a.targetId,!1,a.resumeToken),Ps(n.remoteStore,a)}for(const s of e)n.Da.has(s)&&await ln(n.localStore,s,!1).then(()=>{hn(n.remoteStore,s),fn(n,s)}).catch(fe)}}function Ss(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Dl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cm.bind(null,t),t.Sa.h_=Im.bind(null,t.eventManager),t.Sa.ka=Tm.bind(null,t.eventManager),t}function _o(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xm.bind(null,t),t}class Ni{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=As(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ml(this.persistence,new fl,t.initialUser,this.serializer)}createPersistence(t){return new hl(vs.Hr,this.serializer)}createSharedClientState(t){return new Tl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nl extends Ni{constructor(t,e,n){super(),this.Qa=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Qa.initialize(this,t),await _o(this.Qa.syncEngine),await pn(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return ml(this.persistence,new fl,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Df(n,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const n=new ld(e,this.persistence);return new cd(t.asyncQueue,n)}createPersistence(t){const e=dl(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Zi(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,El(),Zr(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new Tl}}class Gm extends Nl{constructor(t,e){super(t,e,!1),this.Qa=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Qa.syncEngine;this.sharedClientState instanceof ai&&(this.sharedClientState.syncEngine={Zs:Lm.bind(null,e),Xs:qm.bind(null,e),eo:jm.bind(null,e),Bi:Bm.bind(null,e),Ys:Om.bind(null,e)},await this.sharedClientState.start()),await this.persistence.fi(async n=>{await Um(this.Qa.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=El();if(!ai.D(e))throw new x(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=dl(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new ai(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class yo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Vu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nm.bind(null,this.syncEngine),await Di(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ym}()}createDatastore(t){const e=As(t.databaseInfo.databaseId),n=function(i){return new em(i)}(t.databaseInfo);return function(i,a,u,l){return new sm(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new om(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Vu(this.syncEngine,e,0),function(){return Au.D()?new Au:new Yf}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,m){const g=new Am(s,i,a,u,l,d);return m&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const s=O(n);b("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await _r(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):ut("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const a=O(s),u={documents:i.map(g=>ur(a.serializer,g))},l=await a.xo("BatchGetDocuments",a.serializer.databaseId,H.emptyPath(),u,i.length),d=new Map;l.forEach(g=>{const I=df(a.serializer,g);d.set(I.key.toString(),I)});const m=[];return i.forEach(g=>{const I=d.get(g.toString());L(!!I),m.push(I)}),m}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ts(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=N.fromPath(n);this.mutations.push(new zi(s,this.precondition(s)))}),await async function(n,s){const i=O(n),a={writes:s.map(u=>cr(i.serializer,u))};await i.Co("Commit",i.serializer.databaseId,H.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw F();e=U.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new x(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(U.min())?lt.exists(!1):lt.updateTime(e):lt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new x(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return lt.updateTime(e)}return lt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.Za=n.maxAttempts,this.Yo=new no(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const t=new zm(this.datastore),e=this.tu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.nu(s)}))}).catch(n=>{this.nu(n)})})}tu(t){try{const e=this.updateFunction(t);return!lr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}nu(t){this.Za>0&&this.ru(t)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(t)}ru(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Uc(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=Zu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(n,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ao(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ci(r,t){r.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await gl(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Cu(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Wm(r);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ru(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ru(t.remoteStore,s)),r._onlineComponents=t}function Qm(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Wm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await ci(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Qm(e))throw e;Yn("Error using user provided cache. Falling back to memory cache: "+e),await ci(r,new Ni)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await ci(r,new Ni);return r._offlineComponents}async function To(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Cu(r,r._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Cu(r,new yo))),r._onlineComponents}function Hm(r){return To(r).then(t=>t.syncEngine)}function Jm(r){return To(r).then(t=>t.datastore)}async function fs(r){const t=await To(r),e=t.eventManager;return e.onListen=Rm.bind(null,t.syncEngine),e.onUnlisten=Sm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Pm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vm.bind(null,t.syncEngine),e}function Xm(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new Io({next:I=>{a.enqueueAndForget(()=>co(i,g));const S=I.docs.has(u);!S&&I.fromCache?d.reject(new x(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new ho(fr(u.path),m,{includeMetadataChanges:!0,ra:!0});return uo(i,g)}(await fs(r),r.asyncQueue,t,e,n)),n.promise}function Ym(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new Io({next:I=>{a.enqueueAndForget(()=>co(i,g)),I.fromCache&&l.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new ho(u,m,{includeMetadataChanges:!0,ra:!0});return uo(i,g)}(await fs(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Zm(r,t,e,n){if(t===!0&&n===!0)throw new x(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function xu(r){if(!N.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ku(r){if(N.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Vs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F()}function Mt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Vs(r);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ml((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Eo{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Zh;switch(n.type){case"firstParty":return new nd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(b("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Le(this.firestore,t,this._query)}}class yt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class ue extends Le{constructor(t,e,n){super(t,e,fr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new N(t))}withConverter(t){return new ue(this.firestore,t,this._path)}}function li(r,t,...e){if(r=Ft(r),Fl("collection","path",t),r instanceof Eo){const n=H.fromString(t,...e);return ku(n),new ue(r,null,n)}{if(!(r instanceof yt||r instanceof ue))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return ku(n),new ue(r.firestore,null,n)}}function Mu(r,t,...e){if(r=Ft(r),arguments.length===1&&(t=Zu.newId()),Fl("doc","path",t),r instanceof Eo){const n=H.fromString(t,...e);return xu(n),new yt(r,null,new N(n))}{if(!(r instanceof yt||r instanceof ue))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return xu(n),new yt(r.firestore,r instanceof ue?r.converter:null,new N(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new no(this,"async_queue_retry"),this.hu=()=>{const e=Zr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Bt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!me(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw ut("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=oo.createAndSchedule(this,t,e,n,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function Fu(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class de extends Eo{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=function(){return new tg}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ol(this),this._firestoreClient.terminate()}}function eg(r,t,e){e||(e="(default)");const n=Fh(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Oh(i,t))return s;throw new x(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new x(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function yr(r){return r._firestoreClient||Ol(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function Ol(r){var t,e,n;const s=r._freezeSettings(),i=function(u,l,d,m){return new Cd(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ml(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new $m(r._authCredentials,r._appCheckCredentials,r._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(ft.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=/^__.*__$/;class rg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Yt(t,this.data,this.fieldMask,e,this.fieldTransforms):new gn(t,this.data,e,this.fieldTransforms)}}class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Yt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ul(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ao{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ao(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.wu(t),s}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ms(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Ul(this.fu)&&ng.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class sg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||As(t)}Fu(t,e,n,s=!1){return new Ao({fu:t,methodName:e,vu:n,path:st.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bs(r){const t=r._freezeSettings(),e=As(r._databaseId);return new sg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Bl(r,t,e,n,s,i={}){const a=r.Fu(i.merge||i.mergeFields?2:0,t,e,s);Ro("Data must be an object, but it was:",a,n);const u=Gl(n,a);let l,d;if(i.merge)l=new Ct(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const I=Mi(t,g,e);if(!a.contains(I))throw new x(V.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Kl(m,I)||m.push(I)}l=new Ct(m),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new rg(new _t(u),l,d)}class Cs extends wo{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cs}}function ql(r,t,e,n){const s=r.Fu(1,t,e);Ro("Data must be an object, but it was:",s,n);const i=[],a=_t.empty();Fe(n,(l,d)=>{const m=Po(t,l,e);d=Ft(d);const g=s.Su(m);if(d instanceof Cs)i.push(m);else{const I=Tr(d,g);I!=null&&(i.push(m),a.set(m,I))}});const u=new Ct(i);return new Ll(a,u,s.fieldTransforms)}function jl(r,t,e,n,s,i){const a=r.Fu(1,t,e),u=[Mi(t,n,e)],l=[s];if(i.length%2!=0)throw new x(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)u.push(Mi(t,i[I])),l.push(i[I+1]);const d=[],m=_t.empty();for(let I=u.length-1;I>=0;--I)if(!Kl(d,u[I])){const S=u[I];let C=l[I];C=Ft(C);const M=a.Su(S);if(C instanceof Cs)d.push(S);else{const D=Tr(C,M);D!=null&&(d.push(S),m.set(S,D))}}const g=new Ct(d);return new Ll(m,g,a.fieldTransforms)}function ig(r,t,e,n=!1){return Tr(e,r.Fu(n?4:3,t))}function Tr(r,t){if(zl(r=Ft(r)))return Ro("Unsupported field value:",t,r),Gl(r,t);if(r instanceof wo)return function(n,s){if(!Ul(s.fu))throw s.Du(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=Tr(u,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=it.fromDate(n);return{timestampValue:cn(s.serializer,i)}}if(n instanceof it){const i=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cn(s.serializer,i)}}if(n instanceof vo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Me)return{bytesValue:Gc(s.serializer,n._byteString)};if(n instanceof yt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Du(`Unsupported field value: ${Vs(n)}`)}(r,t)}function Gl(r,t){const e={};return dc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fe(r,(n,s)=>{const i=Tr(s,t.pu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function zl(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof vo||r instanceof Me||r instanceof yt||r instanceof wo)}function Ro(r,t,e){if(!zl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Vs(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function Mi(r,t,e){if((t=Ft(t))instanceof Ir)return t._internalPath;if(typeof t=="string")return Po(r,t);throw ms("Field path arguments must be of type string or ",r,!1,void 0,e)}const og=new RegExp("[~\\*/\\[\\]]");function Po(r,t,e){if(t.search(og)>=0)throw ms(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ir(...t.split("."))._internalPath}catch{throw ms(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ms(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new x(V.INVALID_ARGUMENT,u+r+l)}function Kl(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ag(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(So("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ag extends gs{data(){return super.data()}}function So(r,t){return typeof t=="string"?Po(r,t):t instanceof Ir?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vo{}class ug extends Vo{}function cg(r,t,...e){let n=[];t instanceof Vo&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof bo).length,u=i.filter(l=>l instanceof Ds).length;if(a>1||a>0&&u>0)throw new x(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ds extends ug{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ds(t,e,n)}_apply(t){const e=this._parse(t);return Ql(t._query,e),new Le(t.firestore,t.converter,Ti(t._query,e))}_parse(t){const e=bs(t.firestore);return function(i,a,u,l,d,m,g){let I;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Lu(g,m);const S=[];for(const C of g)S.push(Ou(l,i,C));I={arrayValue:{values:S}}}else I=Ou(l,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Lu(g,m),I=ig(u,a,g,m==="in"||m==="not-in");return K.create(d,m,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function lg(r,t,e){const n=t,s=So("where",r);return Ds._create(s,n,e)}class bo extends Vo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new bo(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:X.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Ql(a,l),a=Ti(a,l)}(t._query,e),new Le(t.firestore,t.converter,Ti(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ou(r,t,e){if(typeof(e=Ft(e))=="string"){if(e==="")throw new x(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ac(t)&&e.indexOf("/")!==-1)throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!N.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return sr(r,new N(n))}if(e instanceof yt)return sr(r,e._key);throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vs(e)}.`)}function Lu(r,t){if(!Array.isArray(r)||r.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ql(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Wl{convertValue(t,e="none"){switch(Ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ce(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Fe(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new vo(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=qi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(nr(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);L(Zc(n));const s=new be(n.get(1),n.get(3)),i=new N(n.popFirst(5));return s.isEqual(e)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class hg extends Wl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Co extends gs{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(So("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ts extends Co{data(t={}){return super.data(t)}}class Jl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new tn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ts(this._firestore,this._userDataWriter,n.key,n,new tn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new ts(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new ts(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:dg(u.type),doc:l,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dg(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(r){r=Mt(r,yt);const t=Mt(r.firestore,de);return Xm(yr(t),r._key).then(e=>Yl(t,r,e))}class xs extends Wl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Bu(r){r=Mt(r,Le);const t=Mt(r.firestore,de),e=yr(t),n=new xs(t);return $l(r._query),Ym(e,r._query).then(s=>new Jl(t,n,r,s))}function Qe(r,t,e){r=Mt(r,yt);const n=Mt(r.firestore,de),s=Hl(r.converter,t,e);return Xl(n,[Bl(bs(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,lt.none())])}function fg(r,t,e,...n){r=Mt(r,yt);const s=Mt(r.firestore,de),i=bs(s);let a;return a=typeof(t=Ft(t))=="string"||t instanceof Ir?jl(i,"updateDoc",r._key,t,e,n):ql(i,"updateDoc",r._key,t),Xl(s,[a.toMutation(r._key,lt.exists(!0))])}function qu(r,...t){var e,n,s;r=Ft(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Fu(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fu(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,m;if(r instanceof yt)d=Mt(r.firestore,de),m=fr(r._key.path),l={next:g=>{t[a]&&t[a](Yl(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=Mt(r,Le);d=Mt(g.firestore,de),m=g._query;const I=new xs(d);l={next:S=>{t[a]&&t[a](new Jl(d,I,g,S))},error:t[a+1],complete:t[a+2]},$l(r._query)}return function(I,S,C,M){const D=new Io(M),G=new ho(S,D,C);return I.asyncQueue.enqueueAndForget(async()=>uo(await fs(I),G)),()=>{D.$a(),I.asyncQueue.enqueueAndForget(async()=>co(await fs(I),G))}}(yr(d),m,u,l)}function Xl(r,t){return function(n,s){const i=new Bt;return n.asyncQueue.enqueueAndForget(async()=>bm(await Hm(n),s,i)),i.promise}(yr(r),t)}function Yl(r,t,e){const n=e.docs.get(t._key),s=new xs(r);return new Co(r,s,t._key,n,new tn(e.hasPendingWrites,e.fromCache),t.converter)}class mg{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=yg(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function gg(r){return new mg(r)}class pg{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new yo,this._offlineComponentProvider=new Nl(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}class _g{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new yo,this._offlineComponentProvider=new Gm(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes)}}function yg(r){return new pg(void 0)}function Ig(){return new _g}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={maxAttempts:5};function qn(r,t){if((r=Ft(r)).firestore!==t)throw new x(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=bs(e)}get(e){const n=qn(e,this._firestore),s=new hg(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return F();const a=i[0];if(a.isFoundDocument())return new gs(this._firestore,s,a.key,a,n.converter);if(a.isNoDocument())return new gs(this._firestore,s,n._key,null,n.converter);throw F()})}set(e,n,s){const i=qn(e,this._firestore),a=Hl(i.converter,n,s),u=Bl(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,s);return this._transaction.set(i._key,u),this}update(e,n,s,...i){const a=qn(e,this._firestore);let u;return u=typeof(n=Ft(n))=="string"||n instanceof Ir?jl(this._dataReader,"Transaction.update",a._key,n,s,i):ql(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,u),this}delete(e){const n=qn(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=qn(t,this._firestore),n=new xs(this._firestore);return super.get(t).then(s=>new Co(this._firestore,n,e._key,s._document,new tn(!1,!1),e.converter))}}function ju(r,t,e){r=Mt(r,de);const n=Object.assign(Object.assign({},Tg),e);return function(i){if(i.maxAttempts<1)throw new x(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const l=new Bt;return i.asyncQueue.enqueueAndForget(async()=>{const d=await Jm(i);new Km(i.asyncQueue,d,u,a,l).Xa()}),l.promise}(yr(r),s=>t(new Eg(r,s)),n)}(function(t,e=!0){(function(s){mn=s})(qh),jh(new Gh("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new de(new td(n.getProvider("auth-internal")),new sd(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new be(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),hi(xa,"4.6.2",t),hi(xa,"4.6.2","esm2017")})();const Lt=(r,...t)=>t.map(e=>`${r}.${e}`),Fi=[...Lt("sales","customers.view","customers.edit","customers.delete","leads.edit","estimates.view","estimates.edit","estimates.convert","salesOrders.view","salesOrders.edit","salesOrders.fulfill","invoices.view","invoices.edit","invoices.send","invoices.void","invoices.batch","recurring.edit","estimates.sign","paymentLinks.manage","reminders.edit","salesReceipts.edit","creditMemos.edit","refunds.edit","payments.receive","deposits.edit","statements.send","collections.view","priceLevels.edit"),...Lt("purchases","vendors.view","vendors.edit","vendors.delete","expenses.view","expenses.edit","expenses.void","checks.edit","checks.print","bills.view","bills.edit","bills.pay","bills.approve","vendorCredits.edit","purchaseOrders.edit","purchaseOrders.approve","receipts.upload","reclassify","contractors.1099","w9.manage"),...Lt("banking","feeds.view","feeds.categorize","feeds.split","feeds.exclude","rules.edit","connections.manage","reconcile","reconcile.undo","transfers.edit"),...Lt("ledger","accounts.view","accounts.edit","accounts.merge","journal.view","journal.edit","journal.reverse","classes.edit","locations.edit","currencies.edit","fixedAssets.edit","depreciation.run","revenueRecognition.edit","budgets.edit","anomalies.review","import","export"),...Lt("inventory","items.view","items.edit","items.delete","adjust","assemblies.build","transfers.edit","landedCost.edit","priceRules.edit"),...Lt("projects","view","edit","changeOrders.edit","budgets.edit"),...Lt("time","own.edit","timesheets.submit","all.view","all.edit","approve","billable.invoice"),...Lt("payroll","employees.view","employees.edit","run","approve","taxes.file","timeOff.edit","stubs.view.own","stubs.view.all"),...Lt("taxes","agencies.edit","rates.edit","returns.file","mileage.edit","estimates.view"),...Lt("reports","view.all","view.financial","view.sales","view.ar","view.ap","view.payroll","customize","schedule","export","auditLog.view"),...Lt("settings","company.edit","users.manage","closeBooks","closeBooks.override","edition.switch","integrations.manage","api.manage","customFields.edit","backup","restore","workflows.edit")],Qt=r=>Fi.filter(t=>t.startsWith(`${r}.`)),wg=r=>Qt(r).filter(t=>/view/.test(t)),Gu={admin:[...Fi],standard:[...Qt("sales"),...Qt("purchases"),...Qt("banking"),...wg("ledger"),...Qt("inventory"),...Qt("projects"),...Qt("time"),...Qt("taxes"),"reports.view.sales","reports.export"].filter(r=>!["banking.reconcile.undo","purchases.bills.approve","purchases.purchaseOrders.approve"].includes(r)),reportsOnly:[...Qt("reports").filter(r=>r!=="reports.auditLog.view"),...Fi.filter(r=>r.endsWith(".view"))]};function vg(r){const t=r.filter(e=>!/\.view|view\./.test(e));return[...new Set(t.map(e=>e.split(".")[0]))]}const Ag={apiKey:"AIzaSyAngYDBkXD6iW_drxB-CgsFID1hevE4mlU",authDomain:"joe-westlake-llc.firebaseapp.com",projectId:"joe-westlake-llc",storageBucket:"joe-westlake-llc.firebasestorage.app",messagingSenderId:"54204985542",appId:"1:54204985542:web:1a3f7d157c34dff15267c7"};let Kr=null,zu=null;function Rg(){return Kr||(Kr=zh(Ag),zu=eg(Kr,{localCache:gg({tabManager:Ig()})})),{app:Kr,db:zu}}const We=r=>`${r}_${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`,Ut=r=>JSON.parse(JSON.stringify(r));class kg{constructor(t,e){ri(this,"accountsCache",new Map);ri(this,"newId",We);this.uid=t,this.email=e}get db(){return Rg().db}orgRef(t){return Mu(this.db,"organizations",t)}sub(t,e,n){return Mu(this.db,"organizations",t,e,n)}async listOrgs(){return(await Bu(cg(li(this.db,"organizations"),lg("ownerUid","==",this.uid)))).docs.map(e=>({...e.data(),id:e.id}))}async createOrg(t,e={seedAccounts:!0}){const n=We("org"),s={...t,id:n,ownerUid:this.uid,createdAt:new Date().toISOString()};if(await Qe(this.orgRef(n),Ut(s)),await Qe(this.sub(n,"members",this.uid),{uid:this.uid,email:this.email,role:"admin",permissions:Gu.admin,areas:vg(Gu.admin)}),e.seedAccounts!==!1)for(const i of Kh(s.baseCurrency))await Qe(this.sub(n,"accounts",i.id),Ut(i));return s}watch(t,e){const n=$h(),s=[qu(this.orgRef(t),i=>{n.org=i.exists()?{...i.data(),id:i.id}:null,e({...n})})];for(const i of["accounts","transactions","journalEntries","contacts","items","auditLogs"])s.push(qu(li(this.db,"organizations",t,i),a=>{n[i]=a.docs.map(u=>({...u.data(),id:u.id})),i==="accounts"&&this.accountsCache.set(t,n.accounts),e({...n})}));return()=>s.forEach(i=>i())}auditDoc(t){return{...t,id:We("log"),at:new Date().toISOString(),uid:this.uid,email:this.email}}async postTransaction(t,e){const n={...e,id:e.id||We("tx")},s=this.accountsCache.get(t)||(await Bu(li(this.db,"organizations",t,"accounts"))).docs.map(a=>a.data());let i=null;return await ju(this.db,async a=>{const u=await a.get(this.orgRef(t));if(!u.exists())throw new Error("Company not found");i=Qh(n,We("je"),{...u.data()},s,this.uid),a.set(this.sub(t,"transactions",n.id),Ut({...n,createdBy:this.uid,createdAt:new Date().toISOString()})),i&&a.set(this.sub(t,"journalEntries",i.id),Ut(i));const l=this.auditDoc({action:"create",collection:"transactions",docId:n.id,summary:`${n.type} ${n.number||""}`.trim()});a.set(this.sub(t,"auditLogs",l.id),Ut(l))}),{tx:n,entry:i}}async reverseEntry(t,e,n,s){const i=this.accountsCache.get(t)||[],a=`rev_${e}`;let u;return await ju(this.db,async l=>{const[d,m,g]=await Promise.all([l.get(this.orgRef(t)),l.get(this.sub(t,"journalEntries",e)),l.get(this.sub(t,"journalEntries",a))]);if(!m.exists())throw new Error("Entry not found");if(g.exists())throw new Error("This entry was already reversed.");const I=d.data();u=Wh(Hh(m.data(),a,n,s),{accounts:Object.fromEntries(i.map(C=>[C.id,C])),closingDate:I.closingDate}),u={...u,createdBy:this.uid,createdAt:new Date().toISOString()},l.set(this.sub(t,"journalEntries",a),Ut(u));const S=this.auditDoc({action:"reverse",collection:"journalEntries",docId:e,summary:`Reversed ${e}`});l.set(this.sub(t,"auditLogs",S.id),Ut(S))}),u}async saveDoc(t,e,n){const s=n.id||We(e.slice(0,4)),i=this.sub(t,e,s),a=await Uu(i);await Qe(i,Ut({...n,id:s}),{merge:!0});const u=this.auditDoc({action:a.exists()?"update":"create",collection:e,docId:s,summary:`${a.exists()?"Updated":"Added"} ${e.slice(0,-1)}`});return await Qe(this.sub(t,"auditLogs",u.id),Ut(u)),s}async updateOrg(t,e){const n=(await Uu(this.orgRef(t))).data();await fg(this.orgRef(t),Ut(e));const s={};for(const[a,u]of Object.entries(e))s[a]={from:(n==null?void 0:n[a])??null,to:u};const i=this.auditDoc({action:"closingDate"in e?"close_books":"settings",collection:"organizations",docId:t,summary:"Company settings changed",diff:s});await Qe(this.sub(t,"auditLogs",i.id),Ut(i))}}export{kg as FirestoreStore,Rg as firebase,Ag as firebaseConfig};
