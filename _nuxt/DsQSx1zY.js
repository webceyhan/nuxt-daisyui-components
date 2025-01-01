import{_ as m,a as p}from"./TtN-NLOd.js";import{g as _,o as c,c as d,l as h,a as t,B as i,z as w,C as g,F as b,r as y,h as a,b as e,w as o,d as l,j as C,n as k,k as B}from"./DI_P1wf-.js";const I={class:"countdown"},L=_({__name:"countdown",props:{value:{}},setup(r){return(s,x)=>(c(),d("span",I,[h(s.$slots,"default",{},()=>[t("span",{style:i({"--value":s.value})},null,4)])]))}}),N=[{name:"countdown",props:[{name:"value",type:"number",description:"Value of the countdown between 0 and 99"}],slots:[{name:"default",description:"Content of the countdown"}]}],S=window.setInterval,V=t("h1",{class:"text-4xl font-bold mb-8"},"Countdown",-1),$=t("p",null,"Countdown gives you a transition effect of changing numbers.",-1),z=t("br",null,null,-1),P=t("span",{style:{"--value":"10"}},null,-1),E=t("span",{style:{"--value":"24"}},null,-1),F=t("span",{style:{"--value":"10"}},null,-1),R=t("span",{style:{"--value":"24"}},null,-1),T={class:"flex gap-5"},j={class:"grid grid-flow-col gap-5 text-center auto-cols-max"},D={class:"flex flex-col"},M={class:"flex flex-col"},O={class:"flex flex-col"},q={class:"flex flex-col"},A={class:"grid grid-flow-col gap-5 text-center auto-cols-max"},G={class:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},H={class:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},J={class:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},K={class:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},X=_({__name:"index",setup(r){const s=w(60);return g(()=>{S(()=>s.value--,1e3)}),(x,Q)=>{const f=p,n=L,u=m;return c(),d("div",null,[V,$,z,(c(!0),d(b,null,y(a(N),v=>(c(),C(f,k(B(v)),null,16))),256)),e(u,null,{title:o(()=>[l("Countdown")]),default:o(()=>[e(n,{value:a(s)},null,8,["value"])]),_:1}),e(u,null,{title:o(()=>[l("Large text")]),default:o(()=>[e(n,{value:a(s),class:"font-mono text-6xl"},null,8,["value"])]),_:1}),e(u,null,{title:o(()=>[l("Clock countdown")]),default:o(()=>[e(n,{class:"font-mono text-2xl"},{default:o(()=>[P,E,l("m "),t("span",{style:i({"--value":a(s)})},null,4),l("s ")]),_:1})]),_:1}),e(u,null,{title:o(()=>[l("Clock countdown with colons")]),default:o(()=>[e(n,{class:"font-mono text-2xl"},{default:o(()=>[F,l(": "),R,l(": "),t("span",{style:i({"--value":a(s)})},null,4)]),_:1})]),_:1}),e(u,null,{title:o(()=>[l("Large text with labels")]),default:o(()=>[t("div",T,[t("div",null,[e(n,{value:15,class:"font-mono text-4xl"}),l("days")]),t("div",null,[e(n,{value:10,class:"font-mono text-4xl"}),l("hours")]),t("div",null,[e(n,{value:24,class:"font-mono text-4xl"}),l("min")]),t("div",null,[e(n,{value:a(s),class:"font-mono text-4xl"},null,8,["value"]),l("sec")])])]),_:1}),e(u,null,{title:o(()=>[l("Large text with labels under")]),default:o(()=>[t("div",j,[t("div",D,[e(n,{value:15,class:"font-mono text-4xl"}),l("days ")]),t("div",M,[e(n,{value:10,class:"font-mono text-4xl"}),l("hours ")]),t("div",O,[e(n,{value:24,class:"font-mono text-4xl"}),l("min ")]),t("div",q,[e(n,{value:a(s),class:"font-mono text-4xl"},null,8,["value"]),l("sec ")])])]),_:1}),e(u,null,{title:o(()=>[l("In boxes")]),default:o(()=>[t("div",A,[t("div",G,[e(n,{value:15,class:"font-mono text-5xl"}),l("days ")]),t("div",H,[e(n,{value:10,class:"font-mono text-5xl"}),l("hours ")]),t("div",J,[e(n,{value:24,class:"font-mono text-5xl"}),l("min ")]),t("div",K,[e(n,{value:a(s),class:"font-mono text-5xl"},null,8,["value"]),l("sec ")])])]),_:1})])}}});export{X as default};