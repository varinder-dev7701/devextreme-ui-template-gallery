"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4969],{94969:function(e,t,l){
/*!
 * devextreme-vue
 * Version: 22.1.5
 * Build date: Fri Sep 02 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxValidationRule=t.DxTabPanelOptionsItem=t.DxTabPanelOptions=t.DxTabbedItem=t.DxTab=t.DxStringLengthRule=t.DxSimpleItem=t.DxRequiredRule=t.DxRangeRule=t.DxPatternRule=t.DxNumericRule=t.DxLabel=t.DxItem=t.DxGroupItem=t.DxEmptyItem=t.DxEmailRule=t.DxCustomRule=t.DxCompareRule=t.DxColCountByScreen=t.DxButtonOptions=t.DxButtonItem=t.DxAsyncRule=t.DxForm=void 0;var a=n(l(35543)),u=l(35535),o=l(35535),i=u.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,alignItemLabels:Boolean,alignItemLabelsInAllGroups:Boolean,colCount:[Number,String],colCountByScreen:Object,customizeItem:Function,disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,formData:{},height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,items:Array,labelLocation:String,labelMode:String,minColWidth:Number,onContentReady:Function,onDisposing:Function,onEditorEnterKey:Function,onFieldDataChanged:Function,onInitialized:Function,onOptionChanged:Function,optionalMark:String,readOnly:Boolean,requiredMark:String,requiredMessage:String,rtlEnabled:Boolean,screenByWidth:Function,scrollingEnabled:Boolean,showColonAfterLabel:Boolean,showOptionalMark:Boolean,showRequiredMark:Boolean,showValidationSummary:Boolean,tabIndex:Number,validationGroup:String,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:alignItemLabels":null,"update:alignItemLabelsInAllGroups":null,"update:colCount":null,"update:colCountByScreen":null,"update:customizeItem":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:formData":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:items":null,"update:labelLocation":null,"update:labelMode":null,"update:minColWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onEditorEnterKey":null,"update:onFieldDataChanged":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:optionalMark":null,"update:readOnly":null,"update:requiredMark":null,"update:requiredMessage":null,"update:rtlEnabled":null,"update:screenByWidth":null,"update:scrollingEnabled":null,"update:showColonAfterLabel":null,"update:showOptionalMark":null,"update:showRequiredMark":null,"update:showValidationSummary":null,"update:tabIndex":null,"update:validationGroup":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={ButtonItem:{isCollectionItem:!0,optionName:"items"},colCountByScreen:{isCollectionItem:!1,optionName:"colCountByScreen"},EmptyItem:{isCollectionItem:!0,optionName:"items"},GroupItem:{isCollectionItem:!0,optionName:"items"},item:{isCollectionItem:!0,optionName:"items"},SimpleItem:{isCollectionItem:!0,optionName:"items"},TabbedItem:{isCollectionItem:!0,optionName:"items"}}}});t.DxForm=i;var p=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:message":null,"update:reevaluate":null,"update:type":null,"update:validationCallback":null},props:{ignoreEmptyValue:Boolean,message:String,reevaluate:Boolean,type:String,validationCallback:Function}});t.DxAsyncRule=p,p.$_optionName="validationRules",p.$_isCollectionItem=!0,p.$_predefinedProps={type:"async"};var d=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:buttonOptions":null,"update:colSpan":null,"update:cssClass":null,"update:horizontalAlignment":null,"update:itemType":null,"update:name":null,"update:verticalAlignment":null,"update:visible":null,"update:visibleIndex":null},props:{buttonOptions:Object,colSpan:Number,cssClass:String,horizontalAlignment:String,itemType:String,name:String,verticalAlignment:String,visible:Boolean,visibleIndex:Number}});t.DxButtonItem=d,d.$_optionName="items",d.$_isCollectionItem=!0,d.$_predefinedProps={itemType:"button"},d.$_expectedChildren={buttonOptions:{isCollectionItem:!1,optionName:"buttonOptions"}};var r=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:bindingOptions":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:icon":null,"update:onClick":null,"update:onContentReady":null,"update:onDisposing":null,"update:onFocusIn":null,"update:onFocusOut":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:rtlEnabled":null,"update:stylingMode":null,"update:tabIndex":null,"update:template":null,"update:text":null,"update:type":null,"update:useSubmitBehavior":null,"update:validationGroup":null,"update:visible":null,"update:width":null},props:{accessKey:String,activeStateEnabled:Boolean,bindingOptions:Object,disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,icon:String,onClick:Function,onContentReady:Function,onDisposing:Function,onFocusIn:Function,onFocusOut:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,stylingMode:String,tabIndex:Number,template:{},text:String,type:String,useSubmitBehavior:Boolean,validationGroup:String,visible:Boolean,width:[Function,Number,String]}});t.DxButtonOptions=r,r.$_optionName="buttonOptions";var s=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:lg":null,"update:md":null,"update:sm":null,"update:xs":null},props:{lg:Number,md:Number,sm:Number,xs:Number}});t.DxColCountByScreen=s,s.$_optionName="colCountByScreen";var m=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:comparisonTarget":null,"update:comparisonType":null,"update:ignoreEmptyValue":null,"update:message":null,"update:type":null},props:{comparisonTarget:Function,comparisonType:String,ignoreEmptyValue:Boolean,message:String,type:String}});t.DxCompareRule=m,m.$_optionName="validationRules",m.$_isCollectionItem=!0,m.$_predefinedProps={type:"compare"};var c=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:message":null,"update:reevaluate":null,"update:type":null,"update:validationCallback":null},props:{ignoreEmptyValue:Boolean,message:String,reevaluate:Boolean,type:String,validationCallback:Function}});t.DxCustomRule=c,c.$_optionName="validationRules",c.$_isCollectionItem=!0,c.$_predefinedProps={type:"custom"};var g=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:message":null,"update:type":null},props:{ignoreEmptyValue:Boolean,message:String,type:String}});t.DxEmailRule=g,g.$_optionName="validationRules",g.$_isCollectionItem=!0,g.$_predefinedProps={type:"email"};var b=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:colSpan":null,"update:cssClass":null,"update:itemType":null,"update:name":null,"update:visible":null,"update:visibleIndex":null},props:{colSpan:Number,cssClass:String,itemType:String,name:String,visible:Boolean,visibleIndex:Number}});t.DxEmptyItem=b,b.$_optionName="items",b.$_isCollectionItem=!0,b.$_predefinedProps={itemType:"empty"};var C=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:alignItemLabels":null,"update:caption":null,"update:colCount":null,"update:colCountByScreen":null,"update:colSpan":null,"update:cssClass":null,"update:items":null,"update:itemType":null,"update:name":null,"update:template":null,"update:visible":null,"update:visibleIndex":null},props:{alignItemLabels:Boolean,caption:String,colCount:Number,colCountByScreen:Object,colSpan:Number,cssClass:String,items:Array,itemType:String,name:String,template:{},visible:Boolean,visibleIndex:Number}});t.DxGroupItem=C,C.$_optionName="items",C.$_isCollectionItem=!0,C.$_predefinedProps={itemType:"group"},C.$_expectedChildren={colCountByScreen:{isCollectionItem:!1,optionName:"colCountByScreen"}};var v=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:alignItemLabels":null,"update:badge":null,"update:buttonOptions":null,"update:caption":null,"update:colCount":null,"update:colCountByScreen":null,"update:colSpan":null,"update:cssClass":null,"update:dataField":null,"update:disabled":null,"update:editorOptions":null,"update:editorType":null,"update:helpText":null,"update:horizontalAlignment":null,"update:html":null,"update:icon":null,"update:isRequired":null,"update:items":null,"update:itemType":null,"update:label":null,"update:name":null,"update:tabPanelOptions":null,"update:tabs":null,"update:tabTemplate":null,"update:template":null,"update:text":null,"update:title":null,"update:validationRules":null,"update:verticalAlignment":null,"update:visible":null,"update:visibleIndex":null},props:{alignItemLabels:Boolean,badge:String,buttonOptions:Object,caption:String,colCount:Number,colCountByScreen:Object,colSpan:Number,cssClass:String,dataField:String,disabled:Boolean,editorOptions:{},editorType:String,helpText:String,horizontalAlignment:String,html:String,icon:String,isRequired:Boolean,items:Array,itemType:String,label:Object,name:String,tabPanelOptions:Object,tabs:Array,tabTemplate:{},template:{},text:String,title:String,validationRules:Array,verticalAlignment:String,visible:Boolean,visibleIndex:Number}});t.DxItem=v,v.$_optionName="items",v.$_isCollectionItem=!0;var S=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:alignment":null,"update:location":null,"update:showColon":null,"update:text":null,"update:visible":null},props:{alignment:String,location:String,showColon:Boolean,text:String,visible:Boolean}});t.DxLabel=S,S.$_optionName="label";var y=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:message":null,"update:type":null},props:{ignoreEmptyValue:Boolean,message:String,type:String}});t.DxNumericRule=y,y.$_optionName="validationRules",y.$_isCollectionItem=!0,y.$_predefinedProps={type:"numeric"};var I=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:message":null,"update:pattern":null,"update:type":null},props:{ignoreEmptyValue:Boolean,message:String,pattern:{},type:String}});t.DxPatternRule=I,I.$_optionName="validationRules",I.$_isCollectionItem=!0,I.$_predefinedProps={type:"pattern"};var h=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:max":null,"update:message":null,"update:min":null,"update:reevaluate":null,"update:type":null},props:{ignoreEmptyValue:Boolean,max:{},message:String,min:{},reevaluate:Boolean,type:String}});t.DxRangeRule=h,h.$_optionName="validationRules",h.$_isCollectionItem=!0,h.$_predefinedProps={type:"range"};var B=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:message":null,"update:trim":null,"update:type":null},props:{message:String,trim:Boolean,type:String}});t.DxRequiredRule=B,B.$_optionName="validationRules",B.$_isCollectionItem=!0,B.$_predefinedProps={type:"required"};var x=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:colSpan":null,"update:cssClass":null,"update:dataField":null,"update:editorOptions":null,"update:editorType":null,"update:helpText":null,"update:isRequired":null,"update:itemType":null,"update:label":null,"update:name":null,"update:template":null,"update:validationRules":null,"update:visible":null,"update:visibleIndex":null},props:{colSpan:Number,cssClass:String,dataField:String,editorOptions:{},editorType:String,helpText:String,isRequired:Boolean,itemType:String,label:Object,name:String,template:{},validationRules:Array,visible:Boolean,visibleIndex:Number}});t.DxSimpleItem=x,x.$_optionName="items",x.$_isCollectionItem=!0,x.$_predefinedProps={itemType:"simple"},x.$_expectedChildren={AsyncRule:{isCollectionItem:!0,optionName:"validationRules"},CompareRule:{isCollectionItem:!0,optionName:"validationRules"},CustomRule:{isCollectionItem:!0,optionName:"validationRules"},EmailRule:{isCollectionItem:!0,optionName:"validationRules"},label:{isCollectionItem:!1,optionName:"label"},NumericRule:{isCollectionItem:!0,optionName:"validationRules"},PatternRule:{isCollectionItem:!0,optionName:"validationRules"},RangeRule:{isCollectionItem:!0,optionName:"validationRules"},RequiredRule:{isCollectionItem:!0,optionName:"validationRules"},StringLengthRule:{isCollectionItem:!0,optionName:"validationRules"},validationRule:{isCollectionItem:!0,optionName:"validationRules"}};var E=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:ignoreEmptyValue":null,"update:max":null,"update:message":null,"update:min":null,"update:trim":null,"update:type":null},props:{ignoreEmptyValue:Boolean,max:Number,message:String,min:Number,trim:Boolean,type:String}});t.DxStringLengthRule=E,E.$_optionName="validationRules",E.$_isCollectionItem=!0,E.$_predefinedProps={type:"stringLength"};var N=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:alignItemLabels":null,"update:badge":null,"update:colCount":null,"update:colCountByScreen":null,"update:disabled":null,"update:icon":null,"update:items":null,"update:tabTemplate":null,"update:template":null,"update:title":null},props:{alignItemLabels:Boolean,badge:String,colCount:Number,colCountByScreen:Object,disabled:Boolean,icon:String,items:Array,tabTemplate:{},template:{},title:String}});t.DxTab=N,N.$_optionName="tabs",N.$_isCollectionItem=!0,N.$_expectedChildren={colCountByScreen:{isCollectionItem:!1,optionName:"colCountByScreen"}};var R=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:colSpan":null,"update:cssClass":null,"update:itemType":null,"update:name":null,"update:tabPanelOptions":null,"update:tabs":null,"update:visible":null,"update:visibleIndex":null},props:{colSpan:Number,cssClass:String,itemType:String,name:String,tabPanelOptions:Object,tabs:Array,visible:Boolean,visibleIndex:Number}});t.DxTabbedItem=R,R.$_optionName="items",R.$_isCollectionItem=!0,R.$_predefinedProps={itemType:"tabbed"},R.$_expectedChildren={tab:{isCollectionItem:!0,optionName:"tabs"},tabPanelOptions:{isCollectionItem:!1,optionName:"tabPanelOptions"}};var _=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:animationEnabled":null,"update:bindingOptions":null,"update:dataSource":null,"update:deferRendering":null,"update:disabled":null,"update:elementAttr":null,"update:focusedElement":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:itemHoldTimeout":null,"update:items":null,"update:itemTemplate":null,"update:itemTitleTemplate":null,"update:keyExpr":null,"update:loop":null,"update:loopItemFocus":null,"update:noDataText":null,"update:onContentReady":null,"update:onDisposing":null,"update:onFocusIn":null,"update:onFocusOut":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemDeleted":null,"update:onItemDeleting":null,"update:onItemHold":null,"update:onItemRendered":null,"update:onItemReordered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:onTitleClick":null,"update:onTitleHold":null,"update:onTitleRendered":null,"update:repaintChangesOnly":null,"update:rtlEnabled":null,"update:scrollByContent":null,"update:scrollingEnabled":null,"update:selectedIndex":null,"update:selectedItem":null,"update:selectedItemKeys":null,"update:selectedItems":null,"update:selectionByClick":null,"update:selectionMode":null,"update:selectionRequired":null,"update:selectOnFocus":null,"update:showNavButtons":null,"update:swipeEnabled":null,"update:tabIndex":null,"update:visible":null,"update:width":null},props:{accessKey:String,activeStateEnabled:Boolean,animationEnabled:Boolean,bindingOptions:Object,dataSource:{},deferRendering:Boolean,disabled:Boolean,elementAttr:Object,focusedElement:{},focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,itemHoldTimeout:Number,items:Array,itemTemplate:{},itemTitleTemplate:{},keyExpr:[Function,String],loop:Boolean,loopItemFocus:Boolean,noDataText:String,onContentReady:Function,onDisposing:Function,onFocusIn:Function,onFocusOut:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemDeleted:Function,onItemDeleting:Function,onItemHold:Function,onItemRendered:Function,onItemReordered:Function,onOptionChanged:Function,onSelectionChanged:Function,onTitleClick:Function,onTitleHold:Function,onTitleRendered:Function,repaintChangesOnly:Boolean,rtlEnabled:Boolean,scrollByContent:Boolean,scrollingEnabled:Boolean,selectedIndex:Number,selectedItem:{},selectedItemKeys:Array,selectedItems:Array,selectionByClick:Boolean,selectionMode:String,selectionRequired:Boolean,selectOnFocus:Boolean,showNavButtons:Boolean,swipeEnabled:Boolean,tabIndex:Number,visible:Boolean,width:[Function,Number,String]}});t.DxTabPanelOptions=_,_.$_optionName="tabPanelOptions",_.$_expectedChildren={item:{isCollectionItem:!0,optionName:"items"},tabPanelOptionsItem:{isCollectionItem:!0,optionName:"items"}};var T=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:tabTemplate":null,"update:template":null,"update:text":null,"update:title":null,"update:visible":null},props:{badge:String,disabled:Boolean,html:String,icon:String,tabTemplate:{},template:{},text:String,title:String,visible:Boolean}});t.DxTabPanelOptionsItem=T,T.$_optionName="items",T.$_isCollectionItem=!0;var $=o.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:comparisonTarget":null,"update:comparisonType":null,"update:ignoreEmptyValue":null,"update:max":null,"update:message":null,"update:min":null,"update:pattern":null,"update:reevaluate":null,"update:trim":null,"update:type":null,"update:validationCallback":null},props:{comparisonTarget:Function,comparisonType:String,ignoreEmptyValue:Boolean,max:{},message:String,min:{},pattern:{},reevaluate:Boolean,trim:Boolean,type:String,validationCallback:Function}});t.DxValidationRule=$,$.$_optionName="validationRules",$.$_isCollectionItem=!0,$.$_predefinedProps={type:"required"},t["default"]=i}}]);