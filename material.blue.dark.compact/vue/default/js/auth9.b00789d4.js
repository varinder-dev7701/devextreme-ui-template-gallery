"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8249],{53718:function(a,e,t){t.r(e),t.d(e,{default:function(){return p}});var i=t(73396),o=t(44870),s=t(69119),n=t(26898),d=t.n(n);const l={id:"card-tasks"};var r=(0,i.aZ)({__name:"card-tasks",props:{isLoading:{type:Boolean,default:!0},manager:{default:""},tasks:{default:()=>[]}},setup(a){const e=a,t=(0,o.iH)([]);(0,i.YP)((()=>e.tasks),(a=>{t.value=a}));const n=(0,i.Fl)((()=>t.value.filter((a=>!!a.status&&!!a.priority)))),r=a=>{const e=a.component.getVisibleRows(),i=t.value.indexOf(e[a.toIndex].data),o=t.value.indexOf(a.itemData);t.value.splice(o,1),t.value.splice(i,0,a.itemData)};return(a,t)=>((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)((0,o.SU)(d()),{visible:e.isLoading,"show-pane":!1,width:"auto",container:"#card-tasks",position:{of:"#card-tasks"}},null,8,["visible"]),e.isLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)((0,o.SU)(s.DxDataGrid),{key:0,class:"grid-tasks","data-source":(0,o.SU)(n),"column-auto-width":!0},{default:(0,i.w5)((()=>[(0,i.Wm)((0,o.SU)(s.DxSelection),{"show-check-boxes-mode":"always",mode:"multiple"}),(0,i.Wm)((0,o.SU)(s.DxRowDragging),{"allow-reordering":!0,"on-reorder":r,"show-drag-icons":!0}),(0,i.Wm)((0,o.SU)(s.DxColumn),{"data-field":"text",caption:"Subject","hiding-priority":3}),(0,i.Wm)((0,o.SU)(s.DxColumn),{"data-field":"date","data-type":"date",caption:"Due Date","hiding-priority":1}),(0,i.Wm)((0,o.SU)(s.DxColumn),{caption:"Assigned To","data-field":"manager","hiding-priority":0})])),_:1},8,["data-source"]))]))}}),u=t(40089);const c=(0,u.Z)(r,[["__scopeId","data-v-541ce94f"]]);var p=c}}]);