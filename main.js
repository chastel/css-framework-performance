!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l,r,o,u,i,_,s={},a=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var l,r=arguments,o={};for(l in t)"key"!==l&&"ref"!==l&&(o[l]=t[l]);if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(r[l]);if(null!=n&&(o.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===o[l]&&(o[l]=e.defaultProps[l]);return h(e,o,t&&t.key,t&&t.ref)}function h(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return l.vnode&&l.vnode(o),o}function m(e){return e.children}function y(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!o++||i!==l.debounceRendering)&&((i=l.debounceRendering)||u)(k)}function k(){for(var e;o=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,l,r,o,u;e.__d&&(o=(r=(t=e).__v).__e,(u=t.__P)&&(n=[],l=F(u,r,c({},r),t.__n,void 0!==u.ownerSVGElement,null,n,null==o?v(r):o),T(n,r),l!=o&&g(r)))}))}function S(e,t,n,l,r,o,u,i,_){var p,c,d,h,m,y,g,b=n&&n.__k||a,k=b.length;if(i==s&&(i=null!=o?o[0]:k?v(n,0):null),p=0,t.__k=w(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[p])||d&&n.key==d.key&&n.type===d.type)b[p]=void 0;else for(c=0;c<k;c++){if((d=b[c])&&n.key==d.key&&n.type===d.type){b[c]=void 0;break}d=null}if(h=F(e,n,d=d||s,l,r,o,u,i,_),(c=n.ref)&&d.ref!=c&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(c,n.__c||h,n)),null!=h){var a;if(null==y&&(y=h),void 0!==n.__d)a=n.__d,n.__d=void 0;else if(o==d||h!=i||null==h.parentNode){e:if(null==i||i.parentNode!==e)e.appendChild(h),a=null;else{for(m=i,c=0;(m=m.nextSibling)&&c<k;c+=2)if(m==h)break e;e.insertBefore(h,i),a=i}"option"==t.type&&(e.value="")}i=void 0!==a?a:h.nextSibling,"function"==typeof t.type&&(t.__d=i)}else i&&d.__e==i&&i.parentNode!=e&&(i=v(d))}return p++,n})),t.__e=y,null!=o&&"function"!=typeof t.type)for(p=o.length;p--;)null!=o[p]&&f(o[p]);for(p=k;p--;)null!=b[p]&&D(b[p],b[p]);if(g)for(p=0;p<g.length;p++)M(g[p],g[++p],g[++p])}function w(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var l=0;l<e.length;l++)w(e[l],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function P(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function x(e,t,n,l,r){var o,u,i,_,s;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof l&&(o.cssText="",l=null),l)for(u in l)n&&u in n||P(o,u,"");if(n)for(i in n)l&&n[i]===l[i]||P(o,i,n[i])}else"o"===t[0]&&"n"===t[1]?(_=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(l||e.addEventListener(t,C,_),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,C,_)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](l.event?l.event(e):e)}function F(e,t,n,r,o,u,i,_,s){var a,p,f,d,h,v,g,b,k,w,P=t.type;if(void 0!==t.constructor)return null;(a=l.__b)&&a(t);try{e:if("function"==typeof P){if(b=t.props,k=(a=P.contextType)&&r[a.__c],w=a?k?k.props.value:a.__:r,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?t.__c=p=new P(b,w):(t.__c=p=new y(b,w),p.constructor=P,p.render=j),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=w,p.__n=r,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=c({},p.__s)),c(p.__s,P.getDerivedStateFromProps(b,p.__s))),d=p.props,h=p.state,f)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,w)){for(p.props=b,p.state=p.__s,p.__d=!1,p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&i.push(p),a=0;a<t.__k.length;a++)t.__k[a]&&(t.__k[a].__=t);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(d,h,v)}))}p.context=w,p.props=b,p.state=p.__s,(a=l.__r)&&a(t),p.__d=!1,p.__v=t,p.__P=e,a=p.render(p.props,p.state,p.context),t.__k=null!=a&&a.type==m&&null==a.key?a.props.children:Array.isArray(a)?a:[a],null!=p.getChildContext&&(r=c(c({},r),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(v=p.getSnapshotBeforeUpdate(d,h)),S(e,t,n,r,o,u,i,_,s),p.base=t.__e,p.__h.length&&i.push(p),g&&(p.__E=p.__=null),p.__e=!1}else t.__e=N(n.__e,t,n,r,o,u,i,s);(a=l.diffed)&&a(t)}catch(e){l.__e(e,t,n)}return t.__e}function T(e,t){l.__c&&l.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){l.__e(e,t.__v)}}))}function N(e,t,n,l,r,o,u,i){var _,p,c,f,d,h=n.props,m=t.props;if(r="svg"===t.type||r,null!=o)for(_=0;_<o.length;_++)if(null!=(p=o[_])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,o[_]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),o=null}if(null===t.type)h!==m&&e.data!=m&&(e.data=m);else if(t!==n){if(null!=o&&(o=a.slice.call(e.childNodes)),c=(h=n.props||s).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!i){if(h===s)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||c)&&(f&&c&&f.__html==c.__html||(e.innerHTML=f&&f.__html||""))}(function(e,t,n,l,r){var o;for(o in n)o in t||x(e,o,null,n[o],l);for(o in t)r&&"function"!=typeof t[o]||"value"===o||"checked"===o||n[o]===t[o]||x(e,o,t[o],n[o],l)})(e,m,h,r,i),t.__k=t.props.children,f||S(e,t,n,l,"foreignObject"!==t.type&&r,o,u,s,i),i||("value"in m&&void 0!==m.value&&m.value!==e.value&&(e.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==e.checked&&(e.checked=m.checked))}return e}function M(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){l.__e(e,n)}}function D(e,t,n){var r,o,u;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||M(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){l.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&D(r[u],t,n);null!=o&&f(o)}function j(e,t,n){return this.constructor(e,n)}function E(e,t,n){var r,o,u;l.__&&l.__(e,t),o=(r=n===_)?null:n&&n.__k||t.__k,e=d(m,null,[e]),u=[],F(t,(r?t:n||t).__k=e,o||s,s,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:a.slice.call(t.childNodes),u,n||s,r),T(u,e)}l={__e:function(e,t){for(var n,l;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(l=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(l=!0,n.componentDidCatch(e)),l)return b(n.__E=n)}catch(t){e=t}throw e}},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},y.prototype.render=m,r=[],o=0,u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=s;n(0);const R=({report:e})=>d(m,null,d("tr",null,d("td",{style:{whiteSpace:"nowrap"}},d("strong",null,e.name.replace(/-/g,"‑"))),d("td",null,d("a",{href:`reports/${e.projectFolderName}/page/`},"Demo"),d("br",null),d("a",{href:"https://github.com/jantimon/css-framework-performance/tree/master/css-frameworks/vanilla"},"Code")),d("td",null,d(I,{label:"Full transfer size of all requests (gzip)"},e.lighthouseReportSummary.TransferSize)),d("td",null,d(U,{label:"First Meaningful Paint"},e.lighthouseReportSummary.FirstMeaningfulPaint)),d("td",null,d(U,{label:"First Contentful Paint"},e.lighthouseReportSummary.FirstContentfulPaint)),d("td",null,d(U,{label:"Time To Interactive"},e.lighthouseReportSummary.TimeToInteractive)),d("td",null,d(U,{label:"First Cpu Idle"},e.lighthouseReportSummary.FirstCPUIdle)),d("td",null,d("div",{style:{whiteSpace:"nowrap"}},d("a",{href:`reports/${e.projectFolderName}/index.report.html`,title:"Report 1"},"1")," / ",d("a",{href:`reports/${e.projectFolderName}/index-01.report.html`,title:"Report 2"},"2")," / ",d("a",{href:`reports/${e.projectFolderName}/index-02.report.html`,title:"Report 3"},"3")))),d("tr",null,d("td",{colSpan:3},d("small",null,e.description)),d("td",{colSpan:5}))),U=({children:e,label:t})=>d("span",{title:`${t}: ${e} ms`,style:{whiteSpace:"nowrap"}},"⏱️ ",Math.round(e/100)/10," s"),I=({children:e,label:t})=>d("span",{title:`${t}: ${e} byte`,style:{whiteSpace:"nowrap"}},"📏 ",Math.round(e/100)/10," kb");E(d(({reportData:e})=>d("table",null,d("thead",null,d("tr",null,d("th",null,"Name"),d("th",null,"Demo"),d("th",null,"Transfer Size"),d("th",null,"First Meaningful Paint"),d("th",null,"First Contentful Paint"),d("th",null,"Time To Interactive"),d("th",null,"First Cpu Idle"),d("th",null,"Full Report"))),d("tbody",null,e.map(e=>d(R,{report:e})))),{reportData:JSON.parse(document.getElementById("reportData").innerHTML)}),document.getElementById("root"))}]);