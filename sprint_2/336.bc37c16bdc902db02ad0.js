"use strict";(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[336],{336:(e,t,n)=>{n.d(t,{getView:()=>l});var r=n(567),a=n(249),i=n(891),s=n(213),o=n(928);const c={"index-view":"index-view--LEth9","links-wrapper":"links-wrapper--gNzWO"};class g extends o.Z{constructor(e){super({tag:r.Z.SECTION,classNames:Object.values(c),textContent:""}),this.router=e,this.configView()}configView(){this.createLinks()}setContent(e){this.getCreator().clearInnerContent(),this.getCreator().addInnerElement(e)}createLinks(){const e=(new a.Z).createTagElement("div",[c["links-wrapper"]]),t=this.createLogInButton(),n=this.createSignInButton();e.append(t.getElement(),n.getElement()),this.getCreator().addInnerElement(e)}createLogInButton(){return new s.Z(i.bm.LOGIN,(()=>{"true"===localStorage.getItem("isLogin")?this.router.navigate(i._.INDEX):this.router.navigate(i._.LOGIN)}))}createSignInButton(){return new s.Z(i.bm.REGISTRATION,(()=>{"true"===localStorage.getItem("isLogin")?this.router.navigate(i._.INDEX):this.router.navigate(i._.REGISTRATION)}))}}function l(e){return new g(e)}},249:(e,t,n)=>{n.d(t,{Z:()=>r});class r{createTagElement(e,t,n=""){const r=document.createElement(e);return r.classList.add(...t),r.innerHTML=n||"",r}}}}]);