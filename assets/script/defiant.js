if(function(t,e,r){"use strict";var n={is_ie:/(msie|trident)/i.test(navigator.userAgent),is_safari:/safari/i.test(navigator.userAgent),env:"production",xml_decl:'<?xml version="1.0" encoding="utf-8"?>',namespace:'xmlns:d="defiant-namespace"',tabsize:4,render:function(t,e){var r,n,a,s,o=new XSLTProcessor,i=document.createElement("span"),l={match:"/"};switch(typeof t){case"object":this.extend(l,t),l.data||(l.data=e);break;case"string":l.template=t,l.data=e;break;default:throw"error"}if(l.data=JSON.toXML(l.data),r='//xsl:template[@name="'+l.template+'"]',this.xsl_template||this.gatherTemplates(),l.sorter&&(s=this.node.selectSingleNode(this.xsl_template,r+"//xsl:for-each//xsl:sort"),s&&(l.sorter.order&&s.setAttribute("order",l.sorter.order),l.sorter.select&&s.setAttribute("select",l.sorter.select),s.setAttribute("data-type",l.sorter.type||"text"))),a=this.node.selectSingleNode(this.xsl_template,r),a.setAttribute("match",l.match),o.importStylesheet(this.xsl_template),i.appendChild(o.transformToFragment(l.data,document)),a.removeAttribute("match"),this.is_safari){n=i.getElementsByTagName("script");for(var c=0,u=n.length;u>c;c++)n[c].defer=!0}return i.innerHTML},gatherTemplates:function(){for(var t=document.getElementsByTagName("script"),e="",r=0,n=t.length;n>r;r++)"defiant/xsl-template"===t[r].type&&(e+=t[r].innerHTML);this.xsl_template=this.xmlFromString('<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" '+this.namespace+">"+e.replace(/defiant:(\w+)/g,"$1")+"</xsl:stylesheet>")},getSnapshot:function(t,e){return JSON.toXML(t,e||!0)},xmlFromString:function(t){var e,r;return t=t.replace(/>\s{1,}</g,"><"),null===t.trim().match(/<\?xml/)&&(t=this.xml_decl+t),"undefined"!=typeof ActiveXObject?(r=new ActiveXObject("Msxml2.DOMDocument"),r.loadXML(t),-1===t.indexOf("xsl:stylesheet")&&r.setProperty("SelectionLanguage","XPath")):(e=new DOMParser,r=e.parseFromString(t,"text/xml")),r},extend:function(t,e){for(var r in e)t[r]&&"object"==typeof e[r]?this.extend(t[r],e[r]):t[r]=e[r];return t},node:{}};t.Defiant=e.exports=n}("undefined"!=typeof window?window:{},"undefined"!=typeof module?module:{}),"undefined"==typeof XSLTProcessor){var XSLTProcessor=function(){};XSLTProcessor.prototype={importStylesheet:function(t){this.xsldoc=t},transformToFragment:function(t,e){var r=t.transformNode(this.xsldoc),n=document.createElement("span");return n.innerHTML=r,n}}}else if("function"!=typeof XSLTProcessor&&!XSLTProcessor)throw"XSLTProcessor transformNode not implemented";String.prototype.fill||(String.prototype.fill=function(t,e){var r=this;for(e=e||" ";r.length<t;r+=e);return r}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/gm,"")}),String.prototype.xTransform||(String.prototype.xTransform=function(){var t=this;return-1===this.indexOf("translate(")&&(t=this.replace(/contains\(([^,]+),([^\\)]+)\)/g,function(t,e,r){var n="abcdefghijklmnopqrstuvwxyz";return"contains(translate("+e+', "'+n.toUpperCase()+'", "'+n+'"),'+r.toLowerCase()+")"})),t.toString()}),"undefined"==typeof JSON&&(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(t){if(t instanceof Object){var e="";if(t.constructor===Array){for(var r=0;r<t.length;e+=this.stringify(t[r])+",",r++);return"["+e.substr(0,e.length-1)+"]"}if(t.toString!==Object.prototype.toString)return'"'+t.toString().replace(/"/g,"\\$&")+'"';for(var n in t)e+='"'+n.replace(/"/g,"\\$&")+'":'+this.stringify(t[n])+",";return"{"+e.substr(0,e.length-1)+"}"}return"string"==typeof t?'"'+t.replace(/"/g,"\\$&")+'"':String(t)}}),JSON.toXML||(JSON.toXML=function(t,e){"use strict";var r,n,a,s={map:[],rx_validate_name:/^(?!xml)[a-z_][\w\d.:]*$/i,rx_node:/<(.+?)( .*?)>/,rx_constructor:/<(.+?)( d:contr=".*?")>/,rx_namespace:/ xmlns\:d="defiant\-namespace"/,rx_data:/(<.+?>)(.*?)(<\/d:data>)/i,rx_function:/function (\w+)/i,namespace:'xmlns:d="defiant-namespace"',to_xml_str:function(t){return{str:this.hash_to_xml(null,t),map:this.map}},hash_to_xml:function(t,e,r){var n,a,s,o,i,l,c,u,d,m=e.constructor===Array,h=this,p=[],f=[],g=function(e,n){if(a=n[e],(null===a||void 0===a||"NaN"===a.toString())&&(a=null),o="@"===e.slice(0,1),i=r?t:e,i==+i&&n.constructor!==Object&&(i="d:item"),null===a?(l=null,c=!1):(l=a.constructor,c=l.toString().match(h.rx_function)[1]),o)f.push(i.slice(1)+'="'+h.escape_xml(a)+'"'),"String"!==c&&f.push("d:"+i.slice(1)+'="'+c+'"');else if(null===a)p.push(h.scalar_to_xml(i,a));else switch(l){case Function:throw"JSON data should not contain functions. Please check your structure.";case Object:p.push(h.hash_to_xml(i,a));break;case Array:if(e===i){if(s=a.constructor===Array)for(u=a.length;u--;)null!==a[u]&&a[u]&&a[u].constructor!==Array||(s=!0),s||a[u].constructor!==Object||(s=!0);p.push(h.scalar_to_xml(i,a,s));break}case String:if("string"==typeof a&&(a=a.toString().replace(/\&/g,"&amp;").replace(/\r|\n/g,"&#13;")),"#text"===i){h.map.push(n),f.push('d:mi="'+h.map.length+'"'),f.push('d:constr="'+c+'"'),p.push(h.escape_xml(a));break}case Number:case Boolean:if("#text"===i&&"String"!==c){h.map.push(n),f.push('d:mi="'+h.map.length+'"'),f.push('d:constr="'+c+'"'),p.push(h.escape_xml(a));break}p.push(h.scalar_to_xml(i,a))}};if(e.constructor===Array)for(u=0,d=e.length;d>u;u++)g(u.toString(),e);else for(n in e)g(n,e);return t||(t="d:data",f.push(this.namespace),m&&f.push('d:constr="Array"')),null===t.match(this.rx_validate_name)&&(f.push('d:name="'+t+'"'),t="d:name"),r?p.join(""):(this.map.push(e),f.push('d:mi="'+this.map.length+'"'),"<"+t+(f.length?" "+f.join(" "):"")+(p.length?">"+p.join("")+"</"+t+">":"/>"))},scalar_to_xml:function(t,e,r){var n,a,s,o="";if(null===t.match(this.rx_validate_name)&&(o+=' d:name="'+t+'"',t="d:name",r=!1),(null===e||"NaN"===e.toString())&&(e=null),null===e)return"<"+t+' d:constr="null"/>';if(1===e.length&&e.constructor===Array&&!e[0])return"<"+t+' d:constr="null" d:type="ArrayItem"/>';if(1===e.length&&e[0].constructor===Object){n=this.hash_to_xml(!1,e[0]);var i=n.match(this.rx_node),l=n.match(this.rx_constructor);return i=null!==i?i[2].replace(this.rx_namespace,"").replace(/>/,"").replace(/"\/$/,'"'):"",l=null!==l?l[2]:"",n=n.match(this.rx_data),n=null!==n?n[2]:"","<"+t+i+" "+l+' d:type="ArrayItem">'+n+"</"+t+">"}return 0===e.length&&e.constructor===Array?"<"+t+' d:constr="Array"/>':r?this.hash_to_xml(t,e,!0):(a=e.constructor,s=a.toString().match(this.rx_function)[1],n=a===Array?this.hash_to_xml("d:item",e,!0):this.escape_xml(e),o+=' d:constr="'+s+'"',this.map.push(e),o+=' d:mi="'+this.map.length+'"',"#text"===t?this.escape_xml(e):"<"+t+o+">"+n+"</"+t+">")},escape_xml:function(t){return String(t).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&nbsp;/g,"&#160;")}};switch(typeof e){case"function":return a=x10.compile(s),void a.to_xml_str(t,function(r){e({doc:Defiant.xmlFromString(r.str),src:t,map:r.map})});case"boolean":return r=s.to_xml_str.call(s,t),{doc:Defiant.xmlFromString(r.str),src:t,map:r.map};default:return r=s.to_xml_str.call(s,t),n=Defiant.xmlFromString(r.str),this.search.map=r.map,n}}),JSON.search||(JSON.search=function(t,e,r){"use strict";var n,a,s=t.doc&&t.doc.nodeType,o=s?t.doc:JSON.toXML(t),i=s?t.map:this.search.map,l=s?t.src:t,c=Defiant.node[r?"selectSingleNode":"selectNodes"](o,e.xTransform()),u=[];for(r&&(c=[c]),a=c.length;a--;)switch(c[a].nodeType){case 2:case 3:u.unshift(c[a].nodeValue);break;default:n=+c[a].getAttribute("d:mi"),u.unshift(i[n-1])}return"development"===Defiant.env&&(this.trace=JSON.mtrace(l,u,c)),u}),JSON.mtrace||(JSON.mtrace=function(t,e,r){"use strict";for(var n,a,s,o,i,l=window,c=JSON.stringify,u=c(t,null,"	").replace(/\t/g,""),d=[],m=0,h=r.length,p=h?r[m].ownerDocument.documentElement:!1,f=(this.search.map,0);h>m;m++){switch(r[m].nodeType){case 2:a=r[m].ownerElement?r[m].ownerElement.getAttribute("d:"+r[m].nodeName):"String",n='"@'+r[m].nodeName+'": '+l[a](e[m]),s=u.indexOf(n),i=0;break;case 3:a=r[m].parentNode.getAttribute("d:constr"),n=l[a](e[m]),n='"'+r[m].parentNode.nodeName+'": '+("Number"===n?n:'"'+n+'"'),s=u.indexOf(n),i=0;break;default:if(r[m]===p)continue;"String"===r[m].getAttribute("d:constr")||"Number"===r[m].getAttribute("d:constr")?(a=r[m].getAttribute("d:constr"),n=l[a](e[m]),s=u.indexOf(n,f),n='"'+r[m].nodeName+'": '+("Number"===a?n:'"'+n+'"'),i=0,f=s+1):(n=c(e[m],null,"	").replace(/\t/g,""),s=u.indexOf(n),i=n.match(/\n/g).length)}o=u.substring(0,s).match(/\n/g).length+1,d.push([o,i])}return d}),Defiant.node.selectNodes=function(t,e){if(t.evaluate){for(var r=t.createNSResolver(t.documentElement),n=t.evaluate(e,t,r,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),a=[],s=0,o=n.snapshotLength;o>s;s++)a.push(n.snapshotItem(s));return a}return t.selectNodes(e)},Defiant.node.selectSingleNode=function(t,e){if(t.evaluate){var r=this.selectNodes(t,e);return r.length>0?r[0]:null}return t.selectSingleNode(e)},Defiant.node.prettyPrint=function(t){var e,r,n=Defiant,a=n.tabsize,s=n.xml_decl.toLowerCase();n.is_ie?r=t.xml:(e=new XMLSerializer,r=e.serializeToString(t)),"development"!==n.env&&(r=r.replace(/ \w+\:d=".*?"| d\:\w+=".*?"/g,""));for(var o,i,l=r.trim().replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3"),c=l.split("\n"),u=-1,d=0,m=c.length;m>d;d++)(0!==d||c[d].toLowerCase()!==s)&&(o=null!==c[d].match(/<[A-Za-z_\:]+.*?>/g),i=null!==c[d].match(/<\/[\w\:]+>/g),null!==c[d].match(/<.*?\/>/g)&&(o=i=!0),o&&u++,c[d]=String().fill(u,"	")+c[d],o&&i&&u--,!o&&i&&u--);return c.join("\n").replace(/\t/g,String().fill(a," "))},Defiant.node.toJSON=function(t,e){"use strict";var r=function(t){var e,n,a,s,o,i,l,c,u,d,m={},h=window;switch(t.nodeType){case 1:for(o=t.getAttribute("d:constr"),"Array"===o?m=[]:"String"===o&&""===t.textContent&&(m=""),e=t.attributes,c=0,u=e.length;u>c;c++)d=e.item(c),null===d.nodeName.match(/\:d|d\:/g)&&(o=t.getAttribute("d:"+d.nodeName),i=o&&"undefined"!==o?"null"===d.nodeValue?null:h[o]("false"===d.nodeValue?"":d.nodeValue):d.nodeValue,m["@"+d.nodeName]=i);break;case 3:n=t.parentNode.getAttribute("d:type"),i=n?h[n]("false"===t.nodeValue?"":t.nodeValue):t.nodeValue,m=i}if(t.hasChildNodes())for(c=0,u=t.childNodes.length;u>c;c++)if(a=t.childNodes.item(c),s=a.nodeName,e=t.attributes,"d:name"===s&&(s=a.getAttribute("d:name")),"#text"===s)o=t.getAttribute("d:constr"),"undefined"===o&&(o=void 0),l=a.textContent||a.text,i="Boolean"===o&&"false"===l?"":l,o||e.length?o&&1===u?m=h[o](i):t.hasChildNodes()&&e.length<3?m=o?h[o](i):i:m[s]=o?h[o](i):i:m=i;else{if("null"===a.getAttribute("d:constr")){m[s]&&m[s].push?m[s].push(null):"ArrayItem"===a.getAttribute("d:type")?m[s]=[m[s]]:m[s]=null;continue}if(m[s]){m[s].push?m[s].push(r(a)):m[s]=[m[s],r(a)];continue}switch(o=a.getAttribute("d:constr")){case"null":m.push?m.push(null):m[s]=null;break;case"Array":a.parentNode.firstChild===a&&"Array"===o&&"d:item"!==s?"d:item"===s||"Array"===o?(i=r(a),m[s]=i.length?[i]:i):m[s]=r(a):m.push?m.push(r(a)):m[s]=r(a);break;case"String":case"Number":case"Boolean":l=a.textContent||a.text,i="Boolean"===o&&"false"===l?"":l,m.push?m.push(h[o](i)):m[s]=r(a);break;default:m.push?m.push(r(a)):m[s]=r(a)}}return 1===t.nodeType&&"ArrayItem"===t.getAttribute("d:type")&&(m=[m]),m},n=9===t.nodeType?t.documentElement:t,a=r(n),s=a[n.nodeName];return n===n.ownerDocument.documentElement&&s&&s.constructor===Array&&(a=s),e&&"true"===e.toString()&&(e="	"),e?JSON.stringify(a,null,e):a},"undefined"!=typeof jQuery&&!function(t){"use strict";t.fn.defiant=function(t,e){return this.html(Defiant.render(t,e)),this}}(jQuery);