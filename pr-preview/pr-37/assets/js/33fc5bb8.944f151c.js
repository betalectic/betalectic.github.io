"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["9348"],{4042:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(5893);n(7294);var r=n(7026),l=n(2743),s=n(4681),o=n(8267),i=n(3012),c=n(4183),d=n(759),u=n(1722),h=n(4315),m=n(2607),g=n(1389);function x(e){let{author:t}=e,n=(0,o.ds)(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.d,{title:n}),(0,a.jsx)(h.Z,{tag:"blog_authors_posts"})]})}function p(){let{authorsListPath:e}=(0,c.wj)();return(0,a.jsx)(i.Z,{href:e,children:(0,a.jsx)(o.fw,{})})}function f(e){let{author:t,items:n,sidebar:r,listMetadata:l}=e;return(0,a.jsxs)(d.Z,{sidebar:r,children:[(0,a.jsxs)("header",{className:"margin-bottom--xl",children:[(0,a.jsx)(g.Z,{as:"h1",author:t}),t.description&&(0,a.jsx)("p",{children:t.description}),(0,a.jsx)(p,{})]}),0===n.length?(0,a.jsx)("p",{children:(0,a.jsx)(o.J$,{})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{}),(0,a.jsx)(m.Z,{items:n}),(0,a.jsx)(u.Z,{metadata:l})]})]})}function j(e){return(0,a.jsxs)(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogAuthorsPostsPage),children:[(0,a.jsx)(x,{...e}),(0,a.jsx)(f,{...e})]})}},1722:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=n(6025),l=n(790);function s(e){let{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(l.Z,{permalink:n,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,a.jsx)(l.Z,{permalink:s,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8267:function(e,t,n){n.d(t,{HV:function(){return o},J$:function(){return c},ds:function(){return s},fw:function(){return i}});var a=n(5893);n(7294);var r=n(6025),l=n(3115);function s(e){let t=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let o=()=>(0,r.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function i(){return(0,a.jsx)(r.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function c(){return(0,a.jsx)(r.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},9965:function(e,t,n){n.d(t,{cn:function(){return l}});var a=n(7026),r=n(19);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}},759:function(e,t,n){n.d(t,{Z:()=>x});var a=n("5893"),r=n("7294"),l=n("7026"),s=n("3379"),o=n("3012"),i=n("1437"),c=n("9965"),d=n("1895");let u=e=>{let t,n,l,s,o,i,u,{children:h,className:m,containerClassName:g,colors:x,waveWidth:p,backgroundFill:f,blur:j=7,speed:b="slow",waveOpacity:v=.5,...w}=e,Z=(0,d.zz)(),N=(0,r.useRef)(null),k=()=>{switch(b){case"slow":default:return .001;case"fast":return .002}},y=()=>{t=(i=N.current.getContext("2d")).canvas.width=1e3,n=i.canvas.height=250,i.filter=`blur(${j}px)`,l=0,window.onresize=function(){t=i.canvas.width=window.innerWidth,n=i.canvas.height=window.innerHeight,i.filter=`blur(${j}px)`},O()},A=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),F=x??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],T=e=>{for(l+=k(),s=0;s<e;s++){for(i.beginPath(),i.lineWidth=p||20,i.strokeStyle=F[s%F.length],o=0;o<t;o+=5){var a=100*Z(o/800,.3*s,l);i.lineTo(o,a+.5*n)}i.stroke(),i.closePath()}},O=()=>{i.fillStyle=A(),i.globalAlpha=v||.5,i.fillRect(0,0,t,n),T(6),u=requestAnimationFrame(O)};return(0,r.useEffect)(()=>(y(),()=>{cancelAnimationFrame(u)}),[]),(0,a.jsxs)("div",{className:(0,c.cn)("flex flex-col items-center justify-center",g),children:[(0,a.jsx)("canvas",{className:"absolute top-42 z-0 w-full",ref:N,id:"canvas"}),(0,a.jsx)("div",{className:(0,c.cn)("relative z-10",m),...w,children:h})]})};var h=n("6550"),m=n("1389");function g(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function x(e){let{sidebar:t,toc:n,children:r,...c}=e,d=(0,h.TH)(),x=d.pathname.endsWith("/blog")||d.pathname.endsWith("/blog/"),p=r[0].props?.items?.[0],f=(0,i.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsx)(s.Z,{...c,children:(0,a.jsx)("div",{className:"container margin-vert--lg",children:(0,a.jsxs)("div",{className:"row mt-10",children:[(0,a.jsx)("main",{className:(0,l.Z)(`col mx-auto ${x?"col--11":"col--9"}`),children:(0,a.jsxs)("div",{className:"w-full",children:[p&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,a.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("img",{className:"object-cover rounded-l-lg max-w-full",src:`${p?.content.frontMatter.image}`,alt:"Featured post image"})}),(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold",children:p?.content.metadata.title}),(0,a.jsx)(g,{date:p?.content.metadata.date,formattedDate:f.format(new Date(p?.content.metadata.date))}),p?.content.metadata.authors.length>0&&(0,a.jsx)("div",{className:"mt-4 flex flex-wrap gap-4",children:p?.content.metadata.authors.map((e,t)=>a.jsx(m.Z,{author:e},t))}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(p.content,{})}),(0,a.jsx)(o.Z,{href:p?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),r]})}),(0,a.jsx)("div",{className:"col col--2",children:n})]})})})}},6197:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5893);n(7294);var r=n(6025),l=n(3012);function s(){return(0,a.jsx)("b",{className:"text-white dark:text-black text-sm font-semibold",children:(0,a.jsx)(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function o(e){let{blogPostTitle:t,...n}=e;return(0,a.jsx)(l.Z,{className:"bg-neutral-950 dark:bg-neutral-50 m-3 hover:bg-neutral-600 dark:hover:bg-neutral-400 py-2 px-4 rounded-3xl","aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(s,{})})}},121:function(e,t,n){n.d(t,{Z:()=>b});var a=n("5893");n("7294");var r=n("7026"),l=n("4183"),s=n("1793"),o=n("3012");function i(e){let{className:t}=e,{metadata:n,isBlogPostPage:s}=(0,l.nO)(),{permalink:i,title:c}=n;return(0,a.jsx)(s?"h1":"h2",{className:(0,r.Z)(t),children:s?c:(0,a.jsx)(o.Z,{className:"text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400",to:i,children:c})})}var c=n("8791"),d=n("1389");let u={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function h(e){let{className:t}=e,{metadata:{authors:n},assets:s}=(0,l.nO)();if(0===n.length)return null;let o=n.every(e=>{let{name:t}=e;return!t}),i=1===n.length;return(0,a.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",o?u.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,a.jsx)("div",{className:(0,r.Z)(!o&&(i?"col col--12":"col col--6"),o?u.imageOnlyAuthorCol:u.authorCol),children:(0,a.jsx)(d.Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function m(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(i,{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(h,{})]})}var g=n("8365"),x=n("5504");function p(e){let{children:t,className:n}=e,{isBlogPostPage:s}=(0,l.nO)();return(0,a.jsx)("div",{id:s?g.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),children:(0,a.jsx)("div",{className:"flex gap-4",children:(0,a.jsx)("div",{className:"blog-content-wrapper my-8",children:(0,a.jsx)(x.Z,{children:t})})})})}var f=n("8733"),j=n("1450");function b(e){let{children:t,className:n}=e,o=function(){let{isBlogPostPage:e}=(0,l.nO)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsx)(j.U,{children:(0,a.jsxs)(s.Z,{className:(0,r.Z)(o,n),children:[(0,a.jsx)(m,{}),(0,a.jsx)(p,{children:t}),(0,a.jsx)(f.Z,{})]})})}},2607:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5893),r=n(7294),l=n(6550),s=n(4183),o=n(121),i=n(7026);function c(e){let{items:t,component:n=o.Z}=e,[c,d]=(0,r.useState)(t),u=(0,l.TH)();return(0,r.useEffect)(()=>{let e=u.pathname,n="/blog"===e||"/blog/"===e?t.slice(1):t;d(e=>JSON.stringify(e)!==JSON.stringify(n)?n:e)},[u.pathname,t]),(0,a.jsx)(a.Fragment,{children:c?.map((e,t)=>{let{content:r}=e;return a.jsxs(s.n4,{content:r,children:[a.jsx("div",{className:i.Z("blog-post-item"),children:a.jsx(n,{children:a.jsx(r,{})})}),a.jsx("hr",{})]},r.metadata.permalink)})})}}}]);