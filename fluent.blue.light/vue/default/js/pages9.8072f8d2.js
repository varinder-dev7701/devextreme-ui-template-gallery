"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8792,878,4208],{44182:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var o=a(73396),i=a(49242),n=a(44870),l=a(37135),s=a(79910),r=a(75495),d=a(53898),u=a(22483),m=a(16914),c=a(78804),p=a(10199);const f=["onSubmit"],g={class:"dx-button-text"},v={key:1},w={class:"reset-link"},_=(0,o.Uk)(" Forgot password? ");var k=(0,o.aZ)({__name:"login-form",props:{resetLink:null,createAccountLink:null},setup(e){const t=e,{currentTheme:a}=p.H,k=(0,o.Fl)((()=>"dark"===a.value?"outlined":"contained")),h=(0,u.tv)(),S=(0,n.qj)({email:"",password:""}),U=(0,n.iH)(!1);function y(){h.push(t.createAccountLink)}async function b(){const{email:e,password:t}=S;U.value=!0;const a=await m.Y.logIn(e,t);a.isOk?h.push("/"):(U.value=!1,(0,d.Z)(a.message,"error",2e3))}return(e,a)=>{const d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("form",{class:"login-form",onSubmit:(0,i.iM)(b,["prevent"])},[(0,o.Wm)((0,n.SU)(s.ZP),{"form-data":S,disabled:U.value},{signInTemplate:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("span",g,[U.value?((0,o.wg)(),(0,o.j4)((0,n.SU)(l.Z),{key:0,width:"24px",height:"24px",visible:!0})):(0,o.kq)("",!0),U.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",v,"Sign In"))])])])),default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(s.wy),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email",value:"jheart@dx-email.com"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(s.VD),{message:"Email is required"}),(0,o.Wm)((0,n.SU)(s.ok),{message:"Email is invalid"}),(0,o.Wm)((0,n.SU)(s.kN),{visible:!1})])),_:1},8,["editor-options"]),(0,o.Wm)((0,n.SU)(s.wy),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password",value:"password"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(s.VD),{message:"Password is required"}),(0,o.Wm)((0,n.SU)(s.kN),{visible:!1})])),_:1}),(0,o.Wm)((0,n.SU)(s.wy),{"data-field":"rememberMe","editor-type":"dxCheckBox","editor-options":{text:"Remember me",elementAttr:{class:"form-text"}}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(s.kN),{visible:!1})])),_:1}),(0,o.Wm)((0,n.SU)(s.sY),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(s.lU),{width:"100%",type:"default",template:"signInTemplate","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"]),(0,o._)("div",w,[(0,o.Wm)(d,{to:t.resetLink},{default:(0,o.w5)((()=>[_])),_:1},8,["to"])]),(0,o.Wm)((0,n.SU)(r.Z),{text:"Create an account",width:"100%",onClick:y,"styling-mode":(0,n.SU)(k)},null,8,["styling-mode"]),(0,o.Wm)(c["default"])],40,f)}}}),h=a(40089);const S=(0,h.Z)(k,[["__scopeId","data-v-272c570e"]]);var U=S},78804:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var o=a(73396),i=a(44870),n=a(75495),l=a(10199);const s=e=>((0,o.dD)("data-v-1e6aac99"),e=e(),(0,o.Cn)(),e),r={class:"oauth-button-container"},d=s((()=>(0,o._)("p",null,"or",-1)));var u=(0,o.aZ)({__name:"login-oauth",setup(e){const{currentTheme:t}=l.H,a=(0,o.Fl)((()=>"dark"===t.value?"outlined":"contained"));return(e,t)=>((0,o.wg)(),(0,o.iD)("div",r,[d,(0,o.Wm)((0,i.SU)(n.Z),{width:"100%",icon:"icons/google-logo.svg",text:"Login with Google","styling-mode":(0,i.SU)(a)},null,8,["styling-mode"]),(0,o.Wm)((0,i.SU)(n.Z),{width:"100%",icon:"icons/microsoft-logo.svg",text:"Login with Microsoft","styling-mode":(0,i.SU)(a)},null,8,["styling-mode"])]))}}),m=a(40089);const c=(0,m.Z)(u,[["__scopeId","data-v-1e6aac99"]]);var p=c},89075:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var o=a(73396),i=a(42398),n=a(44182),l=(0,o.aZ)({__name:"sign-in-form",setup(e){return(e,t)=>((0,o.wg)(),(0,o.j4)(i["default"],{title:"Sign In"},{default:(0,o.w5)((()=>[(0,o.Wm)(n["default"],{"reset-link":"/reset-password-form","create-account-link":"/sign-up-form"})])),_:1}))}}),s=a(40089);const r=(0,s.Z)(l,[["__scopeId","data-v-56bbf80d"]]);var d=r}}]);