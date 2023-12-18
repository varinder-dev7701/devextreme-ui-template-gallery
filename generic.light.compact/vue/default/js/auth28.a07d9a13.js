"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[3045,563],{45440:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var l=t(49256),i=t(64701),o=t(47919),n=t(47250),s=(0,l.aZ)({__name:"status-indicator",props:{value:{default:""},showBar:{type:Boolean,default:!1},isField:{type:Boolean,default:!1}},setup(e){const a=e,t=(0,l.Fl)((()=>a.value.replace(/\s+/g,"-").toLowerCase()));function s(){return(a.showBar?"| ":"")+a.value}return(e,d)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,i.C_)([[{"input-with-bar":a.showBar},"status-indicator-"+t.value],"status status-indicator"])},[a.isField?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",{key:0,class:(0,i.C_)(["status-indicator-"+t.value])},(0,i.zw)(s()),3)),a.isField?((0,l.wg)(),(0,l.j4)((0,o.SU)(n.ki),{key:1,class:(0,i.C_)(["status-indicator-"+t.value]),"input-attr":{class:"status-input status-editor-input"},"hover-state-enabled":!1,"read-only":!0,value:s()},null,8,["class","value"])):(0,l.kq)("",!0)],2))}}),d=t(97179);const u=(0,d.Z)(s,[["__scopeId","data-v-7724342a"]]);var r=u},65052:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});t(44936);var l=t(49256),i=t(47919),o=t(31203),n=(t(85898),t(98157)),s=t(88606),d=t(31800),u=t(17629),r=t(61431),c=t(73361),p=t(37796),m=t(14985),v=t(45440);const f={class:"form-custom-list-prop"};var w=(0,l.aZ)({__name:"task-list-grid",props:{dataSource:{default:()=>null}},setup(e,{expose:a}){const t=e,w=(0,i.iH)(null);let h=!0;const S=e=>{h&&"detailAdaptive"!==e.rowType&&c.N.push("/planning-task-details")},y=()=>{h=!h},W=()=>w.value?.instance.addRow(),U=(e,a)=>{a.setValue(e),a.component.refresh(),a.component.focus()},g=(e,a)=>{a.setValue(e),a.component.refresh()},_=()=>{const e=new s.jsPDF;(0,u.d3)({jsPDFDocument:e,component:w.value.instance}).then((()=>{e.save("Tasks.pdf")}))},C=()=>{const e=new m.Workbook,a=e.addWorksheet("Tasks");(0,r.d)({component:w.value.instance,worksheet:a,autoFilterEnabled:!0}).then((()=>{e.xlsx.writeBuffer().then((e=>{(0,d.p)(new Blob([e],{type:"application/octet-stream"}),"Tasks.xlsx")}))}))};return a({addRow:W,exportToPdf:_,exportToXlsx:C,showColumnChooser(){w.value.instance.showColumnChooser()},search(e){w.value.instance.searchByText(e)},refresh(){w.value.instance.refresh()}}),(e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)((0,i.SU)(o.v4),{ref_key:"dxDataGridCmp",ref:w,id:"tasks-grid",class:"theme-dependent",height:"100%","data-source":e.dataSource,onRowClick:a[0]||(a[0]=e=>S(e)),onEditingStart:y,onEditCanceled:y,onSaved:y,"hover-state-enabled":!0,"column-auto-width":!0,"show-borders":!0},{cellPriority:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{"show-bar":!0,value:e?.data?.priority||""},null,8,["value"])])),editCellPriority:(0,l.w5)((({data:e})=>[(0,l.Wm)((0,i.SU)(n.L),{class:"edit-cell",value:e?.value,items:(0,i.SU)(p.Lu),onValueChanged:a=>U(a.value,e),onSelectionChanged:e.component.updateDimensions,"field-template":"field"},{field:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l.Wm)(v["default"],{"show-bar":!0,"is-field":!0,value:e.value},null,8,["value"])])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{"show-bar":!0,value:e},null,8,["value"])])),_:2},1032,["value","items","onValueChanged","onSelectionChanged"])])),cellStatus:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{value:e.value},null,8,["value"])])),editCellStatus:(0,l.w5)((({data:e})=>[(0,l.Wm)((0,i.SU)(n.L),{class:"edit-cell",value:e.value,items:(0,i.SU)(p.Ww),onValueChanged:a=>g(a.value,e),onSelectionChanged:e.component.updateDimensions,"field-template":"field"},{field:(0,l.w5)((()=>[(0,l.Wm)(v["default"],{"is-field":!0,value:e.value},null,8,["value"])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(v["default"],{value:e},null,8,["value"])])),_:2},1032,["value","items","onValueChanged","onSelectionChanged"])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.Gr),{enabled:!1}),(0,l.Wm)((0,i.SU)(o.yx),{mode:"virtual"}),(0,l.Wm)((0,i.SU)(o.o5),{"page-size":15}),(0,l.Wm)((0,i.SU)(o.RF),{visible:!0,"show-page-size-selector":!0}),(0,l.Wm)((0,i.SU)(o.fO),{mode:"row","allow-updating":!0}),(0,l.Wm)((0,i.SU)(o.DT),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,l.Wm)((0,i.SU)(o.b),{mode:"multiple"}),(0,l.Wm)((0,i.SU)(o.wh),{visible:!0}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"text",caption:"Subject","hiding-priority":7},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.VD))])),_:1}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"company",caption:"Company","hiding-priority":6},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.VD))])),_:1}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"priority",caption:"Priority","hiding-priority":4,"cell-template":"cellPriority","edit-cell-template":"editCellPriority"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.Hp),{"data-source":(0,i.SU)(p.Lu)},null,8,["data-source"]),(0,l.Wm)((0,i.SU)(o.VD))])),_:1}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"startDate",caption:"Start Date","data-type":"date","hiding-priority":2},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.VD))])),_:1}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"dueDate",caption:"Due Date","data-type":"date","sort-order":"asc","hiding-priority":1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.VD))])),_:1}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"owner",caption:"Owner","hiding-priority":5},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.VD))])),_:1}),(0,l.Wm)((0,i.SU)(o.yP),{"data-field":"status",caption:"Status","hiding-priority":3,"min-width":120,"cell-template":"cellStatus","edit-cell-template":"editCellStatus"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.Hp),{"data-source":(0,i.SU)(p.Ww)},null,8,["data-source"]),(0,l.Wm)((0,i.SU)(o.VD))])),_:1})])),_:1},8,["data-source"]),(0,l.Wm)((0,i.SU)(o.Gr),{visible:t.isLoading,container:".content",position:{of:".content"}},null,8,["visible","position"])],64))}}),h=t(97179);const S=(0,h.Z)(w,[["__scopeId","data-v-ff9e2a2a"]]);var y=S}}]);