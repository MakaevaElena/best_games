"use strict";(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[336],{213:(e,t,s)=>{s.d(t,{Z:()=>l});const o="link-button_disabled--Dp40F",n="selected--MHVHa",r="hide--dDtEv";var i=s(928),a=s(1567),c=s(891);class l extends i.Z{constructor(e,t,s){super({tag:a.Z.A,textContent:e,classNames:["link-button--QFx_T"]}),this.linksGroup=s,this.getElement().addEventListener("click",t),this.configView()}configView(){this.getElement().addEventListener("click",(()=>{this.markSelected()})),this.viewForLoggedUser()}markSelected(){this.linksGroup&&(this.linksGroup.forEach((e=>{e.markUnSelected()})),this.getElement().classList.add(n))}markUnSelected(){this.getElement().classList.remove(n)}hideButton(){this.getElement().classList.add(r)}disableButton(){this.getElement().classList.add(o)}enableButton(){this.getElement().classList.remove(o)}showButton(){this.getElement().classList.remove(r)}viewForLoggedUser(){"true"===localStorage.getItem("isLogin")&&this.linksGroup&&(this.linksGroup.get(c.bm.REGISTRATION)?.disableButton(),this.linksGroup.get(c.bm.LOGIN)?.disableButton())}}},5336:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var o=s(1567),n=s(4602),r=s(891),i=s(213),a=s(928);const c={"index-view":"index-view--LEth9","content-wrapper":"content-wrapper--PnS7N","promo__code-list":"promo__code-list--s9GPp","promo__code-block":"promo__code-block--mMit5","promo__code-element":"promo__code-element--NVzTQ"};var l=s(6249),d=s(8624);class m extends a.Z{constructor(e,t){super({tag:o.Z.SECTION,classNames:[c["index-view"]],textContent:""}),this.promoList=new n.Z({tag:o.Z.DIV,classNames:[c["promo__code-list"]],textContent:"Use promo codes:"}),this.wrapper=(new l.Z).createTagElement("div",[c["content-wrapper"]]),this.getCreator().addInnerElement(this.wrapper),this.router=e,this.api=t.api,this.configView()}configView(){this.createLinks(),this.renderPromoCodes()}renderPromoCodes(){this.api.getClientApi().getPromoCodes().then((e=>{e.body.results.forEach((e=>{this.renderPromoCode(e)}))})).catch((e=>{e instanceof Error&&(new d.Z).showMessage(e.message)})),this.wrapper.append(this.promoList.getElement())}renderPromoCode(e){const t=new n.Z({tag:o.Z.DIV,classNames:[c["promo__code-block"]],textContent:""}),s=new n.Z({tag:o.Z.DIV,classNames:[c["promo__code-element"]],textContent:`${e.code}`}),r=new n.Z({tag:o.Z.DIV,classNames:[c["promo__code-text"]],textContent:"for discount %"});t.addInnerElement(s),t.addInnerElement(r),this.promoList.addInnerElement(t)}setContent(e){this.getCreator().clearInnerContent(),this.getCreator().addInnerElement(e)}createLinks(){const e=(new l.Z).createTagElement("div",[c["content-wrapper"]]);this.getCreator().addInnerElement(e)}createSignInButton(){return new i.Z(r.bm.REGISTRATION,(()=>{"true"===localStorage.getItem("isLogin")?this.router.setHref(r._.INDEX):this.router.setHref(r._.REGISTRATION)}))}}}}]);