"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[2555],{5325:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var l=a(94271),s=a(26823),u=a(52287),o=a(68623),d=a(82632),n=a(87702);const i={class:"status-editor-field"};var r=(0,l.pM)({__name:"status-select-box",props:{modelValue:{default:""},items:{},readOnly:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},labelMode:{default:""},stylingMode:{default:""},classList:{default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=t;function r(e){a("update:modelValue",e.value)}return(e,t)=>((0,l.uX)(),(0,l.Wv)((0,s.R1)(o.ad),{label:"Status",value:e.modelValue,class:(0,u.C4)(e.classList),onValueChanged:r,items:e.items,"read-only":e.readOnly,"styling-mode":e.stylingMode,"label-mode":e.labelMode,width:"100%","field-template":"field"},{field:(0,l.k6)((({data:e})=>[(0,l.Lk)("div",i,[(0,l.bF)(n.A,{class:"status-indicator","show-text":!1,value:e},null,8,["value"]),(0,l.bF)((0,s.R1)(d.HA),{class:"status-{{data.toLowerCase()}}","hover-state-enabled":!1,"input-attr":{class:`status-editor-input contact-status status-${e?.toLowerCase()}`},"read-only":!0,value:e},null,8,["input-attr","value"])])])),item:(0,l.k6)((({data:e})=>[(0,l.bF)(n.A,{value:e},null,8,["value"])])),_:1},8,["value","class","items","read-only","styling-mode","label-mode"]))}}),c=a(56132);const p=(0,c.A)(r,[["__scopeId","data-v-203e2830"]]);var v=p},87702:function(e,t,a){a.d(t,{A:function(){return n}});var l=a(94271),s=a(52287),u=(0,l.pM)({__name:"contact-status",props:{value:{},showText:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,l.uX)(),(0,l.CE)("span",{class:(0,s.C4)("status contact-status status-"+t.value?.toLowerCase())},(0,s.v_)(t.showText?t.value:""),3))}}),o=a(56132);const d=(0,o.A)(u,[["__scopeId","data-v-3568e1f6"]]);var n=d}}]);