"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["565"],{3867:function(e,t,a){a.r(t),a.d(t,{default:()=>f});var l=a("5893");a("7294");var n=a("7026"),s=a("6025");let r=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a("2743"),c=a("4681"),o=a("759"),d=a("8627"),m=a("4403");let h="tag_Nnez";function u(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,l.jsx)("li",{className:h,children:(0,l.jsx)(d.Z,{...e})},e.permalink))}),(0,l.jsx)("hr",{})]})}function g(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,l.jsx)(u,{letterEntry:e},e.letter))})}var x=a("4315");function f(e){let{tags:t,sidebar:a}=e,s=r();return(0,l.jsxs)(i.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage),children:[(0,l.jsx)(i.d,{title:s}),(0,l.jsx)(x.Z,{tag:"blog_tags_list"}),(0,l.jsxs)(o.Z,{sidebar:a,children:[(0,l.jsx)(m.Z,{as:"h1",children:s}),(0,l.jsx)(g,{tags:t})]})]})}},8627:function(e,t,a){a.d(t,{Z:()=>i});var l=a("5893");a("7294");var n=a("7026"),s=a("3012");let r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i,description:c}=e;return(0,l.jsxs)(s.Z,{href:t,title:c,className:(0,n.Z)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},9965:function(e,t,a){a.d(t,{cn:function(){return s}});var l=a(7026),n=a(19);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,l.W)(t))}},759:function(e,t,a){a.d(t,{Z:()=>x});var l=a("5893"),n=a("7294"),s=a("7026"),r=a("3379"),i=a("3012"),c=a("1437"),o=a("9965"),d=a("1895");let m=e=>{let t,a,s,r,i,c,m,{children:h,className:u,containerClassName:g,colors:x,waveWidth:f,backgroundFill:j,blur:p=7,speed:v="slow",waveOpacity:b=.5,...w}=e,N=(0,d.zz)(),F=(0,n.useRef)(null),k=()=>{switch(v){case"slow":default:return .001;case"fast":return .002}},Z=()=>{t=(c=F.current.getContext("2d")).canvas.width=1e3,a=c.canvas.height=250,c.filter=`blur(${p}px)`,s=0,window.onresize=function(){t=c.canvas.width=window.innerWidth,a=c.canvas.height=window.innerHeight,c.filter=`blur(${p}px)`},T()},C=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),y=x??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],P=e=>{for(s+=k(),r=0;r<e;r++){for(c.beginPath(),c.lineWidth=f||20,c.strokeStyle=y[r%y.length],i=0;i<t;i+=5){var l=100*N(i/800,.3*r,s);c.lineTo(i,l+.5*a)}c.stroke(),c.closePath()}},T=()=>{c.fillStyle=C(),c.globalAlpha=b||.5,c.fillRect(0,0,t,a),P(6),m=requestAnimationFrame(T)};return(0,n.useEffect)(()=>(Z(),()=>{cancelAnimationFrame(m)}),[]),(0,l.jsxs)("div",{className:(0,o.cn)("flex flex-col items-center justify-center",g),children:[(0,l.jsx)("canvas",{className:"absolute top-42 z-0 w-full",ref:F,id:"canvas"}),(0,l.jsx)("div",{className:(0,o.cn)("relative z-10",u),...w,children:h})]})};var h=a("6550"),u=a("1389");function g(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,children:a})}function x(e){let{sidebar:t,toc:a,children:n,...o}=e,d=(0,h.TH)(),x=d.pathname.endsWith("/blog")||d.pathname.endsWith("/blog/");console.log("isBlogPage",x);let f=n[0].props?.items?.[0],j=(0,c.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsx)(r.Z,{...o,children:(0,l.jsx)("div",{className:"container margin-vert--lg",children:(0,l.jsxs)("div",{className:"row mt-10",children:[(0,l.jsx)("main",{className:(0,s.Z)(`col mx-auto ${x?"col--11":"col--9"}`),children:(0,l.jsxs)("div",{className:"w-full",children:[f&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,l.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("img",{className:"object-cover h-full rounded-l-lg",src:f?.content.frontMatter.image,alt:"Featured post image"})}),(0,l.jsxs)("div",{className:"p-2",children:[(0,l.jsx)("h2",{className:"text-3xl font-bold",children:f?.content.metadata.title}),(0,l.jsx)(g,{date:f?.content.metadata.date,formattedDate:j.format(new Date(f?.content.metadata.date))}),f?.content.metadata.authors.length>0&&(0,l.jsx)("div",{className:"mt-4",children:f?.content.metadata.authors.map((e,t)=>l.jsx(u.Z,{author:e},t))}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(f.content,{})}),(0,l.jsx)(i.Z,{href:f?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),n]})}),(0,l.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);