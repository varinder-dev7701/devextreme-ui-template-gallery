"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4240],{3211:function(e,l,a){a.r(l),a.d(l,{default:function(){return s}});var t=a(73396),u=a(44870),o=a(16453),n=a(36657),d=(0,t.aZ)({__name:"password-text-box",props:{value:{default:""},stylingMode:{default:"outlined"},placeholder:{default:""},validators:{default:()=>[]}},emits:["update:model-value"],setup(e,{emit:l}){const a=e,d=(0,u.iH)(a.value),i=(0,u.iH)(!0);function s(e){d.value=e,l("update:model-value",e)}function r(){i.value=!i.value}return(l,a)=>((0,t.wg)(),(0,t.j4)((0,u.SU)(o.DxTextBox),{"model-value":e.value,"styling-mode":e.stylingMode,placeholder:e.placeholder,mode:i.value?"password":"text","value-change-event":"keyup input change","onUpdate:modelValue":s},{default:(0,t.w5)((()=>[(0,t.Wm)((0,u.SU)(o.DxButton),{name:"today",location:"after",options:{visible:d.value?.length>0,icon:"icons/eye.svg",onClick:r}},null,8,["options"]),(0,t.Wm)((0,u.SU)(n.DxValidator),{"validation-rules":[{type:"required",message:"Password is required"},...e.validators]},null,8,["validation-rules"])])),_:1},8,["model-value","styling-mode","placeholder","mode"]))}});const i=d;var s=i}}]);