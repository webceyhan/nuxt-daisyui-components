import{_ as b,a as x}from"./TtN-NLOd.js";import{x as l,g,o,c as _,F as p,r as f,h as w,b as t,w as e,d as s,a as n,s as B,j as D,n as k,k as y,t as A}from"./DI_P1wf-.js";const C={setup(h,{slots:d}){return()=>l("div",{class:["breadcrumbs"]},l("ul",null,d.default().map(a=>Array.isArray(a.children)?a.children.map(r=>l("li",null,r)):l("li",null,a))))}},N=[{name:"breadcrumbs",slots:[{name:"default",description:"Content of breadcrumbs"}]}],v=n("h1",{class:"text-4xl font-bold mb-8"},"Breadcrumbs",-1),I=n("p",null,"Breadcrumbs helps users to navigate through the website.",-1),P=n("a",null,"Home",-1),S=n("a",null,"Documents",-1),V=n("span",null,"Add Document",-1),F=g({__name:"index",setup(h){return(d,a)=>{const r=x,c=C,u=b,i=B;return o(),_("div",null,[v,I,(o(!0),_(p,null,f(w(N),m=>(o(),D(r,k(y(m)),null,16))),256)),t(u,null,{title:e(()=>[s("Breadcrumbs")]),default:e(()=>[t(c,null,{default:e(()=>[P,S,V]),_:1})]),_:1}),t(u,null,{title:e(()=>[s("With icons")]),default:e(()=>[t(c,null,{default:e(()=>[n("a",null,[t(i,{name:"folder",class:"me-2"}),s(" Home ")]),n("a",null,[t(i,{name:"folder",class:"me-2"}),s(" Documents ")]),n("span",null,[t(i,{name:"file-plus",class:"me-2"}),s(" Add Document ")])]),_:1})]),_:1}),t(u,null,{title:e(()=>[s("With max-width")]),description:e(()=>[s(" If you set max-width or the list gets larger than the container it will scroll ")]),default:e(()=>[t(c,{class:"max-w-xs text-sm"},{default:e(()=>[(o(),_(p,null,f(5,m=>n("span",null,"Long text "+A(m),1)),64))]),_:1})]),_:1})])}}});export{F as default};