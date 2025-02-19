"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["3653"],{4183:function(e,t,n){n.d(t,{nO:()=>u,iZ:()=>x,n4:()=>c,CS:()=>p,wj:()=>s});var r=n("5893"),a=n("7294"),i=n("5346"),l=n("8312");function s(){let e=(0,l.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=a.createContext(null);function c(e){let{children:t,content:n,isBlogPostPage:i=!1}=e,l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n}),[t,n])}({content:n,isBlogPostPage:i});return(0,r.jsx)(o.Provider,{value:l,children:t})}function u(){let e=(0,a.useContext)(o);if(null===e)throw new i.i6("BlogPostProvider");return e}var d=n("4757"),m=n("2933");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(b);return{author:1===t.length?t[0]:t}}function f(e,t,n){return e?{image:function(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function p(e){let{siteConfig:t}=(0,m.Z)(),{withBaseUrl:n}=(0,d.Cg)(),{metadata:{blogDescription:r,blogTitle:a,permalink:i}}=e,l=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:a,description:r,blogPost:e.items.map(e=>(function(e,t,n){let{assets:r,frontMatter:a,metadata:i}=e,{date:l,title:s,description:o,lastUpdatedAt:c}=i,u=r.image??a.image,d=a.keywords??[],m=`${t.url}${i.permalink}`,p=c?g(c):void 0;return{"@type":"BlogPosting","@id":m,mainEntityOfPage:m,url:m,headline:s,name:s,description:o,datePublished:l,...p?{dateModified:p}:{},...h(i.authors),...f(u,n,s),...d?{keywords:d}:{}}})(e.content,t,n))}}function x(){let e=s(),{assets:t,metadata:n}=u(),{siteConfig:r}=(0,m.Z)(),{withBaseUrl:a}=(0,d.Cg)(),{date:i,title:l,description:o,frontMatter:c,lastUpdatedAt:p}=n,x=t.image??c.image,b=c.keywords??[],v=p?g(p):void 0,j=`${r.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:l,name:l,description:o,datePublished:i,...v?{dateModified:v}:{},...h(n.authors),...f(x,a,l),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${r.url}${e.blogBasePath}`,name:e.blogTitle}}}function b(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}n("3012")},1793:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}n(7294)},7473:function(e,t,n){n.d(t,{Z:()=>p});var r=n("5893");n("7294");var a=n("7026"),i=n("4183"),l=n("4681"),s=n("9230"),o=n("6025"),c=n("3012");let u={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function d(e){let{permalink:t,label:n,count:i,description:l}=e;return(0,r.jsxs)(c.Z,{href:t,title:l,className:(0,a.Z)(u.tag,i?u.tagWithCount:u.tagRegular),children:[n,i&&(0,r.jsx)("span",{children:i})]})}let m="tags_jXut",g="tag_QGVx";function h(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,a.Z)(m,"padding--none","margin-left--sm"),children:t.map(e=>(0,r.jsx)("li",{className:g,children:(0,r.jsx)(d,{...e})},e.permalink))})]})}var f=n("6197");function p(){let{metadata:e,isBlogPostPage:t}=(0,i.nO)(),{tags:n,title:o,editUrl:c,hasTruncateMarker:u,lastUpdatedBy:d,lastUpdatedAt:m}=e,g=!t&&u,p=n.length>0;if(!(p||g||c))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[p&&(0,r.jsx)("div",{className:(0,a.Z)("col",{"col--9":g}),children:(0,r.jsx)(h,{tags:n})}),g&&(0,r.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":p}),children:(0,r.jsx)(f.Z,{blogPostTitle:o,to:e.permalink})})]});{let e=!!(c||m||d);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[p&&(0,r.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",l.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(h,{tags:n})})}),e&&(0,r.jsx)(s.Z,{className:(0,a.Z)("margin-top--sm",l.k.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:m,lastUpdatedBy:d})]})}}},8791:function(e,t,n){n.d(t,{Z:()=>g});var r=n("5893");n("7294");var a=n("7026"),i=n("6025"),l=n("3115"),s=n("1437"),o=n("4183");let c="container_mt6G";function u(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,l.c)();return t=>{let n=Math.ceil(t);return e(n,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function d(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function m(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function g(e){let t,{className:n}=e,{metadata:i}=(0,o.nO)(),{date:l,readingTime:g}=i,h=(0,s.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.Z)(c,"margin-vert--md",n),children:[(0,r.jsx)(d,{date:l,formattedDate:(t=l,h.format(new Date(t)))}),void 0!==g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(u,{readingTime:g})]})]})}},6005:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);n(7294);var a=n(6025),i=n(790);function l(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(i.Z,{...n,subLabel:(0,r.jsx)(a.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(i.Z,{...t,subLabel:(0,r.jsx)(a.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}},5427:function(e,t,n){n.d(t,{Z:()=>x});var r=n("5893");n("7294");var a=n("7026"),i=n("6025"),l=n("4819");function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("4681"),g=n("5094");function h(e){let{className:t}=e;return(0,r.jsx)(g.Z,{type:"caution",title:(0,r.jsx)(u,{}),className:(0,a.Z)(t,m.k.common.draftBanner),children:(0,r.jsx)(d,{})})}function f(e){let{className:t}=e;return(0,r.jsx)(g.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,a.Z)(t,m.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function p(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(f,{...e})]})}function x(e){let{metadata:t}=e,{unlisted:n,frontMatter:a}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||a.unlisted)&&(0,r.jsx)(p,{}),a.draft&&(0,r.jsx)(h,{})]})}},790:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);n(7294);var a=n(7026),i=n(3012);function l(e){let{permalink:t,title:n,subLabel:l,isNext:s}=e;return(0,r.jsxs)(i.Z,{className:(0,a.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},101:function(e,t,n){n.d(t,{Z:()=>m});var r=n("5893"),a=n("7294"),i=n("7026"),l=n("140");function s(e){let t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}var o=n("3012");let c=a.memo(function e(t){let{toc:n,className:a,linkClassName:i,isChild:l}=t;return n.length?(0,r.jsx)("ul",{className:l?void 0:a,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(o.Z,{to:`#${t.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:a,linkClassName:i})]},t.id))}):null});function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:d,...m}=e,g=(0,l.L)(),h=u??g.tableOfContents.minHeadingLevel,f=d??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:a}=t;return n.flatMap(t=>{var n;let i=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:a});return(n=t).level>=r&&n.level<=a?[{...t,children:i}]:i})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:f});return!function(e){let t=(0,a.useRef)(void 0),n=function(){let e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,a.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){var e;let o=(e=r,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>s(e).top>=n);if(r){var a;return(a=s(r)).top>0&&a.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),{anchorTopOffset:n.current}),u=o.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===u?(t.current&&t.current!==n&&t.current.classList.remove(a),n.classList.add(a),t.current=n):n.classList.remove(a)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,a.useMemo)(()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:f}},[i,o,h,f])),(0,r.jsx)(c,{toc:p,className:n,linkClassName:i,...m})}let d="tableOfContents_bqdL";function m(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(d,"thin-scrollbar",t),children:(0,r.jsx)(u,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}}}]);