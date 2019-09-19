/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
(function(e,t){"use strict";var n=e.History=e.History||{};if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={handlers:{},_uid:1,uid:function(e){return e._uid||(e._uid=n.Adapter._uid++)},bind:function(e,t,r){var i=n.Adapter.uid(e);n.Adapter.handlers[i]=n.Adapter.handlers[i]||{},n.Adapter.handlers[i][t]=n.Adapter.handlers[i][t]||[],n.Adapter.handlers[i][t].push(r),e["on"+t]=function(e,t){return function(r){n.Adapter.trigger(e,t,r)}}(e,t)},trigger:function(e,t,r){r=r||{};var i=n.Adapter.uid(e),s,o;n.Adapter.handlers[i]=n.Adapter.handlers[i]||{},n.Adapter.handlers[i][t]=n.Adapter.handlers[i][t]||[];for(s=0,o=n.Adapter.handlers[i][t].length;s<o;++s)n.Adapter.handlers[i][t][s].apply(this,[r])},extractEventData:function(e,n){var r=n&&n[e]||t;return r},onDomLoad:function(t){var n=e.setTimeout(function(){t()},2e3);e.onload=function(){clearTimeout(n),t()}}},typeof n.init!="undefined"&&n.init()})(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=e.sessionStorage||!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window);/*!
 * publisher.js - (c) Ryan Florence 2011
 * github.com/rpflorence/publisher.js
 * MIT License
*/

// UMD Boilerplate \o/ && D:
(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(); // node
  } else if (typeof define === 'function' && define.amd) {
    define(factory); // amd
  } else {
    // window with noConflict
    var _publisher = root.publisher;
    var publisher = root.publisher = factory();
    root.publisher.noConflict = function () {
      root.publisher = _publisher;
      return publisher;
    }
  }
}(this, function () {

  var publisher = function (obj) {
    var topics = {};
    obj = obj || {};

    obj.publish = function (topic/*, messages...*/) {
      if (!topics[topic]) return obj;
      var messages = [].slice.call(arguments, 1);
      for (var i = 0, l = topics[topic].length; i < l; i++) {
        topics[topic][i].handler.apply(topics[topic][i].context, messages);
      }
      return obj;
    };

    obj.subscribe = function (topicOrSubscriber, handlerOrTopics) {
      var firstType = typeof topicOrSubscriber;

      if (firstType === 'string') {
        return subscribe.apply(null, arguments);
      }

      if (firstType === 'object' && !handlerOrTopics) {
        return subscribeMultiple.apply(null, arguments);
      }

      if (typeof handlerOrTopics === 'string') {
        return hitch.apply(null, arguments);
      }

      return hitchMultiple.apply(null, arguments);
    };

    function subscribe (topic, handler, context) {
      var reference = { handler: handler, context: context || obj };
      topic = topics[topic] || (topics[topic] = []);
      topic.push(reference);
      return {
        attach: function () {
          topic.push(reference);
          return this;
        },
        detach: function () {
          erase(topic, reference);
          return this;
        }
      };
    };

    function subscribeMultiple (pairs) {
      var subscriptions = {};
      for (var topic in pairs) {
        if (!pairs.hasOwnProperty(topic)) continue;
        subscriptions[topic] = subscribe(topic, pairs[topic]);
      }
      return subscriptions;
    };

    function hitch (subscriber, topic) {
      return subscribe(topic, subscriber[topic], subscriber);
    };

    function hitchMultiple (subscriber, topics) {
      var subscriptions = [];
      for (var i = 0, l = topics.length; i < l; i++) {
        subscriptions.push( hitch(subscriber, topics[i]) );
      }
      return subscriptions;
    };

    function erase (arr, victim) {
      for (var i = 0, l = arr.length; i < l; i++){
        if (arr[i] === victim) arr.splice(i, 1);
      }
    }

    return obj;
  };

  // publisher is a publisher, so meta ...
  return publisher(publisher);
}));

/* Modernizr 2.6.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-canvas-webgl-prefixed-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a){var e=a[d];if(!z(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}var d="2.6.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},o.webgl=function(){return!!a.WebGLRenderingContext},o.csstransforms=function(){return!!C("transform")};for(var D in o)v(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e.prefixed=function(a,b,c){return b?C(a,b,c):C(a,"pfx")},e}(this,this.document);/**
 * jQuery.Preload
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com
 * Dual licensed under MIT and GPL.
 * Date: 3/25/2009
 *
 * @projectDescription Multifunctional preloader
 * @author Ariel Flesler
 * @version 1.0.8
 *
 * @id jQuery.preload
 * @param {String, jQuery, Array< String, <a>, <link>, <img> >} original Collection of sources to preload
 * @param {Object} settings Hash of settings.
 *
 * @id jQuery.fn.preload
 * @param {Object} settings Hash of settings.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @example Link Mode:
 *	$.preload( '#images a' );
 *
 * @example Rollover Mode:
 *	$.preload( '#images img', {
 *		find:/\.(gif|jpg)/,
 *		replace:'_over.$1'
 *	});
 *
 * @example Src Mode:
 *	$.preload( [ 'red', 'blue', 'yellow' ], {
 *		base:'images/colors/',
 *		ext:'.jpg'
 *	});
 *
 * @example Placeholder Mode:
 *	$.preload( '#images img', {
 *		placeholder:'placeholder.jpg',
 *		notFound:'notfound.jpg'
 *	});
 *
 * @example Placeholder+Rollover Mode(High res):
 *	$.preload( '#images img', {
 *		placeholder:true,
 *		find:/\.(gif|jpg)/,
 *		replace:'_high.$1'
 *	});
 */
(function( $ ){

	var $preload = $.preload = function( original, settings ){
		if( original.split ) // selector
			original = $(original);

		settings = $.extend( {}, $preload.defaults, settings );
		var sources = $.map( original, function( source ){
			if( !source ) 
				return; // skip
			if( source.split ) // URL Mode
				return settings.base + source + settings.ext;
			var url = source.src || source.href; // save the original source
			if( typeof settings.placeholder == 'string' && source.src ) // Placeholder Mode, if it's an image, set it.
				source.src = settings.placeholder;
			if( url && settings.find ) // Rollover mode
				url = url.replace( settings.find, settings.replace );
			return url || null; // skip if empty string
		});

		var data = {
			loaded:0, // how many were loaded successfully
			failed:0, // how many urls failed
			next:0, // which one's the next image to load (index)
			done:0, // how many urls were tried
			/*
			index:0, // index of the related image			
			found:false, // whether the last one was successful
			*/
			total:sources.length // how many images are being preloaded overall
		};
		
		if( !data.total ) // nothing to preload
			return finish();
		
		var imgs = $(Array(settings.threshold+1).join('<img/>'))
			.load(handler).error(handler).bind('abort',handler).each(fetch);
		
		function handler( e ){
			//console.log("loaded "+this.src);
			data.element = this;
			data.found = e.type == 'load';
			data.image = this.src;
			data.index = this.index;
			var orig = data.original = original[this.index];
			data[data.found?'loaded':'failed']++;
			data.done++;

			// This will ensure that the images aren't "un-cached" after a while
			if( settings.enforceCache )
				$preload.cache.push(
					$('<img/>').attr('src',data.image)[0]
				);

			if( settings.placeholder && orig.src ) // special case when on placeholder mode
				orig.src = data.found ? data.image : settings.notFound || orig.src;
			if( settings.onComplete )
				settings.onComplete( data );
			if( data.done < data.total ) // let's continue
				fetch( 0, this );
			else{ // we are finished
				if( imgs && imgs.unbind )
					imgs.unbind('load').unbind('error').unbind('abort'); // cleanup
				imgs = null;
				finish();
			}
		}
		function fetch( i, img, retry ){
			// IE problem, can't preload more than 15
			if( img.attachEvent /* msie */ && data.next && data.next % $preload.gap === 0 && !retry ){
				setTimeout(function(){ fetch( i, img, true ); }, 0);
				return false;
			}
			if( data.next == data.total ) return false; // no more to fetch
			img.index = data.next; // save it, we'll need it.
			img.src = sources[data.next++];
			if( settings.onRequest ){
				data.index = img.index;
				data.element = img;
				data.image = img.src;
				data.original = original[data.next-1];
				settings.onRequest( data );
			}
		}
		function finish(){
			if( settings.onFinish )
				settings.onFinish( data );
		}
	};

	// each time we load this amount and it's IE, we must rest for a while, make it lower if you get stack overflow.
	$preload.gap = 5; 
	$preload.cache = [];
	
	$preload.defaults = {
		threshold:2, // how many images to load simultaneously
		base:'', // URL mode: a base url can be specified, it is prepended to all string urls
		ext:'', // URL mode:same as base, but it's appended after the original url.
		replace:'' // Rollover mode: replacement (can be left empty)
		/*
		enforceCache: false, // If true, the plugin will save a copy of the images in $.preload.cache
		find:null, // Rollover mode: a string or regex for the replacement
		notFound:'' // Placeholder Mode: Optional url of an image to use when the original wasn't found
		placeholder:'', // Placeholder Mode: url of an image to set while loading
		onRequest:function( data ){ ... }, // callback called every time a new url is requested
		onComplete:function( data ){ ... }, // callback called every time a response is received(successful or not)
		onFinish:function( data ){ ... } // callback called after all the images were loaded(or failed)
		*/
	};

	$.fn.preload = function( settings ){
		$preload( this, settings );
		return this;
	};

})( jQuery );/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));/*!
 * VERSION: 1.11.4
 * DATE: 2014-01-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.4",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,I=X.createElement("div"),E=X.createElement("img"),F=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)&&(c=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",W="",V=function(t,e){e=e||I;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(W=3===r?"ms":i[r],j="-"+W.toLowerCase()+"-",W+t):null},q=X.defaultView?X.defaultView.getComputedStyle:function(){},H=a.getStyle=function(t,e,i,r,s){var n;return z||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||q(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):U(t)},Q=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a=C.test(e),o=t,l=I.style,h=0>i;return h&&(i=-i),"%"===r&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+H(t,"position")+";line-height:0;","%"!==r&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+r:(o=t.parentNode||X.body,l[a?"width":"height"]=i+r),o.appendChild(I),n=parseFloat(I[a?"offsetWidth":"offsetHeight"]),o.removeChild(I),0!==n||s||(n=Q(t,e,i,r,!0))),h?-n:n},Z=function(t,e,i){if("absolute"!==H(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=H(t,"margin"+r,i);return t["offset"+r]-(Q(t,e,parseFloat(s),s.replace(y,""))||0)},$=function(t,e){var i,r,s={};if(e=e||q(t,null))if(i=e.length)for(;--i>-1;)s[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)s[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==s[i]&&(s[i.replace(S,k)]=e[i]);return z||(s.opacity=U(t)),r=be(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,we&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},G=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=K[e],n=s.length;for(i=i||q(t,null);--n>-1;)r-=parseFloat(H(t,"padding"+s[n],i,!0))||0,r-=parseFloat(H(t,"border"+s[n]+"Width",i,!0))||0;return r},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(v,"")),e.oy=parseFloat(s.replace(v,""))),r+" "+s+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},re=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},se=function(t,e,i,r){var s,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(s+1/3,e,i),t[1]=ae(s,e,i),t[2]=ae(s-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?s=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(r&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=s(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=s(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},_e=(F._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),pe=(F._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,_=r,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,r=u=i.parse(t,e,r,s),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));r&&r!==_;){if(1>=r.type&&(o=r.p,f[o]=r.s+r.c,p[o]=r.s,n||(h=new _e(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,f[o]=r.data[l],p[o]=r[l],n||(h=new _e(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:f,firstMPT:h,pt:u}},F.CSSPropTween=function(t,e,r,s,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?r:_,this.e=void 0===p?r+s:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,r,s,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,r),r+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=r.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(s&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=F._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new de(n[r],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,r,s,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[r].parse(t,i,r,s,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},l.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,r,s,n,a,o){var l=new pe(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=j+"transform",xe=V("transformOrigin"),we=null!==V("perspective"),be=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var s,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(H(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?s=H(t,Te,e,!0):t.currentStyle&&(s=t.currentStyle.filter.match(A),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),v.x||0,v.y||0].join(","):""),n=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||r||null==v.rotationX){var N,X,I,E,F,Y,z,U=n[0],B=n[1],j=n[2],W=n[3],V=n[4],q=n[5],Q=n[6],Z=n[7],$=n[11],G=Math.atan2(Q,k),K=-b>G||G>b;v.rotationX=G*L,G&&(E=Math.cos(-G),F=Math.sin(-G),N=V*E+S*F,X=q*E+R*F,I=Q*E+k*F,S=V*-F+S*E,R=q*-F+R*E,k=Q*-F+k*E,$=Z*-F+$*E,V=N,q=X,Q=I),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,E=Math.cos(-G),F=Math.sin(-G),N=U*E-S*F,X=B*E-R*F,I=j*E-k*F,R=B*F+R*E,k=j*F+k*E,$=W*F+$*E,U=N,B=X,j=I),G=Math.atan2(B,q),v.rotation=G*L,G&&(z=-b>G||G>b,E=Math.cos(-G),F=Math.sin(-G),U=U*E+V*F,X=B*E+q*F,q=B*-F+q*E,Q=j*-F+Q*E,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(q*q+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Q*Q+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!r&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===H(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,re=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(re*re+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||re?Math.atan2(ie,re)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,r=this.data,s=-r.rotation*M,n=s+r.skewX*M,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x,b=r.y;if(null!=r.ox&&(f=(r.oxp?.01*m*r.ox:r.ox)-m/2,d=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==r[S]?2>ce?-r.ieOffsetX:-r.ieOffsetY:2>ce?f-r.ieOffsetX:d-r.ieOffsetY,_[S]=(r[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,r,s,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P=this.data,S=this.t.style,R=P.rotation*M,k=P.scaleX,C=P.scaleY,A=P.scaleZ,O=P.perspective;if(p){var D=1e-4;D>k&&k>-D&&(k=A=2e-5),D>C&&C>-D&&(C=A=2e-5),!O||P.z||P.rotationX||P.rotationY||(O=0)}if(R||P.skewX)v=Math.cos(R),y=Math.sin(R),t=v,s=y,P.skewX&&(R-=P.skewX*M,v=Math.cos(R),y=Math.sin(R)),e=-y,n=v;else{if(!(P.rotationY||P.rotationX||1!==A||O))return S[ye]="translate3d("+P.x+"px,"+P.y+"px,"+P.z+"px)"+(1!==k||1!==C?" scale("+k+","+C+")":""),void 0;t=n=1,e=s=0}u=1,i=r=a=o=l=h=_=f=c=0,d=O?-1/O:0,m=P.zOrigin,g=1e5,R=P.rotationY*M,R&&(v=Math.cos(R),y=Math.sin(R),l=u*-y,f=d*-y,i=t*y,a=s*y,u*=v,d*=v,t*=v,s*=v),R=P.rotationX*M,R&&(v=Math.cos(R),y=Math.sin(R),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==A&&(i*=A,a*=A,u*=A,d*=A),1!==C&&(e*=C,n*=C,h*=C,c*=C),1!==k&&(t*=k,s*=k,l*=k,f*=k),m&&(_-=m,r=i*_,o=a*_,_=u*_+m),r=(T=(r+=P.x)-(r|=0))?(0|T*g+(0>T?-.5:.5))/g+r:r,o=(T=(o+=P.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=P.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,S[ye]="matrix3d("+[(0|t*g)/g,(0|s*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,r,o,_,O?1+-_/O:1].join(",")+")"},Re=function(t){var e,i,r,s,n,a=this.data,o=this.t,l=o.style;return a.rotationX||a.rotationY||a.z||a.force3D?(this.setRatio=Se,Se.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,r=1e5,s=a.scaleX*r,n=a.scaleY*r,l[ye]="matrix("+(0|Math.cos(e)*s)/r+","+(0|Math.sin(e)*s)/r+","+(0|Math.sin(i)*-n)/r+","+(0|Math.cos(i)*n)/r+","+a.x+","+a.y+")"):l[ye]="matrix("+a.scaleX+",0,0,"+a.scaleY+","+a.x+","+a.y+")",void 0)};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,r,n,a,o){if(r._transform)return n;var l,h,u,_,p,f,c,d=r._transform=be(t,s,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:re(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:re(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:re(y.scaleZ,d.scaleZ),x:re(y.x,d.x),y:re(y.y,d.y),z:re(y.z,d.z),perspective:re(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=se("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=se("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=se("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:se(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:se(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(we&&null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,r._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||H(t,i,s,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(r._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),_=u=H(t,b[l],s,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=r[i]||v),g!==v&&(T=Q(t,"borderLeft",f,v),x=Q(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Q(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,_,p,f="background-position",d=s||q(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=H(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),E.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-E.width:t.offsetHeight-E.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(H(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,"borderTopWidth",s,!1,"0px")+" "+H(t,"borderTopStyle",s,!1,"solid")+" "+H(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("borderWidth",{parser:ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,r=i.filter||H(this.data,"filter"),s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!H(this.data,"filter")):(i.filter=r.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("opacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(T,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(H(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===H(t,"visibility",s)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,r,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,r,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,s),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",s=!0;else for(e=this.e.split(","),r=e.length;--r>-1;)i=e[r],o[i]&&(o[i].parse===a?s=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);s&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,r,s,n){return n=new pe(t,r,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=q(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=H(t,"zIndex",s),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,s),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=H(t,"zIndex",s),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,s,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=H(t,a,s)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,s),c="px"):"left"===a||"top"===a?(u=Z(t,a,s),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=a in r?r[a]:c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Q(t,a,u,c),"%"===d?(u/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Q(t,a,1,"em"):(_=Q(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,s,!0)},l._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)De(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o=e.to(t,i,r),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),s=_.length;--s>-1;)if(n=G(_[s],h[s],u[s]),n.firstMPT){n=n.difs;for(a in r)p[a]&&(n[a]=r[a]);l.push(e.to(_[s],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();/*!
 * VERSION: 1.11.4
 * DATE: 2014-01-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.4",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||0===a?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t||0===this._rawPrevTime?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);// tween.js - http://github.com/sole/tween.js
'use strict';void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});
var TWEEN=TWEEN||function(){var a=[];return{REVISION:"12",getAll:function(){return a},removeAll:function(){a=[]},add:function(c){a.push(c)},remove:function(c){c=a.indexOf(c);-1!==c&&a.splice(c,1)},update:function(c){if(0===a.length)return!1;for(var b=0,c=void 0!==c?c:"undefined"!==typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();b<a.length;)a[b].update(c)?b++:a.splice(b,1);return!0}}}();
TWEEN.Tween=function(a){var c={},b={},d={},e=1E3,g=0,h=!1,j=!1,q=0,m=null,v=TWEEN.Easing.Linear.None,w=TWEEN.Interpolation.Linear,n=[],r=null,s=!1,t=null,u=null,k;for(k in a)c[k]=parseFloat(a[k],10);this.to=function(a,c){void 0!==c&&(e=c);b=a;return this};this.start=function(e){TWEEN.add(this);j=!0;s=!1;m=void 0!==e?e:"undefined"!==typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();m+=q;for(var f in b){if(b[f]instanceof Array){if(0===b[f].length)continue;
b[f]=[a[f]].concat(b[f])}c[f]=a[f];!1===c[f]instanceof Array&&(c[f]*=1);d[f]=c[f]||0}return this};this.stop=function(){if(!j)return this;TWEEN.remove(this);j=!1;this.stopChainedTweens();return this};this.stopChainedTweens=function(){for(var a=0,b=n.length;a<b;a++)n[a].stop()};this.delay=function(a){q=a;return this};this.repeat=function(a){g=a;return this};this.yoyo=function(a){h=a;return this};this.easing=function(a){v=a;return this};this.interpolation=function(a){w=a;return this};this.chain=function(){n=
arguments;return this};this.onStart=function(a){r=a;return this};this.onUpdate=function(a){t=a;return this};this.onComplete=function(a){u=a;return this};this.update=function(p){var f;if(p<m)return!0;!1===s&&(null!==r&&r.call(a),s=!0);var i=(p-m)/e,i=1<i?1:i,j=v(i);for(f in b){var k=c[f]||0,l=b[f];l instanceof Array?a[f]=w(l,j):("string"===typeof l&&(l=k+parseFloat(l,10)),"number"===typeof l&&(a[f]=k+(l-k)*j))}null!==t&&t.call(a,j);if(1==i)if(0<g){isFinite(g)&&g--;for(f in d)"string"===typeof b[f]&&
(d[f]+=parseFloat(b[f],10)),h&&(i=d[f],d[f]=b[f],b[f]=i),c[f]=d[f];m=p+q}else{null!==u&&u.call(a);f=0;for(i=n.length;f<i;f++)n[f].start(p);return!1}return!0}};
TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return 1>(a*=2)?0.5*a*a:-0.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a:0.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*
a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return 0.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:1>(a*=2)?0.5*Math.pow(1024,a-1):0.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-
Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return-(b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4))},Out:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return b*Math.pow(2,-10*a)*Math.sin((a-c)*
2*Math.PI/0.4)+1},InOut:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return 1>(a*=2)?-0.5*b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4):0.5*b*Math.pow(2,-10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4)+1}},Back:{In:function(a){return a*a*(2.70158*a-1.70158)},Out:function(a){return--a*a*(2.70158*a+1.70158)+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*(3.5949095*a-2.5949095):0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)}},Bounce:{In:function(a){return 1-
TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},InOut:function(a){return 0.5>a?0.5*TWEEN.Easing.Bounce.In(2*a):0.5*TWEEN.Easing.Bounce.Out(2*a-1)+0.5}}};
TWEEN.Interpolation={Linear:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),g=TWEEN.Interpolation.Utils.Linear;return 0>c?g(a[0],a[1],d):1<c?g(a[b],a[b-1],b-d):g(a[e],a[e+1>b?b:e+1],d-e)},Bezier:function(a,c){var b=0,d=a.length-1,e=Math.pow,g=TWEEN.Interpolation.Utils.Bernstein,h;for(h=0;h<=d;h++)b+=e(1-c,d-h)*e(c,h)*a[h]*g(d,h);return b},CatmullRom:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),g=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[b]?(0>c&&(e=Math.floor(d=b*(1+c))),g(a[(e-
1+b)%b],a[e],a[(e+1)%b],a[(e+2)%b],d-e)):0>c?a[0]-(g(a[0],a[0],a[1],a[1],-d)-a[0]):1<c?a[b]-(g(a[b],a[b],a[b-1],a[b-1],d-b)-a[b]):g(a[e?e-1:0],a[e],a[b<e+1?b:e+1],a[b<e+2?b:e+2],d-e)},Utils:{Linear:function(a,c,b){return(c-a)*b+a},Bernstein:function(a,c){var b=TWEEN.Interpolation.Utils.Factorial;return b(a)/b(c)/b(a-c)},Factorial:function(){var a=[1];return function(c){var b=1,d;if(a[c])return a[c];for(d=c;1<d;d--)b*=d;return a[c]=b}}(),CatmullRom:function(a,c,b,d,e){var a=0.5*(b-a),d=0.5*(d-c),g=
e*e;return(2*c-2*b+a+d)*e*g+(-3*c+3*b-2*a-d)*g+a*e+c}}};
/*! jQuery UI - v1.11.2 - 2014-11-09
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return a=!o&&r.length?e.widget.extend.apply(null,[a].concat(r)):a,o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-e},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})});function retrieveImages(container) {
	//add own back image!
	var url = "";
	var _images = [];

	// add all the imgs inside a div
	$(container).find("img").each(function() {
		url = $(this).attr("src");
		if($.inArray(url, _images) == -1) _images.push(url);

	});
	var everything = $(container).find("div, li").each(function() {
		var url = "";
		if ($(this).css("background-image") != "none" && $(this).css("background-image").search("linear-gradient") == -1) {
			url = $(this).css("background-image");
			url = url.replace("url(\"", "");
			url = url.replace("url(", "");
			url = url.replace("\")", "");
			url = url.replace(")", "");
			if (url.length > 0 && $.inArray(url, _images) == -1) _images.push(url);
		}
	});
	return _images;
}

//utilitaires

function lerp( t, a, b ){ return a + t * ( b - a ); }
function norm( t, a, b ){ return ( t - a ) / ( b - a ); }
function map( t, a0, b0, a1, b1 ){ return lerp( norm( t, a0, b0 ), a1, b1 ); }


// **** Cookie ****
function createCookie(name,value,days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires="; expires="+date.toGMTString();
  }
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name,"",-1);
}/**
 * Created by nico on 06/03/14.
 */
var DiscMenu = function( size, cameracontrols, menu )
{


	this.size = size || 150;
	this.camControls = cameracontrols;
	this.menu = menu;

	this.radius = this.size / 2;
	this.canvas = document.createElement("canvas");
	this.canvas.id = "disc";
	this.canvas.width = this.size;
	this.canvas.height = this.size;


//	this.canvas.onmousedown = this.onMouseDown;

	/*

	sans pitié

	 */

	this.canvas.radius = this.radius;
	this.canvas.camControls = cameracontrols;

	///..javascript c'est moche...

};

