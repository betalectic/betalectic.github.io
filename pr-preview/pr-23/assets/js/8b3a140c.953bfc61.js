"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[101],{9356:(e,t,a)=>{a.d(t,{e:()=>n});var r=a(6540),s=a(2552),l=a(4848);const n=r.forwardRef(((e,t)=>{let{shimmerColor:a="#ffffff",shimmerSize:r="0.05em",shimmerDuration:n="3s",borderRadius:i="10px",background:o="rgba(0, 0, 0, 1)",darkBackground:d="rgba(255, 255, 255, 0.1)",className:c,children:u,...f}=e;return(0,l.jsxs)("button",{style:{"--spread":"90deg","--shimmer-color":a,"--radius":i,"--speed":n,"--cut":r,"--bg":o,"--dark-bg":d},className:(0,s.cn)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] dark:[background:var(--dark-bg)] [border-radius:var(--radius)] dark:text-black","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",c),ref:t,...f,children:[(0,l.jsx)("div",{className:(0,s.cn)("-z-30 blur-[2px]","absolute inset-0 overflow-visible [container-type:size]"),children:(0,l.jsx)("div",{className:"absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]",children:(0,l.jsx)("div",{className:"animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"})})}),u,(0,l.jsx)("div",{className:(0,s.cn)("insert-0 absolute size-full","rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]","transform-gpu transition-all duration-300 ease-in-out","group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]","group-active:shadow-[inset_0_-10px_10px_#ffffff3f]")}),(0,l.jsx)("div",{className:(0,s.cn)("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")})]})}));n.displayName="ShimmerButton"},882:(e,t,a)=>{a.d(t,{V:()=>l});var r=a(4164),s=a(4848);function l(e){let{as:t,className:a,position:l="top",invert:n=!1,...i}=e,o=t??"div";return(0,s.jsx)(o,{className:(0,r.A)(a,"relative before:absolute after:absolute",n?"before:bg-white after:bg-white/10":"before:bg-neutral-950 dark:before:bg-neutral-50 after:bg-neutral-950/10 dark:after:bg-neutral-400","top"===l&&"before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px","left"===l&&"before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"),...i})}},8948:(e,t,a)=>{a.d(t,{b:()=>i});var r=a(6540),s=a(7221),l=a(4848);function n(e){let{x:t,y:a,...r}=e;return(0,l.jsx)(s.P.path,{transform:`translate(${-32*a+96*t} ${160*a})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...r})}function i(e){let{yOffset:t=0,interactive:a=!1,...s}=e,i=(0,r.useId)(),o=(0,r.useRef)(null),d=(0,r.useRef)(),c=(0,r.useRef)(0),[u,f]=(0,r.useState)([]);return(0,r.useEffect)((()=>{if(a)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let a=o.current.getBoundingClientRect(),r=e.clientX-a.left,s=e.clientY-a.top;r<0||s<0||r>a.width||s>a.height||(r=r-a.width/2-32,s-=t,r+=Math.tan(.2)*s,r=Math.floor(r/96),s=Math.floor(s/160),d.current?.[0]===r&&d.current?.[1]===s||(d.current=[r,s],f((e=>{let t=c.current++;return[...e,[r,s,t]].filter((e=>!(e[0]===r&&e[1]===s&&e[2]!==t)))}))))}}),[t,a]),(0,l.jsxs)("svg",{ref:o,"aria-hidden":"true",...s,children:[(0,l.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${i})`,strokeWidth:"0"}),(0,l.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map((e=>(0,l.jsx)(n,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`))),u.map((e=>(0,l.jsx)(n,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{f((t=>t.filter((t=>t[2]!==e[2]))))}},e[2])))]}),(0,l.jsx)("defs",{children:(0,l.jsx)("pattern",{id:i,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,l.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},1579:(e,t,a)=>{a.d(t,{Y:()=>i});var r=a(4164),s=a(819),l=a(7851),n=a(4848);function i(e){let{eyebrow:t,title:a,children:i,centered:o=!1}=e;return(0,n.jsx)(s.m,{className:(0,r.A)("mt-24 sm:mt-32 w-full lg:mt-40",o&&"text-center"),children:(0,n.jsxs)(l._,{children:[(0,n.jsxs)("h1",{children:[(0,n.jsx)("span",{className:"block font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,n.jsx)("span",{className:"sr-only",children:" - "}),(0,n.jsx)("span",{className:(0,r.A)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl",o&&"mx-auto"),children:a})]}),(0,n.jsx)("div",{className:(0,r.A)("mt-6 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300",o&&"mx-auto"),children:i})]})})}},2552:(e,t,a)=>{a.d(t,{cn:()=>l});var r=a(4164),s=a(856);function l(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},7346:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(8774),s=a(5408),l=(a(6540),a(1579)),n=a(819),i=a(7851),o=(a(4768),a(882)),d=a(5797),c=a(7369),u=a(8638),f=a(4485),m=a(7221),x=a(9356),h=a(8948),p=a(4848);function b(){let e=(0,u.I)();function t(){return(0,p.jsxs)(i._,{children:[(0,p.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Our offices"}),(0,p.jsx)("p",{className:"mt-6 text-base text-neutral-600 dark:text-neutral-400",children:"Prefer doing things in person? We'd love to meet you."}),(0,p.jsx)(d.W,{className:"mt-10 grid grid-cols-1 p-0 gap-8 sm:grid-cols-2"}),(0,p.jsxs)(o.V,{className:"mt-16 pt-16",children:[(0,p.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Email us"}),(0,p.jsx)("dl",{className:"mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2",children:[["Contact","contact@betalectic.com"]].map((e=>{let[t,a]=e;return(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,p.jsx)("dd",{children:(0,p.jsx)(r.A,{href:`mailto:${a}`,className:"text-neutral-600 dark:text-neutral-400 hover:text-neutral-950",children:a})})]},a)}))})]}),(0,p.jsxs)(o.V,{className:"mt-16 pt-16",children:[(0,p.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Follow us"}),(0,p.jsx)(c.q,{className:"mt-6"})]})]})}return(0,p.jsx)(s.A,{title:"Contact Betalectic for Your Technology Needs",description:"Connect with Betalectic for all your technology needs and digital transformation goals. We specialise in helping startups and businesses build Minimum Viable Products (MVPs) quickly and effectively, enabling faster market entry and growth. Reach out to learn how we can support your journey.",children:(0,p.jsx)(f.x,{transition:e?{duration:0}:void 0,children:(0,p.jsx)(m.P.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:(0,p.jsxs)(m.P.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:[(0,p.jsx)(h.b,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,p.jsxs)("div",{className:"w-full mx-auto",children:[(0,p.jsxs)(l.Y,{eyebrow:"Contact us",title:"Let\u2019s work together",children:[(0,p.jsx)("p",{children:"We can\u2019t wait to hear from you."}),(0,p.jsx)(r.A,{to:"https://cal.com/manasa-madapu",children:(0,p.jsx)(x.e,{className:"shadow-2xl",children:(0,p.jsx)("span",{className:"whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl",children:"Setup a 30 min free call"})})})]}),(0,p.jsx)(n.m,{className:"mt-24 sm:mt-32",children:(0,p.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2",children:[(0,p.jsx)(t,{}),(0,p.jsx)("div",{className:"lg:ml-auto flex lg:justify-start",children:(0,p.jsx)("iframe",{src:"https://tally.so/embed/nGoKbO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",className:" dark:filter dark:invert dark:brightness-90",width:"500",height:"600",children:"Loading.."})})]})})]})]})})})})}}}]);