import{o as l,b as c,t as f,n as S,f as V,e as t,h,p as B,i as z,j as i,k as C,l as w,m as _,v as p,F as x,q as j,u as T,s as k}from"./vendor.7209080c.js";import{_ as g}from"./index.04b633ed.js";const U={props:{job:Object},setup(n){return(u,o)=>(l(),c("div",{class:S([n.job.color,"job"])},f(n.job.name),3))}};var A=g(U,[["__scopeId","data-v-2917a837"]]);const M=n=>(B("data-v-3a1bbca5"),n=n(),z(),n),O={class:"item"},D=M(()=>t("i",{class:"far fa-trash-alt"},null,-1)),H=[D],q={props:{text:String,index:Number},emits:["remove"],setup(n){return(u,o)=>(l(),c("div",O,[V(f(n.text)+" ",1),t("button",{class:"clear-btn",onClick:o[0]||(o[0]=h(v=>u.$emit("remove",n.index),["prevent"]))},H)]))}};var E=g(q,[["__scopeId","data-v-3a1bbca5"]]);const L={class:"container"},P=t("h1",null,"Jenkins",-1),R={key:0,class:"error"},G={class:"field"},K=t("label",null,"Hostname: ",-1),Q={class:"field"},W=t("label",null,"Nutzername: ",-1),X={class:"field"},Y=t("label",null,"API-Token: ",-1),Z={class:"field"},ee=t("label",null,"Filter: ",-1),te={class:"filter"},se={class:"jobs"},le={setup(n){const u=i([]),o=i(""),v=i(""),m=i(""),b=i(""),r=i(""),d=i([]),y=C(()=>J());function $(){const a=btoa(`${m.value}:${b.value}`);fetch(`${v.value}/api/json?tree=jobs[name,color]`,{method:"get",headers:{Accept:"application/json",Authorization:`Basic ${a}`}}).then(o.value="").then(e=>e.json()).then(e=>JSON.stringify(e)).then(e=>JSON.parse(e)).then(e=>e.jobs).then(e=>u.value=e).catch(e=>o.value=e)}function J(){return d.value.length>0?u.value.filter(a=>d.value.filter(e=>a.name.includes(e)).length>0):u.value}function I(){r.value&&!d.value.includes(r.value)&&(d.value.push(r.value),r.value="")}function F(a){console.log(a),d.value.splice(a,1)}return(a,e)=>(l(),c("div",L,[P,o.value?(l(),c("div",R,f(o.value),1)):w("",!0),t("form",null,[t("div",G,[K,_(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>v.value=s)},null,512),[[p,v.value]])]),t("div",Q,[W,_(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>m.value=s)},null,512),[[p,m.value]])]),t("div",X,[Y,_(t("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=s=>b.value=s)},null,512),[[p,b.value]])]),t("div",Z,[ee,_(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=s=>r.value=s)},null,512),[[p,r.value]]),t("button",{onClick:e[4]||(e[4]=h(s=>I(),["prevent"]))},"Hinzuf\xFCgen")]),t("div",te,[(l(!0),c(x,null,j(d.value,(s,N)=>(l(),k(E,{text:s,index:N,onRemove:F},null,8,["text","index"]))),256))]),t("button",{class:"load-btn",onClick:e[5]||(e[5]=h(s=>$(),["prevent"]))},"Jobs laden")]),t("div",se,[(l(!0),c(x,null,j(T(y),s=>(l(),k(A,{job:s},null,8,["job"]))),256))])]))}};export{le as default};