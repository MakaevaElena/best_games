"use strict";(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[360],{4068:(t,e,r)=>{r.d(e,{p0:()=>a});var s=r(9631);class i{static newGuid(){const t=[];return t.push(i.getHexRandom(268435456,4294967295)),t.push(i.getHexRandom(4096,65535)),t.push(i.getHexRandom(4096,65535)),t.push(i.getHexRandom(4096,65535)),t.push(i.getHexRandom(17592186044416,0xffffffffffff)),t.join("-")}static getHexRandom(t,e){return Math.floor(t+Math.random()*(e+1-t)).toString(16)}}const n="best-games",a=()=>{const t={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:n,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",anonymousId:`best-games-${i.newGuid()}`},scopes:[`manage_project:${n}`]};return(new s.Qx).withAnonymousSessionFlow(t).withProjectKey(n).withHttpMiddleware({host:"https://api.europe-west1.gcp.commercetools.com"}).withLoggerMiddleware().build()}},5233:(t,e,r)=>{r.d(e,{r4:()=>n});var s=r(9631);const i="best-games",n=(t,e)=>{const r={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:i,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",user:{username:t,password:e}},scopes:[`manage_project:${i}`],fetch},n={host:"https://api.europe-west1.gcp.commercetools.com",fetch};return(new s.Qx).withPasswordFlow(r).withProjectKey(i).withHttpMiddleware(n).withLoggerMiddleware().build()}},7360:(t,e,r)=>{r.r(e),r.d(e,{default:()=>$});var s,i=r(3037),n=r(4068),a=r(5233);!function(t){t.ATTRIBUTE_MASK='masterData(current(masterVariant(attributes(name="%ATTRIBUTE%" and value(key in (%VALUE%))))))',t.ATTRIBUTE_DEVELOPER_MASK='masterData(current(masterVariant(attributes(name="%ATTRIBUTE%" and value in (%VALUE%)))))',t.WHERE_PRICE_MASK='masterData(current(masterVariant(prices(country="%COUNTY%" and value(centAmount>=%MIN_PRICE%) and value(centAmount<=%MAX_PRICE%)))))'}(s||(s={}));class c{constructor(t){if(this.clientRoot=(0,i.mv)((0,n.p0)()).withProjectKey({projectKey:"best-games"}),this.MAX_PRODUCTS=500,t){const e=(0,a.r4)(t.email,t.password);this.clientRoot=(0,i.mv)(e).withProjectKey({projectKey:"best-games"})}}getProducts(){return this.clientRoot.products().get().execute()}getAllProducts(){return this.clientRoot.products().get({queryArgs:{limit:this.MAX_PRODUCTS}}).execute()}getConditionalProducts(t){const e={limit:this.MAX_PRODUCTS};return t&&(e.where=t),this.clientRoot.products().get({queryArgs:e}).execute()}getSearchProducts(t){return this.clientRoot.productProjections().search().get({queryArgs:{"text.en":t,fuzzy:!0,facet:["description.en"],limit:this.MAX_PRODUCTS}}).execute()}getProductProjections(t){return this.clientRoot.productProjections().search().get({queryArgs:{"text.en":t,fuzzy:!0,facet:["description.en"],limit:this.MAX_PRODUCTS}}).execute()}getProductbyID(t){return this.clientRoot.products().withId({ID:t}).get().execute()}getProductbyKey(t){return this.clientRoot.products().withKey({key:t}).get().execute()}productProjectionResponseID(t){return this.clientRoot.productProjections().withId({ID:t}).get({queryArgs:{staged:!0}}).execute()}productProjectionResponseKEY(t){return this.clientRoot.productProjections().withKey({key:t}).get({queryArgs:{staged:!0}}).execute()}}var o=r(1567),h=r(6249),l=r(4602);const u="product-card--s0pAM",d="product-card__link--bP6bY",p="product-card__image--ReLtA",g="product-card__content-wrapper--QotyV",E="product-card__title--h2nFl",m="product-card__description--umGvb",A="product-card__prices-wrapper--bYEIR",T="product-card__price--CA0vt",f="product-card__discount--qqqII",P="product-card__price_discounted--mwMfR";var _=r(928),C=r(891);const D={Strings:{NO_DATA:{"en-US":"n/a",en:"n/a",ru:"н/д"},EMPTY_TEXT:{"en-US":"",en:"",ru:""}}};class w extends _.Z{constructor(t,e){super({tag:o.Z.DIV,classNames:[u,d],textContent:""}),this.URL_NO_IMAGE="",this.LANG="en-US",this.COUNTRY="US",this.creator=new h.Z,this.product=t,this.router=e,this.configView()}configView(){this.setRouteLink(),this.createProductView()}setRouteLink(){const t=`${C._.CATALOG}/${this.product.key}`;this.getElement().addEventListener("click",(()=>this.router.setHref(t)))}createProductView(){const t=this.getElement(),{masterVariant:e}=this.product.masterData.current,r=this.getImageElement(e),s=this.creator.createTagElement("div",[g]);t.append(r,s);const i=this.getTitleElement(),n=this.getDescriptionElement(),a=this.getPricesElement(e);s.append(i,n,a)}getPricesElement(t){const e=this.creator.createTagElement("span",[A]),r=this.getLocalPrices(t),s=this.creator.createTagElement("span",[T],r.value);if(e.append(s),r.discount){s.classList.add(P);const t=this.creator.createTagElement("span",[f],r.discount);e.append(t)}return e}getDescriptionElement(){const t=this.product.masterData.current.description?.[this.LANG]||D.Strings.EMPTY_TEXT[this.LANG];return this.creator.createTagElement("span",[m],t)}getTitleElement(){const t=this.product.masterData.current.name[this.LANG]||D.Strings.NO_DATA[this.LANG];return this.creator.createTagElement("span",[E],t)}getImageElement(t){const e=t.images?t.images[0].url:this.URL_NO_IMAGE,r=this.creator.createTagElement("img",[p]);return r.setAttribute("src",e),r}getLocalPrices(t){const e={value:"",discount:""},{prices:r}=t;if(r){const t=r.filter((t=>t.country===this.COUNTRY));if(t.length>0){const{value:r}=t[0];e.value=`${(r.centAmount/100).toFixed(r.fractionDigits)} ${r.currencyCode}`;const{discounted:s}=t[0];s?.value&&(e.discount=`${(s.value.centAmount/100).toFixed(s.value.fractionDigits)} ${s.value.currencyCode}`)}}return e}}var R,v=r(8624),L=r(7881),b=r(4296);!function(t){t.GENGE="genre",t.PLATFORM="Platform",t.DEVELOPER="developer"}(R||(R={}));const y=R;var S=r(213);class N{constructor(t,e,r){this.callback=r,this.element=(new h.Z).createTagElement("a",["filter-tag--f0cx7"],`${t}: ${e}`),this.element.addEventListener("click",this.clickHandler.bind(this))}getElement(){return this.element}clickHandler(){this.callback()}}class F extends _.Z{constructor(){super({tag:o.Z.DIV,classNames:["filter-header--ULKrZ"],textContent:""}),this.BUTTON_TEXT="Filter",this.tagWrapper=this.createTagWrapper(),this.observer=b.Z.getInstance(),this.configView()}configView(){const t=this.createFilterButton();this.getElement().append(t.getElement(),this.tagWrapper)}createTagWrapper(){return this.tagWrapper=(new h.Z).createTagElement("div",["filter-header__tag-wrapper--Zv2pn"]),this.tagWrapper}addFilterTag(t,e,r){const s=new N(t,e,r);this.tagWrapper.append(s.getElement())}clearFilterTags(){this.tagWrapper.replaceChildren("")}createFilterButton(){return new S.Z(this.BUTTON_TEXT,(()=>{this.observer.notify(L.Z.SHOW_FILTER)}))}}class I{constructor(t,e,r=(()=>{})){this.label=t,this.filters=e,this.callback=r;const s=new h.Z,i=s.createTagElement("label",["filter-checkbox__label--L72qn"],this.label);this.checkbox=s.createTagElement("input",["filter-checkbox--Ehil7"]),this.checkbox.setAttribute("type","checkbox"),e.includes(this.label)&&this.checkbox.setAttribute("checked",""),i.prepend(this.checkbox),this.element=i}getElement(){return this.element}updateSource(){const t=this.filters.indexOf(this.label);this.checkbox.checked&&t<0&&this.filters.push(this.label),!this.checkbox.checked&&t>=0&&this.filters.splice(t)}}const O="filter-popup__group--o_qHh",G="filter-popup__group-legend--Cm2NV";var M;!function(t){t.ENTER="Enter",t.NUMPAD_ENTER="NumpadEnter",t.ESC="Escape"}(M||(M={}));class U{constructor(t,e){this.filterInputs=[],this.BUTTON_APPLY_TEXT="Apply",this.TITLE="Filter",this.tagCreator=new h.Z,this.observer=b.Z.getInstance(),this.element=this.tagCreator.createTagElement("dialog",["filter-popup--FOGM1"]),this.usedFilter=e,this.filterData=t,this.configView(),this.configClosing()}getDialog(){return this.element}configView(){const t=this.tagCreator.createTagElement("div",["filter-popup__wrapper--cf0us"]),e=this.tagCreator.createTagElement("span",["filter-popup__title--_mmc9"],this.TITLE);t.append(e),t.append(this.createGroupGenre()),t.append(this.createGroupPlatform()),t.append(this.createGroupDeveloper());const r=this.createApplyButton();t.append(r.getElement());const s=this.createCloseButton();t.append(s),this.element.append(t)}createCloseButton(){const t=this.tagCreator.createTagElement("a",["filter-popup__close-icon--CenEx"]);return t.addEventListener("click",(()=>this.getDialog().remove())),t}createApplyButton(){return new S.Z(this.BUTTON_APPLY_TEXT,(()=>{this.filterInputs.forEach((t=>t.updateSource())),this.observer.notify(L.Z.UPDATE_CATALOG_CARDS),this.observer.notify(L.Z.UPDATE_FILTER_TAGS),this.getDialog().remove()}))}createGroupDeveloper(){const t=this.tagCreator.createTagElement("fieldset",[O]),e=this.tagCreator.createTagElement("legend",[G],y.DEVELOPER);return t.append(e),this.filterData[y.DEVELOPER].forEach((e=>{const r=new I(e,this.usedFilter[y.DEVELOPER]);this.filterInputs.push(r),t.append(r.getElement())})),t}createGroupPlatform(){const t=this.tagCreator.createTagElement("fieldset",[O]),e=this.tagCreator.createTagElement("legend",[G],y.PLATFORM);return t.append(e),this.filterData[y.PLATFORM].forEach((e=>{const r=new I(e,this.usedFilter[y.PLATFORM]);this.filterInputs.push(r),t.append(r.getElement())})),t}createGroupGenre(){const t=this.tagCreator.createTagElement("fieldset",[O]),e=this.tagCreator.createTagElement("legend",[G],y.GENGE);return t.append(e),this.filterData[y.GENGE].forEach((e=>{const r=new I(e,this.usedFilter[y.GENGE]);this.filterInputs.push(r),t.append(r.getElement())})),t}configClosing(){const t=this.onCloseDialog.bind(this);this.element.addEventListener("click",t),this.element.addEventListener("keydown",t)}onCloseDialog(t){t instanceof KeyboardEvent&&t.code===M.ESC&&this.element.remove(),t instanceof MouseEvent&&t.target instanceof HTMLDialogElement&&this.element.remove()}}class x{constructor(t){this.filterData=this.getEmptyFilterArray(),this.usedFilter=this.getEmptyFilterArray(),this.filterHeader=new F,this.initiated=!1,this.observer=b.Z.getInstance(),this.productApi=t,this.getFilterData(),this.createFilterTags(),this.observer.subscribe(L.Z.SHOW_FILTER,this.showFilterPopup.bind(this)),this.observer.subscribe(L.Z.UPDATE_FILTER_TAGS,this.createFilterTags.bind(this))}getFilterData(){this.productApi.getAllProducts().then((t=>{const{results:e}=t.body;e.forEach((t=>{const{attributes:e}=t.masterData.current.masterVariant;e&&e.forEach((t=>{t.name===y.GENGE&&this.filterData[y.GENGE].push(t.value[0].key),t.name===y.PLATFORM&&this.filterData[y.PLATFORM].push(t.value[0].key),t.name===y.DEVELOPER&&this.filterData[y.DEVELOPER].push(t.value[0])}))})),this.filterData.genre=Array.from(new Set(this.filterData.genre)),this.filterData.Platform=Array.from(new Set(this.filterData.Platform)),this.filterData.developer=Array.from(new Set(this.filterData.developer)),this.initiated=!0})).catch((t=>(new v.Z).showMessage(t.message)))}isInit(){return this.initiated}getFilterHeaderElement(){return this.filterHeader.getCreator().getElement()}getEmptyFilterArray(){return{genre:[],Platform:[],developer:[]}}clearFilters(){this.usedFilter=this.getEmptyFilterArray(),this.createFilterTags()}showFilterPopup(){const t=new U(this.filterData,this.usedFilter).getDialog();document.body.prepend(t),t.showModal()}createFilterTags(){this.filterHeader.clearFilterTags(),this.usedFilter.genre.forEach((t=>{this.filterHeader.addFilterTag(y.GENGE,t,this.deleteFilter.bind(this,this.usedFilter.genre,t))})),this.usedFilter.Platform.forEach((t=>{this.filterHeader.addFilterTag(y.PLATFORM,t,this.deleteFilter.bind(this,this.usedFilter.Platform,t))})),this.usedFilter.developer.forEach((t=>{this.filterHeader.addFilterTag(y.DEVELOPER,t,this.deleteFilter.bind(this,this.usedFilter.developer,t))}))}deleteFilter(t,e){const r=t.indexOf(e);r>=0&&t.splice(r),this.observer.notify(L.Z.UPDATE_CATALOG_CARDS),this.observer.notify(L.Z.UPDATE_FILTER_TAGS)}getWhereCondition(){const t=[],e=[];return this.usedFilter.genre.forEach((t=>{e.push(`"${t}"`)})),e.length>0&&t.push(s.ATTRIBUTE_MASK.replace("%ATTRIBUTE%",y.GENGE).replace("%VALUE%",e.join(", "))),e.length=0,this.usedFilter.Platform.forEach((t=>{e.push(`"${t}"`)})),e.length>0&&t.push(s.ATTRIBUTE_MASK.replace("%ATTRIBUTE%",y.PLATFORM).replace("%VALUE%",e.join(", "))),e.length=0,this.usedFilter.developer.forEach((t=>{e.push(`"${t}"`)})),e.length>0&&t.push(s.ATTRIBUTE_DEVELOPER_MASK.replace("%ATTRIBUTE%",y.DEVELOPER).replace("%VALUE%",e.join(", "))),t.join(" and ")}}var V,Z;!function(t){t.ASC="▲",t.DESC="▼"}(V||(V={})),function(t){t[t.NAME_ASC=0]="NAME_ASC",t[t.NAME_DESC=1]="NAME_DESC",t[t.PRICE_ASC=2]="PRICE_ASC",t[t.PRICE_DESC=3]="PRICE_DESC"}(Z||(Z={}));class k extends _.Z{constructor(){super({tag:o.Z.DIV,classNames:["sort-header--Jog3u"],textContent:""}),this.sortCondition=Z.NAME_ASC,this.observer=b.Z.getInstance(),this.options=[{title:`Name ${V.ASC}`,value:Z.NAME_ASC},{title:`Name ${V.DESC}`,value:Z.NAME_DESC},{title:`Price ${V.ASC}`,value:Z.PRICE_ASC},{title:`Price ${V.DESC}`,value:Z.PRICE_DESC}],this.sortList=this.createSortList(),this.configView()}configView(){this.sortList.addEventListener("change",this.sortHandler.bind(this)),this.getElement().append(this.sortList)}getSortCondition(){return this.options[this.sortList.selectedIndex].value}sortHandler(){this.observer.notify(L.Z.UPDATE_CATALOG_CARDS)}createSortList(){const t=new h.Z,e=t.createTagElement("select",["sort-header__list--SSlNO"]);return this.options.forEach((r=>{const s=t.createTagElement("option",["sort-header__option--MsrVg"],r.title);s.setAttribute("value",r.value.toString()),e.append(s)})),e}}class H{constructor(t){this.PLACEHOLDER="Ask me...",this.callback=t;const e=new h.Z;this.element=e.createTagElement("input",["search-input--pnryc"]),this.element.setAttribute("type","search"),this.element.setAttribute("placeholder",this.PLACEHOLDER),this.element.addEventListener("search",(()=>t()))}getElement(){return this.element}clear(){this.element.value=""}}class B extends _.Z{constructor(t,e){super({tag:o.Z.DIV,classNames:[u,d],textContent:""}),this.URL_NO_IMAGE="",this.LANG="en-US",this.COUNTRY="US",this.creator=new h.Z,this.product=t,this.router=e,this.configView()}configView(){this.setRouteLink(),this.createProductView()}setRouteLink(){const t=`${C._.CATALOG}/${this.product.key}`;this.getElement().addEventListener("click",(()=>this.router.setHref(t)))}createProductView(){const t=this.getElement(),{masterVariant:e}=this.product,r=this.getImageElement(e),s=this.creator.createTagElement("div",[g]);t.append(r,s);const i=this.getTitleElement(),n=this.getDescriptionElement(),a=this.getPricesElement(e);s.append(i,n,a)}getPricesElement(t){const e=this.creator.createTagElement("span",[A]),r=this.getLocalPrices(t),s=this.creator.createTagElement("span",[T],r.value);if(e.append(s),r.discount){s.classList.add(P);const t=this.creator.createTagElement("span",[f],r.discount);e.append(t)}return e}getDescriptionElement(){const t=this.product.description?.[this.LANG]||D.Strings.EMPTY_TEXT[this.LANG];return this.creator.createTagElement("span",[m],t)}getTitleElement(){const t=this.product.name[this.LANG]||D.Strings.NO_DATA[this.LANG];return this.creator.createTagElement("span",[E],t)}getImageElement(t){const e=t.images?t.images[0].url:this.URL_NO_IMAGE,r=this.creator.createTagElement("img",[p]);return r.setAttribute("src",e),r}getLocalPrices(t){const e={value:"",discount:""},{prices:r}=t;if(r){const t=r.filter((t=>t.country===this.COUNTRY));if(t.length>0){const{value:r}=t[0];e.value=`${(r.centAmount/100).toFixed(r.fractionDigits)} ${r.currencyCode}`;const{discounted:s}=t[0];s?.value&&(e.discount=`${(s.value.centAmount/100).toFixed(s.value.fractionDigits)} ${s.value.currencyCode}`)}}return e}}var W=r(22);class $ extends _.Z{constructor(t){super({tag:o.Z.SECTION,classNames:["catalog-view--MIS7q"],textContent:""}),this.LANG="en-US",this.COUNTRY="US",this.NOT_FOUND="Products not found",this.productApi=new c,this.observer=b.Z.getInstance(),this.sortMapping=[this.sortByNameAsc,this.sortByNameDesc,this.sortByPriceAsc,this.sortByPriceDesc],this.filter=new x(this.productApi),this.search=new H(this.getSearchProducts.bind(this)),this.sorting=new k,this.router=t,this.observer.subscribe(L.Z.UPDATE_CATALOG_CARDS,this.recallProductCards.bind(this)),this.controlsWrapper=(new h.Z).createTagElement("div",["controls-wrapper--gM5pc"]),this.cardsWrapper=(new h.Z).createTagElement("div",["content-wrapper--zfsyF"]),this.getCreator().addInnerElement(this.cardsWrapper),this.configView()}recallProductCards(){this.search.clear(),this.getConditionalProducts()}setContent(t){this.cardsWrapper.replaceChildren(""),t instanceof l.Z?this.cardsWrapper.append(t.getElement()):this.cardsWrapper.append(t)}configView(){this.createContent()}createContent(){const t=this.filter.getFilterHeaderElement(),e=this.sorting.getElement();this.controlsWrapper.append(t,this.search.getElement(),e),this.getElement().append(this.controlsWrapper,this.cardsWrapper),this.getConditionalProducts()}getSearchProducts(){const t=this.search.getElement().value.trim();t?this.productApi.getSearchProducts(t).then((t=>{const e=t.body.results;e.length?(this.filter.clearFilters(),this.createSearchProductCards(e)):(new W.Z).showMessage(this.NOT_FOUND)})).catch((t=>(new v.Z).showMessage(t.message))):this.getConditionalProducts()}getConditionalProducts(){const t=this.filter.getWhereCondition();this.productApi.getConditionalProducts(t).then((t=>{const e=t.body.results;this.sortProducts(e),this.createProductCards(e)})).catch((t=>{t instanceof Error&&(new v.Z).showMessage(t.message)}))}sortProducts(t){const e=this.sorting.getSortCondition();t.sort(this.sortMapping[e].bind(this))}sortByNameAsc(t,e){const r=t.masterData.current.name[this.LANG],s=e.masterData.current.name[this.LANG];return r>s?1:r<s?-1:0}sortByNameDesc(t,e){const r=t.masterData.current.name[this.LANG],s=e.masterData.current.name[this.LANG];return r>s?-1:r<s?1:0}sortByPriceDesc(t,e){const r=this.getProductPrice(t),s=this.getProductPrice(e);return r>s?-1:r<s?1:0}sortByPriceAsc(t,e){const r=this.getProductPrice(t),s=this.getProductPrice(e);return r>s?1:r<s?-1:0}getProductPrice(t){const e=t.masterData.current.masterVariant.prices?.find((t=>t.country===this.COUNTRY)),r=e?e.value.centAmount:0;return(r?e?.discounted?.value.centAmount:0)||r}createProductCards(t){this.cardsWrapper.replaceChildren(""),t.forEach((t=>{if(t.key){const e=new w(t,this.router);this.cardsWrapper.append(e.getElement())}}))}createSearchProductCards(t){this.cardsWrapper.replaceChildren(""),t.forEach((t=>{if(t.key){const e=new B(t,this.router);this.cardsWrapper.append(e.getElement())}}))}}}}]);