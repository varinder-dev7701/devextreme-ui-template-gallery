"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[9226],{96059:function(e,a,s){s.r(a),s.d(a,{default:function(){return v}});s(69375);var d=s(94271),t=s(56789),o=s(26823),r=s(79049),l=s(79847),i=s(15581),u=s(44896),n=s(48274);const p={class:"dx-button-text"},c={key:1};var b=(0,d.pM)({__name:"change-password-form",setup(e){const a=(0,u.rd)(),s=(0,u.lq)(),b=(0,o.KR)(""),f=(0,o.KR)(!1),v=(0,o.Kh)({password:""});async function w(){const{password:e}=v;f.value=!0;const s=await n.l.changePassword(e,b.value);f.value=!1,s.isOk?a.push("/login"):(0,i.A)(s.message,"error",2e3)}function m(e){return e.value===v.password}return b.value=s.params.recoveryCode,(e,a)=>((0,d.uX)(),(0,d.CE)("form",{onSubmit:(0,t.D$)(w,["prevent"])},[(0,d.bF)((0,o.R1)(r.Ay),{"form-data":v,disabled:f.value},{changePassword:(0,d.k6)((()=>[(0,d.Lk)("div",null,[(0,d.Lk)("span",p,[f.value?((0,d.uX)(),(0,d.Wv)((0,o.R1)(l.A),{key:0,width:"24px",height:"24px",visible:!0})):(0,d.Q3)("",!0),f.value?(0,d.Q3)("",!0):((0,d.uX)(),(0,d.CE)("span",c,"Continue"))])])])),default:(0,d.k6)((()=>[(0,d.bF)((0,o.R1)(r.KV),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:(0,d.k6)((()=>[(0,d.bF)((0,o.R1)(r.az),{message:"Password is required"}),(0,d.bF)((0,o.R1)(r.jd),{visible:!1})])),_:1}),(0,d.bF)((0,o.R1)(r.KV),{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:(0,d.k6)((()=>[(0,d.bF)((0,o.R1)(r.az),{message:"Password is required"}),(0,d.bF)((0,o.R1)(r.CC),{message:"Passwords do not match","validation-callback":m}),(0,d.bF)((0,o.R1)(r.jd),{visible:!1})])),_:1}),(0,d.bF)((0,o.R1)(r.I),null,{default:(0,d.k6)((()=>[(0,d.bF)((0,o.R1)(r.$3),{width:"100%",type:"default",template:"changePassword","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"])],32))}});const f=b;var v=f}}]);