"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4582,9946],{99660:function(n,t,e){e.d(t,{CN:function(){return u},T4:function(){return r},p6:function(){return l}});var a=e(23142);function u(n){return String(n).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function r(n,t){return(0,a.uf)(n,{type:"currency",precision:t||0,currency:"USD"})}function l(n){return(0,a.p6)(new Date(n),"MM/dd/yyyy")}},23142:function(n,t,e){e.d(t,{p6:function(){return i},uf:function(){return c}});var a=e(70326),u=e(19231),r=e(74933),l=e(93140),c=(e(31490),a.Z.locale.bind(a.Z),u.Z.load.bind(u.Z),u.Z.format.bind(u.Z),r.Z.format.bind(r.Z)),i=(r.Z.parse.bind(r.Z),l.Z.format.bind(l.Z));l.Z.parse.bind(l.Z)},57361:function(n,t,e){e.d(t,{T:function(){return l},m:function(){return r}});var a=e(79264),u=e(56901),r=function(n){if((0,u.Ym)())return(0,a.Y_)(n)},l=function(n){return null===n&&(n=void 0),"function"===typeof n&&(n=n()),n}},71936:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var a=e(73396),u=e(87139),r=e(44870),l=e(99660),c=e(70870);const i={class:"total"},o={key:0,class:"percentage"};var d=(0,a.aZ)({__name:"analytic-tile",props:{data:{default:null},total:{default:null},percentage:null},setup(n){const t=n,e=(0,a.Fl)((()=>(t.data||[]).reduce(((n,{value:t,total:e})=>n+(t||e||0)),0)));return(n,d)=>((0,a.wg)(),(0,a.j4)(c["default"],{class:"tile",title:"props.title","show-data":null!==t.data||null!==t.total},{default:(0,a.w5)((()=>[(0,a._)("div",i,(0,u.zw)(null===t.total?(0,r.SU)(l.T4)((0,r.SU)(e)):t.total),1),0!==t.percentage?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("i",{class:(0,u.C_)(["dx-icon-"+(t.percentage>0?"spinup":"spindown")])},null,2),(0,a._)("span",null,(0,u.zw)(Math.abs(t.percentage))+"%",1)])):(0,a.kq)("",!0)])),_:1},8,["show-data"]))}}),f=e(40089);const p=(0,f.Z)(d,[["__scopeId","data-v-35adc28c"]]);var s=p}}]);