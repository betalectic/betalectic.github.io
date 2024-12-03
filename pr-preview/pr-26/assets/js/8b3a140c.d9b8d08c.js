"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["51"],{4446:function(e,t,a){a.d(t,{a:function(){return l}});var r=a(5893),s=a(7294),n=a(9965);let l=s.forwardRef((e,t)=>{let{shimmerColor:a="#ffffff",shimmerSize:s="0.05em",shimmerDuration:l="3s",borderRadius:i="10px",background:o="rgba(0, 0, 0, 1)",darkBackground:c="rgba(255, 255, 255, 0.1)",className:d,children:u,...f}=e;return(0,r.jsxs)("button",{style:{"--spread":"90deg","--shimmer-color":a,"--radius":i,"--speed":l,"--cut":s,"--bg":o,"--dark-bg":c},className:(0,n.cn)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] dark:[background:var(--dark-bg)] [border-radius:var(--radius)] dark:text-black","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",d),ref:t,...f,children:[(0,r.jsx)("div",{className:(0,n.cn)("-z-30 blur-[2px]","absolute inset-0 overflow-visible [container-type:size]"),children:(0,r.jsx)("div",{className:"absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]",children:(0,r.jsx)("div",{className:"animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"})})}),u,(0,r.jsx)("div",{className:(0,n.cn)("insert-0 absolute size-full","rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]","transform-gpu transition-all duration-300 ease-in-out","group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]","group-active:shadow-[inset_0_-10px_10px_#ffffff3f]")}),(0,r.jsx)("div",{className:(0,n.cn)("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")})]})});l.displayName="ShimmerButton"},370:function(e,t,a){a.d(t,{O:function(){return n}});var r=a(5893),s=a(7026);function n(e){let{as:t,className:a,position:n="top",invert:l=!1,...i}=e;return(0,r.jsx)(t??"div",{className:(0,s.Z)(a,"relative before:absolute after:absolute",l?"before:bg-white after:bg-white/10":"before:bg-neutral-950 dark:before:bg-neutral-50 after:bg-neutral-950/10 dark:after:bg-neutral-400","top"===n&&"before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px","left"===n&&"before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"),...i})}},7147:function(e,t,a){a.d(t,{K:function(){return i}});var r=a(5893),s=a(7294),n=a(3717);function l(e){let{x:t,y:a,...s}=e;return(0,r.jsx)(n.E.path,{transform:`translate(${-32*a+96*t} ${160*a})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...s})}function i(e){let{yOffset:t=0,interactive:a=!1,...n}=e,i=(0,s.useId)(),o=(0,s.useRef)(null),c=(0,s.useRef)(),d=(0,s.useRef)(0),[u,f]=(0,s.useState)([]);return(0,s.useEffect)(()=>{if(!!a)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let a=o.current.getBoundingClientRect(),r=e.clientX-a.left,s=e.clientY-a.top;if(r<0||s<0||r>a.width||s>a.height)return;if(r=r-a.width/2-32,s-=t,r+=Math.tan(.2)*s,r=Math.floor(r/96),s=Math.floor(s/160),c.current?.[0]!==r||c.current?.[1]!==s)c.current=[r,s],f(e=>{let t=d.current++;return[...e,[r,s,t]].filter(e=>!(e[0]===r&&e[1]===s&&e[2]!==t))})}},[t,a]),(0,r.jsxs)("svg",{ref:o,"aria-hidden":"true",...n,children:[(0,r.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${i})`,strokeWidth:"0"}),(0,r.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(e=>(0,r.jsx)(l,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`)),u.map(e=>(0,r.jsx)(l,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{f(t=>t.filter(t=>t[2]!==e[2]))}},e[2]))]}),(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:i,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,r.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},8524:function(e,t,a){a.d(t,{O:function(){return i}});var r=a(5893),s=a(7026),n=a(5982),l=a(1450);function i(e){let{eyebrow:t,title:a,children:i,centered:o=!1}=e;return(0,r.jsx)(n.W,{className:(0,s.Z)("mt-24 sm:mt-32 w-full lg:mt-40",o&&"text-center"),children:(0,r.jsxs)(l.U,{children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)("span",{className:"block font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,r.jsx)("span",{className:"sr-only",children:" - "}),(0,r.jsx)("span",{className:(0,s.Z)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl",o&&"mx-auto"),children:a})]}),(0,r.jsx)("div",{className:(0,s.Z)("mt-6 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300",o&&"mx-auto"),children:i})]})})}},9965:function(e,t,a){a.d(t,{cn:function(){return n}});var r=a(7026),s=a(19);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}},3646:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(5893),s=a(3012),n=a(748);a(7294);var l=a(8524),i=a(5982),o=a(1450);a(8689);var c=a(370),d=a(9913),u=a(4158),f=a(368),x=a(4546),m=a(3717),h=a(4446),p=a(7147);function g(){let e=(0,f.J)();return(0,r.jsx)(n.Z,{title:"Contact Betalectic for Your Technology Needs",description:"Connect with Betalectic for all your technology needs and digital transformation goals. We specialise in helping startups and businesses build Minimum Viable Products (MVPs) quickly and effectively, enabling faster market entry and growth. Reach out to learn how we can support your journey.",children:(0,r.jsx)(x.A,{transition:e?{duration:0}:void 0,children:(0,r.jsx)(m.E.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:(0,r.jsxs)(m.E.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:[(0,r.jsx)(p.K,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,r.jsxs)("div",{className:"w-full mx-auto",children:[(0,r.jsxs)(l.O,{eyebrow:"Contact us",title:"Let\u2019s work together",children:[(0,r.jsx)("p",{children:"We can\u2019t wait to hear from you."}),(0,r.jsx)(s.Z,{to:"https://cal.com/manasa-madapu",children:(0,r.jsx)(h.a,{className:"shadow-2xl",children:(0,r.jsx)("span",{className:"whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl",children:"Setup a 30 min free call"})})})]}),(0,r.jsx)(i.W,{className:"mt-24 sm:mt-32",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2",children:[(0,r.jsx)(function(){return(0,r.jsxs)(o.U,{children:[(0,r.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Our offices"}),(0,r.jsx)("p",{className:"mt-6 text-base text-neutral-600 dark:text-neutral-400",children:"Prefer doing things in person? We'd love to meet you."}),(0,r.jsx)(d.T,{className:"mt-10 grid grid-cols-1 p-0 gap-8 sm:grid-cols-2"}),(0,r.jsxs)(c.O,{className:"mt-16 pt-16",children:[(0,r.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Email us"}),(0,r.jsx)("dl",{className:"mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2",children:[["Contact","contact@betalectic.com"]].map(e=>{let[t,a]=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("dt",{className:"font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,r.jsx)("dd",{children:(0,r.jsx)(s.Z,{href:`mailto:${a}`,className:"text-neutral-600 dark:text-neutral-400 hover:text-neutral-950",children:a})})]},a)})})]}),(0,r.jsxs)(c.O,{className:"mt-16 pt-16",children:[(0,r.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Follow us"}),(0,r.jsx)(u.u,{className:"mt-6"})]})]})},{}),(0,r.jsx)("div",{className:"lg:ml-auto flex lg:justify-start",children:(0,r.jsx)("iframe",{src:"https://tally.so/embed/nGoKbO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",className:" dark:filter dark:invert dark:brightness-90",width:"500",height:"600",children:"Loading.."})})]})})]})]})})})})}},4546:function(e,t,a){a.d(t,{A:function(){return o}});var r=a(5893),s=a(7294),n=a(1353),l=a(352),i=a(8217);function o({children:e,isValidProp:t,...a}){t&&(0,l.K)(t),(a={...(0,s.useContext)(n._),...a}).isStatic=(0,i.h)(()=>a.isStatic);let o=(0,s.useMemo)(()=>a,[JSON.stringify(a.transition),a.transformPagePoint,a.reducedMotion]);return(0,r.jsx)(n._.Provider,{value:o,children:e})}}}]);