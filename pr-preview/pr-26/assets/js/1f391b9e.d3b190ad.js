"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([["2493"],{5133:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(5893);t(7294);var i=t(7026),l=t(202),a=t(4681),s=t(5094);function c(e){let{className:n}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.cI,{}),className:(0,i.Z)(n,a.k.common.unlistedBanner),children:(0,r.jsx)(l.eU,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.T$,{}),(0,r.jsx)(c,{...e})]})}},8813:function(e,n,t){t.d(n,{Z:()=>d});var r=t("5893");t("7294");var i=t("7026"),l=t("202"),a=t("4681"),s=t("5094");function c(e){let{className:n}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,i.Z)(n,a.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var o=t("5133");function d(e){let{metadata:n}=e,{unlisted:t,frontMatter:i}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||i.unlisted)&&(0,r.jsx)(o.Z,{}),i.draft&&(0,r.jsx)(c,{})]})}},8402:function(e,n,t){t.r(n),t.d(n,{default:()=>m});var r=t("5893");t("7294");var i=t("7026"),l=t("2743"),a=t("4681"),s=t("3379"),c=t("5504"),o=t("101"),d=t("8813"),u=t("9230");let f="mdxPageWrapper_j9I6";function m(e){let{content:n}=e,{metadata:t,assets:m}=n,{title:h,editUrl:x,description:v,frontMatter:g,lastUpdatedBy:j,lastUpdatedAt:p}=t,{keywords:b,wrapperClassName:Z,hide_table_of_contents:_}=g,N=m.image??g.image,k=!!(x||p||j);return(0,r.jsx)(l.FG,{className:(0,i.Z)(Z??a.k.wrapper.mdxPages,a.k.page.mdxPage),children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.d,{title:h,description:v,keywords:b,image:N}),(0,r.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,r.jsxs)("div",{className:(0,i.Z)("row",f),children:[(0,r.jsxs)("div",{className:(0,i.Z)("col",!_&&"col--8"),children:[(0,r.jsx)(d.Z,{metadata:t}),(0,r.jsx)("article",{children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(n,{})})}),k&&(0,r.jsx)(u.Z,{className:(0,i.Z)("margin-top--sm",a.k.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:p,lastUpdatedBy:j})]}),!_&&n.toc.length>0&&(0,r.jsx)("div",{className:"col col--2",children:(0,r.jsx)(o.Z,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},101:function(e,n,t){t.d(n,{Z:()=>f});var r=t("5893"),i=t("7294"),l=t("7026"),a=t("140");function s(e){let n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}var c=t("3012");let o=i.memo(function e(n){let{toc:t,className:i,linkClassName:l,isChild:a}=n;return t.length?(0,r.jsx)("ul",{className:a?void 0:i,children:t.map(n=>(0,r.jsxs)("li",{children:[(0,r.jsx)(c.Z,{to:`#${n.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,r.jsx)(e,{isChild:!0,toc:n.children,className:i,linkClassName:l})]},n.id))}):null});function d(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...f}=e,m=(0,a.L)(),h=d??m.tableOfContents.minHeadingLevel,x=u??m.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(n){let{toc:t,minHeadingLevel:r,maxHeadingLevel:i}=n;return t.flatMap(n=>{var t;let l=e({toc:n.children,minHeadingLevel:r,maxHeadingLevel:i});return(t=n).level>=r&&t.level<=i?[{...n,children:l}]:l})})({toc:function(e){let n=e.map(e=>({...e,parentIndex:-1,children:[]})),t=Array(7).fill(-1);n.forEach((e,n)=>{let r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n});let r=[];return n.forEach(e=>{let{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):r.push(i)}),r}(n),minHeadingLevel:t,maxHeadingLevel:r}),[n,t,r])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return!function(e){let n=(0,i.useRef)(void 0),t=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:a}=e;function c(){var e;let c=(e=r,Array.from(document.getElementsByClassName(e))),o=function(e,n){let{anchorTopOffset:t}=n,r=e.find(e=>s(e).top>=t);if(r){var i;return(i=s(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e,r=[];for(let e=n;e<=t;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:t.current}),d=c.find(e=>{var n;return o&&o.id===decodeURIComponent((n=e).href.substring(n.href.indexOf("#")+1))});c.forEach(e=>{var t;t=e,e===d?(n.current&&n.current!==t&&n.current.classList.remove(i),t.classList.add(i),n.current=t):t.classList.remove(i)})}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}},[e,t])}((0,i.useMemo)(()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:x}},[l,c,h,x])),(0,r.jsx)(o,{toc:v,className:t,linkClassName:l,...f})}let u="tableOfContents_bqdL";function f(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,l.Z)(u,"thin-scrollbar",n),children:(0,r.jsx)(d,{...t,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},202:function(e,n,t){t.d(n,{T$:function(){return c},cI:function(){return a},eU:function(){return s},ht:function(){return o},xo:function(){return d}});var r=t(5893);t(7294);var i=t(6025),l=t(4819);function a(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},1437:function(e,n,t){t.d(n,{P:function(){return i}});var r=t(2933);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:n}}=(0,r.Z)(),t=function(){let{i18n:{currentLocale:e,localeConfigs:n}}=(0,r.Z)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}}}]);