"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[3140],{93140:function(t,e,n){n.d(e,{Z:function(){return A}});var r=n(55593),a=n(9783),o=n(12145),i=n(17383),u=n(64030),s=n(79715),f=n(47539),c=n(34571),m={"af-NA":1,agq:1,ak:1,ar:6,"ar-EH":1,"ar-ER":1,"ar-KM":1,"ar-LB":1,"ar-MA":1,"ar-MR":1,"ar-PS":1,"ar-SO":1,"ar-SS":1,"ar-TD":1,"ar-TN":1,asa:1,ast:1,az:1,"az-Cyrl":1,bas:1,be:1,bem:1,bez:1,bg:1,bm:1,br:1,bs:1,"bs-Cyrl":1,ca:1,ce:1,cgg:1,ckb:6,cs:1,cy:1,da:1,de:1,dje:1,dsb:1,dua:1,dyo:1,ee:1,el:1,"en-001":1,"en-AE":6,"en-BI":1,"en-MP":1,"en-MV":5,"en-SD":6,eo:1,es:1,et:1,eu:1,ewo:1,fa:6,ff:1,"ff-Adlm":1,fi:1,fo:1,fr:1,"fr-DJ":6,"fr-DZ":6,"fr-SY":6,fur:1,fy:1,ga:1,gd:1,gl:1,gsw:1,gv:1,ha:1,hr:1,hsb:1,hu:1,hy:1,ia:1,ig:1,is:1,it:1,jgo:1,jmc:1,ka:1,kab:6,kde:1,kea:1,khq:1,kk:1,kkj:1,kl:1,"ko-KP":1,ksb:1,ksf:1,ksh:1,ku:1,kw:1,ky:1,lag:1,lb:1,lg:1,ln:1,lrc:6,lt:1,lu:1,lv:1,"mas-TZ":1,mfe:1,mg:1,mgo:1,mi:1,mk:1,mn:1,ms:1,mua:1,mzn:6,naq:1,nds:1,nl:1,nmg:1,nnh:1,no:1,nus:1,nyn:1,os:1,pcm:1,pl:1,ps:6,"pt-AO":1,"pt-CH":1,"pt-CV":1,"pt-GQ":1,"pt-GW":1,"pt-LU":1,"pt-ST":1,"pt-TL":1,"qu-BO":1,"qu-EC":1,rm:1,rn:1,ro:1,rof:1,ru:1,rw:1,rwk:1,sah:1,sbp:1,sc:1,se:1,ses:1,sg:1,shi:1,"shi-Latn":1,si:1,sk:1,sl:1,smn:1,so:1,"so-DJ":6,sq:1,sr:1,"sr-Latn":1,sv:1,sw:1,"ta-LK":1,"ta-MY":1,teo:1,tg:1,"ti-ER":1,tk:1,to:1,tr:1,tt:1,twq:1,tzm:1,uk:1,uz:1,"uz-Arab":6,"uz-Cyrl":1,vai:1,"vai-Latn":1,vi:1,vun:1,wae:1,wo:1,xog:1,yav:1,yi:1,yo:1,zgh:1},l=n(70326),g=n(74933),h=n(72602),d=/[\u200E\u200F]/g,y=t=>e=>{if(!t.timeZoneName){var n=e.getFullYear(),r=String(n).length<3,a=r?n+400:n,o=new Date(Date.UTC(a,e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));r&&o.setFullYear(n);var i=(0,h.l)({timeZone:"UTC"},t);return M(o,i)}return M(e,t)},p={},v=t=>{var e=l.Z.locale()+"/"+JSON.stringify(t);return p[e]||(p[e]=new Intl.DateTimeFormat(l.Z.locale(),t).format),p[e]};function M(t,e){return v(e)(t).replace(d,"")}var w=t=>new Intl.NumberFormat(l.Z.locale()).format(t),D=(()=>{var t={};return e=>{if(!(e in t)){if("0"===w(0))return t[e]=!1,!1;t[e]={};for(var n=0;n<10;++n)t[e][w(n)]=n}return t[e]}})(),b=t=>{var e=D(l.Z.locale());return e?t.split("").map((t=>t in e?String(e[t]):t)).join(""):t},S=t=>t.replace(/(\D)0+(\d)/g,"$1$2"),N=(t,e)=>S(t)===S(e),k=t=>t.replace("d’","de "),x={day:{day:"numeric"},dayofweek:{weekday:"long"},longdate:{weekday:"long",year:"numeric",month:"long",day:"numeric"},longdatelongtime:{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},longtime:{hour:"numeric",minute:"numeric",second:"numeric"},month:{month:"long"},monthandday:{month:"long",day:"numeric"},monthandyear:{year:"numeric",month:"long"},shortdate:{},shorttime:{hour:"numeric",minute:"numeric"},shortyear:{year:"2-digit"},year:{year:"numeric"}};Object.defineProperty(x,"shortdateshorttime",{get:function(){var t=Intl.DateTimeFormat(l.Z.locale()).resolvedOptions();return{year:t.year,month:t.month,day:t.day,hour:"numeric",minute:"numeric"}}});var T=t=>"string"===typeof t&&x[t.toLowerCase()],C={standalone:function(t,e){var n=new Date(1999,t,13,1),r=y({month:e})(n);return r},format:function(t,e){var n=new Date(0,t,13,1),r=k(y({day:"numeric",month:e})(n)),a=r.split(" ").filter((t=>t.indexOf("13")<0));return 1===a.length?a[0]:2===a.length?a[0].length>a[1].length?a[0]:a[1]:C.standalone(t,e)}},E={engine:function(){return"intl"},getMonthNames:function(t,e){var n={wide:"long",abbreviated:"short",narrow:"narrow"}[t||"wide"];return e="format"===e?e:"standalone",Array.apply(null,new Array(12)).map(((t,r)=>C[e](r,n)))},getDayNames:function(t){var e=(t=>Array.apply(null,new Array(7)).map(((e,n)=>y({weekday:t})(new Date(0,0,n)))))({wide:"long",abbreviated:"short",short:"narrow",narrow:"narrow"}[t||"wide"]);return e},getPeriodNames:function(){var t=y({hour:"numeric",hour12:!0});return[1,13].map((e=>{var n=w(1),r=t(new Date(0,0,1,e)).split(n);if(2!==r.length)return"";var a=r[0].length>r[1].length?r[0]:r[1];return a.trim()}))},format:function(t,e){if(t){if(!e)return t;"function"===typeof e||e.formatter||(e=e.type||e);var n=T(e);if(n)return y(n)(t);var r=typeof e;return e.formatter||"function"===r||"string"===r?this.callBase.apply(this,arguments):y(e)(t)}},parse:function(t,e){var n;return e&&!e.parser&&"string"===typeof t&&(t=k(t),n=t=>k(this.format(t,e))),this.callBase(t,n||e)},_parseDateBySimpleFormat:function(t,e){t=b(t);var n=this.getFormatParts(e),r=t.split(/\D+/).filter((t=>t.length>0));if(n.length===r.length){var a=this._generateDateArgs(n,r),o=n=>{var r=((t,e)=>{var n=e?12:0;return new Date(t.year,t.month,t.day,(t.hours+n)%24,t.minutes,t.seconds)})(a,n);if(N(b(this.format(r,e)),t))return r};return o(!1)||o(!0)}},_generateDateArgs:function(t,e){var n=new Date,r={year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hours:0,minutes:0,seconds:0};return t.forEach(((t,n)=>{var a=e[n],o=parseInt(a,10);"month"===t&&(o-=1),r[t]=o})),r},formatUsesMonthName:function(t){return"object"!==typeof t||t.type||t.format?this.callBase.apply(this,arguments):"long"===t.month},formatUsesDayName:function(t){return"object"!==typeof t||t.type||t.format?this.callBase.apply(this,arguments):"long"===t.weekday},getTimeSeparator:function(){return b(M(new Date(2001,1,1,11,11),{hour:"numeric",minute:"numeric",hour12:!1})).replace(/\d/g,"")},getFormatParts:function(t){if("string"===typeof t)return this.callBase(t);var e=(0,h.l)({},x[t.toLowerCase()]),n=new Date(2001,2,4,5,6,7),r=y(e)(n);return r=b(r),[{name:"year",value:1},{name:"month",value:3},{name:"day",value:4},{name:"hours",value:5},{name:"minutes",value:6},{name:"seconds",value:7}].map((t=>({name:t.name,index:r.indexOf(t.value)}))).filter((t=>t.index>-1)).sort(((t,e)=>t.index-e.index)).map((t=>t.name))}},H=0,O="undefined"!==typeof Intl,Z={shortdate:"M/d/y",shorttime:"h:mm a",longdate:"EEEE, MMMM d, y",longtime:"h:mm:ss a",monthandday:"MMMM d",monthandyear:"MMMM y",quarterandyear:"QQQ y",day:"d",year:"y",shortdateshorttime:"M/d/y, h:mm a",longdatelongtime:"EEEE, MMMM d, y, h:mm:ss a",month:"LLLL",shortyear:"yy",dayofweek:"EEEE",quarter:"QQQ",hour:"HH",minute:"mm",second:"ss",millisecond:"SSS","datetime-local":"yyyy-MM-ddTHH':'mm':'ss"},L={year:["y","yy","yyyy"],day:["d","dd"],month:["M","MM","MMM","MMMM"],hours:["H","HH","h","hh","ah"],minutes:["m","mm"],seconds:["s","ss"],milliseconds:["S","SS","SSS"]},P=(0,r.Z)({engine:function(){return"base"},_getPatternByFormat:function(t){return Z[t.toLowerCase()]},_expandPattern:function(t){return this._getPatternByFormat(t)||t},formatUsesMonthName:function(t){return-1!==this._expandPattern(t).indexOf("MMMM")},formatUsesDayName:function(t){return-1!==this._expandPattern(t).indexOf("EEEE")},getFormatParts:function(t){var e=this._getPatternByFormat(t)||t,n=[];return(0,o.S6)(e.split(/\W+/),((t,e)=>{(0,o.S6)(L,((t,r)=>{r.includes(e)&&n.push(t)}))})),n},getMonthNames:function(t){return c.Z.getMonthNames(t)},getDayNames:function(t){return c.Z.getDayNames(t)},getQuarterNames:function(t){return c.Z.getQuarterNames(t)},getPeriodNames:function(t){return c.Z.getPeriodNames(t)},getTimeSeparator:function(){return":"},is24HourFormat:function(t){for(var e=new Date(2017,0,20,11,0,0,0),n=new Date(2017,0,20,23,0,0,0),r=this.format(e,t),a=this.format(n,t),o=0;o<r.length;o++)if(r[o]!==a[o])return!isNaN(parseInt(r[o]))},format:function(t,e){if(t){if(!e)return t;var n;if("function"===typeof e)n=e;else if(e.formatter)n=e.formatter;else if(e=e.type||e,(0,a.HD)(e))return e=Z[e.toLowerCase()]||e,g.Z.convertDigits((0,u.P)(e,this)(t));if(n)return n(t)}},parse:function(t,e){var n,r,a=this;if(t){if(!e)return this.parse(t,"shortdate");if(e.parser)return e.parser(t);if("string"!==typeof e||Z[e.toLowerCase()]){r=t=>{var n=a.format(t,e);return g.Z.convertDigits(n,!0)};try{n=(0,s.y)(r)}catch(u){}}else n=e;if(n)return t=g.Z.convertDigits(t,!0),(0,f.MT)(n,this)(t);i.Z.log("W0012");var o=new Date(t);if(o&&!isNaN(o.getTime()))return o}},firstDayOfWeekIndex:function(){var t=l.Z.getValueByClosestLocale((t=>m[t]));return void 0===t?H:t}});O&&P.inject(E);var A=P},34571:function(t,e,n){var r=n(12145),a=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["AM","PM"],u=["Q1","Q2","Q3","Q4"],s=(t,e)=>{var n={abbreviated:3,short:2,narrow:1};return(0,r.UI)(t,(t=>t.substr(0,n[e])))};e["Z"]={getMonthNames:function(t){return s(a,t)},getDayNames:function(t){return s(o,t)},getQuarterNames:function(t){return u},getPeriodNames:function(t){return i}}},79715:function(t,e,n){n.d(e,{y:function(){return y}});var r=n(74933),a="،",o=" .,:;/\\<>()-[]"+a,i=". m.",u=function(t){var e=t&&r.Z.convertDigits(t,!1).charCodeAt(0),n=r.Z.convertDigits("0",!1).charCodeAt(0);return n<=e&&e<n+10},s=function(t,e,n,r){var a=t[n],s=t[n+1];if(!r){if("."===a||" "===a&&t.slice(n-1,n+3)===i)return!0;if("-"===a&&!u(s))return!0}var f=r&&e.some((e=>t[n]!==e[n]));return o.indexOf(a)<0&&r===u(a)&&(!r||f)},f=function(t,e){if(!u(t[e]))while(e>0&&!u(t[e-1])&&("."===t[e-1]||o.indexOf(t[e-1])<0))e--;return e},c=function(t,e,n,r){var a=0,o=[],i=function(e){return t[a]!==e[a]&&(void 0===r||u(t[a])===r)};for(Array.isArray(e)||(e=[e]),a=0;a<t.length;a++)if(n.indexOf(a)<0&&e.filter(i).length){a=f(t,a);do{if(r=u(t[a]),!o.length&&!r&&u(e[0][a]))break;o.push(a),n.unshift(a),a++}while(t[a]&&s(t,e,a,r));break}return 1!==o.length||"0"!==t[n[0]-1]&&"٠"!==t[n[0]-1]||n.unshift(n[0]-1),o},m=function(t,e,n,r){var a=e[0],o=a<r.length?r[a]:a;return e.forEach((function(e,r){t=t.substr(0,o+r)+(n.length>1?n[r]:n)+t.substr(o+r+1)})),1===e.length&&(t=t.replace("0"+n,n+n),t=t.replace("٠"+n,n+n)),t},l=function(t,e,n,r){var a,o,i;if(!u(t[e[0]]||"0")){var s=Math.max(e.length<=3?3:4,n.length);while(e.length>s){for(o=e.pop(),i=r[o],r[o]=-1,a=o+1;a<r.length;a++)r[a]--;t=t.substr(0,i)+t.substr(i+1)}o=e[e.length-1]+1,i=o<r.length?r[o]:o;while(e.length<s){for(e.push(e[e.length-1]+1),a=o;a<r.length;a++)r[a]++;t=t.substr(0,i)+" "+t.substr(i)}}return t=m(t,e,n,r),t},g=function(t,e){return Array.isArray(t)?t.map((function(t){return(e(t)||"").toString()})):(e(t)||"").toString()},h=/[a-zA-Z]/g,d=function(t,e,n,r){var a=e.split("").map((function(t,e){return n.indexOf(e)<0&&(t.match(h)||"'"===t)?r[e]:-1}));return t=t.split("").map((function(t,e){var n=t,r=a.indexOf(e)>=0,o=e>0&&a.indexOf(e-1)>=0,i=a.indexOf(e+1)>=0;return r&&(o||(n="'"+n),i||(n+="'")),n})).join(""),t},y=function(t){var e=[],n=g(new Date(2009,8,8,6,5,4),t),r=n.split("").map((function(t,e){return e})),a=n,o={},i=[{date:new Date(2009,8,8,6,5,4,111),pattern:"S"},{date:new Date(2009,8,8,6,5,2),pattern:"s"},{date:new Date(2009,8,8,6,2,4),pattern:"m"},{date:new Date(2009,8,8,18,5,4),pattern:"H",isDigit:!0},{date:new Date(2009,8,8,2,5,4),pattern:"h",isDigit:!0},{date:new Date(2009,8,8,18,5,4),pattern:"a",isDigit:!1},{date:new Date(2009,8,1,6,5,4),pattern:"d"},{date:[new Date(2009,8,2,6,5,4),new Date(2009,8,3,6,5,4),new Date(2009,8,4,6,5,4)],pattern:"E"},{date:new Date(2009,9,6,6,5,4),pattern:"M"},{date:new Date(1998,8,8,6,5,4),pattern:"y"}];if(a)return i.forEach((function(i){var u=c(n,g(i.date,t),e,i.isDigit),s="M"!==i.pattern||o.d?i.pattern:"L";a=l(a,u,s,r),o[s]=u.length})),a=d(a,n,e,r),e.length?a:void 0}},64030:function(t,e,n){function r(t,e){while(t.length<e)t="0"+t;return t}n.d(e,{P:function(){return i}});var a={3:"abbreviated",4:"wide",5:"narrow"},o={y:function(t,e,n){var a=t[n?"getUTCFullYear":"getFullYear"]();return 2===e&&(a%=100),r(a.toString(),e)},M:function(t,e,n,o){var i=t[n?"getUTCMonth":"getMonth"](),u=a[e];return u?o.getMonthNames(u,"format")[i]:r((i+1).toString(),Math.min(e,2))},L:function(t,e,n,o){var i=t[n?"getUTCMonth":"getMonth"](),u=a[e];return u?o.getMonthNames(u,"standalone")[i]:r((i+1).toString(),Math.min(e,2))},Q:function(t,e,n,o){var i=t[n?"getUTCMonth":"getMonth"](),u=Math.floor(i/3),s=a[e];return s?o.getQuarterNames(s)[u]:r((u+1).toString(),Math.min(e,2))},E:function(t,e,n,r){var o=t[n?"getUTCDay":"getDay"](),i=a[e<3?3:e];return r.getDayNames(i)[o]},a:function(t,e,n,r){var o=t[n?"getUTCHours":"getHours"](),i=o<12?0:1,u=a[e];return r.getPeriodNames(u)[i]},d:function(t,e,n){return r(t[n?"getUTCDate":"getDate"]().toString(),Math.min(e,2))},H:function(t,e,n){return r(t[n?"getUTCHours":"getHours"]().toString(),Math.min(e,2))},h:function(t,e,n){var a=t[n?"getUTCHours":"getHours"]();return r((a%12||12).toString(),Math.min(e,2))},m:function(t,e,n){return r(t[n?"getUTCMinutes":"getMinutes"]().toString(),Math.min(e,2))},s:function(t,e,n){return r(t[n?"getUTCSeconds":"getSeconds"]().toString(),Math.min(e,2))},S:function(t,e,n){return r(t[n?"getUTCMilliseconds":"getMilliseconds"]().toString(),3).substr(0,e)},x:function(t,e,n){var a=n?0:t.getTimezoneOffset(),o=a>0?"-":"+",i=Math.abs(a),u=Math.floor(i/60),s=i%60,f=r(u.toString(),2),c=r(s.toString(),2);return o+f+(e>=3?":":"")+(e>1||s?c:"")},X:function(t,e,n){return n||!t.getTimezoneOffset()?"Z":o.x(t,e,n)},Z:function(t,e,n){return o.X(t,e>=5?3:2,n)}},i=function(t,e){return function(n){var r,a,i,u,s=0,f=!1,c="";if(!n)return null;if(!t)return n;var m="Z"===t[t.length-1]||"'Z'"===t.slice(-3);for(r=0;r<t.length;r++)i=t[r],a=o[i],u=i===t[r+1],s++,u||(a&&!f&&(c+=a(n,s,m,e)),s=0),"'"!==i||u?!f&&a||(c+=i):f=!f,"'"===i&&u&&r++;return c}}},47539:function(t,e,n){n.d(e,{MT:function(){return k},oo:function(){return y},xe:function(){return M}});var r=n(84392),a=n(27938),o={3:"abbreviated",4:"wide",5:"narrow"},i=function(t,e){return t>2?Object.keys(o).map((function(t){return["format","standalone"].map((function(n){return e.getMonthNames(o[t],n).join("|")})).join("|")})).join("|"):2===t?"1[012]|0?[1-9]":"0??[1-9]|1[012]"},u={":":function(t,e){var n=t>1?"{".concat(t,"}"):"",a=(0,r.hr)(e.getTimeSeparator());return":"!==a&&(a="".concat(a,"|:")),"".concat(a).concat(n)},y:function(t){return 2===t?"[0-9]{".concat(t,"}"):"[0-9]+?"},M:i,L:i,Q:function(t,e){return t>2?e.getQuarterNames(o[t],"format").join("|"):"0?[1-4]"},E:function(t,e){return"\\D*"},a:function(t,e){return e.getPeriodNames(o[t<3?3:t],"format").join("|")},d:function(t){return 2===t?"3[01]|[12][0-9]|0?[1-9]":"0??[1-9]|[12][0-9]|3[01]"},H:function(t){return 2===t?"2[0-3]|1[0-9]|0?[0-9]":"0??[0-9]|1[0-9]|2[0-3]"},h:function(t){return 2===t?"1[012]|0?[1-9]":"0??[1-9]|1[012]"},m:function(t){return 2===t?"[1-5][0-9]|0?[0-9]":"0??[0-9]|[1-5][0-9]"},s:function(t){return 2===t?"[1-5][0-9]|0?[0-9]":"0??[0-9]|[1-5][0-9]"},S:function(t){return"[0-9]{1,".concat(t,"}")},w:function(t){return 2===t?"[1-5][0-9]|0?[0-9]":"0??[0-9]|[1-5][0-9]"}},s=Number,f=function(t,e){return t.map((t=>t.toLowerCase())).indexOf(e.toLowerCase())},c=function(t,e,n){return e>2?["format","standalone"].map((function(e){return Object.keys(o).map((function(r){var a=n.getMonthNames(o[r],e);return f(a,t)}))})).reduce((function(t,e){return t.concat(e)})).filter((function(t){return t>=0}))[0]:s(t)-1},m={y:function(t,e){var n=s(t);return 2===e?n<30?2e3+n:1900+n:n},M:c,L:c,Q:function(t,e,n){return e>2?n.getQuarterNames(o[e],"format").indexOf(t):s(t)-1},E:function(t,e,n){var r=n.getDayNames(o[e<3?3:e],"format");return f(r,t)},a:function(t,e,n){var r=n.getPeriodNames(o[e<3?3:e],"format");return f(r,t)},d:s,H:s,h:s,m:s,s:s,S:function(t,e){e=Math.max(e,3),t=t.slice(0,3);while(e<3)t+="0",e++;return s(t)}},l=["y","M","d","h","m","s","S"],g={y:"setFullYear",M:"setMonth",L:"setMonth",a:function(t,e,n){var r=t.getHours(),a=n.h;void 0!==a&&a!==r&&r--,e||12!==r?e&&12!==r&&(r+=12):r=0,t.setHours(r)},d:"setDate",H:"setHours",h:"setHours",m:"setMinutes",s:"setSeconds",S:"setMilliseconds"},h=function(t,e){var n=t[e];if(!n)return 0;var r=0;do{e++,r++}while(t[e]===n);return r},d=function(t,e){for(var n="",r=0;r<e;r++)n+=t;return n},y=function(t,e){for(var n,o="",i="",s=[],f=function(){i&&(s.push("'".concat(i,"'")),o+="".concat((0,r.hr)(i),")"),i="")},c=0;c<t.length;c++){var m=t[c],l="'"===m,g=u[m];if(!l||(n=!n,"'"===t[c-1]))if(g&&!n){var y=h(t,c),p=d(m,y);f(),s.push(p),o+="(".concat(g(y,e),")"),c+=y-1}else i||(o+="("),i+=m}return f(),v(s)||a.k.warn("The following format may be parsed incorrectly: ".concat(t,".")),{patterns:s,regexp:new RegExp("^".concat(o,"$"),"i")}},p=["d","H","h","m","s","w","M","L","Q"],v=function(t){var e=t=>{if(!t)return!1;var e=t[0];return["y","S"].includes(e)||p.includes(e)&&t.length<3},n=!0,r=0;return t.every(((t,a,o)=>(e(t)&&((t=>"S"!==t[0]&&2!==t.length)(t)&&(n=++r<2),e(o[a+1])||(r=0)),n)))},M=function(){return g},w=function(t,e,n,r,a){var o=e[0],i=g[o],u=m[o];if(i&&u){var s=u(n,e.length,r);a[e]=s,t[i]?t[i](s):i(t,s,a)}},D=function(t,e,n){var r=g[e],a="g"+r.substr(1),o=n[a]();t[r](o)},b=function(t){return t.map((function(t){return"'"===t[0]?"":"H"===t[0]?"h":t[0]}))},S=function(t){var e=t.map((function(t){return l.indexOf(t)}));return Math.max.apply(Math,e)},N=function(t){var e=t.filter((function(t){return l.indexOf(t)<0}));return l.concat(e)},k=function(t,e){var n=y(t,e);return function(t){var r=n.regexp.exec(t);if(r){var a=new Date,o=new Date(a.getFullYear(),0,1),i=b(n.patterns),u=S(i),s=N(i),f={};return s.forEach((function(t,s){if(t&&!(s<l.length&&s>u)){var c=i.indexOf(t);if(c>=0){var m=n.patterns[c],g=r[c+1];w(o,m,g,e,f)}else D(o,t,a)}})),o}return null}}}}]);