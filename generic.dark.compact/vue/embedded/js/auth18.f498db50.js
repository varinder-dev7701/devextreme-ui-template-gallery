"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4240],{15255:function(t,e,o){
/*!
 * devextreme-vue
 * Version: 22.2.1-alpha-22313-0309
 * Build date: Wed Nov 09 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DxLoadIndicator=void 0;var n=i(o(99535)),a=o(35535),s=a.createComponent({props:{elementAttr:Object,height:[Function,Number,String],hint:String,indicatorSrc:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:elementAttr":null,"update:height":null,"update:hint":null,"update:indicatorSrc":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:rtlEnabled":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=n.default,this.$_hasAsyncTemplate=!0}});e.DxLoadIndicator=s,e["default"]=s},53898:function(t,e,o){var i=o(60621),n=o(78691),a=o(13754),s=o(72602),l=o(9783),r=o(56901),d=o(41391),u=(0,r.Jj)(),c=null,p={};function h(t,e,o){var r=(0,l.PO)(t)?t:{message:t},u=(0,l.PO)(e)?e:void 0,p=(0,l.PO)(e)?void 0:e,{onHidden:h}=r;if(null!==u&&void 0!==u&&u.position){var{position:f}=u,b=u.direction||m(f),_=(0,l.HD)(f)?f:"".concat(f.top,"-").concat(f.left,"-").concat(f.bottom,"-").concat(f.right),{onShowing:y}=r,x=g(_);v(x,b),(0,s.l)(r,{container:x,onShowing:function(t){w(x,b,f),new n.Z(y,{context:t.model}).execute(arguments)}})}(0,s.l)(r,{type:p,displayTime:o,onHidden:function(t){(0,i.Z)(t.element).remove(),new n.Z(h,{context:t.model}).execute(arguments)}}),c=(0,i.Z)("<div>").appendTo((0,a.S3)()),new d["default"](c,r).show()}var m=t=>(0,l.HD)(t)&&t.includes("top")?"down-push":"up-push",f=t=>{var e=(0,i.Z)("<div>").appendTo((0,a.S3)());return p[t]=e,e},g=t=>{var e=p[t];return e||f(t)},v=(t,e)=>{var o="dx-toast-stack dx-toast-stack-".concat(e,"-direction");t.removeAttr("class").addClass(o)},w=(t,e,o)=>{var{offsetWidth:i,offsetHeight:n}=t.children().first().get(0),a={toastWidth:i,toastHeight:n,windowHeight:u.innerHeight,windowWidth:u.innerWidth},s=(0,l.HD)(o)?b(o,a):o,r=_(e,s,a);t.css(r)},b=(t,e)=>{var{toastWidth:o,toastHeight:i,windowHeight:n,windowWidth:a}=e;switch(t){case"top left":return{top:10,left:10};case"top right":return{top:10,right:10};case"bottom left":return{bottom:10,left:10};case"bottom right":return{bottom:10,right:10};case"top center":return{top:10,left:Math.round(a/2-o/2)};case"left center":return{top:Math.round(n/2-i/2),left:10};case"right center":return{top:Math.round(n/2-i/2),right:10};case"center":return{top:Math.round(n/2-i/2),left:Math.round(a/2-o/2)};case"bottom center":default:return{bottom:10,left:Math.round(a/2-o/2)}}},_=(t,e,o)=>{var i,n,a,s,l,r,d,u,c,p,h,m,{toastWidth:f,toastHeight:g,windowHeight:v,windowWidth:w}=o;switch(t.replace(/-push|-stack/g,"")){case"up":return{bottom:null!==(i=e.bottom)&&void 0!==i?i:v-g-e.top,top:"",left:null!==(n=e.left)&&void 0!==n?n:"",right:null!==(a=e.right)&&void 0!==a?a:""};case"down":return{top:null!==(s=e.top)&&void 0!==s?s:v-g-e.bottom,bottom:"",left:null!==(l=e.left)&&void 0!==l?l:"",right:null!==(r=e.right)&&void 0!==r?r:""};case"left":return{right:null!==(d=e.right)&&void 0!==d?d:w-f-e.left,left:"",top:null!==(u=e.top)&&void 0!==u?u:"",bottom:null!==(c=e.bottom)&&void 0!==c?c:""};case"right":return{left:null!==(p=e.left)&&void 0!==p?p:w-f-e.right,right:"",top:null!==(h=e.top)&&void 0!==h?h:"",bottom:null!==(m=e.bottom)&&void 0!==m?m:""}}};e["Z"]=h},41391:function(t,e,o){o.r(e),o.d(e,{default:function(){return B}});o(52262),o(24506);var i=o(60621),n=o(56901),a=o(33158),s=o(66487),l=o(23253),r=o(84392),d=o(9783),u=o(72602),c=o(12901),p=o(70732),h=o(52795),m=o(6530),f=(0,n.Jj)(),g=l.Z.add,v="dx-toast",w=v+"-",b=w+"wrapper",_=w+"content",y=w+"message",x=w+"icon",S="dxToast",C=["info","warning","error","success"],k=[],D=8e3,W=null,T={top:{my:"top",at:"top",of:null,offset:"0 0"},bottom:{my:"bottom",at:"bottom",of:null,offset:"0 -20"},center:{my:"center",at:"center",of:null,offset:"0 0"},right:{my:"center right",at:"center right",of:null,offset:"0 0"},left:{my:"center left",at:"center left",of:null,offset:"0 0"}},U={h:0,v:0};g((function(){s.Z.subscribeGlobal(a["default"].getDocument(),c.Z.down,(function(t){for(var e=k.length-1;e>=0;e--)if(!k[e]._proxiedDocumentDownHandler(t))return}))}));var O=h.Z.inherit({_getDefaultOptions:function(){return(0,u.l)(this.callBase(),{message:"",type:"info",displayTime:2e3,position:"bottom center",animation:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,from:1,to:0}},shading:!1,height:"auto",hideTopOverlayHandler:null,closeOnSwipe:!0,closeOnClick:!1})},_defaultOptionsRules:function(){return this.callBase().concat([{device:{platform:"android"},options:{hideOnOutsideClick:!0,width:"auto",position:{at:"bottom left",my:"bottom left",offset:"20 -20"},animation:{show:{type:"slide",duration:200,from:{position:{my:"top",at:"bottom",of:f}}},hide:{type:"slide",duration:200,to:{position:{my:"top",at:"bottom",of:f}}}}}},{device:function(t){var e="phone"===t.deviceType,o="android"===t.platform;return e&&o},options:{width:"100vw",position:{at:"bottom center",my:"bottom center",offset:"0 0"}}},{device:function(t){return"phone"===t.deviceType},options:{width:"100vw"}},{device:function(){return(0,m.x2)()},options:{minWidth:344,maxWidth:568,displayTime:4e3}}])},_init:function(){this.callBase(),this._posStringToObject()},_renderContentImpl:function(){this.option("message")&&(this._message=(0,i.Z)("<div>").addClass(y).text(this.option("message")).appendTo(this.$content())),this.setAria("role","alert",this._message),C.includes(this.option("type").toLowerCase())&&this.$content().prepend((0,i.Z)("<div>").addClass(x)),this.callBase()},_render:function(){this.callBase(),this.$element().addClass(v),this.$wrapper().addClass(b),this.$content().addClass(w+String(this.option("type")).toLowerCase()),this.$content().addClass(_),this._toggleCloseEvents("Swipe"),this._toggleCloseEvents("Click")},_renderScrollTerminator:r.ZT,_toggleCloseEvents:function(t){var e="dx"+t.toLowerCase();s.Z.off(this.$content(),e),this.option("closeOn"+t)&&s.Z.on(this.$content(),e,this.hide.bind(this))},_posStringToObject:function(){if((0,d.HD)(this.option("position"))){var t=this.option("position").split(" ")[0],e=this.option("position").split(" ")[1];switch(this.option("position",(0,u.l)({boundaryOffset:U},T[t])),e){case"center":case"left":case"right":this.option("position").at+=" "+e,this.option("position").my+=" "+e}}},_show:function(){return W&&W!==this&&(clearTimeout(W._hideTimeout),W.hide()),W=this,this.callBase.apply(this,arguments).done(function(){clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(this.hide.bind(this),this.option("displayTime"))}.bind(this))},_hide:function(){return W=null,this.callBase.apply(this,arguments)},_overlayStack:function(){return k},_zIndexInitValue:function(){return this.callBase()+D},_dispose:function(){clearTimeout(this._hideTimeout),W=null,this.callBase()},_optionChanged:function(t){switch(t.name){case"type":this.$content().removeClass(w+t.previousValue),this.$content().addClass(w+String(t.value).toLowerCase());break;case"message":this._message&&this._message.text(t.value);break;case"closeOnSwipe":this._toggleCloseEvents("Swipe");break;case"closeOnClick":this._toggleCloseEvents("Click");break;case"displayTime":break;default:this.callBase(t)}}});(0,p.Z)(S,O);var Z=O,B=Z},78328:function(t,e,o){o.r(e),o.d(e,{default:function(){return W}});var i=o(73396),n=o(49242),a=o(44870),s=o(94969),l=o.n(s),r=o(15255),d=o.n(r),u=o(53898),c=o(22483),p=o(16914);const h=["onSubmit"],m={class:"policy-info"},f=(0,i.Uk)(" By creating an account, you agree to the "),g=(0,i.Uk)(" Terms of Service "),v=(0,i.Uk)(" and "),w=(0,i.Uk)(" Privacy Policy "),b={class:"login-link"},_=(0,i.Uk)(" Have an account? "),y=(0,i.Uk)(" Sign In "),x={class:"dx-button-text"},S={key:1};var C=(0,i.aZ)({__name:"create-account-form",setup(t){const e=(0,c.tv)(),o=(0,a.iH)(!1),r=(0,a.qj)({email:"",password:""}),C=async()=>{const{email:t,password:i}=r;o.value=!0;const n=await p.Y.createAccount(t,i);o.value=!1,n.isOk?e.push("/login"):(0,u.Z)(n.message,"error",2e3)};function k(t){return t.value===r.password}return(t,e)=>{const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("form",{class:"create-account-form",onSubmit:(0,n.iM)(C,["prevent"])},[(0,i.Wm)((0,a.SU)(l()),{"form-data":r,disabled:o.value},{createAccount:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("span",x,[o.value?((0,i.wg)(),(0,i.j4)((0,a.SU)(d()),{key:0,width:"24px",height:"24px",visible:!0})):(0,i.kq)("",!0),o.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",S,"Create a new account"))])])])),default:(0,i.w5)((()=>[(0,i.Wm)((0,a.SU)(s.DxItem),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email"}},{default:(0,i.w5)((()=>[(0,i.Wm)((0,a.SU)(s.DxRequiredRule),{message:"Email is required"}),(0,i.Wm)((0,a.SU)(s.DxEmailRule),{message:"Email is invalid"}),(0,i.Wm)((0,a.SU)(s.DxLabel),{visible:!1})])),_:1}),(0,i.Wm)((0,a.SU)(s.DxItem),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:(0,i.w5)((()=>[(0,i.Wm)((0,a.SU)(s.DxRequiredRule),{message:"Password is required"}),(0,i.Wm)((0,a.SU)(s.DxLabel),{visible:!1})])),_:1}),(0,i.Wm)((0,a.SU)(s.DxItem),{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:(0,i.w5)((()=>[(0,i.Wm)((0,a.SU)(s.DxRequiredRule),{message:"Password is required"}),(0,i.Wm)((0,a.SU)(s.DxCustomRule),{message:"Passwords do not match","validation-callback":k}),(0,i.Wm)((0,a.SU)(s.DxLabel),{visible:!1})])),_:1}),(0,i.Wm)((0,a.SU)(s.DxItem),null,{default:(0,i.w5)((()=>[(0,i._)("div",m,[f,(0,i.Wm)(u,{to:"#"},{default:(0,i.w5)((()=>[g])),_:1}),v,(0,i.Wm)(u,{to:"#"},{default:(0,i.w5)((()=>[w])),_:1})])])),_:1}),(0,i.Wm)((0,a.SU)(s.DxButtonItem),null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,a.SU)(s.DxButtonOptions),{width:"100%",type:"default",template:"createAccount","use-submit-behavior":!0})])),_:1}),(0,i.Wm)((0,a.SU)(s.DxItem),null,{default:(0,i.w5)((()=>[(0,i._)("div",b,[_,(0,i.Wm)(u,{to:"/login"},{default:(0,i.w5)((()=>[y])),_:1})])])),_:1})])),_:1},8,["form-data","disabled"])],40,h)}}}),k=o(40089);const D=(0,k.Z)(C,[["__scopeId","data-v-2e732665"]]);var W=D}}]);