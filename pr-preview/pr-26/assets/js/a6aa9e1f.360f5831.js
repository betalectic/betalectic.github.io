"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["514"],{9337:function(e,t,n){n.r(t),n.d(t,{default:()=>f});var a=n("5893");n("7294");var l=n("7026"),r=n("2933"),s=n("2743"),i=n("4681"),o=n("759"),c=n("1722"),d=n("4315"),m=n("2607"),u=n("4819"),h=n("4183");function x(e){let t=(0,h.CS)(e);return(0,a.jsx)(u.Z,{children:(0,a.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function g(e){let{metadata:t}=e,{siteConfig:{title:n}}=(0,r.Z)(),{blogDescription:l,blogTitle:i,permalink:o}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.d,{title:"/"===o?n:i,description:l}),(0,a.jsx)(d.Z,{tag:"blog_posts_list"})]})}function j(e){let{metadata:t,items:n,sidebar:l}=e;return(0,a.jsxs)(o.Z,{sidebar:l,children:[(0,a.jsx)(m.Z,{items:n}),(0,a.jsx)(c.Z,{metadata:t})]})}function f(e){return(0,a.jsxs)(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage),children:[(0,a.jsx)(g,{...e}),(0,a.jsx)(x,{...e}),(0,a.jsx)(j,{...e})]})}},1722:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var l=n(6025),r=n(790);function s(e){let{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(r.Z,{permalink:n,title:(0,a.jsx)(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,a.jsx)(r.Z,{permalink:s,title:(0,a.jsx)(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},9965:function(e,t,n){n.d(t,{cn:function(){return r}});var a=n(7026),l=n(19);function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,l.m6)((0,a.W)(t))}},759:function(e,t,n){n.d(t,{Z:()=>g});var a=n("5893"),l=n("7294"),r=n("7026"),s=n("748"),i=n("3012"),o=n("1437"),c=n("9965"),d=n("1895");let m=e=>{let t,n,r,s,i,o,m,{children:u,className:h,containerClassName:x,colors:g,waveWidth:j,backgroundFill:f,blur:p=1,speed:b="slow",waveOpacity:v=.5,...Z}=e,w=(0,d.zz)(),N=(0,l.useRef)(null),k=()=>{switch(b){case"slow":default:return .001;case"fast":return .002}},y=()=>{t=(o=N.current.getContext("2d")).canvas.width=1e3,n=o.canvas.height=250,o.filter=`blur(${p}px)`,r=0,window.onresize=function(){t=o.canvas.width=window.innerWidth,n=o.canvas.height=window.innerHeight,o.filter=`blur(${p}px)`},O()},F=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),A=g??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],C=e=>{for(r+=k(),s=0;s<e;s++){for(o.beginPath(),o.lineWidth=j||20,o.strokeStyle=A[s%A.length],i=0;i<t;i+=5){var a=100*w(i/800,.3*s,r);o.lineTo(i,a+.5*n)}o.stroke(),o.closePath()}},O=()=>{o.fillStyle=F(),o.globalAlpha=v||.5,o.fillRect(0,0,t,n),C(6),m=requestAnimationFrame(O)};return(0,l.useEffect)(()=>(y(),()=>{cancelAnimationFrame(m)}),[]),(0,a.jsxs)("div",{className:(0,c.cn)("flex flex-col items-center justify-center",x),children:[(0,a.jsx)("canvas",{className:"absolute top-36 z-0 w-full",ref:N,id:"canvas"}),(0,a.jsx)("div",{className:(0,c.cn)("relative z-10",h),...Z,children:u})]})};var u=n("6550"),h=n("1389");function x(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function g(e){let{sidebar:t,toc:n,children:l,...c}=e,d=(0,u.TH)(),g="/blog"===d.pathname||"/blog/"===d.pathname;console.log("isBlogPage",g);let j=l[0].props?.items?.[0],f=(0,o.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsx)(s.Z,{...c,children:(0,a.jsx)("div",{className:"container margin-vert--lg",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("main",{className:(0,r.Z)(`col ${g?"col--12":"col--10"}`),children:(0,a.jsxs)("div",{className:"mx-auto",children:[g&&(0,a.jsx)("h1",{className:"text-black dark:text-white z-10 text-pretty",children:"The Betalectic Blogs"}),(0,a.jsxs)("div",{className:"w-full",children:[j&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,a.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{className:"object-cover h-full rounded-l-lg",src:j?.content.frontMatter.image,alt:"Featured post image"})}),(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold",children:j?.content.metadata.title}),(0,a.jsx)(x,{date:j?.content.metadata.date,formattedDate:f.format(new Date(j?.content.metadata.date))}),j?.content.metadata.authors.length>0&&(0,a.jsx)("div",{className:"mt-4",children:j?.content.metadata.authors.map((e,t)=>a.jsx(h.Z,{author:e},t))}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(j.content,{})}),(0,a.jsx)(i.Z,{href:j?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),l]})]})}),n&&(0,a.jsx)("div",{className:"col col--2",children:n})]})})})}},6197:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(5893);n(7294);var l=n(6025),r=n(3012);function s(){return(0,a.jsx)("b",{className:"text-white dark:text-black text-sm font-semibold",children:(0,a.jsx)(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function i(e){let{blogPostTitle:t,...n}=e;return(0,a.jsx)(r.Z,{className:"bg-neutral-950 dark:bg-neutral-50 m-3 hover:bg-neutral-600 dark:hover:bg-neutral-400 py-2 px-4 rounded-3xl","aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(s,{})})}},121:function(e,t,n){n.d(t,{Z:()=>b});var a=n("5893");n("7294");var l=n("7026"),r=n("4183"),s=n("1793"),i=n("3012");function o(e){let{className:t}=e,{metadata:n,isBlogPostPage:s}=(0,r.nO)(),{permalink:o,title:c}=n;return(0,a.jsx)(s?"h1":"h2",{className:(0,l.Z)(t),children:s?c:(0,a.jsx)(i.Z,{to:o,children:c})})}var c=n("8791"),d=n("1389");let m={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function u(e){let{className:t}=e,{metadata:{authors:n},assets:s}=(0,r.nO)();if(0===n.length)return null;let i=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,a.jsx)("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?m.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,a.jsx)("div",{className:(0,l.Z)(!i&&(o?"col col--12":"col col--6"),i?m.imageOnlyAuthorCol:m.authorCol),children:(0,a.jsx)(d.Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function h(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(o,{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(u,{})]})}var x=n("8365"),g=n("1799");function j(e){let{children:t,className:n}=e,{isBlogPostPage:s}=(0,r.nO)();return(0,a.jsx)("div",{id:s?x.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),children:(0,a.jsx)("div",{className:"flex gap-4",children:(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{children:t})})})})}var f=n("4774"),p=n("1450");function b(e){let{children:t,className:n}=e,i=function(){let{isBlogPostPage:e}=(0,r.nO)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsx)(p.U,{children:(0,a.jsxs)(s.Z,{className:(0,l.Z)(i,n),children:[(0,a.jsx)(h,{}),(0,a.jsx)(j,{children:t}),(0,a.jsx)(f.Z,{})]})})}},2607:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(5893);n(7294);var l=n(4183),r=n(121),s=n(7026);function i(e){let{items:t,component:n=r.Z}=e;return(0,a.jsx)(a.Fragment,{children:t.slice(1).map((e,t)=>{let{content:r}=e;return(0,a.jsxs)(l.n4,{content:r,children:[(0,a.jsx)("div",{className:(0,s.Z)("blog-post-item"),children:(0,a.jsx)(n,{children:(0,a.jsx)(r,{})})}),(0,a.jsx)("hr",{})]},r.metadata.permalink)})})}}}]);