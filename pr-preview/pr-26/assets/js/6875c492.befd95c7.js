"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["83"],{1722:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5893);n(7294);var r=n(6025),i=n(790);function l(e){let{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(i.Z,{permalink:n,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,a.jsx)(i.Z,{permalink:l,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},6374:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(5893);n(7294);var r=n(7026),i=n(6025),l=n(2743),s=n(4681),o=n(8267),c=n(3012),d=n(759),u=n(1722),h=n(4315),m=n(2607),g=n(5133),x=n(4403);function f(e){let{tag:t}=e,n=(0,o.Wi)(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.d,{title:n,description:t.description}),(0,a.jsx)(h.Z,{tag:"blog_tags_posts"})]})}function p(e){let{tag:t,items:n,sidebar:r,listMetadata:l}=e,s=(0,o.Wi)(t);return(0,a.jsxs)(d.Z,{sidebar:r,children:[t.unlisted&&(0,a.jsx)(g.Z,{}),(0,a.jsxs)("header",{className:"margin-bottom--xl",children:[(0,a.jsx)(x.Z,{as:"h1",children:s}),t.description&&(0,a.jsx)("p",{children:t.description}),(0,a.jsx)(c.Z,{href:t.allTagsPath,children:(0,a.jsx)(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,a.jsx)(m.Z,{items:n}),(0,a.jsx)(u.Z,{metadata:l})]})}function j(e){return(0,a.jsxs)(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage),children:[(0,a.jsx)(f,{...e}),(0,a.jsx)(p,{...e})]})}},5133:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5893);n(7294);var r=n(7026),i=n(202),l=n(4681),s=n(5094);function o(e){let{className:t}=e;return(0,a.jsx)(s.Z,{type:"caution",title:(0,a.jsx)(i.cI,{}),className:(0,r.Z)(t,l.k.common.unlistedBanner),children:(0,a.jsx)(i.eU,{})})}function c(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.T$,{}),(0,a.jsx)(o,{...e})]})}},8267:function(e,t,n){n.d(t,{HV:function(){return c},J$:function(){return u},Wi:function(){return s},ds:function(){return o},fw:function(){return d}});var a=n(5893);n(7294);var r=n(6025),i=n(3115);function l(){let{selectMessage:e}=(0,i.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function s(e){let t=l();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){let t=l();return(0,r.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let c=()=>(0,r.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,a.jsx)(r.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,a.jsx)(r.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},202:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return l},eU:function(){return s},ht:function(){return c},xo:function(){return d}});var a=n(5893);n(7294);var r=n(6025),i=n(4819);function l(){return(0,a.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,a.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},9965:function(e,t,n){n.d(t,{cn:function(){return i}});var a=n(7026),r=n(19);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}},759:function(e,t,n){n.d(t,{Z:()=>x});var a=n("5893"),r=n("7294"),i=n("7026"),l=n("748"),s=n("3012"),o=n("1437"),c=n("9965"),d=n("1895");let u=e=>{let t,n,i,l,s,o,u,{children:h,className:m,containerClassName:g,colors:x,waveWidth:f,backgroundFill:p,blur:j=1,speed:b="slow",waveOpacity:v=.5,...w}=e,Z=(0,d.zz)(),N=(0,r.useRef)(null),k=()=>{switch(b){case"slow":default:return .001;case"fast":return .002}},T=()=>{t=(o=N.current.getContext("2d")).canvas.width=1e3,n=o.canvas.height=250,o.filter=`blur(${j}px)`,i=0,window.onresize=function(){t=o.canvas.width=window.innerWidth,n=o.canvas.height=window.innerHeight,o.filter=`blur(${j}px)`},P()},y=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),A=x??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],F=e=>{for(i+=k(),l=0;l<e;l++){for(o.beginPath(),o.lineWidth=f||20,o.strokeStyle=A[l%A.length],s=0;s<t;s+=5){var a=100*Z(s/800,.3*l,i);o.lineTo(s,a+.5*n)}o.stroke(),o.closePath()}},P=()=>{o.fillStyle=y(),o.globalAlpha=v||.5,o.fillRect(0,0,t,n),F(6),u=requestAnimationFrame(P)};return(0,r.useEffect)(()=>(T(),()=>{cancelAnimationFrame(u)}),[]),(0,a.jsxs)("div",{className:(0,c.cn)("flex flex-col items-center justify-center",g),children:[(0,a.jsx)("canvas",{className:"absolute top-36 z-0 w-full",ref:N,id:"canvas"}),(0,a.jsx)("div",{className:(0,c.cn)("relative z-10",m),...w,children:h})]})};var h=n("6550"),m=n("1389");function g(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function x(e){let{sidebar:t,toc:n,children:r,...c}=e,d=(0,h.TH)(),x=d.pathname.endsWith("/blog")||d.pathname.endsWith("/blog/");console.log("isBlogPage",x);let f=r[0].props?.items?.[0],p=(0,o.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsx)(l.Z,{...c,children:(0,a.jsx)("div",{className:"container margin-vert--lg",children:(0,a.jsxs)("div",{className:"row mt-10",children:[(0,a.jsx)("main",{className:(0,i.Z)(`col mx-auto ${x?"col--11":"col--9"}`),children:(0,a.jsxs)("div",{className:"mx-auto",children:[x&&(0,a.jsx)("h1",{className:"text-black dark:text-white z-10 text-pretty",children:"The Betalectic Blogs"}),(0,a.jsxs)("div",{className:"w-full",children:[f&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,a.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{className:"object-cover h-full rounded-l-lg",src:f?.content.frontMatter.image,alt:"Featured post image"})}),(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold",children:f?.content.metadata.title}),(0,a.jsx)(g,{date:f?.content.metadata.date,formattedDate:p.format(new Date(f?.content.metadata.date))}),f?.content.metadata.authors.length>0&&(0,a.jsx)("div",{className:"mt-4",children:f?.content.metadata.authors.map((e,t)=>a.jsx(m.Z,{author:e},t))}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(f.content,{})}),(0,a.jsx)(s.Z,{href:f?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),r]})]})}),n&&(0,a.jsx)("div",{className:"col col--2",children:n})]})})})}},6197:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=n(6025),i=n(3012);function l(){return(0,a.jsx)("b",{className:"text-white dark:text-black text-sm font-semibold",children:(0,a.jsx)(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function s(e){let{blogPostTitle:t,...n}=e;return(0,a.jsx)(i.Z,{className:"bg-neutral-950 dark:bg-neutral-50 m-3 hover:bg-neutral-600 dark:hover:bg-neutral-400 py-2 px-4 rounded-3xl","aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(l,{})})}},121:function(e,t,n){n.d(t,{Z:()=>b});var a=n("5893");n("7294");var r=n("7026"),i=n("4183"),l=n("1793"),s=n("3012");function o(e){let{className:t}=e,{metadata:n,isBlogPostPage:l}=(0,i.nO)(),{permalink:o,title:c}=n;return(0,a.jsx)(l?"h1":"h2",{className:(0,r.Z)(t),children:l?c:(0,a.jsx)(s.Z,{to:o,children:c})})}var c=n("8791"),d=n("1389");let u={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function h(e){let{className:t}=e,{metadata:{authors:n},assets:l}=(0,i.nO)();if(0===n.length)return null;let s=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,a.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?u.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,a.jsx)("div",{className:(0,r.Z)(!s&&(o?"col col--12":"col col--6"),s?u.imageOnlyAuthorCol:u.authorCol),children:(0,a.jsx)(d.Z,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t))})}function m(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(o,{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(h,{})]})}var g=n("8365"),x=n("1799");function f(e){let{children:t,className:n}=e,{isBlogPostPage:l}=(0,i.nO)();return(0,a.jsx)("div",{id:l?g.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),children:(0,a.jsx)("div",{className:"flex gap-4",children:(0,a.jsx)("div",{children:(0,a.jsx)(x.Z,{children:t})})})})}var p=n("4774"),j=n("1450");function b(e){let{children:t,className:n}=e,s=function(){let{isBlogPostPage:e}=(0,i.nO)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsx)(j.U,{children:(0,a.jsxs)(l.Z,{className:(0,r.Z)(s,n),children:[(0,a.jsx)(m,{}),(0,a.jsx)(f,{children:t}),(0,a.jsx)(p.Z,{})]})})}},2607:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893);n(7294);var r=n(4183),i=n(121),l=n(7026);function s(e){let{items:t,component:n=i.Z}=e;return(0,a.jsx)(a.Fragment,{children:t.slice(1).map((e,t)=>{let{content:i}=e;return(0,a.jsxs)(r.n4,{content:i,children:[(0,a.jsx)("div",{className:(0,l.Z)("blog-post-item"),children:(0,a.jsx)(n,{children:(0,a.jsx)(i,{})})}),(0,a.jsx)("hr",{})]},i.metadata.permalink)})})}}}]);