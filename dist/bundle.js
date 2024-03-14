(()=>{"use strict";var n={491:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,":root {\n  --button-text-color: #ffffff;\n  --button-border-color: #ffffff;\n  --button-hover-text-color: #262626;\n  --button-hover-background-color: #ffffff;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n}\n\n.home-title {\n  font-size: 2.5rem;\n  text-align: center;\n  margin: 20px 0;\n  order: 2;\n}\n\n.home-description {\n  text-align: center;\n  order: 3;\n}\n\n.book-table-button {\n  margin: 40px auto 20px;\n  padding: 20px 60px;\n  text-transform: uppercase;\n  word-spacing: 3px;\n  color: var(--button-text-color);\n  border: 1px solid var(--button-border-color);\n  background-color: transparent;\n  transition: all 0.5s ease;\n  order: 4;\n}\n\n.book-table-button:hover {\n  cursor: pointer;\n  color: var(--button-hover-text-color);\n  background-color: var(--button-hover-background-color);\n}\n\n.home-image {\n  order: 1;\n}\n",""]);const c=i},630:(n,e,t)=>{t.d(e,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),l=new URL(t(575),t.b),u=i()(o()),d=s()(l);u.push([n.id,`@font-face {\n  font-family: "League Spartan";\n  src: url(${d})\n    format("truetype");\n  font-weight: 100 200 300 400 500 600 700 800 900;\n  font-style: normal;\n}\n\n/* CSS Reset */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-text-color: #ffffff;\n  --primary-background-color: #262626;\n  --main-font-family: "League Spartan", sans-serif;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: var(--main-font-family);\n  background-color: var(--primary-background-color);\n  color: var(--primary-text-color);\n}\n\n/* Navbar */\n.navbar {\n  min-height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n}\n\n.nav-branding {\n  font-size: 2rem;\n  text-decoration: none;\n  color: var(--primary-text-color);\n}\n\n.nav-menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 60px;\n}\n\n.nav-menu li {\n  list-style: none;\n}\n\n.nav-link {\n  transition: 0.7s ease;\n  background-color: var(--primary-background-color);\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  border: none;\n}\n\n.nav-link:hover {\n  color: dodgerblue;\n}\n\n.hamburger {\n  display: none;\n  cursor: pointer;\n}\n\n.bar {\n  display: block;\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  background-color: white;\n}\n\n@media screen and (max-width: 768px) {\n  .hamburger {\n    display: block;\n  }\n\n  .hamburger.active .bar:nth-child(2) {\n    opacity: 0;\n  }\n\n  .hamburger.active .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  .hamburger.active .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n\n  .nav-menu {\n    position: fixed;\n    left: -100%;\n    top: 70px;\n    gap: 0;\n    flex-direction: column;\n    background-color: #262626;\n    width: 100%;\n    text-align: center;\n    transition: 0.3s;\n  }\n\n  .nav-item {\n    margin: 16px 0;\n  }\n\n  .nav-menu.active {\n    left: 0;\n  }\n}\n`,""]);const p=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},575:(n,e,t)=>{n.exports=t.p+"373d611ec44856608b96.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"665d33457a12ba3667f4.jpeg";var e=t(72),r=t.n(e),o=t(825),a=t.n(o),i=t(659),c=t.n(i),s=t(56),l=t.n(s),u=t(540),d=t.n(u),p=t(113),f=t.n(p),m=t(630),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),r()(m.A,h),m.A&&m.A.locals&&m.A.locals;var v=t(491),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),r()(v.A,b),v.A&&v.A.locals&&v.A.locals;t.p,t.p,t.p,t.p,t.p,document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("p");t.textContent="Exquisite dining since 1989",t.classList.add("home-title"),e.appendChild(t);const r=document.createElement("p");r.textContent="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.",r.classList.add("home-description"),e.appendChild(r);const o=document.createElement("button");o.textContent="Book a Table",o.classList.add("book-table-button"),e.appendChild(o);const a=document.createElement("img");a.src=n,a.classList.add("home-image"),e.appendChild(a)}));const g=document.querySelector(".hamburger"),x=document.querySelector(".nav-menu");g.addEventListener("click",(()=>{g.classList.toggle("active"),x.classList.toggle("active")}))})()})();