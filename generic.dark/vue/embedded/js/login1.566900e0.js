(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login1"],{4042:function(e,t,o){},"9e38":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),n={class:"policy-info"},r=Object(c["createTextVNode"])(" By creating an account, you agree to the "),a=Object(c["createTextVNode"])("Terms of Service"),i=Object(c["createTextVNode"])(" and "),d=Object(c["createTextVNode"])("Privacy Policy"),l={class:"login-link"},u=Object(c["createTextVNode"])(" Have an account? "),s=Object(c["createTextVNode"])("Sign In"),b={class:"dx-button-text"},m={key:1};function O(e,t,o,O,j,f){var x=Object(c["resolveComponent"])("dx-required-rule"),p=Object(c["resolveComponent"])("dx-email-rule"),w=Object(c["resolveComponent"])("dx-label"),v=Object(c["resolveComponent"])("dx-item"),N=Object(c["resolveComponent"])("dx-custom-rule"),V=Object(c["resolveComponent"])("router-link"),h=Object(c["resolveComponent"])("dx-button-options"),C=Object(c["resolveComponent"])("dx-button-item"),g=Object(c["resolveComponent"])("dx-loadIndicator"),D=Object(c["resolveComponent"])("dx-form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("form",{class:"create-account-form",onSubmit:t[0]||(t[0]=Object(c["withModifiers"])((function(){return O.onSubmit&&O.onSubmit.apply(O,arguments)}),["prevent"]))},[Object(c["createVNode"])(D,{"form-data":O.formData,disabled:O.loading},{createAccount:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("span",b,[O.loading?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:0,width:"24px",height:"24px",visible:!0})):Object(c["createCommentVNode"])("",!0),O.loading?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",m,"Create a new account"))])])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{message:"Email is required"}),Object(c["createVNode"])(p,{message:"Email is invalid"}),Object(c["createVNode"])(w,{visible:!1})]})),_:1}),Object(c["createVNode"])(v,{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{message:"Password is required"}),Object(c["createVNode"])(w,{visible:!1})]})),_:1}),Object(c["createVNode"])(v,{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{message:"Password is required"}),Object(c["createVNode"])(N,{message:"Passwords do not match","validation-callback":O.confirmPassword},null,8,["validation-callback"]),Object(c["createVNode"])(w,{visible:!1})]})),_:1}),Object(c["createVNode"])(v,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",n,[r,Object(c["createVNode"])(V,{to:"#"},{default:Object(c["withCtx"])((function(){return[a]})),_:1}),i,Object(c["createVNode"])(V,{to:"#"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})])]})),_:1}),Object(c["createVNode"])(C,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{width:"100%",type:"default",template:"createAccount","use-submit-behavior":!0})]})),_:1}),Object(c["createVNode"])(v,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[u,Object(c["createVNode"])(V,{to:"/login-form"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})])]})),_:1})]})),_:1},8,["form-data","disabled"])],32)}var j=o("1da1"),f=(o("96cf"),o("66dc")),x=o.n(f),p=o("4f34"),w=o.n(p),v=o("cbd3"),N=o("6c02"),V=o("1ab6"),h={components:{DxForm:x.a,DxItem:f["DxItem"],DxLabel:f["DxLabel"],DxButtonItem:f["DxButtonItem"],DxButtonOptions:f["DxButtonOptions"],DxRequiredRule:f["DxRequiredRule"],DxCustomRule:f["DxCustomRule"],DxEmailRule:f["DxEmailRule"],DxLoadIndicator:w.a},setup:function(){var e=Object(N["d"])(),t=Object(c["ref"])(!1),o=Object(c["reactive"])({email:"",password:""}),n=function(){var c=Object(j["a"])(regeneratorRuntime.mark((function c(){var n,r,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return n=o.email,r=o.password,t.value=!0,c.next=4,V["a"].createAccount(n,r);case 4:a=c.sent,t.value=!1,a.isOk?e.push("/login-form"):Object(v["a"])(a.message,"error",2e3);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();function r(e){return e.value===o.password}return{formData:o,loading:t,onSubmit:n,confirmPassword:r}}},C=(o("dde9"),o("6b0d")),g=o.n(C);const D=g()(h,[["render",O]]);t["default"]=D},dde9:function(e,t,o){"use strict";o("4042")}}]);