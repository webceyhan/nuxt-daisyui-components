import{_ as w,a as x}from"./TtN-NLOd.js";import{g as m,o as n,c as a,l as h,m as b,F as s,r as c,h as R,b as l,w as e,d as o,a as v,j as $,n as k,k as z,t as _}from"./DI_P1wf-.js";import{C as B}from"./D5LaGP6z.js";const N=m({__name:"step",props:{color:{}},setup(f){return(r,d)=>(n(),a("li",{class:b(["step",{[`step-${r.color}`]:r.color}])},[h(r.$slots,"default")],2))}}),P=m({__name:"step-group",props:{vertical:{type:Boolean}},setup(f){return(r,d)=>(n(),a("ul",{class:b(["steps",{"steps-vertical":r.vertical}])},[h(r.$slots,"default")],2))}}),W=[{name:"step-group",props:[{name:"vertical",type:"boolean",description:"Display steps vertically"}],slots:[{name:"default",description:"Content of the steps"}]},{name:"step",props:[{name:"color",type:"string",values:B}],slots:[{name:"default",description:"Content of the step"}]}],T=v("h1",{class:"text-4xl font-bold mb-8"},"Steps",-1),V=v("p",null,"Steps can be used to show a list of steps in a process.",-1),O=m({__name:"index",setup(f){const r=[{label:"Register",color:"primary"},{label:"Choose plan",color:"primary"},{label:"Purchase"},{label:"Receive Product"}],d=["?","!","✓","x","*","","●"],C=[{label:"Fly to moon",color:"info"},{label:"Shrink the moon",color:"info"},{label:"Grab the moon",color:"info"},{label:"Sit on toilet",color:"error",content:"?"}],g={2:"secondary",3:"secondary",4:"secondary",6:"accent",7:"accent",9:"error",10:"error",13:"warning",14:"warning",16:"neutral",17:"neutral",18:"neutral",19:"neutral",20:"neutral",21:"neutral",22:"neutral",23:"neutral",24:"neutral"};return(D,E)=>{const y=x,u=N,p=P,i=w;return n(),a("div",null,[T,V,(n(!0),a(s,null,c(R(W),t=>(n(),$(y,k(z(t)),null,16))),256)),l(i,null,{title:e(()=>[o("Horizontal")]),default:e(()=>[l(p,null,{default:e(()=>[(n(),a(s,null,c(r,t=>l(u,{color:t.color},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1}),l(i,null,{title:e(()=>[o("Vertical")]),default:e(()=>[l(p,{vertical:""},{default:e(()=>[(n(),a(s,null,c(r,t=>l(u,{color:t.color},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1}),l(i,null,{title:e(()=>[o(" responsive (vertical on small screen, horizontal on large screen) ")]),default:e(()=>[l(p,{class:"lg:steps-horizontal",vertical:""},{default:e(()=>[(n(),a(s,null,c(r,t=>l(u,{color:t.color},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1}),l(i,null,{title:e(()=>[o("With data-content")]),default:e(()=>[l(p,null,{default:e(()=>[(n(),a(s,null,c(d,(t,S)=>l(u,{"data-content":t,color:"neutral"},{default:e(()=>[o(" Step "+_(S),1)]),_:2},1032,["data-content"])),64))]),_:1})]),_:1}),l(i,null,{title:e(()=>[o("Custom colors")]),default:e(()=>[l(p,null,{default:e(()=>[(n(),a(s,null,c(C,t=>l(u,{"data-content":t.content,color:t.color},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["data-content","color"])),64))]),_:1})]),_:1}),l(i,null,{title:e(()=>[o("With scrollable wrapper")]),default:e(()=>[l(p,null,{default:e(()=>[(n(),a(s,null,c(24,t=>l(u,{color:g[t]},{default:e(()=>[o(_(t==1?"start":t==24?"end":t),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1})])}}});export{O as default};