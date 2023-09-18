"use strict";(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[525],{9105:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(8081),r=n.n(a),s=n(3645),o=n.n(s),i=n(1667),d=n.n(i),A=new URL(n(8993),n.b),c=o()(r()),l=d()(A);c.push([e.id,`/* @import '../../../../style/abstract/variables/colors.scss'; */\n/* @import './src/style/helper.scss'; */\n\n.overlay_product-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background-color: rgba(41, 41, 41, 0.842);\n  position: fixed;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  height: 90%;\n  border-radius: 10px;\n  z-index: 2;\n}\n\n.product-modal {\n  padding: 5rem;\n  background-color: transparent;\n  position: absolute;\n  overflow: auto;\n  z-index: 4;\n  width: 85%;\n}\n\n@media screen and (max-width: 800px) {\n  .product-modal {\n    width: 100%;\n  }\n}\n\n/* не подтянулась переменная transparentize($color-brand-primary, 0.2) */\n.product-modal__close-icon {\n  width: 3rem;\n  height: 3rem;\n  border: 0.2rem solid rgba(166, 38, 38, 1);\n  border-radius: 10rem;\n  background-image: url(${l});\n  background-size: 30%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: absolute;\n  right: 10%;\n  top: 100px;\n  cursor: pointer;\n}\n\n.product-modal .product-modal__product-card {\n  background-color: rgba(41, 41, 41, 0.842);\n  border-radius: 9px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.product-modal__content {\n  margin: 0 auto;\n  width: 40%;\n  height: 90vh;\n}\n\n@media screen and (max-width: 1200px) {\n  .product-modal__content {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .product-modal__content {\n    width: 80%;\n  }\n}\n\n.product-modal-swiper {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  overflow: clip;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n`,""]);const m=c},5620:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(8081),r=n.n(a),s=n(3645),o=n.n(s)()(r());o.push([e.id,".swiper {\n  width: 50%;\n  height: 100%;\n}\n\n@media screen and (max-width: 800px) {\n  .swiper {\n    width: 100%;\n  }\n}\n\n.swiper-slide {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n",""]);const i=o},3226:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9367);class r extends a.Z{constructor(){super(a.C.Info)}}},7161:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R}),n(212),n(8492),n(1580);var a=n(3379),r=n.n(a),s=n(7795),o=n.n(s),i=n(569),d=n.n(i),A=n(3565),c=n.n(A),l=n(9216),m=n.n(l),p=n(4589),g=n.n(p),u=n(5620),h={};h.styleTagTransform=g(),h.setAttributes=c(),h.insert=d().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m(),r()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var w=n(9105),E={};E.styleTagTransform=g(),E.setAttributes=c(),E.insert=d().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=m(),r()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals,n(978),n(9546);var C=n(7652),I=n(8678),Z=n(1567),b=n(4602),y=n(891),v=n(213),B=n(928);const x="product-attributes--gOZW1";var N=n(6249),D=n(8624);class f{constructor(e){this.modal=document.createElement("div"),this.modalCloseBtn=document.createElement("div"),this.modalContent=document.createElement("div"),this.overlay=document.createElement("div"),this.classes=e}buildModal(e){this.overlay.classList.add("overlay_product-modal"),this.modal.classList.add("product-modal"),this.modalContent.classList.add("product-modal__content"),this.modalCloseBtn.classList.add("product-modal__close-icon"),this.setContent(e),this.appendModalElements(),this.bindEvents(),this.openModal()}setContent(e){"string"==typeof e?this.modalContent.innerHTML=e:(this.modalContent.innerHTML="",this.modalContent.appendChild(e))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.append(this.overlay)}closeModal(e){if(e.target instanceof HTMLElement){const t=e.target?.classList;(t.contains("overlay_product-modal")||t.contains("product-modal__close-icon"))&&(document.querySelector(".overlay_product-modal")?.remove(),document.body.style.overflow="")}}}var M=n(4296),Y=n(7881);class V extends f{constructor(e,t){super(e),this.observer=M.Z.getInstance(),this.images=t,this.observer?.subscribe(Y.Z.IMAGES_LOADED_TO_PRODUCT_PAGE,this.initSwiper.bind(this))}initSwiper(){new C.Z(".product-modal-swiper",{modules:[I.W_,I.tl],speed:500,direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:!0})}createProductModal(){const e=document.createElement("div");e.className="product-modal__product-card";const t=new b.Z({tag:Z.Z.DIV,classNames:["product-modal-swiper"],textContent:""}),n=new b.Z({tag:Z.Z.DIV,classNames:["swiper-pagination"],textContent:""}),a=new b.Z({tag:Z.Z.DIV,classNames:["swiper-button-prev"],textContent:""}),r=new b.Z({tag:Z.Z.DIV,classNames:["swiper-button-next"],textContent:""});return t.addInnerElement(this.createSwiperWrapper(this.images)),t.addInnerElement(a),t.addInnerElement(r),t.addInnerElement(n),e.append(t.getElement()),e}renderModal(){const e=this.createProductModal();this.buildModal(e)}createSwiperWrapper(e){const t=new b.Z({tag:Z.Z.DIV,classNames:["swiper-wrapper"],textContent:""});return e.forEach((e=>t.getElement().append(this.createSlide(e)))),t}createSlide(e){const t=new b.Z({tag:Z.Z.DIV,classNames:["swiper-slide"],textContent:""});return t.getElement().style.backgroundImage=`url(${e})`,t.getElement()}}var P=n(3226),T=n(2953);class R extends B.Z{constructor(e,t){super({tag:Z.Z.SECTION,classNames:["product-view--DjmcU"],textContent:""}),this.observer=M.Z.getInstance(),this.productId="",this.productCategory=new b.Z({tag:Z.Z.SPAN,classNames:["product-category--Fzd49"],textContent:"CATEGORY: "}),this.addButtonContainer=new b.Z({tag:Z.Z.DIV,classNames:[],textContent:""}),this.api=t.api,this.router=e,this.wrapper=(new N.Z).createTagElement("div",["content-wrapper--syQzU"]),this.getCreator().addInnerElement(this.wrapper)}initContent(e){e&&(this.productId=e),this.createAnonimCart(),this.configView()}setContent(e){this.wrapper.replaceChildren(""),e instanceof b.Z?this.wrapper.append(e.getElement()):this.wrapper.append(e)}configView(){this.wrapper.replaceChildren(""),this.renderProductCard(this.productId).then((()=>{new C.Z(".swiper",{modules:[I.W_,I.tl],speed:500,effect:"fade",direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:!0})}))}renderProductCard(e){const t=[];return this.api.getClientApi().productProjectionResponseKEY(e).then((async e=>{this.getCategory(e);const n=new b.Z({tag:Z.Z.SECTION,classNames:["product-section--tfDUP"],textContent:""}),a=new b.Z({tag:Z.Z.DIV,classNames:["swiper"],textContent:""}),r=new b.Z({tag:Z.Z.DIV,classNames:["swiper-button-next"],textContent:""}),s=new b.Z({tag:Z.Z.DIV,classNames:["swiper-button-prev"],textContent:""}),o=new b.Z({tag:Z.Z.DIV,classNames:["swiper-pagination"],textContent:""});e.body.masterVariant.images&&e.body.masterVariant.images.forEach((e=>t.push(e.url)));const i=new b.Z({tag:Z.Z.DIV,classNames:["product-info--hIRJM"],textContent:""}),d=new b.Z({tag:Z.Z.SPAN,classNames:["product-name--A7Cae"],textContent:`${e.body.name.en}`}),A=new b.Z({tag:Z.Z.SPAN,classNames:["product-price--x7_l2"],textContent:e.body.masterVariant.prices?.[1].value?`PRICE: ${(Number(e.body.masterVariant.prices?.[1].value?.centAmount)/100).toFixed(2)} ${e.body.masterVariant.prices?.[1].value?.currencyCode}`:""}),c=new b.Z({tag:Z.Z.SPAN,classNames:["product-discount-price--mylmI"],textContent:e.body.masterVariant.prices?.[1].discounted?.value?(A.getElement().classList.add("crossed--UHDFB"),`DISCOUNT PRICE: ${(Number(e.body.masterVariant.prices?.[1].discounted?.value?.centAmount)/100).toFixed(2)} ${e.body.masterVariant.prices?.[1].discounted?.value?.currencyCode}`):""}),l=new b.Z({tag:Z.Z.DIV,classNames:[x],textContent:"ATTRIBUTES:"}),m=new b.Z({tag:Z.Z.DIV,classNames:[x],textContent:`DEVELOPER: ${(()=>{const t=e.body.masterVariant.attributes?.findIndex((e=>"developer"===e.name));return void 0!==t&&t>-1?e.body.masterVariant.attributes?.[t].value?.[0]:""})()}`}),p=new b.Z({tag:Z.Z.DIV,classNames:[x],textContent:`PLAYERS QUANTITY: ${(()=>{const t=e.body.masterVariant.attributes?.findIndex((e=>"players_quantity"===e.name));return void 0!==t&&t>-1?e.body.masterVariant.attributes?.[t].value?.[0]:""})()}`}),g=new b.Z({tag:Z.Z.DIV,classNames:[x],textContent:`PLATFORM: ${(()=>{let t="";const n=e.body.masterVariant.attributes?.findIndex((e=>"Platform"===e.name));return n&&n>-1?(e.body.masterVariant.attributes?.[n].value?.forEach(((e,n)=>{t+=0===n?`${e.key} `:`/ ${e.key} `})),t):""})()}`}),u=new b.Z({tag:Z.Z.DIV,classNames:[x],textContent:`GENRE: ${(()=>{const t=e.body.masterVariant.attributes?.findIndex((e=>"genre"===e.name));return void 0!==t&&t>-1?e.body.masterVariant.attributes?.[t].value?.[0].key:""})()}`}),h=new b.Z({tag:Z.Z.DIV,classNames:[x],textContent:`RELEASE: ${(()=>{const t=e.body.masterVariant.attributes?.findIndex((e=>"release"===e.name));return void 0!==t&&t>-1?e.body.masterVariant.attributes?.[t].value?.[0]:""})()}`}),w=new b.Z({tag:Z.Z.SPAN,classNames:["product-description--DX7uU"],textContent:`DESCRIPTION: ${e.body.description?.en}`});a.addInnerElement(this.createSwiperWrapper(t)),a.addInnerElement(s),a.addInnerElement(r),a.addInnerElement(o),n.addInnerElement(a),n.addInnerElement(i),i.addInnerElement(d),i.addInnerElement(this.productCategory),i.addInnerElement(A),e.body.masterVariant.prices?.[1].discounted?.value&&i.addInnerElement(c),i.addInnerElement(w),i.addInnerElement(l),l.addInnerElement(m),l.addInnerElement(p),l.addInnerElement(g),l.addInnerElement(u),l.addInnerElement(h),e.body.masterVariant.sku&&this.addButtonContainer.addInnerElement((await this.createToCartButton(e,i)).getElement()),i.addInnerElement(this.addButtonContainer),this.wrapper.textContent="",this.wrapper.append(n.getElement())})).catch((e=>{e instanceof Error&&(new D.Z).showMessage(e.message)}))}showModal(e){new V("modal",e).renderModal()}getCategory(e){const t=e.body.categories?.[0].id;return this.api.getClientApi().getCategory(t).then((e=>{this.productCategory.getElement().textContent=`CATEGORY: ${e.body.name.ru}`})).catch((e=>{throw this.createMessagePopup("error.message"),new Error(e.message)}))}createMessagePopup(e){const t=new b.Z({tag:Z.Z.DIV,classNames:["product-view__popup--lQrvI"],textContent:e});this.getCreator().addInnerElement(this.createMainButton().getElement()),t.addInnerElement(t),t.getElement().addEventListener("click",(()=>{t.getElement().remove()}))}createMainButton(){return new v.Z(y.bm.INDEX,(()=>{this.router.setHref(y._.INDEX)}))}async createToCartButton(e,t){this.addButtonContainer.getElement().innerHTML="";let n=new v.Z("Add to cart",(async()=>{this.addToCart(e,t),n.getElement().remove()}));const a=localStorage.getItem(T.Z.ANONIM_CART_ID);return a&&await this.api.getClientApi().getCartByCartID(a).then((async a=>{const r=a.body.lineItems.filter((t=>t.productKey===e.body.key));a.body.lineItems.some((t=>t.productKey===e.body.key))&&(n=new v.Z("Remove from cart",(async()=>{this.removeFromCart(r[0].id,e,t),n.getElement().remove()})))})).catch((e=>{e instanceof Error&&(new D.Z).showMessage(e.message)})),n}removeFromCart(e,t,n){const a=localStorage.getItem(T.Z.ANONIM_CART_ID);a&&this.api.getClientApi().getCartByCartID(a).then((r=>{e&&this.api.getClientApi().removeLineItem(a,r.body.version,e).then((async()=>{n.addInnerElement((await this.createToCartButton(t,n)).getElement()),this.observer.notify(Y.Z.UPDATE_CART),this.observer.notify(Y.Z.REMOVE_FROM_CART),(new P.Z).showMessage("Item removed from cart")}))})).then((()=>{})).catch((e=>{e instanceof Error&&(new D.Z).showMessage(e.message)}))}createAnonimCart(){localStorage.getItem(T.Z.ANONIM_CART_ID)||this.api.getClientApi().createCustomerCart().then((e=>{localStorage.setItem(T.Z.ANONIM_CART_ID,`${e.body.id}`)})).catch((e=>{e instanceof Error&&(new D.Z).showMessage(e.message)}))}addToCart(e,t){const n=localStorage.getItem(T.Z.ANONIM_CART_ID);null!==n&&this.addItemToCart(n,e,t)}addItemToCart(e,t,n){this.api.getClientApi().getCartByCartID(e).then((a=>{t.body.masterVariant?.sku&&this.api.getClientApi().addItemToCartByID(e,a.body.version,t.body.masterVariant?.sku).then((async()=>{n.addInnerElement((await this.createToCartButton(t,n)).getElement()),(new P.Z).showMessage("Item added to cart"),this.observer.notify(Y.Z.UPDATE_CART),this.observer.notify(Y.Z.ADD_TO_CART)}))})).catch((e=>{e instanceof Error&&(new D.Z).showMessage(e.message)}))}createSwiperWrapper(e){const t=new b.Z({tag:Z.Z.DIV,classNames:["swiper-wrapper"],textContent:""});return e.forEach((n=>t.getElement().append(this.createSlide(n,e)))),t}createSlide(e,t){const n=new b.Z({tag:Z.Z.DIV,classNames:["swiper-slide"],textContent:""});return n.getElement().style.backgroundImage=`url(${e})`,n.getElement().addEventListener("click",(e=>{e.stopPropagation(),this.showModal(t),this.observer.notify(Y.Z.IMAGES_LOADED_TO_PRODUCT_PAGE)})),n.getElement()}}},9954:e=>{e.exports="data:application/font-woff;charset=utf-8;base64, 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"},8993:(e,t,n)=>{e.exports=n.p+"assets/ffdafe3f0eceab67b7c2.png"}}]);