DiscMenu.prototype =
{
	init : function()
	{

		$( "#flip" ).empty();
		$( "#flip" ).addClass( "disc" );
		$( "#flip" ).css(   {
							background : "transparent"
							} );

		document.getElementById( "flip" ).appendChild( this.canvas );

		var ctx = this.canvas.getContext("2d");
		this.ctx = ctx;

		this.render( ctx );


	},

	onMouseDown : function( e )
	{
		var offset = $( "#disc" ).offset();
		var dx =  this.radius - ( e.pageX - offset.left );
		var dy =  this.radius - ( e.pageY - offset.top );
		var angle = Math.atan2( dy, dx );

		var current = this.camControls.angle.x;

		var diffAngle = Math.atan2( Math.sin( angle - current ), Math.cos( angle - current ) );

		this.camControls.reach( current + diffAngle, 0, 1000 );

		//console.log( "down" )

	},

	render : function( ctx, graphic )
	{
		graphic = graphic || false;
		if( Globals.opened ) return;

		if( graphic )
		{
			ctx.restore();
			ctx.clearRect( 0,0,ctx.canvas.width, ctx.canvas.height );

			ctx.save();
			ctx.scale( 1,1 );
			ctx.translate( this.radius, this.radius );
		}


		var r = this.radius * .38;
		var rMax = this.radius * .62;
		var rStep = ( rMax - r ) / 4;

		var colors = [ "#f00", "#fC0", "#0C3", "#06A"];
		var camAngle = PI + this.camControls.angle.x;

		while( camAngle < 0 ) camAngle += PI2;
		camAngle %= PI2;

//		if( camAngle % PI2 < PI / 4 || camAngle % PI2 > PI / 2 + PI / 4 )
//		{
//			return;
//		}
		for( var i = 0; i < this.menu.items.length; i++ )
		{
			var mi = menu.items[ i ];
			if( mi.fixed == false )
			{

				if( graphic )
				{
					ctx.fillStyle = colors[ 0 ];
					colors.shift();

					ctx.beginPath();
					ctx.arc( 0,0, r, mi.angleStart - mi.angleSpan *.5, mi.angleStart + mi.angleSpan *.5, false  );

					r += rStep;

					ctx.arc( 0,0, r, mi.angleStart + mi.angleSpan *.5, mi.angleStart - mi.angleSpan *.5, true  );

					ctx.closePath();
					ctx.fill();
				}

				var angleY = ( camAngle - ( mi.angleStart - mi.angleBounds * .5 ) );

				var n = ( norm( camAngle, PI / 2 - mi.angleSpan *.5, PI / 2+ mi.angleSpan *.5 ) );

				if( n <= 0 || n >= 1 )
				{
					mi.setAlpha( 0 );
					continue;
				}

				var a = lerp( n, -PI / 2, PI / 2 );

				mi.setRotation( this.camControls.angle.y, a );

//				mi.setAlpha( 1 - Math.abs( ( n * 2 ) - 1 )  );
				mi.setAlpha( 1 - Math.abs( ( n * 2 ) - 1 )  );

			}




		}

		if( graphic )
		{
			ctx.fillStyle = "rgba( 255,255,255,.5 )";
			ctx.beginPath();
			ctx.arc( 0, 0, this.radius, 0, PI2,true );
			ctx.arc( 0, 0, this.radius *.70, 0, PI2,false );
			ctx.closePath();
			ctx.fill();

			r = this.radius * .85;

			ctx.beginPath();
			ctx.fillStyle = "#000";
			ctx.arc(
				Math.cos( camAngle ) * r,
				Math.sin( camAngle ) * r,
				5,
				0, PI2
			);
			ctx.closePath();
			ctx.fill();
		}

	},
	update : function( graphic )
	{
		this.render( this.ctx, graphic );
	}


};
/**
 * Created by nico on 18/02/14.
 */

//todo set up and switch
var QualitySettings = function()
{

	// The higher this value, the less the fps will reflect temporary variations
	// A value of 1 will only keep the last value
	this.filterStrength = 20;
	this.fps = 0;
	this.frameTime = 0;
	this.lastLoop = new Date;
	this.thisLoop;

	this.computeFps = function()
	{
	    var frameTime = ( this.thisLoop = new Date ) - this.lastLoop;
		this.frameTime += ( frameTime - this.frameTime ) / this.filterStrength;
	    this.lastLoop = this.thisLoop;
		this.fps = parseInt( 1000 / this.frameTime );
	}


};
var Globals = {};

// Constants **********************************************************
Globals.clickEvent = 'click'; // 'touchstart'
Globals.PAGE_ABOUT = 'about';
Globals.PAGE_MY = '';
Globals.POPIN_ORDER = "order";
Globals.POPIN_NO_STOCK = "nostock";
Globals.POPIN_CART = "cart";
Globals.POPIN_CONTACT = "contact";
Globals.POPIN_CONTACT_CONFIRM = "contact_confirm";
Globals.POPIN_SEND_ERROR = "send_error";
Globals.POPIN_SEND_ERROR_CONFIRM = "send_error_confirm";
Globals.POPIN_TUTO = "tuto";
Globals.POPIN_LEAVE = "leave";
Globals.POPIN_NO_WEBGL = "no_webgl";
Globals.POPIN_PARTAGE = "partage";
Globals.POPIN_PARTAGE_MAIL = "partage_mail";

Globals.TRANSITION_TIME = 1.3;
Globals.TRANSITION_EASE = Quint.easeInOut;

// VARS ******************************
var mouseX = 0,
	mouseY = 0,
	mouseDown = false, dragging = false,
	PI = Math.PI,
	PI2 = PI * 2,
	DEG = 180 / PI,
	RAD = PI / 180,
	EPSILON = 10e-5,
	angle = 0,
	POSITION_EPSILON = 10e-5,
	ROTATION_EPSILON = RAD * .1;

Globals.currentUrl = '';
Globals.soundOn = true;
Globals.mobile = false;
Globals.cssVersion = true;
Globals.modelBaseRotation = 0;
Globals.modelFlipRotation = -90;
Globals.flipped = false;
Globals.opened = false;
Globals.isIE = false;
Globals.isIE9 = false;
Globals.oldIE = false;
Globals.textAllowed = true;
Globals.inMenu = false;
Globals.GLFadeInduration = 2.5;
Globals.GLFadeOutduration = 1;
Globals.tablet = false;

var raf =   window.requestAnimationFrame		||
			window.webkitRequestAnimationFrame 	||
			window.mozRequestAnimationFrame 	||
			window.msRequestAnimationFrame 		||
			window.oRequestAnimationFrame 		||
			function(func) { setTimeout( func, 1000 / 60 ); };

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var width = window.innerWidth,
	windowHalfX = window.innerWidth / 2,

	height = window.innerHeight,
	windowHalfY = window.innerHeight / 2;

function onWindowResize()
{
	width = window.innerWidth;
	height = window.innerHeight;

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
}
$( window ).resize(onWindowResize);

// Events *****************************************************
var Events = {};

Events.navigate = "events.navigate";
Events.toggleFullscreen = "events.toggleFullscreen";
Events.loadSceneComplete = "events.load.sceneComplete";
Events.loadSceneProgress = "events.load.sceneProgress";
Events.openPopin = "events.openPopin";
Events.popinClosing = "events.popinClosing";
Events.knifeChange = "events.knifeChange";

Events.addToCart = "events.addToCart";
Events.checkout = "events.checkout";
Events.needResize = "events.needResize";
Events.menuTextOn = "events.menuTextOn";
Events.menuTextOff = "events.menuTextOff";

// OBJECT_TYPE ***********************************************
var OBJECT_TYPE = {};
OBJECT_TYPE.PIECE_3D     = "PIECE_3D";
OBJECT_TYPE.ANCHOR_3D    = "ANCHOR_3D";
OBJECT_TYPE.PIECE_2D     = "PIECE_2D";
OBJECT_TYPE.ANCHOR_2D    = "ANCHOR_2D";var Mustache = {};
Mustache.maxTextCaracter = 35;
Mustache.sep = "/";
Mustache.cart = [];
Mustache.styleNone = "none";
Mustache.tattooNone = "none";
Mustache.univers = "";

///////////////////////
//
// MODELES
//
///////////////////////

Mustache.knifeModels =
{
	MODEL_15G : "15",
	MODEL_27G : "27",
	MODEL_37G : "37"
};

///////////////////////
//
// POIGNEE
//
///////////////////////

// types de poignées
Mustache.handleTypes =
{
	NAKED :     "naked",
	PLASTIC :   "plastic",
	WOOD :      "wood",
	COMPOSITE :    "composite"
};

Mustache.getHandleDataById = function( id )
{
	if(typeof id == "undefined") id = Mustache.knife.handle;
	var datas = {
		image:"",
		texture:"",
		color:"",
		composite:"",
		ref:"",
		type:Mustache.handleTypes.NAKED
	};
	
	$("#handle a."+Mustache.knife.weight).each(function(index)
	{	
		if($(this).attr('data-link') == id){
			
			var images = $(this).attr('data-image').split(',');
			datas.image = (images.length > 0)? images[0] : "";
			datas.texture = (images.length > 1)? images[1] : "";
			datas.color = $(this).attr('data-color');
			datas.composite = $(this).attr('data-composite');
			datas.ref = $(this).attr('data-ref');

			if(datas.composite=="composite"){
				datas.type =  Mustache.handleTypes.COMPOSITE;
			}
			else{
				datas.type = (datas.color === "")? Mustache.handleTypes.WOOD : Mustache.handleTypes.PLASTIC;	
			}
			
			return false;
		}
	});
	
	return datas;
};

///////////////////////
//
// FINISHING
//
///////////////////////

Mustache.finishingTypes =
{
	BLACK :     "black",
	MIRROR :     "mirror",
	TITANIUM :   "titanium"
};

//utilitaire pour retrouver un Finish d'après son id
Mustache.getFinishingTypeById = function( id )
{
	return Mustache.finishingTypes[ id.toUpperCase() ];
    //return id== Mustache.finishingTypes.MIRROR ? Mustache.finishingTypes.MIRROR : Mustache.finishingTypes.TITANIUM;
};


///////////////////////
//
// TODO TATTOO ids
//
///////////////////////

Mustache.getTattooDataById = function( id )
{
	if(typeof id == "undefined") id = Mustache.knife.tattoo;

	var datas = {
		image:"",
		image_handle:"",
		ref:"",
		textOk:true
	};
	
	var color = "";

	if(Mustache.knife.finish==Mustache.finishingTypes.BLACK) {
		color = "black";
	}
	else {
		color = "white";
	}
		
	$("#tattoo a."+Mustache.knife.weight + "[data-version='" + color + "']").each(function(index)
	{
		if($(this).attr('data-link') == id){
			var images = $(this).attr('data-image').split(',');

            datas.image = (images.length > 0)? images[0] : "";
			datas.image_handle = (images.length > 1)? images[1] : "";

			datas.ref = $(this).attr('data-ref');
			datas.textOk = ($(this).attr('data-text-authorization') == '1')? true : false;
			return false;
		}
	});

	return datas;
};

Mustache.isBlack = function()
{
    return Mustache.knife.finish == Mustache.finishingTypes.BLACK;
};


/// ************************************************


Mustache.defaultKnifeValue = {
	finish: Mustache.finishingTypes.BLACK,
	weight : Mustache.knifeModels.MODEL_37G,
	handle: "genevrier" /*Mustache.handleTypes.WOOD*/,
	textStyle:"none",
	price:0.0,
	text:"none",
	tattoo:"tree"
};


Mustache.initDefaultKnife = function(){
	Mustache.knife = {
		finish: Mustache.defaultKnifeValue.finish,
		weight : Mustache.defaultKnifeValue.weight,
		handle: Mustache.defaultKnifeValue.handle,
		textStyle: Mustache.defaultKnifeValue.textStyle,
		text: Mustache.defaultKnifeValue.text,
		tattoo:Mustache.defaultKnifeValue.tattoo,
		price:Mustache.defaultKnifeValue.price
	};
	
};

Mustache.initDefaultKnife();

Mustache.change = function(property, value){
	
	var obj = Mustache.clone();
	obj[ property ] = value;

	if(obj["text"]=="") {
		obj["text"] = "none";
	}

	
	//NICOPATCH
	if( property == "text" )
	{
		var cuurentvalue = $("#text input").val();
		
//		console.log( obj[ property ] );
		//obj[ property ] = obj[ property ].replace( /#/gi, "" );
		//obj[ property ] = obj[ property ].replace( /%/gi, "" );
		//obj[ property ] = obj[ property ].replace( "?", "" );
		//obj[ property ] = obj[ property ].replace( ";", "" );
		//obj[ property ] = obj[ property ].replace( "$", "" );
		//obj[ property ] = obj[ property ].replace( /\//gi, "" );
		//obj[ property ] = obj[ property ].replace( " ", "" );
		
		//console.log( "->", obj[ property ], "---> ", encodeURI( obj[ property ] ));

		// SYLVAIN PATCH
		// if(!$("body").hasClass("isOpen")) {
			// //$("#text input").val( obj[ property ] );
		// }
// 	
		//if(obj[ property ] !== cuurentvalue)
			//$("#text input").val( obj[ property ] );

	}
	//NICOPATCH

	

	publisher.publish(Events.navigate, Mustache.getNewUrl(obj));

};

Mustache.getNewUrl = function(obj)
{
	//NICOPATCH -> urlEncode text

    /*
    if(obj.text=="") {
        obj.text = "none";
    }
    */
   
	if(Mustache.univers!="") {
		var url = Mustache.univers + Mustache.sep + obj.weight+Mustache.sep+obj.finish+Mustache.sep+obj.handle+Mustache.sep+obj.textStyle+Mustache.sep+encodeURIComponent(decodeURIComponent(obj.text));
	}
	else {
		var url = obj.weight+Mustache.sep+obj.finish+Mustache.sep+obj.handle+Mustache.sep+obj.textStyle+Mustache.sep+encodeURIComponent(decodeURIComponent(obj.text));
	}
	
	if(obj.tattoo !== "") url += Mustache.sep+obj.tattoo;
	
	return url;
};



Mustache.getCleanNewUrl = function(obj)
{
	//NICOPATCH -> urlEncode text

	var text = encodeURI( obj.text );
	
	if(text=="") {
		text = "none";
	}
	
	if(Mustache.univers!="") {
		var url = Mustache.univers + Mustache.sep + obj.weight+Mustache.sep+obj.finish+Mustache.sep+obj.handle+Mustache.sep+obj.textStyle+Mustache.sep+encodeURIComponent(decodeURIComponent(text));
	}
	else {
		var url = obj.weight+Mustache.sep+obj.finish+Mustache.sep+obj.handle+Mustache.sep+obj.textStyle+Mustache.sep+encodeURIComponent(decodeURIComponent(text));
	}
	
	if(obj.tattoo !== "") url += Mustache.sep+obj.tattoo;
	return url;
};

Mustache.getCurrentCleanUrl = function(){
	return Mustache.getCleanNewUrl(Mustache.knife);
};

Mustache.getCurrentUrl = function(){
	return Mustache.getNewUrl(Mustache.knife);
};
Mustache.update = function(url){
	
	var hasChanged = "";
	Mustache.saveCurrentKnife();

	var newKnife = null;
	if(url === ""){
		//Mustache.initDefaultKnife();
		trackPage('my_deejo');
		newKnife = Mustache.defaultKnifeValue;
	}else{
		newKnife = Mustache.getKnifeFromUrl(url);
	}
	
	

	//if(url !== ""){
	if(newKnife !== null) Mustache.knife = newKnife;
	
	
	
	if(Mustache.knife.weight != Mustache.prev.weight)
	{
		trackEvent('my_deejo/weight');
		hasChanged += 'weight';
		MenuInterface.setModel(Mustache.knife.weight);
	}
	if(Mustache.knife.finish != Mustache.prev.finish)
	{
		trackEvent('my_deejo/finish');
		hasChanged += 'finish';
		MenuInterface.setFinish(Mustache.knife.finish);
	}
	
	
	if(Mustache.knife.handle != Mustache.prev.handle)
	{
		trackEvent('my_deejo/handle');
		hasChanged += 'handle';	
		
		//console.log(Mustache.knife.handle);
		
		MenuInterface.setHandle(Mustache.knife.handle);
	}
	
	if(Mustache.knife.tattoo != Mustache.prev.tattoo)
	{
		trackEvent('my_deejo/tattoo');
		hasChanged += 'tattoo';
		MenuInterface.setTattoo(Mustache.knife.tattoo);
	}
	if(Mustache.knife.textStyle != Mustache.prev.textStyle)
	{
		trackEvent('my_deejo/texte');
		hasChanged += 'textStyle';
		MenuInterface.setFont(Mustache.knife.textStyle);	
	}
	
	if(Mustache.knife.text != Mustache.prev.text)
	{
		//trackEvent('my_deejo/texte');
		hasChanged += 'textValue';
		MenuInterface.setText(Mustache.knife.text);
		publisher.publish(Events.knifeTextChange, Mustache.knife.text);
		
		/* PAYE TON FIX A DEUX BALL */
		if(Mustache.knife.textStyle!="none") {
			//$(".selector_prefill").hide();
		}
	}

	Mustache.knife.url = Mustache.getNewUrl(Mustache.knife);
	Mustache.updatePrice();
	Mustache.checkModelAvailability();

	publisher.publish(Events.knifeChange, hasChanged);
	
	$("#lang-container ul li a").each(function() {
		
		$(this).attr("href", $(this).data("href") + Mustache.getCleanNewUrl(Mustache.knife) + $(this).data("endurl"));
		
	});
	
};

Mustache.updateCartCookie = function(){
	var urls = "";
	for (var i = 0; i < Mustache.cart.length; i++) {
		
		var url = Mustache.cart[i].url.replace(new RegExp("^"+ Mustache.univers +"/+"), '');
		
		urls += url;
		urls += '##########price#########'+Mustache.cart[i].price;
		if(i < Mustache.cart.length-1) urls += "#_#,#_#_#";
	}
	
	createCookie('deejo_cart_0',urls,365);
};

Mustache.populateCartFromCookie = function(){
	var cook = readCookie("deejo_cart_0");
	if(cook !== null && cook !== ""){
		var urls = cook.split('#_#,#_#_#');
		Mustache.cart = [];
		for (var i = 0; i < urls.length; i++) {
			var datasKnife = urls[i].split('##########price#########');

			var k = Mustache.getKnifeFromUrl(datasKnife[0]);
			k.price = datasKnife[1];
			if(k !== null) Mustache.cart.push(k);
		}
	}
};

Mustache.getCartSendInfos = function()
{
	var currency = $("body").attr("data-devise");
	var list = [];
	
	for (var i = 0; i < Mustache.cart.length; i++) {
		
		var knife = Mustache.cart[i];
		var baseInfos = Mustache.getBaseInfos(knife);
		var textOk = Mustache.getTattooDataById(knife.tattoo).textOk;
		var dataProduct =	{
						'baseid':baseInfos.id,
						'baseprice':baseInfos.price,
						'text':(textOk && knife.textStyle != Mustache.styleNone)? knife.text : "",
						'options':[]
					};
		var option_datas= {};
		
		var found = false;
		
		var color = "";

		if(knife.finish==Mustache.finishingTypes.BLACK) {
			color = "black";
		}
		else {
			color = "white";
		}
		
		$("#handle a."+knife.weight + "").each(function(index)
		{
			if($(this).attr('data-link') == knife.handle){
				option_datas.id = parseInt($(this).attr('data-id'), 10);
				
				option_datas.price = parseFloat(parseFloat($(this).attr('data-price-' + currency)).toFixed(2));
				dataProduct.options.push(option_datas);
				
				found = true;
				
				return false;
			}
		});
		
		if(!found) {
			//dataProduct.options.push(option_datas);
		}
		
		option_datas= {};
		
		var found = false;
		
		$("#tattoo a."+knife.weight + "[data-version='" + color + "']").each(function(index)
		{
			if($(this).attr('data-link') == knife.tattoo){
				
				option_datas.id = parseInt($(this).attr('data-id'), 10);
				option_datas.price = parseFloat(parseFloat($(this).attr('data-price-' + currency)).toFixed(2));
				
				dataProduct.options.push(option_datas);
				
				found = true;
				
				return false;
				
			}
		});
		
		
		if(!found) {
			//dataProduct.options.push(option_datas);
		}
		
		if(knife.text.replace(" ", "") !== "" && textOk){
			option_datas= {};
			
			var found = false;
			
			
			$("#text a."+knife.weight).each(function(index)
			{
				if($(this).attr('data-link') == knife.textStyle){
					option_datas.id = parseInt($(this).attr('data-id'), 10);
					option_datas.price = parseFloat(parseFloat($(this).attr('data-price-' + currency)).toFixed(2));
					dataProduct.options.push(option_datas);
					
					found = true;
					
					return false;
				}
			});
			
			if(!found) {
				//dataProduct.options.push(option_datas);
			}
			
		}
	
		list.push(dataProduct);
	}
	
	return list;
};

Mustache.getBaseInfos = function(knife)
{
	var infos = {'id':0, 'price':0};
	var punched_st = (Mustache.isThisKnifePunched(knife))? "1" : "0";
	var currency = $("body").attr("data-devise");
	
	// get base price
	$("#size ul li a").each(function(index)
	{
		if($(this).attr('data-link') == knife.weight){
			infos.price = parseFloat(parseFloat($(this).attr('data-price-'+knife.finish+'_'+punched_st+'-'+currency)).toFixed(2));
			infos.id = parseInt($(this).attr('data-id-'+knife.finish+'_'+punched_st), 10);
			return false;
		}
	});
	return infos;
};

Mustache.getKnifeFromUrl = function(url)
{
	
	if(Mustache.univers!="") {
		
		if(Mustache.univers!="") {
			url = url.replace(new RegExp("^"+ Mustache.univers +"/+"), '');
		}
	
		//url = url.replace(Mustache.univers + "/", "");
	}

	var params = url.split(Mustache.sep);
	if(params.length > 0){
		var knife = {};
		
		knife.weight = params[0];
		

		if(params.length > 1) knife.finish = params[1];
		if(params.length > 2) knife.handle = params[2];
		if(params.length > 3) knife.textStyle = params[3];
		if(params.length > 4) knife.text = decodeURI(params[4]);
		if(params.length > 5) knife.tattoo = params[5];
		
		if( knife.text == "none") {
			 knife.text = "";
		}
		
		knife.url = Mustache.getNewUrl(knife);
		knife.cartimg = Mustache.getKnifeCartImage(knife);
		return knife;
	}else
		return null;
};

Mustache.addToCart = function(){
	Mustache.updatePrice();
	
	var tmpCart = Mustache.clone(true);
	
	if(Mustache.univers!="") {
		
		tmpCart.url = tmpCart.url.replace(new RegExp("^"+ Mustache.univers +"/+"), '');
		
		Mustache.cart.push(tmpCart);
		Mustache.updateCartCookie();
		
	}
	else {

		Mustache.cart.push(tmpCart);
		Mustache.updateCartCookie();
	}
	
	
};

Mustache.removeFromCart = function(index){
	Mustache.cart.splice(index, 1);
	Mustache.updateCartCookie();
};

Mustache.removeCart = function(){
	Mustache.cart = [];
	Mustache.updateCartCookie();
};

Mustache.isKnifePunched = function(){
	return Mustache.isThisKnifePunched(Mustache.knife);
};

Mustache.isThisKnifePunched = function(k){
	return (k.handle === "" || k.handle == Mustache.handleTypes.NAKED || k.weight == Mustache.knifeModels.MODEL_15G)? false : true;
};

Mustache.updatePrice = function(){
	
	var price = Mustache.getPrice(Mustache.knife);
	
	Mustache.knife.price = price;
	
	//console.log("update price "+price+" / Mustache.knife.weight = "+Mustache.knife.weight+" // "+Mustache.knife.finish+" -- "+punched_st);
	
	if(Mustache.knife.textStyle!="none" && Mustache.knife.text!="") {
		$(".selector_prefill").hide();
	}
	
};

Mustache.checkModelAvailability = function(){
	var available = true;

	if(!Mustache.isModelAvailable()) available = false;
	if(!Mustache.isHandleAvailable()) available = false;
	if(!Mustache.isTattooAvailable()) available = false;
	if(!Mustache.isTextAvailable()) available = false;

	return available;
};

Mustache.isModelAvailable = function(){
	var punched_st = (Mustache.isKnifePunched())? "1" : "0";
	var available = true;

	$("#size ul li a").removeClass('nostock');
	$("#finish a").removeClass('nostock');

	$("#size ul li a").each(function(index)
	{
		if($(this).attr('data-link') == Mustache.knife.weight){
			if($(this).attr('data-availability-'+Mustache.knife.finish+'_'+punched_st) == '0'){
				available = false;
				$(this).addClass('nostock');
				$("#finish a").each(function(index)
				{
					if($(this).attr('data-link') == Mustache.knife.finish){
						$(this).addClass('nostock');
						return false;
					}
				});
			}
			return false;
		}
	});
	return available;
};

Mustache.isTattooAvailable = function(){
	var available = true;
	$("#tattoo a."+Mustache.knife.weight).each(function(index)
	{
		if($(this).attr('data-link') == Mustache.knife.tattoo){
			if($(this).hasClass('nostock')) available = false;
			return false;
		}
	});
	return available;
};
Mustache.isHandleAvailable = function(){
	var available = true;
	$("#handle a."+Mustache.knife.weight).each(function(index)
	{
		
	
		if($(this).attr('data-link') == Mustache.knife.handle){
			if($(this).hasClass('nostock')) available = false;
			return false;
		}
	});
	return available;
};
Mustache.isTextAvailable = function(){
	var available = true;
	$("#text a."+Mustache.knife.weight).each(function(index)
	{
		if($(this).attr('data-link') == Mustache.knife.textStyle){
			if($(this).hasClass('nostock')) available = false;
			return false;
		}
	});
	return available;
};

Mustache.saveCurrentKnife = function(){
	
	var knife = Mustache.knife;
	Mustache.prev = {
		price : knife.price,
		finish: knife.finish,
		weight : knife.weight,
		handle: knife.handle,
		textStyle: knife.textStyle,
		text: knife.text,
		tattoo: knife.tattoo,
		url: Mustache.getNewUrl(knife)
	};
};

Mustache.getKnifeCartImage = function(knife){
	var img = knife.weight+knife.finish;
	img += (Mustache.isThisKnifePunched(knife))? '1' : '0';
	img += "_";
	img += (knife.handle && knife.handle !== "")? knife.handle : Mustache.handleTypes.NAKED;
	img += "_";
	img += (knife.tattoo && knife.tattoo !== "")? knife.tattoo : Mustache.tattooNone;
	return img;
};

Mustache.clone = function(cleaning){
	var knife = Mustache.knife;
	var textOk = true;
	var handleOk = true;
	if(typeof cleaning !== "undefined" && cleaning === true) {
		textOk = Mustache.getTattooDataById(knife.tattoo).textOk;
		handleOk = (knife.weight == Mustache.knifeModels.MODEL_15G)? false : true;
	}

	var cloned =
	{
		price : knife.price,
		finish: knife.finish,
		weight : knife.weight,
		handle: (handleOk)? knife.handle : Mustache.handleTypes.NAKED,
		textStyle: (textOk)? knife.textStyle : Mustache.styleNone,
		text: (textOk)? knife.text : "",
		tattoo: knife.tattoo
	};

	cloned.cartimg = Mustache.getKnifeCartImage(cloned);
	cloned.url = Mustache.getNewUrl(cloned);

	return cloned;
};

