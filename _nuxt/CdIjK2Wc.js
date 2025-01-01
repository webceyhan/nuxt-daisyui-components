import{_ as w,a as z}from"./TtN-NLOd.js";import{g as m,o as s,c as d,l as y,m as C,F as c,r as _,h as u,b as l,w as e,d as o,a as t,j as f,n as N,k as O,t as p}from"./DI_P1wf-.js";import{c as v,A as h}from"./D5LaGP6z.js";const R=m({__name:"divider",props:{color:{},alignment:{},horizontal:{type:Boolean}},setup(g){return(i,b)=>(s(),d("div",{class:C(["divider",{[`divider-${i.color}`]:i.color,[`divider-${i.alignment}`]:i.alignment,"divider-horizontal":i.horizontal}])},[y(i.$slots,"default")],2))}}),S=[{name:"divider",props:[{name:"color",type:"string",values:v},{name:"alignment",type:"string",values:h},{name:"horizontal",type:"boolean",description:"Whether the divider is horizontal or vertical"}],slots:[{name:"default",description:"Content of button"}]}],B=t("h1",{class:"text-4xl font-bold mb-8"},"Divider",-1),D=t("p",null,"Divider will be used to separate content vertically or horizontally.",-1),T={class:"flex flex-col w-full border-opacity-50"},$=t("div",{class:"grid h-20 card bg-base-300 rounded-box place-items-center"}," content ",-1),k=t("div",{class:"grid h-20 card bg-base-300 rounded-box place-items-center"}," content ",-1),A={class:"flex flex-col w-full"},E={class:"flex flex-col w-full"},I={class:"flex w-full"},L=t("div",{class:"grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"}," content ",-1),P=t("div",{class:"grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"}," content ",-1),V={class:"flex w-full justify-center h-52"},j={class:"flex flex-col w-full border-opacity-50"},F=t("div",{class:"grid h-20 card bg-base-300 rounded-box place-items-center"}," content ",-1),H=t("div",{class:"grid h-20 card bg-base-300 rounded-box place-items-center"}," content ",-1),W={class:"flex flex-col w-full lg:flex-row"},G=t("div",{class:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"}," content ",-1),M=t("div",{class:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"}," content ",-1),Q=m({__name:"index",setup(g){return(i,b)=>{const x=z,r=R,a=w;return s(),d("div",null,[B,D,(s(!0),d(c,null,_(u(S),n=>(s(),f(x,N(O(n)),null,16))),256)),l(a,null,{title:e(()=>[o("Divider ")]),default:e(()=>[t("div",T,[$,l(r,null,{default:e(()=>[o("OR")]),_:1}),k])]),_:1}),l(a,null,{title:e(()=>[o(" Colors ")]),default:e(()=>[t("div",A,[(s(!0),d(c,null,_(u(v),n=>(s(),f(r,{color:n},{default:e(()=>[o(p(n),1)]),_:2},1032,["color"]))),256))])]),_:1}),l(a,null,{title:e(()=>[o(" Text Alignments ")]),default:e(()=>[t("div",E,[(s(!0),d(c,null,_(u(h),n=>(s(),f(r,{alignment:n},{default:e(()=>[o(p(n),1)]),_:2},1032,["alignment"]))),256))])]),_:1}),l(a,null,{title:e(()=>[o("Horizontal")]),default:e(()=>[t("div",I,[L,l(r,{horizontal:""},{default:e(()=>[o("OR")]),_:1}),P])]),_:1}),l(a,null,{title:e(()=>[o("Horizontal Text Alignments")]),default:e(()=>[t("div",V,[(s(!0),d(c,null,_(u(h),n=>(s(),f(r,{alignment:n,horizontal:""},{default:e(()=>[o(p(n),1)]),_:2},1032,["alignment"]))),256))])]),_:1}),l(a,null,{title:e(()=>[o("With no text")]),default:e(()=>[t("div",j,[F,l(r),H])]),_:1}),l(a,null,{title:e(()=>[o("responsive (lg:divider-horizontal)")]),default:e(()=>[t("div",W,[G,l(r,{class:"lg:divider-horizontal"},{default:e(()=>[o("OR")]),_:1}),M])]),_:1})])}}});export{Q as default};