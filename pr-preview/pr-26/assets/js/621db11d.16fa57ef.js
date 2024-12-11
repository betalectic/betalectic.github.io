"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["854"],{3111:function(e,t,l){l.r(t),l.d(t,{default:()=>f});var a=l("5893");l("7294");var n=l("7026"),r=l("2743"),s=l("4681"),o=l("8267"),i=l("759"),c=l("4315"),u=l("4403"),h=l("1389");let d={authorListItem:"authorListItem_n3yI"};function m(e){let{author:t}=e;return(0,a.jsx)("li",{className:d.authorListItem,children:(0,a.jsx)(h.Z,{as:"h2",author:t,count:t.count})})}function g(e){let{authors:t}=e;return(0,a.jsx)("section",{className:(0,n.Z)("margin-vert--lg",d.authorsListSection),children:(0,a.jsx)("ul",{children:t.map(e=>(0,a.jsx)(m,{author:e},e.key))})})}function f(e){let{authors:t,sidebar:l}=e,h=(0,o.HV)();return(0,a.jsxs)(r.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogAuthorsListPage),children:[(0,a.jsx)(r.d,{title:h}),(0,a.jsx)(c.Z,{tag:"blog_authors_list"}),(0,a.jsxs)(i.Z,{sidebar:l,children:[(0,a.jsx)(u.Z,{as:"h1",children:h}),(0,a.jsx)(g,{authors:t})]})]})}},8267:function(e,t,l){l.d(t,{HV:function(){return c},J$:function(){return h},Wi:function(){return o},ds:function(){return i},fw:function(){return u}});var a=l(5893);l(7294);var n=l(6025),r=l(3115);function s(){let{selectMessage:e}=(0,r.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){let t=s();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function i(e){let t=s();return(0,n.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let c=()=>(0,n.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function u(){return(0,a.jsx)(n.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function h(){return(0,a.jsx)(n.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},3115:function(e,t,l){l.d(t,{c:function(){return i}});var a=l(7294),n=l(2933);let r=["zero","one","two","few","many","other"];function s(e){return r.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,l)=>(function(e,t,l){let a=e.split("|");if(1===a.length)return a[0];a.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);let n=l.select(t);return a[Math.min(l.pluralForms.indexOf(n),a.length-1)]})(l,t,e)}}},9965:function(e,t,l){l.d(t,{cn:function(){return r}});var a=l(7026),n=l(19);function r(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,n.m6)((0,a.W)(t))}},759:function(e,t,l){l.d(t,{Z:()=>f});var a=l("5893"),n=l("7294"),r=l("7026"),s=l("748"),o=l("3012"),i=l("1437"),c=l("9965"),u=l("1895");let h=e=>{let t,l,r,s,o,i,h,{children:d,className:m,containerClassName:g,colors:f,waveWidth:p,backgroundFill:x,blur:b=1,speed:j="slow",waveOpacity:w=.5,...v}=e,N=(0,u.zz)(),F=(0,n.useRef)(null),k=()=>{switch(j){case"slow":default:return .001;case"fast":return .002}},y=()=>{t=(i=F.current.getContext("2d")).canvas.width=1e3,l=i.canvas.height=250,i.filter=`blur(${b}px)`,r=0,window.onresize=function(){t=i.canvas.width=window.innerWidth,l=i.canvas.height=window.innerHeight,i.filter=`blur(${b}px)`},$()},P=()=>getComputedStyle(document.documentElement).getPropertyValue("--background-fill-color").trim(),Z=f??["#635BFF","#5B77FF","#7E5BFF","#5BE1FF","#FFA75B"],T=e=>{for(r+=k(),s=0;s<e;s++){for(i.beginPath(),i.lineWidth=p||20,i.strokeStyle=Z[s%Z.length],o=0;o<t;o+=5){var a=100*N(o/800,.3*s,r);i.lineTo(o,a+.5*l)}i.stroke(),i.closePath()}},$=()=>{i.fillStyle=P(),i.globalAlpha=w||.5,i.fillRect(0,0,t,l),T(6),h=requestAnimationFrame($)};return(0,n.useEffect)(()=>(y(),()=>{cancelAnimationFrame(h)}),[]),(0,a.jsxs)("div",{className:(0,c.cn)("flex flex-col items-center justify-center",g),children:[(0,a.jsx)("canvas",{className:"absolute top-36 z-0 w-full",ref:F,id:"canvas"}),(0,a.jsx)("div",{className:(0,c.cn)("relative z-10",m),...v,children:d})]})};var d=l("6550"),m=l("1389");function g(e){let{date:t,formattedDate:l}=e;return(0,a.jsx)("time",{dateTime:t,children:l})}function f(e){let{sidebar:t,toc:l,children:n,...c}=e,u=(0,d.TH)(),f=u.pathname.endsWith("/blog")||u.pathname.endsWith("/blog/");console.log("isBlogPage",f);let p=n[0].props?.items?.[0],x=(0,i.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsx)(s.Z,{...c,children:(0,a.jsx)("div",{className:"container margin-vert--lg",children:(0,a.jsxs)("div",{className:"row mt-10",children:[(0,a.jsx)("main",{className:(0,r.Z)(`col mx-auto ${f?"col--11":"col--9"}`),children:(0,a.jsxs)("div",{className:"mx-auto",children:[f&&(0,a.jsx)("h1",{className:"text-black dark:text-white z-10 text-pretty",children:"The Betalectic Blogs"}),(0,a.jsxs)("div",{className:"w-full",children:[p&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(h,{backgroundFill:"white dark:black",className:"max-w-4xl mt-8 mx-auto pb-24 md:pb-40",children:(0,a.jsxs)("div",{className:"mt-2 mx-auto flex flex-col p-2 sm:flex-row gap-4 shadow-2xl bg-white dark:bg-neutral-900 rounded-lg",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{className:"object-cover h-full rounded-l-lg",src:p?.content.frontMatter.image,alt:"Featured post image"})}),(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold",children:p?.content.metadata.title}),(0,a.jsx)(g,{date:p?.content.metadata.date,formattedDate:x.format(new Date(p?.content.metadata.date))}),p?.content.metadata.authors.length>0&&(0,a.jsx)("div",{className:"mt-4",children:p?.content.metadata.authors.map((e,t)=>a.jsx(m.Z,{author:e},t))}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(p.content,{})}),(0,a.jsx)(o.Z,{href:p?.content.metadata.permalink,className:"ml-auto",children:"Read More"})]})]})})}),n]})]})}),l&&(0,a.jsx)("div",{className:"col col--2",children:l})]})})})}}}]);