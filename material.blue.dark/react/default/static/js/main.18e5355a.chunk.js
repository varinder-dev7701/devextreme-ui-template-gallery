(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{639:function(e,t,n){},641:function(e,t,n){},664:function(e,t,n){},665:function(e,t,n){},671:function(e,t,n){},672:function(e,t,n){},673:function(e,t,n){},674:function(e,t,n){},675:function(e,t,n){},676:function(e,t,n){},677:function(e,t,n){},678:function(e,t,n){},679:function(e,t,n){},681:function(e,t,n){"use strict";n.r(t);n(439),n(451);var a=n(22),c=n.n(a),s=n(289),r=n.n(s),i=(n(639),n(640),n(126)),o=(n(641),n(433)),l=n.n(o),d=n(148),u=n(65),j=n(9),b=Object(a.createContext)({}),m=function(){return Object(a.useContext)(b)};function x(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),c=n[0],s=n[1];return Object(j.jsx)(b.Provider,Object(d.a)({value:{navigationData:c,setNavigationData:s}},e))}var O=n(75),p=n.n(O),h=n(111),f={email:"sandra@example.com",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"};function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0,data:f});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Authentication failed"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",{isOk:!0,data:f});case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",{isOk:!1});case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function C(e,t){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function I(e,t){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function S(e){return M.apply(this,arguments)}function M(){return(M=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function R(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!0),i=Object(u.a)(r,2),o=i[0],l=i[1];Object(a.useEffect)((function(){Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:(t=e.sent).isOk&&s(t.data),l(!1);case 5:case"end":return e.stop()}}),e)})))()}),[]);var b=Object(a.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:return(a=e.sent).isOk&&s(a.data),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),m=Object(a.useCallback)((function(){s()}),[]);return Object(j.jsx)(P.Provider,Object(d.a)({value:{user:c,signIn:b,signOut:m,loading:o}},e))}var P=Object(a.createContext)({}),B=function(){return Object(a.useContext)(P)},T=function(){var e=Object(a.useState)(U()),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useCallback)((function(){c(U())}),[]);return Object(a.useEffect)((function(){return A(s),function(){z(s)}}),[s]),n},E=[],F=window.matchMedia("(max-width: 599.99px)"),L=window.matchMedia("(min-width: 600px) and (max-width: 959.99px)"),D=window.matchMedia("(min-width: 960px) and (max-width: 1279.99px)"),q=window.matchMedia("(min-width: 1280px)");[F,L,D,q].forEach((function(e){e.addListener((function(e){e.matches&&E.forEach((function(e){return e()}))}))}));var A=function(e){return E.push(e)},z=function(e){E=E.filter((function(t){return t!==e}))};function U(){return{isXSmall:F.matches,isSmall:L.matches,isMedium:D.matches,isLarge:q.matches}}var W=n(79),J="UI Templates Gallery",G=n(99),V=n.n(G),X=n(102),H=n.n(X),Y=n(194),$=n.n(Y),K=n(264),Q=n.n(K),Z=(n(664),[{path:"/crm-contact-list",component:function(){var e=[{name:"Robert Reaga",status:1,id:120545,products:[{productId:1,productStatus:1},{productId:2,productStatus:2}],manager:"Sarah Davix",organization:"SV Consult",address:"69 Ruthven St #24, Boston, MA 02121, United States of America",email:"1@2"},{name:"Samuel Browick",status:2,id:120545,products:[{productId:1,productStatus:2},{productId:2,productStatus:1}],manager:"Brett Johnson",organization:"SV Consult",address:"69 Ruthven St #24, Boston, MA 02121, United States of America",email:"2@2"}],t={1:"New",2:"Active"},n={1:"CRM System",2:"Task Management"},s={1:"Lead",2:"Trial sent"},r=Object(a.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(!1),b=Object(u.a)(d,2),m=b[0],x=b[1],O=Object(a.useState)(e[0]),p=Object(u.a)(O,2),h=p[0],f=p[1],v=T(),g=v.isMedium,w=v.isLarge;return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsxs)("div",{className:"view-wrapper",children:[Object(j.jsxs)(V.a,{dataSource:e,height:"100%",onRowClick:function(e){f(e.data),l(!0)},children:[Object(j.jsx)(G.SearchPanel,{visible:!0,width:240,placeholder:"Contact Search"}),Object(j.jsx)(G.Export,{enabled:!0,allowExportSelectedData:!0}),Object(j.jsxs)(G.Toolbar,{children:[Object(j.jsx)(G.Item,{location:"before",children:Object(j.jsx)("div",{className:"grid-header",children:"Contact List"})}),Object(j.jsx)(G.Item,{location:"after",locateInMenu:"auto",widget:"dxButton",options:{text:"Add Contact",icon:"plus",type:"default",stylingMode:"contained"}}),Object(j.jsx)(G.Item,{location:"after",locateInMenu:"auto",showText:"inMenu",widget:"dxButton",options:{text:"Refresh",icon:"refresh"}}),Object(j.jsx)(G.Item,{location:"after",locateInMenu:"auto",children:Object(j.jsx)("div",{className:"separator"})}),Object(j.jsx)(G.Item,{name:"exportButton"}),Object(j.jsx)(G.Item,{location:"after",locateInMenu:"auto",children:Object(j.jsx)("div",{className:"separator"})}),Object(j.jsx)(G.Item,{location:"after",locateInMenu:"auto",showText:"inMenu",widget:"dxButton",options:{text:"Remove",icon:"trash"}}),Object(j.jsx)(G.Item,{name:"searchPanel"})]}),Object(j.jsx)(G.Selection,{selectAllMode:"allPages",showCheckBoxesMode:"always",mode:"multiple"}),Object(j.jsx)(G.Column,{dataField:"name",caption:"Name",hidingPriority:5,minWidth:150}),Object(j.jsx)(G.Column,{dataField:"status",caption:"Status",dataType:"string",cellRender:function(e){return Object(j.jsx)("span",{className:"status status-"+e.data.status,children:t[e.data.status]})},hidingPriority:3,minWidth:100}),Object(j.jsx)(G.Column,{dataField:"id",caption:"ID",hidingPriority:1}),Object(j.jsx)(G.Column,{dataField:"Products",caption:"Products",hidingPriority:0,minWidth:400,cellRender:function(e){return Object(j.jsx)("span",{children:e.data.products.map((function(e,t){return Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[n[e.productId]," "]}),Object(j.jsx)("span",{className:"cloud cloud-"+e.productStatus,children:s[e.productStatus]})]},t)}))})}}),Object(j.jsx)(G.Column,{dataField:"manager",caption:"Manager",hidingPriority:4}),Object(j.jsx)(G.Column,{dataField:"organization",caption:"Organization",hidingPriority:2})]}),Object(j.jsx)("div",{className:"panel "+(m?"pin ":"")+(o?"open":""),children:h&&Object(j.jsxs)("div",{className:"data-wrapper",children:[Object(j.jsxs)(H.a,{children:[Object(j.jsx)(X.Item,{location:"before",children:Object(j.jsx)("div",{className:"contact-name",children:h.name})}),Object(j.jsx)(X.Item,{location:"before",children:Object(j.jsx)("span",{className:"status status-"+h.status,children:t[h.status]})}),Object(j.jsx)(X.Item,{location:"after",widget:"dxButton",visible:w||g,options:{icon:m?"unpin":"pin",onClick:function(){x(!m)}}}),Object(j.jsx)(X.Item,{location:"after",widget:"dxButton",options:{icon:"close",onClick:function(){l(!1)}}})]}),Object(j.jsxs)($.a,{children:[Object(j.jsxs)("div",{className:"user-info",children:[Object(j.jsx)("div",{className:"photo"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{children:h.id}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"dx-icon-user"})," ",Object(j.jsx)("span",{children:h.manager})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"dx-icon-product"})," ",Object(j.jsx)("span",{children:h.organization})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"dx-icon-email"})," ",Object(j.jsx)("span",{children:h.email})]})]})]}),Object(j.jsx)("div",{children:h.address}),Object(j.jsxs)(H.a,{children:[Object(j.jsx)(X.Item,{location:"before",widget:"dxButton",options:{icon:"edit",stylingMode:"outlined",text:"Edit"}}),Object(j.jsx)(X.Item,{location:"center",widget:"dxButton",options:{stylingMode:"text",text:"Send email"}}),Object(j.jsx)(X.Item,{location:"after",widget:"dxDropDownButton",options:{text:"Action"}})]}),Object(j.jsxs)(Q.a,{multiple:!0,collapsible:!0,children:[Object(j.jsx)(K.Item,{title:"Licenses",children:Object(j.jsxs)("div",{className:"licenses",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"caption",children:"Income"}),Object(j.jsx)("div",{className:"value",children:"$1,650,00"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"caption",children:"Licences"}),Object(j.jsx)("div",{className:"value",children:"1"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"caption",children:"Active Licences"}),Object(j.jsx)("div",{className:"value",children:"1"})]})]})}),Object(j.jsx)(K.Item,{title:"Opportunities",children:h.products.map((function(e,t){return Object(j.jsxs)("span",{className:"oportunities",children:[Object(j.jsxs)("span",{className:"item",children:[n[e.productId]," "]}),Object(j.jsx)("span",{className:"cloud cloud-"+e.productStatus,children:s[e.productStatus]}),Object(j.jsx)("br",{})]},t)}))}),Object(j.jsx)(K.Item,{title:"Activities",children:"c"})]})]})]})})]})})}}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{component:(t=e.component,function(e){var n=e.match.path,s=m().setNavigationData;return Object(a.useEffect)((function(){s({currentPath:n})}),[n,s]),c.a.createElement(t,e)})});var t}))),_=n(312),ee=n.n(_),te=n(262),ne=n.n(te),ae=n(354),ce=n.n(ae),se=n(435),re=n.n(se),ie=(n(665),function(e){var t=e.menuMode,n=B(),c=n.user,s=n.signOut,r=Object(W.g)();function i(){r.push("/profile")}var o=Object(a.useMemo)((function(){return[{text:"Profile",icon:"user",onClick:i},{text:"Logout",icon:"runner",onClick:s}]}),[s]);return Object(j.jsxs)("div",{className:"user-panel",children:[Object(j.jsxs)("div",{className:"user-info",children:[Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("div",{style:{background:"url(".concat(c.avatarUrl,") no-repeat #fff"),backgroundSize:"cover"},className:"user-image"})}),Object(j.jsx)("div",{className:"user-name",children:c.email})]}),"context"===t&&Object(j.jsx)(ce.a,{items:o,target:".user-button",showEvent:"dxclick",width:210,cssClass:"user-menu",children:Object(j.jsx)(ae.Position,{my:"top center",at:"bottom center"})}),"list"===t&&Object(j.jsx)(re.a,{className:"dx-toolbar-menu-action",items:o})]})}),oe=(n(671),n(205)),le=function(e){var t=e.menuToggleEnabled,n=e.title,a=e.toggleMenu;return Object(j.jsx)("header",{className:"header-component layout-header",children:Object(j.jsxs)(H.a,{className:"header-toolbar",children:[Object(j.jsx)(X.Item,{visible:t,location:"before",widget:"dxButton",cssClass:"menu-button",children:Object(j.jsx)(ne.a,{icon:"menu",stylingMode:"text",onClick:a})}),Object(j.jsx)(X.Item,{location:"before",cssClass:"header-title",text:n,visible:!!n}),Object(j.jsx)(X.Item,{location:"after",locateInMenu:"auto",menuItemTemplate:"userPanelTemplate",children:Object(j.jsx)(ne.a,{className:"user-button authorization",width:210,height:"100%",stylingMode:"text",children:Object(j.jsx)(ie,{menuMode:"context"})})}),Object(j.jsx)(oe.Template,{name:"userPanelTemplate",children:Object(j.jsx)(ie,{menuMode:"list"})})]})})},de=(n(672),function(e){var t=Object.assign({},e);return Object(j.jsx)("footer",Object(d.a)({className:"footer"},t))}),ue=n(49),je=n.n(ue),be=n(195),me=n.n(be),xe=n(176),Oe=(n(673),function(){var e=Object(W.g)(),t=B().signIn,n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],r=c[1],o=Object(a.useRef)({}),l=Object(a.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(n){var a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=o.current,c=a.email,s=a.password,r(!0),e.next=5,t(c,s);case 5:(i=e.sent).isOk||(r(!1),Object(xe.a)(i.message,"error",2e3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=Object(a.useCallback)((function(){e.push("/create-account")}),[e]);return Object(j.jsx)("form",{className:"login-form",onSubmit:l,children:Object(j.jsxs)(je.a,{formData:o.current,disabled:s,children:[Object(j.jsxs)(ue.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:pe,children:[Object(j.jsx)(ue.RequiredRule,{message:"Email is required"}),Object(j.jsx)(ue.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsxs)(ue.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:he,children:[Object(j.jsx)(ue.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsx)(ue.Item,{dataField:"rememberMe",editorType:"dxCheckBox",editorOptions:fe,children:Object(j.jsx)(ue.Label,{visible:!1})}),Object(j.jsx)(ue.ButtonItem,{children:Object(j.jsx)(ue.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:s?Object(j.jsx)(me.a,{width:"24px",height:"24px",visible:!0}):"Sign In"})})}),Object(j.jsx)(ue.Item,{children:Object(j.jsx)("div",{className:"link",children:Object(j.jsx)(i.b,{to:"/reset-password",children:"Forgot password?"})})}),Object(j.jsx)(ue.ButtonItem,{children:Object(j.jsx)(ue.ButtonOptions,{text:"Create an account",width:"100%",onClick:d})})]})})}),pe={stylingMode:"filled",placeholder:"Email",mode:"email"},he={stylingMode:"filled",placeholder:"Password",mode:"password"},fe={text:"Remember me",elementAttr:{class:"form-text"}},ve=(n(674),function(e){var t=Object(W.g)(),n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],r=c[1],o=Object(a.useRef)({}),l=Object(a.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(n){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=o.current.email,r(!0),e.next=5,S(a);case 5:c=e.sent,r(!1),c.isOk?(t.push("/login"),Object(xe.a)("We've sent a link to reset your password. Check your inbox.","success",2500)):Object(xe.a)(c.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(j.jsx)("form",{className:"reset-password-form",onSubmit:l,children:Object(j.jsxs)(je.a,{formData:o.current,disabled:s,children:[Object(j.jsxs)(ue.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:ge,children:[Object(j.jsx)(ue.RequiredRule,{message:"Email is required"}),Object(j.jsx)(ue.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsx)(ue.ButtonItem,{children:Object(j.jsx)(ue.ButtonOptions,{elementAttr:we,width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:s?Object(j.jsx)(me.a,{width:"24px",height:"24px",visible:!0}):"Reset my password"})})}),Object(j.jsx)(ue.Item,{children:Object(j.jsxs)("div",{className:"login-link",children:["Return to ",Object(j.jsx)(i.b,{to:"/login",children:"Sign In"})]})})]})})}),ge={stylingMode:"filled",placeholder:"Email",mode:"email"},we={class:"submit-button"},ye=(n(675),function(e){var t=Object(W.g)(),n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],r=c[1],o=Object(a.useRef)({}),l=Object(a.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(n){var a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=o.current,c=a.email,s=a.password,r(!0),e.next=5,C(c,s);case 5:i=e.sent,r(!1),i.isOk?t.push("/login"):Object(xe.a)(i.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=Object(a.useCallback)((function(e){return e.value===o.current.password}),[]);return Object(j.jsx)("form",{className:"create-account-form",onSubmit:l,children:Object(j.jsxs)(je.a,{formData:o.current,disabled:s,children:[Object(j.jsxs)(ue.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:Ce,children:[Object(j.jsx)(ue.RequiredRule,{message:"Email is required"}),Object(j.jsx)(ue.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsxs)(ue.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:ke,children:[Object(j.jsx)(ue.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsxs)(ue.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:Ie,children:[Object(j.jsx)(ue.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ue.CustomRule,{message:"Passwords do not match",validationCallback:d}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsx)(ue.Item,{children:Object(j.jsxs)("div",{className:"policy-info",children:["By creating an account, you agree to the ",Object(j.jsx)(i.b,{to:"#",children:"Terms of Service"})," and ",Object(j.jsx)(i.b,{to:"#",children:"Privacy Policy"})]})}),Object(j.jsx)(ue.ButtonItem,{children:Object(j.jsx)(ue.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:s?Object(j.jsx)(me.a,{width:"24px",height:"24px",visible:!0}):"Create a new account"})})}),Object(j.jsx)(ue.Item,{children:Object(j.jsxs)("div",{className:"login-link",children:["Have an account? ",Object(j.jsx)(i.b,{to:"/login",children:"Sign In"})]})})]})})}),Ce={stylingMode:"filled",placeholder:"Email",mode:"email"},ke={stylingMode:"filled",placeholder:"Password",mode:"password"},Ie={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},Ne=function(e){var t=Object(W.g)(),n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],r=c[1],i=Object(a.useRef)({}),o=Object(W.h)().recoveryCode,l=Object(a.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(n){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=i.current.password,r(!0),e.next=5,I(a,o);case 5:c=e.sent,r(!1),c.isOk?t.push("/login"):Object(xe.a)(c.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,o]),d=Object(a.useCallback)((function(e){return e.value===i.current.password}),[]);return Object(j.jsx)("form",{onSubmit:l,children:Object(j.jsxs)(je.a,{formData:i.current,disabled:s,children:[Object(j.jsxs)(ue.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:Se,children:[Object(j.jsx)(ue.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsxs)(ue.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:Me,children:[Object(j.jsx)(ue.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ue.CustomRule,{message:"Passwords do not match",validationCallback:d}),Object(j.jsx)(ue.Label,{visible:!1})]}),Object(j.jsx)(ue.ButtonItem,{children:Object(j.jsx)(ue.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:s?Object(j.jsx)(me.a,{width:"24px",height:"24px",visible:!0}):"Continue"})})})]})})},Se={stylingMode:"filled",placeholder:"Password",mode:"password"},Me={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},Re=n(438),Pe=n.n(Re),Be=[{text:"CRM",icon:"user",path:"",items:[{text:"Contact List",path:"/crm-contact-list"},{text:"Contact Form",path:"/crm-contact-form"}]}],Te=(n(676),n(252)),Ee=function(e){var t=e.children,n=e.selectedItemChanged,c=e.openMenu,s=e.compactMode,r=e.onMenuReady,i=T().isLarge;var o=Object(a.useMemo)((function(){return Be.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(d.a)(Object(d.a)({},e),{},{expanded:i})}))}),[]),l=m().navigationData.currentPath,u=Object(a.useRef)(),b=Object(a.useRef)(),x=Object(a.useCallback)((function(e){var t=b.current;t&&Te.off(t,"dxclick"),b.current=e,Te.on(e,"dxclick",(function(e){c(e)}))}),[c]);return Object(a.useEffect)((function(){var e=u.current&&u.current.instance;e&&(void 0!==l&&(e.selectItem(l),e.expandItem(l)),s&&e.collapseAll())}),[l,s]),Object(j.jsxs)("div",{className:"dx-swatch-additional side-navigation-menu",ref:x,children:[t,Object(j.jsx)("div",{className:"menu-container",children:Object(j.jsx)(Pe.a,{ref:u,items:o,keyExpr:"path",selectionMode:"single",focusStateEnabled:!1,expandEvent:"click",onItemClick:n,onContentReady:r,width:"100%"})})]})};n(677);function Fe(){var e=T(),t=e.isSmall,n=e.isMedium,c=Object(a.useState)(t||n),s=Object(u.a)(c,2),r=s[0],i=s[1],o=Object(a.useCallback)((function(){r&&setTimeout((function(){return i(!1)}))}),[r]);return[r?"pre-init-blink-fix":"",o]}var Le=function(e){var t=e.title,n=e.children,s=Object(a.useRef)(),r=Object(W.g)(),i=T(),o=i.isXSmall,l=i.isLarge,d=Fe(),b=Object(u.a)(d,2),m=b[0],x=b[1],O=Object(a.useState)(l?De.Opened:De.Closed),p=Object(u.a)(O,2),h=p[0],f=p[1],v=Object(a.useCallback)((function(e){var t=e.event;f((function(e){return e===De.Closed?De.Opened:De.Closed})),t.stopPropagation()}),[]),g=Object(a.useCallback)((function(){f((function(e){return e===De.Closed?De.TemporaryOpened:e}))}),[]),w=Object(a.useCallback)((function(){f((function(e){return e===De.Closed||l?e:De.Closed}))}),[l]),y=Object(a.useCallback)((function(e){var t=e.itemData.path,n=e.event,a=e.node;h!==De.Closed&&t&&!a.selected?(r.push(t),s.current.instance.scrollTo(0),l&&h!==De.TemporaryOpened||(f(De.Closed),n.stopPropagation())):n.preventDefault()}),[r,h,l]);return Object(j.jsxs)("div",{className:"side-nav-outer-toolbar",children:[Object(j.jsx)(le,{menuToggleEnabled:!0,toggleMenu:v,title:t}),Object(j.jsxs)(ee.a,{className:["drawer",m].join(" "),position:"before",closeOnOutsideClick:w,openedStateMode:l?"shrink":"overlap",revealMode:o?"slide":"expand",minSize:o?0:60,maxSize:250,shading:!l,opened:h!==De.Closed,template:"menu",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)($.a,{ref:s,className:"layout-body with-footer",children:[Object(j.jsx)("div",{className:"content",children:c.a.Children.map(n,(function(e){return e.type!==de&&e}))}),Object(j.jsx)("div",{className:"content-block",children:c.a.Children.map(n,(function(e){return e.type===de&&e}))})]})}),Object(j.jsx)(oe.Template,{name:"menu",children:Object(j.jsx)(Ee,{compactMode:h===De.Closed,selectedItemChanged:y,openMenu:g,onMenuReady:x})})]})]})},De={Closed:1,Opened:2,TemporaryOpened:3},qe=(n(678),n(679),function(e){var t=e.title,n=e.description,a=e.children;return Object(j.jsx)($.a,{height:"100%",width:"100%",className:"with-footer single-card",children:Object(j.jsxs)("div",{className:"dx-card content",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"title",children:t}),Object(j.jsx)("div",{className:"description",children:n})]}),a]})})}),Ae=function(){return Object(j.jsxs)(Le,{title:J,children:[Object(j.jsxs)(W.d,{children:[Z.map((function(e){var t=e.path,n=e.component;return Object(j.jsx)(W.b,{exact:!0,path:t,component:n},t)})),Object(j.jsx)(W.a,{to:"/crm-contact-list"})]}),Object(j.jsxs)(de,{children:["Copyright \xa9 2011-",(new Date).getFullYear()," ",J," Inc.",Object(j.jsx)("br",{}),"All trademarks or registered trademarks are property of their respective owners."]})]})},ze=function(){return Object(j.jsxs)(W.d,{children:[Object(j.jsx)(W.b,{exact:!0,path:"/login",children:Object(j.jsx)(qe,{title:"Sign In",children:Object(j.jsx)(Oe,{})})}),Object(j.jsx)(W.b,{exact:!0,path:"/create-account",children:Object(j.jsx)(qe,{title:"Sign Up",children:Object(j.jsx)(ye,{})})}),Object(j.jsx)(W.b,{exact:!0,path:"/reset-password",children:Object(j.jsx)(qe,{title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email.",children:Object(j.jsx)(ve,{})})}),Object(j.jsx)(W.b,{exact:!0,path:"/change-password/:recoveryCode",children:Object(j.jsx)(qe,{title:"Change Password",children:Object(j.jsx)(Ne,{})})}),Object(j.jsx)(W.a,{to:"/login"})]})};function Ue(){var e=B(),t=e.user;return e.loading?Object(j.jsx)(l.a,{visible:!0}):t?Object(j.jsx)(Ae,{}):Object(j.jsx)(ze,{})}var We=function(){var e=function(){var e=T();return e.isLarge?"screen-large":e.isMedium?"screen-medium":e.isSmall?"screen-small":"screen-x-small"}();return Object(j.jsx)(i.a,{children:Object(j.jsx)(R,{children:Object(j.jsx)(x,{children:Object(j.jsx)("div",{className:"app ".concat(e),children:Object(j.jsx)(Ue,{})})})})})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,684)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(We,{})}),document.getElementById("root")),Je()}},[[681,1,2]]]);