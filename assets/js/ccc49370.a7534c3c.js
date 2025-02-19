"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["2998"],{9965:function(e,t,a){a.d(t,{cn:function(){return r}});var n=a(7026),l=a(19);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m6)((0,n.W)(t))}},759:function(e,t,a){a.d(t,{Z:()=>g});var n=a("5893"),l=a("7294"),r=a("7026"),s=a("3379"),i=a("3012"),o=a("1437"),c=a("9965"),d=a("1895");let m=e=>{let t,a,r,s,i,o,m,{children:h,className:u,containerClassName:x,colors:g,waveWidth:j,backgroundFill:f,blur:p=7,speed:v="slow",waveOpacity:b=.5,...w}=e,N=(0,d.zz)(),Z=(0,l.useRef)(null),y=()=>{switch(v){case"slow":default:return .001;case"fast":return .002}},k=()=>{t=(o=Z.current.getContext("2d")).canvas.width=1e3,a=o.canvas.height=250,o.filter=`blur(${p}px)`,r=0,window.onresize=function(){t=o.canvas.width=window.innerWidth,a=o.canvas.height=window.innerHeight,o.filter=`blur(${p}px)`},O()},F=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),_=g??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],A=e=>{for(r+=y(),s=0;s<e;s++){for(o.beginPath(),o.lineWidth=j||20,o.strokeStyle=_[s%_.length],i=0;i<t;i+=5){var n=100*N(i/800,.3*s,r);o.lineTo(i,n+.5*a)}o.stroke(),o.closePath()}},O=()=>{o.fillStyle=F(),o.globalAlpha=b||.5,o.fillRect(0,0,t,a),A(6),m=requestAnimationFrame(O)};return(0,l.useEffect)(()=>(k(),()=>{cancelAnimationFrame(m)}),[]),(0,n.jsxs)("div",{className:(0,c.cn)("flex flex-col items-center justify-center",x),children:[(0,n.jsx)("canvas",{className:"absolute top-42 z-0 w-full",ref:Z,id:"canvas"}),(0,n.jsx)("div",{className:(0,c.cn)("relative z-10",u),...w,children:h})]})};var h=a("6550"),u=a("1389");function x(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function g(e){let{sidebar:t,toc:a,children:l,...c}=e,d=(0,h.TH)(),g=d.pathname.endsWith("/blog")||d.pathname.endsWith("/blog/");console.log("isBlogPage",g);let j=l[0].props?.items?.[0],f=(0,o.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsx)(s.Z,{...c,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row mt-10",children:[(0,n.jsx)("main",{className:(0,r.Z)(`col mx-auto ${g?"col--11":"col--9"}`),children:(0,n.jsxs)("div",{className:"w-full",children:[j&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,n.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)("img",{className:"object-cover h-full rounded-l-lg",src:j?.content.frontMatter.image,alt:"Featured post image"})}),(0,n.jsxs)("div",{className:"p-2",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold",children:j?.content.metadata.title}),(0,n.jsx)(x,{date:j?.content.metadata.date,formattedDate:f.format(new Date(j?.content.metadata.date))}),j?.content.metadata.authors.length>0&&(0,n.jsx)("div",{className:"mt-4",children:j?.content.metadata.authors.map((e,t)=>n.jsx(u.Z,{author:e},t))}),(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)(j.content,{})}),(0,n.jsx)(i.Z,{href:j?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),l]})}),(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},6197:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(5893);a(7294);var l=a(6025),r=a(3012);function s(){return(0,n.jsx)("b",{className:"text-white dark:text-black text-sm font-semibold",children:(0,n.jsx)(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function i(e){let{blogPostTitle:t,...a}=e;return(0,n.jsx)(r.Z,{className:"bg-neutral-950 dark:bg-neutral-50 m-3 hover:bg-neutral-600 dark:hover:bg-neutral-400 py-2 px-4 rounded-3xl","aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(s,{})})}},121:function(e,t,a){a.d(t,{Z:()=>v});var n=a("5893");a("7294");var l=a("7026"),r=a("4183"),s=a("1793"),i=a("3012");function o(e){let{className:t}=e,{metadata:a,isBlogPostPage:s}=(0,r.nO)(),{permalink:o,title:c}=a;return(0,n.jsx)(s?"h1":"h2",{className:(0,l.Z)(t),children:s?c:(0,n.jsx)(i.Z,{className:"text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400",to:o,children:c})})}var c=a("8791"),d=a("1389");let m={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function h(e){let{className:t}=e,{metadata:{authors:a},assets:s}=(0,r.nO)();if(0===a.length)return null;let i=a.every(e=>{let{name:t}=e;return!t}),o=1===a.length;return(0,n.jsx)("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?m.imageOnlyAuthorRow:"row",t),children:a.map((e,t)=>(0,n.jsx)("div",{className:(0,l.Z)(!i&&(o?"col col--12":"col col--6"),i?m.imageOnlyAuthorCol:m.authorCol),children:(0,n.jsx)(d.Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function u(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(o,{}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(h,{})]})}var x=a("8365"),g=a("5504");function j(e){let{children:t,className:a}=e,{isBlogPostPage:s}=(0,r.nO)();return(0,n.jsx)("div",{id:s?x.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),children:(0,n.jsx)("div",{className:"flex gap-4",children:(0,n.jsx)("div",{className:"blog-content-wrapper",children:(0,n.jsx)(g.Z,{children:t})})})})}var f=a("7473"),p=a("1450");function v(e){let{children:t,className:a}=e,i=function(){let{isBlogPostPage:e}=(0,r.nO)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsx)(p.U,{children:(0,n.jsxs)(s.Z,{className:(0,l.Z)(i,a),children:[(0,n.jsx)(u,{}),(0,n.jsx)(j,{children:t}),(0,n.jsx)(f.Z,{})]})})}},7717:function(e,t,a){a.r(t),a.d(t,{default:()=>f});var n=a("5893");a("7294");var l=a("7026"),r=a("2743"),s=a("4681"),i=a("4183"),o=a("759"),c=a("121"),d=a("6005");function m(){let{assets:e,metadata:t}=(0,i.nO)(),{title:a,description:l,date:s,tags:o,authors:c,frontMatter:d}=t,{keywords:m}=d,h=e.image??d.image;return(0,n.jsxs)(r.d,{title:d.title_meta??a,description:l,keywords:m,image:h,children:[(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"article:published_time",content:s}),c.some(e=>e.url)&&(0,n.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),o.length>0&&(0,n.jsx)("meta",{property:"article:tag",content:o.map(e=>e.label).join(",")})]})}var h=a("4819");function u(){let e=(0,i.iZ)();return(0,n.jsx)(h.Z,{children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=a("101"),g=a("5427");function j(e){let{sidebar:t,children:a}=e,{metadata:l,toc:r}=(0,i.nO)(),{nextItem:s,prevItem:m,frontMatter:h}=l,{hide_table_of_contents:u,toc_min_heading_level:j,toc_max_heading_level:f}=h;return(0,n.jsxs)(o.Z,{sidebar:t,toc:!u&&r.length>0?(0,n.jsx)(x.Z,{toc:r,minHeadingLevel:j,maxHeadingLevel:f}):void 0,children:[(0,n.jsx)(g.Z,{metadata:l}),(0,n.jsx)(c.Z,{children:a}),(s||m)&&(0,n.jsx)(d.Z,{nextItem:s,prevItem:m})]})}function f(e){let t=e.content;return(0,n.jsx)(i.n4,{content:e.content,isBlogPostPage:!0,children:(0,n.jsxs)(r.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,n.jsx)(m,{}),(0,n.jsx)(u,{}),(0,n.jsx)(j,{sidebar:e.sidebar,children:(0,n.jsx)(t,{})})]})})}}}]);