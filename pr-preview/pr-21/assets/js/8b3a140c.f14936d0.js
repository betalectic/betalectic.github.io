"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[101],{882:(e,t,a)=>{a.d(t,{V:()=>s});var r=a(4164),l=a(4848);function s(e){let{as:t,className:a,position:s="top",invert:n=!1,...i}=e,d=t??"div";return(0,l.jsx)(d,{className:(0,r.A)(a,"relative before:absolute after:absolute",n?"before:bg-white after:bg-white/10":"before:bg-neutral-950 dark:before:bg-neutral-50 after:bg-neutral-950/10 dark:after:bg-neutral-400","top"===s&&"before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px","left"===s&&"before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"),...i})}},4768:(e,t,a)=>{a.d(t,{$:()=>n});var r=a(8774),l=a(4164),s=a(4848);function n(e){let{className:t="",children:a,invert:n,...i}=e;t=(0,l.A)(t,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold  transition");let d=(0,s.jsx)("span",{className:(n?"":"text-black")+" relative top-px",children:a});return void 0===i.href?(0,s.jsx)("button",{className:`${n?" bg-black text-white dark:bg-white dark:text-black":""} ${t}`,...i,children:d}):(0,s.jsx)(r.A,{className:t,...i,children:d})}},8948:(e,t,a)=>{a.d(t,{b:()=>i});var r=a(6540),l=a(7221),s=a(4848);function n(e){let{x:t,y:a,...r}=e;return(0,s.jsx)(l.P.path,{transform:`translate(${-32*a+96*t} ${160*a})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...r})}function i(e){let{yOffset:t=0,interactive:a=!1,...l}=e,i=(0,r.useId)(),d=(0,r.useRef)(null),c=(0,r.useRef)(),o=(0,r.useRef)(0),[x,u]=(0,r.useState)([]);return(0,r.useEffect)((()=>{if(a)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!d.current)return;let a=d.current.getBoundingClientRect(),r=e.clientX-a.left,l=e.clientY-a.top;r<0||l<0||r>a.width||l>a.height||(r=r-a.width/2-32,l-=t,r+=Math.tan(.2)*l,r=Math.floor(r/96),l=Math.floor(l/160),c.current?.[0]===r&&c.current?.[1]===l||(c.current=[r,l],u((e=>{let t=o.current++;return[...e,[r,l,t]].filter((e=>!(e[0]===r&&e[1]===l&&e[2]!==t)))}))))}}),[t,a]),(0,s.jsxs)("svg",{ref:d,"aria-hidden":"true",...l,children:[(0,s.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${i})`,strokeWidth:"0"}),(0,s.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map((e=>(0,s.jsx)(n,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`))),x.map((e=>(0,s.jsx)(n,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{u((t=>t.filter((t=>t[2]!==e[2]))))}},e[2])))]}),(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:i,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,s.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},5797:(e,t,a)=>{a.d(t,{W:()=>n});var r=a(4164),l=a(4848);function s(e){let{name:t,children:a,invert:s=!1}=e;return(0,l.jsxs)("address",{className:(0,r.A)("text-sm not-italic",s?"text-neutral-300 dark:text-neutral-300":"text-neutral-600 dark:text-neutral-300"),children:[(0,l.jsx)("strong",{className:s?"text-white dark:text-neutral-50":"text-neutral-950 dark:text-neutral-50",children:t}),(0,l.jsx)("br",{}),a]})}function n(e){let{invert:t=!1,...a}=e;return(0,l.jsxs)("ul",{role:"list",...a,children:[(0,l.jsx)("li",{className:"list-none",children:(0,l.jsxs)(s,{name:"Hyderabad",invert:t,children:["3rd Floor, Mitti\u2019s Building, Near Divyashree Lanco Hills, Chaitanya Enclave",(0,l.jsx)("br",{}),"Manikonda, Hyderabad, Telangana - 500089"]})}),(0,l.jsx)("li",{className:"list-none",children:(0,l.jsxs)(s,{name:"Delaware",invert:t,children:["3rd Floor, Mitti\u2019s Building, Near Divyashree Lanco Hills, Chaitanya Enclave",(0,l.jsx)("br",{}),"Manikonda, Delaware, US - 500089"]})})]})}},1579:(e,t,a)=>{a.d(t,{Y:()=>i});var r=a(4164),l=a(819),s=a(7851),n=a(4848);function i(e){let{eyebrow:t,title:a,children:i,centered:d=!1}=e;return(0,n.jsx)(l.m,{className:(0,r.A)("mt-24 sm:mt-32 lg:mt-40",d&&"text-center"),children:(0,n.jsxs)(s._,{children:[(0,n.jsxs)("h1",{children:[(0,n.jsx)("span",{className:"block font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,n.jsx)("span",{className:"sr-only",children:" - "}),(0,n.jsx)("span",{className:(0,r.A)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl",d&&"mx-auto"),children:a})]}),(0,n.jsx)("div",{className:(0,r.A)("mt-6 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300",d&&"mx-auto"),children:i})]})})}},7346:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(8774),l=a(2972),s=(a(6540),a(1579)),n=a(819),i=a(7851),d=(a(4768),a(882)),c=a(5797),o=a(7369),x=a(8638),u=a(4485),h=a(7221),f=a(8948),m=a(4848);function b(){let e=(0,x.I)();function t(){return(0,m.jsxs)(i._,{children:[(0,m.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Our offices"}),(0,m.jsx)("p",{className:"mt-6 text-base text-neutral-600 dark:text-neutral-400",children:"Prefer doing things in person? We don\u2019t but we have to list our addresses here for legal reasons."}),(0,m.jsx)(c.W,{className:"mt-10 grid grid-cols-1 p-0 gap-8 sm:grid-cols-2"}),(0,m.jsxs)(d.V,{className:"mt-16 pt-16",children:[(0,m.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Email us"}),(0,m.jsx)("dl",{className:"mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2",children:[["Contact","contact@betalectic.com"]].map((e=>{let[t,a]=e;return(0,m.jsxs)("div",{children:[(0,m.jsx)("dt",{className:"font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,m.jsx)("dd",{children:(0,m.jsx)(r.A,{href:`mailto:${a}`,className:"text-neutral-600 dark:text-neutral-400 hover:text-neutral-950",children:a})})]},a)}))})]}),(0,m.jsxs)(d.V,{className:"mt-16 pt-16",children:[(0,m.jsx)("h2",{className:"font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:"Follow us"}),(0,m.jsx)(o.q,{className:"mt-6"})]})]})}return(0,m.jsx)(l.A,{title:"Contact",description:"Contact Betalectic",children:(0,m.jsx)(u.x,{transition:e?{duration:0}:void 0,children:(0,m.jsx)(h.P.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:(0,m.jsxs)(h.P.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:[(0,m.jsx)(f.b,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,m.jsxs)("div",{className:"w-full mx-auto",children:[(0,m.jsx)(s.Y,{eyebrow:"Contact us",title:"Let\u2019s work together",children:(0,m.jsx)("p",{children:"We can\u2019t wait to hear from you."})}),(0,m.jsx)(n.m,{className:"mt-24 sm:mt-32 lg:mt-40",children:(0,m.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2",children:[(0,m.jsx)(t,{}),(0,m.jsx)("div",{className:"lg:ml-auto flex justify-center lg:justify-start",children:(0,m.jsx)("iframe",{src:"https://tally.so/embed/nPB6RB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",className:" dark:filter dark:invert dark:brightness-90",width:"500",height:"818",children:"Loading.."})})]})})]})]})})})})}},4485:(e,t,a)=>{a.d(t,{x:()=>d});var r=a(4848),l=a(6540),s=a(5446),n=a(6442),i=a(8601);function d({children:e,isValidProp:t,...a}){t&&(0,n.D)(t),(a={...(0,l.useContext)(s.Q),...a}).isStatic=(0,i.M)((()=>a.isStatic));const d=(0,l.useMemo)((()=>a),[JSON.stringify(a.transition),a.transformPagePoint,a.reducedMotion]);return(0,r.jsx)(s.Q.Provider,{value:d,children:e})}}}]);