import{_ as b,a as B}from"./TtN-NLOd.js";import{g as h,o as a,c as n,l as S,m as v,y as C,F as m,r as _,h as f,b as s,w as e,d as c,a as l,j as u,n as x,k as D,t as H}from"./DI_P1wf-.js";import{M as d}from"./D5LaGP6z.js";const M=h({__name:"mask",props:{shape:{default:"squircle"},firstHalf:{type:Boolean},lastHalf:{type:Boolean}},setup(k){return(t,y)=>(a(),n("div",{class:v(["mask",{[`mask-${t.shape}`]:t.shape,"mask-half-1":t.firstHalf,"mask-half-2":t.lastHalf}])},[S(t.$slots,"default")],2))}}),p=C("/img/heart.jpg"),N=[{name:"mask",props:[{name:"shape",type:"string",default:"squircle",values:d},{name:"first-half",type:"boolean",description:"Display only the first half of the mask"},{name:"last-half",type:"boolean",description:"Display only the last half of the mask"}],slots:[{name:"default",description:"Content of the mask"}]}],$=l("h1",{class:"text-4xl font-bold mb-8"},"Mask",-1),w=l("p",null,"Mask crops the content of the element to common shapes.",-1),F=l("img",{src:p,alt:"heart"},null,-1),L=l("img",{src:p,alt:"heart"},null,-1),P=l("img",{src:p,alt:"heart"},null,-1),q=h({__name:"index",setup(k){return(t,y)=>{const g=B,r=M,i=b;return a(),n("div",null,[$,w,(a(!0),n(m,null,_(f(N),o=>(a(),u(g,x(D(o)),null,16))),256)),(a(!0),n(m,null,_(f(d),o=>(a(),u(i,null,{title:e(()=>[c(H(o),1)]),default:e(()=>[s(r,{shape:o},{default:e(()=>[F]),_:2},1032,["shape"])]),_:2},1024))),256)),s(i,null,{title:e(()=>[c("First half")]),default:e(()=>[s(r,{shape:"circle","first-half":""},{default:e(()=>[L]),_:1})]),_:1}),s(i,null,{title:e(()=>[c("Last half")]),default:e(()=>[s(r,{shape:"circle","last-half":""},{default:e(()=>[P]),_:1})]),_:1})])}}});export{q as default};