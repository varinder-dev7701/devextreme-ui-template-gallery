(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8419],{71793:function(t,e,n){"use strict";n.d(e,{Lu:function(){return r},Ww:function(){return o},nJ:function(){return i}});const o=["Open","In Progress","Deferred","Completed"],r=["Low","Normal","High"],i={id:null,text:"",description:"",company:"",priority:"Low",startDate:new Date,dueDate:new Date,owner:"",status:"Open",activities:[],notes:[],messages:[],parentId:null,progress:0}},43579:function(t,e,n){n(21703),
/*!
 * 
 *               jsPDF AutoTable plugin v3.5.25
 *
 *               Copyright (c) 2022 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */
function(e,o){t.exports=o(function(){try{return n(21164)}catch(t){}}())}("undefined"!==typeof this||window,(function(t){return function(){"use strict";var e={662:function(t,e){var n=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.CellHookData=e.HookData=void 0;var o=function(){function t(t,e,n){this.table=e,this.pageNumber=e.pageNumber,this.pageCount=this.pageNumber,this.settings=e.settings,this.cursor=n,this.doc=t.getDocument()}return t}();e.HookData=o;var r=function(t){function e(e,n,o,r,i,l){var a=t.call(this,e,n,l)||this;return a.cell=o,a.row=r,a.column=i,a.section=r.section,a}return n(e,t),e}(o);e.CellHookData=r},790:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(148),r=n(938),i=n(323),l=n(587),a=n(49),s=n(858);function u(t){t.API.autoTable=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];1===e.length?t=e[0]:(console.error("Use of deprecated autoTable initiation"),t=e[2]||{},t.columns=e[0],t.body=e[1]);var o=(0,l.parseInput)(this,t),r=(0,s.createTable)(this,o);return(0,a.drawTable)(this,r),this},t.API.lastAutoTable=!1,t.API.previousAutoTable=!1,t.API.autoTable.previous=!1,t.API.autoTableText=function(t,e,n,o){(0,r.default)(t,e,n,o,this)},t.API.autoTableSetDefaults=function(t){return i.DocHandler.setDefaults(t,this),this},t.autoTableSetDefaults=function(t,e){i.DocHandler.setDefaults(t,e)},t.API.autoTableHtmlToJson=function(t,e){if(void 0===e&&(e=!1),"undefined"===typeof window)return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var n=new i.DocHandler(this),r=(0,o.parseHtml)(n,t,window,e,!1),l=r.head,a=r.body,s=l[0].map((function(t){return t.content}));return{columns:s,rows:a,data:a}},t.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var t=this.lastAutoTable;return t&&t.finalY?t.finalY:0},t.API.autoTableAddPageContent=function(e){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),t.API.autoTable.globalDefaults||(t.API.autoTable.globalDefaults={}),t.API.autoTable.globalDefaults.addPageContent=e,this},t.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}e["default"]=u},938:function(t,e){function n(t,e,n,o,r){o=o||{};var i=1.15,l=r.internal.scaleFactor,a=r.internal.getFontSize()/l,s=/\r\n|\r|\n/g,u="",d=1;if("middle"!==o.valign&&"bottom"!==o.valign&&"center"!==o.halign&&"right"!==o.halign||(u="string"===typeof t?t.split(s):t,d=u.length||1),n+=a*(2-i),"middle"===o.valign?n-=d/2*a*i:"bottom"===o.valign&&(n-=d*a*i),"center"===o.halign||"right"===o.halign){var h=a;if("center"===o.halign&&(h*=.5),u&&d>=1){for(var c=0;c<u.length;c++)r.text(u[c],e-r.getStringUnitWidth(u[c])*h,n),n+=a*i;return r}e-=r.getStringUnitWidth(t)*h}return"justify"===o.halign?r.text(t,e,n,{maxWidth:o.maxWidth||100,align:"justify"}):r.text(t,e,n),r}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},200:function(t,e){function n(t,e,n){n.applyStyles(e,!0);var o=Array.isArray(t)?t:[t],r=o.map((function(t){return n.getTextWidth(t)})).reduce((function(t,e){return Math.max(t,e)}),0);return r}function o(t,e,n,o){var i=e.settings.tableLineWidth,l=e.settings.tableLineColor;t.applyStyles({lineWidth:i,lineColor:l});var a=r(i,!1);a&&t.rect(n.x,n.y,e.getWidth(t.pageSize().width),o.y-n.y,a)}function r(t,e){var n=t>0,o=e||0===e;return n&&o?"DF":n?"S":o?"F":null}function i(t,e){var n,o,r,i;if(t=t||e,Array.isArray(t)){if(t.length>=4)return{top:t[0],right:t[1],bottom:t[2],left:t[3]};if(3===t.length)return{top:t[0],right:t[1],bottom:t[2],left:t[1]};if(2===t.length)return{top:t[0],right:t[1],bottom:t[0],left:t[1]};t=1===t.length?t[0]:e}return"object"===typeof t?("number"===typeof t.vertical&&(t.top=t.vertical,t.bottom=t.vertical),"number"===typeof t.horizontal&&(t.right=t.horizontal,t.left=t.horizontal),{left:null!==(n=t.left)&&void 0!==n?n:e,top:null!==(o=t.top)&&void 0!==o?o:e,right:null!==(r=t.right)&&void 0!==r?r:e,bottom:null!==(i=t.bottom)&&void 0!==i?i:e}):("number"!==typeof t&&(t=e),{top:t,right:t,bottom:t,left:t})}Object.defineProperty(e,"__esModule",{value:!0}),e.parseSpacing=e.getFillStyle=e.addTableBorder=e.getStringWidth=void 0,e.getStringWidth=n,e.addTableBorder=o,e.getFillStyle=r,e.parseSpacing=i},913:function(t,e){var n=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.getTheme=e.defaultStyles=e.HtmlRowInput=e.FONT_ROW_RATIO=void 0,e.FONT_ROW_RATIO=1.15;var o=function(t){function e(e){var n=t.call(this)||this;return n._element=e,n}return n(e,t),e}(Array);function r(t){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/t,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}function i(t){var e={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return e[t]}e.HtmlRowInput=o,e.defaultStyles=r,e.getTheme=i},259:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseCss=void 0;var o=n(200);function r(t,e,n,o,r){var a={},u=96/72,d=l(e,(function(t){return r.getComputedStyle(t)["backgroundColor"]}));null!=d&&(a.fillColor=d);var h=l(e,(function(t){return r.getComputedStyle(t)["color"]}));null!=h&&(a.textColor=h);var c=l(e,(function(t){return r.getComputedStyle(t)["borderTopColor"]}));null!=c&&(a.lineColor=c);var f=s(o,n);f&&(a.cellPadding=f);var p=parseInt(o.borderTopWidth||"");p=p/u/n,p&&(a.lineWidth=p);var g=["left","right","center","justify"];-1!==g.indexOf(o.textAlign)&&(a.halign=o.textAlign),g=["middle","bottom","top"],-1!==g.indexOf(o.verticalAlign)&&(a.valign=o.verticalAlign);var y=parseInt(o.fontSize||"");isNaN(y)||(a.fontSize=y/u);var v=i(o);v&&(a.fontStyle=v);var m=(o.fontFamily||"").toLowerCase();return-1!==t.indexOf(m)&&(a.font=m),a}function i(t){var e="";return("bold"===t.fontWeight||"bolder"===t.fontWeight||parseInt(t.fontWeight)>=700)&&(e="bold"),"italic"!==t.fontStyle&&"oblique"!==t.fontStyle||(e+="italic"),e}function l(t,e){var n=a(t,e);if(!n)return null;var o=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!o||!Array.isArray(o))return null;var r=[parseInt(o[1]),parseInt(o[2]),parseInt(o[3])],i=parseInt(o[4]);return 0===i||isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function a(t,e){var n=e(t);return"rgba(0, 0, 0, 0)"===n||"transparent"===n||"initial"===n||"inherit"===n?null==t.parentElement?null:a(t.parentElement,e):n}function s(t,e){var n=[t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft],r=96/(72/e),i=(parseInt(t.lineHeight)-parseInt(t.fontSize))/e/2,l=n.map((function(t){return parseInt(t||"0")/r})),a=(0,o.parseSpacing)(l,0);return i>a.top&&(a.top=i),i>a.bottom&&(a.bottom=i),a}e.parseCss=r},323:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.DocHandler=void 0;var n={},o=function(){function t(t){this.jsPDFDocument=t,this.userStyles={textColor:t.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:t.internal.getFontSize(),fontStyle:t.internal.getFont().fontStyle,font:t.internal.getFont().fontName}}return t.setDefaults=function(t,e){void 0===e&&(e=null),e?e.__autoTableDocumentDefaults=t:n=t},t.unifyColor=function(t){return Array.isArray(t)?t:"number"===typeof t?[t,t,t]:"string"===typeof t?[t]:null},t.prototype.applyStyles=function(e,n){var o,r,i;void 0===n&&(n=!1),e.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e.fontStyle);var l=this.jsPDFDocument.internal.getFont(),a=l.fontStyle,s=l.fontName;if(e.font&&(s=e.font),e.fontStyle){a=e.fontStyle;var u=this.getFontList()[s];u&&-1===u.indexOf(a)&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(u[0]),a=u[0])}if(this.jsPDFDocument.setFont(s,a),e.fontSize&&this.jsPDFDocument.setFontSize(e.fontSize),!n){var d=t.unifyColor(e.fillColor);d&&(o=this.jsPDFDocument).setFillColor.apply(o,d),d=t.unifyColor(e.textColor),d&&(r=this.jsPDFDocument).setTextColor.apply(r,d),d=t.unifyColor(e.lineColor),d&&(i=this.jsPDFDocument).setDrawColor.apply(i,d),"number"===typeof e.lineWidth&&this.jsPDFDocument.setLineWidth(e.lineWidth)}},t.prototype.splitTextToSize=function(t,e,n){return this.jsPDFDocument.splitTextToSize(t,e,n)},t.prototype.rect=function(t,e,n,o,r){return this.jsPDFDocument.rect(t,e,n,o,r)},t.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},t.prototype.getTextWidth=function(t){return this.jsPDFDocument.getTextWidth(t)},t.prototype.getDocument=function(){return this.jsPDFDocument},t.prototype.setPage=function(t){this.jsPDFDocument.setPage(t)},t.prototype.addPage=function(){return this.jsPDFDocument.addPage()},t.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},t.prototype.getGlobalOptions=function(){return n||{}},t.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},t.prototype.pageSize=function(){var t=this.jsPDFDocument.internal.pageSize;return null==t.width&&(t={width:t.getWidth(),height:t.getHeight()}),t},t.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},t.prototype.pageNumber=function(){var t=this.jsPDFDocument.internal.getCurrentPageInfo();return t?t.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},t}();e.DocHandler=o},148:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseHtml=void 0;var o=n(259),r=n(913);function i(t,e,n,o,r){var i,a,s;void 0===o&&(o=!1),void 0===r&&(r=!1),s="string"===typeof e?n.document.querySelector(e):e;var u=Object.keys(t.getFontList()),d=t.scaleFactor(),h=[],c=[],f=[];if(!s)return console.error("Html table could not be found with input: ",e),{head:h,body:c,foot:f};for(var p=0;p<s.rows.length;p++){var g=s.rows[p],y=null===(a=null===(i=null===g||void 0===g?void 0:g.parentElement)||void 0===i?void 0:i.tagName)||void 0===a?void 0:a.toLowerCase(),v=l(u,d,n,g,o,r);v&&("thead"===y?h.push(v):"tfoot"===y?f.push(v):c.push(v))}return{head:h,body:c,foot:f}}function l(t,e,n,i,l,s){for(var u=new r.HtmlRowInput(i),d=0;d<i.cells.length;d++){var h=i.cells[d],c=n.getComputedStyle(h);if(l||"none"!==c.display){var f=void 0;s&&(f=(0,o.parseCss)(t,h,e,c,n)),u.push({rowSpan:h.rowSpan,colSpan:h.colSpan,styles:f,_element:h,content:a(h)})}}var p=n.getComputedStyle(i);if(u.length>0&&(l||"none"!==p.display))return u}function a(t){var e=t.cloneNode(!0);return e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/ +/g," "),e.innerHTML=e.innerHTML.split(/\<br.*?\>/).map((function(t){return t.trim()})).join("\n"),e.innerText||e.textContent||""}e.parseHtml=i},587:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseInput=void 0;var o=n(148),r=n(360),i=n(200),l=n(323),a=n(291);function s(t,e){var n=new l.DocHandler(t),o=n.getDocumentOptions(),i=n.getGlobalOptions();(0,a.default)(n,i,o,e);var s,c=(0,r.assign)({},i,o,e);"undefined"!==typeof window&&(s=window);var p=u(i,o,e),g=d(i,o,e),y=h(n,c),v=f(n,c,s);return{id:e.tableId,content:v,hooks:g,styles:p,settings:y}}function u(t,e,n){for(var o={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},i=function(i){if("columnStyles"===i){var l=t[i],a=e[i],s=n[i];o.columnStyles=(0,r.assign)({},l,a,s)}else{var u=[t,e,n],d=u.map((function(t){return t[i]||{}}));o[i]=(0,r.assign)({},d[0],d[1],d[2])}},l=0,a=Object.keys(o);l<a.length;l++){var s=a[l];i(s)}return o}function d(t,e,n){for(var o=[t,e,n],r={didParseCell:[],willDrawCell:[],didDrawCell:[],didDrawPage:[]},i=0,l=o;i<l.length;i++){var a=l[i];a.didParseCell&&r.didParseCell.push(a.didParseCell),a.willDrawCell&&r.willDrawCell.push(a.willDrawCell),a.didDrawCell&&r.didDrawCell.push(a.didDrawCell),a.didDrawPage&&r.didDrawPage.push(a.didDrawPage)}return r}function h(t,e){var n,o,r,l,a,s,u,d,h,f,p,g,y,v=(0,i.parseSpacing)(e.margin,40/t.scaleFactor()),m=null!==(n=c(t,e.startY))&&void 0!==n?n:v.top;g=!0===e.showFoot?"everyPage":!1===e.showFoot?"never":null!==(o=e.showFoot)&&void 0!==o?o:"everyPage",y=!0===e.showHead?"everyPage":!1===e.showHead?"never":null!==(r=e.showHead)&&void 0!==r?r:"everyPage";var b=null!==(l=e.useCss)&&void 0!==l&&l,w=e.theme||(b?"plain":"striped"),S=!!e.horizontalPageBreak,P=null!==(a=e.horizontalPageBreakRepeat)&&void 0!==a?a:null;return{includeHiddenHtml:null!==(s=e.includeHiddenHtml)&&void 0!==s&&s,useCss:b,theme:w,startY:m,margin:v,pageBreak:null!==(u=e.pageBreak)&&void 0!==u?u:"auto",rowPageBreak:null!==(d=e.rowPageBreak)&&void 0!==d?d:"auto",tableWidth:null!==(h=e.tableWidth)&&void 0!==h?h:"auto",showHead:y,showFoot:g,tableLineWidth:null!==(f=e.tableLineWidth)&&void 0!==f?f:0,tableLineColor:null!==(p=e.tableLineColor)&&void 0!==p?p:200,horizontalPageBreak:S,horizontalPageBreakRepeat:P}}function c(t,e){var n=t.getLastAutoTable(),o=t.scaleFactor(),r=t.pageNumber(),i=!1;if(n&&n.startPageNumber){var l=n.startPageNumber+n.pageNumber-1;i=l===r}return"number"===typeof e?e:null!=e&&!1!==e||!i||null==(null===n||void 0===n?void 0:n.finalY)?null:n.finalY+20/o}function f(t,e,n){var r=e.head||[],i=e.body||[],l=e.foot||[];if(e.html){var a=e.includeHiddenHtml;if(n){var s=(0,o.parseHtml)(t,e.html,n,a,e.useCss)||{};r=s.head||r,i=s.body||r,l=s.foot||r}else console.error("Cannot parse html in non browser environment")}var u=e.columns||p(r,i,l);return{columns:u,head:r,body:i,foot:l}}function p(t,e,n){var o=t[0]||e[0]||n[0]||[],r=[];return Object.keys(o).filter((function(t){return"_element"!==t})).forEach((function(t){var e,n=1;e=Array.isArray(o)?o[parseInt(t)]:o[t],"object"!==typeof e||Array.isArray(e)||(n=(null===e||void 0===e?void 0:e.colSpan)||1);for(var i=0;i<n;i++){var l=void 0;l=Array.isArray(o)?r.length:t+(i>0?"_".concat(i):"");var a={dataKey:l};r.push(a)}})),r}e.parseInput=s},291:function(t,e){function n(t,e,n,r){for(var i=function(e){e&&"object"!==typeof e&&console.error("The options parameter should be of type object, is: "+typeof e),"undefined"!==typeof e.extendWidth&&(e.tableWidth=e.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),"undefined"!==typeof e.margins&&("undefined"===typeof e.margin&&(e.margin=e.margins),console.error("Use of deprecated option: margins, use margin instead.")),e.startY&&"number"!==typeof e.startY&&(console.error("Invalid value for startY option",e.startY),delete e.startY),!e.didDrawPage&&(e.afterPageContent||e.beforePageContent||e.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),e.didDrawPage=function(n){t.applyStyles(t.userStyles),e.beforePageContent&&e.beforePageContent(n),t.applyStyles(t.userStyles),e.afterPageContent&&e.afterPageContent(n),t.applyStyles(t.userStyles),e.afterPageAdd&&n.pageNumber>1&&n.afterPageAdd(n),t.applyStyles(t.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach((function(t){e[t]&&console.error('The "'.concat(t,'" hook has changed in version 3.0, check the changelog for how to migrate.'))})),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach((function(t){var n=t[0],o=t[1];e[o]&&(console.error("Use of deprecated option ".concat(o,". Use ").concat(n," instead")),e[n]=e[o])})),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach((function(t){var n="string"===typeof t?t:t[0],o="string"===typeof t?t:t[1];"undefined"!==typeof e[n]&&("undefined"===typeof e.styles[o]&&(e.styles[o]=e[n]),console.error("Use of deprecated option: "+n+", use the style "+o+" instead."))}));for(var n=0,r=["styles","bodyStyles","headStyles","footStyles"];n<r.length;n++){var i=r[n];o(e[i]||{})}for(var l=e["columnStyles"]||{},a=0,s=Object.keys(l);a<s.length;a++){var u=s[a];o(l[u]||{})}},l=0,a=[e,n,r];l<a.length;l++){var s=a[l];i(s)}}function o(t){t.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),t.minCellHeight||(t.minCellHeight=t.rowHeight)):t.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),t.cellWidth||(t.cellWidth=t.columnWidth))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},287:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Column=e.Cell=e.Row=e.Table=void 0;var o=n(913),r=n(662),i=n(200),l=function(){function t(t,e){this.pageNumber=1,this.pageCount=1,this.id=t.id,this.settings=t.settings,this.styles=t.styles,this.hooks=t.hooks,this.columns=e.columns,this.head=e.head,this.body=e.body,this.foot=e.foot}return t.prototype.getHeadHeight=function(t){return this.head.reduce((function(e,n){return e+n.getMaxCellHeight(t)}),0)},t.prototype.getFootHeight=function(t){return this.foot.reduce((function(e,n){return e+n.getMaxCellHeight(t)}),0)},t.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},t.prototype.callCellHooks=function(t,e,n,o,i,l){for(var a=0,s=e;a<s.length;a++){var u=s[a],d=new r.CellHookData(t,this,n,o,i,l),h=!1===u(d);if(n.text=Array.isArray(n.text)?n.text:[n.text],h)return!1}return!0},t.prototype.callEndPageHooks=function(t,e){t.applyStyles(t.userStyles);for(var n=0,o=this.hooks.didDrawPage;n<o.length;n++){var i=o[n];i(new r.HookData(t,this,e))}},t.prototype.getWidth=function(t){if("number"===typeof this.settings.tableWidth)return this.settings.tableWidth;if("wrap"===this.settings.tableWidth){var e=this.columns.reduce((function(t,e){return t+e.wrappedWidth}),0);return e}var n=this.settings.margin;return t-n.left-n.right},t}();e.Table=l;var a=function(){function t(t,e,n,r,i){void 0===i&&(i=!1),this.height=0,this.raw=t,t instanceof o.HtmlRowInput&&(this.raw=t._element,this.element=t._element),this.index=e,this.section=n,this.cells=r,this.spansMultiplePages=i}return t.prototype.getMaxCellHeight=function(t){var e=this;return t.reduce((function(t,n){var o;return Math.max(t,(null===(o=e.cells[n.index])||void 0===o?void 0:o.height)||0)}),0)},t.prototype.hasRowSpan=function(t){var e=this;return t.filter((function(t){var n=e.cells[t.index];return!!n&&n.rowSpan>1})).length>0},t.prototype.canEntireRowFit=function(t,e){return this.getMaxCellHeight(e)<=t},t.prototype.getMinimumRowHeight=function(t,e){var n=this;return t.reduce((function(t,r){var i=n.cells[r.index];if(!i)return 0;var l=i.styles.fontSize/e.scaleFactor()*o.FONT_ROW_RATIO,a=i.padding("vertical"),s=a+l;return s>t?s:t}),0)},t}();e.Row=a;var s=function(){function t(t,e,n){var o,r;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=e,this.section=n,this.raw=t;var i=t;null==t||"object"!==typeof t||Array.isArray(t)?(this.rowSpan=1,this.colSpan=1):(this.rowSpan=t.rowSpan||1,this.colSpan=t.colSpan||1,i=null!==(r=null!==(o=t.content)&&void 0!==o?o:t.title)&&void 0!==r?r:t,t._element&&(this.raw=t._element));var l=null!=i?""+i:"",a=/\r\n|\r|\n/g;this.text=l.split(a)}return t.prototype.getTextPos=function(){var t,e;if("top"===this.styles.valign)t=this.y+this.padding("top");else if("bottom"===this.styles.valign)t=this.y+this.height-this.padding("bottom");else{var n=this.height-this.padding("vertical");t=this.y+n/2+this.padding("top")}if("right"===this.styles.halign)e=this.x+this.width-this.padding("right");else if("center"===this.styles.halign){var o=this.width-this.padding("horizontal");e=this.x+o/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:t}},t.prototype.getContentHeight=function(t){var e=Array.isArray(this.text)?this.text.length:1,n=this.styles.fontSize/t*o.FONT_ROW_RATIO,r=e*n+this.padding("vertical");return Math.max(r,this.styles.minCellHeight)},t.prototype.padding=function(t){var e=(0,i.parseSpacing)(this.styles.cellPadding,0);return"vertical"===t?e.top+e.bottom:"horizontal"===t?e.left+e.right:e[t]},t}();e.Cell=s;var u=function(){function t(t,e,n){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=t,this.raw=e,this.index=n}return t.prototype.getMaxCustomCellWidth=function(t){for(var e=0,n=0,o=t.allRows();n<o.length;n++){var r=o[n],i=r.cells[this.index];i&&"number"===typeof i.styles.cellWidth&&(e=Math.max(e,i.styles.cellWidth))}return e},t}();e.Column=u},360:function(t,e){function n(t,e,n,o,r){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),l=1;l<arguments.length;l++){var a=arguments[l];if(null!=a)for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(i[s]=a[s])}return i}Object.defineProperty(e,"__esModule",{value:!0}),e.assign=void 0,e.assign=n},858:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=void 0;var o=n(323),r=n(287),i=n(189),l=n(913),a=n(360);function s(t,e){var n=new o.DocHandler(t),l=u(e,n.scaleFactor()),a=new r.Table(e,l);return(0,i.calculateWidths)(n,a),n.applyStyles(n.userStyles),a}function u(t,e){var n=t.content,o=f(n.columns);if(0===n.head.length){var r=h(o,"head");r&&n.head.push(r)}if(0===n.foot.length){r=h(o,"foot");r&&n.foot.push(r)}var i=t.settings.theme,l=t.styles;return{columns:o,head:d("head",n.head,o,l,i,e),body:d("body",n.body,o,l,i,e),foot:d("foot",n.foot,o,l,i,e)}}function d(t,e,n,o,i,l){var a={},s=e.map((function(e,s){for(var u=0,d={},h=0,c=0,f=0,g=n;f<g.length;f++){var y=g[f];if(null==a[y.index]||0===a[y.index].left)if(0===c){var v=void 0;v=Array.isArray(e)?e[y.index-h-u]:e[y.dataKey];var m={};"object"!==typeof v||Array.isArray(v)||(m=(null===v||void 0===v?void 0:v.styles)||{});var b=p(t,y,s,i,o,l,m),w=new r.Cell(v,b,t);d[y.dataKey]=w,d[y.index]=w,c=w.colSpan-1,a[y.index]={left:w.rowSpan-1,times:c}}else c--,h++;else a[y.index].left--,c=a[y.index].times,u++}return new r.Row(e,s,t,d)}));return s}function h(t,e){var n={};return t.forEach((function(t){if(null!=t.raw){var o=c(e,t.raw);null!=o&&(n[t.dataKey]=o)}})),Object.keys(n).length>0?n:null}function c(t,e){if("head"===t){if("object"===typeof e)return e.header||e.title||null;if("string"===typeof e||"number"===typeof e)return e}else if("foot"===t&&"object"===typeof e)return e.footer;return null}function f(t){return t.map((function(t,e){var n,o,i;return i="object"===typeof t&&null!==(o=null!==(n=t.dataKey)&&void 0!==n?n:t.key)&&void 0!==o?o:e,new r.Column(i,t,e)}))}function p(t,e,n,o,r,i,s){var u,d=(0,l.getTheme)(o);"head"===t?u=r.headStyles:"body"===t?u=r.bodyStyles:"foot"===t&&(u=r.footStyles);var h=(0,a.assign)({},d.table,d[t],r.styles,u),c=r.columnStyles[e.dataKey]||r.columnStyles[e.index]||{},f="body"===t?c:{},p="body"===t&&n%2===0?(0,a.assign)({},d.alternateRow,r.alternateRowStyles):{},g=(0,l.defaultStyles)(i),y=(0,a.assign)({},g,h,p,f);return(0,a.assign)(y,s)}e.createTable=s},49:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.addPage=e.drawTable=void 0;var o=n(913),r=n(200),i=n(287),l=n(323),a=n(360),s=n(938),u=n(435);function d(t,e){var n=e.settings,o=n.startY,i=n.margin,s={x:i.left,y:o},u=e.getHeadHeight(e.columns)+e.getFootHeight(e.columns),d=o+i.bottom+u;if("avoid"===n.pageBreak){var c=e.allRows(),f=c.reduce((function(t,e){return t+e.height}),0);d+=f}var p=new l.DocHandler(t);("always"===n.pageBreak||null!=n.startY&&d>p.pageSize().height)&&(C(p),s.y=i.top);var g=(0,a.assign)({},s);e.startPageNumber=p.pageNumber(),!0===n.horizontalPageBreak?h(p,e,g,s):(p.applyStyles(p.userStyles),"firstPage"!==n.showHead&&"everyPage"!==n.showHead||e.head.forEach((function(t){return b(p,e,t,s,e.columns)})),p.applyStyles(p.userStyles),e.body.forEach((function(t,n){var o=n===e.body.length-1;m(p,e,t,o,g,s,e.columns)})),p.applyStyles(p.userStyles),"lastPage"!==n.showFoot&&"everyPage"!==n.showFoot||e.foot.forEach((function(t){return b(p,e,t,s,e.columns)}))),(0,r.addTableBorder)(p,e,g,s),e.callEndPageHooks(p,s),e.finalY=s.y,t.lastAutoTable=e,t.previousAutoTable=e,t.autoTable&&(t.autoTable.previous=e),p.applyStyles(p.userStyles)}function h(t,e,n,o){var r=u.default.calculateAllColumnsCanFitInPage(t,e);r.map((function(r,i){t.applyStyles(t.userStyles),i>0?x(t,e,n,o,r.columns):c(t,e,o,r.columns),f(t,e,n,o,r.columns),p(t,e,o,r.columns)}))}function c(t,e,n,o){var r=e.settings;t.applyStyles(t.userStyles),"firstPage"!==r.showHead&&"everyPage"!==r.showHead||e.head.forEach((function(r){return b(t,e,r,n,o)}))}function f(t,e,n,o,r){t.applyStyles(t.userStyles),e.body.forEach((function(i,l){var a=l===e.body.length-1;m(t,e,i,a,n,o,r)}))}function p(t,e,n,o){var r=e.settings;t.applyStyles(t.userStyles),"lastPage"!==r.showFoot&&"everyPage"!==r.showFoot||e.foot.forEach((function(r){return b(t,e,r,n,o)}))}function g(t,e,n){var r=t.styles.fontSize/n.scaleFactor()*o.FONT_ROW_RATIO,i=t.padding("vertical"),l=Math.floor((e-i)/r);return Math.max(0,l)}function y(t,e,n,o){var r={};t.spansMultiplePages=!0,t.height=0;for(var l=0,s=0,u=n.columns;s<u.length;s++){var d=u[s],h=t.cells[d.index];if(h){Array.isArray(h.text)||(h.text=[h.text]);var c=new i.Cell(h.raw,h.styles,h.section);c=(0,a.assign)(c,h),c.text=[];var f=g(h,e,o);h.text.length>f&&(c.text=h.text.splice(f,h.text.length));var p=o.scaleFactor();h.contentHeight=h.getContentHeight(p),h.contentHeight>=e&&(h.contentHeight=e,c.styles.minCellHeight-=e),h.contentHeight>t.height&&(t.height=h.contentHeight),c.contentHeight=c.getContentHeight(p),c.contentHeight>l&&(l=c.contentHeight),r[d.index]=c}}var y=new i.Row(t.raw,-1,t.section,r,!0);y.height=l;for(var v=0,m=n.columns;v<m.length;v++){d=m[v],c=y.cells[d.index];c&&(c.height=y.height);h=t.cells[d.index];h&&(h.height=t.height)}return y}function v(t,e,n,o){var r=t.pageSize().height,i=o.settings.margin,l=i.top+i.bottom,a=r-l;"body"===e.section&&(a-=o.getHeadHeight(o.columns)+o.getFootHeight(o.columns));var s=e.getMinimumRowHeight(o.columns,t),u=s<n;if(s>a)return console.error("Will not be able to print row ".concat(e.index," correctly since it's minimum height is larger than page height")),!0;if(!u)return!1;var d=e.hasRowSpan(o.columns),h=e.getMaxCellHeight(o.columns)>a;return h?(d&&console.error("The content of row ".concat(e.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!d&&"avoid"!==o.settings.rowPageBreak}function m(t,e,n,o,r,i,l){var a=P(t,e,o,i);if(n.canEntireRowFit(a,l))b(t,e,n,i,l);else if(v(t,n,a,e)){var s=y(n,a,e,t);b(t,e,n,i,l),x(t,e,r,i,l),m(t,e,s,o,r,i,l)}else x(t,e,r,i,l),m(t,e,n,o,r,i,l)}function b(t,e,n,o,r){o.x=e.settings.margin.left;for(var i=0,l=r;i<l.length;i++){var a=l[i],u=n.cells[a.index];if(u){t.applyStyles(u.styles),u.x=o.x,u.y=o.y;var d=e.callCellHooks(t,e.hooks.willDrawCell,u,n,a,o);if(!1!==d){w(t,u,o);var h=u.getTextPos();(0,s.default)(u.text,h.x,h.y,{halign:u.styles.halign,valign:u.styles.valign,maxWidth:Math.ceil(u.width-u.padding("left")-u.padding("right"))},t.getDocument()),e.callCellHooks(t,e.hooks.didDrawCell,u,n,a,o),o.x+=a.width}else o.x+=a.width}else o.x+=a.width}o.y+=n.height}function w(t,e,n){var o=e.styles;if(t.getDocument().setFillColor(t.getDocument().getFillColor()),"number"===typeof o.lineWidth){var i=(0,r.getFillStyle)(o.lineWidth,o.fillColor);i&&t.rect(e.x,n.y,e.width,e.height,i)}else if("object"===typeof o.lineWidth){t.rect(e.x,n.y,e.width,e.height,"F");var l=Object.keys(o.lineWidth),a=o.lineWidth;l.map((function(i){var l=(0,r.getFillStyle)(a[i],o.fillColor);S(t,e,n,i,l||"S",a[i])}))}}function S(t,e,n,o,r,i){var l,a,s,u;switch(o){case"top":l=n.x,a=n.y,s=n.x+e.width,u=n.y;break;case"left":l=n.x,a=n.y,s=n.x,u=n.y+e.height;break;case"right":l=n.x+e.width,a=n.y,s=n.x+e.width,u=n.y+e.height;break;default:l=n.x,a=n.y+e.height-i,s=n.x+e.width,u=n.y+e.height-i;break}t.getDocument().setLineWidth(i),t.getDocument().line(l,a,s,u,r)}function P(t,e,n,o){var r=e.settings.margin.bottom,i=e.settings.showFoot;return("everyPage"===i||"lastPage"===i&&n)&&(r+=e.getFootHeight(e.columns)),t.pageSize().height-o.y-r}function x(t,e,n,o,i){void 0===i&&(i=[]),t.applyStyles(t.userStyles),"everyPage"===e.settings.showFoot&&e.foot.forEach((function(n){return b(t,e,n,o,i)})),e.callEndPageHooks(t,o);var l=e.settings.margin;(0,r.addTableBorder)(t,e,n,o),C(t),e.pageNumber++,e.pageCount++,o.x=l.left,o.y=l.top,n.y=l.top,"everyPage"===e.settings.showHead&&e.head.forEach((function(n){return b(t,e,n,o,i)}))}function C(t){var e=t.pageNumber();t.setPage(e+1);var n=t.pageNumber();n===e&&t.addPage()}e.drawTable=d,e.addPage=x},435:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(200),r=function(t,e){var n=(0,o.parseSpacing)(e.settings.margin,0),r=t.pageSize().width-(n.left+n.right);return r},i=function(t,e,n){void 0===n&&(n={});var o=r(t,e),i=o,l=e.settings.horizontalPageBreakRepeat,a=null,s=[],u=[],d=e.columns.length,h=n&&n.start?n.start:0;null!=l&&(a=e.columns.find((function(t){return t.dataKey===l||t.index===l})),a&&(s.push(a.index),u.push(e.columns[a.index]),i-=a.wrappedWidth));while(h<d)if((null===a||void 0===a?void 0:a.index)!==h){var c=e.columns[h].wrappedWidth;if(i<c){0!==h&&h!==n.start||(s.push(h),u.push(e.columns[h]));break}s.push(h),u.push(e.columns[h]),i-=c,h++}else h++;return{colIndexes:s,columns:u,lastIndex:h}},l=function(t,e){var n=[],o=0,r=e.columns.length;while(o<r){var l=i(t,e,{start:0===o?0:o});l&&l.columns&&l.columns.length?(o=l.lastIndex,n.push(l)):o++}return n};e["default"]={getColumnsCanFitInPage:i,calculateAllColumnsCanFitInPage:l,getPageAvailableWidth:r}},189:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ellipsize=e.resizeColumns=e.calculateWidths=void 0;var o=n(200),r=n(435);function i(t,e){l(t,e);var n=[],o=0;e.columns.forEach((function(t){var r=t.getMaxCustomCellWidth(e);r?t.width=r:(t.width=t.wrappedWidth,n.push(t)),o+=t.width}));var r=e.getWidth(t.pageSize().width)-o;r&&(r=a(n,r,(function(t){return Math.max(t.minReadableWidth,t.minWidth)}))),r&&(r=a(n,r,(function(t){return t.minWidth}))),r=Math.abs(r),!e.settings.horizontalPageBreak&&r>.1/t.scaleFactor()&&(r=r<1?r:Math.round(r),console.error("Of the table content, ".concat(r," units width could not fit page"))),u(e),d(e,t),s(e)}function l(t,e){var n=t.scaleFactor(),i=e.settings.horizontalPageBreak,l=r.default.getPageAvailableWidth(t,e);e.allRows().forEach((function(r){for(var a=0,s=e.columns;a<s.length;a++){var u=s[a],d=r.cells[u.index];if(d){var h=e.hooks.didParseCell;e.callCellHooks(t,h,d,r,u,null);var c=d.padding("horizontal");d.contentWidth=(0,o.getStringWidth)(d.text,d.styles,t)+c;var f=(0,o.getStringWidth)(d.text.join(" ").split(/\s+/),d.styles,t);if(d.minReadableWidth=f+d.padding("horizontal"),"number"===typeof d.styles.cellWidth)d.minWidth=d.styles.cellWidth,d.wrappedWidth=d.styles.cellWidth;else if("wrap"===d.styles.cellWidth||!0===i)d.contentWidth>l?(d.minWidth=l,d.wrappedWidth=l):(d.minWidth=d.contentWidth,d.wrappedWidth=d.contentWidth);else{var p=10/n;d.minWidth=d.styles.minCellWidth||p,d.wrappedWidth=d.contentWidth,d.minWidth>d.wrappedWidth&&(d.wrappedWidth=d.minWidth)}}}})),e.allRows().forEach((function(t){for(var n=0,o=e.columns;n<o.length;n++){var r=o[n],i=t.cells[r.index];if(i&&1===i.colSpan)r.wrappedWidth=Math.max(r.wrappedWidth,i.wrappedWidth),r.minWidth=Math.max(r.minWidth,i.minWidth),r.minReadableWidth=Math.max(r.minReadableWidth,i.minReadableWidth);else{var l=e.styles.columnStyles[r.dataKey]||e.styles.columnStyles[r.index]||{},a=l.cellWidth||l.minCellWidth;a&&"number"===typeof a&&(r.minWidth=a,r.wrappedWidth=a)}i&&(i.colSpan>1&&!r.minWidth&&(r.minWidth=i.minWidth),i.colSpan>1&&!r.wrappedWidth&&(r.wrappedWidth=i.minWidth))}}))}function a(t,e,n){for(var o=e,r=t.reduce((function(t,e){return t+e.wrappedWidth}),0),i=0;i<t.length;i++){var l=t[i],s=l.wrappedWidth/r,u=o*s,d=l.width+u,h=n(l),c=d<h?h:d;e-=c-l.width,l.width=c}if(e=Math.round(1e10*e)/1e10,e){var f=t.filter((function(t){return!(e<0)||t.width>n(t)}));f.length&&(e=a(f,e,n))}return e}function s(t){for(var e={},n=1,o=t.allRows(),r=0;r<o.length;r++)for(var i=o[r],l=0,a=t.columns;l<a.length;l++){var s=a[l],u=e[s.index];if(n>1)n--,delete i.cells[s.index];else if(u)u.cell.height+=i.height,n=u.cell.colSpan,delete i.cells[s.index],u.left--,u.left<=1&&delete e[s.index];else{var d=i.cells[s.index];if(!d)continue;if(d.height=i.height,d.rowSpan>1){var h=o.length-r,c=d.rowSpan>h?h:d.rowSpan;e[s.index]={cell:d,left:c,row:i}}}}}function u(t){for(var e=t.allRows(),n=0;n<e.length;n++)for(var o=e[n],r=null,i=0,l=0,a=0;a<t.columns.length;a++){var s=t.columns[a];if(l-=1,l>1&&t.columns[a+1])i+=s.width,delete o.cells[s.index];else if(r){var u=r;delete o.cells[s.index],r=null,u.width=s.width+i}else{u=o.cells[s.index];if(!u)continue;if(l=u.colSpan,i=0,u.colSpan>1){r=u,i+=s.width;continue}u.width=s.width+i}}}function d(t,e){for(var n={count:0,height:0},o=0,r=t.allRows();o<r.length;o++){for(var i=r[o],l=0,a=t.columns;l<a.length;l++){var s=a[l],u=i.cells[s.index];if(u){e.applyStyles(u.styles,!0);var d=u.width-u.padding("horizontal");"linebreak"===u.styles.overflow?u.text=e.splitTextToSize(u.text,d+1/e.scaleFactor(),{fontSize:u.styles.fontSize}):"ellipsize"===u.styles.overflow?u.text=h(u.text,d,u.styles,e,"..."):"hidden"===u.styles.overflow?u.text=h(u.text,d,u.styles,e,""):"function"===typeof u.styles.overflow&&(u.text=u.styles.overflow(u.text,d)),u.contentHeight=u.getContentHeight(e.scaleFactor());var c=u.contentHeight/u.rowSpan;u.rowSpan>1&&n.count*n.height<c*u.rowSpan?n={height:c,count:u.rowSpan}:n&&n.count>0&&n.height>c&&(c=n.height),c>i.height&&(i.height=c)}}n.count--}}function h(t,e,n,o,r){return t.map((function(t){return c(t,e,n,o,r)}))}function c(t,e,n,r,i){var l=1e4*r.scaleFactor();if(e=Math.ceil(e*l)/l,e>=(0,o.getStringWidth)(t,n,r))return t;while(e<(0,o.getStringWidth)(t+i,n,r)){if(t.length<=1)break;t=t.substring(0,t.length-1)}return t.trim()+i}e.calculateWidths=i,e.resizeColumns=a,e.ellipsize=h},84:function(e){if("undefined"===typeof t){var n=new Error("Cannot find module 'undefined'");throw n.code="MODULE_NOT_FOUND",n}e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}var r={};return function(){var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.Cell=t.Column=t.Row=t.Table=t.CellHookData=t.__drawTable=t.__createTable=t.applyPlugin=void 0;var e=o(790),n=o(587),i=o(49),l=o(858),a=o(287);Object.defineProperty(t,"Table",{enumerable:!0,get:function(){return a.Table}});var s=o(662);Object.defineProperty(t,"CellHookData",{enumerable:!0,get:function(){return s.CellHookData}});var u=o(287);function d(t){(0,e.default)(t)}function h(t,e){var o=(0,n.parseInput)(t,e),r=(0,l.createTable)(t,o);(0,i.drawTable)(t,r)}function c(t,e){var o=(0,n.parseInput)(t,e);return(0,l.createTable)(t,o)}function f(t,e){(0,i.drawTable)(t,e)}Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return u.Cell}}),Object.defineProperty(t,"Column",{enumerable:!0,get:function(){return u.Column}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return u.Row}}),t.applyPlugin=d,t["default"]=h,t.__createTable=c,t.__drawTable=f;try{var p=o(84);p.jsPDF&&(p=p.jsPDF),d(p)}catch(g){}}(),r}()}))}}]);