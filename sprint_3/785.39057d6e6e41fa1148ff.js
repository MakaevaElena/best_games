/*! For license information please see 785.39057d6e6e41fa1148ff.js.LICENSE.txt */
(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[785],{5235:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var s=i(8081),o=i.n(s),n=i(3645),r=i.n(n)()(o());r.push([t.id,"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n",""]);const a=r},5082:(t,e,i)=>{"use strict";var s=i(3379),o=i.n(s),n=i(7795),r=i.n(n),a=i(569),c=i.n(a),l=i(3565),h=i.n(l),d=i(9216),p=i.n(d),u=i(4589),f=i.n(u),g=i(5235),m={};m.styleTagTransform=f(),m.setAttributes=h(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),o()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals},8588:function(t){var e;e=function(t){var e=function(t){return new e.lib.init(t)};function i(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function s(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var s=document.createElement("img");s.src=this.options.avatar,s.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(s):t.insertAdjacentElement("afterbegin",s)}if(!0===this.options.close){var o=document.createElement("button");o.type="button",o.setAttribute("aria-label","Close"),o.className="toast-close",o.innerHTML="&#10006;",o.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&n>360?t.insertAdjacentElement("afterbegin",o):t.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var r=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){r.removeElement(t)}),r.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=i("x",this.options),c=i("y",this.options),l="left"==this.options.position?a:"-"+a,h="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+l+","+h+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var i=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,i),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},i={top:15,bottom:15},o={top:15,bottom:15},n=document.getElementsByClassName("toastify"),r=0;r<n.length;r++){t=!0===s(n[r],"toastify-top")?"toastify-top":"toastify-bottom";var a=n[r].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(n[r].style[t]=o[t]+"px",o[t]+=a+15):!0===s(n[r],"toastify-left")?(n[r].style[t]=e[t]+"px",e[t]+=a+15):(n[r].style[t]=i[t]+"px",i[t]+=a+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=e():this.Toastify=e()},7683:(t,e,i)=>{"use strict";i.d(e,{p0:()=>n});var s=i(9631);const o="best-games",n=()=>{const t={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:o,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",anonymousId:`best-games-${Math.floor(1e5*Math.random())}`},scopes:[`manage_project:${o}`]};return(new s.Qx).withAnonymousSessionFlow(t).withProjectKey(o).withHttpMiddleware({host:"https://api.europe-west1.gcp.commercetools.com"}).withLoggerMiddleware().build()}},5233:(t,e,i)=>{"use strict";i.d(e,{r4:()=>n});var s=i(9631);const o="best-games",n=(t,e)=>{const i={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:o,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",user:{username:t,password:e}},scopes:[`manage_project:${o}`],fetch},n={host:"https://api.europe-west1.gcp.commercetools.com",fetch};return(new s.Qx).withPasswordFlow(i).withProjectKey(o).withHttpMiddleware(n).withLoggerMiddleware().build()}},8624:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var s=i(8687);class o extends s.Z{constructor(){super(s.C.Error)}}},8687:(t,e,i)=>{"use strict";i.d(e,{C:()=>s,Z:()=>a});var s,o,n=i(8588),r=i.n(n);i(5082),function(t){t[t.Info=0]="Info",t[t.Warning=1]="Warning",t[t.Error=2]="Error"}(s||(s={})),function(t){t.Info="linear-gradient(to right, rgb(0,176,155), rgb(150,201,61))",t.Warning="linear-gradient(90deg, #eeee00, #dddd00)",t.Error="linear-gradient(to right, rgb(255,95,109), rgb(255,195,113))"}(o||(o={}));class a{constructor(t=s.Error){this.messageType=t}showMessage(t){const e={text:t,style:{background:this.getBackgroundColor()}};r()(e).showToast()}getBackgroundColor(){let t;switch(this.messageType){case s.Info:t=o.Info;break;case s.Error:t=o.Error;break;default:t=o.Warning}return t}}},785:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>k});var s,o=i(3037),n=i(7683),r=i(5233);!function(t){t.ATTRIBUTE_MASK='masterData(current(masterVariant(attributes(name="%ATTRIBUTE%" and value(key in (%VALUE%))))))',t.ATTRIBUTE_DEVELOPER_MASK='masterData(current(masterVariant(attributes(name="%ATTRIBUTE%" and value in (%VALUE%)))))',t.WHERE_PRICE_MASK='masterData(current(masterVariant(prices(country="%COUNTY%" and value(centAmount>=%MIN_PRICE%) and value(centAmount<=%MAX_PRICE%)))))',t.DEFAULT_WHERE='masterData(current(masterVariant(attributes(name>""))))'}(s||(s={}));class a{constructor(t){if(this.clientRoot=(0,o.mv)((0,n.p0)()).withProjectKey({projectKey:"best-games"}),this.MAX_PRODUCTS=500,t){const e=(0,r.r4)(t.email,t.password);this.clientRoot=(0,o.mv)(e).withProjectKey({projectKey:"best-games"})}}getProducts(){return this.clientRoot.products().get().execute()}getAllProducts(){return this.clientRoot.products().get({queryArgs:{limit:this.MAX_PRODUCTS}}).execute()}getConditionalProducts(t){const e=t||s.DEFAULT_WHERE;return this.clientRoot.products().get({queryArgs:{limit:this.MAX_PRODUCTS,where:e}}).execute()}getProductbyID(t){return this.clientRoot.products().withId({ID:t}).get().execute()}getProductbyKey(t){return this.clientRoot.products().withKey({key:t}).get().execute()}productProjectionResponseID(t){return this.clientRoot.productProjections().withId({ID:t}).get({queryArgs:{staged:!0}}).execute()}productProjectionResponseKEY(t){return this.clientRoot.productProjections().withKey({key:t}).get({queryArgs:{staged:!0}}).execute()}}var c=i(1567),l=i(6249),h=i(4602);var d=i(928),p=i(891);const u={Strings:{NO_DATA:{"en-US":"n/a",en:"n/a",ru:"н/д"},EMPTY_TEXT:{"en-US":"",en:"",ru:""}}};class f extends d.Z{constructor(t,e){super({tag:c.Z.DIV,classNames:["product-card--s0pAM","product-card__link--bP6bY"],textContent:""}),this.URL_NO_IMAGE="",this.LANG="en-US",this.COUNTRY="US",this.creator=new l.Z,this.product=t,this.router=e,this.configView()}configView(){this.setRouteLink(),this.createProductView()}setRouteLink(){const t=`${p._.CATALOG}/${this.product.key}`;this.getElement().addEventListener("click",(()=>this.router.setHref(t)))}createProductView(){const t=this.getElement(),{masterVariant:e}=this.product.masterData.current,i=this.getImageElement(e),s=this.creator.createTagElement("div",["product-card__content-wrapper--QotyV"]);t.append(i,s);const o=this.getTitleElement(),n=this.getDescriptionElement(),r=this.getPricesElement(e);s.append(o,n,r)}getPricesElement(t){const e=this.creator.createTagElement("span",["product-card__prices-wrapper--bYEIR"]),i=this.getLocalPrices(t),s=this.creator.createTagElement("span",["product-card__price--CA0vt"],i.value);if(e.append(s),i.discount){s.classList.add("product-card__price_discounted--mwMfR");const t=this.creator.createTagElement("span",["product-card__discount--qqqII"],i.discount);e.append(t)}return e}getDescriptionElement(){const t=this.product.masterData.current.description?.[this.LANG]||u.Strings.EMPTY_TEXT[this.LANG];return this.creator.createTagElement("span",["product-card__description--umGvb"],t)}getTitleElement(){const t=this.product.masterData.current.name[this.LANG]||u.Strings.NO_DATA[this.LANG];return this.creator.createTagElement("span",["product-card__title--h2nFl"],t)}getImageElement(t){const e=t.images?t.images[0].url:this.URL_NO_IMAGE,i=this.creator.createTagElement("img",["product-card__image--ReLtA"]);return i.setAttribute("src",e),i}getLocalPrices(t){const e={value:"",discount:""},{prices:i}=t;if(i){const t=i.filter((t=>t.country===this.COUNTRY));if(t.length>0){const{value:i}=t[0];e.value=`${(i.centAmount/100).toFixed(i.fractionDigits)} ${i.currencyCode}`;const{discounted:s}=t[0];s?.value&&(e.discount=`${(s.value.centAmount/100).toFixed(s.value.fractionDigits)} ${s.value.currencyCode}`)}}return e}}var g,m=i(8624),E=i(7881),T=i(4296);!function(t){t.GENGE="genre",t.PLATFORM="Platform",t.DEVELOPER="developer"}(g||(g={}));const b=g;var w=i(213);class v{constructor(t,e,i){this.callback=i,this.element=(new l.Z).createTagElement("a",["filter-tag--f0cx7"],`${t}: ${e}`),this.element.addEventListener("click",this.clickHandler.bind(this))}getElement(){return this.element}clickHandler(){this.callback()}}class y extends d.Z{constructor(){super({tag:c.Z.DIV,classNames:["filter-header--ULKrZ"],textContent:""}),this.BUTTON_TEXT="Filter",this.tagWrapper=this.createTagWrapper(),this.observer=T.Z.getInstance(),this.configView()}configView(){const t=this.createFilterButton();this.getElement().append(t.getElement(),this.tagWrapper)}createTagWrapper(){return this.tagWrapper=(new l.Z).createTagElement("div",["filter-header__tag-wrapper--Zv2pn"]),this.tagWrapper}addFilterTag(t,e,i){const s=new v(t,e,i);this.tagWrapper.append(s.getElement())}clearFilterTags(){this.tagWrapper.replaceChildren("")}createFilterButton(){return new w.Z(this.BUTTON_TEXT,(()=>{this.observer.notify(E.Z.SHOW_FILTER)}))}}class A{constructor(t,e,i=(()=>{})){this.label=t,this.filters=e,this.callback=i;const s=new l.Z,o=s.createTagElement("label",["filter-checkbox__label--L72qn"],this.label);this.checkbox=s.createTagElement("input",["filter-checkbox--Ehil7"]),this.checkbox.setAttribute("type","checkbox"),e.includes(this.label)&&this.checkbox.setAttribute("checked",""),o.prepend(this.checkbox),this.element=o}getElement(){return this.element}updateSource(){const t=this.filters.indexOf(this.label);this.checkbox.checked&&t<0&&(console.log(`Added ${this.label}`),this.filters.push(this.label)),!this.checkbox.checked&&t>=0&&(console.log(`Removed ${this.label}`),this.filters.splice(t))}}const C="filter-popup__group--o_qHh",P="filter-popup__group-legend--Cm2NV";var L;!function(t){t.ENTER="Enter",t.NUMPAD_ENTER="NumpadEnter",t.ESC="Escape"}(L||(L={}));class _{constructor(t,e){this.filterInputs=[],this.BUTTON_APPLY_TEXT="Apply",this.TITLE="Filter",this.tagCreator=new l.Z,this.observer=T.Z.getInstance(),this.element=this.tagCreator.createTagElement("dialog",["filter-popup--FOGM1"]),this.usedFilter=e,this.filterData=t,this.configView(),this.configClosing()}getDialog(){return this.element}configView(){const t=this.tagCreator.createTagElement("div",["filter-popup__wrapper--cf0us"]),e=this.tagCreator.createTagElement("span",["filter-popup__title--_mmc9"],this.TITLE);t.append(e),t.append(this.createGroupGenre()),t.append(this.createGroupPlatform()),t.append(this.createGroupDeveloper());const i=this.createApplyButton();t.append(i.getElement());const s=this.createCloseButton();t.append(s),this.element.append(t)}createCloseButton(){const t=this.tagCreator.createTagElement("a",["filter-popup__close-icon--CenEx"]);return t.addEventListener("click",(()=>this.getDialog().remove())),t}createApplyButton(){return new w.Z(this.BUTTON_APPLY_TEXT,(()=>{this.filterInputs.forEach((t=>t.updateSource())),this.observer.notify(E.Z.UPDATE_CATALOG_CARDS),this.observer.notify(E.Z.UPDATE_FILTER_TAGS),this.getDialog().remove()}))}createGroupDeveloper(){const t=this.tagCreator.createTagElement("fieldset",[C]),e=this.tagCreator.createTagElement("legend",[P],b.DEVELOPER);return t.append(e),this.filterData[b.DEVELOPER].forEach((e=>{const i=new A(e,this.usedFilter[b.DEVELOPER]);this.filterInputs.push(i),t.append(i.getElement())})),t}createGroupPlatform(){const t=this.tagCreator.createTagElement("fieldset",[C]),e=this.tagCreator.createTagElement("legend",[P],b.PLATFORM);return t.append(e),this.filterData[b.PLATFORM].forEach((e=>{const i=new A(e,this.usedFilter[b.PLATFORM]);this.filterInputs.push(i),t.append(i.getElement())})),t}createGroupGenre(){const t=this.tagCreator.createTagElement("fieldset",[C]),e=this.tagCreator.createTagElement("legend",[P],b.GENGE);return t.append(e),this.filterData[b.GENGE].forEach((e=>{const i=new A(e,this.usedFilter[b.GENGE]);this.filterInputs.push(i),t.append(i.getElement())})),t}configClosing(){const t=this.onCloseDialog.bind(this);this.element.addEventListener("click",t),this.element.addEventListener("keydown",t)}onCloseDialog(t){t instanceof KeyboardEvent&&t.code===L.ESC&&this.element.remove(),t instanceof MouseEvent&&t.target instanceof HTMLDialogElement&&this.element.remove()}}class x{constructor(t){this.filterData={genre:[],Platform:[],developer:[]},this.usedFilter={genre:[],Platform:[],developer:[]},this.filterHeader=new y,this.initiated=!1,this.observer=T.Z.getInstance(),this.productApi=t,this.getFilterData(),this.createFilterTags(),this.observer.subscribe(E.Z.SHOW_FILTER,this.showFilterPopup.bind(this)),this.observer.subscribe(E.Z.UPDATE_FILTER_TAGS,this.createFilterTags.bind(this))}getFilterData(){this.productApi.getAllProducts().then((t=>{const{results:e}=t.body;e.forEach((t=>{const{attributes:e}=t.masterData.current.masterVariant;e&&e.forEach((t=>{t.name===b.GENGE&&this.filterData[b.GENGE].push(t.value[0].key),t.name===b.PLATFORM&&this.filterData[b.PLATFORM].push(t.value[0].key),t.name===b.DEVELOPER&&this.filterData[b.DEVELOPER].push(t.value[0])}))})),this.filterData.genre=Array.from(new Set(this.filterData.genre)),this.filterData.Platform=Array.from(new Set(this.filterData.Platform)),this.filterData.developer=Array.from(new Set(this.filterData.developer)),this.initiated=!0})).catch((t=>(new m.Z).showMessage(t.message)))}isInit(){return this.initiated}getFilterHeaderElement(){return this.filterHeader.getCreator().getElement()}showFilterPopup(){const t=new _(this.filterData,this.usedFilter).getDialog();document.body.prepend(t),t.showModal()}createFilterTags(){this.filterHeader.clearFilterTags(),this.usedFilter.genre.forEach((t=>{this.filterHeader.addFilterTag(b.GENGE,t,this.deleteFilter.bind(this,this.usedFilter.genre,t))})),this.usedFilter.Platform.forEach((t=>{this.filterHeader.addFilterTag(b.PLATFORM,t,this.deleteFilter.bind(this,this.usedFilter.Platform,t))})),this.usedFilter.developer.forEach((t=>{this.filterHeader.addFilterTag(b.DEVELOPER,t,this.deleteFilter.bind(this,this.usedFilter.developer,t))}))}deleteFilter(t,e){const i=t.indexOf(e);i>=0&&t.splice(i),this.observer.notify(E.Z.UPDATE_CATALOG_CARDS),this.observer.notify(E.Z.UPDATE_FILTER_TAGS)}getWhereCondition(){const t=[],e=[];return this.usedFilter.genre.forEach((t=>{e.push(`"${t}"`)})),e.length>0&&t.push(s.ATTRIBUTE_MASK.replace("%ATTRIBUTE%",b.GENGE).replace("%VALUE%",e.join(", "))),e.length=0,this.usedFilter.Platform.forEach((t=>{e.push(`"${t}"`)})),e.length>0&&t.push(s.ATTRIBUTE_MASK.replace("%ATTRIBUTE%",b.PLATFORM).replace("%VALUE%",e.join(", "))),e.length=0,this.usedFilter.developer.forEach((t=>{e.push(`"${t}"`)})),e.length>0&&t.push(s.ATTRIBUTE_DEVELOPER_MASK.replace("%ATTRIBUTE%",b.DEVELOPER).replace("%VALUE%",e.join(", "))),t.join(" and ")}}class k extends d.Z{constructor(t){super({tag:c.Z.SECTION,classNames:["catalog-view--MIS7q"],textContent:""}),this.productApi=new a,this.observer=T.Z.getInstance(),this.filter=new x(this.productApi),this.router=t,this.observer.subscribe(E.Z.SHOW_FILTER,this.showFilterPopup.bind(this)),this.observer.subscribe(E.Z.UPDATE_CATALOG_CARDS,this.recallProductCards.bind(this)),this.cardsWrapper=(new l.Z).createTagElement("div",["content-wrapper--zfsyF"]),this.getCreator().addInnerElement(this.cardsWrapper),this.configView()}showFilterPopup(){console.log("Show filter popup!")}recallProductCards(){this.getConditionalProducts()}setContent(t){this.cardsWrapper.replaceChildren(""),t instanceof h.Z?this.cardsWrapper.append(t.getElement()):this.cardsWrapper.append(t)}configView(){this.createContent()}createContent(){const t=this.filter.getFilterHeaderElement();this.getElement().append(t,this.cardsWrapper),this.getConditionalProducts()}getProducts(){this.productApi.getProducts().then((t=>{const e=t.body.results;this.createProductCards(e)})).catch((t=>(new m.Z).showMessage(t.message)))}getConditionalProducts(){const t=this.filter.getWhereCondition();this.productApi.getConditionalProducts(t).then((t=>{const e=t.body.results;this.createProductCards(e)})).catch((t=>(new m.Z).showMessage(t.message)))}createProductCards(t){this.cardsWrapper.replaceChildren(""),t.forEach((t=>{if(t.key){const e=new f(t,this.router);this.cardsWrapper.append(e.getElement())}}))}}},6249:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});class s{createTagElement(t,e,i=""){const s=document.createElement(t);return s.classList.add(...e),s.innerHTML=i||"",s}}}}]);