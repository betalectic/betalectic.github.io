"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["9854"],{8267:function(e,t,a){a.d(t,{HV:function(){return o},J$:function(){return c},ds:function(){return l},fw:function(){return i}});var s=a(5893);a(7294);var n=a(6025),r=a(3115);function l(e){let t=function(){let{selectMessage:e}=(0,r.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let o=()=>(0,n.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function i(){return(0,s.jsx)(n.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function c(){return(0,s.jsx)(n.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},9965:function(e,t,a){a.d(t,{cn:function(){return r}});var s=a(7026),n=a(19);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,s.W)(t))}},9317:function(e,t,a){a.r(t),a.d(t,{default:()=>g});var s=a("5893");a("7294");var n=a("7026"),r=a("2743"),l=a("4681"),o=a("8267"),i=a("759"),c=a("4315"),u=a("4403"),d=a("1389");let h={authorListItem:"authorListItem_avpv"};function m(e){let{author:t}=e;return(0,s.jsx)("li",{className:h.authorListItem,children:(0,s.jsx)(d.Z,{as:"h2",author:t,count:t.count})})}function f(e){let{authors:t}=e;return(0,s.jsx)("section",{className:(0,n.Z)("margin-vert--lg ",h.authorsListSection),children:(0,s.jsx)("ul",{className:"grid md:grid-cols-2 ",children:t.map(e=>(0,s.jsx)(m,{author:e},e.key))})})}function g(e){let{authors:t,sidebar:a}=e,d=(0,o.HV)();return(0,s.jsxs)(r.FG,{className:(0,n.Z)(l.k.wrapper.blogPages,l.k.page.blogAuthorsListPage),children:[(0,s.jsx)(r.d,{title:d}),(0,s.jsx)(c.Z,{tag:"blog_authors_list"}),(0,s.jsxs)(i.Z,{sidebar:a,children:[(0,s.jsx)(u.Z,{as:"h1",children:d}),(0,s.jsx)(f,{authors:t})]})]})}},759:function(e,t,a){a.d(t,{Z:()=>g});var s=a("5893"),n=a("7294"),r=a("7026"),l=a("3379"),o=a("3012"),i=a("1437"),c=a("9965"),u=a("1895");let d=e=>{let t,a,r,l,o,i,d,{children:h,className:m,containerClassName:f,colors:g,waveWidth:x,backgroundFill:p,blur:j=7,speed:b="slow",waveOpacity:w=.5,...v}=e,N=(0,u.zz)(),k=(0,n.useRef)(null),F=()=>{switch(b){case"slow":default:return .001;case"fast":return .002}},y=()=>{t=(i=k.current.getContext("2d")).canvas.width=1e3,a=i.canvas.height=250,i.filter=`blur(${j}px)`,r=0,window.onresize=function(){t=i.canvas.width=window.innerWidth,a=i.canvas.height=window.innerHeight,i.filter=`blur(${j}px)`},A()},Z=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),T=g??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],P=e=>{for(r+=F(),l=0;l<e;l++){for(i.beginPath(),i.lineWidth=x||20,i.strokeStyle=T[l%T.length],o=0;o<t;o+=5){var s=100*N(o/800,.3*l,r);i.lineTo(o,s+.5*a)}i.stroke(),i.closePath()}},A=()=>{i.fillStyle=Z(),i.globalAlpha=w||.5,i.fillRect(0,0,t,a),P(6),d=requestAnimationFrame(A)};return(0,n.useEffect)(()=>(y(),()=>{cancelAnimationFrame(d)}),[]),(0,s.jsxs)("div",{className:(0,c.cn)("flex flex-col items-center justify-center",f),children:[(0,s.jsx)("canvas",{className:"absolute top-42 z-0 w-full",ref:k,id:"canvas"}),(0,s.jsx)("div",{className:(0,c.cn)("relative z-10",m),...v,children:h})]})};var h=a("6550"),m=a("1389");function f(e){let{date:t,formattedDate:a}=e;return(0,s.jsx)("time",{dateTime:t,children:a})}function g(e){let{sidebar:t,toc:a,children:n,...c}=e,u=(0,h.TH)(),g=u.pathname.endsWith("/blog")||u.pathname.endsWith("/blog/"),x=n[0].props?.items?.[0],p=(0,i.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsx)(l.Z,{...c,children:(0,s.jsx)("div",{className:"container margin-vert--lg",children:(0,s.jsxs)("div",{className:"row mt-10",children:[(0,s.jsx)("main",{className:(0,r.Z)(`col mx-auto ${g?"col--11":"col--9"}`),children:(0,s.jsxs)("div",{className:"w-full",children:[x&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,s.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("img",{className:"object-cover rounded-l-lg max-w-full",src:`${x?.content.frontMatter.image}`,alt:"Featured post image"})}),(0,s.jsxs)("div",{className:"p-2",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold",children:x?.content.metadata.title}),(0,s.jsx)(f,{date:x?.content.metadata.date,formattedDate:p.format(new Date(x?.content.metadata.date))}),x?.content.metadata.authors.length>0&&(0,s.jsx)("div",{className:"mt-4 flex flex-wrap gap-4",children:x?.content.metadata.authors.map((e,t)=>s.jsx(m.Z,{author:e},t))}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(x.content,{})}),(0,s.jsx)(o.Z,{href:x?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),n]})}),(0,s.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);