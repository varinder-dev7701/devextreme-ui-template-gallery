"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8627,7204,9946,59],{24754:function(e,t,a){a.d(t,{d:function(){return n},r:function(){return l}});const n=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],l=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},99660:function(e,t,a){a.d(t,{CN:function(){return l},T4:function(){return s},p6:function(){return u}});var n=a(23142);function l(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(e,t){return(0,n.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function u(e){return(0,n.p6)(new Date(e),"MM/dd/yyyy")}},96412:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(73396),l=a(87139),s=a(69147);const u={class:"card-wrapper"},o={class:"header"},r={key:0,class:"title"},i={key:0,class:"content"};var d=(0,n.aZ)({__name:"card-analytics",props:{title:{default:""},contentClass:{default:""},showData:{type:Boolean,default:!0},isMenuVisible:{type:Boolean,default:!0}},setup(e){const t=e,a=[{text:"Configure"},{text:"Remove"}];return(d,c)=>((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",{class:(0,l.C_)(["card",t.contentClass])},[(0,n._)("div",o,[(0,n.Wm)(s["default"],{visible:t.isMenuVisible,class:"overflow-menu",items:a},null,8,["visible"]),t.title?((0,n.wg)(),(0,n.iD)("div",r,(0,l.zw)(t.title),1)):(0,n.kq)("",!0),(0,n.WI)(d.$slots,"filter")]),e.showData?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.WI)(d.$slots,"default")])):(0,n.kq)("",!0)],2)]))}}),c=a(40089);const p=(0,c.Z)(d,[["__scopeId","data-v-0f4452d0"]]);var m=p},69147:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(73396),l=a(44870),s=a(83835),u=a.n(s),o=(0,n.aZ)({__name:"card-menu",props:{items:null,visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)((0,l.SU)(u()),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const r=o;var i=r},40365:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(73396),l=a(87139),s=a(44870),u=a(99660),o=a(96412);const r={class:"total"},i={key:0,class:"percentage"};var d=(0,n.aZ)({__name:"ticker-card",props:{data:{default:null},total:{default:null},percentage:null},setup(e){const t=e,a=(0,n.Fl)((()=>(t.data||[]).reduce(((e,{value:t,total:a})=>e+(t||a||0)),0)));return(e,d)=>((0,n.wg)(),(0,n.j4)(o["default"],{class:"tile",title:"props.title","show-data":null!==t.data||null!==t.total},{default:(0,n.w5)((()=>[(0,n._)("div",r,(0,l.zw)(null===t.total?(0,s.SU)(u.T4)((0,s.SU)(a)):t.total),1),0!==t.percentage?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("i",{class:(0,l.C_)(["dx-icon-"+(t.percentage>0?"spinup":"spindown")])},null,2),(0,n._)("span",null,(0,l.zw)(Math.abs(t.percentage))+"%",1)])):(0,n.kq)("",!0)])),_:1},8,["show-data"]))}}),c=a(40089);const p=(0,c.Z)(d,[["__scopeId","data-v-25bfb37f"]]);var m=p},88824:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(73396),l=a(44870),s=a(6224),u=a.n(s),o=a(68389),r=a(70369),i=a(24754),d=a(19647);const c={class:"toolbar-header"},p=(0,n._)("div",null,[(0,n._)("div",{class:"separator"})],-1);var m=(0,n.aZ)({__name:"toolbar-analytics",props:{showTabs:{type:Boolean,default:!1}},emits:["tab-change"],setup(e,{emit:t}){const a=e,[s,m]=i.r[4].value.split("/"),f=e=>{const[a,n]=e.itemData.value.split("/");t("tab-change",[a,n])};(0,n.bv)((()=>{t("tab-change",[s,m])}));const v={text:"Refresh",icon:"refresh",stylingMode:"text"},w={icon:"export",text:"Export",stylingMode:"text"};return(e,t)=>((0,n.wg)(),(0,n.j4)((0,l.SU)(o.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(o.DxItem),{location:"before"},{default:(0,n.w5)((()=>[(0,n._)("span",c,[(0,n.WI)(e.$slots,"default")])])),_:3}),a.showTabs?((0,n.wg)(),(0,n.j4)((0,l.SU)(o.DxItem),{key:0,location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(r.DxTabs),{width:(0,l.SU)(d.Br).isXSmall?150:"auto","show-nav-buttons":!1,"scroll-by-content":!0,"selected-item-keys":[5],"key-expr":"key",items:(0,l.SU)(i.r),onItemClick:t[0]||(t[0]=e=>f(e))},null,8,["width","items"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)((0,l.SU)(o.DxItem),{location:"after","locate-in-menu":"auto","css-class":"add-card"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)((0,l.SU)(u()),{icon:"plus",text:"Add Card",type:"default","styling-mode":"contained"})])])),_:1}),(0,n.Wm)((0,l.SU)(o.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:v}),(0,n.Wm)((0,l.SU)(o.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,n.w5)((()=>[p])),_:1}),(0,n.Wm)((0,l.SU)(o.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:w})])),_:3}))}});const f=m;var v=f},3668:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(73396),l=a(44870),s=a(45903),u=a(26898),o=a(59450),r=a(88824),i=a(37081),d=a(96412),c=(0,n.aZ)({__name:"revenue-snapshot-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Revenue Snapshot (All Products)","content-class":"sales-by-category"},{default:(0,n.w5)((()=>[t.data?((0,n.wg)(),(0,n.j4)((0,l.SU)(i.DxPieChart),{key:0,"data-source":t.data,type:"doughnut",diameter:.8,"inner-radius":.6},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.DxSeries),{"argument-field":"name","value-field":"value"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.DxLabel),{"background-color":"none","radial-offset":-20,visible:!0,"customize-text":e=>e.percentText},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.DxFont),{color:"#757575",size:15})])),_:1},8,["customize-text"])])),_:1}),(0,n.Wm)((0,l.SU)(i.DxLegend),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(i.DxMargin),{top:70})])),_:1}),(0,n.Wm)((0,l.SU)(i.DxSize),{height:270})])),_:1},8,["data-source","diameter","inner-radius"])):(0,n.kq)("",!0)])),_:1}))}});const p=c;var m=p,f=a(6368),v=(0,n.aZ)({__name:"conversion-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Conversion Funnel (All Products)","content-class":"opportunities"},{default:(0,n.w5)((()=>[t.data?((0,n.wg)(),(0,n.j4)((0,l.SU)(f.DxFunnel),{key:0,"data-source":t.data,"argument-field":"name","value-field":"value"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(f.DxLabel),{visible:!0,position:"inside","background-color":"none","customize-text":e=>`$${e.valueText}`},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(f.DxFormat),{type:"largeNumber",precision:1})])),_:1},8,["customize-text"]),(0,n.Wm)((0,l.SU)(f.DxLegend),{visible:!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(f.DxMargin),{top:70})])),_:1}),(0,n.Wm)((0,l.SU)(f.DxSize),{height:270})])),_:1},8,["data-source"])):(0,n.kq)("",!0)])),_:1}))}});const w=v;var g=w,_=a(75699),x=(0,n.aZ)({__name:"revenue-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Revenue","content-class":"sales"},{default:(0,n.w5)((()=>[t.data?((0,n.wg)(),(0,n.j4)((0,l.SU)(_.DxChart),{key:0,"data-source":t.data},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(_.DxSeries),{"value-field":"total"}),(0,n.Wm)((0,l.SU)(_.DxCommonSeriesSettings),{"argument-field":"date",type:"splinearea"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(_.DxBorder),{visible:!0})])),_:1}),(0,n.Wm)((0,l.SU)(_.DxArgumentAxis),{"argument-type":"datetime"}),(0,n.Wm)((0,l.SU)(_.DxValueAxis),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(_.DxLabel),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(_.DxFormat),{type:"currency",currency:"USD"})])),_:1})])),_:1}),(0,n.Wm)((0,l.SU)(_.DxLegend),{visible:!1}),(0,n.Wm)((0,l.SU)(_.DxSize),{height:270})])),_:1},8,["data-source"])):(0,n.kq)("",!0)])),_:1}))}});const S=x;var h=S,y=a(69119),D=a(93527),b=(0,n.aZ)({__name:"revenue-analysis-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Revenue Analysis","content-class":"sales-by-state grid"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(y.DxDataGrid),{"data-source":t.data,height:290,"load-panel":{enabled:!1}},{salesBullet:(0,n.w5)((e=>[(0,n.Wm)((0,l.SU)(D.DxBullet),{"show-target":!1,"show-zero-level":!1,value:100*e.data.data?.percentage,"start-scale-value":0,"end-scale-value":100},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(D.DxTooltip),{enabled:!1}),(0,n.Wm)((0,l.SU)(D.DxSize),{width:200,height:20})])),_:2},1032,["value"])])),default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(y.DxColumn),{caption:"State","data-field":"stateName"}),(0,n.Wm)((0,l.SU)(y.DxColumn),{alignment:"left",caption:"Sales","data-field":"total","data-type":"number",format:"currency","sort-order":"desc","hiding-priority":2}),(0,n.Wm)((0,l.SU)(y.DxColumn),{alignment:"left",caption:"% Sold","data-field":"percentage",name:"percentN",format:"percent","hiding-priority":1}),(0,n.Wm)((0,l.SU)(y.DxColumn),{alignment:"left",caption:"Percentage","data-field":"percentage",name:"percentB","cell-template":"salesBullet","css-class":"sales-bullet",width:200})])),_:1},8,["data-source"])])),_:1}))}}),W=a(40089);const U=(0,W.Z)(b,[["__scopeId","data-v-73384d27"]]);var k=U,C=a(40365),Z=(0,n.aZ)({__name:"opportunities-ticker",props:{data:{default:()=>null}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(C["default"],{title:"Opportunities",data:t.data,percentage:20.3},null,8,["data","percentage"]))}});const j=Z;var I=j,z=(0,n.aZ)({__name:"revenue-total-ticker",props:{data:{default:()=>null}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(C["default"],{title:"Revenue Total",data:t.data,percentage:14.7},null,8,["data","percentage"]))}});const B=z;var M=B,T=(0,n.aZ)({__name:"conversion-ticker",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(C["default"],{title:"Conversion",total:"16%",percentage:-2.3},null,8,["percentage"]))}});const L=T;var A=L,$=(0,n.aZ)({__name:"leads-ticker",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(C["default"],{title:"Leads",total:"51",percentage:8.5},null,8,["percentage"]))}});const q=$;var F=q;const H={class:"view-wrapper"},P=(0,n.Uk)(" Dashboard "),R={class:"tiles"},N={class:"cards"};var V=(0,n.aZ)({__name:"analytics-dashboard",setup(e){const t=(0,l.iH)(null),a=(0,l.iH)(null),i=(0,l.iH)(null),d=(0,l.iH)(null),c=(0,l.iH)(!0),p=async(e,n)=>{c.value=!0,await Promise.all([(0,o.Uh)(e,n).then((e=>{t.value=e})),(0,o.ot)(e,n).then((e=>{d.value=e})),(0,o.X8)(e,n).then((e=>{a.value=e})),(0,o.ws)(e,n).then((e=>{i.value=e}))]).then((()=>{c.value=!1}))},f=([e,t])=>{p(e,t)};return(e,o)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,l.SU)(s.DxScrollView),{class:"view-wrapper-scroll"},{default:(0,n.w5)((()=>[(0,n._)("div",H,[(0,n.Wm)(r.Z,{"show-tabs":!0,onTabChange:o[0]||(o[0]=e=>f(e))},{default:(0,n.w5)((()=>[P])),_:1}),(0,n._)("div",R,[(0,n.Wm)(I,{data:t.value},null,8,["data"]),(0,n.Wm)(M,{data:a.value},null,8,["data"]),(0,n.Wm)(A),(0,n.Wm)(F)]),(0,n._)("div",N,[(0,n.Wm)(h,{data:a.value},null,8,["data"]),(0,n.Wm)(g,{data:t.value},null,8,["data"]),(0,n.Wm)(k,{data:i.value},null,8,["data"]),(0,n.Wm)(m,{data:d.value},null,8,["data"])])])])),_:1}),(0,n.Wm)((0,l.SU)(u.DxLoadPanel),{container:".view-wrapper",position:{of:".dx-drawer-content"},visible:c.value,"show-pane":!0},null,8,["position","visible"])],64))}});const G=(0,W.Z)(V,[["__scopeId","data-v-2f97786f"]]);var X=G}}]);