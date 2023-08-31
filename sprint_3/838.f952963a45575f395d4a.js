/*! For license information please see 838.f952963a45575f395d4a.js.LICENSE.txt */
(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[838],{5235:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var n=o(8081),i=o.n(n),s=o(3645),a=o.n(s)()(i());a.push([t.id,"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n",""]);const r=a},5082:(t,e,o)=>{"use strict";var n=o(3379),i=o.n(n),s=o(7795),a=o.n(s),r=o(569),c=o.n(r),d=o(3565),p=o.n(d),l=o(9216),u=o.n(l),h=o(4589),f=o.n(h),m=o(5235),g={};g.styleTagTransform=f(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),i()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals},8588:function(t){var e;e=function(t){var e=function(t){return new e.lib.init(t)};function o(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function n(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var n=document.createElement("img");n.src=this.options.avatar,n.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(n):t.insertAdjacentElement("afterbegin",n)}if(!0===this.options.close){var i=document.createElement("button");i.type="button",i.setAttribute("aria-label","Close"),i.className="toast-close",i.innerHTML="&#10006;",i.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?t.insertAdjacentElement("afterbegin",i):t.appendChild(i)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=o("x",this.options),c=o("y",this.options),d="left"==this.options.position?r:"-"+r,p="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+d+","+p+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var o=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,o),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},o={top:15,bottom:15},i={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===n(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=i[t]+"px",i[t]+=r+15):!0===n(s[a],"toastify-left")?(s[a].style[t]=e[t]+"px",e[t]+=r+15):(s[a].style[t]=o[t]+"px",o[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=e():this.Toastify=e()},8624:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(8687);class i extends n.Z{constructor(){super(n.C.Error)}}},8687:(t,e,o)=>{"use strict";o.d(e,{C:()=>n,Z:()=>r});var n,i,s=o(8588),a=o.n(s);o(5082),function(t){t[t.Info=0]="Info",t[t.Warning=1]="Warning",t[t.Error=2]="Error"}(n||(n={})),function(t){t.Info="linear-gradient(to right, rgb(0,176,155), rgb(150,201,61))",t.Warning="linear-gradient(90deg, #eeee00, #dddd00)",t.Error="linear-gradient(to right, rgb(255,95,109), rgb(255,195,113))"}(i||(i={}));class r{constructor(t=n.Error){this.messageType=t}showMessage(t){const e={text:t,style:{background:this.getBackgroundColor()}};a()(e).showToast()}getBackgroundColor(){let t;switch(this.messageType){case n.Info:t=i.Info;break;case n.Error:t=i.Error;break;default:t=i.Warning}return t}}},5838:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>m});var n=o(3037),i=o(7683),s=o(5233);class a{constructor(t){if(this.clientRoot=(0,n.mv)((0,i.p0)()).withProjectKey({projectKey:"best-games"}),t){const e=(0,s.r4)(t.email,t.password);this.clientRoot=(0,n.mv)(e).withProjectKey({projectKey:"best-games"})}}getProducts(){return this.clientRoot.products().get().execute()}getProductbyID(t){return this.clientRoot.products().withId({ID:t}).get().execute()}getProductbyKey(t){return this.clientRoot.products().withKey({key:t}).get().execute()}productProjectionResponseID(t){return this.clientRoot.productProjections().withId({ID:t}).get({queryArgs:{staged:!0}}).execute()}productProjectionResponseKEY(t){return this.clientRoot.productProjections().withKey({key:t}).get({queryArgs:{staged:!0}}).execute()}}var r=o(1567),c=o(6249),d=o(4602);var p=o(928),l=o(891);const u={Strings:{NO_DATA:{"en-US":"n/a",en:"n/a",ru:"н/д"}}};var h=o(8624);class f extends p.Z{constructor(t,e){super({tag:r.Z.DIV,classNames:["product-card--s0pAM","product-card__link--bP6bY"],textContent:""}),this.LANG="en-US",this.COUNTRY="US",this.router=e,this.productKey=t,this.productApi=new a,this.configView()}configView(){this.setRouteLink(),this.createProductView()}setRouteLink(){const t=`${l._.CATALOG}/${this.productKey}`;this.getElement().addEventListener("click",(()=>this.router.setHref(t)))}createProductView(){const t=new c.Z,e=this.getElement();this.productApi.getProductbyKey(this.productKey).then((o=>{const{masterVariant:n}=o.body.masterData.current,i=n.images?n.images[0].url:"",s=t.createTagElement("img",["product-card__image--ReLtA"]);s.setAttribute("src",i),e.append(s);const a=t.createTagElement("div",["product-card__content-wrapper--QotyV"]);e.append(a);const r=o.body.masterData.current.name[this.LANG]||u.Strings.NO_DATA[this.LANG],c=t.createTagElement("span",["product-card__title--h2nFl"],r);if(a.append(c),o.body.masterData.current.description){const e=o.body.masterData.current.description[this.LANG],n=t.createTagElement("span",["product-card__description--umGvb"],e);a.append(n)}const d=t.createTagElement("span",["product-card__prices-wrapper--bYEIR"]),p=(()=>{const t={value:"",discount:""},{prices:e}=n;if(e){const o=e.filter((t=>t.country===this.COUNTRY));if(o.length>0){const{value:e}=o[0];t.value=`${(e.centAmount/100).toFixed(e.fractionDigits)}${e.currencyCode}`;const{discounted:n}=o[0];n?.value&&(t.discount=`${(n.value.centAmount/100).toFixed(n.value.fractionDigits)}${n.value.currencyCode}`)}}return t})(),l=t.createTagElement("span",["product-card__price--CA0vt"],p.value);if(d.append(l),p.discount){l.classList.add("product-card__price_discounted--mwMfR");const e=t.createTagElement("span",["product-card__discount--qqqII"],p.discount);d.append(e)}a.append(d)})).catch((t=>{(new h.Z).showMessage(t.message),this.getElement().remove()}))}}class m extends p.Z{constructor(t){super({tag:r.Z.SECTION,classNames:["catalog-view--MIS7q"],textContent:""}),this.productApi=new a,this.router=t,this.wrapper=(new c.Z).createTagElement("div",["content-wrapper--zfsyF"]),this.getCreator().addInnerElement(this.wrapper),this.configView()}setContent(t){this.wrapper.replaceChildren(""),t instanceof d.Z?this.wrapper.append(t.getElement()):this.wrapper.append(t)}configView(){this.createContent()}createContent(){this.wrapper.replaceChildren(""),this.getProducts()}getProducts(){this.productApi.getProducts().then((t=>{const e=t.body.results;this.createProductLinks(e)})).catch((t=>(new h.Z).showMessage(t.message)))}createProductLinks(t){t.forEach((t=>{if(t.key){const e=new f(t.key,this.router);this.wrapper.append(e.getElement())}}))}}},6249:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});class n{createTagElement(t,e,o=""){const n=document.createElement(t);return n.classList.add(...e),n.innerHTML=o||"",n}}}}]);