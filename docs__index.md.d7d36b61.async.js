(self.webpackChunkant_color_panel=self.webpackChunkant_color_panel||[]).push([[935],{9087:function(k,L,f){"use strict";f.r(L),f.d(L,{default:function(){return R}});var N=f(56191),x=f(79685),$=f(29087),F=f.n($),B=["children"];function M(t,e){return H(t)||V(t,e)||_(t,e)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,e){if(t){if(typeof t=="string")return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}}function w(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function V(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,l=!1,c,h;try{for(n=n.call(t);!(s=(c=n.next()).done)&&(i.push(c.value),!(e&&i.length===e));s=!0);}catch(d){l=!0,h=d}finally{try{!s&&n.return!=null&&n.return()}finally{if(l)throw h}}return i}}function H(t){if(Array.isArray(t))return t}function U(t,e){if(t==null)return{};var n=Z(t,e),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Z(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,l;for(l=0;l<i.length;l++)s=i[l],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}var z=function(e){var n=e.children,i=U(e,B),s=(0,x.useRef)(null),l=(0,x.useState)(!1),c=M(l,2),h=c[0],d=c[1],I=(0,x.useState)(!1),o=M(I,2),g=o[0],A=o[1];return(0,x.useEffect)(function(){var y=s.current;if(y){var E=F()(function(){d(y.scrollLeft>0),A(y.scrollLeft<y.scrollWidth-y.offsetWidth)},100);return E(),y.addEventListener("scroll",E),window.addEventListener("resize",E),function(){y.removeEventListener("scroll",E),window.removeEventListener("resize",E)}}},[]),x.createElement("div",{className:"dumi-default-table"},x.createElement("div",{className:"dumi-default-table-content",ref:s,"data-left-folded":h||void 0,"data-right-folded":g||void 0},x.createElement("table",i,n)))},J=z;function S(t,e){return K(t)||Y(t,e)||X(t,e)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(t,e){if(t){if(typeof t=="string")return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}}function O(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Y(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,l=!1,c,h;try{for(n=n.call(t);!(s=(c=n.next()).done)&&(i.push(c.value),!(e&&i.length===e));s=!0);}catch(d){l=!0,h=d}finally{try{!s&&n.return!=null&&n.return()}finally{if(l)throw h}}return i}}function K(t){if(Array.isArray(t))return t}var P={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var n=this,i=[];return Object.entries(e.properties||{}).forEach(function(s){var l,c=S(s,2),h=c[0],d=c[1];i.push("".concat(h).concat((l=e.required)!==null&&l!==void 0&&l.includes(h)?"":"?",": ").concat(d.type==="object"?"object":n.toString(d)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(e){if(e.items){var n=this.getValidClassName(e.items);return n?"".concat(n,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var n=this,i=e.signature,s="oneOf"in i?i.oneOf:[i];return s.map(function(l){return"".concat(l.isAsync?"async ":"","(").concat(l.arguments.map(function(c){return"".concat(c.key,": ").concat(n.toString(c))}).join(", "),") => ").concat(n.toString(l.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(e){var n=this;return e.oneOf.map(function(i){return n.getValidClassName(i)||n.toString(i)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},a=function(e){var n=useState(function(){return P.toString(e)}),i=S(n,2),s=i[0],l=i[1];return useEffect(function(){l(P.toString(e))},[e]),React.createElement("code",null,s)},u=function(e){var n,i=useRouteMeta(),s=i.frontmatter,l=useAtomAssets(),c=l.components,h=e.id||s.atomId,d=useIntl();if(!h)throw new Error("`id` properties if required for API component!");var I=c==null?void 0:c[h];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,d.formatMessage({id:"api.component.name"})),React.createElement("th",null,d.formatMessage({id:"api.component.description"})),React.createElement("th",null,d.formatMessage({id:"api.component.type"})),React.createElement("th",null,d.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,I&&(n=I.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(I.propsConfig.properties).map(function(o){var g,A=S(o,2),y=A[0],E=A[1];return React.createElement("tr",{key:y},React.createElement("td",null,y),React.createElement("td",null,E.description||"--"),React.createElement("td",null,React.createElement(a,E)),React.createElement("td",null,React.createElement("code",null,(g=I.propsConfig.required)!==null&&g!==void 0&&g.includes(y)?d.formatMessage({id:"api.component.required"}):JSON.stringify(E.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},d.formatMessage({id:"api.component.".concat(c?"not.found":"unavailable")},{id:h}))))))},m=null;function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},v.apply(this,arguments)}var b=function(e){return React.createElement("span",v({className:"dumi-default-badge"},e))},C=null,T=f(73440),j=f(28534),p=f(9850),r=f(63342);function W(){var t=(0,N.eL)(),e=t.texts;return(0,r.jsx)(N.dY,{children:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsx)("blockquote",{children:(0,r.jsxs)("p",{children:[e[0].value,(0,r.jsx)("a",{href:"https://github.com/ant-design/antd-token-previewer",children:e[1].value}),e[2].value]})}),(0,r.jsx)("p",{children:(0,r.jsx)("img",{alt:"Demo",src:f(96985)})}),(0,r.jsxs)("h2",{id:"install",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"Install"]}),(0,r.jsx)(p.Z,{lang:"bash",children:e[3].value}),(0,r.jsxs)("h2",{id:"usage",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,r.jsx)(p.Z,{lang:"js",children:e[4].value}),(0,r.jsxs)("h2",{id:"api",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,r.jsxs)(J,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{align:"left",children:e[5].value}),(0,r.jsx)("th",{align:"left",children:e[6].value}),(0,r.jsx)("th",{align:"left",children:e[7].value}),(0,r.jsx)("th",{align:"left",children:e[8].value}),(0,r.jsx)("th",{align:"left",children:e[9].value})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{align:"left",children:e[10].value}),(0,r.jsx)("td",{align:"left",children:e[11].value}),(0,r.jsx)("td",{align:"left",children:e[12].value}),(0,r.jsx)("td",{align:"left",children:e[13].value}),(0,r.jsx)("td",{align:"left",children:e[14].value})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{align:"left",children:e[15].value}),(0,r.jsx)("td",{align:"left",children:e[16].value}),(0,r.jsx)("td",{align:"left",children:e[17].value}),(0,r.jsx)("td",{align:"left",children:e[18].value}),(0,r.jsx)("td",{align:"left",children:e[19].value})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{align:"left",children:e[20].value}),(0,r.jsx)("td",{align:"left",children:e[21].value}),(0,r.jsx)("td",{align:"left",children:e[22].value}),(0,r.jsx)("td",{align:"left",children:e[23].value}),(0,r.jsx)("td",{align:"left",children:e[24].value})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{align:"left",children:e[25].value}),(0,r.jsx)("td",{align:"left",children:e[26].value}),(0,r.jsx)("td",{align:"left",children:e[27].value}),(0,r.jsx)("td",{align:"left",children:e[28].value}),(0,r.jsx)("td",{align:"left",children:e[29].value})]})]})]}),(0,r.jsxs)("h2",{id:"development",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#development",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"Development"]}),(0,r.jsx)(p.Z,{lang:"bash",children:e[30].value}),(0,r.jsxs)("h2",{id:"license",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#license",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"License"]}),(0,r.jsx)("p",{children:e[31].value})]})})})}var R=W},29087:function(k,L,f){var N="Expected a function",x=NaN,$="[object Symbol]",F=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,D=/^0o[0-7]+$/i,_=parseInt,w=typeof f.g=="object"&&f.g&&f.g.Object===Object&&f.g,V=typeof self=="object"&&self&&self.Object===Object&&self,H=w||V||Function("return this")(),U=Object.prototype,Z=U.toString,z=Math.max,J=Math.min,S=function(){return H.Date.now()};function G(a,u,m){var v,b,C,T,j,p,r=0,W=!1,R=!1,t=!0;if(typeof a!="function")throw new TypeError(N);u=P(u)||0,O(m)&&(W=!!m.leading,R="maxWait"in m,C=R?z(P(m.maxWait)||0,u):C,t="trailing"in m?!!m.trailing:t);function e(o){var g=v,A=b;return v=b=void 0,r=o,T=a.apply(A,g),T}function n(o){return r=o,j=setTimeout(l,u),W?e(o):T}function i(o){var g=o-p,A=o-r,y=u-g;return R?J(y,C-A):y}function s(o){var g=o-p,A=o-r;return p===void 0||g>=u||g<0||R&&A>=C}function l(){var o=S();if(s(o))return c(o);j=setTimeout(l,i(o))}function c(o){return j=void 0,t&&v?e(o):(v=b=void 0,T)}function h(){j!==void 0&&clearTimeout(j),r=0,v=p=b=j=void 0}function d(){return j===void 0?T:c(S())}function I(){var o=S(),g=s(o);if(v=arguments,b=this,p=o,g){if(j===void 0)return n(p);if(R)return j=setTimeout(l,u),e(p)}return j===void 0&&(j=setTimeout(l,u)),T}return I.cancel=h,I.flush=d,I}function X(a,u,m){var v=!0,b=!0;if(typeof a!="function")throw new TypeError(N);return O(m)&&(v="leading"in m?!!m.leading:v,b="trailing"in m?!!m.trailing:b),G(a,u,{leading:v,maxWait:u,trailing:b})}function O(a){var u=typeof a;return!!a&&(u=="object"||u=="function")}function Y(a){return!!a&&typeof a=="object"}function K(a){return typeof a=="symbol"||Y(a)&&Z.call(a)==$}function P(a){if(typeof a=="number")return a;if(K(a))return x;if(O(a)){var u=typeof a.valueOf=="function"?a.valueOf():a;a=O(u)?u+"":u}if(typeof a!="string")return a===0?a:+a;a=a.replace(F,"");var m=M.test(a);return m||D.test(a)?_(a.slice(2),m?2:8):B.test(a)?x:+a}k.exports=X},96985:function(k,L,f){"use strict";k.exports=f.p+"static/demo.fe356fd7.png"}}]);