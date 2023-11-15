"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[6600],{7002:function(e,l,a){a.d(l,{T:function(){return t},m:function(){return n}});const t={"element-attr":{class:"form-editor"},"input-attr":{class:"form-editor-input"},"styling-mode":"filled","value-change-event":"keyup input change"},{"value-change-event":i,...n}=t},58719:function(e,l,a){a.d(l,{F:function(){return i},b:function(){return t}});const t=["Salaried","Commission","Terminated"],i={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},86600:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(73396),i=a(44870),n=a(87139),o=a(75495),u=a(79910),d=a(59699),s=a(38532),m=a(97997),c=a(7002),r=a(42900),v=a(58719),f=a(10199),p=a(96843),g=a(34466),y=a(45444),w=a(22950);const _={id:"contact-form"};var U=(0,t.aZ)({__name:"contact-form",props:{isLoading:{type:Boolean,default:!0},contactData:{default:null}},setup(e){const l=e,a={state:{stateShort:""}},{isFluent:U}=f.H,b=(0,i.iH)(!1),S=(0,i.iH)(a);let V=a;const W={type:"pattern",pattern:/^\d{5}$/,message:"Zip is invalid"};function Z(){V={...S.value},b.value=!0}function k({validationGroup:e}){e.validate().isValid&&(b.value=!1)}function C(){S.value=V,b.value=!1}return(0,t.YP)((()=>l.contactData),(e=>{S.value=e||a})),(a,f)=>((0,t.wg)(),(0,t.iD)("div",_,[(0,t.Wm)((0,i.SU)(m.G),null,{default:(0,t.w5)((()=>[(0,t.Wm)(w.Z,{"is-editing":b.value,onEditCanceled:f[0]||(f[0]=e=>C()),onEditToggled:f[1]||(f[1]=e=>Z()),onSaveClicked:k},null,8,["is-editing"]),(0,t.Wm)((0,i.SU)(r.ZP),{visible:e.isLoading,"show-pane":!1,width:"auto",container:"#contact-form",position:{of:"#contact-form"}},null,8,["visible"]),l.contactData?((0,t.wg)(),(0,t.j4)((0,i.SU)(u.Iq),{key:0,class:(0,n.C_)(["plain-styled-form dx-form",{"view-mode":!b.value}])},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(u.dZ),{"col-count":2},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(u.Ci),{xs:2}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(p.Z,{link:S.value.image,size:184},null,8,["link"])])),_:1}),(0,t.Wm)((0,i.SU)(u.dZ),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(y["default"],{modelValue:S.value.status,"onUpdate:modelValue":f[2]||(f[2]=e=>S.value.status=e),class:"contact-status",items:(0,i.SU)(v.b),"read-only":!b.value,"label-mode":(0,i.SU)(U)()?"outside":"floating","styling-mode":"filled"},null,8,["modelValue","items","read-only","label-mode"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"First Name",modelValue:S.value.firstName,"onUpdate:modelValue":f[3]||(f[3]=e=>S.value.firstName=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Last Name",modelValue:S.value.lastName,"onUpdate:modelValue":f[4]||(f[4]=e=>S.value.lastName=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Position",modelValue:S.value.position,"onUpdate:modelValue":f[5]||(f[5]=e=>S.value.position=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Assigned to",modelValue:S.value.manager,"onUpdate:modelValue":f[6]||(f[6]=e=>S.value.manager=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),{"col-span":2,"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Company",modelValue:S.value.company,"onUpdate:modelValue":f[7]||(f[7]=e=>S.value.company=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1}),(0,t.Wm)((0,i.SU)(u.dZ),{"col-count":4,caption:"Contacts"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(u.Ci),{xs:2}),(0,t.Wm)((0,i.SU)(u.wy),{"col-span":4},{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Address",modelValue:S.value.address,"onUpdate:modelValue":f[8]||(f[8]=e=>S.value.address=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),{"col-span":2},{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"City",modelValue:S.value.city,"onUpdate:modelValue":f[9]||(f[9]=e=>S.value.city=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"State",modelValue:S.value.state.stateShort,"onUpdate:modelValue":f[10]||(f[10]=e=>S.value.state.stateShort=e),"is-editing":b.value},null,8,["modelValue","is-editing"])])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(d.LK),(0,t.dG)({label:"Zip Code",modelValue:S.value.zipCode,"onUpdate:modelValue":f[11]||(f[11]=e=>S.value.zipCode=e),modelModifiers:{number:!0},"is-editing":b.value},(0,i.SU)(c.T)),{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(s.rP),{"validation-rules":[W]},null,8,["validation-rules"])])),_:1},16,["modelValue","is-editing"])])),_:1})])),_:1}),(0,t.Wm)((0,i.SU)(u.dZ),{"col-count":2,"css-class":"contact-fields-group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(u.Ci),{xs:2}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Phone",modelValue:S.value.phone,"onUpdate:modelValue":f[12]||(f[12]=e=>S.value.phone=e),modelModifiers:{number:!0},"is-editing":b.value,mask:"+1(000)000-0000"},null,8,["modelValue","is-editing"]),b.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)((0,i.SU)(o.J),(0,t.dG)({key:0,class:"form-item-button"},{text:"Call",icon:"tel",type:"default",stylingMode:"outlined"},{validators:[]}),null,16))])),_:1}),(0,t.Wm)((0,i.SU)(u.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{label:"Email",modelValue:S.value.email,"onUpdate:modelValue":f[13]||(f[13]=e=>S.value.email=e),modelModifiers:{number:!0},"is-editing":b.value,validators:[{type:"email"}]},null,8,["modelValue","is-editing"]),b.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)((0,i.SU)(o.J),(0,t.dG)({key:0,class:"form-item-button"},{text:"Send Email",icon:"email",type:"default",stylingMode:"outlined"}),null,16))])),_:1})])),_:1})])),_:1},8,["class"])):(0,t.kq)("",!0)])),_:1})]))}}),b=a(40089);const S=(0,b.Z)(U,[["__scopeId","data-v-67e967cf"]]);var V=S},45444:function(e,l,a){a.r(l),a.d(l,{default:function(){return v}});var t=a(73396),i=a(44870),n=a(87139),o=a(15567),u=a(94910),d=a(70412);const s={class:"status-editor-field"};var m=(0,t.aZ)({__name:"status-select-box",props:{modelValue:{default:""},items:null,readOnly:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},labelMode:{default:""},stylingMode:{default:""},classList:{default:""}},emits:["update:modelValue"],setup(e,{emit:l}){function a(e){l("update:modelValue",e.value)}return(l,m)=>((0,t.wg)(),(0,t.j4)((0,i.SU)(o.L),{label:"Status",value:e.modelValue,class:(0,n.C_)(e.classList),onValueChanged:a,items:e.items,"read-only":e.readOnly,"styling-mode":e.stylingMode,"label-mode":e.labelMode,width:"100%","field-template":"field"},{field:(0,t.w5)((({data:e})=>[(0,t._)("div",s,[(0,t.Wm)(d.Z,{class:"status-indicator","show-text":!1,value:e},null,8,["value"]),(0,t.Wm)((0,i.SU)(u.ki),{class:"status-{{data.toLowerCase()}}","hover-state-enabled":!1,"input-attr":{class:`status-editor-input contact-status status-${e?.toLowerCase()}`},"read-only":!0,value:e},null,8,["input-attr","value"])])])),item:(0,t.w5)((({data:e})=>[(0,t.Wm)(d.Z,{value:e},null,8,["value"])])),_:1},8,["value","class","items","read-only","styling-mode","label-mode"]))}}),c=a(40089);const r=(0,c.Z)(m,[["__scopeId","data-v-4d77ce30"]]);var v=r},70412:function(e,l,a){a.d(l,{Z:function(){return d}});var t=a(73396),i=a(87139),n=(0,t.aZ)({__name:"contact-status",props:{value:null,showText:{type:Boolean,default:!0}},setup(e){const l=e;return(e,a)=>((0,t.wg)(),(0,t.iD)("span",{class:(0,i.C_)("status contact-status status-"+l.value?.toLowerCase())},(0,i.zw)(l.showText?l.value:""),3))}}),o=a(40089);const u=(0,o.Z)(n,[["__scopeId","data-v-219f6191"]]);var d=u},96843:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(73396),i=a(87139),n=a(44870),o=a(88943);const u={key:0,class:"edit-icon dx-icon-photooutline"};var d=(0,t.aZ)({__name:"form-photo",props:{link:{default:""},size:{default:124},editable:{type:Boolean,default:!1}},setup(e){const l=e,a=(0,n.iH)(null);return(d,s)=>((0,t.wg)(),(0,t.iD)("div",{ref_key:"hostRef",ref:a,class:"host"},[(0,t._)("div",{style:(0,i.j5)({width:l.size+"px",height:l.size+"px",maxHeight:l.size+"px",backgroundImage:`url('data:image/png;base64,${l.link}')`}),class:(0,i.C_)(["photo",["photo",e.editable?" editable":""]])},[e.editable?((0,t.wg)(),(0,t.iD)("i",u)):(0,t.kq)("",!0)],6),e.editable?((0,t.wg)(),(0,t.j4)((0,n.SU)(o.c),{key:0,"dialog-trigger":a.value,visible:!1,accept:"image/*"},null,8,["dialog-trigger"])):(0,t.kq)("",!0)],512))}}),s=a(40089);const m=(0,s.Z)(d,[["__scopeId","data-v-7324a280"]]);var c=m},34466:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(73396),i=a(44870),n=a(94910),o=a(38532),u=a(7002),d=(0,t.aZ)({__name:"form-textbox",props:{modelValue:{default:null},isEditing:{type:Boolean,default:!1},label:{default:""},icon:{default:""},mask:{default:""},validationGroup:{default:""},validators:{default:()=>[{type:"required"}]}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,d=(0,t.Fl)({get(){return a.modelValue},set(e){l("update:modelValue",e)}});return(l,a)=>((0,t.wg)(),(0,t.j4)((0,i.SU)(n.ki),(0,t.dG)({label:e.label,modelValue:(0,i.SU)(d),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,i.dq)(d)?d.value=e:null),"read-only":!e.isEditing,mask:e.mask},(0,i.SU)(u.T)),{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(o.rP),{"validation-rules":e.validators,"validation-group":e.validationGroup},null,8,["validation-rules","validation-group"]),e.icon?((0,t.wg)(),(0,t.j4)((0,i.SU)(n.JV),{key:0,options:{icon:e.icon,elementAttr:{class:"form-editor-icon"},stylingMode:"text"},name:"icon",location:"before"},null,8,["options"])):(0,t.kq)("",!0)])),_:1},16,["label","modelValue","read-only","mask"]))}}),s=a(40089);const m=(0,s.Z)(d,[["__scopeId","data-v-4cb157d3"]]);var c=m},22950:function(e,l,a){a.d(l,{Z:function(){return r}});var t=a(73396),i=a(44870),n=a(38816),o=a(75495);const u=e=>((0,t.dD)("data-v-2709524c"),e=e(),(0,t.Cn)(),e),d=u((()=>(0,t._)("span",{class:"dx-form-group-caption"},"Details",-1)));var s=(0,t.aZ)({__name:"toolbar-form",props:{isEditing:{type:Boolean,default:!1}},emits:["editCanceled","saveClicked","editToggled"],setup(e,{emit:l}){const a=e;return(e,u)=>((0,t.wg)(),(0,t.j4)((0,i.SU)(n.sc),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(n.wy),{location:"before"},{default:(0,t.w5)((()=>[d])),_:1}),(0,t.Wm)((0,i.SU)(n.wy),{location:"after","locate-in-menu":"after",visible:!a.isEditing},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(o.J),{text:"Edit",icon:"edit","styling-mode":"contained",type:"default",onClick:u[0]||(u[0]=e=>l("editToggled"))})])),_:1},8,["visible"]),(0,t.Wm)((0,i.SU)(n.wy),{location:"after","locate-in-menu":"after",visible:a.isEditing},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(o.J),{text:"Save","styling-mode":"contained",type:"default",onClick:u[1]||(u[1]=e=>l("saveClicked",e))})])),_:1},8,["visible"]),(0,t.Wm)((0,i.SU)(n.wy),{location:"after","locate-in-menu":"after",visible:a.isEditing},{default:(0,t.w5)((()=>[(0,t.Wm)((0,i.SU)(o.J),{text:"Cancel",onClick:u[2]||(u[2]=e=>l("editCanceled")),"styling-mode":"outlined",type:"normal"})])),_:1},8,["visible"])])),_:1}))}}),m=a(40089);const c=(0,m.Z)(s,[["__scopeId","data-v-2709524c"]]);var r=c}}]);