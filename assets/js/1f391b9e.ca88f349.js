(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["493"],{7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,i,s]=t;if(r&&s){r=parseInt(r);let e=r<(s=parseInt(s))?1:-1;("-"===i||".."===i||"\u2025"===i)&&(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>eQ});var r=n("5893"),i=n("7294"),s=n("7026"),l=n("4713"),a=n("4681"),o=n("748"),c=n("65"),d=n("4819"),u=n("7227"),m=n("4239"),h=n("140");function f(){let{prism:e}=(0,h.L)(),{colorMode:t}=(0,m.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n("7594"),x=n.n(p);let j=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},v={...b,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},y=Object.keys(b);function N(e,t){let n=e.map(e=>{let{start:n,end:r}=v[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let k="codeBlockContainer_Ckt0";function w(e){let{as:t,...n}=e,i=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,i]=e,s=t[r];s&&"string"==typeof i&&(n[s]=i)}),n}(f());return(0,r.jsx)(t,{...n,style:i,className:(0,s.Z)(n.className,k,a.k.common.codeBlock)})}let B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return(0,r.jsx)(w,{as:"pre",tabIndex:0,className:(0,s.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,r.jsx)("code",{className:B.codeBlockLines,children:t})})}var Z=n("5346");let L={attributes:!0,characterData:!0,childList:!0,subtree:!0};var E=n("3229");let _={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:i,getLineProps:l,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let o=l({line:t,className:(0,s.Z)(n,i&&_.codeLine)}),c=t.map((e,t)=>(0,r.jsx)("span",{...a({token:e})},t));return(0,r.jsxs)("span",{...o,children:[i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:_.codeLineNumber}),(0,r.jsx)("span",{className:_.codeLineContent,children:c})]}):c,(0,r.jsx)("br",{})]})}var A=n("6025");function S(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function I(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){let{code:t,className:n}=e,[l,a]=(0,i.useState)(!1),o=(0,i.useRef)(void 0),c=(0,i.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let i=document.getSelection(),s=i.rangeCount>0&&i.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),s&&(i.removeAllRanges(),i.addRange(s)),r&&r.focus()}(t),a(!0),o.current=window.setTimeout(()=>{a(!1)},1e3)},[t]);return(0,i.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,r.jsx)("button",{type:"button","aria-label":l?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,M.copyButton,l&&M.copyButtonCopied),onClick:c,children:(0,r.jsxs)("span",{className:M.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(S,{className:M.copyButtonIcon}),(0,r.jsx)(I,{className:M.copyButtonSuccessIcon})]})})}function z(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function U(e){let{className:t,onClick:n,isEnabled:i}=e,l=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,i&&R.wordWrapButtonEnabled),"aria-label":l,title:l,children:(0,r.jsx)(z,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){var t,n,l;let{children:a,className:o="",metastring:c,title:d,showLineNumbers:u,language:m}=e,{prism:{defaultLanguage:p,magicComments:b}}=(0,h.L)();let v=(t=m??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(o)??p,t?.toLowerCase()),k=f(),C=function(){let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),s=(0,i.useRef)(null),l=(0,i.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),a=(0,i.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,t){let[n,r]=(0,i.useState)(),s=(0,i.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,i.useEffect)(()=>{s()},[s]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:L,r=(0,Z.zX)(t),s=(0,Z.Ql)(n);(0,i.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,a),(0,i.useEffect)(()=>{a()},[e,a]),(0,i.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:l}}();let _=(n=c,(n?.match(j)?.groups.title??"")||d),{lineClassNames:A,code:S}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:i,metastring:s}=t;if(s&&g.test(s)){let e=s.match(g).groups.range;if(0===i.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=i[0].className;return{lineClassNames:Object.fromEntries(x()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],t);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],t);case"html":return N(["js","jsBlock","html"],t);case"python":case"py":case"bash":return N(["bash"],t);case"markdown":case"md":return N(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return N(["tex"],t);case"lua":case"haskell":case"sql":return N(["lua"],t);case"wasm":return N(["wasm"],t);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],t);case"vbnet":return N(["vbnet","rem"],t);case"batch":return N(["rem"],t);case"basic":return N(["rem","f90"],t);case"fsharp":return N(["js","ml"],t);case"ocaml":case"sml":return N(["ml"],t);case"fortran":return N(["f90"],t);case"cobol":return N(["cobol"],t);default:return N(y,t)}}(r,i),a=n.split("\n"),o=Object.fromEntries(i.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(i.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(i.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(i.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(l);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?o[c[n]].range+=`${e},`:d[n]?o[d[n]].start=e:u[n]&&(o[u[n]].range+=`${o[u[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let m={};return Object.entries(o).forEach(e=>{let[t,{range:n}]=e;x()(n).forEach(e=>{m[e]??=[],m[e].push(t)})}),{lineClassNames:m,code:n}}(a,{metastring:c,language:v,magicComments:b});let I=u??(l=c,!!l?.includes("showLineNumbers"));return(0,r.jsxs)(w,{as:"div",className:(0,s.Z)(o,v&&!o.includes(`language-${v}`)&&`language-${v}`),children:[_&&(0,r.jsx)("div",{className:B.codeBlockTitle,children:_}),(0,r.jsxs)("div",{className:B.codeBlockContent,children:[(0,r.jsx)(E.y$,{theme:k,code:S,language:v??"text",children:e=>{let{className:t,style:n,tokens:i,getLineProps:l,getTokenProps:a}=e;return(0,r.jsx)("pre",{tabIndex:0,ref:C.codeBlockRef,className:(0,s.Z)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,r.jsx)("code",{className:(0,s.Z)(B.codeBlockLines,I&&B.codeBlockLinesWithNumbering),children:i.map((e,t)=>(0,r.jsx)(T,{line:e,getLineProps:l,getTokenProps:a,classNames:A[t],showLineNumbers:I},t))})})}}),(0,r.jsxs)("div",{className:B.buttonGroup,children:[(C.isEnabled||C.isCodeScrollable)&&(0,r.jsx)(U,{className:B.codeButton,onClick:()=>C.toggle(),isEnabled:C.isEnabled}),(0,r.jsx)(H,{className:B.codeButton,code:S})]})]})]})}function V(e){var t;let{children:n,...s}=e,l=(0,u.Z)();let a=(t=n,i.Children.toArray(t).some(e=>(0,i.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,r.jsx)("string"==typeof a?$:C,{...s,children:a},String(l))}function O(e){return(0,r.jsx)("code",{...e})}var D=n("3012"),q=n("1065"),F=n("7565"),W=n("2000");let P={display:"none",overflow:"hidden",height:"0px"},G={display:"block",overflow:"visible",height:"auto"};function J(e,t){let n=t?P:G;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function Y(e){let{as:t="div",collapsed:n,children:s,animation:l,onCollapseTransitionEnd:a,className:o,disableSSRStyle:c}=e,d=(0,i.useRef)(null);return!function(e){let{collapsibleRef:t,collapsed:n,animation:r}=e,s=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t.current;function i(){let t=function(){let t=e.scrollHeight,n=r?.duration??function(e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return 1;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t),i=r?.easing??"ease-in-out";return{transition:`height ${n}ms ${i}`,height:`${t}px`}}();e.style.transition=t.transition,e.style.height=t.height}if(!s.current){J(e,n),s.current=!0;return}return e.style.willChange="height",function(){let t=requestAnimationFrame(()=>{n?(i(),requestAnimationFrame(()=>{e.style.height=P.height,e.style.overflow=P.overflow})):(e.style.display="block",requestAnimationFrame(()=>{i()}))});return()=>cancelAnimationFrame(t)}()},[t,n,r])}({collapsibleRef:d,collapsed:n,animation:l}),(0,r.jsx)(t,{ref:d,style:c?void 0:function(e){if(!F.Z.canUseDOM)return e?P:G}(n),onTransitionEnd:e=>{if("height"===e.propertyName)J(d.current,n),a?.(n)},className:o,children:s})}function K(e){let{collapsed:t,...n}=e,[s,l]=(0,i.useState)(!t),[a,o]=(0,i.useState)(t);return(0,W.Z)(()=>{!t&&l(!0)},[t]),(0,W.Z)(()=>{s&&o(t)},[s,t]),s?(0,r.jsx)(Y,{...n,collapsed:a}):null}function Q(e){let{lazy:t,...n}=e;return(0,r.jsx)(t?K:Y,{...n})}let X={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ee(e){return!!e&&("SUMMARY"===e.tagName||ee(e.parentElement))}function et(e){let{summary:t,children:n,...l}=e;(0,q.Z)().collectAnchor(l.id);let a=(0,u.Z)(),o=(0,i.useRef)(null),{collapsed:c,setCollapsed:d}=function(e){let{initialState:t}=e,[n,r]=(0,i.useState)(t??!1),s=(0,i.useCallback)(()=>{r(e=>!e)},[]);return{collapsed:n,setCollapsed:r,toggleCollapsed:s}}({initialState:!l.open}),[m,h]=(0,i.useState)(l.open),f=i.isValidElement(t)?t:(0,r.jsx)("summary",{children:t??"Details"});return(0,r.jsxs)("details",{...l,ref:o,open:m,"data-collapsed":c,className:(0,s.Z)(X.details,a&&X.isBrowser,l.className),onMouseDown:e=>{ee(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;if(!!(ee(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,o.current)))e.preventDefault(),c?(d(!1),h(!0)):d(!0)},children:[f,(0,r.jsx)(Q,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),h(!e)},children:(0,r.jsx)("div",{className:X.collapsibleContent,children:n})})]})}let en="details_b_Ee";function er(e){let{...t}=e;return(0,r.jsx)(et,{...t,className:(0,s.Z)("alert alert--info",en,t.className)})}function ei(e){let t=i.Children.toArray(e.children),n=t.find(e=>i.isValidElement(e)&&"summary"===e.type),s=(0,r.jsx)(r.Fragment,{children:t.filter(e=>e!==n)});return(0,r.jsx)(er,{...e,summary:n,children:s})}var es=n("4403");function el(e){return(0,r.jsx)(es.Z,{...e})}let ea={containsTaskList:"containsTaskList_mC6p"},eo="img_ev3q",ec={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function ed(e){let{type:t,className:n,children:i}=e;return(0,r.jsx)("div",{className:(0,s.Z)(a.k.common.admonition,a.k.common.admonitionType(t),ec.admonition,n),children:i})}function eu(e){let{icon:t,title:n}=e;return(0,r.jsxs)("div",{className:ec.admonitionHeading,children:[(0,r.jsx)("span",{className:ec.admonitionIcon,children:t}),n]})}function em(e){let{children:t}=e;return t?(0,r.jsx)("div",{className:ec.admonitionContent,children:t}):null}function eh(e){let{type:t,icon:n,title:i,children:s,className:l}=e;return(0,r.jsxs)(ed,{type:t,className:l,children:[i||n?(0,r.jsx)(eu,{title:i,icon:n}):null,(0,r.jsx)(em,{children:s})]})}let ef={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,r.jsx)(A.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function ep(e){return(0,r.jsx)(eh,{...ef,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}let ex={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,r.jsx)(A.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function ej(e){return(0,r.jsx)(eh,{...ex,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}let eg={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,r.jsx)(A.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function eb(e){return(0,r.jsx)(eh,{...eg,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function ev(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let ey={icon:(0,r.jsx)(ev,{}),title:(0,r.jsx)(A.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},eN={icon:(0,r.jsx)(function(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,r.jsx)(A.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},ek={icon:(0,r.jsx)(ev,{}),title:(0,r.jsx)(A.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},ew={note:ep,tip:ej,info:eb,warning:function(e){return(0,r.jsx)(eh,{...ey,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(eh,{...eN,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,r.jsx)(ep,{title:"secondary",...e}),important:e=>(0,r.jsx)(eb,{title:"important",...e}),success:e=>(0,r.jsx)(ej,{title:"success",...e}),caution:function(e){return(0,r.jsx)(eh,{...ek,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}};function eB(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=i.Children.toArray(e),n=t.find(e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),s=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:s.length>0?(0,r.jsx)(r.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}(e),n=function(e){let t=ew[e];return t?t:(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),ew.info)}(t.type);return(0,r.jsx)(n,{...t})}let eC={Head:d.Z,details:ei,Details:ei,code:function(e){var t;return void 0!==(t=e).children&&i.Children.toArray(t.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,r.jsx)(O,{...e}):(0,r.jsx)(V,{...e})},a:function(e){return(0,r.jsx)(D.Z,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,s.Z)(e,e?.includes("contains-task-list")&&ea.containsTaskList)}(e.className)})},li:function(e){return(0,q.Z)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){var t;return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,s.Z)(t,eo))})},h1:e=>(0,r.jsx)(el,{as:"h1",...e}),h2:e=>(0,r.jsx)(el,{as:"h2",...e}),h3:e=>(0,r.jsx)(el,{as:"h3",...e}),h4:e=>(0,r.jsx)(el,{as:"h4",...e}),h5:e=>(0,r.jsx)(el,{as:"h5",...e}),h6:e=>(0,r.jsx)(el,{as:"h6",...e}),admonition:eB,mermaid:()=>null};function eZ(e){let{children:t}=e;return(0,r.jsx)(c.Z,{components:eC,children:t})}function eL(e){let t=e.getBoundingClientRect();return t.top===t.bottom?eL(e.parentNode):t}let eE=i.memo(function e(t){let{toc:n,className:i,linkClassName:s,isChild:l}=t;return n.length?(0,r.jsx)("ul",{className:l?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(D.Z,{to:`#${t.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:s})]},t.id))}):null});function e_(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:o,...c}=e,d=(0,h.L)(),u=a??d.tableOfContents.minHeadingLevel,m=o??d.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{var n;let s=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return(n=t).level>=r&&n.level<=i?[{...t,children:s}]:s})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,h.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function a(){var e;let a=(e=r,Array.from(document.getElementsByClassName(e))),o=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>eL(e).top>=n);if(r){var i;return(i=eL(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),{anchorTopOffset:n.current}),c=a.find(e=>{var t;return o&&o.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});a.forEach(e=>{var n;n=e,e===c?(t.current&&t.current!==n&&t.current.classList.remove(i),n.classList.add(i),t.current=n):n.classList.remove(i)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,i.useMemo)(()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:u,maxHeadingLevel:m}},[s,l,u,m])),(0,r.jsx)(eE,{toc:f,className:n,linkClassName:s,...c})}let eT="tableOfContents_bqdL";function eA(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.Z)(eT,"thin-scrollbar",t),children:(0,r.jsx)(e_,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function eS(){return(0,r.jsx)(A.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function eI(){return(0,r.jsx)(A.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function eM(){return(0,r.jsx)(d.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function eH(){return(0,r.jsx)(A.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function ez(){return(0,r.jsx)(A.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function eR(e){let{className:t}=e;return(0,r.jsx)(eB,{type:"caution",title:(0,r.jsx)(eH,{}),className:(0,s.Z)(t,a.k.common.draftBanner),children:(0,r.jsx)(ez,{})})}function eU(e){let{className:t}=e;return(0,r.jsx)(eB,{type:"caution",title:(0,r.jsx)(eS,{}),className:(0,s.Z)(t,a.k.common.unlistedBanner),children:(0,r.jsx)(eI,{})})}function e$(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eM,{}),(0,r.jsx)(eU,{...e})]})}function eV(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(e$,{}),i.draft&&(0,r.jsx)(eR,{})]})}let eO="iconEdit_Z9Sw";function eD(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(eO,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function eq(e){let{editUrl:t}=e;return(0,r.jsxs)(D.Z,{to:t,className:a.k.common.editThisPage,children:[(0,r.jsx)(eD,{}),(0,r.jsx)(A.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var eF=n("2933");function eW(e){let{lastUpdatedAt:t}=e,n=new Date(t),i=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,eF.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,eF.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(A.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:i})})},children:" on {date}"})}function eP(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(A.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function eG(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:a.k.common.lastUpdated,children:[(0,r.jsx)(A.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(eW,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(eP,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let eJ="lastUpdated_JAkA";function eY(e){let{className:t,editUrl:n,lastUpdatedAt:i,lastUpdatedBy:l}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(eq,{editUrl:n})}),(0,r.jsx)("div",{className:(0,s.Z)("col",eJ),children:(i||l)&&(0,r.jsx)(eG,{lastUpdatedAt:i,lastUpdatedBy:l})})]})}let eK="mdxPageWrapper_j9I6";function eQ(e){let{content:t}=e,{metadata:n,assets:i}=t,{title:c,editUrl:d,description:u,frontMatter:m,lastUpdatedBy:h,lastUpdatedAt:f}=n,{keywords:p,wrapperClassName:x,hide_table_of_contents:j}=m,g=i.image??m.image,b=!!(d||f||h);return(0,r.jsx)(l.FG,{className:(0,s.Z)(x??a.k.wrapper.mdxPages,a.k.page.mdxPage),children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.d,{title:c,description:u,keywords:p,image:g}),(0,r.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,r.jsxs)("div",{className:(0,s.Z)("row",eK),children:[(0,r.jsxs)("div",{className:(0,s.Z)("col",!j&&"col--8"),children:[(0,r.jsx)(eV,{metadata:n}),(0,r.jsx)("article",{children:(0,r.jsx)(eZ,{children:(0,r.jsx)(t,{})})}),b&&(0,r.jsx)(eY,{className:(0,s.Z)("margin-top--sm",a.k.pages.pageFooterEditMetaRow),editUrl:d,lastUpdatedAt:f,lastUpdatedBy:h})]}),!j&&t.toc.length>0&&(0,r.jsx)("div",{className:"col col--2",children:(0,r.jsx)(eA,{toc:t.toc,minHeadingLevel:m.toc_min_heading_level,maxHeadingLevel:m.toc_max_heading_level})})]})})]})})}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(7294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);