"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[723,8238],{90252:function(e,t,a){a.d(t,{L:function(){return o},l:function(){return l}});const l=["Salaried","Commission","Terminated"],o={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},61235:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(94271),o=a(26823),n=a(54737),i=a(79049),d=a(90252),s=a(17751),u=a(52287),r=a(87564);const c=e=>((0,l.Qi)("data-v-2716dd04"),e=e(),(0,l.jt)(),e),p=c((()=>(0,l.Lk)("span",null,"Drag and drop a photo here or click the area to select it from a folder",-1))),m=[p];var b=(0,l.pM)({__name:"form-photo-uploader",setup(e){const t=(0,o.KR)(!1),a=(0,o.KR)(),n=e=>{e.dropZoneElement===a.value&&(t.value=!0)},i=e=>{e.dropZoneElement===a.value&&(t.value=!1)};return(e,d)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",{id:"dropzone",ref_key:"dropzone",ref:a,class:(0,u.C4)(t.value?"dx-theme-accent-as-border-color":"dx-theme-border-color")},m,2),(0,l.bF)((0,o.R1)(r.l),{"drop-zone":a.value,"dialog-trigger":a.value,multiple:!1,"show-file-list":!1,visible:!1,accept:"image/*","upload-mode":"instantly",onDropZoneEnter:n,onDropZoneLeave:i},null,8,["drop-zone","dialog-trigger"])],64))}}),f=a(56132);const v=(0,f.A)(b,[["__scopeId","data-v-2716dd04"]]);var F=v,k=(0,l.pM)({__name:"contact-new-form",setup(e,{expose:t}){const a=(0,o.Kh)({...d.L});let u={...d.L};return(0,l.wB)(a,(e=>{u={...e}})),t({getNewContactData:()=>u}),(e,t)=>((0,l.uX)(),(0,l.Wv)((0,o.R1)(i.d1),{class:"plain-styled-form","screen-by-width":(0,o.R1)(n.yt)},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(i.KV),{"item-type":"group"},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(i.Hf),{xs:1,sm:1,md:1,lg:1}),(0,l.bF)((0,o.R1)(i.KV),{class:"uploader"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(F)])])),_:1})])),_:1}),(0,l.bF)((0,o.R1)(i.KV),{"item-type":"group"},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(i.Hf),{xs:1,sm:2,md:2,lg:2}),(0,l.bF)((0,o.R1)(i.KV),null,{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{label:"First Name",modelValue:a.firstName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.firstName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.bF)((0,o.R1)(i.KV),{"css-class":"accent"},{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{label:"Last Name",modelValue:a.lastName,"onUpdate:modelValue":t[1]||(t[1]=e=>a.lastName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.bF)((0,o.R1)(i.KV),{"css-class":"accent"},{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{label:"Company",modelValue:a.company,"onUpdate:modelValue":t[2]||(t[2]=e=>a.company=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.bF)((0,o.R1)(i.KV),null,{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{label:"Position",modelValue:a.position,"onUpdate:modelValue":t[3]||(t[3]=e=>a.position=e),"is-editing":!0},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.bF)((0,o.R1)(i.KV),{"item-type":"group","css-class":"contact-fields-group"},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(i.Hf),{xs:1,sm:2,md:2,lg:2}),(0,l.bF)((0,o.R1)(i.KV),{"css-class":"accent"},{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{label:"Assigned to",modelValue:a.manager,"onUpdate:modelValue":t[4]||(t[4]=e=>a.manager=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.bF)((0,o.R1)(i.KV),null,{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{modelValue:a.phone,"onUpdate:modelValue":t[5]||(t[5]=e=>a.phone=e),"is-editing":!0,icon:"tel",label:"Phone",mask:"+1(000)000-0000"},null,8,["modelValue"])])),_:1}),(0,l.bF)((0,o.R1)(i.KV),null,{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{modelValue:a.email,"onUpdate:modelValue":t[6]||(t[6]=e=>a.email=e),"is-editing":!0,icon:"email",label:"Email",validators:[{type:"email"},{type:"required"}]},null,8,["modelValue"])])),_:1}),(0,l.bF)((0,o.R1)(i.KV),null,{default:(0,l.k6)((()=>[(0,l.bF)(s.A,{modelValue:a.address,"onUpdate:modelValue":t[7]||(t[7]=e=>a.address=e),"is-editing":!0,icon:"home",label:"Address"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["screen-by-width"]))}});const R=k;var h=R},57269:function(e,t,a){a.d(t,{A:function(){return m}});var l=a(94271),o=a(26823),n=a(52287),i=a(21949),d=a(73843),s=a(54737),u=a(84190),r=(0,l.pM)({__name:"form-popup",props:{isSaveDisabled:{type:Boolean,default:!1},title:{},visible:{type:Boolean,default:!1},width:{default:480},height:{default:"auto"},wrapperAttr:{default:()=>({})}},emits:["save","update:visible"],setup(e,{expose:t,emit:a}){const r=e,c=(0,o.KR)(),p=a,m=(0,o.KR)(r.visible);function b(e){const t={class:"",...e};return t.class+=" form-popup",t}const f=(0,o.KR)(b(r.wrapperAttr)),v=(0,o.KR)();(0,l.wB)((()=>r.visible),(e=>{m.value=e})),(0,l.wB)((()=>r.wrapperAttr),(e=>{f.value=b(e)}));const F=()=>{m.value=!1,c.value?.instance.reset(),p("update:visible",!1)},k=()=>{c.value?.instance.validate().isValid&&(F(),p("save"))},R=()=>{F()};function h(){c.value?.instance.reset(),F()}function g(){return c.value?.instance.validate().isValid}return t({isValid:g}),(e,t)=>((0,l.uX)(),(0,l.Wv)((0,o.R1)(i.jF),{ref_key:"popup",ref:v,title:r.title,visible:m.value,"full-screen":(0,o.R1)(s.du).isXSmall,width:e.width,"wrapper-attr":f.value,height:e.height,onHidden:t[2]||(t[2]=e=>h()),onOptionChanged:t[3]||(t[3]=()=>v.value?.instance?.repaint())},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(i.lv),{toolbar:"bottom",location:"center"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",{class:(0,n.C4)({"form-popup-buttons-container":!0,"flex-buttons":e.width<=360})},[(0,l.bF)((0,o.R1)(d.x),{text:"Cancel","styling-mode":"outlined",type:"normal",onClick:t[0]||(t[0]=e=>R())}),(0,l.bF)((0,o.R1)(d.x),{text:"Save",disabled:e.isSaveDisabled,"styling-mode":"contained",type:"default",onClick:t[1]||(t[1]=e=>k())},null,8,["disabled"])],2)])),_:1}),(0,l.bF)((0,o.R1)(u.P),{ref_key:"validationGroup",ref:c},{default:(0,l.k6)((()=>[(0,l.RG)(e.$slots,"default")])),_:3},512)])),_:3},8,["title","visible","full-screen","width","wrapper-attr","height"]))}}),c=a(56132);const p=(0,c.A)(r,[["__scopeId","data-v-0a86a163"]]);var m=p},99924:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var l=a(94271),o=a(26823),n=a(52287),i=a(54104),d=a(73843),s=a(35160),u=a(24946),r=a(9046),c=a(33540),p=a(23924),m=a(90252),b=a(91619),f=a(88395),v=a(7300),F=a(15581),k=a(50497),R=a(87702),h=a(57269),g=a(61235),V=a(3312);const _=e=>((0,l.Qi)("data-v-a3d4eb3a"),e=e(),(0,l.jt)(),e),w={class:"view-wrapper list-page view-wrapper-contact-list"},y=_((()=>(0,l.Lk)("div",{class:"grid-header"}," Contacts ",-1))),K=_((()=>(0,l.Lk)("div",null,[(0,l.Lk)("div",{class:"separator"})],-1))),C=_((()=>(0,l.Lk)("div",null,[(0,l.Lk)("div",{class:"separator"})],-1))),x={class:"name-template"},A={class:"position"};var L=(0,l.pM)({__name:"crm-contact-list",setup(e){const t=["All",...m.l],a=(0,o.KR)(),_=(0,o.KR)(null),L=(0,o.KR)(!1),N=(0,o.KR)(null),D=(0,o.KR)(!1),S=(0,o.KR)(null),Z=new b.A({key:"id",load:()=>(0,u.kK)()}),B=e=>{e.data.id&&(_.value=e.data,L.value=!0,S.value=e.data.id)},U=()=>{D.value=!0},z=e=>{const{item:t}=e;"All"===t?N.value?.instance.clearFilter():N.value?.instance.filter(["status","=",t])},E=e=>{if("pdf"===e.format){const t=new p.jsPDF;(0,f.VL)({jsPDFDocument:t,component:e.component}).then((()=>{t.save("Contacts.pdf")}))}else{const t=new c.Workbook,a=t.addWorksheet("Contacts");(0,v.V)({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((()=>{t.xlsx.writeBuffer().then((e=>{(0,r.U)(new Blob([e],{type:"application/octet-stream"}),"Contacts.xlsx")}))})),e.cancel=!0}},P=()=>{N.value?.instance.updateDimensions()},M=()=>{Z.reload()},T=e=>{const{value:t}=e;if(t)return(0,k.qH)(t.toString())},j=()=>{const{firstName:e,lastName:t}=a.value.getNewContactData();(0,F.A)({message:`New contact "${e} ${t}" saved`,position:{at:"bottom center",my:"bottom center"}},"success"),D.value=!1},H=()=>{L.value=!1,S.value=null},X={text:"Refresh",icon:"refresh",onClick:M,stylingMode:"text"};return(e,u)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",w,[(0,l.bF)((0,o.R1)(s.Ay),{ref_key:"dataGrid",ref:N,"data-source":(0,o.R1)(Z),"allow-column-reordering":!0,"focused-row-enabled":!0,"focused-row-key":S.value,"show-borders":!0,height:"100%",class:"grid theme-dependent",onRowClick:B,onExporting:E},{nameCellTemplate:(0,l.k6)((({data:e})=>[(0,l.Lk)("div",x,[(0,l.Lk)("div",null,(0,n.v_)(e.data.name),1),(0,l.Lk)("div",A,(0,n.v_)(e.data.position),1)])])),statusCellTemplate:(0,l.k6)((({data:e})=>[(0,l.bF)(R.A,{value:e.data?.status},null,8,["value"])])),default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(s.ox),{mode:"virtual"}),(0,l.bF)((0,o.R1)(s.sh),{enabled:!0}),(0,l.bF)((0,o.R1)(s.bS),{mode:"multiple"}),(0,l.bF)((0,o.R1)(s.Sz),{visible:!0}),(0,l.bF)((0,o.R1)(s.N4),{"show-pane":!1}),(0,l.bF)((0,o.R1)(s.Dn),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,l.bF)((0,o.R1)(s.xG),{visible:!0,placeholder:"Contact Search"}),(0,l.bF)((0,o.R1)(s.Nf),{enabled:!0,"allow-export-selected-data":!0,formats:["xlsx","pdf"]}),(0,l.bF)((0,o.R1)(s.cZ),null,{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(s.KV),{location:"before"},{default:(0,l.k6)((()=>[y])),_:1}),(0,l.bF)((0,o.R1)(s.KV),{location:"before","locate-in-menu":"auto"},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(i.Ay),{"styling-mode":"text","use-select-mode":!0,items:t,"selected-item-key":t[0],"drop-down-options":{width:"auto"},onSelectionChanged:z},null,8,["selected-item-key"])])),_:1}),(0,l.bF)((0,o.R1)(s.KV),{location:"after","locate-in-menu":"auto"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)((0,o.R1)(d.x),{text:"Add Contact",icon:"plus",type:"default","styling-mode":"contained",onClick:U})])])),_:1}),(0,l.bF)((0,o.R1)(s.KV),{location:"after","locate-in-menu":"auto","show-text":"inMenu",widget:"dxButton",options:X}),(0,l.bF)((0,o.R1)(s.KV),{location:"after","locate-in-menu":"auto"},{default:(0,l.k6)((()=>[K])),_:1}),(0,l.bF)((0,o.R1)(s.KV),{name:"exportButton"}),(0,l.bF)((0,o.R1)(s.KV),{location:"after","locate-in-menu":"auto"},{default:(0,l.k6)((()=>[C])),_:1}),(0,l.bF)((0,o.R1)(s.KV),{name:"columnChooserButton","locate-in-menu":"auto"}),(0,l.bF)((0,o.R1)(s.KV),{name:"searchPanel","locate-in-menu":"auto"})])),_:1}),(0,l.bF)((0,o.R1)(s.VZ),{"data-field":"name",caption:"Name","sort-order":"asc","cell-template":"nameCellTemplate","hiding-priority":5,"min-width":150},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(s.az))])),_:1}),(0,l.bF)((0,o.R1)(s.VZ),{"data-field":"company",caption:"Company","hiding-priority":5,"min-width":150}),(0,l.bF)((0,o.R1)(s.VZ),{"data-field":"status",caption:"Status","data-type":"string","cell-template":"statusCellTemplate","hiding-priority":3,"min-width":100}),(0,l.bF)((0,o.R1)(s.VZ),{"data-field":"assignedTo",caption:"Assigned to","hiding-priority":4}),(0,l.bF)((0,o.R1)(s.VZ),{"data-field":"phone",caption:"Phone","hiding-priority":2,"customize-text":T},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(s.az))])),_:1}),(0,l.bF)((0,o.R1)(s.VZ),{"data-field":"email",caption:"Email","hiding-priority":1},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(s.az))])),_:1})])),_:1},8,["data-source","focused-row-key"]),(0,l.bF)(V["default"],{"contact-id":_.value?.id,"is-panel-opened":L.value,onClose:H,onPinChanged:P},null,8,["contact-id","is-panel-opened"])]),(0,l.bF)(h.A,{title:"New Contact",visible:D.value,"onUpdate:visible":u[0]||(u[0]=e=>D.value=e),onSave:j},{default:(0,l.k6)((()=>[(0,l.bF)(g["default"],{ref_key:"contactNewFormCmp",ref:a},null,512)])),_:1},8,["visible"])],64))}}),N=a(56132);const D=(0,N.A)(L,[["__scopeId","data-v-a3d4eb3a"]]);var S=D}}]);