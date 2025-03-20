"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["831"],{6005:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(5893);n(7294);var r=n(6025),l=n(790);function s(e){let{nextItem:t,prevItem:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,i.jsx)(l.Z,{...n,subLabel:(0,i.jsx)(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,i.jsx)(l.Z,{...t,subLabel:(0,i.jsx)(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}},5427:function(e,t,n){n.d(t,{Z:()=>v});var i=n("5893");n("7294");var r=n("7026"),l=n("6025"),s=n("4819");function o(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function u(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var f=n("4681"),h=n("5094");function m(e){let{className:t}=e;return(0,i.jsx)(h.Z,{type:"caution",title:(0,i.jsx)(u,{}),className:(0,r.Z)(t,f.k.common.draftBanner),children:(0,i.jsx)(d,{})})}function b(e){let{className:t}=e;return(0,i.jsx)(h.Z,{type:"caution",title:(0,i.jsx)(o,{}),className:(0,r.Z)(t,f.k.common.unlistedBanner),children:(0,i.jsx)(a,{})})}function p(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(b,{...e})]})}function v(e){let{metadata:t}=e,{unlisted:n,frontMatter:r}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||r.unlisted)&&(0,i.jsx)(p,{}),r.draft&&(0,i.jsx)(m,{})]})}},101:function(e,t,n){n.d(t,{Z:()=>f});var i=n("5893"),r=n("7294"),l=n("7026"),s=n("140");function o(e){let t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}var a=n("3012");let c=r.memo(function e(t){let{toc:n,className:r,linkClassName:l,isChild:s}=t;return n.length?(0,i.jsx)("ul",{className:s?void 0:r,children:n.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(a.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,i.jsx)(e,{isChild:!0,toc:t.children,className:r,linkClassName:l})]},t.id))}):null});function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:d,...f}=e,h=(0,s.L)(),m=u??h.tableOfContents.minHeadingLevel,b=d??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,r.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:i,maxHeadingLevel:r}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:i,maxHeadingLevel:r});return(n=t).level>=i&&n.level<=r?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t});let i=[];return t.forEach(e=>{let{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):i.push(r)}),i}(t),minHeadingLevel:n,maxHeadingLevel:i}),[t,n,i])}({toc:t,minHeadingLevel:m,maxHeadingLevel:b});return!function(e){let t=(0,r.useRef)(void 0),n=function(){let e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,r.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,r.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:s}=e;function a(){var e;let a=(e=i,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,i=e.find(e=>o(e).top>=n);if(i){var r;return(r=o(i)).top>0&&r.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,i=[];for(let e=t;e<=n;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),{anchorTopOffset:n.current}),u=a.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});a.forEach(e=>{var n;n=e,e===u?(t.current&&t.current!==n&&t.current.classList.remove(r),n.classList.add(r),t.current=n):n.classList.remove(r)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,r.useMemo)(()=>{if(l&&a)return{linkClassName:l,linkActiveClassName:a,minHeadingLevel:m,maxHeadingLevel:b}},[l,a,m,b])),(0,i.jsx)(c,{toc:p,className:n,linkClassName:l,...f})}let d="tableOfContents_bqdL";function f(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,l.Z)(d,"thin-scrollbar",t),children:(0,i.jsx)(u,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}}}]);