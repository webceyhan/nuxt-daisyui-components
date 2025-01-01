import{_ as S,a as w}from"./TtN-NLOd.js";import{_ as y}from"./CMt-RREQ.js";import{_ as z}from"./DABqMzWP.js";import{a as V,c as g}from"./D5LaGP6z.js";import{g as $,z as h,o as l,c as a,F as r,r as i,h as n,b as o,w as t,d as m,a as u,t as b,j as v,n as C,k as B,A as x}from"./DI_P1wf-.js";const N=[{name:"radio",props:[{name:"modelValue",type:"string",description:"Value of the radio button"},{name:"size",type:"string",default:"md",values:V},{name:"color",type:"string",values:g},{name:"checked",type:"boolean",description:"Whether the radio button is checked or not"},{name:"disabled",type:"boolean",description:"Whether the radio button is disabled or not"}]}],D=u("h1",{class:"text-4xl font-bold mb-8"},"Radio",-1),E=u("p",null,"Radio buttons allow the user to select one option from a set.",-1),I={class:"flex flex-col w-52"},O={class:"p-10"},P={class:"flex flex-col items-center gap-2"},W={class:"p-10"},F={class:"flex flex-col items-center gap-2"},H=$({__name:"index",setup(L){const _=h("md"),p=h("red");return(T,f)=>{const k=w,d=y,c=S,R=z;return l(),a("div",null,[D,E,(l(!0),a(r,null,i(n(N),e=>(l(),v(k,C(B(e)),null,16))),256)),o(c,null,{title:t(()=>[m("Radio")]),default:t(()=>[(l(),a(r,null,i([!0,!1],(e,s)=>o(d,{name:"radio-flags",checked:e},null,8,["checked"])),64))]),_:1}),o(c,null,{title:t(()=>[m("With form-control")]),default:t(()=>[u("div",I,[(l(),a(r,null,i(2,e=>o(R,{label:`label ${e}`,inline:""},{default:t(()=>[o(d,{name:"radio-with-label",value:`${e}`,modelValue:n(p),"onUpdate:modelValue":f[0]||(f[0]=s=>x(p)?p.value=s:null)},null,8,["value","modelValue"])]),_:2},1032,["label"])),64))]),u("p",O,b(n(p)),1)]),_:1}),o(c,null,{title:t(()=>[m(" Sizes")]),default:t(()=>[u("div",P,[(l(!0),a(r,null,i(n(V),e=>(l(),v(d,{name:"radio-sizes",size:e,value:e,modelValue:n(_),"onUpdate:modelValue":f[1]||(f[1]=s=>x(_)?_.value=s:null)},null,8,["size","value","modelValue"]))),256))]),u("p",W,b(n(_)),1)]),_:1}),o(c,null,{title:t(()=>[m(" Colors ")]),default:t(()=>[(l(!0),a(r,null,i(n(g),e=>(l(),a("div",F,[(l(),a(r,null,i([!0,!1],(s,U)=>o(d,{name:`radio-${e}`,checked:s,color:e},null,8,["name","checked","color"])),64))]))),256))]),_:1}),o(c,null,{title:t(()=>[m("Disabled")]),default:t(()=>[o(d,{disabled:""})]),_:1})])}}});export{H as default};