"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["8016"],{65:function(t,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var e=r(7294);let u={},o=e.createContext(u);function c(t){let n=e.useContext(o);return e.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function i(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(u):t.components||u:c(t.components),e.createElement(o.Provider,{value:n},t.children)}},4641:function(t,n,r){r.d(n,{Z:()=>o});var e=r("9401");function u(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new e.Z;++n<r;)this.add(t[n])}u.prototype.add=u.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},u.prototype.has=function(t){return this.__data__.has(t)};let o=u},9227:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e&&!1!==n(t[r],r,t););return t}},7276:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n){for(var r=-1,e=null==t?0:t.length,u=0,o=[];++r<e;){var c=t[r];n(c,r,t)&&(o[u++]=c)}return o}},7479:function(t,n,r){r.d(n,{Z:function(){return u}});var e=r(1723);let u=function(t,n){return!!(null==t?0:t.length)&&(0,e.Z)(t,n,0)>-1}},6592:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n,r){for(var e=-1,u=null==t?0:t.length;++e<u;)if(r(n,t[e]))return!0;return!1}},6248:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n){for(var r=-1,e=null==t?0:t.length,u=Array(e);++r<e;)u[r]=n(t[r],r,t);return u}},293:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n){for(var r=-1,e=n.length,u=t.length;++r<e;)t[u+r]=n[r];return t}},3130:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;return!1}},6124:function(t,n,r){r.d(n,{Z:()=>R});var e=r("1395"),u=r("9227"),o=r("5803"),c=r("9919"),i=r("7074"),f=r("38"),a=r("9307"),l=r("6177"),Z=r("524"),v=r("6630"),s=r("1095"),b=r("8982"),d=r("3302"),j=Object.prototype.hasOwnProperty;let p=function(t){var n=t.length,r=new t.constructor(n);return n&&"string"==typeof t[0]&&j.call(t,"index")&&(r.index=t.index,r.input=t.input),r};var y=r("1914");let h=function(t,n){var r=n?(0,y.Z)(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var g=/\w*$/;let w=function(t){var n=new t.constructor(t.source,g.exec(t));return n.lastIndex=t.lastIndex,n};var A=r("3958"),_=A.Z?A.Z.prototype:void 0,m=_?_.valueOf:void 0,O=r("2025");let S=function(t,n,r){var e,u=t.constructor;switch(n){case"[object ArrayBuffer]":return(0,y.Z)(t);case"[object Boolean]":case"[object Date]":return new u(+t);case"[object DataView]":return h(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,O.Z)(t,r);case"[object Map]":case"[object Set]":return new u;case"[object Number]":case"[object String]":return new u(t);case"[object RegExp]":return w(t);case"[object Symbol]":;return e=t,m?Object(m.call(e)):{}}};var k=r("2799"),x=r("1739"),E=r("5162"),C=r("5887"),I=r("4026"),U=r("4413"),M=U.Z&&U.Z.isMap,P=M?(0,I.Z)(M):function(t){return(0,C.Z)(t)&&"[object Map]"==(0,d.Z)(t)},B=r("8641"),D=U.Z&&U.Z.isSet,F=D?(0,I.Z)(D):function(t){return(0,C.Z)(t)&&"[object Set]"==(0,d.Z)(t)},z="[object Arguments]",L="[object Function]",$="[object Object]",N={};N[z]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object DataView]"]=N["[object Boolean]"]=N["[object Date]"]=N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Map]"]=N["[object Number]"]=N[$]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object Symbol]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Error]"]=N[L]=N["[object WeakMap]"]=!1;let R=function t(n,r,j,y,h,g){var w,A=1&r,_=2&r,m=4&r;if(j&&(w=h?j(n,y,h,g):j(n)),void 0!==w)return w;if(!(0,B.Z)(n))return n;var O=(0,x.Z)(n);if(O){if(w=p(n),!A)return(0,l.Z)(n,w)}else{var C,I,U,M,D,R,V,G,W=(0,d.Z)(n),q=W==L||"[object GeneratorFunction]"==W;if((0,E.Z)(n))return(0,a.Z)(n,A);if(W==$||W==z||q&&!h){if(w=_||q?{}:(0,k.Z)(n),!A){;return _?(U=n,M=(C=w,I=n,C&&(0,c.Z)(I,(0,f.Z)(I),C)),(0,c.Z)(U,(0,v.Z)(U),M)):(V=n,G=(D=w,R=n,D&&(0,c.Z)(R,(0,i.Z)(R),D)),(0,c.Z)(V,(0,Z.Z)(V),G))}}else{if(!N[W])return h?n:{};w=S(n,W,A)}}g||(g=new e.Z);var H=g.get(n);if(H)return H;g.set(n,w),F(n)?n.forEach(function(e){w.add(t(e,r,j,e,n,g))}):P(n)&&n.forEach(function(e,u){w.set(u,t(e,r,j,u,n,g))});var J=m?_?b.Z:s.Z:_?f.Z:i.Z,K=O?void 0:J(n);return(0,u.Z)(K||n,function(e,u){K&&(e=n[u=e]),(0,o.Z)(w,u,t(e,r,j,u,n,g))}),w}},869:function(t,n,r){r.d(n,{Z:()=>i});var e,u,o=r("929"),c=r("1581");let i=(e=o.Z,function(t,n){if(null==t)return t;if(!(0,c.Z)(t))return e(t,n);for(var r=t.length,o=-1,i=Object(t);(u?o--:++o<r)&&!1!==n(i[o],o,i););return t})},789:function(t,n,r){r.d(n,{Z:function(){return u}});var e=r(869);let u=function(t,n){var r=[];return(0,e.Z)(t,function(t,e,u){n(t,e,u)&&r.push(t)}),r}},1208:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n,r,e){for(var u=t.length,o=r+(e?1:-1);e?o--:++o<u;)if(n(t[o],o,t))return o;return -1}},9446:function(t,n,r){r.d(n,{Z:()=>a});var e=r("293"),u=r("3958"),o=r("5988"),c=r("1739"),i=u.Z?u.Z.isConcatSpreadable:void 0;let f=function(t){return(0,c.Z)(t)||(0,o.Z)(t)||!!(i&&t&&t[i])},a=function t(n,r,u,o,c){var i=-1,a=n.length;for(u||(u=f),c||(c=[]);++i<a;){var l=n[i];r>0&&u(l)?r>1?t(l,r-1,u,o,c):(0,e.Z)(c,l):!o&&(c[c.length]=l)}return c}},929:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(5467),u=r(7074);let o=function(t,n){return t&&(0,e.Z)(t,n,u.Z)}},7061:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(949),u=r(7706);let o=function(t,n){n=(0,e.Z)(n,t);for(var r=0,o=n.length;null!=t&&r<o;)t=t[(0,u.Z)(n[r++])];return r&&r==o?t:void 0}},8467:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(293),u=r(1739);let o=function(t,n,r){var o=n(t);return(0,u.Z)(t)?o:(0,e.Z)(o,r(t))}},1723:function(t,n,r){r.d(n,{Z:()=>c});var e=r("1208");let u=function(t){return t!=t},o=function(t,n,r){for(var e=r-1,u=t.length;++e<u;)if(t[e]===n)return e;return -1},c=function(t,n,r){return n==n?o(t,n,r):(0,e.Z)(t,u,r)}},9547:function(t,n,r){r.d(n,{Z:()=>W});var e=r("1395"),u=r("4641"),o=r("3130"),c=r("9976");let i=function(t,n,r,e,i,f){var a=1&r,l=t.length,Z=n.length;if(l!=Z&&!(a&&Z>l))return!1;var v=f.get(t),s=f.get(n);if(v&&s)return v==n&&s==t;var b=-1,d=!0,j=2&r?new u.Z:void 0;for(f.set(t,n),f.set(n,t);++b<l;){var p=t[b],y=n[b];if(e)var h=a?e(y,p,b,n,t,f):e(p,y,b,t,n,f);if(void 0!==h){if(h)continue;d=!1;break}if(j){if(!(0,o.Z)(n,function(t,n){if(!(0,c.Z)(j,n)&&(p===t||i(p,t,r,e,f)))return j.push(n)})){d=!1;break}}else if(!(p===y||i(p,y,r,e,f))){d=!1;break}}return f.delete(t),f.delete(n),d};var f=r("3958"),a=r("8530"),l=r("8487");let Z=function(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r};var v=r("2840"),s=f.Z?f.Z.prototype:void 0,b=s?s.valueOf:void 0;let d=function(t,n,r,e,u,o,c){switch(r){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)break;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":if(t.byteLength!=n.byteLength||!o(new a.Z(t),new a.Z(n)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,l.Z)(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var f=Z;case"[object Set]":var s=1&e;if(f||(f=v.Z),t.size!=n.size&&!s)break;var d=c.get(t);if(d)return d==n;e|=2,c.set(t,n);var j=i(f(t),f(n),e,u,o,c);return c.delete(t),j;case"[object Symbol]":if(b)return b.call(t)==b.call(n)}return!1};var j=r("1095"),p=Object.prototype.hasOwnProperty;let y=function(t,n,r,e,u,o){var c=1&r,i=(0,j.Z)(t),f=i.length;if(f!=(0,j.Z)(n).length&&!c)return!1;for(var a=f;a--;){var l=i[a];if(!(c?l in n:p.call(n,l)))return!1}var Z=o.get(t),v=o.get(n);if(Z&&v)return Z==n&&v==t;var s=!0;o.set(t,n),o.set(n,t);for(var b=c;++a<f;){var d=t[l=i[a]],y=n[l];if(e)var h=c?e(y,d,l,n,t,o):e(d,y,l,t,n,o);if(!(void 0===h?d===y||u(d,y,r,e,o):h)){s=!1;break}b||(b="constructor"==l)}if(s&&!b){var g=t.constructor,w=n.constructor;g!=w&&"constructor"in t&&"constructor"in n&&!("function"==typeof g&&g instanceof g&&"function"==typeof w&&w instanceof w)&&(s=!1)}return o.delete(t),o.delete(n),s};var h=r("3302"),g=r("1739"),w=r("5162"),A=r("8366"),_="[object Arguments]",m="[object Array]",O="[object Object]",S=Object.prototype.hasOwnProperty;let k=function(t,n,r,u,o,c){var f=(0,g.Z)(t),a=(0,g.Z)(n),l=f?m:(0,h.Z)(t),Z=a?m:(0,h.Z)(n);l=l==_?O:l,Z=Z==_?O:Z;var v=l==O,s=Z==O,b=l==Z;if(b&&(0,w.Z)(t)){if(!(0,w.Z)(n))return!1;f=!0,v=!1}if(b&&!v)return c||(c=new e.Z),f||(0,A.Z)(t)?i(t,n,r,u,o,c):d(t,n,l,r,u,o,c);if(!(1&r)){var j=v&&S.call(t,"__wrapped__"),p=s&&S.call(n,"__wrapped__");if(j||p){var k=j?t.value():t,x=p?n.value():n;return c||(c=new e.Z),o(k,x,r,u,c)}}return!!b&&(c||(c=new e.Z),y(t,n,r,u,o,c))};var x=r("5887");let E=function t(n,r,e,u,o){return n===r||(null!=n&&null!=r&&((0,x.Z)(n)||(0,x.Z)(r))?k(n,r,e,u,t,o):n!=n&&r!=r)},C=function(t,n,r,u){var o=r.length,c=o,i=!u;if(null==t)return!c;for(t=Object(t);o--;){var f=r[o];if(i&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++o<c;){var a=(f=r[o])[0],l=t[a],Z=f[1];if(i&&f[2]){if(void 0===l&&!(a in t))return!1}else{var v=new e.Z;if(u)var s=u(l,Z,a,t,n,v);if(!(void 0===s?E(Z,l,3,u,v):s))return!1}}return!0};var I=r("8641");let U=function(t){return t==t&&!(0,I.Z)(t)};var M=r("7074");let P=function(t){for(var n=(0,M.Z)(t),r=n.length;r--;){var e=n[r],u=t[e];n[r]=[e,u,U(u)]}return n},B=function(t,n){return function(r){return null!=r&&r[t]===n&&(void 0!==n||t in Object(r))}},D=function(t){var n=P(t);return 1==n.length&&n[0][2]?B(n[0][0],n[0][1]):function(r){return r===t||C(r,t,n)}};var F=r("7061");let z=function(t,n,r){var e=null==t?void 0:(0,F.Z)(t,n);return void 0===e?r:e};var L=r("6890"),$=r("6699"),N=r("7706"),R=r("4675"),V=r("1961");let G=function(t){var n;return(0,$.Z)(t)?(0,V.Z)((0,N.Z)(t)):(n=t,function(t){return(0,F.Z)(t,n)})},W=function(t){if("function"==typeof t)return t;if(null==t)return R.Z;if("object"==typeof t){var n,r;return(0,g.Z)(t)?(n=t[0],r=t[1],(0,$.Z)(n)&&U(r)?B((0,N.Z)(n),r):function(t){var e=z(t,n);return void 0===e&&e===r?(0,L.Z)(t,n):E(r,e,3)}):D(t)}return G(t)}},1961:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t){return function(n){return null==n?void 0:n[t]}}},8610:function(t,n,r){r.d(n,{Z:()=>Z});var e=r("4641"),u=r("7479"),o=r("6592"),c=r("9976"),i=r("8521"),f=r("6446"),a=r("2840"),l=i.Z&&1/(0,a.Z)(new i.Z([,-0]))[1]==1/0?function(t){return new i.Z(t)}:f.Z;let Z=function(t,n,r){var i=-1,f=u.Z,Z=t.length,v=!0,s=[],b=s;if(r)v=!1,f=o.Z;else if(Z>=200){var d=n?null:l(t);if(d)return(0,a.Z)(d);v=!1,f=c.Z,b=new e.Z}else b=n?[]:s;t:for(;++i<Z;){var j=t[i],p=n?n(j):j;if(j=r||0!==j?j:0,v&&p==p){for(var y=b.length;y--;)if(b[y]===p)continue t;n&&b.push(p),s.push(j)}else!f(b,p,r)&&(b!==s&&b.push(p),s.push(j))}return s}},9976:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t,n){return t.has(n)}},3898:function(t,n,r){r.d(n,{Z:function(){return u}});var e=r(4675);let u=function(t){return"function"==typeof t?t:e.Z}},949:function(t,n,r){r.d(n,{Z:()=>s});var e,u,o,c=r("1739"),i=r("6699"),f=r("5269"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g;var Z=(e=function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(a,function(t,r,e,u){n.push(e?u.replace(l,"$1"):r||t)}),n},o=(u=(0,f.Z)(e,function(t){return 500===o.size&&o.clear(),t})).cache,u),v=r("2501");let s=function(t,n){return(0,c.Z)(t)?t:(0,i.Z)(t,n)?[t]:Z((0,v.Z)(t))}},1095:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(8467),u=r(524),o=r(7074);let c=function(t){return(0,e.Z)(t,o.Z,u.Z)}},8982:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(8467),u=r(6630),o=r(38);let c=function(t){return(0,e.Z)(t,o.Z,u.Z)}},524:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(7276),u=r(7e3),o=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols;let i=c?function(t){return null==t?[]:(t=Object(t),(0,e.Z)(c(t),function(n){return o.call(t,n)}))}:u.Z},6630:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(293),u=r(3754),o=r(524),c=r(7e3);let i=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)(0,e.Z)(n,(0,o.Z)(t)),t=(0,u.Z)(t);return n}:c.Z},7825:function(t,n,r){r.d(n,{Z:function(){return a}});var e=r(949),u=r(5988),o=r(1739),c=r(2383),i=r(9666),f=r(7706);let a=function(t,n,r){n=(0,e.Z)(n,t);for(var a=-1,l=n.length,Z=!1;++a<l;){var v=(0,f.Z)(n[a]);if(!(Z=null!=t&&r(t,v)))break;t=t[v]}return Z||++a!=l?Z:!!(l=null==t?0:t.length)&&(0,i.Z)(l)&&(0,c.Z)(v,l)&&((0,o.Z)(t)||(0,u.Z)(t))}},6699:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(1739),u=r(2147),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;let i=function(t,n){if((0,e.Z)(t))return!1;var r=typeof t;return!!("number"==r||"symbol"==r||"boolean"==r||null==t||(0,u.Z)(t))||c.test(t)||!o.test(t)||null!=n&&t in Object(n)}},2840:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}},7706:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(2147),u=1/0;let o=function(t){if("string"==typeof t||(0,e.Z)(t))return t;var n=t+"";return"0"==n&&1/t==-u?"-0":n}},7627:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(7276),u=r(789),o=r(9547),c=r(1739);let i=function(t,n){return((0,c.Z)(t)?e.Z:u.Z)(t,(0,o.Z)(n,3))}},2633:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(9227),u=r(869),o=r(3898),c=r(1739);let i=function(t,n){return((0,c.Z)(t)?e.Z:u.Z)(t,(0,o.Z)(n))}},6890:function(t,n,r){r.d(n,{Z:()=>o});let e=function(t,n){return null!=t&&n in Object(t)};var u=r("7825");let o=function(t,n){return null!=t&&(0,u.Z)(t,n,e)}},2147:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(5182),u=r(5887);let o=function(t){return"symbol"==typeof t||(0,u.Z)(t)&&"[object Symbol]"==(0,e.Z)(t)}},1925:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(t){return void 0===t}},7074:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(2895),u=r(2769),o=r(1581);let c=function(t){return(0,o.Z)(t)?(0,e.Z)(t):(0,u.Z)(t)}},6446:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(){}},1748:function(t,n,r){r.d(n,{Z:()=>f});let e=function(t,n,r,e){var u=-1,o=null==t?0:t.length;for(e&&o&&(r=t[++u]);++u<o;)r=n(r,t[u],u,t);return r};var u=r("869"),o=r("9547");let c=function(t,n,r,e,u){return u(t,function(t,u,o){r=e?(e=!1,t):n(r,t,u,o)}),r};var i=r("1739");let f=function(t,n,r){var f=(0,i.Z)(t)?e:c,a=arguments.length<3;return f(t,(0,o.Z)(n,4),r,a,u.Z)}},7e3:function(t,n,r){r.d(n,{Z:function(){return e}});let e=function(){return[]}},2501:function(t,n,r){r.d(n,{Z:()=>Z});var e=r("3958"),u=r("6248"),o=r("1739"),c=r("2147"),i=1/0,f=e.Z?e.Z.prototype:void 0,a=f?f.toString:void 0;let l=function t(n){if("string"==typeof n)return n;if((0,o.Z)(n))return(0,u.Z)(n,t)+"";if((0,c.Z)(n))return a?a.call(n):"";var r=n+"";return"0"==r&&1/n==-i?"-0":r},Z=function(t){return null==t?"":l(t)}},6433:function(t,n,r){r.d(n,{Z:()=>o});var e=r("6248"),u=r("7074");let o=function(t){var n,r;return null==t?[]:(n=t,r=(0,u.Z)(t),(0,e.Z)(r,function(t){return n[t]}))}}}]);