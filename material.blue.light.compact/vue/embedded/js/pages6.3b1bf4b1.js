"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[5303],{24754:function(e,t,n){n.d(t,{d:function(){return a},r:function(){return l}});const a=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],l=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},64399:function(e,t,n){
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
var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxToolbarItem=t.DxTo=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxHide=t.DxFrom=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxPopup=void 0;var l=a(n(15861)),i=n(35535),o=n(35535),u=i.createComponent({props:{accessKey:String,animation:Object,closeOnOutsideClick:[Boolean,Function],container:{},contentTemplate:{},copyRootClassesToWrapper:Boolean,deferRendering:Boolean,disabled:Boolean,dragAndResizeArea:{},dragEnabled:Boolean,dragOutsideBoundary:Boolean,elementAttr:{},focusStateEnabled:Boolean,fullScreen:Boolean,height:[Function,Number,String],hideOnOutsideClick:[Boolean,Function],hideOnParentScroll:Boolean,hint:String,hoverStateEnabled:Boolean,maxHeight:[Function,Number,String],maxWidth:[Function,Number,String],minHeight:[Function,Number,String],minWidth:[Function,Number,String],onContentReady:Function,onDisposing:Function,onHidden:Function,onHiding:Function,onInitialized:Function,onOptionChanged:Function,onResize:Function,onResizeEnd:Function,onResizeStart:Function,onShowing:Function,onShown:Function,onTitleRendered:Function,position:[Function,Object,String],resizeEnabled:Boolean,restorePosition:Boolean,rtlEnabled:Boolean,shading:Boolean,shadingColor:String,showCloseButton:Boolean,showTitle:Boolean,tabIndex:Number,title:String,titleTemplate:{},toolbarItems:Array,visible:Boolean,width:[Function,Number,String],wrapperAttr:{}},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:animation":null,"update:closeOnOutsideClick":null,"update:container":null,"update:contentTemplate":null,"update:copyRootClassesToWrapper":null,"update:deferRendering":null,"update:disabled":null,"update:dragAndResizeArea":null,"update:dragEnabled":null,"update:dragOutsideBoundary":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:fullScreen":null,"update:height":null,"update:hideOnOutsideClick":null,"update:hideOnParentScroll":null,"update:hint":null,"update:hoverStateEnabled":null,"update:maxHeight":null,"update:maxWidth":null,"update:minHeight":null,"update:minWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onHidden":null,"update:onHiding":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onResize":null,"update:onResizeEnd":null,"update:onResizeStart":null,"update:onShowing":null,"update:onShown":null,"update:onTitleRendered":null,"update:position":null,"update:resizeEnabled":null,"update:restorePosition":null,"update:rtlEnabled":null,"update:shading":null,"update:shadingColor":null,"update:showCloseButton":null,"update:showTitle":null,"update:tabIndex":null,"update:title":null,"update:titleTemplate":null,"update:toolbarItems":null,"update:visible":null,"update:width":null,"update:wrapperAttr":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=l.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},position:{isCollectionItem:!1,optionName:"position"},toolbarItem:{isCollectionItem:!0,optionName:"toolbarItems"}}}});t.DxPopup=u;var d=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var s=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=s,s.$_optionName="at";var r=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=r,r.$_optionName="boundaryOffset";var p=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=p,p.$_optionName="collision";var c=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=c,c.$_optionName="from",c.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var m=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=m,m.$_optionName="hide",m.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var h=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=h,h.$_optionName="my";var g=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=g,g.$_optionName="offset";var v=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=v,v.$_optionName="position";var f=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=f,f.$_optionName="show";var x=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=x,x.$_optionName="to";var b=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:cssClass":null,"update:disabled":null,"update:html":null,"update:locateInMenu":null,"update:location":null,"update:menuItemTemplate":null,"update:options":null,"update:showText":null,"update:template":null,"update:text":null,"update:toolbar":null,"update:visible":null,"update:widget":null},props:{cssClass:String,disabled:Boolean,html:String,locateInMenu:String,location:String,menuItemTemplate:{},options:{},showText:String,template:{},text:String,toolbar:String,visible:Boolean,widget:String}});t.DxToolbarItem=b,b.$_optionName="toolbarItems",b.$_isCollectionItem=!0,t["default"]=u},70369:function(e,t,n){
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
var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxItem=t.DxTabs=void 0;var l=a(n(49406)),i=n(35535),o=n(35535),u=i.createComponent({props:{accessKey:String,dataSource:{},disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,itemHoldTimeout:Number,items:Array,itemTemplate:{},keyExpr:[Function,String],noDataText:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemHold:Function,onItemRendered:Function,onOptionChanged:Function,onSelectionChanged:Function,repaintChangesOnly:Boolean,rtlEnabled:Boolean,scrollByContent:Boolean,scrollingEnabled:Boolean,selectedIndex:Number,selectedItem:{},selectedItemKeys:Array,selectedItems:Array,selectionMode:String,showNavButtons:Boolean,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:dataSource":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:itemHoldTimeout":null,"update:items":null,"update:itemTemplate":null,"update:keyExpr":null,"update:noDataText":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemHold":null,"update:onItemRendered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:repaintChangesOnly":null,"update:rtlEnabled":null,"update:scrollByContent":null,"update:scrollingEnabled":null,"update:selectedIndex":null,"update:selectedItem":null,"update:selectedItemKeys":null,"update:selectedItems":null,"update:selectionMode":null,"update:showNavButtons":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=l.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={item:{isCollectionItem:!0,optionName:"items"}}}});t.DxTabs=u;var d=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:template":null,"update:text":null,"update:visible":null},props:{badge:String,disabled:Boolean,html:String,icon:String,template:{},text:String,visible:Boolean}});t.DxItem=d,d.$_optionName="items",d.$_isCollectionItem=!0,t["default"]=u},86050:function(e,t,n){
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
var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxTextArea=void 0;var l=a(n(95185)),i=n(35535),o=i.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,autoResizeEnabled:Boolean,disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,inputAttr:{},isValid:Boolean,label:String,labelMode:String,maxHeight:[Number,String],maxLength:[Number,String],minHeight:[Number,String],name:String,onChange:Function,onContentReady:Function,onCopy:Function,onCut:Function,onDisposing:Function,onEnterKey:Function,onFocusIn:Function,onFocusOut:Function,onInitialized:Function,onInput:Function,onKeyDown:Function,onKeyUp:Function,onOptionChanged:Function,onPaste:Function,onValueChanged:Function,placeholder:String,readOnly:Boolean,rtlEnabled:Boolean,spellcheck:Boolean,stylingMode:String,tabIndex:Number,text:String,validationError:{},validationErrors:Array,validationMessageMode:String,validationMessagePosition:String,validationStatus:String,value:String,valueChangeEvent:String,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:autoResizeEnabled":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:inputAttr":null,"update:isValid":null,"update:label":null,"update:labelMode":null,"update:maxHeight":null,"update:maxLength":null,"update:minHeight":null,"update:name":null,"update:onChange":null,"update:onContentReady":null,"update:onCopy":null,"update:onCut":null,"update:onDisposing":null,"update:onEnterKey":null,"update:onFocusIn":null,"update:onFocusOut":null,"update:onInitialized":null,"update:onInput":null,"update:onKeyDown":null,"update:onKeyUp":null,"update:onOptionChanged":null,"update:onPaste":null,"update:onValueChanged":null,"update:placeholder":null,"update:readOnly":null,"update:rtlEnabled":null,"update:spellcheck":null,"update:stylingMode":null,"update:tabIndex":null,"update:text":null,"update:validationError":null,"update:validationErrors":null,"update:validationMessageMode":null,"update:validationMessagePosition":null,"update:validationStatus":null,"update:value":null,"update:valueChangeEvent":null,"update:visible":null,"update:width":null},model:{prop:"value",event:"update:value"},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=l.default,this.$_hasAsyncTemplate=!0}});t.DxTextArea=o,t["default"]=o},45944:function(e,t,n){
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
var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxValidationGroup=void 0;var l=a(n(97332)),i=n(35535),o=i.createComponent({props:{elementAttr:Object,height:[Function,Number,String],onDisposing:Function,onInitialized:Function,onOptionChanged:Function,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:elementAttr":null,"update:height":null,"update:onDisposing":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=l.default,this.$_hasAsyncTemplate=!0}});t.DxValidationGroup=o,t["default"]=o},95185:function(e,t,n){n.r(t);var a=n(60621),l=n(66487),i=n(84392),o=n(56901),u=n(70732),d=n(72602),s=n(9783),r=n(84518),p=n(12901),c=n(83828),m=n(79264),h=n(80101),g=n(27749),v="dx-textarea",f="dx-texteditor-input",x="dx-texteditor-input-auto-resize",b=g["default"].inherit({_getDefaultOptions:function(){return(0,d.l)(this.callBase(),{spellcheck:!0,minHeight:void 0,maxHeight:void 0,autoResizeEnabled:!1})},_initMarkup:function(){this.$element().addClass(v),this.callBase(),this.setAria("multiline","true")},_renderContentImpl:function(){this._updateInputHeight(),this.callBase()},_renderInput:function(){this.callBase(),this._renderScrollHandler()},_createInput:function(){var e=(0,a.Z)("<textarea>");return this._applyInputAttributes(e,this.option("inputAttr")),this._updateInputAutoResizeAppearance(e),e},_applyInputAttributes:function(e,t){e.attr(t).addClass(f)},_renderScrollHandler:function(){this._eventY=0;var e=this._input(),t=(0,h.M)(e,!0);l.Z.on(e,(0,r.V4)(c.Z.init,this.NAME),t,i.ZT),l.Z.on(e,(0,r.V4)(p.Z.down,this.NAME),this._pointerDownHandler.bind(this)),l.Z.on(e,(0,r.V4)(p.Z.move,this.NAME),this._pointerMoveHandler.bind(this))},_pointerDownHandler:function(e){this._eventY=(0,r.a0)(e).y},_pointerMoveHandler:function(e){var t=(0,r.a0)(e).y,n=this._eventY-t;(0,h.u)(this._input(),n)&&(e.isScrollingEvent=!0,e.stopPropagation()),this._eventY=t},_renderDimensions:function(){var e=this.$element(),t=e.get(0),n=this._getOptionValue("width",t),a=this._getOptionValue("height",t),l=this.option("minHeight"),i=this.option("maxHeight");e.css({minHeight:void 0!==l?l:"",maxHeight:void 0!==i?i:"",width:n,height:a})},_resetDimensions:function(){this.$element().css({height:"",minHeight:"",maxHeight:""})},_renderEvents:function(){this.option("autoResizeEnabled")&&l.Z.on(this._input(),(0,r.V4)("input paste",this.NAME),this._updateInputHeight.bind(this)),this.callBase()},_refreshEvents:function(){l.Z.off(this._input(),(0,r.V4)("input paste",this.NAME)),this.callBase()},_getHeightDifference(e){return(0,m.sQ)(this._$element.get(0),!1)+(0,m.sQ)(this._$textEditorContainer.get(0),!1)+(0,m.sQ)(this._$textEditorInputContainer.get(0),!1)+(0,m.p)("height",(0,o.Jj)().getComputedStyle(e.get(0))).margin},_updateInputHeight:function(){if((0,o.Ym)()){var e=this._input(),t=this.option("height"),n=void 0===t&&this.option("autoResizeEnabled"),a=n||void 0===t&&this.option("minHeight");if(a){this._resetDimensions(),this._$element.css("height",(0,m.zp)(this._$element)),e.css("height",0);var l=this._getHeightDifference(e);this._renderDimensions();var i=this._getBoundaryHeight("minHeight"),u=this._getBoundaryHeight("maxHeight"),d=e[0].scrollHeight;if(void 0!==i&&(d=Math.max(d,i-l)),void 0!==u){var s=u-l,r=d>s;d=Math.min(d,s),this._updateInputAutoResizeAppearance(e,!r)}e.css("height",d),n&&this._$element.css("height","auto")}else e.css("height","")}},_getBoundaryHeight:function(e){var t=this.option(e);if((0,s.$K)(t))return"number"===typeof t?t:(0,m.EJ)(t,this.$element().get(0).parentElement)},_renderInputType:i.ZT,_visibilityChanged:function(e){e&&this._updateInputHeight()},_updateInputAutoResizeAppearance:function(e,t){if(e){var n=(0,i.IS)(t,this.option("autoResizeEnabled"));e.toggleClass(x,n)}},_dimensionChanged:function(){this.option("visible")&&this._updateInputHeight()},_optionChanged:function(e){switch(e.name){case"autoResizeEnabled":this._updateInputAutoResizeAppearance(this._input(),e.value),this._refreshEvents(),this._updateInputHeight();break;case"value":case"height":this.callBase(e),this._updateInputHeight();break;case"minHeight":case"maxHeight":this._renderDimensions(),this._updateInputHeight();break;case"visible":this.callBase(e),e.value&&this._updateInputHeight();break;default:this.callBase(e)}}});(0,u.Z)("dxTextArea",b),t["default"]=b},80101:function(e,t,n){n.d(t,{M:function(){return o},u:function(){return i}});var a=n(60621),l=n(84518),i=function(e,t,n){var l=(0,a.Z)(e),i=n?l.scrollLeft():l.scrollTop(),o=n?"Width":"Height",u=l.prop("scroll".concat(o)),d=l.prop("client".concat(o)),s=u-d-i|0;if(0===i&&0===s)return!1;var r=0===i&&t>=0,p=0===s&&t<=0,c=i>0&&s>0;return!!(r||p||c)||void 0},o=function(e,t){var n=(0,a.Z)(e);return{validate:function(o){if((0,l.pR)(o)&&(u=o.target,!t||(0,a.Z)(u).is(e)))return!!i(n,-o.delta,o.shiftKey)&&(o._needSkipEvent=!0,!0);var u}}}},99080:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(73396),l=n(44870),i=n(64399),o=n(19647),u=n(45944),d=(0,a.aZ)({__name:"form-popup",props:{title:null,isVisible:{type:Boolean,default:!1}},emits:["save","update:isVisible"],setup(e,{emit:t}){const n=e,d=(0,l.iH)(),s=(0,l.iH)(n.isVisible),r=(0,l.iH)();(0,a.YP)((()=>n.isVisible),(e=>{s.value=e}));const p=()=>{d.value?.instance.validate().isValid&&(d.value?.instance.reset(),t("save"))},c=()=>{s.value=!1,d.value?.instance.reset(),t("update:isVisible",!1)},m={text:"Save",stylingMode:"outlined",type:"default",onClick:p},h={text:"Cancel",stylingMode:"text",type:"default",onClick:c};return(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(i.DxPopup),{ref_key:"popup",ref:r,title:n.title,visible:s.value,"full-screen":(0,l.SU)(o.Br).isSmall||(0,l.SU)(o.Br).isXSmall,width:"auto",height:"auto",onOptionChanged:t[0]||(t[0]=()=>r.value?.instance?.repaint())},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxToolbarItem),{widget:"dxButton",toolbar:"bottom",location:"after",options:m}),(0,a.Wm)((0,l.SU)(i.DxToolbarItem),{widget:"dxButton",toolbar:"bottom",location:"after",options:h}),(0,a.Wm)((0,l.SU)(u.DxValidationGroup),{ref_key:"validationGroup",ref:d},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3},512)])),_:3},8,["title","visible","full-screen"]))}});const s=d;var r=s},85219:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(73396),l=n(44870),i=n(26898),o=n.n(i),u=(0,a.aZ)({__name:"load-component",props:{isLoading:{type:Boolean,default:!1},containerSelector:{default:""},width:{default:"auto"},showContent:{type:Boolean,default:!0}},setup(e){const t=e;return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(o()),{visible:t.isLoading,"show-pane":!1,width:t.width,container:t.containerSelector,position:{of:t.containerSelector}},null,8,["visible","width","container","position"]),t.showContent?(0,a.WI)(e.$slots,"default",{key:0}):(0,a.kq)("",!0)],64))}});const d=u;var s=d},76464:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(73396),l=n(44870),i=n(67130),o=n(1175),u=n(21164),d=n(70085),s=(0,a.aZ)({__name:"task-list-gantt",props:{tasks:{default:()=>[]}},setup(e,{expose:t}){const n=e,s=(0,l.iH)(null),r=()=>{const e=new u.jsPDF;(0,d.AI)({jsPDFDocument:e,component:s.value.instance}).then((()=>{e.save("Tasks.pdf")}))},p=()=>{i.N.push("/planning-task-details")},c=e=>{e.event?.target?.closest(".dx-treelist-expanded, .dx-treelist-collapsed")||p()};return t({onExporting:r}),(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(o.DxGantt),{ref_key:"dxGanttCmp",ref:s,"task-list-width":500,"scale-type":"weeks",onTaskClick:c,height:700},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(o.DxTasks),{"data-source":n.tasks,"start-expr":"startDate","end-expr":"dueDate","title-expr":"text"},null,8,["data-source"]),(0,a.Wm)((0,l.SU)(o.DxColumn),{"data-field":"text",caption:"Subject",width:300}),(0,a.Wm)((0,l.SU)(o.DxColumn),{"data-field":"startDate",caption:"Start Date","data-type":"date","sort-order":"asc"}),(0,a.Wm)((0,l.SU)(o.DxColumn),{"data-field":"dueDate",caption:"Due Date","data-type":"date"}),(0,a.Wm)((0,l.SU)(o.DxToolbar),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(o.DxItem),{name:"undo"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"redo"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"separator"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"collapseAll"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"expandAll"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"separator"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"addTask"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"deleteTask"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"separator"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"zoomIn"}),(0,a.Wm)((0,l.SU)(o.DxItem),{name:"zoomOut"})])),_:1}),(0,a.Wm)((0,l.SU)(o.DxValidation),{"auto-update-parent-tasks":!0}),(0,a.Wm)((0,l.SU)(o.DxEditing),{enabled:!0})])),_:1},512))}});const r=s;var p=r},44155:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(73396),l=n(44870),i=n(69119),o=(n(43579),n(34774)),u=n(21164),d=n(43315),s=n(70085),r=n(30808),p=n(67130),c=n(71793),m=n(24973),h=n(27664);const g={class:"form-custom-list-prop"};var v=(0,a.aZ)({__name:"task-list-grid",props:{dataSource:{default:()=>null}},setup(e,{expose:t}){const n=e,v=(0,l.iH)(null);let f=!0;const x=e=>{const{rowType:t,rowElement:n,data:a}=e;"header"!==t&&"Completed"===a.status&&n.classList.add("completed")},b=e=>{f&&"detailAdaptive"!==e.rowType&&p.N.push("/planning-task-details")},S=()=>{f=!f},_=()=>v.value?.instance.addRow(),C=(e,t)=>{t.setValue(e),t.component.refresh(),t.component.focus()},y=(e,t)=>{t.setValue(e),t.component.refresh()},D=()=>{const e=new u.jsPDF;(0,s.d3)({jsPDFDocument:e,component:v.value.instance}).then((()=>{e.save("Tasks.pdf")}))},w=()=>{const e=new m.Workbook,t=e.addWorksheet("Tasks");(0,r.d)({component:v.value.instance,worksheet:t,autoFilterEnabled:!0}).then((()=>{e.xlsx.writeBuffer().then((e=>{(0,d.p)(new Blob([e],{type:"application/octet-stream"}),"Tasks.xlsx")}))}))};return t({addRow:_,exportToPdf:D,exportToXlsx:w,showColumnChooser(){v.value.instance.showColumnChooser()},search(e){v.value.instance.searchByText(e)},refresh(){v.value.instance.refresh()}}),(t,u)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(i.DxDataGrid),{ref_key:"dxDataGridCmp",ref:v,id:"tasks-grid",height:"100%","data-source":e.dataSource,onRowClick:u[0]||(u[0]=e=>b(e)),onRowPrepared:x,onEditingStart:S,onEditCanceled:S,onSaved:S,"hover-state-enabled":!0,"column-auto-width":!0},{cellPriority:(0,a.w5)((({data:e})=>[(0,a.Wm)(h["default"],{"show-bar":!0,value:e?.data?.priority||""},null,8,["value"])])),editCellPriority:(0,a.w5)((({data:e})=>[(0,a.Wm)((0,l.SU)(o.DxSelectBox),{class:"edit-cell",value:e?.value,items:(0,l.SU)(c.Lu),onValueChanged:t=>C(t.value,e),onSelectionChanged:e.component.updateDimensions,"field-template":"field"},{field:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.Wm)(h["default"],{"show-bar":!0,"is-field":!0,value:e.value},null,8,["value"])])])),item:(0,a.w5)((({data:e})=>[(0,a.Wm)(h["default"],{"show-bar":!0,value:e},null,8,["value"])])),_:2},1032,["value","items","onValueChanged","onSelectionChanged"])])),cellStatus:(0,a.w5)((({data:e})=>[(0,a.Wm)(h["default"],{value:e.value},null,8,["value"])])),editCellStatus:(0,a.w5)((({data:e})=>[(0,a.Wm)((0,l.SU)(o.DxSelectBox),{class:"edit-cell",value:e.value,items:(0,l.SU)(c.Ww),onValueChanged:t=>y(t.value,e),onSelectionChanged:e.component.updateDimensions,"field-template":"field"},{field:(0,a.w5)((()=>[(0,a.Wm)(h["default"],{"is-field":!0,value:e.value},null,8,["value"])])),item:(0,a.w5)((({data:e})=>[(0,a.Wm)(h["default"],{value:e},null,8,["value"])])),_:2},1032,["value","items","onValueChanged","onSelectionChanged"])])),default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxLoadPanel),{enabled:!1}),(0,a.Wm)((0,l.SU)(i.DxScrolling),{mode:"virtual"}),(0,a.Wm)((0,l.SU)(i.DxPaging),{"page-size":15}),(0,a.Wm)((0,l.SU)(i.DxPager),{visible:!0,"show-page-size-selector":!0}),(0,a.Wm)((0,l.SU)(i.DxEditing),{mode:"row","allow-updating":!0}),(0,a.Wm)((0,l.SU)(i.DxSelection),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,a.Wm)((0,l.SU)(i.DxSorting),{mode:"multiple"}),(0,a.Wm)((0,l.SU)(i.DxHeaderFilter),{visible:!0}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"text",caption:"Subject","hiding-priority":7},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"company",caption:"Company","hiding-priority":6},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"priority",caption:"Priority","hiding-priority":4,"cell-template":"cellPriority","edit-cell-template":"editCellPriority"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxColumnLookup),{"data-source":(0,l.SU)(c.Lu)},null,8,["data-source"]),(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"startDate",caption:"Start Date","data-type":"date","hiding-priority":2},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"dueDate",caption:"Due Date","data-type":"date","sort-order":"asc","hiding-priority":1},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"owner",caption:"Owner","hiding-priority":5},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1}),(0,a.Wm)((0,l.SU)(i.DxColumn),{"data-field":"status",caption:"Status","hiding-priority":3,"min-width":120,"cell-template":"cellStatus","edit-cell-template":"editCellStatus"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(i.DxColumnLookup),{"data-source":(0,l.SU)(c.Ww)},null,8,["data-source"]),(0,a.Wm)((0,l.SU)(i.DxRequiredRule))])),_:1})])),_:1},8,["data-source"]),(0,a.Wm)((0,l.SU)(i.DxLoadPanel),{visible:n.isLoading,container:".content",position:{of:".content"}},null,8,["visible","position"])],64))}}),f=n(40089);const x=(0,f.Z)(v,[["__scopeId","data-v-640973ce"]]);var b=x},26400:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(73396),l=n(44870),i=n(6224),o=n.n(i),u=n(70369),d=n.n(u),s=n(68389),r=n(59450),p=n(24754),c=n(99080),m=n(85219),h=n(54468),g=n(44155),v=n(41663),f=n(76464),x=n(71793),b=n(19647);const S=e=>((0,a.dD)("data-v-779c7cec"),e=e(),(0,a.Cn)(),e),_={class:"view-wrapper"},C=S((()=>(0,a._)("span",{class:"toolbar-header"},"Tasks",-1))),y=S((()=>(0,a._)("div",null,[(0,a._)("div",{class:"separator"})],-1))),D={key:0,class:"grid"},w={key:1,class:"kanban"},I={key:2,class:"gantt"};var W=(0,a.aZ)({__name:"planning-task-list",setup(e){const t=(0,l.iH)(!0),n=(0,l.iH)(p.d[0].text),i=(0,l.iH)("grid"),u=(0,l.iH)(null),S=(0,l.iH)(null),W=(0,l.iH)(x.nJ),k=(0,l.iH)([]),E=(0,l.iH)([]),B=(0,l.iH)([]),U=(0,l.iH)(!1),A=()=>{U.value=!0},H=()=>u.value.showColumnChooser(),F=e=>u.value.search(e.component.option("text")),N=()=>{({grid:u,gantt:S,kanban:null})[i.value]?.value.exportToPdf()},T=()=>{u.value.exportToXlsx()},O=async()=>{t.value=!0;const e=await(0,r.wH)();E.value=[...e],B.value=e,t.value=!1},R=async()=>{t.value=!0;const e=await(0,r.Ak)();k.value=e.filter((e=>!!e.status&&!!e.priority)),t.value=!1},M=e=>{const{itemData:t}=e;n.value=t.text;const a=p.d.find((e=>n.value===e.text))?.id;i.value=a||"grid","grid"!==a&&0===E.value.length?O():"grid"===a&&0===k.value.length&&R()},$=()=>{u.value.refresh()},P=()=>{U.value=!1};R();const z={text:"Refresh",icon:"refresh",onClick:$},j={text:"Column Chooser",icon:"columnchooser",onClick:H},V={text:"Export to PDF",icon:"exportpdf",onClick:N},Z={text:"Export to Exel",icon:"exportxlsx",onClick:T},K={placeholder:"Task Search",mode:"search",onInput:F};return(e,r)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",_,[(0,a.Wm)((0,l.SU)(s.DxToolbar),{class:"toolbar-details"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(s.DxItem),{location:"before"},{default:(0,a.w5)((()=>[C])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"before"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(d()),{width:(0,l.SU)(b.Br).isXSmall?220:"auto","show-nav-buttons":!1,"scroll-by-content":!0,"selected-index":0,items:(0,l.SU)(p.d),onItemClick:M},null,8,["width","items"])])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto","css-class":"add-grid-row"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)((0,l.SU)(o()),{icon:"plus",text:"Add Task",type:"default","styling-mode":"contained",onClick:A})])])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:z}),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:"grid"!==i.value,location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:j},null,8,["disabled"]),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:!["grid","gantt"].includes(i.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:V},null,8,["disabled"]),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:!["grid"].includes(i.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:Z},null,8,["disabled"]),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:!["grid"].includes(i.value),location:"after","locate-in-menu":"auto",widget:"dxTextBox",options:K},null,8,["disabled"])])),_:1}),(0,a.Wm)(m["default"],{"is-loading":t.value,"show-content":!!k.value.length},{default:(0,a.w5)((()=>[(0,l.SU)(p.d)[0].text===n.value?((0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(g["default"],{ref_key:"tasksGridCmp",ref:u,"data-source":k.value},null,8,["data-source"])])):(0,l.SU)(p.d)[1].text===n.value?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(v["default"],{tasks:E.value,onAddTask:A},null,8,["tasks"])])):(0,l.SU)(p.d)[2].text===n.value?((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)(f["default"],{ref_key:"tasksGanttCmp",ref:S,tasks:B.value},null,8,["tasks"])])):(0,a.kq)("",!0)])),_:1},8,["is-loading","show-content"])]),(0,a.Wm)(c["default"],{title:"New Task","is-visible":U.value,"onUpdate:is-visible":r[0]||(r[0]=e=>U.value=e),onSave:P},{default:(0,a.w5)((()=>[(0,a.Wm)(h["default"],{"content-by-screen":{xs:1,sm:1},"is-create-mode":!0,data:W.value},null,8,["data"])])),_:1},8,["is-visible"])],64))}}),k=n(40089);const E=(0,k.Z)(W,[["__scopeId","data-v-779c7cec"]]);var B=E}}]);