Mustache.init = function(){

	if($("body").data("univers")!="restaurant") {
		Mustache.univers = $("body").data("univers");
	}
	
	Mustache.populateCartFromCookie();
	if(Mustache.cart.length > 0) Mustache.knife = Mustache.cart[Mustache.cart.length-1];
	Mustache.saveCurrentKnife();
	Mustache.updatePrice();
};

Mustache.getPrice = function(knife) {
	
	var punched_st = (Mustache.isThisKnifePunched(knife))? "1" : "0";
	var handleOk = (knife.weight == Mustache.knifeModels.MODEL_15G)? false : true;
	var currency = $("body").attr("data-devise");
	
	// get base price
	var price = 0;
	$("#size ul li a").each(function(index)
	{
		if($(this).attr('data-link') == knife.weight){
			
			price = parseFloat($(this).attr('data-price-'+knife.finish+'_'+punched_st+'-'+currency));
			
			return false;
		}
	});
	
	price = parseFloat(price.toFixed(2));
	
	if(handleOk){
		$("#handle a."+knife.weight).each(function(index)
		{
			if($(this).attr('data-link') == knife.handle){
				
				var addMe = parseFloat($(this).attr('data-price-'+currency));
				
				if(!isNaN(addMe)) {
					price += addMe;
				}
				
				return false;
			}
		});
		
		price = parseFloat(price.toFixed(2));
	}

	$("#tattoo a."+knife.weight).each(function(index)
	{
		if($(this).attr('data-link') == knife.tattoo){
			
			var addMe = parseFloat($(this).attr('data-price-' + currency));
				
			if(!isNaN(addMe)) {
				price += addMe;
			}
				
			return false;
		}
	});
	
	price = parseFloat(price.toFixed(2));

	var textOk = Mustache.getTattooDataById(knife.tattoo).textOk;
	
	if(knife.textStyle !== Mustache.styleNone && knife.text !== "" && textOk){
		$("#text a."+knife.weight).each(function(index)
		{
			if($(this).attr('data-link') == knife.textStyle){
				
				var addMe = parseFloat($(this).attr('data-price-'+currency));
				
				if(!isNaN(addMe)) {
					price += addMe;
				}

				return false;
			}
		});
		price = parseFloat(price.toFixed(2));
	}
	
	return price;
	
};

Mustache.getProductDescription = function(knife, baseText, txtBaseHandle, txtBaseTattoo, txtBaseText, priceBaseText){
	
	var tattooName = knife.tattoo;
	var handleName = knife.handle;
	var finishName = knife.finish;
	var textOk = Mustache.getTattooDataById(knife.tattoo).textOk;
	if(knife.handle !== Mustache.handleTypes.NAKED){
		baseText += txtBaseHandle;
	}
	if(knife.tattoo !== Mustache.tattooNone){
		baseText += txtBaseTattoo;
	}
	if(textOk && knife.text !== "" && knife.textStyle != Mustache.styleNone){
		baseText += txtBaseText;
	}

	baseText += priceBaseText;

	$("#handle a."+Mustache.knife.weight).each(function(index)
	{
		if($(this).attr('data-link') == knife.handle){
			handleName = $(this).html();
			return false;
		}
	});
	$("#tattoo a."+Mustache.knife.weight).each(function(index)
	{
		if($(this).attr('data-link') == knife.tattoo){
			tattooName = $(this).html();
			return false;
		}
	});
	$("#finish a").each(function(index)
	{
		if($(this).attr('data-link') == knife.finish){
			finishName = $('span', this).html();
			return false;
		}
	});

	var currencySymbol = $("#devise-container li[data-id='"+ $("body").attr("data-devise") +"']").attr("data-symbol");
	var price = Mustache.getPrice(knife);
	
	var text = baseText.replace('{price}', price).replace('{text}', knife.text).replace('{finish}', finishName).replace('{tattoo}', tattooName).replace('{handle}', handleName).replace('{weight}', knife.weight);
	
	if(currencySymbol=="$" || currencySymbol=="£") {
		text = text.replace("{currencyLeft}", currencySymbol);
		text = text.replace("{currencyRight}", "");
	}
	else {
		text = text.replace("{currencyRight}", currencySymbol);
		text = text.replace("{currencyLeft}", "");
	}
	
	return text;
};var MainControl = function() {

	var direct = $('body').attr('data-direct');
	var baseLangUrl = $('body').attr('data-url');
	var transitionComplete = true, isFullscreen = false, goToId = "", currentId = "";
	var about = new ViewAbout(), popins = new ViewPopins(), nav = new ViewNav(), ui = new ViewUi();
	var renderOn = true;

	this.start = function(){
		var checkoutSender = new CheckoutSender();

		
		if(Globals.cssVersion)
		{
			Mustache.init();
			initCssEngine();
		}
		//else Globals.TRANSITION_TIME += 0.5;

		ui.init();
		History.Adapter.bind(window,'statechange',function(){ onAddressChange(History.getState().data.value); });
		publisher.subscribe(Events.navigate, navigateTo);
		publisher.subscribe(Events.openPopin, openPopin);
		publisher.subscribe(Events.toggleFullscreen, toggleFullScreen);
		publisher.subscribe(Events.knifeChange, onKnifeChange);
		publisher.subscribe(Events.addToCart, onAddToCart);

		$( window ).resize(function() {
			nav.resize();
			ui.resize();
			popins.resize();
			about.resize();

			if(Globals.cssVersion){
				var table_w = $('.background_table').width();
				var bg_w = $('.background_bg').width();
				var table_slide = 100;
				$(".background_bg").css('top', Math.min(0, height*0.3-400));
				$(".background_table").css('top', Math.max(height-403, height*0.3+220));
				$('.background_bg').css('left', (currentId == Globals.PAGE_ABOUT)? Math.max(width-bg_w, width*0.95 -bg_w*1): Math.min(0, width*0.5 -910) );
				$('.background_table').css('left', (currentId == Globals.PAGE_ABOUT)? Math.max(width-table_w, Math.min(0,width*0.5 -table_w*0.5-table_slide)): Math.max(width-table_w, Math.min(0,width*0.5 -table_w*0.5) ));
			}
		});
		
		$( window ).trigger('resize');

		setTimeout( startSite, 1 );
	};


	// =======================
	// PRIVATE
	// =======================
	var startSite = function(){
		$( window ).trigger('resize');
		nav.start();
		popins.start();
		startEngine();
		onAddressChange(direct);
		
		onKnifeChange();

		setTimeout(startInitPopins, 2400);
	};

	var startInitPopins = function(){
		var tutoCookieName = "deejo_tuto";
		var tutoCookie = readCookie(tutoCookieName);
	

		if(Globals.cssVersion) {
			
			//publisher.publish(Events.openPopin, Globals.POPIN_NO_WEBGL);
			
			
				
		}
		else {
			popins.killNoWebgl();
			if(tutoCookie === null){
				publisher.publish(Events.openPopin, Globals.POPIN_TUTO);
				createCookie(tutoCookieName, "1", 100);
			}else
				popins.killTuto();
		}
	};

	var openPopin = function(id, more){
		popins.open(id, more);
	};
	var onAddToCart = function(){
		if(Mustache.checkModelAvailability()){
			publisher.publish(Events.openPopin, Globals.POPIN_ORDER);
		}else{
			publisher.publish(Events.openPopin, Globals.POPIN_NO_STOCK);
		}

	};
	var onKnifeChange = function(changing){
		ui.update(changing);
		nav.updatePrice();
	};
	var navigateTo = function(id, value){
		
		var pageTitle = $('title').html();
		var url = baseLangUrl+id;
		if(typeof value  == "undefined") value = id;
		if(isFullscreen || Globals.oldIE || Globals.isIE9 || Globals.tablet) {
			onAddressChange(id);
		}
		else {
			History.pushState({value:value}, pageTitle, url);
		}
		
	};
	var onAddressChange = function(value){
		
		if(value == "none") return;
		goToId = value;
		if(currentId == value || !transitionComplete) return;

		transitionComplete = false;
		currentId = value;

		popins.close();

		if(currentId == Globals.PAGE_ABOUT){
			about.open();
			nav.select(currentId);
			hideEngineKnife();
			renderOn = false;
		}else{
			
			about.close();
			nav.select(Globals.PAGE_MY);
			
			Mustache.update(currentId);
			
			if(!renderOn)
			{
				showEngineKnife();
			}

			renderOn = true;
		}

		onTransitionComplete();
	};
	var toggleFullScreen = function(){
		if (    (document.fullScreenElement && document.fullScreenElement !== null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			}else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			}
			isFullscreen = true;
		}else{
			if (document.cancelFullScreen)		document.cancelFullScreen();
			else if (document.mozCancelFullScreen)	document.mozCancelFullScreen();
			else if (document.webkitCancelFullScreen)      document.webkitCancelFullScreen();
			isFullscreen = false;
			navigateTo(currentId, 'none');
		}
	};

	var onTransitionComplete = function(){
		transitionComplete = true;
		if(goToId !== currentId) onAddressChange(goToId);
		else{

		}
	};

};
var Menu = function( type )
{

    var _self = this;
	Menu.instance = this;

	Menu.FINISH = "finish";
	Menu.HANDLE = "handle";
	Menu.SHARE = "share";
	Menu.SIZE = "size";
	Menu.TEXT = "text";
	Menu.TATOO = "tattoo";
	Menu.OPEN_CLOSE = "open_close";

    var names = [
	            Menu.FINISH,
	            Menu.HANDLE,
	            Menu.SHARE,
	            Menu.SIZE,
	            Menu.TEXT,
	            Menu.TATOO,
	            Menu.OPEN_CLOSE
                ];

     if(Globals.mobile) names = [Menu.OPEN_CLOSE];

	this.items = [];

	var steps =
	[
		[	Menu.FINISH,    RAD * 90,      RAD * 90,            RAD * 90           ],
		[	Menu.SHARE,     RAD * 90,      RAD * 90,            RAD * 90           ],
		[	Menu.TATOO,     RAD * 90,      RAD * 90,            RAD * 90           ],
		[	Menu.TEXT,      RAD * 90,      RAD * 90,            RAD * 90           ],
		[	Menu.HANDLE,    RAD * 90,      RAD * 90,            RAD * 90           ]
	];

    for( var i = 0; i < names.length; i++ )
    {

	    var mi = new MenuItem( type, document.getElementById( names[ i ] ), names[ i ] );

	    mi.fixed = true;
	    mi.angle = 0;
	    steps.forEach( function( item )
	    {

		    if( names[ i ] == item[ 0 ] )
		    {
			    mi.fixed            = false;
			    mi.angleStart       = item[ 1 ];
			    mi.angleSpan        = item[ 2 ];
			    mi.angleBounds      = item[ 3 ];
		    }
	    });

	    _self.items.push( mi );

	}

	Menu.getItemByName = function( name )
    {

	    for( var i = 0; i < _self.items.length; i++ )
	    {
		    if( _self.items[ i ].name == name )
		    {
			    return _self.items[ i ];
		    }
	    }
	    return null;
    }

};

Menu.prototype =
{

	//TODO explode implode
	show : function( duration, delay, exclusionList )
	{
//		console.log( "Menu.show()")
		duration = duration || 0.25;
		delay = delay || 0;
		exclusionList = exclusionList || [];

		this.items.forEach( function ( item )
		{

			if( exclusionList.indexOf( item.name ) == -1 )
			{
				item.show( duration, delay );
			}
		});
		
		$("body").addClass("knife_open").removeClass("knife_closed");
		
	},

	hide : function( duration, delay, exclusionList )
	{
//		console.log( "Menu.hide()")
		duration = duration || 0.25;
		delay = delay || 0;
		exclusionList = exclusionList || [];

		this.items.forEach( function ( item )
		{

			if( exclusionList.indexOf( item.name ) == -1 )
			{
				item.hide( duration, delay );
			}
		});
		
		$("body").addClass("knife_closed").removeClass("knife_open");
		
	},

    update : function( projector, w, h )
    {

	    this.items.forEach( function( item )
        {
	        item.update( projector, w, h );

        });

	    this.items.forEach( function( item )
        {

	        item.node.style.zIndex = Math.min(999, Math.max(1, Math.round( 100 - ( item.zDepth * 10 ) )));

        });

    }
};/**
 * Created by nico on 19/02/14.
 */


// listen le menu > appelle des actions sur les models 3D et CSS


var MenuInterface = function( type )
{
	this.type = type;
};

//change le modèle de couteau
MenuInterface.setModel = function( id, callback )
{

	console.log( "menu setModel. new 27G id: ", id );

};

//change la couleur
MenuInterface.setFinish = function( id )
{

	console.log( "menu setFinish. new finish id: ", id );

};

//change la poignée
MenuInterface.setHandle = function( id )
{

	console.log( "menu setHandle. new handle id: ", id );

};
MenuInterface.setTattoo = function( id )
{

	console.log( "menu setTattoo. new tattoo id: ", id );

};

MenuInterface.setFont = function( id )
{

	console.log( "menu setFont. new Font: ", id );

};

MenuInterface.setText = function( string )
{

	console.log( "menu setText. new Text: ", string );

};

/**
 * CSS 3D only
 * @param string
 */
MenuInterface.closeModel = function()
{

	console.log( "27G closeModel()" );

};
MenuInterface.flipModel = function()
{

	console.log( "27G flipModel()" );

};

var MenuItem = function( type, node, name, angleStart, angleSpan, angleBounds )
{

	this.type = type;
	this.node = node;
	this.name = name;
	this.fixed = true;

	this.angleStart     = angleStart  || PI / 2;
	this.angleSpan      = angleSpan   || PI / 2;
	this.angleBounds    = angleBounds || PI / 10;

	this.setAlpha( 0 );
	this.angle = 0;
	this.alpha = 0;
	this.zDepth = 0;
	this.hide( 0 );
//console.log( "\n\n\n -> ", name )
	this.anchor = null;
	if( this.type == OBJECT_TYPE.ANCHOR_3D )
	{
		this.projection = new THREE.Vector3();
	}

};
MenuItem.prototype =
{

	assignAnchor : function( anchor )
	{

		this.anchor = anchor;
		if( this.type == OBJECT_TYPE.ANCHOR_3D )
		{
			this.anchor.visible = false;
		}

	},

	show : function( duration )
	{

		new TWEEN.Tween( this )
		.to( { alpha : 1 }, duration * 1000 )
		.onUpdate( this.updateTween )
		.onComplete( this.completeTween )
		.start();

	},

	hide : function( duration )
	{
		new TWEEN.Tween( this )
		.to( { alpha : 0 }, duration * 1000 )
		.onUpdate( this.updateTween )
		.onComplete( this.completeTween )
		.start();

	},

	updateTween : function()
	{
		this.setAlpha( this.alpha );
	},

	completeTween : function()
	{
//		console.log( "MenuItem.hide() CONPLETE ")
		//this.node.style.visibility = "hidden";
	},

	update : function( projector, w, h )
	{
		if( this.anchor == null )
		{
			this.hide(0);
			return;
		}

		if( this.type == OBJECT_TYPE.ANCHOR_3D )
		{

			projector.projectVector( this.projection.setFromMatrixPosition( this.anchor.matrixWorld ), camera );

			this.projection.x = ( this.projection.x * w ) + w;
			this.projection.y = - ( this.projection.y * h ) + h;

			this.node.style.left = Math.min(Math.max(parseInt( this.projection.x, 10 ), -800), width+800)+"px";
			this.node.style.top  = Math.min(Math.max(parseInt( this.projection.y, 10 ), -800), height+800)+"px";
			
			//if(!ok) console.log(this.node.style.top);

			if( this.name == Menu.OPEN_CLOSE
			||	this.name == Menu.SIZE )
			{
				this.node.style[ "opacity" ] = 1;
				return;
			}

//			this.setRotation();

			var vp = camera.position.distanceTo( this.projection.setFromMatrixPosition( this.anchor.matrixWorld ) );
			var vo = camera.position.length();

			var v = norm( vp, 0, vo );
			this.zDepth = 100 + parseInt( v * 10 );

		}
		else
		{

			this.node.style.left = parseInt( this.anchor.mat[ 12 ] ) + "px";
			this.node.style.top  = parseInt( this.anchor.mat[ 13 ] ) + "px";

//			this.setBlur( 1 );
		}

	},

	setRotation : function( angleX, angleY )
	{

		var str = "";
		str +=  " rotateY( " + angleY * DEG  + "deg )";
		$( this.node ).css({      "-webkit- transform"    :    str   ,
		                             "-moz- transform"    :    str   ,
		                              "-ms- transform"    :    str   ,
		                               "-o- transform"    :    str   ,
		                                   "transform"    :    str    } );

		
	},
	setAlpha: function ( value )
	{

//		this.node.style[ "opacity" ] = value;


		if( Globals.textAllowed == false && this.name == Menu.TEXT )
		{
			value = 0;
		}
		if( Mustache.knife.weight == Mustache.knifeModels.MODEL_15G && this.name == Menu.HANDLE )
		{
			value = 0;
		}


		if( Globals.isIE ) // IE fallback
		{
			this.node.style.filter  = 'alpha(opacity='+value*100+')';
		}
		else
		{
			this.node.style.opacity = value;
		}
		if( value == 0 )
		{
			this.node.style.visibility = "hidden";
		}
		else
		{
			this.node.style.visibility = "visible";
		}
	},

	setBlur: function ( value )
	{

		if( value == 1 )
		{
			value = 0;
		}
		else
		{
			value = 3;//Math.min( 1 / value, 5 );
		}

		this.node.style[ "-webkit-filter" ] = "blur("+ value  +"px)";
		this.node.style[    "-moz-filter" ] = "blur("+ value  +"px)";
		this.node.style[     "-ms-filter" ] = "blur("+ value  +"px)";
		this.node.style[      "-o-filter" ] = "blur("+ value  +"px)";
		this.node.style[ 		 "filter" ] = "progid:DXImageTransform.Microsoft.blur(pixelradius="+ value  +", enabled='true')";
		this.node.style[ 		 "filter" ] = "blur("+ value  +"px)";
	}
};

var CustomTextManager = function() {

	/*var fonts = [
		{id:"1", font:"Courgette"},
		{id:"2", font:"Rosario:700italic"},
		{id:"3", font:"Courgette"}
	];*/
	var paths = [
		{modelName:"15", bezier:[
			[82.8, 104.4],
			[119.8, 100.1, 176.6, 102.3, 217.8, 113.2],
			[227.7, 115.8, 246.1, 115.3, 246.1, 115.3]
		]},
		{modelName:"27", bezier:[
			[132.5, 57.0],
			[185.1, 54.0, 257.0, 54.2, 302.5, 72.3],
			[317.9, 78.4, 337.5, 69.3, 337.5, 69.3]
		]},
		{modelName:"37", bezier:[
			[166.3, 58.3],
			[177.6, 57.3, 300.1, 51.8, 375.8, 87.5],
			[390.8, 94.6, 413.7, 82.6, 413.7, 82.6]
		]}
	];
	var container = ".custom_text_field";
	//var ready = true;
	/*var needUpdateFontText = "", upmodelName = "";

	var families = [];
	for (var i = fonts.length - 1; i >= 0; i--) { families.push(fonts[i].font); }*/
	//https://github.com/typekit/webfontloader
	/*WebFontConfig = {
		google: { families: families },
		active: function() {
			ready = true;
			if(needUpdateFontText !== "")
				self.updateCurve(needUpdateFontText, upmodelName);
		}
	};
	console.log("Load fonts");
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();*/
	
	this.hide = function(){
		$(container).css('display', 'none');
	};

	this.show = function(){
		$(container).css('display', 'block');
	};

	this.updateCurve = function(text, modelName){


        if( text =="" || Mustache.knife.textStyle !== "" && Mustache.knife.textStyle == "none" || text =="none" )
        {
            text = "";
        }

        if(!Globals.flipped && $(container).length > 0){
			//var nbInitSpace = Math.round((Mustache.maxTextCaracter-text.length)/2);
			var nbInitSpace = 0;
			var startText = "";

			$(container).empty();
			$(container).html(text);

			if(modelName == "37"){
				$(container).css({'margin-left': '0px', 'margin-top':'-1px'});
			}else if(modelName == "27"){
				$(container).css({'margin-left': '0px', 'margin-top':'-6px'});
			}else{
				$(container).css({'margin-left': '0px', 'margin-top':'-61px'});
			}

			
			$(container).empty();
			$(container).html(startText+text);
	
			var path = getPathById(modelName);
			// https://github.com/dirkweber/csswarp.js
			if(path !== null && text !== ""){
				cssWarp({
					path : path,
					targets : container,
					rotationMode : "rotate",
					align:"center"
					//css         : <string>
				});
			}
		}else if($(container).length >0){
			$(container).empty();
		}

		/*needUpdateFontText = text;
		upmodelName = modelName;*/
	};


	// =======================
	// PRIVATE
	// =======================
	var getPathById = function(id){
		for (var i = 0; i < paths.length; i++) {
			if(paths[i].modelName == id) return paths[i].bezier;
		}
		return null;
	};

};

var CheckoutSender = function() {
	var sending = false;
	var sendingCt = $('.sending');
	var sendingSpan = $('.sending span');
	var url = $('body').attr('data-checkout');

	var init = function(){
		TweenLite.to(sendingCt,0,{autoAlpha:0});
		publisher.subscribe(Events.checkout, onCheckout);
		
	};

	var onCheckout = function(){


		if(Mustache.cart.length > 0 && !sending){
			sending = true;
			sendingSpan.html(sendingCt.attr('data-prepare'));
			TweenLite.killTweensOf(sendingCt);
			TweenLite.to(sendingCt, 0.3,{autoAlpha:1});
			$.ajax({
				type: "POST",
				url: url,
				dataType: 'json',
				data: { jsondatas: JSON.stringify(Mustache.getCartSendInfos()) }
			}).done(function(result) {
				
				Mustache.removeCart();
								
				$('header span').html(Mustache.cart.length);
				TweenLite.killTweensOf($('header .cart_btn'));
				if(Mustache.cart.length > 0){
					TweenLite.to($('header .gradientshadow'), 0.2, {alpha:1});
					$('header').css('display', 'block');
					TweenLite.to($('header .cart_btn'), 0.3, {top:-38, ease:Back.easeOut});
				}else{
					TweenLite.to($('header .gradientshadow'), 0.2, {alpha:0});
					TweenLite.to($('header .cart_btn'), 0.3, {top:-75, ease:Back.easeOut, onComplete:function(){$('header').css('display', 'none');}});
				}
				
				$(".cart_product .suppr").off(Globals.clickEvent);
				$(".cart_product img").off(Globals.clickEvent);
				$(".cart_product .cart_product_description").off(Globals.clickEvent);
				$(".cart_product .cart_product_title").off(Globals.clickEvent);
				
				$('.popin_cart .popin_black_button').css("display", (Mustache.cart.length === 0)? 'none' : 'block');
				$('.popin_cart .emptycart').css("display", (Mustache.cart.length === 0)? 'block' : 'none');
				$('.popin_cart h3').css("display", (Mustache.cart.length === 0)? 'none' : 'block');
				$('.popin_cart .nav_product').css("display", (Mustache.cart.length < 4)? 'none' : 'block');
				
				var devise = $('body').attr('data-devise');
					
				if(result.hasOwnProperty("error")){
					TweenLite.to(sendingCt, 0.4,{autoAlpha:0});
					publisher.publish(Events.openPopin, Globals.POPIN_SEND_ERROR, result.error);
				}else if(result.hasOwnProperty("feedback")){
					window.location.href = result.feedback+"&sl="+$('body').attr('data-lang')+"&currency=" + devise.toUpperCase();
				}else{
					TweenLite.to(sendingCt, 0.4,{autoAlpha:0});
					publisher.publish(Events.openPopin, Globals.POPIN_SEND_ERROR, JSON.stringify(result));
				}
				sending = false;
				
				
				
			}).fail(function() {
				
				TweenLite.to(sendingCt, 0.4,{autoAlpha:0});
				publisher.publish(Events.openPopin, Globals.POPIN_SEND_ERROR, "AJAX FAIL -> "+url);
				sending = false;
			});
		}
		
	
		
	};

	init();
};var isOpen = false;
var currentSection = "";

