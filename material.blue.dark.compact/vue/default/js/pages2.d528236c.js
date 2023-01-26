"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[5469,8654],{24754:function(e,t,n){n.d(t,{d:function(){return a},r:function(){return l}});const a=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],l=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},70369:function(e,t,n){
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
var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxItem=t.DxTabs=void 0;var l=a(n(49406)),i=n(35535),o=n(35535),s=i.createComponent({props:{accessKey:String,dataSource:{},disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,itemHoldTimeout:Number,items:Array,itemTemplate:{},keyExpr:[Function,String],noDataText:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemHold:Function,onItemRendered:Function,onOptionChanged:Function,onSelectionChanged:Function,repaintChangesOnly:Boolean,rtlEnabled:Boolean,scrollByContent:Boolean,scrollingEnabled:Boolean,selectedIndex:Number,selectedItem:{},selectedItemKeys:Array,selectedItems:Array,selectionMode:String,showNavButtons:Boolean,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:dataSource":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:itemHoldTimeout":null,"update:items":null,"update:itemTemplate":null,"update:keyExpr":null,"update:noDataText":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemHold":null,"update:onItemRendered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:repaintChangesOnly":null,"update:rtlEnabled":null,"update:scrollByContent":null,"update:scrollingEnabled":null,"update:selectedIndex":null,"update:selectedItem":null,"update:selectedItemKeys":null,"update:selectedItems":null,"update:selectionMode":null,"update:showNavButtons":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=l.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={item:{isCollectionItem:!0,optionName:"items"}}}});t.DxTabs=s;var r=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:template":null,"update:text":null,"update:visible":null},props:{badge:String,disabled:Boolean,html:String,icon:String,template:{},text:String,visible:Boolean}});t.DxItem=r,r.$_optionName="items",r.$_isCollectionItem=!0,t["default"]=s},28995:function(e,t,n){var a=n(74962),l=n(64030),i=n(34571),o=n(9783),s="number",r="yyyy/MM/dd",d="yyyy/MM/dd HH:mm:ss",u=/^(\d{4,})(-)?(\d{2})(-)?(\d{2})(?:T(\d{2})(:)?(\d{2})?(:)?(\d{2}(?:\.(\d{1,3})\d*)?)?)?(Z|([+-])(\d{2})(:)?(\d{2})?)?$/,c=/^(\d{2}):(\d{2})(:(\d{2}))?$/,m=["","yyyy","","MM","","dd","THH","","mm","","ss",".SSS"],h=/^(\d{4})\/(\d{2})\/(\d{2})$/,p=3,f=function(e,t){var n;return(0,o.HD)(e)&&!t&&(n=g(e)),n||_(e)};function v(e){return+e||0}function _(e){var t=y(e)===r,n=!(0,o.J_)(e)&&Date.parse(e);if(!n&&t){var a=e.match(h);if(a){var l=new Date(v(a[1]),v(a[2]),v(a[3]));return l.setFullYear(v(a[1])),l.setMonth(v(a[2])-1),l.setDate(v(a[3])),l}}return(0,o.kE)(n)?new Date(n):e}function g(e){var t=e.match(u);if(!t)return t=e.match(c),t?new Date(0,0,0,v(t[1]),v(t[2]),v(t[4])):void 0;var n=v(t[1]),a=--t[3],l=t[5],i=0,o=0,s=e=>(n<100&&e.setFullYear(n),e);i=v(t[14]),o=v(t[16]),"-"===t[13]&&(i=-i,o=-o);var r=v(t[6])-i,d=v(t[8])-o,m=v(t[10]),h=function(e){return e=e||"",v(e)*Math.pow(10,p-e.length)}(t[11]);return t[12]?s(new Date(Date.UTC(n,a,l,r,d,m,h))):s(new Date(n,a,l,r,d,m,h))}var b=function(e,t){var n=e.match(u),a="";if(!n)return n=e.match(c),n?n[3]?"HH:mm:ss":"HH:mm":void 0;for(var l=1;l<m.length;l++)n[l]&&(a+=m[l]||n[l]);return"Z"===n[12]&&(a+="'Z'"),n[14]&&(n[15]?a+="xxx":n[16]?a+="xx":a+="x"),a},x=function(e){return"number"===typeof e?new Date(e):f(e,!(0,a.Z)().forceIsoDateParsing)},S=function(e,t){return t?(0,o.J_)(e)?t===s?e&&e.valueOf?e.valueOf():null:(0,l.P)(t,i.Z)(e):null:e},y=function(e){return"number"===typeof e?s:(0,o.HD)(e)?((0,a.Z)().forceIsoDateParsing&&(t=b(e)),t||(e.indexOf(":")>=0?d:r)):e?null:void 0;var t};t["Z"]={dateParser:f,deserializeDate:x,serializeDate:S,getDateSerializationFormat:y}},32254:function(e,t,n){n.d(t,{I:function(){return l}});var a=n(48868);class l{constructor(e){this.DIRECTION_HORIZONTAL="horizontal",this.DIRECTION_VERTICAL="vertical",this.DIRECTION_BOTH="both",this.direction=null!==e&&void 0!==e?e:a.Et}get isHorizontal(){return this.direction===a.Xv||this.direction===a.b$}get isVertical(){return this.direction===a.Et||this.direction===a.b$}get isBoth(){return this.direction===a.b$}}},49406:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(79264),l=n(60621),i=n(66487),o=n(26256),s=n(70732),r=n(47949),d=n(26611),u=n(84518),c=n(72602),m=n(9783),h=n(12901),p=n(12145),f=n(67040),v="dx-tabs-item-badge",_="dx-badge",g=f.Z.inherit({_renderWatchers:function(){this.callBase(),this._startWatcher("badge",this._renderBadge.bind(this))},_renderBadge:function(e){if(this._$element.children("."+_).remove(),e){var t=(0,l.Z)("<div>").addClass(v).addClass(_).text(e);this._$element.append(t)}}}),b=g,x="dx-tabs-expanded",S=n(6530),y=n(31349),w=n(91710),D=n(19428),I=n(12023),B=n(48898),C=n(42061);function W(e){return e.scrollWidth-e.clientWidth}n(32254);function k(e,t){return Math.round(e)<=t}function U(e,t,n){return Math.round(W(e)-t)<=n}var T="dx-tabs",E="dx-tabs-wrapper",$="dx-tabs-stretched",M="dx-tabs-scrollable",Z="dx-tabs-nav-buttons",N="dx-overflow-hidden",R="dx-tab",H="dx-tab-selected",A="dx-tabs-nav-button",O="dx-tabs-nav-button-left",P="dx-tabs-nav-button-right",F="dx-tab-text",z="dxTabData",L="chevronnext",V="chevronprev",j=100,K=5,Y=300,q=30,X=D.Z.inherit({_activeStateUnit:"."+R,_getDefaultOptions:function(){return(0,c.l)(this.callBase(),{hoverStateEnabled:!0,showNavButtons:!0,scrollByContent:!0,scrollingEnabled:!0,selectionMode:"single",activeStateEnabled:!0,selectionRequired:!1,selectOnFocus:!0,loopItemFocus:!1,useInkRipple:!1,badgeExpr:function(e){return e?e.badge:void 0},_itemAttributes:{role:"tab"}})},_defaultOptionsRules:function(){var e=(0,S.Vk)();return this.callBase().concat([{device:function(){return"desktop"!==o.Z.real().deviceType},options:{showNavButtons:!1}},{device:{deviceType:"desktop"},options:{scrollByContent:!1}},{device:function(){return"desktop"===o.Z.real().deviceType&&!o.Z.isSimulator()},options:{focusStateEnabled:!0}},{device:function(){return(0,S.x2)(e)},options:{useInkRipple:!0,selectOnFocus:!1}}])},_init:function(){this.callBase(),this.setAria("role","tablist"),this.$element().addClass(T),this._renderWrapper(),this._renderMultiple(),this._feedbackHideTimeout=j},_initTemplates:function(){this.callBase(),this._templateManager.addDefaultTemplates({item:new B.c(function(e,t){(0,m.PO)(t)?this._prepareDefaultItemTemplate(t,e):e.text(String(t));var n=(0,I.H)(t.icon);n&&n.prependTo(e),e.wrapInner((0,l.Z)("<span>").addClass(F))}.bind(this),["text","html","icon"],this.option("integrationOptions.watchMethod"))})},_createItemByTemplate:function(e,t){var{itemData:n,container:a,index:l}=t;return this._deferredTemplates[l]=new C.BH,e.render({model:n,container:a,index:l,onRendered:()=>this._deferredTemplates[l].resolve()})},_itemClass:function(){return R},_selectedItemClass:function(){return H},_itemDataKey:function(){return z},_initMarkup:function(){this._deferredTemplates=[],this.callBase(),this.option("useInkRipple")&&this._renderInkRipple(),this.$element().addClass(N)},_render:function(){this.callBase(),this._deferRenderScrolling()},_deferRenderScrolling(){C.gx.apply(this,this._deferredTemplates).done((()=>this._renderScrolling()))},_renderScrolling:function(){var e=[$,x,N];if(this.$element().removeClass(e.join(" ")),this.option("scrollingEnabled")&&this._isItemsWidthExceeded()){this._scrollable||(this._renderScrollable(),this._renderNavButtons());var t=this.getScrollable();if(t.update(),this.option("rtlEnabled")){var n=W((0,l.Z)(this.getScrollable().container()).get(0));t.scrollTo({left:n})}this._updateNavButtonsVisibility(),this._scrollToItem(this.option("selectedItem"))}this.option("scrollingEnabled")&&this._isItemsWidthExceeded()||(this._cleanScrolling(),this._needStretchItems()&&!this._isItemsWidthExceeded()&&this.$element().addClass($),this.$element().removeClass(Z).addClass(x))},_isItemsWidthExceeded:function(){var e=this._getSummaryItemsWidth(this._getVisibleItems(),!0);return e-1>(0,a.dz)(this.$element())},_needStretchItems:function(){var e=this._getVisibleItems(),t=(0,a.dz)(this.$element()),n=[];(0,p.S6)(e,((e,t)=>{n.push((0,a.Y_)(t,!0))}));var l=Math.max.apply(null,n);return l>=t/e.length},_cleanNavButtons:function(){this._leftButton&&this._rightButton&&(this._leftButton.$element().remove(),this._rightButton.$element().remove(),this._leftButton=null,this._rightButton=null)},_cleanScrolling:function(){this._scrollable&&(this._$wrapper.appendTo(this.$element()),this._scrollable.$element().remove(),this._scrollable=null,this._cleanNavButtons())},_renderInkRipple:function(){this._inkRipple=(0,d.sY)()},_toggleActiveState:function(e,t,n){if(this.callBase.apply(this,arguments),this._inkRipple){var a={element:e,event:n};t?this._inkRipple.showWave(a):this._inkRipple.hideWave(a)}},_renderMultiple:function(){"multiple"===this.option("selectionMode")&&this.option("selectOnFocus",!1)},_renderWrapper:function(){this._$wrapper=(0,l.Z)("<div>").addClass(E),this.$element().append(this._$wrapper)},_itemContainer:function(){return this._$wrapper},_renderScrollable:function(){var e=this.$element().wrapInner((0,l.Z)("<div>").addClass(M)).children();this._scrollable=this._createComponent(e,w.Z,{direction:"horizontal",showScrollbar:"never",useKeyboard:!1,useNative:!1,scrollByContent:this.option("scrollByContent"),onScroll:()=>{this._updateNavButtonsVisibility()}}),this.$element().append(this._scrollable.$element())},_scrollToItem:function(e){if(this._scrollable){var t=this._editStrategy.getItemElement(e);this._scrollable.scrollToElement(t)}},_renderNavButtons:function(){if(this.$element().toggleClass(Z,this.option("showNavButtons")),this.option("showNavButtons")){var e=this.option("rtlEnabled");this._leftButton=this._createNavButton(-q,e?L:V);var t=this._leftButton.$element();t.addClass(O),this.$element().prepend(t),this._rightButton=this._createNavButton(q,e?V:L);var n=this._rightButton.$element();n.addClass(P),this.$element().append(n)}},_updateNavButtonsVisibility:function(){var e=this.getScrollable();this._leftButton&&this._leftButton.option("disabled",k(e.scrollLeft(),1)),this._rightButton&&this._rightButton.option("disabled",U((0,l.Z)(e.container()).get(0),e.scrollLeft(),1))},_updateScrollPosition:function(e,t){this._scrollable.update(),this._scrollable.scrollBy(e/t)},_createNavButton:function(e,t){var n=this,a=n._createAction((function(){n._holdInterval=setInterval((function(){n._updateScrollPosition(e,K)}),K)})),o=(0,u.V4)(y.Z.name,"dxNavButton"),s=(0,u.V4)(h.Z.up,"dxNavButton"),d=(0,u.V4)(h.Z.out,"dxNavButton"),c=this._createComponent((0,l.Z)("<div>").addClass(A),r["default"],{focusStateEnabled:!1,icon:t,onClick:function(){n._updateScrollPosition(e,1)},integrationOptions:{}}),m=c.$element();return i.Z.on(m,o,{timeout:Y},function(e){a({event:e})}.bind(this)),i.Z.on(m,s,(function(){n._clearInterval()})),i.Z.on(m,d,(function(){n._clearInterval()})),c},_clearInterval:function(){this._holdInterval&&clearInterval(this._holdInterval)},_updateSelection:function(e){this._scrollable&&this._scrollable.scrollToElement(this.itemElements().eq(e[0]),{left:1,right:1})},_visibilityChanged:function(e){e&&this._dimensionChanged()},_dimensionChanged:function(){this._renderScrolling()},_itemSelectHandler:function(e){"single"===this.option("selectionMode")&&this.isItemSelected(e.currentTarget)||this.callBase(e)},_clean:function(){this._deferredTemplates=[],this._cleanScrolling(),this.callBase()},_optionChanged:function(e){switch(e.name){case"useInkRipple":case"scrollingEnabled":case"showNavButtons":this._invalidate();break;case"scrollByContent":this._scrollable&&this._scrollable.option(e.name,e.value);break;case"width":this.callBase(e),this._dimensionChanged();break;case"selectionMode":this._renderMultiple(),this.callBase(e);break;case"badgeExpr":this._invalidate();break;default:this.callBase(e)}},_afterItemElementInserted(){this.callBase(),this._deferRenderScrolling()},_afterItemElementDeleted(e,t){this.callBase(e,t),this._renderScrolling()},getScrollable(){return this._scrollable}});X.ItemClass=b,(0,s.Z)("dxTabs",X);var J=X},14581:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(73396),l=n(44870),i=n(6224),o=n.n(i),s=n(68389),r=n(70369),d=n(24754),u=n(19647);const c={class:"toolbar-header"},m=(0,a._)("div",null,[(0,a._)("div",{class:"separator"})],-1);var h=(0,a.aZ)({__name:"analytics-toolbar",props:{showTabs:{type:Boolean,default:!1}},emits:["tab-change"],setup(e,{emit:t}){const n=e,[i,h]=d.r[4].value.split("/"),p=e=>{const[n,a]=e.itemData.value.split("/");t("tab-change",[n,a])};(0,a.bv)((()=>{t("tab-change",[i,h])}));const f={text:"Refresh",icon:"refresh"},v={icon:"export",text:"Export"};return(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(s.DxToolbar),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(s.DxItem),{location:"before"},{default:(0,a.w5)((()=>[(0,a._)("span",c,[(0,a.WI)(e.$slots,"default")])])),_:3}),n.showTabs?((0,a.wg)(),(0,a.j4)((0,l.SU)(s.DxItem),{key:0,location:"before"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(r.DxTabs),{width:(0,l.SU)(u.Br).isXSmall?150:"auto","show-nav-buttons":!1,"scroll-by-content":!0,"selected-item-keys":[5],"key-expr":"key",items:(0,l.SU)(d.r),onItemClick:t[0]||(t[0]=e=>p(e))},null,8,["width","items"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto","css-class":"add-card"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)((0,l.SU)(o()),{icon:"plus",text:"Add Card",type:"default","styling-mode":"contained"})])])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:f}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:v})])),_:3}))}});const p=h;var f=p},33625:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(73396),l=n(44870),i=n(26898),o=(0,a.aZ)({__name:"loading-panel",props:{loading:{type:Boolean,default:!0}},setup(e){const t=e;return(e,n)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(i.DxLoadPanel),{container:".view-wrapper",position:{of:".dx-drawer-content"},visible:t.loading,"show-pane":!0},null,8,["position","visible"]))}});const s=o;var r=s},96859:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(73396),l=n(44870),i=n(37081),o=n(75699),s=n(70870),r=(0,a.aZ)({__name:"sales-by-range-card",props:{data:null},setup(e){const t=e;return(e,n)=>((0,a.wg)(),(0,a.j4)(s["default"],{title:"Product Sale by Range"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxPieChart),{class:"sales-pie","data-source":t.data,type:"doughnut",diameter:.8,"inner-radius":.6},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxSeries),{"argument-field":"name","value-field":"value"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxLabel),{"background-color":"none","radial-offset":-20,visible:!0,"customize-text":e=>e.percentText},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxFont),{color:"#757575",size:15})])),_:1},8,["customize-text"])])),_:1}),(0,a.Wm)((0,l.SU)(i.DxLegend),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxMargin),{top:70})])),_:1}),(0,a.Wm)((0,l.SU)(i.DxSize),{height:270}),(0,a.Wm)((0,l.SU)(i.DxLegend),{visible:!1})])),_:1},8,["data-source","diameter","inner-radius"]),(0,a.Wm)((0,l.SU)(o.DxChart),{class:"sales-bars","data-source":t.data,rotated:!0},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(o.DxCommonAxisSettings),{visible:!1},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(o.DxTick),{visible:!1})])),_:1}),(0,a.Wm)((0,l.SU)(o.DxLegend),{visible:!1}),(0,a.Wm)((0,l.SU)(o.DxCommonSeriesSettings),{"argument-field":"name","value-field":"value",type:"bar","ignore-empty-points":!0}),(0,a.Wm)((0,l.SU)(o.DxSeriesTemplate),{"name-field":"name"}),(0,a.Wm)((0,l.SU)(o.DxValueAxis),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(o.DxLabel),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(o.DxFormat),{type:"largeNumber"})])),_:1})])),_:1})])),_:1},8,["data-source"])])),_:1}))}}),d=n(40089);const u=(0,d.Z)(r,[["__scopeId","data-v-6743fcee"]]);var c=u},15989:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(73396),l=n(44870),i=n(75699),o=n(83835),s=n(70870);const r={class:"sales-filter"};var d=(0,a.aZ)({__name:"sales-performance-card",props:{visualRange:null,groupByPeriods:null,data:null},emits:["performance-period-changed"],setup(e,{emit:t}){const n=e;return(d,u)=>((0,a.wg)(),(0,a.j4)(s["default"],{title:"Sales Performance","content-class":"sales"},{filter:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)((0,l.SU)(o.DxDropDownButton),{"styling-mode":"text","use-select-mode":!0,items:n.groupByPeriods,"selected-item-key":n.groupByPeriods[1],onSelectionChanged:u[0]||(u[0]=e=>t("performance-period-changed",e))},null,8,["items","selected-item-key"])])])),default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxChart),{"data-source":e.data},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxArgumentAxis),{"visual-range":n.visualRange},null,8,["visual-range"]),(0,a.Wm)((0,l.SU)(i.DxTooltip),{enabled:!0,"customize-tooltip":e=>({text:e})},null,8,["customize-tooltip"]),(0,a.Wm)((0,l.SU)(i.DxSeriesTemplate),{"name-field":"category"}),(0,a.Wm)((0,l.SU)(i.DxCommonSeriesSettings),{"argument-field":"date","value-field":"total","hover-mode":"includePoints"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxPoint),{"hover-mode":"allArgumentPoints"})])),_:1}),(0,a.Wm)((0,l.SU)(i.DxArgumentAxis),{"argument-type":"datetime","value-margins-enabled":!1}),(0,a.Wm)((0,l.SU)(i.DxLegend),{visible:!1}),(0,a.Wm)((0,l.SU)(i.DxSize),{height:270})])),_:1},8,["data-source"])])),_:1}))}}),u=n(40089);const c=(0,u.Z)(d,[["__scopeId","data-v-fee7f332"]]);var m=c},60313:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(73396),l=n(44870),i=n(30850),o=n(70870),s=(0,a.aZ)({__name:"sales-range-card",props:{data:null},emits:["range-changed"],setup(e,{emit:t}){const n=e;return(e,s)=>((0,a.wg)(),(0,a.j4)(o["default"],{"content-class":"sales-range","selected-range-update-mode":"reset","is-menu-visible":!1},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxRangeSelector),{"data-source":n.data,"onUpdate:value":s[0]||(s[0]=e=>t("range-changed",e))},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxScale),{"minor-tick-interval":"day","tick-interval":"month","value-type":"datetime"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxMinorTick),{visible:!1}),(0,a.Wm)((0,l.SU)(i.DxMarker),{visible:!1}),(0,a.Wm)((0,l.SU)(i.DxLabel),{format:"MMM yyyy"})])),_:1}),(0,a.Wm)((0,l.SU)(i.DxSize),{height:90}),(0,a.Wm)((0,l.SU)(i.DxLoadingIndicator),{show:!1}),(0,a.Wm)((0,l.SU)(i.DxChart),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxSeries),{type:"line","argument-field":"date","value-field":"total"})])),_:1})])),_:1},8,["data-source"])])),_:1}))}}),r=n(40089);const d=(0,r.Z)(s,[["__scopeId","data-v-4527de5b"]]);var u=d},81954:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(73396),l=n(44870),i=n(45903),o=n(23142),s=n(59450),r=n(24754),d=n(33625),u=n(14581),c=n(60313),m=n(96859),h=n(15989);const p={class:"view-wrapper"},f=(0,a.Uk)("Sales Report"),v={class:"cards"};var _=(0,a.aZ)({__name:"analytics-sales-report",setup(e){const t=(0,l.iH)(null),n=(0,l.iH)(null),_=(0,l.iH)(null),g=(0,l.iH)([]),b=["Day","Month"],x=(0,l.iH)(!0),S=async({item:e})=>{x.value=!0,n.value=await(0,s.gm)(e.toLowerCase()),x.value=!1},y=async e=>{g.value=e,x.value=!0,_.value=await(0,s.ot)(...e.map((e=>(0,o.p6)(e,"yyyy-MM-dd")))),x.value=!1},w=async e=>{x.value=!0;const[a,l]=r.r[4].value.split("/");await Promise.all([(0,s.X8)(a,l).then((e=>{t.value=e})),(0,s.gm)(e).then((e=>{n.value=e}))]).then((()=>{x.value=!1}))};return(0,a.bv)((()=>{w(b[1].toLowerCase())})),(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(i.DxScrollView),{class:"view-wrapper-scroll"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(u["default"],null,{default:(0,a.w5)((()=>[f])),_:1}),(0,a._)("div",v,[(0,a.Wm)(c["default"],{data:t.value,class:"sales-range-card",onRangeChanged:y},null,8,["data"]),(0,a.Wm)(m["default"],{data:_.value},null,8,["data"]),(0,a.Wm)(h["default"],{data:n.value,"group-by-periods":b,"visual-range":g.value,onPerformancePeriodChanged:S},null,8,["data","visual-range"])])])])),_:1}),(0,a.Wm)(d["default"],{loading:x.value},null,8,["loading"])],64))}}),g=n(40089);const b=(0,g.Z)(_,[["__scopeId","data-v-007b00de"]]);var x=b}}]);