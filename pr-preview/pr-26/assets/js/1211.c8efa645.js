"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["1211"],{6005:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);var i=n(6025),l=n(790);function o(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(l.Z,{...n,subLabel:(0,r.jsx)(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(l.Z,{...t,subLabel:(0,r.jsx)(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}},5133:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5893);n(7294);var i=n(7026),l=n(202),o=n(4681),s=n(5094);function a(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.cI,{}),className:(0,i.Z)(t,o.k.common.unlistedBanner),children:(0,r.jsx)(l.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.T$,{}),(0,r.jsx)(a,{...e})]})}},8813:function(e,t,n){n.d(t,{Z:()=>u});var r=n("5893");n("7294");var i=n("7026"),l=n("202"),o=n("4681"),s=n("5094");function a(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,i.Z)(t,o.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var c=n("5133");function u(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.Z,{}),i.draft&&(0,r.jsx)(a,{})]})}},101:function(e,t,n){n.d(t,{Z:()=>f});var r=n("5893"),i=n("7294"),l=n("7026"),o=n("140");function s(e){let t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}var a=n("3012");let c=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:o}=t;return n.length?(0,r.jsx)("ul",{className:o?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(a.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:d,...f}=e,h=(0,o.L)(),m=u??h.tableOfContents.minHeadingLevel,b=d??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return(n=t).level>=r&&n.level<=i?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:m,maxHeadingLevel:b});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:o}=e;function a(){var e;let a=(e=r,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>s(e).top>=n);if(r){var i;return(i=s(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),{anchorTopOffset:n.current}),u=a.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});a.forEach(e=>{var n;n=e,e===u?(t.current&&t.current!==n&&t.current.classList.remove(i),n.classList.add(i),t.current=n):n.classList.remove(i)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,i.useMemo)(()=>{if(l&&a)return{linkClassName:l,linkActiveClassName:a,minHeadingLevel:m,maxHeadingLevel:b}},[l,a,m,b])),(0,r.jsx)(c,{toc:v,className:n,linkClassName:l,...f})}let d="tableOfContents_bqdL";function f(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.Z)(d,"thin-scrollbar",t),children:(0,r.jsx)(u,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},202:function(e,t,n){n.d(t,{T$:function(){return a},cI:function(){return o},eU:function(){return s},ht:function(){return c},xo:function(){return u}});var r=n(5893);n(7294);var i=n(6025),l=n(4819);function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function a(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);