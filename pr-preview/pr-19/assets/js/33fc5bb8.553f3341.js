"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[867],{778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(6540);var s=a(4164),r=a(1213),o=a(7559),n=a(6461),l=a(8774),i=a(4096),h=a(8027),c=a(7713),u=a(1463),m=a(3892),g=a(9961),d=a(4848);function p(e){let{author:t}=e;const a=(0,n.wI)(t);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.be,{title:a}),(0,d.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,i.x)();return(0,d.jsx)(l.A,{href:e,children:(0,d.jsx)(n.np,{})})}function b(e){let{author:t,items:a,sidebar:s,listMetadata:r}=e;return(0,d.jsxs)(h.A,{sidebar:s,children:[(0,d.jsxs)("header",{className:"margin-bottom--xl",children:[(0,d.jsx)(g.A,{as:"h1",author:t}),t.description&&(0,d.jsx)("p",{children:t.description}),(0,d.jsx)(x,{})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(m.A,{items:a}),(0,d.jsx)(c.A,{metadata:r})]})}function j(e){return(0,d.jsxs)(r.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogAuthorsPostsPage),children:[(0,d.jsx)(p,{...e}),(0,d.jsx)(b,{...e})]})}},7713:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(1312),r=a(9022),o=a(4848);function n(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,o.jsx)(r.A,{permalink:a,title:(0,o.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),n&&(0,o.jsx)(r.A,{permalink:n,title:(0,o.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4096),r=a(9147),o=a(4848);function n(e){let{items:t,component:a=r.A}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(s.in,{content:t,children:(0,o.jsx)(a,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},6461:(e,t,a)=>{a.d(t,{ZD:()=>l,np:()=>c,uz:()=>h,wI:()=>i});a(6540);var s=a(1312),r=a(3465),o=a(4848);function n(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=n();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function i(e){const t=n();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const h=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,o.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}},9961:(e,t,a)=>{a.d(t,{A:()=>m});a(6540);var s=a(4164),r=a(8774),o=a(1107);const n={authorImage:"authorImage_GKcB","author-as-h1":"author-as-h1_VSIq","author-as-h2":"author-as-h2_L4qz",authorDetails:"authorDetails_uciD",authorName:"authorName_r1JK",authorTitle:"authorTitle_ym37",authorBlogPostCount:"authorBlogPostCount_vm3g"};var l=a(4848);function i(e){return e.href?(0,l.jsx)(r.A,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function h(e){let{title:t}=e;return(0,l.jsx)("small",{className:n.authorTitle,title:t,children:t})}function c(e){let{name:t,as:a}=e;return a?(0,l.jsx)(o.A,{as:a,className:n.authorName,children:t}):(0,l.jsx)("span",{className:n.authorName,children:t})}function u(e){let{count:t}=e;return(0,l.jsx)("span",{className:(0,s.A)(n.authorBlogPostCount),children:t})}function m(e){let{as:t,author:a,className:r,count:o}=e;const{name:m,title:g,url:d,imageURL:p,email:x,page:b}=a,j=b?.permalink||d||x&&`mailto:${x}`||void 0;return(0,l.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",r,n[`author-as-${t}`]),children:[p&&(0,l.jsx)(i,{href:j,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:(0,s.A)("avatar__photo",n.authorImage),src:p,alt:m})}),(m||g)&&(0,l.jsxs)("div",{className:(0,s.A)("avatar__intro",n.authorDetails),children:[(0,l.jsxs)("div",{className:"avatar__name",children:[m&&(0,l.jsx)(i,{href:j,children:(0,l.jsx)(c,{name:m,as:t})}),o&&(0,l.jsx)(u,{count:o})]}),!!g&&(0,l.jsx)(h,{title:g})]})]})}},4189:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(1312),r=a(8774),o=a(4848);function n(){return(0,o.jsx)("b",{className:"text-white text-sm font-semibold",children:(0,o.jsx)(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function l(e){const{blogPostTitle:t,...a}=e;return(0,o.jsx)(r.A,{className:"bg-neutral-950 m-3 hover:bg-neutral-600 py-2 px-4 rounded-3xl","aria-label":(0,s.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,o.jsx)(n,{})})}},7808:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var s=a(4164),r=a(4096),o=a(9961);const n={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};var l=a(4848);function i(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.e7)();if(0===a.length)return null;const h=a.every((e=>{let{name:t}=e;return!t})),c=1===a.length;return(0,l.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",h?n.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.A)(!h&&(c?"col col--12":"col col--6"),h?n.imageOnlyAuthorCol:n.authorCol),children:(0,l.jsx)(o.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}},9147:(e,t,a)=>{a.d(t,{A:()=>u});a(6540);var s=a(4164),r=a(4096),o=a(2819),n=a(597),l=a(3125),i=a(4711),h=a(7851),c=a(4848);function u(e){let{children:t,className:a}=e;const u=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return console.log("containerClassName",u),(0,c.jsxs)(h._,{children:[(0,c.jsxs)(o.A,{className:(0,s.A)(u,a),children:[(0,c.jsx)(n.A,{}),(0,c.jsx)(l.A,{children:t}),(0,c.jsx)(i.A,{})]}),void 0!==u&&(0,c.jsx)("hr",{className:"border-0 h-px mt-[-2rem] bg-gradient-to-r from-white via-black to-white my-8"})]})}}}]);