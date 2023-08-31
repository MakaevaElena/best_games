/*! For license information please see 106.102baf2c1b1bbdd5099f.js.LICENSE.txt */
(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[106],{5235:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var i=s(8081),o=s.n(i),n=s(3645),a=s.n(n)()(o());a.push([t.id,"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n",""]);const r=a},5082:(t,e,s)=>{"use strict";var i=s(3379),o=s.n(i),n=s(7795),a=s.n(n),r=s(569),l=s.n(r),d=s(3565),p=s.n(d),m=s(9216),c=s.n(m),h=s(4589),u=s.n(h),f=s(5235),g={};g.styleTagTransform=u(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals},8588:function(t){var e;e=function(t){var e=function(t){return new e.lib.init(t)};function s(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function i(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(i):t.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var o=document.createElement("button");o.type="button",o.setAttribute("aria-label","Close"),o.className="toast-close",o.innerHTML="&#10006;",o.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&n>360?t.insertAdjacentElement("afterbegin",o):t.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=s("x",this.options),l=s("y",this.options),d="left"==this.options.position?r:"-"+r,p="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+d+","+p+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var s=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,s),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},s={top:15,bottom:15},o={top:15,bottom:15},n=document.getElementsByClassName("toastify"),a=0;a<n.length;a++){t=!0===i(n[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=n[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(n[a].style[t]=o[t]+"px",o[t]+=r+15):!0===i(n[a],"toastify-left")?(n[a].style[t]=e[t]+"px",e[t]+=r+15):(n[a].style[t]=s[t]+"px",s[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=e():this.Toastify=e()},8624:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(8687);class o extends i.Z{constructor(){super(i.C.Error)}}},8687:(t,e,s)=>{"use strict";s.d(e,{C:()=>i,Z:()=>r});var i,o,n=s(8588),a=s.n(n);s(5082),function(t){t[t.Info=0]="Info",t[t.Warning=1]="Warning",t[t.Error=2]="Error"}(i||(i={})),function(t){t.Info="linear-gradient(to right, rgb(0,176,155), rgb(150,201,61))",t.Warning="linear-gradient(90deg, #eeee00, #dddd00)",t.Error="linear-gradient(to right, rgb(255,95,109), rgb(255,195,113))"}(o||(o={}));class r{constructor(t=i.Error){this.messageType=t}showMessage(t){const e={text:t,style:{background:this.getBackgroundColor()}};a()(e).showToast()}getBackgroundColor(){let t;switch(this.messageType){case i.Info:t=o.Info;break;case i.Error:t=o.Error;break;default:t=o.Warning}return t}}},7106:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>N});var i=s(5429),o=s(1567),n=s(4602),a=s(928);const r={"login-view":"login-view--xYXHF","registration-field":"registration-field--rfaSb","login-title":"login-title--ZnrER","registration-field__title":"registration-field__title--IH0AX","login-subtitle":"login-subtitle--Bhb9b","login-form":"login-form--JFEMt","login-form__show-password":"login-form__show-password--r1rU6","login-form__field":"login-form__field--HsqZS","password-block":"password-block--dqC0n",button:"button--KUb8s"};var l=s(4296),d=s(7881),p=s(891),m=s(2953),c=s(8624);const h=/(?=.*[0-9])/g,u=/(?=.*[a-z])/,f=/(?=.*[A-Z])/,g=/(?=.*[!@#$%^&*])/,E=/[0-9a-zA-Z!@#$%^&*]{8,}/,w=/[^\s]/gim,b=/[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;var y;!function(t){t.FILL_EMAIL="Please fill the field email.",t.FILL_PASSWORD="Please fill the field password.",t.MAIL_NOT_REGISTERED="This email address has not been registered.",t.SUCCESS_LOGIN="Welcome! You are logged!.",t.PASSWORD_IS_WRONG="Password is wrong!",t.EMAIL_CONTAIN_WHITESPACE="Email address must not contain leading or trailing whitespace.",t.EMAIL_WRONG_FORMAT="Email address must be properly formatted (e.g., user@example.com).",t.PASSWORD_CONTAIN_WHITESPACE="Password must not contain leading or trailing whitespace.",t.PASSWORD_NOT_CONTAIN_DIGIT="Password must contain at least one digit (0-9).",t.PASSWORD_NOT_CONTAIN_LOWER_LETTER="Password must contain at least one lowercase letter (a-z).",t.PASSWORD_NOT_CONTAIN_UPPER_LETTER="Password must contain at least one uppercase letter (A-Z).",t.PASSWORD_NOT_CONTAIN_SIMBOLS="Password must contain at least one special character (e.g., !@#$%^&*).",t.PASSWORD_LENGTH_NOT_ENOUTH="Password must be at least 8 characters long."}(y||(y={}));class N extends a.Z{constructor(t){super({tag:o.Z.SECTION,classNames:[r["login-view"]],textContent:""}),this.loginEmail=new n.Z({tag:o.Z.INPUT,classNames:[r["login-form__field"]],textContent:"email"}),this.loginPassword=new n.Z({tag:o.Z.INPUT,classNames:[r["login-form__field"]],textContent:"password"}),this.passwordElement=this.loginPassword.getElement(),this.emailElement=this.loginEmail.getElement(),this.router=t,this.observer=l.Z.getInstance(),this.observer?.subscribe(d.Z.LOGOUT,this.updateLoginPage.bind(this)),this.anonimApi=new i.Z,"true"===localStorage.getItem("isLogin")?this.router.navigate(p._.INDEX):this.configView()}configView(){this.renderForm()}updateLoginPage(){this.getCreator().clearInnerContent(),this.configView(),this.anonimApi=new i.Z}renderForm(){const t=new n.Z({tag:o.Z.SPAN,classNames:[r["login-title"]],textContent:"EXISTING CUSTOMERS"}),e=new n.Z({tag:o.Z.SPAN,classNames:[r["login-subtitle"]],textContent:"Sign Into Best Games"}),s=new n.Z({tag:o.Z.DIV,classNames:[r["login-form"]],textContent:""}),i=new n.Z({tag:o.Z.DIV,classNames:[r["password-block"]],textContent:""}),a=new n.Z({tag:o.Z.BUTTON,classNames:[r.button,r["login-form__show-password"]],textContent:"SHOW"}),l=new n.Z({tag:o.Z.BUTTON,classNames:[r.button],textContent:"SIGN IN"}),d=new n.Z({tag:o.Z.DIV,classNames:[r["registration-field"]],textContent:""}),m=new n.Z({tag:o.Z.SPAN,classNames:[r["registration-field__title"]],textContent:"NEW CUSTOMERS"}),c=new n.Z({tag:o.Z.BUTTON,classNames:[r["register-link"],r.button],textContent:"REGISTER NOW"});s.getElement().setAttribute("action","#"),this.emailElement.setAttribute("type","email"),this.emailElement.setAttribute("name","email"),this.emailElement.setAttribute("placeholder","email"),this.emailElement.setAttribute("Required","true"),this.passwordElement.setAttribute("type","password"),this.passwordElement.setAttribute("name","password"),this.passwordElement.setAttribute("placeholder","password"),this.passwordElement.setAttribute("Required","true"),this.emailElement.addEventListener("input",(()=>this.validateEmail())),this.passwordElement.addEventListener("input",(()=>this.validatePassword())),a.getElement().addEventListener("click",(t=>this.showPassword(t))),l.getElement().addEventListener("click",(t=>this.submitLogin(t))),c.getElement().addEventListener("click",(()=>{this.router.navigate(p._.REGISTRATION)})),s.addInnerElement(t),s.addInnerElement(e),s.addInnerElement(this.loginEmail),i.addInnerElement(this.loginPassword),i.addInnerElement(a),s.addInnerElement(i),s.addInnerElement(l),d.addInnerElement(m),d.addInnerElement(c),this.getCreator().addInnerElement(s),this.getCreator().addInnerElement(d)}showPassword(t){t.preventDefault(),"password"===this.passwordElement.getAttribute("type")?this.passwordElement.setAttribute("type","text"):this.passwordElement.setAttribute("type","password")}async submitLogin(t){t.preventDefault();const e=this.emailElement.value,s=this.passwordElement.value;if(e||(this.emailElement.setCustomValidity(y.FILL_EMAIL),this.emailElement.reportValidity()),s||(this.passwordElement.setCustomValidity(y.FILL_PASSWORD),this.passwordElement.reportValidity()),0!==e.length&&0!==s.length&&this.validatePassword()&&this.validateEmail()){if(void 0!==e)try{if(0===(await this.anonimApi.checkCustomerExist(e)).body.results.length)return this.emailElement.setCustomValidity(y.MAIL_NOT_REGISTERED),void this.emailElement.reportValidity()}catch(t){t instanceof Error&&(new c.Z).showMessage(t.message)}this.anonimApi.getCustomer({email:e,password:s}).then((t=>{t.body.customer&&(window.localStorage.setItem("isLogin","true"),window.localStorage.setItem(m.Z.MAIL_ADDRESS,e),this.observer.notify(d.Z.LOGIN),this.router.navigate(p._.INDEX),this.userApi=new i.Z({email:e,password:s}),this.userApi.returnCustomerById(t.body.customer.id))})).catch((()=>{this.passwordElement.setCustomValidity(y.PASSWORD_IS_WRONG),this.passwordElement.reportValidity()}))}}validateEmail(){const{value:t}=this.emailElement;switch(this.emailElement.setCustomValidity(""),!0){case!w.test(t):case t.indexOf(" ")>-1:this.emailElement.setCustomValidity(y.EMAIL_CONTAIN_WHITESPACE);break;case!b.test(t):this.emailElement.setCustomValidity(y.EMAIL_WRONG_FORMAT);break;default:return this.emailElement.setCustomValidity(""),!0}return this.emailElement.reportValidity(),!1}validatePassword(){const{value:t}=this.passwordElement;switch(this.passwordElement.setCustomValidity(""),!0){case!w.test(t):this.passwordElement.setCustomValidity(y.PASSWORD_CONTAIN_WHITESPACE);break;case!h.test(t):this.passwordElement.setCustomValidity(y.PASSWORD_NOT_CONTAIN_DIGIT);break;case!u.test(t):this.passwordElement.setCustomValidity(y.PASSWORD_NOT_CONTAIN_LOWER_LETTER);break;case!f.test(t):this.passwordElement.setCustomValidity(y.PASSWORD_NOT_CONTAIN_UPPER_LETTER);break;case!g.test(t):this.passwordElement.setCustomValidity(y.PASSWORD_NOT_CONTAIN_SIMBOLS);break;case!E.test(t):this.passwordElement.setCustomValidity(y.PASSWORD_LENGTH_NOT_ENOUTH);break;default:return this.passwordElement.setCustomValidity(""),!0}return this.passwordElement.reportValidity(),!1}}},2953:(t,e,s)=>{"use strict";var i;s.d(e,{Z:()=>o}),function(t){t.MAIL_ADDRESS="mailAddress"}(i||(i={}));const o=i}}]);