var ViewUi = function() {
	var self = this;
	var ulTop = 34;
	var uiLiH = 27;
	var subLineWidth = 73;
	var readyScroll = true, rotated = false;
	var lastSub = null;
	var positionSubBtn = [-30, -5, 20, 45, 70];
	var minInputWidth = 0;
	var minInputStartWidth = 0;
	var saveText = "";
	
	this.update = function(changing){
		if(typeof changing == "undefined") changing = "";
		if(changing.search("weight") !== -1 || changing === "")
			selectBtn($('#size'), Mustache.knife.weight);
		if(changing.search("handle") !== -1 || changing === "")
			selectBtn($('#handle'), Mustache.knife.handle);
		if(changing.search("finish") !== -1 || changing === "")
			selectBtn($('#finish'), Mustache.knife.finish);
		if(changing.search("tattoo") !== -1 || changing === "")
			selectBtn($('#tattoo'), Mustache.knife.tattoo);
		if(changing.search("text") !== -1 || changing === ""){
			selectBtn($('#text'), Mustache.knife.textStyle);
		}

		$('#text input').attr('maxlength', Mustache.maxTextCaracter);
		//if(Mustache.knife.text !== "") $("#text input").val(Mustache.knife.text);
	};

	this.resize = function(){
		//$('.flip').css('left', Math.max(50, windowHalfX - 580));
	};
 
	this.init = function(){
		
		TweenLite.set($("#zoom-slider"), {x: -100 });

		self.resize();
		$('.item_shape_nut').fadeOut(0);
		$('.item_shape_roll').fadeOut(0);
		TweenLite.to($("#open_close .open_btn"), 0.2, {autoAlpha:0});

		$('#open_close .close_btn .menu_item_line').css('left', $('#open_close .close_btn a').width()*0.5);
		$('#open_close .open_btn .menu_item_line').css('left', $('#open_close .open_btn a').width()*0.5);
		$('#open_close').css('margin-left', -$('#open_close a').width()*0.5);
		$('#open_close a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			$("#text input").blur();
			trackEvent('my_deejo/open_close');
			MenuInterface.closeModel();
		});

		if(!Globals.cssVersion){
			// HANDLE -- webgl
			/*
			var handleLine = $('#handle .menu_item_line_bottom_gradient');
			handleLine.removeClass('menu_item_line_bottom_gradient');
			handleLine.addClass('menu_item_line_left_gradient');
			$('#handle').prepend('<div class="menu_item_line_left_gradient_side"></div>');
			$('#handle .item_title').css('left', '160px');
			$('#handle ul').css('left', '160px');
			$('#handle ul li:eq('+($('#handle ul li').length-1)+')').removeClass('item_li_puce');
			$('#handle ul li:eq('+($('#handle ul li').length-1)+')').addClass('item_li_bottom_puce');
			//$('#handle').css('margin-top', - $('#handle ul').height()+10);
			$('#handle').css('margin-top', '0');
			//$('#handle').css('margin-left', - 100);
			//*/

			// FINISHING
			var finishingLine = $('#finish .menu_item_line_bottom_gradient');
			finishingLine.removeClass('menu_item_line_bottom_gradient');
			finishingLine.addClass('menu_item_line_finish');
			finishingLine.css('top', parseInt(finishingLine.attr('data-nb'),10)*uiLiH + ulTop);
			$('#finish').addClass('finish_webgl');
		}

		var isOdd = function(x) { return x & 1; };
		var isEven  = function(x) { return !( x & 1 ); };

		$("h1").click(function() {
			
			if($("body").hasClass("v_webgl")) {
				var rounded = parseInt(controls.angle.x/PI);
				
				if(!isOdd(rounded)) {
					rounded = rounded + 1;
				}
				controls.reach( rounded*PI + PI*0.5, 0, 0 );
			}
			
			
		});
		
		$('.menu_item_selector').each(function(index){
			
			var i = parseInt($(this).attr('data-index'),10);
			var btn = $( "ul li a:eq("+i+")", $(this).parent() );
			var widthSelect = 0;
			//if($('.selector_mod_list a', this).length > 0){
			$('.selector_mod_list a', this).each(function(index_sub){
				widthSelect = Math.max(widthSelect, $(this).width()+22);
			});

			if($(this).hasClass('textselector')){
				widthSelect+=40;
				minInputWidth = widthSelect;
				//console.log("-->minInputWidth "+minInputWidth);
			}

			if($(this).find(".selector_prefill").size()>0) {
				widthSelect = $(".selector_prefill").outerWidth();
				minInputStartWidth = widthSelect;
			}
			
			/*}else{
				$('.selector_mod_list input', this).each(function(index_sub){
					widthSelect = Math.max(widthSelect, $(this).width()+18);
				});
				minInputWidth = widthSelect;
			}*/
			
			
			
			$('.selector_mod', this).width(widthSelect);
			$('.selector_mod_list', this).width(widthSelect);
			$('.selector_mod_list a', this).width(widthSelect-20);

			/*if(minInputWidth !== 0){
				$('.selector_mod_list input', this).width(minInputWidth-18);
				$('.selector_mod_list input', this).attr("maxlength", Mustache.maxTextCaracter);
			}*/
			$('.selector_mod .selector_border', this).width(widthSelect);
			$('.selector_mod .selector_border', this).attr('data-w', widthSelect);

			var topPos = i*uiLiH+ulTop-34;
			var offset = (btn && typeof btn.parent().parent().css('left') !== "undefined")? parseInt(btn.parent().parent().css('left').replace('px', ''), 10) : 0;
			if(isNaN(offset)) offset = 0;
			var leftPos = $("span", btn).width() + 32 + offset;
			$(this).css({'top': topPos, 'left':leftPos});
			$(this).css("display", "none");
			$('.selector_line', this).width(0);
			$('.selector_mod', this).stop( true).fadeOut(0);
			
		});

		/** tattoo selector **/
		var tattooLeft = $("#tattoo").width()-52-$('#tattoo .selector_mod').width();
		$("#tattoo .menu_item_selector").css("display", "block");
		$("#tattoo .menu_item_selector").css("left", tattooLeft);
		$("#tattoo .item_title").css("left", tattooLeft - $("#tattoo .item_title").width()-11);
		$('#tattoo .selector_mod').stop( true).fadeIn(0);

		/** text style selector **/
		var textInputLeft = 45+$('#text .selector_mod').width()+11;
		$("#text .menu_item_selector").css("display", "block");
		$("#text .menu_item_selector").css("left", 45);
		$("#text .item_title").css("left", textInputLeft);
		$('#text .selector_mod').stop( true).fadeIn(0);

		$('.menu_item_line_bottom_gradient').each(function(index){
			var posiY = parseInt($(this).attr('data-nb'),10)*uiLiH + ulTop;
			$(this).css('top', posiY);
			$(this).height($(this).parent().height()-posiY);
		});

		//hack pourrave de Nico pour forcer la hauteur du gradient du panneau finish...
		$('#finish .menu_item_line_bottom_gradient').css( "height", "60px" );
		if(!Globals.tablet){
			$('.menu_item ul li a').on('mouseenter', function(event){
				$('.item_shape_roll', this).stop( true).fadeIn(150);
			}).on('mouseleave', function(event){
				$('.item_shape_roll', this).stop( true).fadeOut(250);
			});
		}else{
			$('#handle .menu_item_selector').attr('data-over', '1');
			$('#tattoo .menu_item_selector').attr('data-over', '1');
			$('#text .menu_item_selector').attr('data-over', '1');
		}

		/* FIX DE BOURRIN */
		
		$("#share").click(function() {
			
			publisher.publish(Events.openPopin, Globals.POPIN_PARTAGE);
			
		});
		
		function getCleanImg() {
			
			var cart = Mustache.clone(true);
			
			return cart.cartimg;
		}
		
		$(".popins .popin.popin_partage .popin_partage_icon > div.i_facebook").click(function() {
			
			var knifeStr = getCleanImg();
			
			var val = $("#tattoo .selector_mod_list a.sub_selected").text();
			var message = $("#text input").val();
			
			trackEvent('share/facebook');
			
			var url = $("body").data("baseurl") + Mustache.getCurrentCleanUrl();
            
            var buildUrl = $("body").data("baseurl") + "s.php?l=" + $("body").data("lang") + "&i=" + knifeStr + "&d=" + encodeURIComponent(val) + "&m=" + encodeURIComponent(message) + "&url=" + encodeURIComponent(url);
            

			var imageUrl = $("body").data("baseurl") + "assets/img/cart/s/"+knifeStr+".jpg";
			
			var str = $(this).data("title");
			var val = $("#tattoo .selector_mod_list a.sub_selected").text();
			
			if(val=="Aucun" || val=="None") {
				var processTitle = str.replace(" {type}", "");
			}
			else {
				var processTitle = str.replace(" {type}", " " + val);
			}
			
			if(message=="" || !Mustache.getTattooDataById(Mustache.knife.tattoo).textOk) {
				processTitle = processTitle.replace("{message}", "");
			}
			else {
				processTitle = processTitle.replace("{message}", ' "' + message + '"');
			}

            window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(buildUrl), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

            /*
			FB.ui({
			  method: 'share',
			  message: $(this).data("title"),
	          name: processTitle,
	          href: url,
	          picture: imageUrl,
	          description: $(this).data("text")
			}, function(response){});
			*/
			
		});
		
		$(".popins .popin.popin_partage .popin_partage_icon > div.i_twitter").click(function() {
			
			trackEvent('share/twitter');
			
			var str = $(this).data("text");
			var val = $("#tattoo .selector_mod_list a.sub_selected").text();
			
			if(val=="Aucun" || val=="None" || !Mustache.getTattooDataById(Mustache.knife.tattoo).textOk) {
				var processTitle = str.replace(" {type}", "");
			}
			else {
				var processTitle = str.replace(" {type}", " " + val);
			}
			
			processTitle = processTitle.replace("{message}", "");
			
			var knifeStr = getCleanImg();
			
			var imageUrl = $("body").data("baseurl") + "assets/img/cart/s/"+knifeStr+".jpg";
			
			var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        url    = this.href,
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;
		    var url = $("body").data("baseurl") + Mustache.getCurrentCleanUrl();
		    window.open("http://twitter.com/share?text=" + encodeURIComponent(processTitle) + "&url=" + encodeURIComponent(url), 'twitter', opts);
			
		});
		
		
		
		$(".footer .menu .logo").click(function() {
			
			$("body").addClass("leaveMe");
			
			$("h1").trigger("click");
			$("h1 a").trigger("click");
				
		});
		
		$(".popins .popin.popin_partage .popin_partage_icon > div.i_google").click(function() {
			
			var val = $("#tattoo .selector_mod_list a.sub_selected").text();
			var message = $("#text input").val();
			
			if(!Mustache.getTattooDataById(Mustache.knife.tattoo).textOk) {
				message = "";
			}
			
			trackEvent('share/google');
			
			var knifeStr = getCleanImg();
			
			var url = $("body").data("baseurl") + Mustache.getCurrentCleanUrl();
			
			var buildUrl = $("body").data("baseurl") + "s.php?l=" + $("body").data("lang") + "&i=" + knifeStr + "&d=" + encodeURIComponent(val) + "&m=" + encodeURIComponent(message) + "&url=" + encodeURIComponent(url);
			
			var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        url    = this.href,
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;
		    
		    window.open("https://plus.google.com/share?url=" + encodeURIComponent(buildUrl), 'twitter', opts);
			
		});
		
		$(".popins .popin.popin_partage .popin_partage_icon > div.i_pinterest").click(function() {
			
			var str = $(this).data("text");
			var val = $("#tattoo .selector_mod_list a.sub_selected").text();
			var message = $("#text input").val();
			
			if(val=="Aucun" || val=="None" || !Mustache.getTattooDataById(knife.tattoo).textOk) {
				var processTitle = str.replace(" {type}", "");
			}
			else {
				var processTitle = str.replace(" {type}", " " + val);
			}
			
			if(message=="" || !Mustache.getTattooDataById(Mustache.knife.tattoo).textOk) {
				processTitle = processTitle.replace("{message}", "");
			}
			else {
				processTitle = processTitle.replace("{message}", ' "' + message + '"');
			}
			
			trackEvent('share/pinterest');
			
			var knifeStr = getCleanImg();
			
			var imageUrl = $("body").data("baseurl") + "assets/img/cart/hd/s/"+knifeStr+".jpg";

			var url = encodeURIComponent($("body").data("baseurl") + Mustache.getCurrentCleanUrl());

			var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;
		    
		    var shareURL = "http://pinterest.com/pin/create/button/?url="+ url +"&media="+encodeURIComponent(imageUrl)+"&description="+encodeURIComponent(processTitle);
		     
		    window.open(shareURL, 'twitter', opts);
		    
			
		});
		
		$(".popins .popin.popin_partage .popin_partage_icon > div.i_mail").click(function() {
			
			trackEvent('share/mail');
			
			publisher.publish(Events.openPopin, Globals.POPIN_PARTAGE_MAIL);
			
			event.preventDefault();
			
			
		});
		
		var hideStuff = $("#handle, #size, #tattoo, #finish, #open_close, #share, .button-customize, .button-unlock, .previous-univers, .next-univers");
		
		$(".zoom-slider-up").click(function() {
			
			if(scaleRatio<=0.8) {
				scaleRatio = scaleRatio+0.2;
			}
			else {
				scaleRatio = 1;
			}
			
			$(".zoom-slider-wrapper").slider('value', scaleRatio*100);
				
			if($("body").hasClass("v_webgl")) {
					
				camDist = 100-(40*((scaleRatio*100)/100));
			
			}
			else {
				TweenLite.to($("#container3d, #menu"), 0.8, {
					scale: 1+(scaleFactor*scaleRatio),
					force3D: true
				});
			}
				
			
				
		});
		
		$('body').keyup(function(e){
		   if(e.keyCode == 32 && !$("body").hasClass("isOpen") && (($(".popin.popin_partage").css("display")!="block" && $(".popin.popin_partage_mail").css("display")!="block" && $(".popin.popin_contact").css("display")!="block") && $(".popins").css("visibility")=="hidden")){
		       if(scaleRatio==0) {
		       	
		       		scaleRatio=1;
		       	
		          	$(".zoom-slider-wrapper").slider('value', '100');
		          	
		       }
		       else {
		       	
		       		scaleRatio=0;
		       	
		       		$(".zoom-slider-wrapper").slider('value', '0');
		       		
		       }
		       
		       if($("body").hasClass("v_webgl")) {
					
					camDist = 100-(40*((scaleRatio*100)/100));
				
				}
				else {
					TweenLite.to($("#container3d, #menu"), 0.8, {
						scale: 1+(scaleFactor*scaleRatio),
						force3D: true
					});
				}
			
		       
					
		   }
		});

		$(".selector_prefill").click(function() {
			$("#text input").focus();
		});
		
		$(".zoom-slider-down").click(function() {
			
			if(scaleRatio>=0.2) {
				scaleRatio = scaleRatio-0.2;
			}
			else {
				scaleRatio = 0;
			}
			
			$(".zoom-slider-wrapper").slider('value', scaleRatio*100);
				
			if($("body").hasClass("v_webgl")) {
					
				camDist = 100-(40*((scaleRatio*100)/100));
			
			}
			else {
				TweenLite.to($("#container3d, #menu"), 0.8, {
					scale: 1+(scaleFactor*scaleRatio),
					force3D: true
				});
			}
				
			
				
		});

		$(".zoom-slider-wrapper").slider({
			orientation : 'vertical',
			min: 0,
			max: 100,
			animate: "fast",
			slide: function( event, ui ) {
				
				if($("body").hasClass("v_webgl")) {
					
					camDist = 100-(40*(ui.value/100));
				
				}
				else {
					scaleRatio = ui.value/100;
					
					TweenLite.to($("#container3d, #menu"), 0.8, {
						scale: 1+(scaleFactor*scaleRatio),
						force3D: true
					});
				}
				
	
			}
		});
	
		function dezoomScene() {
			
			if(saveText!=$("#text input").val()) {
				$("#text input").val(saveText);
				$("#text input").trigger("change");
			}
			
			$("body").removeClass("isOpen");
			
			$("#text input").blur();
			
			TweenLite.to($("#zoom-slider").show(), 0.8, {
				x: 0,
				force3D: true
			});
			
			scaleRatio = 0;
			
			$("#flip").show();
			
			if($("#text input").val()=="") {
				$(".selector_prefill").show();
			}
			
			TweenLite.to($(".menu_ok, .suggestion"), 0.8, {
				autoAlpha:0
			});
			
			TweenLite.to($("#menu #text .item_title"), 0.8, {
				marginLeft:-25,
				delay: 0.3
			});
			
			$("#menu #text .menu_item_selector .selector_mod .selector_mod_list, #menu #text .selector_arrows1, #menu #text .selector_arrows2, .previous-univers, .next-univers").hide();
			
			$(".zoom-slider-wrapper").slider('value', '0');
		
			if($("body").hasClass("locked")) {
				TweenLite.to($(".preconfiguration").show(), 0.8, {opacity:1, onComplete: function() {
					
				}});
			}
		
			if($("body").hasClass("v_webgl")) {
				
				Knife.instance.target.position.y = 0;
				Knife.instance.target.position.x = 0;
				camDist = 100;
				
				isOpen = false;
					
				var newStuff = hideStuff;
				
				if($("body").hasClass("customized")) {
					newStuff = hideStuff.not('.previous-univers, .next-univers');
				}
				
				TweenLite.fromTo(newStuff.show(), 0.8, {opacity:0}, {
					opacity:1
				});
		
				$("#dezoom").hide();
						
				TweenLite.to($(".main_order_button").show(), 0.6, {opacity:1, y: 0, ease: Expo.easeOut});
				TweenLite.to($("h1, .footer > nav, .footer, footer").show(), 0.6, {opacity:1, y: 0, ease: Expo.easeOut});
				
				TweenLite.to($("#menu #text .menu_ok"), 0.6, {top: 114, ease: Expo.easeOut});
				TweenLite.to($("#menu #text > input"), 0.6, {top: 122, ease: Expo.easeOut});
				
				TweenLite.to($("#menu #text"), 0.6, {height: 145, ease: Expo.easeOut});
				TweenLite.to($("#menu #text .menu_item_line_top_gradient"), 0.6, {height: 127, ease: Expo.easeOut});
				TweenLite.to($("#menu #text .menu_item_line_left"), 0.6, {top: 126, ease: Expo.easeOut});
				
				TweenLite.to($("#menu #text .menu_item_selector"), 0.6, {top: 90, ease: Expo.easeOut});
				TweenLite.to($("#menu #text .item_title"), 0.6, {top: 119, ease: Expo.easeOut});
				
			}
			else {
				
				TweenLite.killTweensOf($("#container3d, #menu"));
				TweenLite.to($("#container3d, #menu"), 0.8, {
					scale: 1,
					x: 0,
					y: 8,
					force3D: true,
					onComplete: function() {
						isOpen = false;

						TweenLite.fromTo(hideStuff.show(), 0.8, {opacity:0}, {
							opacity:1
						});
				
						$("#dezoom").hide();
					}
				});
			
			}
			
			
				
		}
		
		TweenLite.to($("#zoom-slider").show(), 0.8, {
			x: 0,
			force3D: true
		});
			
		function zoomScene(event) {
			

			if(typeof Knife != "undefined") Knife.instance.replaceKnife();
			
			$("body").addClass("isOpen");
			
			TweenLite.to($("#zoom-slider").show(), 0.8, {
				x: 100,
				force3D: true
			});
			
			scaleRatio = 1;
			
			
			isOpen = true;
		
			
			$("#flip").hide();
			
		
			$(".selector_prefill").hide();
			updateTextField($("#text input"));
			
			
			$("#menu #text .menu_item_selector .selector_mod .selector_mod_list, #menu #text .selector_arrows1, #menu #text .selector_arrows2").show();
			
			$("#dezoom").show();
			
			TweenLite.to($(".menu_ok, .suggestion"), 0.8, {
				autoAlpha:1
			});
			
			TweenLite.to($("#menu #text .item_title"), 0.3, {
				marginLeft:-60
			});
			
			TweenLite.to($(".preconfiguration"), 0.8, {opacity:0, onComplete: function() {
				$(".preconfiguration").hide();
			}});
			
			$(".zoom-slider-wrapper").slider('value', '100');
			
			TweenLite.to(hideStuff, 0.8, {
				opacity:0,
				onComplete: function() {
					hideStuff.hide();
				}
			});
			
			if($("#text input").val()=="" && $("#text .selector_mod_list a").eq(0).hasClass("sub_selected")) forceStyle();
			
			if($("body").hasClass("v_webgl")) {
				
				Knife.instance.target.position.y = 10;
				Knife.instance.target.position.x = -27;
				Knife.instance.target.position.z = 0;
				
				if($("body").hasClass("v_webgl")) {
					var rounded = parseInt(controls.angle.x/PI);
					
					if(!isOdd(rounded)) {
						rounded = rounded + 1;
					}
					controls.reach( rounded*PI + PI*0.5, 0, 0 );
				}
				
				camDist = 60;
				
				isOpen = false;
				
				TweenLite.to($("h1"), 0.6, {opacity:0, y:-20, ease: Expo.easeOut, onComplete: function() {
					$("h1").hide();
				}});
				
				TweenLite.to($("#menu #text"), 0.6, {height: 245, ease: Expo.easeOut});
				TweenLite.to($("#menu #text .menu_item_line_top_gradient"), 0.6, {height: 227, ease: Expo.easeOut});
				TweenLite.to($("#menu #text .menu_item_line_left"), 0.6, {top: 226, ease: Expo.easeOut});
				
				TweenLite.to($("#menu #text .menu_ok"), 0.6, {top: 214, ease: Expo.easeOut});
				TweenLite.to($("#menu #text > input"), 0.6, {top: 222, ease: Expo.easeOut});
				
				TweenLite.to($("#menu #text .menu_item_selector"), 0.6, {top: 190, ease: Expo.easeOut});
				
				TweenLite.to($("#menu #text .item_title"), 0.6, {top: 221, ease: Expo.easeOut});
				
				TweenLite.to($(".main_order_button, .footer > nav, footer"), 0.6, {opacity:0, y:20, ease: Expo.easeOut, onComplete: function() {
					$(".main_order_button, .footer > nav, .footer, footer").hide();
				}});
				
			}
			else {
				
				TweenLite.killTweensOf($("#container3d, #menu"));
			
				TweenLite.to($("#container3d, #menu"), 0.8, {
					scale: 1+(scaleFactor*scaleRatio),
					x: -parseInt((($(window).width()*(1+(scaleFactor*scaleRatio)))-$(window).width())/2)-200,
					y: -parseInt((($(window).height()*(1+(scaleFactor*scaleRatio)))-$(window).height())/2)+100,
					force3D: true,
					
					onComplete: function() {
						isOpen = false;
					}
				});
				
				
			
			}	
			
		}
		
		if(!$("body").hasClass("v_webgl")) {
			
			$(document).mousewheel(function(event) {
				
				
				if($(".popins").css("visibility")!="hidden") return;
				if(Globals.inMenu || $("body").hasClass("isOpen")) return;
		
				if(event.deltaY>0) {
					
					
					if(scaleRatio<=0.8) {
						scaleRatio = scaleRatio+0.2;
					}
					else {
						scaleRatio = 1;
					}
					
					$(".zoom-slider-wrapper").slider('value', scaleRatio*100);
					
					
					TweenLite.to($("#container3d, #menu"), 0.8, {
						scale: 1+(scaleFactor*scaleRatio),
						force3D: true
					});
						
				}
				else {
					
					
					if(scaleRatio>=0.2) {
						scaleRatio = scaleRatio-0.2;
					}
					else {
						scaleRatio = 0;
					}
					
					$(".zoom-slider-wrapper").slider('value', scaleRatio*100);
						
					TweenLite.to($("#container3d, #menu"), 0.8, {
						scale: 1+(scaleFactor*scaleRatio),
						force3D: true
					});
					
				
				}
				
				
			});
		
		}

		$("#text input").focus(function(event) {
			saveText = $("#text input").val();
			zoomScene(event);
		});
		
		$("#dezoom").click(function(e) {
			
			e.stopPropagation();
			dezoomScene();
			
		});
		
		$(".menu_ok").click(function(e) {
			
			saveText = $("#text input").val();
			
			e.stopPropagation();
			dezoomScene();
		});
		
		$(window).resize(function() {
			
			if($("body").hasClass("isOpen")) {
				
				if(!$("body").hasClass("v_webgl")) {
					TweenLite.set($("#container3d, #menu"),{
						scale: 1+(scaleFactor*scaleRatio),
						x: -parseInt((($(window).width()*(1+(scaleFactor*scaleRatio)))-$(window).width())/2)-200,
						y: -parseInt((($(window).height()*(1+(scaleFactor*scaleRatio)))-$(window).height())/2),
						force3D: true
					});
				}
			}
	
		});
		
		/* END FIX DE BOURRIN */
		
		// listeners
		$('#handle .menu_item_selector').on(Globals.clickEvent, function(event){
			var y = (Globals.clickEvent == "touchstart")? event.originalEvent.touches[0].pageY : event.clientY;
			clickOnMenu(y, 'handle');
		});

		$('#tattoo .menu_item_selector').on(Globals.clickEvent, function(event){
			var y = (Globals.clickEvent == "touchstart")? event.originalEvent.touches[0].pageY : event.clientY;
			clickOnMenu(y, 'tattoo');
		});

		$('#text .menu_item_selector').on(Globals.clickEvent, function(event){
			
			if(!$("body").hasClass("isOpen")) return;
			
			var y = (Globals.clickEvent == "touchstart")? event.originalEvent.touches[0].pageY : event.clientY;
			clickOnMenu(y, 'text');
		});

		$('#size a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			$('#text input').blur();
			Mustache.change("weight", $(this).attr('data-link'));
		});

		$('#finish a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			$('#text input').blur();
			Mustache.change("finish", $(this).attr('data-link'));
		});

		$('#handle a').on(Globals.clickEvent, function(event){
			event.preventDefault();
		});

		$('#handle ul a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			$('#text input').blur();
			if($(this).attr('data-option') == "1"){
				Mustache.change("handle", $(this).attr('data-sub'));
			}else{
				Mustache.change("handle", $(this).attr('data-link'));
			}
		});

		
		$('#tattoo a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			/*$('#text input').blur();
			Mustache.change("tattoo", $(this).attr('data-link'));*/
		});

		$('#text a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			//Mustache.change("textStyle", $(this).attr('data-link'));
		});

		// field --- TEXT
		$("#text input").bind("change paste keyup", function( e ) {
			
			$(".suggestion li").removeClass("selected");
			var value = $(this).val().substr(0, Mustache.maxTextCaracter);
			Mustache.change("text", value.substr(0, Mustache.maxTextCaracter));

		}).on("blur", function() {
			//var value = $(this).val();
			//if(value.replace(" ", "") === "") $(this).val($(this).attr('data-default'));
		}).on("focus", function() {
			$(this)[0].selectionStart = $(this)[0].selectionEnd = $(this).val().length;
		}).on("mousedown", function() {
			/*var value = $(this).val();
			if(value == $(this).attr('data-default') && !$(this).is('[readonly]') ) $(this).val(Mustache.knife.text);
			$(this)[0].selectionStart = $(this)[0].selectionEnd = $(this).val().length;
			Mustache.change("textStyle", $(this).attr('data-link'));*/
		});

		// mouse wheel
		$('.selector_mod').on('mousewheel', function(event, delta, deltaX, deltaY) {
			if($(this).css('display') != "none" && readyScroll){
				lastSub = $(this).parent();
				var id = $(this).parent().parent().attr('id');
				if(deltaY<0){
					askPrev(lastSub, id);
				}else if(deltaY>0){
					askNext(lastSub, id);
				}
			}
		});
		if(!Globals.tablet){
			$('.menu_item_selector').on('mouseenter', function(event){
				Globals.inMenu = true;
				lastSub = $(this);
				$(this).attr('data-over', '1');
				$('.selector_arrows1', this).stop(true).animate({opacity:0, top:0}, 200);
				$('.selector_arrows2', this).stop(true).animate({opacity:0, top:73}, 200);
				selectBtn($(this).parent(), $('.sub_selected', this).attr('data-link'), true);
			}).on('mouseleave', function(event){
				Globals.inMenu = false;
				lastSub = null;
				$(this).attr('data-over', '0');
				$('.selector_arrows1', this).stop(true).animate({opacity:1, top:8}, 400);
				$('.selector_arrows2', this).stop(true).animate({opacity:1, top:65}, 400);
				selectBtn($(this).parent(), $('.sub_selected', this).attr('data-link'));
			});
		
			// clavier
			$(window).keydown(function(event) {
				//console.log("KEYDOWN -- "+lastSub+" // "+event.keyCode);
				if(lastSub !== null &&
					lastSub.css('display') != "none" &&
					readyScroll &&
					$('.popins').css('visibility') == 'hidden'){
					var id = lastSub.parent().attr('id');
					if(event.keyCode == 40){
						event.preventDefault();
						// down
						askPrev(lastSub, id);
					}else if(event.keyCode == 38){
						event.preventDefault();
						// up
						askNext(lastSub, id);
					}
				}
			});
		}else{
			$('.selector_arrows1').css('display', 'none');
			$('.selector_arrows2').css('display', 'none');
		}

		// FLIP
		$('.flip').on(Globals.clickEvent, function(event) {
			event.preventDefault();
			trackEvent('my_deejo/rotation');
			MenuInterface.flipModel();
		});
		if(!Globals.tablet){
			$('.flip').on("mouseenter", function(event) {
				event.preventDefault();
				if(!rotated){
					rotated = true;
					var elem = $(this);
					TweenLite.to(elem, 0.8, {rotation:360, ease:Circ.easeInOut, onComplete:function(){
							TweenLite.to(elem, 0, {rotation:0});
							rotated = false;
						}
					});
				}
			});
		}
	};

	// =======================
	// PRIVATE
	// ======================= 

	var forceStyle = function() {
		askNext($("#text .menu_item_selector"), "text");
	};
	
	var clickOnMenu = function(posiY, id){
		
		var lastSub = $('#'+id+' .menu_item_selector');
		if(lastSub.length > 1){
			lastSub.each(function(i){
				if($(this).css('display') == 'block'){
					lastSub = $(this);
					return false;
				}
			});
		}
		if(lastSub !== null){
			
			//posiY = posiY - $(window).height()/2;
			
			
			//console.log("OOOOOOO--->>>>> "+(event.clientY - $(this).position().top - $('#text').position().top));
			
			if(id=="text") {
				
				if($("body").hasClass("v_webgl")) {
					
					var yIn = posiY - lastSub.position().top - $('#'+id).position().top - parseInt($('#'+id).css('margin-top').replace('px', ''), 10);
					
				}
				else {
					
					var percentageAvant = (posiY/$(window).height())/(1+(scaleFactor*scaleRatio))+(1-1/(1+(scaleFactor*scaleRatio)));
					var toPixel = percentageAvant*$(window).height();
				
					var yIn = toPixel - lastSub.position().top/(1+(scaleFactor*scaleRatio)) - $('#'+id).position().top/(1+(scaleFactor*scaleRatio)) - parseInt($('#'+id).css('margin-top').replace('px', ''), 10);

				}

				if(yIn > 55){
					askNext(lastSub, id);
				}else if(yIn < 25){
					askPrev(lastSub, id);
				}
				
			}
			else {
				
				var yIn = posiY - lastSub.position().top - $('#'+id).position().top - parseInt($('#'+id).css('margin-top').replace('px', ''), 10);
				
				if(yIn > 55){
					askNext(lastSub, id);
				}else if(yIn < 25){
					askPrev(lastSub, id);
				}
				
			}
			
			
			
		
		}
	};

	var askPrev = function(sub, changeId){
		
		readyScroll = false;
		if(changeId == "text") changeId = "textStyle";

		var selector = "."+Mustache.knife.weight;
		//var tag = ($('.selector_mod_list a', sub).length > 0)? 'a' : 'input';
		var tag = "a:not('.hideType')";
		var index = $('.selector_mod_list '+tag+selector, sub).index($('.sub_selected', sub));

		if(index < 0) index = 0;
		var prevBtn = (index > 0)? $('.selector_mod_list '+tag+selector+':eq('+(index-1)+')', sub) : $('.selector_mod_list a'+selector+':eq('+($('.selector_mod_list a'+selector, sub).length - 1)+')', sub);
		
		Mustache.change(changeId, prevBtn.attr('data-link'));

		setTimeout(function(){readyScroll = true;},300);
	};

	var askNext = function(sub, changeId){
		
		readyScroll = false;
		if(changeId == "text") changeId = "textStyle";

		var selector = "."+Mustache.knife.weight;
		//var tag = ($('.selector_mod_list a', sub).length > 0)? 'a' : 'input';
		var tag = "a:not('.hideType')";
		var btns = $('.selector_mod_list '+tag+selector, sub);
		var index = btns.index($('.sub_selected', sub));

		if(index < 0) index = 0;
		
		//console.log($('.sub_selected', sub).length+" / next -- INDEX :::: "+index+" --- "+btns.length);
		var nextBtn = (index < btns.length - 1)? $('.selector_mod_list '+tag+selector+':eq('+(index+1)+')', sub): $('.selector_mod_list '+tag+selector+':eq(0)', sub);
		
		Mustache.change(changeId, nextBtn.attr('data-link'));

		setTimeout(function(){readyScroll = true;},300);
	};

	var checkTattoos = function() {

		var color = "";

		if(Mustache.knife.finish==Mustache.finishingTypes.BLACK) {
			color = "black";
		}
		else {
			color = "white";
		}

		$(".custom_text_field").removeClass("white black").addClass(color);

		$("#tattoo .selector_mod_list a").addClass("hideType");
		$("#tattoo .selector_mod_list a[data-version='" + color + "']").removeClass("hideType");
		$("#tattoo .selector_mod_list a").eq(0).removeClass("hideType");

	};
	var selectBtn = function(container, value, fromRoll){
		
		checkTattoos();

		if(typeof fromRoll == "undefined") fromRoll = false;
		var okSub = false;
		var prevBtn = null, nextBtn = null, alphaNext = 0;
		var selector = "."+Mustache.knife.weight + ":not('.hideType')";

		if($('ul li a', container).length > 0){
			$('ul li a', container).each(function(index){
				alphaNext = 0;
				var btn = $(this);
				var nut =  $('.item_shape_nut', this);
				if($(this).attr('data-link') == value)
					nut.stop( true).fadeIn(400);
				else {
					if($(this).attr('data-option') == "1"){
						var sub = getSubMenuById(container, $(this).attr('data-link'));
						okSub = false;
						if(sub !== null){
							$('.selector_mod_list a:not('+selector+')', sub).css("display", "none");
							$('.selector_mod_list a', sub).removeClass('sub_selected');
							$('.selector_mod_list a'+selector, sub).each(function(index_sub){
								if($(this).attr('data-link') == value){
									alphaNext = (sub.attr('data-over') == "1")? 0.4 : 0;

									nextBtn = (index_sub < $('.selector_mod_list a'+selector, sub).length - 1)? $('.selector_mod_list a'+selector+':eq('+(index_sub+1)+')', sub): $('.selector_mod_list a'+selector+':eq(0)', sub);
									prevBtn = (index_sub > 0)? $('.selector_mod_list a'+selector+':eq('+(index_sub-1)+')', sub): $('.selector_mod_list a'+selector+':eq('+($('.selector_mod_list a'+selector, sub).length - 1)+')', sub);
	
									okSub = true;
									nut.stop( true).fadeIn(400);
									positionSubSelectedBtn($(this));
									openSub(sub);
									//lastSub = sub;
								}else
									$(this).stop( true).animate({ opacity:0 }, 200, function() {
										$(this).css('display', 'none');
									});
							});
							if(!okSub) {
								nut.stop( true).fadeOut(400);
								closeSub(sub);
							}else{
								$(this).attr('data-sub', value);
								positionSubPrevNextBtn(prevBtn, nextBtn, alphaNext, fromRoll);
							}
						}else
							nut.stop( true).fadeOut(400);
					}else
						nut.stop( true).fadeOut(400);
				}
			});
		}else{
			if(value === "") value = "none";
			//var tagToSub = ($('.selector_mod_list a'+selector, container).length > 0)? 'a' : 'input';
			var tagToSub = 'a';
			$('.selector_mod_list '+tagToSub+':not('+selector+')', container).css("display", "none");
			$('.selector_mod_list '+tagToSub, container).removeClass('sub_selected');
			$('.selector_mod_list '+tagToSub+selector, container).each(function(index_sub){
				if($(this).attr('data-link') == value){
					alphaNext = ($(this).parent().parent().parent().attr('data-over') == "1")? 0.4 : 0;

					nextBtn = (index_sub < $('.selector_mod_list '+tagToSub+selector, container).length - 1)? $('.selector_mod_list '+tagToSub+selector+':eq('+(index_sub+1)+')', container): $('.selector_mod_list '+tagToSub+selector+':eq(0)', container);
					prevBtn = (index_sub > 0)? $('.selector_mod_list '+tagToSub+selector+':eq('+(index_sub-1)+')', container): $('.selector_mod_list '+tagToSub+selector+':eq('+($('.selector_mod_list '+tagToSub+selector, container).length - 1)+')', container);
					
					okSub = true;
					if(container.attr('id') == 'text'){
						if($(this).attr('data-link') !== "none"){
							positionSubSelectedBtn($(this), 0);

							/*console.log("VAL : "+$("#text input").val());
							console.log("> >>>  : "+Mustache.knife.text.substr(0, Mustache.maxTextCaracter));*/

							var textDeco = decodeURIComponent(Mustache.knife.text);
							
							if($("#text input").val() !== textDeco.substr(0, Mustache.maxTextCaracter)) {
								$("#text input").val(textDeco.substr(0, Mustache.maxTextCaracter));
								$("#text input").val($("#text input").val());
							}
								
							TweenLite.to($("#text input"), 0.2, {autoAlpha:1});
							//$("#text input").focus();
							updateTextField($("#text input"));
						}else{
							
							$("#text input").val("");
							updateTextField($("#text input"));
							
							positionSubSelectedBtn($(this));
						
							
							
						}
					}else
						positionSubSelectedBtn($(this));

					/*
					if(tagToSub == "input" && !$(this).is('[readonly]')){
						if($(this).val() == $(this).attr('data-default')) $(this).val(Mustache.knife.text);
						$(this).focus();
						updateTextField($(this));
					}else if(tagToSub == "input"){
						$('#text input').blur();
						$("#text .item_title").html($("#text .item_title").attr('data-default'));
					}*/
				}else
					$(this).stop( true).animate({ opacity:0 }, 200, function() {
						$(this).css('display', 'none');
					});
			});
			if(okSub) {
				/*if(tagToSub == "input"){
					prevBtn.val(prevBtn.attr('data-default'));
					nextBtn.val(nextBtn.attr('data-default'));
				}*/
				positionSubPrevNextBtn(prevBtn, nextBtn, alphaNext, fromRoll);
			}
		}
	};
	var updateTextField = function(field){
		//console.log(">> "+field[0].selectionStart);
		//field[0].selectionStart = field[0].selectionEnd = field.val().length;
		var nbCarac = field.val().length;
		field.attr('size', nbCarac);
		
		var upperWidth = field.val().replace(/[^A-Z]/g, "").length;
		
		var w = Math.max(minInputWidth, (nbCarac-upperWidth)*9+upperWidth*13);
		
		if($(".selector_prefill").css("display")=="block") {
			w = $(".selector_prefill").outerWidth();
		}
			
		if(w<180) w = 180;
		
		$(".suggestion").css({
			"margin-left": w
		});
		
		$('#text input').width(w);
		//$('#text input').css('left', 0);
		$('#text .selector_mod .selector_border').width(w);
		$('#text .selector_mod').width(w);
		$('#text .selector_mod_list').width(w);
		$('#text .selector_mod_list a').width(w);
		$("#text .item_title").css('left', 45+w+10);
		
		$("#text .menu_ok").css('left', 51+w+10);
		
		var caracterLeft = Mustache.maxTextCaracter-nbCarac;
		$("#text .item_title").html(caracterLeft);

		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_none');
		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_1');
		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_2');
		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_3');
		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_4');
		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_5');
		$('#text input, .suggestion ul, .selector_prefill').removeClass('font_6');
		
		$('#text input, .suggestion ul, .selector_prefill').addClass('font_'+Mustache.knife.textStyle);
		
		$(window).trigger("resize");
		
	};
	var positionSubSelectedBtn = function(target, targetAlpha){
		if(typeof targetAlpha == "undefined") targetAlpha = 0.75;
		if(target.css('display') == "none") target.css('top', positionSubBtn[2]);
		target.addClass('sub_selected');
		target.css('display', 'inline-block');
		target.stop( true).animate({ top: positionSubBtn[2], opacity:targetAlpha }, 200);
	};

	var positionSubPrevNextBtn = function(prevBtn, nextBtn, opacity, fromRoll){
		if(nextBtn.css('display') == 'none') nextBtn.css('top', positionSubBtn[4]);
		else if(fromRoll) nextBtn.css('top', positionSubBtn[3]+8);
		if(prevBtn.css('display') == 'none') prevBtn.css('top', positionSubBtn[0]);
		else if(fromRoll) prevBtn.css('top', positionSubBtn[1]-8);
		nextBtn.css('display', 'inline-block');
		prevBtn.css('display', 'inline-block');
		nextBtn.stop( true).animate({ opacity:opacity, top: positionSubBtn[3] }, 200);
		prevBtn.stop( true).animate({ opacity:opacity, top: positionSubBtn[1] }, 200);
	};

	var openSub = function(sub){
		var line = $('.selector_line', sub);
		var border = $('.selector_border', sub);
		if(line.width()<subLineWidth){
			lastSub = sub;
			line.stop( true).animate({ width: subLineWidth }, 100, function() {
				border.stop( true).animate({ width: parseInt(border.attr('data-w'),10), opacity:1 }, 150);
				$('.selector_mod', sub).stop( true).fadeIn(200);
			});
		}
		sub.css("display", "block");
	};

	var closeSub = function(sub){
		var line = $('.selector_line', sub);
		var border = $('.selector_border', sub);
		if(line.width()>0){
			$('.selector_mod', sub).stop( true).fadeOut(150);
			border.stop( true).animate({ width: 0, opacity:0 }, 100 );
			line.stop( true).animate({ width: 0 }, 150, function() {
				sub.css("display", "none");
			});
		}else
			sub.css("display", "none");
	};

	var getSubMenuById = function(container, id){
		var sub = null;
		$('.menu_item_selector', container).each(function(index){
			if($(this).attr('data-id') == id){
				sub = $(this);
				return false;
			}
		});
		return sub;
	};
};var ViewAbout = function() {
	var self = this;
	var container = $('.about');
	var sections = $('.about section');
	var currentSectionId = "";
	var btnOn = null;
	var opened = false, ready = false;

	this.resize = function(){
		sections.each(function(index) {
			$(this).css('left', (currentSectionId !== "" && $(this).hasClass(currentSectionId))? 0 : width+1);
		});
		$(".about_menu").css('margin-left', Math.round(-$(".about_menu").width()*0.5));

		if(Globals.mobile){
			var marg = 20;
			$('.about span').width(width-marg*2);
			$('.about span').css("left", marg);
			$('.about h2').width(width-marg*2);
			$('.about h2').css("left", marg);
			$(".about .about_content section .about_ct").each(function(i){
				var offset = 0;
				if($(this).parent().hasClass('about_concept')) offset = 290;
				else if($(this).parent().hasClass('about_tattoo')) offset = 200;
				var h = $('.ct', this).height() + 130 + offset;
				$(this).width(width);
				$(this).height(h);
				$(this).parent().height(h);
			});
			resizeMobile();
		}
	};
	this.open = function(){
		
		if(Globals.mobile) {
			$(".next-univers, .previous-univers, .preconfiguration").hide();
		}
		
		opened = true;
		currentSectionId = "";
		self.resize();
		TweenLite.to($('.about_menu ul li a div'), 0.2, {scale:0.3, alpha:0});
		var id = "about_concept";
		selectBtn(id);
		TweenLite.to($(".about .about_content ."+id), 0, {left:width+2, alpha:1});
		TweenLite.to($(".about .about_content ."+id), Globals.TRANSITION_TIME, {left:0, ease:Globals.TRANSITION_EASE});
		currentSectionId = id;
		TweenLite.killTweensOf($('.about_menu'));
		TweenLite.to($('.about_menu'), 0.5, {autoAlpha:1, delay:Globals.TRANSITION_TIME-0.2, onComplete:function(){ready = true;}});
		TweenLite.to(container, 0, {autoAlpha:1});
		
		if(Globals.mobile) resizeMobile();
		
		TweenLite.to($('.about .about_close'), 0.6, {autoAlpha:1, delay:Globals.TRANSITION_TIME});
		
		$(".about-menu").addClass("selected");
		
		if(!Globals.mobile) {
			$(".button-customize, .preconfiguration, .button-unlock, #zoom-slider, .previous-univers, .next-univers").css({
				"visibility": "hidden"
			});
		}
		
	};

	this.close = function(){
		
		if(Globals.mobile) {
			$(".next-univers, .previous-univers, .preconfiguration").show();
		}
		
		if(!Globals.mobile) {
			$(".button-customize, .preconfiguration, .button-unlock, #zoom-slider, .previous-univers, .next-univers").css({
				"visibility": "visible"
			});
		}
		
		$(".about-menu").removeClass("selected");
		
		btnOn = null;
		ready = opened = false;
		TweenLite.killTweensOf($('.about_menu'));
		TweenLite.killTweensOf($('.about .about_close'));
		TweenLite.to($('.about_menu'), 0.3, {autoAlpha:0});
		TweenLite.to($('.about .about_close'), 0.6, {autoAlpha:0});
		if(currentSectionId !== "")
			TweenLite.to($(".about .about_content ."+currentSectionId), Globals.TRANSITION_TIME, {left:width+2, ease:Globals.TRANSITION_EASE, onComplete:onClosed});
		else onClosed();
	};

	// =======================
	// PRIVATE
	// =======================
	var resizeMobile = function(){
		if(opened && currentSectionId !== ""){
			console.log(currentSectionId+"---- "+$(".about .about_content ."+currentSectionId).height());
			var h = Math.max($(".about .about_content ."+currentSectionId).height()+90, window.innerHeight);
			$('.site').height(h);
			$('body').height(h);
			$('html').height(h);
			/*TweenLite.to($('.site'), 0.3, {height:h});
			TweenLite.to($('body'), 0.3, {height:h});
			TweenLite.to($('html'), 0.3, {height:h});*/
			$('body').css('overflow', 'auto');
			$('html').css('overflow', 'auto');
			//overflow: hidden;
			TweenLite.to($('.about_menu'), 0.2, {top:h-70});
			publisher.publish(Events.needResize);
		}
	};
	var onClosed = function(){
		TweenLite.to(container, 0, {autoAlpha:0});
		
		
		
	};
	var selectBtn = function(id){
		if(btnOn!== null) TweenLite.to($('div', btnOn), 0.2, {scale:0.2, alpha:0});
		$('.about_menu ul li a').each(function(index) {
			if($(this).attr('data-link') == id){
				btnOn = $(this);
				TweenLite.to($('div', btnOn), 0.3, {scale:1, alpha:1});
				return false;
			}
		});

		trackPage('about/'+id);
	};
	var openId = function(id){
		if(id !== currentSectionId){
			var indexCurrent = sections.length;
			sections.each(function(index) {
				if($(this).hasClass(currentSectionId))
					indexCurrent = index;
				else if($(this).hasClass(id)){
					slideTo(id, (indexCurrent>index)? false : true);
					return false;
				}
			});
		}
	};
	var init = function(){
		TweenLite.to(container, 0, {autoAlpha:0});
		//TweenLite.to($('.about .about_close'), 0, {autoAlpha:0});
		TweenLite.to($('.about_menu ul li a div'), 0.2, {scale:0.3, alpha:0});
		TweenLite.to($('.about_menu'), 0, {autoAlpha:0});
		if(Globals.mobile) $('.about_cols').css('height', 'auto');

		$('.about_menu ul li a').on(Globals.clickEvent, function(e){
			e.preventDefault();
			openId($(this).attr('data-link'));
		});
		if(!Globals.tablet){
			$('.about_menu ul li a').on('mouseenter', function(event){
				if($(this).attr('data-link') !== currentSectionId)
					TweenLite.to($('div', this), 0.3, {ease:Circ.easeOut, scale:1, alpha:0.5});
			}).on('mouseleave', function(event){
				if($(this).attr('data-link') !== currentSectionId)
					TweenLite.to($('div', this), 0.4, {scale:0.3, alpha:0});
			});

			$('.about').on('mousewheel', function(event, delta, deltaX, deltaY) {
				if(opened && ready && btnOn !== null){
					var currentIndex = $('.about_menu ul li a').index(btnOn);
					var index = currentIndex;
					if(deltaY<0){
						if(index>0) index = index-1;
						else index = sections.length-1;
					}else if(deltaY>0){
						if(index<sections.length-1) index = index+1;
						else index = 0;
					}

					if(index !== currentIndex)
						openId($('.about_menu ul li a:eq('+index+')').attr('data-link'));
					
				}
			});
		}

		$('.about .about_close').on(Globals.clickEvent, function(e){
			e.preventDefault();
			publisher.publish(Events.navigate, Mustache.getCurrentUrl());
		});
		
	};
	var slideTo = function(id, fromRight){
		ready = false;
		selectBtn(id);
		if(typeof fromRight == "undefined") fromRight = true;
		var animW = 100;
		if(currentSectionId !== "") {
			TweenLite.killTweensOf($(".about .about_content ."+currentSectionId));
			if(!Globals.mobile)
				TweenLite.to($(".about .about_content ."+currentSectionId), 0.7, {left:(fromRight)? -animW : animW, alpha:0, ease:Quint.easeInOut});
			else
				TweenLite.to($(".about .about_content ."+currentSectionId), 0.7, {alpha:0});
		}
		TweenLite.killTweensOf($(".about .about_content ."+id));
		if(!Globals.mobile){
			TweenLite.to($(".about .about_content ."+id), 0, {left:(fromRight)? animW : -animW, alpha:0 });
			TweenLite.to($(".about .about_content ."+id), 0.8, {left:0, ease:Quint.easeOut, delay:0.4});
		}
		TweenLite.to($(".about .about_content ."+id), 0.7, {alpha:1, delay:0.4, onComplete:function(){ready = true;}});
		currentSectionId = id;
		if(Globals.mobile) self.resize();
	};
	init();
};var lastURL = "";

