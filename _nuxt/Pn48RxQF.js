import{g as l,o,c as a,l as n,v as s,m as r}from"./DI_P1wf-.js";const t={key:0,class:"indicator-item"},d=l({__name:"avatar",props:{online:{type:Boolean},offline:{type:Boolean},placeholder:{type:Boolean}},setup(i){return(e,p)=>(o(),a("div",{class:r(["avatar",{online:e.online,offline:e.offline,placeholder:e.placeholder,indicator:!!e.$slots.indicator}])},[e.$slots.indicator?(o(),a("span",t,[n(e.$slots,"indicator")])):s("",!0),n(e.$slots,"default")],2))}});export{d as _};