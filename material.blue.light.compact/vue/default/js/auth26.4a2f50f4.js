"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[42,4286],{99660:function(t,a,e){e.d(a,{CN:function(){return n},T4:function(){return s},p6:function(){return c}});var r=e(23142);function n(t){return String(t).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(t,a){return(0,r.uf)(t,{type:"currency",precision:a||0,currency:"USD"})}function c(t){return(0,r.p6)(new Date(t),"MM/dd/yyyy")}},67557:function(t,a,e){e.r(a),e.d(a,{default:function(){return C}});var r=e(73396),n=e(87139),s=e(44870),c=e(53898),d=e(6224),o=e(99660),i=e(2009),u=e(62103);const l=t=>((0,r.dD)("data-v-3b4f6f3c"),t=t(),(0,r.Cn)(),t),p=l((()=>(0,r._)("div",{class:"card-priority"},null,-1))),f={class:"card-content"},_={class:"card-subject dx-theme-text-color"},v={class:"card-data"},k={class:"priority"},y={class:"date dx-theme-text-color"},m={class:"card-assignee"},w={class:"company dx-theme-text-color"};var x=(0,r.aZ)({__name:"task-kanban-card",props:{task:{default:()=>null}},setup(t){const a=t,e=t=>t.split(" ").map((t=>t[0])).join(""),l=t=>{t.event.stopPropagation(),(0,c.Z)(`Edit '${a.task?.text}' card event`)},x=()=>{i.N.push("/planning-task-details")};return(a,c)=>((0,r.wg)(),(0,r.iD)("div",{class:"card dx-theme-text-color dx-theme-background-color",onClick:c[0]||(c[0]=t=>x())},[(0,r._)("div",{class:(0,n.C_)(["card-wrapper",`priority-${t.task.priority.toLowerCase()}`])},[p,(0,r.Wm)((0,s.SU)(d.DxButton),{icon:"edit",onClick:l}),(0,r._)("div",f,[(0,r._)("div",_,(0,n.zw)(t.task.text),1),(0,r._)("div",v,[(0,r._)("span",k,(0,n.zw)(t.task.priority),1),(0,r._)("span",y,(0,n.zw)((0,s.SU)(o.p6)(t.task.dueDate)),1)]),(0,r._)("div",m,[(0,r._)("span",w,(0,n.zw)(t.task.company),1),(0,r.Wm)(u["default"],{"data-letters":e(t.task.owner)},null,8,["data-letters"])])])],2)]))}}),g=e(40089);const h=(0,g.Z)(x,[["__scopeId","data-v-3b4f6f3c"]]);var C=h},62103:function(t,a,e){e.r(a),e.d(a,{default:function(){return o}});var r=e(73396);const n=["data-letters"];var s=(0,r.aZ)({__name:"user-avatar",props:{dataLetters:{default:()=>""}},setup(t){const a=t;return(t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"circle","data-letters":a.dataLetters},null,8,n))}}),c=e(40089);const d=(0,c.Z)(s,[["__scopeId","data-v-f25ec79c"]]);var o=d}}]);