var ViewNav = function() {
	var self =this;
	var orderRollVal = { w: 0 };
	var priceValue = { unit: 0, dec:0 }, priceTween;
	var engineOn = true;
	var currentId = "";
	var soundOn = true;
	var locked = false;
	
	if($("body").data("univers")!="restaurant") {
		$("body").addClass("locked");
	}
	
	$('.footer ul li a').click(function(){
		
		if($(this).data("link")=="about") {
			lastURL = document.URL;
		}
		
	});
		
	this.resize = function(){
//		console.log("resize "+engineOn+" __ "+$('.main_order_button').width());
		if(engineOn){
			$('.main_order_button').css('left', Math.round(width*0.5-$('.main_order_button').width()*0.5));
			//$('.footer').height((height < 630)? 70 : 96);
			$('.main_order_button').css('top', Math.min(Math.round(height*0.5), height-290));
		}
	};
	this.start = function(){
		
		this.resize();

		var self = this;

		var btnW = $('.main_order_button').width();
		$('.main_order_button').width(0);
		$('.main_order_button').css('visibility', 'visible');
		this.updatePrice();
		var startOrderBtnTween = new TWEEN.Tween({w:0})
			.to( { w: btnW }, 300 )
			.easing( TWEEN.Easing.Circular.InOut )
			.onUpdate( function(){
				self.resize();
				$('.main_order_button').width(this.w);
				self.resize();
			} ).delay(1000).start();
	};
	this.updatePrice = function(){
			
		var price_c = Math.floor(Mustache.knife.price);
		var price_dec = parseInt((Mustache.knife.price - price_c).toFixed(2).replace('0.', ''), 10);

		if(typeof priceTween !== "undefined") priceTween.stop();
		priceTween= new TWEEN.Tween(priceValue)
			.to( { unit: price_c, dec:price_dec }, 400 )
			.easing( TWEEN.Easing.Cubic.InOut )
			.onUpdate( updateTweenPrice );

		priceTween.start();
	};
	this.select = function(id){

		//self.resize();
		var bt = getBtnById(currentId);
		if(bt !== null) unselectBtn(bt);
		if(id == Globals.PAGE_ABOUT){
			currentId = id;
			engineOn = false;
			if(Globals.cssVersion)
				TweenLite.to($('.main_order_button'), Globals.TRANSITION_TIME, {left:-width*0.5-$('.main_order_button').width()*0.5, ease:Globals.TRANSITION_EASE});
		}else if(currentId == Globals.PAGE_ABOUT && engineOn === false){
			currentId = "";
			engineOn = true;
			if(Globals.cssVersion)
				TweenLite.to($('.main_order_button'), Globals.TRANSITION_TIME, {left:Math.round(width*0.5-$('.main_order_button').width()*0.5), ease:Globals.TRANSITION_EASE});
		}

		bt = getBtnById(currentId);
		if(bt !== null) selectBtn(bt);
	};

	// =======================
	// PRIVATE
	// =======================
	var getBtnById = function(id){
		var btn = null;
		$('.footer ul li a').each(function(index){
			if($(this).attr('data-link') == id){
				btn = $(this);
				return false;
			}
		});
		return btn;
	};
	var selectBtn = function(target){
		$('div', target).css("visibility", "visible");
		TweenLite.to($('div', target), 0.35, {rotationX:0, ease:Quint.easeOut, transformOrigin:"center bottom"});
	};
	var unselectBtn = function(target){
		var pic = $('div', target);
		TweenLite.to(pic, 0.5, {rotationX:-90, ease:Quint.easeInOut, transformOrigin:"center bottom", onComplete:function(){
			pic.css("visibility", "hidden");
		}});
	};
	var updateTweenPrice = function(){
		
		var currency = $("#devise-container li[data-id='"+ $("body").attr("data-devise") +"']").attr("data-symbol");
		
		$('.total_price_c').html(Math.round(priceValue.unit));
		var val = Math.round(priceValue.dec);
		if(val < 10) val = "0" + val;
		$('.total_price_dec').html("."+val+currency);
		
	};
	var init = function(){

		var btnW = Math.max(112, Math.round($('.main_order_button .front_bg span').width())+40);
		$('.main_order_button .front_bg').width(btnW);
		$('.main_order_button .front_bg').css('margin-left', -Math.round(btnW*0.5));
		$('.main_order_button').width(btnW+68);
		$('.main_order_button .order_corner2').css('left', btnW+28);
		$('.main_order_button .order_bande2').css('left', btnW+36);

		self.resize();

		$('.main_order_button').css('visibility', 'hidden');
		$('h1 a').on(Globals.clickEvent, function(event){
			event.preventDefault();
			
			$(".preconfiguration").addClass("onlogo");
			
			if($("body").data("univers")=="restaurant") {
				//publisher.publish(Events.navigate, "");
				publisher.publish(Events.openPopin, Globals.POPIN_LEAVE);
			}
			else {
				$(".button-unlock").trigger("click");
			}
			
		});
		TweenLite.to($('.footer ul li a div'), 0, {rotationX:-90, transformOrigin:"center bottom"});
		$('.footer ul li a div').css("visibility", "hidden");
		$('.footer ul li a').on(Globals.clickEvent, function(event){
			
			var id = $(this).attr('data-link');
			
			if(typeof id!="undefined") {
				
				if(id=="") {
					$(".about_close").trigger(Globals.clickEvent);
					event.preventDefault();
				}
				else {
					if(id != "collection"){
						event.preventDefault();
						publisher.publish(Events.navigate, id);
					}
				}
			}
			
			
			
		});
		
		$(".preconfiguration .item").on(Globals.clickEvent, function(event){
			
			//alert("test");
			if($(this).hasClass("selected")) {
				return;
			}
			
			var currentItem = Mustache.clone(true);
			
			$(".preconfiguration .item").removeClass("selected");
			
			var id = $(this).attr('data-link');
			
			var arrayBuild = id.split("/");
			
			var clone = Mustache.clone(true);
			
			var textValue = encodeURIComponent(decodeURIComponent(currentItem.text));
			
			if(textValue=="") {
				textValue = "none";
			}
			
			id = arrayBuild[0] + Mustache.sep + arrayBuild[1] + Mustache.sep + arrayBuild[2] + Mustache.sep + arrayBuild[3] + Mustache.sep + arrayBuild[4] + Mustache.sep + textValue + Mustache.sep + arrayBuild[6];

			
			if(arrayBuild[1]==currentItem.weight && !Globals.cssVersion) {
				
				/*
				Knife.instance.hide();
		
				window.setTimeout(function() {
					publisher.publish(Events.navigate, id);
					
					Knife.instance.show();
					
				}, 1000);
				*/
				publisher.publish(Events.navigate, id);
				
				
			}
			else if(arrayBuild[1]==currentItem.weight && Globals.cssVersion) {
				
				publisher.publish(Events.navigate, id);
			}
			else {
				publisher.publish(Events.navigate, id);
			}
			
			$(this).addClass("selected");
			
			event.preventDefault();
			event.stopPropagation();
			
			//Knife.instance.startOutro( Globals.GLFadeOutduration, id );
			
		});
		
		$(".preconfiguration .item.selected").trigger("click");
		
		if(!Globals.tablet){
			$('.footer ul li a').on('mouseenter', function(event){
				if($(this).attr('data-link') !== currentId){
					selectBtn($(this));
				}
			}).on('mouseleave', function(event){
				if($(this).attr('data-link') !== currentId){
					unselectBtn($(this));
				}
			});
		}

		var easingRollOver = TWEEN.Easing.Circular.Out;
		var easingRollOut = TWEEN.Easing.Circular.InOut;
		var easingRollTime = 200, easingRollOutTime = 150;
		var rollOverOrderTween = new TWEEN.Tween(orderRollVal)
			.to( { w: 6 }, easingRollTime )
			.easing( easingRollOver )
			.onUpdate( updateOrderRoll );
		var rollOutOrderTween = new TWEEN.Tween(orderRollVal)
			.to( { w: 0 }, easingRollOutTime )
			.easing( easingRollOut )
			.onUpdate( updateOrderRoll );

		$('.main_order_button').on(Globals.clickEvent, function(event){
			event.preventDefault();
			trackEvent('order');
			publisher.publish(Events.addToCart);
		}).on('mouseenter', function(event){
			if(!dragging){
				rollOutOrderTween.stop();
				rollOverOrderTween.start();
			}
		}).on('mouseleave', function(event){
			if(!dragging){
				rollOverOrderTween.stop();
				rollOutOrderTween.start();
			}
		});

		$('header').on(Globals.clickEvent, function(event){
			event.preventDefault();
			publisher.publish(Events.openPopin, Globals.POPIN_CART);
		}).on('mouseenter', function(event){
			event.preventDefault();
			if(Mustache.cart.length > 0){
				TweenLite.to($('header .cart_btn'), 0.2, {top:-28, ease:Circ.easeOut});
			}
		}).on('mouseleave', function(event){
			event.preventDefault();
			if(Mustache.cart.length > 0){
				TweenLite.to($('header .cart_btn'), 0.2, {top:-38, ease:Circ.easeInOut});
			}
		});

		$('.share_fb').on(Globals.clickEvent, function(event){
			
			trackEvent('link/facebook');
			
		});
                    
		$('.share_twitter').on(Globals.clickEvent, function(event){
			
			trackEvent('link/twitter');

		});

		$('.share_pinterest').on(Globals.clickEvent, function(event){
			
			trackEvent('link/pinterest');

		});
		
		$('.sound').on(Globals.clickEvent, function(event){
			event.preventDefault();
			soundOn = (soundOn)? false : true;
			TweenLite.to($('div', this), 0.2, {alpha:(soundOn)? 1 : 0});
		});

		$('.contact_btn').on(Globals.clickEvent, function(event){
			event.preventDefault();
			publisher.publish(Events.openPopin, Globals.POPIN_CONTACT);
		});

		$('footer a').on(Globals.clickEvent, function(event){
			trackEvent('footer/'+$(this).attr('data-id'));
		});
		
		$(".univers-label").on(Globals.clickEvent, function(event){
			$(".univers .univers-container").fadeToggle("fast");
		});
		
		$(".button-unlock").on(Globals.clickEvent, function(event){
			
			
			$(".preconfiguration .item.selected").removeClass("selected").addClass("lastselected");
			publisher.publish(Events.openPopin, Globals.POPIN_LEAVE);
			
			event.stopPropagation();
			
		});
		
		$(".popins .popin.popin_leave .popin_btn.confirm_leave").on(Globals.clickEvent, function(event){
			
			event.preventDefault();
			
			if($("body").hasClass("leaveMe")) window.location.href = "http://www.deejo.fr";
			
			if($("body").data("univers")=="restaurant") {
					
				$(".popins .popin.popin_leave .close_popin").trigger(Globals.clickEvent);
					
				publisher.publish(Events.navigate, "37/titanium/genevrier/none/none/tree");
				
			}
			else {
				
				TweenLite.to($("#tattoo, #finish, #size, #handle"), 1, {opacity:0, ease: Expo.easeOut, onComplete: function() {
					$("body").removeClass("customized").addClass("locked");
				}});
			
				$(".popins .popin.popin_leave .close_popin").trigger(Globals.clickEvent);
			
				if($(".preconfiguration .item.lastselected").size()>0 && !$(".preconfiguration").hasClass("onlogo")) {
					$(".preconfiguration .item.lastselected").trigger(Globals.clickEvent);
				}
				else if($(".preconfiguration .item.selected").size()>0 && !$(".preconfiguration").hasClass("onlogo")) {
					$(".preconfiguration .item.selected").trigger(Globals.clickEvent);
				}
				else {
					$(".preconfiguration .item").eq(0).trigger(Globals.clickEvent);
				}
				
				$(".preconfiguration").removeClass("onlogo");
				
				$(".previous-univers, .next-univers").show();
				
				TweenLite.to($(".preconfiguration").show(), 0.8, {opacity:1, onComplete: function() {
					
				}});
			}
			
			
		});
		
		$(".suggestion ul li").on(Globals.clickEvent, function(){

			$(".suggestion ul li").removeClass("selected");
			
			$(this).addClass("selected");
			
			Mustache.change("text", $(this).text());
			
			//$(".menu_ok").trigger(Globals.clickEvent);
			
		});
		
		var isOdd = function(x) { return x & 1; };
		var isEven  = function(x) { return !( x & 1 ); };
		
		$(".next-univers").on(Globals.clickEvent, function(event){
			
			var currentIndex = $(".preconfiguration .item.selected").index();
			
			$(".preconfiguration .item").removeClass("selected");
			
			if(currentIndex<0) {
				$(".preconfiguration .item").eq(0).trigger(Globals.clickEvent);
			}
			else {
				
				if(currentIndex==$(".preconfiguration .item").size()-1) {
					$(".preconfiguration .item").eq(0).trigger(Globals.clickEvent);
				}
				else {
					$(".preconfiguration .item").eq(currentIndex+1).trigger(Globals.clickEvent);
				}
				
			}
			
		});
		
		$(".previous-univers").on(Globals.clickEvent, function(event){
			
			var currentIndex = $(".preconfiguration .item.selected").index();
			
			$(".preconfiguration .item").removeClass("selected");
			
			if(currentIndex<0) {
				$(".preconfiguration .item").eq(0).trigger(Globals.clickEvent);
			}
			else {
				
				if(currentIndex==0) {
					$(".preconfiguration .item").eq($(".preconfiguration .item").size()-1).trigger(Globals.clickEvent);
				}
				else {
					$(".preconfiguration .item").eq(currentIndex-1).trigger(Globals.clickEvent);
				}
				
			}
			
		});
		
		$(".button-customize").on(Globals.clickEvent, function(event){

			$(".previous-univers, .next-univers").hide();
			if($("body").hasClass("v_webgl")) {
				
				Knife.instance.target.position.y = 0;
				Knife.instance.target.position.x = 0;
				Knife.instance.target.position.z = 0;
				
				if($("body").hasClass("v_webgl")) {
					var rounded = parseInt(controls.angle.x/PI);
					
					if(!isOdd(rounded)) {
						rounded = rounded + 1;
					}
					
					controls.reach( rounded*PI + PI*0.5, 0, 0 );
				}
				
			}
			else {
				
				if(Globals.flipped) {
					MenuInterface.flipModel();
				}
				
			}
			
			$(".preconfiguration").fadeOut("fast");
			
				
			$("body").removeClass("locked").addClass("customized");
		
			TweenLite.fromTo($("#tattoo, #finish, #size, #handle"), 1, {opacity:0}, {opacity:1, ease: Expo.easeOut});
			
			event.stopPropagation();
		
			
		});

		self.select(currentId);
		
		if($(".preconfiguration .item.selected").size()==0) {
			$("body").removeClass("locked").addClass("customized");
		}
	};

	var updateOrderRoll = function(){
		var cValue = Math.round(this.w*0.45);
		$('.main_order_button .order_corner').width(8-cValue);
		$('.main_order_button .order_corner2').css("left", $('.main_order_button .front_bg').width()+28+cValue);
		$('.main_order_button .order_bande').width(11+this.w);
		$('.main_order_button .order_bande1').css("left", 21-this.w);
		//var cValue2 = Math.round(this.w*0.1);
		//$('.order_button .order_corner').height(8+cValue2);
		//$('.order_button .front_bg').css("top", 53+cValue2);
		//$('.order_button .order_front_pic').css("top", 77+cValue2);
	};

	init();
};var ViewPopins = function() {
	var container = $('.content .popins');
	var popins = $('.content .popins .popin');
	var self = this;
	var popin;
	var currentCartId =0, readyScroll = true, currentPopinId = "";
	var descriptionText = $('.cart_ct').html();
	var descriptionTxtText = $('.txt_cart_pval').html();
	var descriptionTxtPrice = $('.txt_cart_pvalprice').html();
	var descriptionTxtHandle = $('.txt_cart_pvalhandle').html();
	var descriptionTxtTattoo = $('.txt_cart_pvaltattoo').html();
	var orderRollVal = { w: 0, btn:null };
	var minimumSideSpace = 20;
	self.cartOpened = false;
	var nbCartKnifes = 3;
	var noClick = false;
	self.opened = false;
	var uploadError= false;
	var sending= false, sendingError = false;
	var tutoCurrentSlide = 0;
	var tutoSliding = false;
	var errorData = "";

	//publisher.subscribe(Events.startPop, updateCartBtn);
	
	$('.txt_cart_pval').remove();
	$('.txt_cart_pvalprice').remove();
	$('.txt_cart_pvalhandle').remove();
	$('.txt_cart_pvaltattoo').remove();
	this.resize = function(){
		$('.popins .popin').each(function(index){
			if($(this).attr('data-w') !== undefined){
				var w = Math.round(Math.min(width-minimumSideSpace*2, parseInt($(this).attr('data-w'),10)));
				var h = Math.round(Math.min(height-minimumSideSpace, parseInt($(this).attr('data-h'),10)));
				$(this).width(w);
				$(this).height(h);
				$(this).css('left', Math.round(width*0.5));
				$(this).css('top', Math.round(height*0.5));
				$(this).css('margin-left', -Math.round(w*0.5));
				$(this).css('margin-top', -Math.round(h*0.5));
				if($(this).hasClass('popin_'+Globals.POPIN_CART)){
					$('.popin_black_button', this).css('left', Math.round(w*0.5-$('.popin_black_button').width()*0.5));
					$('.popins .popin_cart .cart_ct').css("top", (h>410)? 70: 45);
				}else if($(this).hasClass('popin_'+Globals.POPIN_CONTACT)){
					$('.popin_black_button', this).css('left', Math.round(w*0.5-$('.popin_black_button').width()*0.5));
					if(Globals.mobile && currentPopinId == Globals.POPIN_CONTACT){
						var fieldW = w - 55;
						$(".popin_contact input:text[name!='captcha']").width(fieldW);
						$(".popin_contact input:text[name='captcha']").width(60);
						$(".popin_contact textarea").width(fieldW);
						$(".popin_contact .captcha_ct").width(fieldW);
						h = 560;
						$(this).height(h);
						$(this).css('top', Math.min(300, Math.round(height*0.5)));
						$('.popin_black_button', this).css('top', 470);

						var hTot = Math.max(h+100, window.innerHeight);
						if(hTot > $('html').height() ){
							$(this).css('margin-top', 20-hTot*0.5);
							$('.site').height(hTot);
							$('body').height(hTot);
							$('html').height(hTot);
							$('body').css('overflow', 'auto');
							$('html').css('overflow', 'auto');
							publisher.publish(Events.needResize);
						}
					}
				}else if($(this).hasClass('popin_'+Globals.POPIN_SEND_ERROR)){
					$('.popin_black_button', this).css('left', Math.round(w*0.5-$('.popin_black_button').width()*0.5));
					//$('.popin_black_button', this).css('top', 240);
				}/*else if(id == Globals.POPIN_CONTACT_CONFIRM){
					$(this).height(h);
				}*/
			}
		});
		if(self.cartOpened) slideTo(currentCartId, 0);
		
	};

	this.refresh = function() {
		refreshCart();
	};
	
	this.open = function(id, more){
		
		TweenLite.killDelayedCallsTo(self.close);
		self.opened = true;
		popins.css('display', 'none');
		popin = $('.content .popins .popin_'+id);
		popin.css('display', 'block');
		currentPopinId = id;
		
		if(id == Globals.POPIN_CART){
			trackPage('cart');
			self.cartOpened = true;
			currentCartId = 0;
			refreshCart();

			$(".popins .popin_cart .cart_product .suppr").off(Globals.clickEvent);
			$(".popins .popin_cart .cart_product img").off(Globals.clickEvent);
			$(".popins .popin_cart .cart_product .cart_product_description").off(Globals.clickEvent);
			$(".popins .popin_cart .cart_product .cart_product_title").off(Globals.clickEvent);
			$('.cart_ct').empty();

			for (var i = 0; i < Mustache.cart.length; i++) {
				var block = "<div class='cart_product' data-url='"+Mustache.cart[i].url+"' data-index='"+i+"'>";
				var img = 'assets/img/cart/'+Mustache.cart[i].cartimg+'.png';
				block += '<img src="'+img+'" >';
				block += "<a href='#' class='suppr'></a>";
				block += "<span class='cart_product_title light'>DEEJO "+Mustache.cart[i].weight+"g</span>";	
				block += "<span class='cart_product_description'>"+ decodeURIComponent(Mustache.getProductDescription(Mustache.cart[i], descriptionText, descriptionTxtHandle, descriptionTxtTattoo, descriptionTxtText, descriptionTxtPrice.replace("{currency}", $("#devise-container li[data-id='"+ $("body").attr("data-devise") +"']").data("symbol"))))+"</span>";
				block += "</div>";
				var imgProduct = $("img", $(block));
				$('.cart_ct').append(block);
				/*TweenLite.to(imgProduct, 0, {alpha:0});
				$.preload( [img], {onFinish:function(){TweenLite.to(imgProduct, 0.6, {alpha:1});}});*/
			}
			slideTo(currentCartId, 0);

			$(".popins .popin_cart .cart_product .suppr").on(Globals.clickEvent,function(event){
				event.preventDefault();
				trackEvent('cart/delete');
				var prod = $(this).parent();
				Mustache.removeFromCart($( ".popins .popin_cart .cart_product" ).index( prod ));
				updateCartBtn();
				$(".suppr", prod).off(Globals.clickEvent);
				$("img",  prod).off(Globals.clickEvent);
				$(".cart_product_description",  prod).off(Globals.clickEvent);
				$(".cart_product_title",  prod).off(Globals.clickEvent);
				TweenLite.to(prod, 0.25, {top:386, ease:Cubic.easeInOut, onComplete:function(){
					prod.empty();
					prod.remove();
					currentCartId = Math.max(0, Math.min(currentCartId, $('.cart_product').length-1));
					slideTo(Math.max(0, Math.min(currentCartId, $('.cart_product').length-nbCartKnifes)));
					refreshCart();
				}});
			});

			$(".popins .popin_cart .cart_product .cart_product_title").on(Globals.clickEvent,function(event){
				event.preventDefault();
				trackEvent('cart/detail');
				openKnifeUrl($(this).parent().attr('data-url'));
			});

			$(".popins .popin_cart .cart_product img").on(Globals.clickEvent,function(event){
				event.preventDefault();
				trackEvent('cart/detail');
				self.close();
				publisher.publish(Events.navigate, $(this).parent().attr('data-url'));
			});

			$(".popins .popin_cart .cart_product .cart_product_description").on(Globals.clickEvent,function(event){
				event.preventDefault();
				trackEvent('cart/detail');
				self.close();
				publisher.publish(Events.navigate, $(this).parent().attr('data-url'));
			});
		}else if(id == Globals.POPIN_PARTAGE_MAIL){

			var val = $("#tattoo .selector_mod_list a.sub_selected").text();
			var str = $(".popin_partage_mail textarea.mess_area").data("default");
			var message = $("#text input").val();
			
			if(val=="Aucun" || val=="None") {
				var processTitle = str.replace(" {type}", "");
			}
			else {
				var processTitle = str.replace(" {type}", " " + val);
			}
			
			if(message=="" || !Mustache.getTattooDataById(knife.tattoo).textOk) {
				processTitle = processTitle.replace("{message}", "");
			}
			else {
				processTitle = processTitle.replace("{message}", ' "' + message + '"');
			}

			function getCleanImg() {
			
				var cart = Mustache.clone(true);
				
				return cart.cartimg;
			}
		
			var knifeStr = getCleanImg();
			
			$(".contact_check_img").attr("src", "assets/img/cart/s/"+knifeStr+".jpg");
			$(".partage_img").hide().attr("data-default", "assets/img/cart/s/"+knifeStr+".jpg");
			$('.partage_img').val($("body").data("baseurl") + "assets/img/cart/s/"+knifeStr+".jpg");
				
			url = $("body").data("url") + Mustache.getCurrentCleanUrl();
			
			$(".partage_url").hide().attr("data-default", url);
			$('.partage_url').val(url);
			
			updateCaptchaPartage();

			TweenLite.killTweensOf($('.popin_partage_mail .form_feedback'));
			$('.popin_partage_mail .form_feedback').html("");
			
			// réinit
			$(".popin_partage_mail input:text").removeClass("base_field");
			$(".popin_partage_mail textarea").removeClass("base_field");
			$(".popin_partage_mail input:text").removeClass("required_field");
			$(".popin_partage_mail textarea").removeClass("required_field");
			$(".popin_partage_mail input:text").addClass("base_field");
			$(".popin_partage_mail textarea").addClass("base_field");

			$('.popin_partage_mail input').each(function(index){
				if($(this).attr('data-default') !== undefined)
					$(this).val($(this).attr('data-default'));
				else if($(this).attr('name') !== "contact_copy")
					$(this).val("");
			});
			$('.popin_partage_mail textarea').each(function(index){
				if($(this).attr('data-default') !== undefined)
					$(this).val($(this).attr('data-default'));
				else
					$(this).val("");
			});

			$(".popin_partage_mail textarea.mess_area").val(processTitle);
			
			$('.popin_partage_mail input[name=contact_copy]').attr('checked', false);
			
			$(".popin_partage_mail textarea.mess_area").focus();

		}else if(id == Globals.POPIN_CONTACT){
			updateCaptcha();

			TweenLite.killTweensOf($('.popin_contact .form_feedback'));
			$('.popin_contact .form_feedback').html("");
			
			// réinit
			$(".popin_contact input:text").removeClass("base_field");
			$(".popin_contact textarea").removeClass("base_field");
			$(".popin_contact input:text").removeClass("required_field");
			$(".popin_contact textarea").removeClass("required_field");
			$(".popin_contact input:text").addClass("base_field");
			$(".popin_contact textarea").addClass("base_field");

			$('.popin_contact input').each(function(index){
				if($(this).attr('data-default') !== undefined)
					$(this).val($(this).attr('data-default'));
				else if($(this).attr('name') !== "contact_copy")
					$(this).val("");
			});
			$('.popin_contact textarea').each(function(index){
				if($(this).attr('data-default') !== undefined)
					$(this).val($(this).attr('data-default'));
				else
					$(this).val("");
			});

			$('.popin_contact input[name=contact_copy]').attr('checked', false);

			onContactUploadErrorErase();

		}else if(id == Globals.POPIN_NO_STOCK){

			var nostocklist = "";
			if(!Mustache.isModelAvailable()) nostocklist += popin.attr('data-no-model')+"<br />";
			if(!Mustache.isHandleAvailable()) nostocklist += popin.attr('data-no-handle')+"<br />";
			if(!Mustache.isTattooAvailable()) nostocklist += popin.attr('data-no-tattoo')+"<br />";
			if(!Mustache.isTextAvailable()) nostocklist += popin.attr('data-no-text')+"<br />";
			$('.not_available_list', popin).html(nostocklist);

		}else if(id == Globals.POPIN_TUTO){

			if($("body").hasClass("v_css")) {	
				tutoNextSlide();
			}
			
			tutoNextSlide();

		}else if(id == Globals.POPIN_SEND_ERROR){

			TweenLite.killTweensOf($('.popin_send_error .form_feedback'));
			$('.popin_send_error .form_feedback').html("");

			errorData = more;
			$(".popin_send_error input:text").removeClass("base_field");
			$(".popin_send_error input:text").addClass("base_field");

		}else if(id == Globals.POPIN_CONTACT_CONFIRM || id == Globals.POPIN_SEND_ERROR_CONFIRM){

			TweenLite.delayedCall(7, self.close);

		}else if(id == Globals.POPIN_NO_WEBGL){
			
			trackEvent("popin_no_webgl");
			
			
			$('.popin_no_webgl .no_webgl_browser').off(Globals.clickEvent + ".tracking").on(Globals.clickEvent + ".tracking", function(event){
				trackEvent('btn_update_browser_clicked');
			});
			
			$('.popin_no_webgl .no_webgl_enter').off(Globals.clickEvent + ".tracking").on(Globals.clickEvent + ".tracking", function(event){
				trackEvent('btn_load_classic_clicked');
			});
		
			/*
			var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
			var newBrowsUrl = "";
			if(is_chrome) newBrowsUrl = "https://support.google.com/chrome/answer/1220892";
			if(is_mac) newBrowsUrl = "http://www.webkit.org/blog/919/webgl-draft-specification-now-available/";

			if(newBrowsUrl !== "")
				$('.no_webgl_browser').attr('href', newBrowsUrl);
			*/
			
		}
		
		else if(id == Globals.POPIN_ORDER){
			
		}
		
		var rotationY = -90;
        var leftY = "40%";
        
        if($("body").data("tablet")=="1") {
            rotationY = 0;
            leftY = "50%";
        }

		self.resize();
		popin.css('top', '50%');
		TweenLite.to(popin, 0, {rotationY:rotationY, left:leftY, alpha:1, transformOrigin:"center center"});
		TweenLite.killTweensOf(container);
		TweenLite.to(container, 0.3, {autoAlpha:1});
		TweenLite.to(popin, 0.35, {rotationY:0, left:"50%", transformOrigin:"center center", ease:Circ.easeOut, onComplete:function(){
			self.resize();
		}});
	};

	this.killTuto = function(){
		
		$(".popin_tuto .nav_tuto").off('click');
		$(".popin_tuto .popin_btn").off('click');
		TweenLite.killDelayedCallsTo(tutoNextSlide);
		$(".popin_tuto").empty();
		$(".popin_tuto").remove();
	};

	this.killNoWebgl = function(){
		$('.popin_no_webgl .no_webgl_enter').off('click');
		$(".popin_no_webgl").empty();
		$(".popin_no_webgl").remove();
	};

	this.close = function(){
		TweenLite.killDelayedCallsTo(self.close);
		self.opened = false;
		TweenLite.killTweensOf(container);
		
		if(self.cartOpened) {
			TweenLite.to(popin, 0.25, {top:"40%", transformOrigin:"center center", ease:Back.easeIn, alpha:0});
			TweenLite.to(container, 0.2, {autoAlpha:0, delay:0.1});
		}else if(typeof popin !== 'undefined'){
		    
		    var rotationY = 90;
            var leftY = "60%";
            
            if($("body").data("tablet")=="1") {
                rotationY = 0;
                leftY = "50%";
            }
        
			TweenLite.to(popin, 0.4, {rotationY:rotationY, left:leftY, transformOrigin:"center center", ease:Circ.easeInOut});
			TweenLite.to(container, 0.4, {autoAlpha:0, onComplete:function(){
				
				if(popin.hasClass('popin_tuto'))
					self.killTuto();
				else if(popin.hasClass('popin_no_webgl')) {
					self.killNoWebgl();

					var tutoCookieName = "deejo_tuto";
					var tutoCookie = readCookie(tutoCookieName);
		
					setTimeout(function(){

						if(tutoCookie === null){
							publisher.publish(Events.openPopin, Globals.POPIN_TUTO);
							createCookie(tutoCookieName, "1", 100);
						} else {
							//popins.killTuto();
						}
							
						
					}, 1000);
					
					
				}
				
				//self.killTuto();
					
			}});
		}
		self.cartOpened = false;
		
		if(Globals.mobile) publisher.publish(Events.popinClosing);
	};

	this.start = function(){
		updateCartBtn();
	};

	this.slideNext = function(){
		noClick = true;
		$('.popins .popin_cart .next_product').trigger(Globals.clickEvent);
	};
	this.slidePrev = function(){
		noClick = true;
		$('.popins .popin_cart .prev_product').trigger(Globals.clickEvent);
	};

	// =======================
	// PRIVATE
	// =======================
	var openKnifeUrl = function(url){
		if(!noClick){
			self.close();
			publisher.publish(Events.navigate, url);
		}
		noClick = false;
	};

	var refreshCart = function(){
		$('.popin_cart .popin_black_button').css("display", (Mustache.cart.length === 0)? 'none' : 'block');
		$('.popin_cart .emptycart').css("display", (Mustache.cart.length === 0)? 'block' : 'none');
		$('.popin_cart h3').css("display", (Mustache.cart.length === 0)? 'none' : 'block');
		$('.popin_cart .nav_product').css("display", (Mustache.cart.length < 4)? 'none' : 'block');
	};

	var slideTo = function(id, time){
		if(id === 0) $('.popins .popin_cart .prev_product').css("display", "none");
		else if(Mustache.cart.length > nbCartKnifes) $('.popins .popin_cart .prev_product').css("display", "block");

		if(id > Mustache.cart.length-(nbCartKnifes+1)) $('.popins .popin_cart .next_product').css("display", "none");
		else if(Mustache.cart.length > nbCartKnifes) $('.popins .popin_cart .next_product').css("display", "block");

		readyScroll = false;
		if(typeof time == "undefined") time = 0.4;
		var popWidth = $('.popins .popin_cart').width();
		var poductWidth = 221;
		$('.cart_product').each(function(index){
			var i = index - id;
			var space = Math.round((popWidth - Math.min(nbCartKnifes, $('.cart_product').length)*poductWidth)/2);
			var posiX = i*poductWidth + space;
			if(i > nbCartKnifes-1) posiX = popWidth+1;
			else if(i < 0) posiX = -poductWidth-1;
			TweenLite.killTweensOf($(this));
			TweenLite.to($(this), time, {left:posiX, delay:0.01*index});
		});

		currentCartId = id;
		setTimeout(function(){readyScroll = true;},400);

		if(Globals.mobile)
			$('.popins .popin_cart h3').html($('.popins .popin_cart h3').attr('data-txt')+" ("+(id+1)+"/"+$('.cart_product').length+")");
	};

	var confirmAddToCart = function(){
		Mustache.addToCart();
		$('.cart_anim span').html(Mustache.cart.length);
		TweenLite.killTweensOf($('.cart_anim'));
		TweenLite.to($('.cart_anim'), 0, {scale:0, top:30, autoAlpha:1});
		TweenLite.to($('.cart_anim'), 0.3, {scale:1, ease:Back.easeOut});
		TweenLite.to($('.cart_anim'), 0.4, {scale:0, top:-5, ease:Back.easeIn, delay:0.5});
		$('header span').html(Mustache.cart.length);
		TweenLite.killTweensOf($('header .cart_btn'));
		$('header').css('display', 'block');
		TweenLite.to($('header .gradientshadow'), 0.2, {alpha:1});
		TweenLite.to($('header .cart_btn'), 0.3, {top:-25, ease:Circ.easeInOut});
		TweenLite.to($('header .cart_btn'), 0.3, {top:-38, ease:Back.easeOut, delay:0.3});
	};
	var updateCartBtn = function(){
		
//		console.log("update cart btn --> "+Mustache.cart.length);
		$('header span').html(Mustache.cart.length);
		TweenLite.killTweensOf($('header .cart_btn'));
		if(Mustache.cart.length > 0){
			TweenLite.to($('header .gradientshadow'), 0.2, {alpha:1});
			$('header').css('display', 'block');
			TweenLite.to($('header .cart_btn'), 0.3, {top:-38, ease:Back.easeOut});
		}else{
			TweenLite.to($('header .gradientshadow'), 0.2, {alpha:0});
			TweenLite.to($('header .cart_btn'), 0.3, {top:-75, ease:Back.easeOut, onComplete:function(){$('header').css('display', 'none');}});
		}
	};

	var tutoPrevSlide = function(){
		tutoCurrentSlide--;
		if(tutoCurrentSlide < 0)
			tutoCurrentSlide = $('.tuto_slide').length-1;

		tutoSlide(-1);
	};

	var tutoSlide = function(dir){
		tutoSliding = true;
		TweenLite.killDelayedCallsTo(tutoNextSlide);
		var w = $('.tuto_slides').width();
		$('.tuto_slide').each(function(index){
			if(index == tutoCurrentSlide){
				$(this).css('left', -dir*w);
				TweenLite.to($(this), 0.35, {ease:Circ.easeIntOut, left:0});
			}else{
				TweenLite.to($(this), 0.35, {ease:Circ.easeIntOut, left:w*dir, onComplete:function(){
					tutoSliding = false;
				}});
			}
			
		});

		TweenLite.delayedCall(4, tutoNextSlide);
	};

	var tutoNextSlide = function(){
		tutoCurrentSlide++;
		if(tutoCurrentSlide > $('.tuto_slide').length-1)
			tutoCurrentSlide = 0;

		tutoSlide(1);
	};

	var onErrorPopinSend = function(datas){
		sendingError = false;
		console.log("Error post RESULT : "+datas);
		if(datas.charAt(0) == "1"){
			self.close();
			publisher.publish(Events.openPopin, Globals.POPIN_SEND_ERROR_CONFIRM);
		}else{
			displayFormMessage('error', 12);
		}
	};

	var onContactUploadErrorErase = function(){
		uploadError = false;
		$('.file_input_error').html('');
		TweenLite.killTweensOf($('.file_input_erase'));
		TweenLite.killTweensOf($('.file_input'));
		TweenLite.to($('.file_input_erase'), 0.1, {autoAlpha:0});
		var control = $(".popin_contact #inputfile");
		control.replaceWith( control.val('').clone( true ) );
		TweenLite.to($('.file_input'), 0.1, {autoAlpha:1, delay:0.1});
	};

	var init = function(){

		/*$(window).keydown(function(event) {
			if((event.keyCode == 40 || event.keyCode == 38) && self.opened){
				event.preventDefault();
				return false;
				
			}
		});*/
		
	

		var btnW = Math.max(112, Math.round($('.popin_black_button .front_bg span').width())+60);
		$('.popin_black_button .front_bg').width(btnW);
		$('.popin_black_button .front_bg').css('margin-left', -Math.round(btnW*0.5));
		$('.popin_black_button').width(btnW+68);
		$('.popin_black_button .order_corner2').css('left', btnW+28);
		$('.popin_black_button .order_bande2').css('left', btnW+36);

		TweenLite.to($('.popin_contact .file_input_erase'), 0, {autoAlpha:0});
		if(Globals.mobile){
			nbCartKnifes = 1;
		}

		TweenLite.to(container, 0, {autoAlpha:0});
		TweenLite.to($('.cart_anim'), 0, {scale:0, autoAlpha:0});
		popins.css('display', 'none');
		$('.popin_cart .suppr').remove();

		$('.popins .close_popin').on(Globals.clickEvent, function(event){
			event.preventDefault();
			self.close();
			
			$("body").removeClass("leaveMe");
			
			if($(this).parent().hasClass("popin_leave")) {
				//$(".preconfiguration .item.lastselected").trigger("click").removeClass("lastselected");	
			}
			
		});

		$('.popins .cancel').on(Globals.clickEvent, function(event){
			event.preventDefault();
			self.close();
		});
		$('.popins .confirm').on(Globals.clickEvent, function(event){
			
			$("body").removeClass("leaveMe");
			
			event.preventDefault();
			confirmAddToCart();
			publisher.publish(Events.checkout);
			
			if($(this).parent().hasClass("popin_leave")) {
				$(".preconfiguration .item.lastselected").trigger("click").removeClass("lastselected");	
			}
			
		});
		$('.popins .continue').on(Globals.clickEvent, function(event){
			event.preventDefault();
			confirmAddToCart();
			self.close();
		});

		// start button beyable
		$('.by_inner .cancel').on(Globals.clickEvent, function(event){
			event.preventDefault();
			self.close();
		});
		$('.by_inner .confirm').on(Globals.clickEvent, function(event){
			
			$("body").removeClass("leaveMe");
			
			event.preventDefault();
			confirmAddToCart();
			publisher.publish(Events.checkout);
			
			if($(this).parent().hasClass("popin_leave")) {
				$(".preconfiguration .item.lastselected").trigger("click").removeClass("lastselected");	
			}
			
		});
		$('.by_inner .continue').on(Globals.clickEvent, function(event){
			event.preventDefault();
			confirmAddToCart();
			self.close();
		});
		// end button beyable

		$('.popins .popin_cart .nav_product').on("mouseenter", function(event){
			event.preventDefault();
			TweenLite.to($(this), 0.2, {backgroundPosition:($(this).hasClass('next_product'))? "21px center" : "17px center", ease:Circ.easeOut});
		}).on("mouseleave", function(event){
			event.preventDefault();
			TweenLite.to($(this), 0.25, {backgroundPosition:($(this).hasClass('next_product'))? "17px center" : "21px center", ease:Circ.easeInOut});
		});

		$('.popins .popin_cart .next_product').on(Globals.clickEvent, function(event){
			event.preventDefault();
			slideTo(Math.min(currentCartId+1, $('.cart_product').length-nbCartKnifes));
		});

		$('.popins .popin_cart .prev_product').on(Globals.clickEvent, function(event){
			event.preventDefault();
			slideTo(Math.max(currentCartId-1, 0));
		});

		$('.popins .popin_cart').on('mousewheel', function(event, delta, deltaX, deltaY) {
			if(readyScroll && $('.popin_cart .next_product').css('display')  != "none" && deltaY<0){
				slideTo(Math.min(currentCartId+1, $('.cart_product').length-nbCartKnifes));
			}else if(readyScroll && $('.popin_cart .prev_product').css('display')  != "none" && deltaY>0){
				slideTo(Math.max(currentCartId-1, 0));
			}
		});

		$('.popins .popin').each(function(index){
			$(this).attr('data-w', $(this).width());
			$(this).attr('data-h', $(this).height());
		});

		var easingRollOver = TWEEN.Easing.Circular.Out;
		var easingRollOut = TWEEN.Easing.Circular.InOut;
		var easingRollTime = 200, easingRollOutTime = 150;
		var rollOverOrderTween = new TWEEN.Tween(orderRollVal)
			.to( { w: 6 }, easingRollTime )
			.easing( easingRollOver )
			.onUpdate( updateOrderRoll );
		var rollOutOrderTween = new TWEEN.Tween(orderRollVal)
			.to( { w: 0 }, easingRollOutTime )
			.easing( easingRollOut )
			.onUpdate( updateOrderRoll );

		$('.popin_contact .popin_black_button').on(Globals.clickEvent, function(event){
			//console.log("SUBMIT ! "+uploadError+" & "+sending);
			event.preventDefault();
			trackEvent('contact/send');
			if(!uploadError && !sending){
				TweenLite.killTweensOf($('.popin_contact .form_feedback'));
				TweenLite.to($('.popin_contact .form_feedback'), 0.3, {autoAlpha:0});
				var ok = true;
				if(!checkField($(".popin_contact input:text[name='name']"))) ok = false;
				if(!checkField($(".popin_contact input:text[name='email']"))) ok = false;
				if(!checkField($(".popin_contact input:text[name='country']"))) ok = false;
				if(!checkField($(".popin_contact input:text[name='postalcode']"))) ok = false;
				if(!checkField($(".popin_contact input:text[name='captcha']"))) ok = false;
				if(!checkField($(".popin_contact textarea[name='mess']"))) ok = false;
				if(!checkEmail($(".popin_contact input:text[name='email']"))) ok = false;
				
				console.log("SUBMIT ! verif ok ?"+ok);
				if(ok){
					sending = true;
					displayFormMessage('sending', 0);
					// send contact  formz
					$('#workFrame').empty();
					$('#workFrame').off('load');
					$('#workFrame').on('load', function () {
						//get the response from the server
						var datas = $(this).contents().find('body').html();
						console.log(">>>> "+datas);
						//datas = "1";
						if(datas == "1"){
							//displayFormMessage('ok', 5);
							self.close();
							publisher.publish(Events.openPopin, Globals.POPIN_CONTACT_CONFIRM);
						}else if(datas.substr(0,1) == "0"){
							displayFormMessage('error-fields', 12);
							var fieldName = datas.substr(2);
							if(fieldName == "mess")
								$(".popin_contact textarea[name='mess']").addClass('required_field');
							else
								$(".popin_contact input:text[name='"+fieldName+"']").addClass('required_field');
						}else{
							displayFormMessage('error', 12);
						}
						sending = false;
					});

					$("#sendForm").submit();
				}
			}
		});
		
		function validateEmail(email) { 
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(email);
		} 

		$('.popin_partage_mail .popin_black_button').on(Globals.clickEvent, function(event){
			//console.log("SUBMIT ! "+uploadError+" & "+sending);
			event.preventDefault();
			trackEvent('partage_mail/send');
			
			if(!sending){
				
				TweenLite.killTweensOf($('.popin_partage_mail .form_feedback'));
				TweenLite.to($('.popin_partage_mail .form_feedback'), 0.3, {autoAlpha:0});
				var ok = true;
				
				if(!checkField($(".popin_partage_mail input:text[name='firstname']"))) ok = false;
				if(!checkField($(".popin_partage_mail input:text[name='lastname']"))) ok = false;
				if(!checkField($(".popin_partage_mail input:text[name='email']"))) ok = false;
				if(!checkField($(".popin_partage_mail input:text[name='emails']"))) ok = false;
				if(!checkField($(".popin_partage_mail input:text[name='captcha']"))) ok = false;
				
				if($(".popin_partage_mail textarea[name='mess']").val()=="") {
					$(".popin_partage_mail textarea[name='mess']").addClass("required_field");
					ok = false;
				}
				else {
					$(".popin_partage_mail textarea[name='mess']").removeClass("required_field");
				}
				
				var emailString = $(".popin_partage_mail input:text[name='emails']").val();
					emailString = emailString.split(";");

				if(!validateEmail($.trim($(".popin_partage_mail input:text[name='email']").val())) && $.trim($(".popin_partage_mail input:text[name='email']").val())!="") {
			   		ok = false;
			   		$(".popin_partage_mail input:text[name='email']").addClass("required_field");
			   	}
				   	
				for (index = 0; index < emailString.length; ++index) {
				   	if(!validateEmail($.trim(emailString[index])) && $.trim(emailString[index])!="") {
				   		ok = false;
				   		$(".popin_partage_mail input:text[name='emails']").addClass("required_field");
				   	}
				}
				
				if(ok){
					
					sending = true;
					displayFormMessage('sending', 0);
					
					// send contact  formz
					$('#workFrame').empty();
					$('#workFrame').off('load');
					$('#workFrame').on('load', function () {
						
						//get the response from the server
						var datas = $(this).contents().find('body').html();
						console.log(">>>> "+datas);
						//datas = "1";
						if(datas == "1"){
							//displayFormMessage('ok', 5);
							self.close();
							
							publisher.publish(Events.openPopin, Globals.POPIN_CONTACT_CONFIRM);
						}else if(datas.substr(0,1) == "0"){
							displayFormMessage('error-fields', 12);
							var fieldName = datas.substr(2);
							if(fieldName == "mess")
								$(".popin_contact textarea[name='mess']").addClass('required_field');
							else
								$(".popin_contact input:text[name='"+fieldName+"']").addClass('required_field');
						}else{
							displayFormMessage('error', 12);
						}
						
						sending = false;
					});

					$("#sendForm2").submit();
				}
			}
		});
		
		$('.popin_send_error .popin_black_button').on(Globals.clickEvent, function(event){
			//console.log("SUBMIT ! "+uploadError+" & "+sending);
			event.preventDefault();
			
			if(!sendingError){
				TweenLite.killTweensOf($('.popin_send_error .form_feedback'));
				TweenLite.to($('.popin_send_error .form_feedback'), 0.3, {autoAlpha:0});
				var ok = true;
				if(!checkField($(".popin_send_error input:text[name='name']"))) ok = false;
				if(!checkField($(".popin_send_error input:text[name='email']"))) ok = false;
				if(!checkEmail($(".popin_send_error input:text[name='email']"))) ok = false;
				console.log("SUBMIT ERROR ! verif ok ?"+ok);
				if(ok){
					sendingError = true;
					displayFormMessage('sending', 0);
					// send contact  formz
					var data = {
						email:$(".popin_send_error input:text[name='email']").val(),
						name:$(".popin_send_error input:text[name='name']").val(),
						cartv:JSON.stringify(Mustache.getCartSendInfos()),
						errorv:errorData
					};
					var sendUrl = $('.popin_send_error input:submit').attr('data-send-error-url');
					
					console.log("SEND TO "+sendUrl);
					$.ajax({
						type: "POST",
						url:sendUrl,
						data: data,
						success: onErrorPopinSend
					});
				}
			}
		});
		
		$('.popin_partage_mail input').on('focus', function(event){
			event.preventDefault();
			var value = $(this).val();
			if(value == $(this).attr('data-default')) $(this).val("");
		});

		$('.popin_contact input').on('focus', function(event){
			event.preventDefault();
			var value = $(this).val();
			if(value == $(this).attr('data-default')) $(this).val("");
		});
		
		$('.popin_send_error input').on('focus', function(event){
			event.preventDefault();
			var value = $(this).val();
			if(value == $(this).attr('data-default')) $(this).val("");
		});
		$('.popin_send_error input').on('blur', function(event){
			event.preventDefault();
			var value = $(this).val();
			if(value === "") $(this).val($(this).attr('data-default'));
		});
		$('.popin_contact input').on('blur', function(event){
			event.preventDefault();
			var value = $(this).val();
			if(value === "") $(this).val($(this).attr('data-default'));
		});
		$('.popin_contact textarea').on('blur', function(event){
			event.preventDefault();
			var value = $(this).val();
			if(value === "") $(this).val($(this).attr('data-default'));
		});

		$('.popin_cart .popin_black_button').on(Globals.clickEvent, function(event){
			event.preventDefault();
			trackEvent('cart/order');
			publisher.publish(Events.checkout);
		});
		$('.popin_black_button').on('mouseenter', function(event){
			orderRollVal.btn = $(this);
			if(!dragging){
				rollOutOrderTween.stop();
				rollOverOrderTween.start();
			}
		}).on('mouseleave', function(event){
			if(!dragging){
				rollOverOrderTween.stop();
				rollOutOrderTween.start();
			}
		});

		TweenLite.to($('header .gradientshadow'), 0, {alpha:0});

		$(".popin_contact #inputfile").change(function(e){
			uploadError = false;
			$('.file_input_error').html('');
			//$('.upload_vid').removeClass("required_field");
			//$("input:text[name='youtube']").removeClass("required_field");
			var fieldvalue = $(this).val();
			if(fieldvalue !== ""){
				if(!checkUploadFileExtention()){
					$('.popin_contact .file_input_error').html($('.popin_contact .file_input_error').attr('data-error-ext'));
					uploadError = true;
				}else if(checkUploadFileWeight() === false){
					$('.popin_contact .file_input_error').html($('.popin_contact .file_input_error').attr('data-error-size'));
					uploadError = true;
				}

				var fileNameVals = fieldvalue.split("/");
				if(fileNameVals.length == 1) fileNameVals = fieldvalue.split("\\");
				$('.popin_contact .file_input_erase').html(fileNameVals[fileNameVals.length-1]+"&nbsp;&nbsp;&nbsp;&nbsp;");
				TweenLite.killTweensOf($('.popin_contact .file_input_erase'));
				TweenLite.killTweensOf($('.popin_contact .file_input'));
				TweenLite.to($('.popin_contact .file_input_erase'), 0.2, {autoAlpha:1, delay:0.1, color:(uploadError)? "#dd0c0c" : "#676767"});
				TweenLite.to($('.popin_contact .file_input'), 0.1, {autoAlpha:0});
			}
		}).focus(function(){
			//$('.file_input_erase').removeClass("error_file");
		});

		$(".popin_contact textarea").focus(function(){
			$(this).removeClass("required_field");
			$(this).addClass("base_field");
		});
		$(".popin_contact input").focus(function(){
			$(this).removeClass("required_field");
			$(this).addClass("base_field");
		});

		$('.file_input_erase').on(Globals.clickEvent, function(e){
			e.preventDefault();
			onContactUploadErrorErase();
		});
		$('.popins .popin_contact form .reload_captcha').on(Globals.clickEvent, function(e){
			e.preventDefault();
			updateCaptcha();
		});

		$('.popins .popin_partage_mail form .reload_captcha').on(Globals.clickEvent, function(e){
			e.preventDefault();
			updateCaptchaPartage();
		});
		
		$( ".popin_contact form img" ).css('display', 'none');

		// tuto
		$(".popin_tuto .nav_tuto").css("display", "none");
		$(".popin_tuto .nav_tuto").on('click', function(event){
			event.preventDefault();
			if(!tutoSliding){
				tutoSliding = true;
				if($(this).hasClass('next_slide')){
					tutoNextSlide();
				}else{
					tutoPrevSlide();
				}
			}
		});

		$('.popin_no_webgl .no_webgl_enter').on('click', function(event){
			event.preventDefault();
			self.close();
		});

		$('.popin_tuto .popin_btn').on('click', function(event){
			event.preventDefault();
			self.close();
		});
	};

	var updateCaptcha = function(){
		$( ".popin_contact form img" ).css('display', 'none');
		$.post( "php/lib/captcha.php", function( data ) {
			$( ".popin_contact form img" ).attr('src', data );
			$( ".popin_contact form img" ).css('display', 'block');
		});
	};
	
	var updateCaptchaPartage = function(){
		$( ".popin_partage_mail form img" ).not(".contact_check_img").css('display', 'none');
		$.post( "php/lib/captcha.php", function( data ) {
			$( ".popin_partage_mail form img" ).not(".contact_check_img").attr('src', data );
			$( ".popin_partage_mail form img" ).not(".contact_check_img").css('display', 'block');
		});
		
	};

	var displayFormMessage = function(id, t){
		if(typeof t == "undefined") t = 5;
		var mess = $('input:submit', self.popin).attr('data-mess-'+id);
		var span = $('.form_feedback', self.popin);
		TweenLite.killTweensOf(span);
		TweenLite.to(span, 0, {autoAlpha:0});
		span.html(mess);
		TweenLite.to(span, 0.3, {autoAlpha:1});
		if(t > 0) TweenLite.to(span, 0.8, {autoAlpha:0, delay:t});
	};

	var checkField = function(field)
	{
		var valid = true;
		var fieldValue = field.val();
		field.removeClass('required_field');
		field.addClass("base_field");
		var base = "";
		if(field.attr('data-default') !== undefined) base = field.attr("data-default");
		if(fieldValue == base || fieldValue === "")
		{
			valid = false;
			field.addClass('required_field');
			field.removeClass("base_field");
		}
		return valid;
	};

	var checkEmail = function(field) {
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var verif = filter.test(field.val());
		if(!verif && !field.hasClass('required_field')){
			field.addClass('required_field');
			field.removeClass("base_field");
		}
		return verif;
	};

	var checkUploadFileExtention = function()
	{
		var fieldvalue = $(".popin_contact #inputfile").val();
		if(fieldvalue === "") return false;
		var extensionArr = fieldvalue.split(".");
		var ext = extensionArr[extensionArr.length-1].toLowerCase();
		if(ext != "jpeg" && ext != "jpg" && ext != "doc" && ext != "docx" && ext != "png" && ext != "gif" && ext != "ai" && ext != "eps" && ext != "psd" && ext != "pdf")
			return false;
		else
			return true;
	};

	var checkUploadFileWeight = function()
	{
		var fieldvalue = $(".popin_contact #inputfile").val();
		if(supportFileApi() && fieldvalue !== ""){
			var size = $(".popin_contact #inputfile").get(0).files[0].size;
			size=(size/1000000).toFixed(2);
			if(size > 2)	return false;
			else		return true;
		}else
			return true;
	};

	var updateOrderRoll = function(){
		var cValue = Math.round(this.w*0.45);
		$('.order_corner', orderRollVal.btn).width(8-cValue);
		$('.order_corner2', orderRollVal.btn).css("left", $('.popin_black_button .front_bg').width()+28+cValue);
		$('.order_bande', orderRollVal.btn).width(11+this.w);
		$('.order_bande1', orderRollVal.btn).css("left", 21-this.w);
	};

	var supportFileApi = function() {
		return $("<input type='file'>")    // create test element
			.get(0)                             // get native element
			.files !== undefined;       // check whether files property is not undefined
	};

	init();
};
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return void(k._events=j={n:{}});var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(window||this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*N.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")};c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){{var e=[];M.call(c)}d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[["M",b,d],["H",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin(2*(a-.075)*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=b(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=c.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=b(p).match(c._ISURL);if(F){B=q("pattern");var G=q("image");B.id=c.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(a){c._preload(F[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(G,{width:b,height:c}),d.paper.safari()})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=c.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[a]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=c.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[a]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper);this.paper;return this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});if ( ! window.console || typeof console =="undefined" ) console = { log: function(){} };
var audio = null;
var audioPlaying = false;

var scaleFactor = 0;
var scaleRatio = 0;

var isMax = false;
var isMin = false;

var webgl = false;
var devise;

function trackPage(page) {
	
	devise = $("body").attr("data-devise");
	var cleanVersion = "openGl";
	
	if(version=="css") {
		cleanVersion = "css";
	}
	
	//console.log("track:" + page);
	//console.log("version:" + cleanVersion);
	//console.log("lang:" + lang);
	
	if(page=="load") {
		dataLayer.push({
		  'contentGroup1': 'MyDeejo',
		  'contentGroup2': 'Configurateur',
		  'versionConfigurateur': cleanVersion,  
		  'langage': lang,
		  'currency': devise
		});
	}
	else {
		dataLayer.push({
		  'contentGroup1': 'MyDeejo',
		  'contentGroup2': page,
		  'versionConfigurateur': cleanVersion,  
		  'langage': lang,
		  'currency': devise
		});
	}
}

function trackEvent(event) {
	
	//console.log("track event:" + event);
	
}

try {
	webgl = !!window.WebGLRenderingContext && !!(document.createElement('canvas').getContext('webgl') || document.createElement('canvas').getContext('experimental-webgl'));
	scaleFactor = 0.45;
	
} catch(e) {
	webgl = false;
	scaleFactor = 0.6;
}
	
function audioPlayPause()
{
	if( audio == null )return;
	if( audioPlaying )
	{
		TweenLite.to( audio, Globals.TRANSITION_TIME, { ease:Globals.TRANSITION_EASE, volume:0 } );
	}
	else
	{
		TweenLite.to( audio, Globals.TRANSITION_TIME, { ease:Globals.TRANSITION_EASE, volume:1 } );
	}
	audioPlaying = !audioPlaying;
}

//var path1 ="M150.419,27.001c-7.821-0.006-15.642,5.767-17.478,12.896 c-1.836,7.123,3.014,12.91,10.832,12.916c7.819,0.011,15.645-5.76,17.477-12.893C163.086,32.795,158.231,27.008,150.419,27.001z M159.24,40.259c-1.582,5.038-7.029,9.281-11.717,9.274c-4.689-0.004-6.66-4.137-5.076-9.171c1.578-5.042,6.117-9.081,10.803-9.074 C157.94,31.292,160.824,35.22,159.24,40.259z";
//var path2 ="M53.218,13.812c-3.912,0-7.916,0.277-10.156,3.578 c-1.454,2.135-2.651,4.594-3.812,6.976c-0.466,0.962-0.948,1.958-1.448,2.913c-0.371,0.722-0.569,1.073-0.583,1.086l-0.242,0.435 c-1.812-1.143-4.103-1.794-6.729-1.798c-7.816-0.006-15.64,5.767-17.474,12.896c-1.836,7.123,3.018,12.91,10.835,12.916 c6.684,0.007,13.36-4.209,16.311-9.876c0.045-0.08,0.085-0.163,0.132-0.25c2.364-4.634,12.102-24.119,14.462-28.869 C54.09,13.819,53.654,13.812,53.218,13.812z M31.5,39.654c-1.58,5.035-6.037,8.884-10.727,8.877 c-4.69-0.003-7.634-4.075-6.051-9.117c1.582-5.035,7.182-8.927,11.873-8.917C31.284,30.5,33.085,34.613,31.5,39.654z";
//var path3 ="M134.685,14.6c-0.681-0.815-1.744-1.239-3.084-1.239 c-0.675,0-1.398,0.11-2.17,0.331c-3.38,0.962-4.968,3.988-4.558,6.354c0.293,1.627,1.853,2.679,3.986,2.679 c0.781,0,1.575-0.146,2.351-0.431c3.464-1.267,4.007-4.21,4.086-5.082C135.441,15.99,135.279,15.289,134.685,14.6z";
//var path4 ="M128.961,27.055h-9.041c-0.975,0-1.743,0-2.011,0.171 c-0.159,0.106-0.339,0.404-0.566,0.858h5.778l-0.691,1.347c-1.939,3.771-13.811,26.784-13.811,26.784 c-2.246,4.153-5.922,7.126-9.51,7.123c-1.797,0-3.239-0.762-4.22-2.034h-1.157c1.947,2.436,5.165,3.948,9.169,3.955 c5.402,0.007,12.8-2.168,18.294-13.701c0-0.003,0-0.003,0-0.003c0.953-1.925,5.738-11.256,7.869-15.52 c1.868-3.741,3.642-6.778,2.832-8.019C131.345,27.175,130.406,27.055,128.961,27.055z";
//var path5 ="M68.229,26.591c-6.91,0-10.899,1.47-15.798,5.83 c-2.701,2.398-5.502,6.691-5.666,10.874c-0.094,2.249,0.597,4.163,2.064,5.69c2.531,2.656,6.26,4.119,10.501,4.119 c4.453,0,8.754-1.594,11.75-4.31c-0.113-0.027-0.823-0.04-0.903-0.04c-0.2,0-0.336,0.076-0.835,0.404 c-0.319,0.207-0.707,0.468-1.265,0.765c-1.389,0.742-4.18,2.139-7.195,2.139c-2.713,0-3.947-1.16-4.507-2.139 c-1.116-1.951-0.068-5.266,0.644-6.742l0.207-0.44c0,0,5.076,0.003,5.576,0.003l0,0c1.785,0,3.705-0.037,5.598-0.338 c4.006-0.635,10.021-3.334,10.168-8.158c0.057-1.938-0.526-3.548-1.728-4.788C74.331,26.872,69.979,26.591,68.229,26.591z M69.832,31.001c-0.003,0.247-0.09,0.508-0.167,0.694l-0.007,0.027l-0.003-0.004c-0.55,1.784-1.503,3.472-2.429,5.112 c-0.357,0.628-0.693,1.226-1.008,1.824c-1.404,2.683-3.205,2.886-5.609,2.886l-2.227-0.003l0.891-1.73 c1.279-2.486,2.604-5.059,4.036-7.518c0.085-0.144,0.165-0.287,0.252-0.438c0.807-1.406,1.81-3.147,3.491-3.762 c1.021-0.374,1.886-0.178,2.387,0.494C69.935,29.241,69.979,30.189,69.832,31.001z";
//var path6 ="M103.597,48.755c-0.197,0-0.334,0.076-0.832,0.404 c-0.317,0.207-0.712,0.468-1.271,0.765c-1.38,0.742-3.864,2.139-6.882,2.139c-2.715,0-3.949-1.16-4.506-2.139 c-1.112-1.951-0.066-5.266,0.64-6.742l0.212-0.44c0,0,5.072,0.003,5.57,0.003l0,0c1.792,0,3.71-0.037,5.603-0.338 c4.007-0.635,10.022-3.334,10.17-8.158c0.055-1.938-0.528-3.548-1.728-4.788c-2.513-2.589-6.86-2.869-8.613-2.869 c-6.91,0-10.898,1.47-15.801,5.83c-2.698,2.398-5.498,6.691-5.665,10.874c-0.095,2.249,0.602,4.163,2.062,5.69 c2.538,2.656,6.268,4.119,10.506,4.119c4.452,0,8.752-1.594,11.752-4.31C104.695,48.768,103.677,48.755,103.597,48.755z M93.002,39.808c1.285-2.486,2.606-5.059,4.034-7.518c0.089-0.144,0.169-0.287,0.253-0.438c0.807-1.406,1.811-3.147,3.496-3.762 c1.018-0.374,1.886-0.178,2.385,0.494c0.496,0.655,0.538,1.604,0.398,2.416c-0.009,0.247-0.094,0.508-0.173,0.694l-0.01,0.027 v-0.004c-0.548,1.784-1.503,3.472-2.426,5.112c-0.36,0.628-0.698,1.226-1.012,1.824c-1.4,2.683-3.208,2.886-5.604,2.886 l-2.233-0.003L93.002,39.808z";

var pathes =
[

	{stroke:"#FFFFFF", strokeWidth:"1.4588", strokeMiterlimit:"10", d:"M242.826,5.351c0,2.472-2.004,4.474-4.469,4.474c-2.475,0-4.475-2.002-4.475-4.474c0-2.468,2-4.472,4.475-4.472C240.822,0.879,242.826,2.883,242.826,5.351"},
	{stroke:"#FFFFFF", strokeWidth:"1.4588", strokeMiterlimit:"10", d:"M242.826,5.351c0,2.472-2.004,4.474-4.469,4.474c-2.475,0-4.475-2.002-4.475-4.474c0-2.468,2-4.472,4.475-4.472C240.822,0.879,242.826,2.883,242.826,5.351z"},
	{stroke:"#FFFFFF", strokeWidth:"1.4588", strokeMiterlimit:"10", d:"M242.789,5.357c0,2.472-2,4.472-4.467,4.472c-2.473,0-4.475-2-4.475-4.472c0-2.469,2.002-4.471,4.475-4.471C240.789,0.887,242.789,2.889,242.789,5.357"},
	{stroke:"#FFFFFF", strokeWidth:"1.4588", strokeMiterlimit:"10", d:"M242.789,5.357c0,2.472-2,4.472-4.467,4.472c-2.473,0-4.475-2-4.475-4.472c0-2.469,2.002-4.471,4.475-4.471C240.789,0.887,242.789,2.889,242.789,5.357z"},
	{stroke:"#FFFFFF", strokeWidth:"1.4588", strokeMiterlimit:"10", d:"M458.83,45.249C417.206,24.6,338.533,5.546,256.77,0.867c-8.576-0.258-8.914,4.09-9.295,6.137c-0.229,1.259-0.137,7.75,3.082,8.008c146.172,14.306,191.836,35.237,210.08,47.22c0.809,0.522,1.289,0.86,2.451,0.2C466.281,60.794,473.756,52.315,458.83,45.249"},
	{stroke:"#FFFFFF", strokeWidth:"0.6808", strokeMiterlimit:"10", d:"M251.703,6.355c0-1.945,1.57-3.521,3.518-3.521c1.945,0,3.525,1.576,3.525,3.521s-1.58,3.526-3.525,3.526C253.273,9.882,251.703,8.301,251.703,6.355"},
	{stroke:"#FFFFFF", strokeWidth:"0.6808", strokeMiterlimit:"10", d:"M358.951,20.699c0-1.943,1.576-3.521,3.523-3.521c1.945,0,3.52,1.578,3.52,3.521c0,1.944-1.574,3.524-3.52,3.524C360.527,24.224,358.951,22.644,358.951,20.699"},
	{stroke:"#FFFFFF", strokeWidth:"0.6808", strokeMiterlimit:"10", d:"M456.775,52.683c0-1.942,1.58-3.521,3.527-3.521c1.941,0,3.52,1.578,3.52,3.521c0,1.947-1.578,3.522-3.52,3.522C458.355,56.205,456.775,54.63,456.775,52.683z"},
	{stroke:"#FFFFFF", strokeWidth:"0.8500", strokeMiterlimit:"10", d:"M211.527,39.353c-3.85-13.565-10.086-23.653-20.348-24.386c-41.439-1.83-124.242-2.348-130.477-1.979"},
	{stroke:"#FFFFFF", strokeWidth:"0.8500", strokeMiterlimit:"10", d:"M3.172,24.906c36.827,15.832,156.711,14.121,203.316,14.121c2.092-0.052,2.545,0.635,2.4,2.011"},
	{stroke:"#FFFFFF", strokeWidth:"1.3972", strokeMiterlimit:"10", d:"M460.637,62.231c-3.844-2.524-8.912-5.446-15.871-8.619c-2.457,1.023-5.861,1.66-10.563,0.106c-11.623-4.934-31.316-10.414-38.557-11.959c-5.844-1.245-6.865-4.052-6.789-5.929c-6.129-1.429-12.731-2.858-19.866-4.279c-0.448,2.208,0.732,3.626-0.866,3.393c-47.48-6.918-116.25-4.258-128.355-3.509c-1.48,0.171-0.762-0.56-1.283-0.759c-0.097-0.036-0.768-0.035-1.797-0.006c-2.775,4.288-7.589,7.133-13.076,7.133c-0.626,0-1.241-0.048-1.848-0.119v1.697c0,0,0.018,1.49-0.408,1.775c0,0-0.632-0.451-1.65-0.925c0.758,2.796,2.637,2.479,3.716,2.524c3.359,0.193,11.42-1.85,61.131-1.85c112.6,0,143.508,19.482,157.029,23.314c8.984,2.547,15.699,1.252,20.201-1.443C461.396,62.725,461.061,62.506,460.637,62.231z"},
	{stroke:"#FFFFFF", strokeWidth:"1.3972", strokeMiterlimit:"10", d:"M255.711,0.87c-8.022-0.455-14.887-0.681-20.292-0.726c0.245,0.083,0.384,0.186,0.643,0.26c0.455,0.131,1.088,0.347,1.363,0.573c0.29-0.059,0.589-0.09,0.896-0.09c2.467,0,4.467,2.002,4.467,4.471c0,2.472-2,4.472-4.467,4.472c-0.059,0-0.112-0.015-0.171-0.017c0.42,0.765,0.745,1.552,0.745,2.438c0,1.348,0.037,4.611,0.072,7.674c1.683-2.645,4.769-5.905,9.077-7.411c-0.726-2.056-0.71-4.745-0.571-5.509C247.839,5.046,248.184,0.996,255.711,0.87z"},
	{stroke:"#FFFFFF", strokeWidth:"1.0479", strokeMiterlimit:"10", d:"M238.151,9.812c-1.196-0.045-2.271-0.556-3.049-1.356c-0.777-0.801-1.255-1.892-1.255-3.098c0-1.081,0.384-2.072,1.023-2.845s1.534-1.328,2.555-1.535c-0.138-0.113-0.365-0.224-0.614-0.322c-0.25-0.098-0.521-0.185-0.749-0.25c-0.256-0.073-0.394-0.174-0.633-0.257C235.19,0.064,234.849,0,234.186,0c-12.844,0-54.818,1.188-101.868,5.018C85.268,8.849,33.144,15.323,0,25.896c16.252,8.73,55.889,12.652,97.469,14.391c41.58,1.739,85.103,1.295,109.125,1.295c1.598,0,2.574-0.604,3.746-1.207s2.538-1.207,4.915-1.207c1.668,0,3.194,0.498,4.303,0.995s1.801,0.995,1.801,0.995c0.213-0.143,0.315-0.586,0.364-0.995s0.044-0.781,0.044-0.781v-0.849v-0.849c-3.867-0.458-7.3-2.329-9.767-5.083c-2.466-2.754-3.966-6.39-3.966-10.379c0-4.302,1.743-8.197,4.563-11.016s6.715-4.563,11.018-4.563c3.87,0,7.406,1.413,10.125,3.751c2.72,2.337,4.623,5.6,5.228,9.3c-0.017-1.498-0.035-3.031-0.048-4.354c-0.014-1.323-0.022-2.436-0.022-3.093c0-0.443-0.081-0.861-0.215-1.264C238.548,10.583,238.361,10.194,238.151,9.812z"},
	{stroke:"#FFFFFF", strokeWidth:"0.8500", strokeMiterlimit:"10", d:"M225.824,21.908l0.635-1.281c0.053-0.105,0.049-0.228-0.008-0.327c-0.063-0.101-0.162-0.165-0.279-0.173l-1.432-0.088l-0.787-1.192c-0.127-0.195-0.451-0.195-0.58,0l-0.785,1.192l-1.428,0.088c-0.119,0.008-0.227,0.072-0.281,0.173c-0.059,0.1-0.063,0.222-0.008,0.327l0.633,1.281l-0.633,1.279c-0.055,0.104-0.051,0.227,0.008,0.328c0.055,0.103,0.162,0.167,0.281,0.176l1.428,0.086l0.785,1.192c0.061,0.098,0.176,0.155,0.291,0.155c0.117,0,0.225-0.058,0.289-0.155l0.787-1.192l1.432-0.086c0.117-0.009,0.217-0.073,0.279-0.176c0.057-0.102,0.061-0.225,0.008-0.328L225.824,21.908z"},
	{stroke:"#FFFFFF", strokeWidth:"1.3555", strokeMiterlimit:"10", d:"M239.189,22.224c0,4.301-1.743,8.196-4.562,11.016s-6.712,4.563-11.014,4.563c-4.303,0-8.199-1.744-11.018-4.563s-4.563-6.714-4.563-11.016s1.743-8.196,4.563-11.015s6.715-4.562,11.018-4.562c4.301,0,8.195,1.743,11.014,4.562S239.189,17.923,239.189,22.224"}

];
$(function() {
	
	if($('body').attr('data-tablet') == "1"){
		Globals.clickEvent = 'touchstart';
		Globals.tablet = true;
		$("body").addClass("v_tablet");
	}
	lang = $('body').attr('data-lang');

	$("body").addClass("v_" + lang);

	var canvas = Raphael("loadingPaper", 470, 66);
	var pathWidth = 1.5;
	var color = "#ffffff";

	var lines =[];
	pathes.forEach( function( path )
	{

		lines.push( canvas.path( path.d ).attr({ stroke: path.stroke, "stroke-width":parseFloat( path.strokeWidth ), "stroke-mitterlimit": parseFloat( path.strokeMiterlimit ) }) );

	});

	// DEVISE BEGIN
	
	devise = $("body").attr("data-devise");
	
	$("#devise-container li").click(function() {
			
		$(".devise-label span").html($(this).text());
		
		devise = $(this).data("id");
		$("body").attr("data-devise", devise);
			
		Mustache.saveCurrentKnife();
		Mustache.updatePrice();
		
		publisher.publish(Events.knifeChange);
		
		createCookie('deejo_devise',devise,365);
		
	});

	// select devise from cookie
	var cook = readCookie("deejo_devise");
	if(cook !== null && cook !== ""){
		$("#devise-container li[data-id='"+ devise +"']").click();
	}
	// DEVISE END
	
	function getInternetExplorerVersion()
	{
		var rv = -1, ua, re;
		if (navigator.appName == 'Microsoft Internet Explorer')
		{
			ua = navigator.userAgent;
			re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );
		}
		else if (navigator.appName == 'Netscape')
		{
			ua = navigator.userAgent;
			re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );
		}
		return rv;
	}

	var revision = getInternetExplorerVersion();
	Globals.isIE = revision != -1;
	Globals.oldIE = Globals.isIE && ( revision <= 8 );
	Globals.isIE9 = Globals.isIE && ( revision <= 9 );

	var assetsToLoad, assetsLoaded = 0, assetsTotal = 0, pctTo = 0, pct = 0, speedDiv = 20, difFactor = 1;
	var pctAssets = 18+Math.round(Math.random()*3), pctGlobal = 100;
	var completeSubscription, progressSubscription;
	var control = new MainControl();

	var head = document.getElementsByTagName('head')[ 0 ];
	var LIBS = [];

	function createScript( url )
    {
        var script= document.createElement( 'script' );
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);

        script.onreadystatechange = function ()
        {
            if ( script.readyState == 'complete')
            {
                loadNext();
            }
        };

        script.onload = function()
        {
            loadNext();
        };

        return script;

    }

     function createStyle( url )
    {
        var css = document.createElement('link');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('type', 'text/css');
        css.setAttribute('href', url );

        css.onreadystatechange = function ()
        {
            if( css.readyState == 'complete')
            {
              loadNext();
            }
        };

        css.onload = function ()
        {
            loadNext();
        };

        return css;
    }

    function loadNext()
    {
        LIBS.shift();
        if( LIBS.length > 0 )
        {
            head.appendChild( LIBS[ 0 ] );
        }
        else
        {
            images = retrieveImages('body');

			if(images.length > 0)
			{
				$.preload( images, {onFinish:onLoadComplete, onComplete:function(data){
					pctTo = pctAssets + data.loaded/data.total*(pctGlobal-pctAssets);
				}});

				//preloa Spritesheets
				$.preload( [ 'black_15g', 'black_27g', 'black_37g', 'mirror_15g', 'mirror_27g', 'mirror_37g','titanium_15g','titanium_27g','titanium_37g' ], {
				  				base:'assets/img/sheets/',
				  				ext:'.png'
				});
				//preload Textures
				$.preload( [ '15g/blade_none','15g/handle_none','27g/blade_none','27g/blade_none','37g/blade_none','37g/blade_none'], {
				  				base:'assets/img/textures/',
				  				ext:'.png'
				});



			}else onLoadComplete();
        }
    }

	function onLoadComplete()
	{
		pctTo = pctGlobal;
		if(!Globals.cssVersion)
		{
            TweenLite.set($("#container3d, #menu"), {opacity: 0});
			Mustache.init();
			setTimeout( init, 1 );
			progressSubscription = publisher.subscribe(Events.loadSceneProgress, on3dSceneLoadProgress);
			completeSubscription = publisher.subscribe(Events.loadSceneComplete, on3dSceneLoadComplete);
		}

		//http://html5doctor.com/native-audio-in-the-browser/
		// Need to check the canPlayType first or an exception
	    // will be thrown for those browsers that don't support it

	    audio = document.createElement('audio');
		var audioEnabled = false;
	    if ( audioEnabled && !Globals.tablet && audio != null && audio.canPlayType )
	    {
			var canPlayMp3 = !!audio.canPlayType && "" != audio.canPlayType('audio/mpeg');
			var canPlayOgg = !!audio.canPlayType && "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
			var canPlayWav = !!audio.canPlayType && "" != audio.canPlayType('audio/wav');

//		    console.log( canPlayMp3, canPlayOgg, canPlayWav );

			if( canPlayMp3 )
			{
				audio.src = "./assets/sound/soundtrack.mp3";
			}
		    else if( canPlayOgg )
	        {
	            audio.src = "./assets/sound/soundtrack.ogg";
	        }
		    else if( canPlayWav )
	        {
	            audio.src = "./assets/sound/soundtrack.wav";
	        }

		    if( canPlayMp3 || canPlayOgg || canPlayWav )
		    {
			    audio.play();
			    audio.id = "audio";
			    audio.preload = "auto";
			    audio.loop = true;
				audioPlaying = true;
			    document.body.appendChild(audio);
		    }

	    }
		else
	    {
		    $( "#sound" ).css( 'display', "none" );
	    }
	    
	}

	function on3dSceneLoadComplete(){
		progressSubscription.detach();
		completeSubscription.detach();
		pctTo = 100;
	}

	function on3dSceneLoadProgress(value){
		pctTo = pctGlobal + value*(100-pctGlobal);
	}

	window.setTimeout(function() {
		$(".popins.forceWebGL").show();
		
		$(".popins.forceWebGL .popin_close_slow").on("click", function() {
			
			$(".popins.forceWebGL").remove();
			
		});
		
	}, 8000);
	
	function loadingAnimation(){
	    
		var rounded = 0;
		if(pct != pctTo){
			difFactor = (pctTo - pct) / speedDiv;
			pct += difFactor;
			rounded = Math.round(pct);
			$('.loader_pct').html(((rounded < 10)? '0'+rounded : rounded)+'%');
		}
		canvas.clear();
		for (var i = lines.length - 1; i >= 0; i--) {
			var line = lines[i];
			var length = line.getTotalLength();

			var start = 0;
			var offset = length * Math.min(1, rounded/95);

			if( i == length - 1 )
			{
				start = parseInt( length *.5 );
				offset *= .5;
			}

			var subpath = line.getSubpath( start, offset);
			canvas.path(subpath).attr({ stroke: color, "stroke-width":parseFloat( pathes[ i ].strokeWidth ) });
		}
			
			
		if(rounded>0) {
			$(".popins.forceWebGL").remove();
		}

		if(rounded == 100){
			
			// INIT LOADING COMPLETE !!! HIHA !!! ---------------------------------------------
			trackPage('load_end');

			control.start();

			TweenLite.to($('.preloader'), 1.5, {autoAlpha:0, onComplete:function(){
				$('.preloader').empty();
				$('.preloader').remove();
			}});
		}else{
			window.requestAnimationFrame ( loadingAnimation );
		}
	}


	loadingAnimation();
	//$('.loader_pct').fadeOut(0);
	//$('.loader_pct').fadeIn( "slow");

	
	
	if(!webgl) {
		//$(".popins.forceWebGL").addClass("activate");
	}
	
	// START LOADING !
	$.getJSON( "assets/data/files.json", function( data )
	{
		

  /*  try
    {
        webgl = !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
    } catch(e) {
        webgl = false;
    }*/

		//MAC & safari test > disable WebGL si on est sur MAC + safari
		/*
		var ua = navigator.userAgent.toLowerCase();
		if (   /macintosh/.test( ua )
		||	   /mac os x/.test( ua ) )
		{
			console.log ( "isMac" );

			var isChrome = /chrome/.test( ua );
			console.log ( "isChrome", isChrome );

			var isSafari = !isChrome && /safari/.test( ua );
			console.log ( "isSafari", isSafari);

			if( isSafari )
			{
				console.log ( "browser is Safari & OS is Mac, disable WebGL" );
				webgl = false;
			}

		}
		*/

		//webgl = false;
		
		//loadingAnimation();
		
		var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;

		if( webgl && $('body').attr('data-css') == "0" && !isAndroid)
		{
			pctGlobal = 42 + Math.round(Math.random()*7);
			version = "webgl";
			Globals.cssVersion = false;
			assetsToLoad = data.webgl;
			
			scaleFactor = 0.45;
			
			$("body").addClass("v_webgl");
			
			//loadingAnimation();
			
		}else{

			$('.background').html('<img src="assets/img/env/'+$("body").data("skybox")+'/bg.jpg" class="background_bg unselectable" /><img src="assets/img/env/'+$("body").data("skybox")+'/table.jpg" id="table" class="background_table unselectable" />');
			pctGlobal = 100;
			version = "css";
			Globals.cssVersion = true;
			assetsToLoad = data.css;
			
			scaleFactor = 0.6;
			
			$("body").addClass("v_css");
			
			//loadingAnimation();
			//$(".popins").addClass("forceWebGL");
			
		}

		
		
		trackPage('load');
		assetsLoaded = 0;
		assetsTotal = assetsToLoad.scripts.length + assetsToLoad.styles.length;

		var i = 0;
		for (i = 0; i < assetsToLoad.styles.length; i++)
			LIBS.push(      createStyle( assetsToLoad.styles[i] )      );

		for (i = 0; i < assetsToLoad.scripts.length; i++)
			LIBS.push(      createScript( assetsToLoad.scripts[i] )      );
		 
		head.appendChild( LIBS[ 0 ] );
		//loadStyle();
	});

	if($('body').attr('data-preview') == "1") $('#menu').css("display", "none");
	$('.content').css('visibility', 'visible');

});