"use strict";(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[560],{429:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(37),a=s(683),n=s(233);class r{constructor(t){if(this.clientRoot=(0,i.mv)((0,a.p0)()).withProjectKey({projectKey:"best-games"}),this.createCart=t=>this.clientRoot.carts().post({body:{key:`cart-key-${Math.floor(1e5*Math.random())}`,currency:"RUB",country:"RU",customerId:t}}).execute(),t){const e=(0,n.r4)(t.email,t.password);this.clientRoot=(0,i.mv)(e).withProjectKey({projectKey:"best-games"})}}checkCustomerExist(t){return this.returnCustomerByEmail(t).then((t=>t))}returnCustomerByEmail(t){return this.clientRoot.customers().get({queryArgs:{where:`email="${t}"`}}).execute()}returnCustomerById(t){return this.clientRoot.customers().get({queryArgs:{where:`id="${t}"`}}).execute()}getCustomer({email:t,password:e}){return this.clientRoot.me().login().post({body:{email:t,password:e,updateProductData:!0}}).execute()}createUserRoot(t,e){const s=(0,n.r4)(t,e);return this.clientRoot=(0,i.mv)(s).withProjectKey({projectKey:"best-games"}),this.clientRoot}getCartByCustomerId(t){return this.clientRoot.carts().withCustomerId({customerId:t}).get().execute()}createCustomerDraft(t){const{email:e,password:s,firstName:i,lastName:a,countryCode:n,key:r}=t;return{email:e,password:s,key:r,firstName:i,lastName:a,addresses:[{country:n}],defaultShippingAddress:0}}createCustomer(t){try{return this.clientRoot.customers().post({body:this.createCustomerDraft(t)}).execute()}catch(t){return t}}getProducts(){return this.clientRoot.products().get().execute()}getProductbyID(t){return this.clientRoot.products().withId({ID:t}).get().execute()}getProductbyKey(t){return this.clientRoot.products().withKey({key:t}).get().execute()}productProjectionResponseID(t){return this.clientRoot.productProjections().withId({ID:t}).get({queryArgs:{staged:!0}}).execute()}productProjectionResponseKEY(t){return this.clientRoot.productProjections().withKey({key:t}).get({queryArgs:{staged:!0}}).execute()}}},683:(t,e,s)=>{s.d(e,{p0:()=>n});var i=s(631);const a="best-games",n=()=>{const t={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:a,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",anonymousId:`best-games-${Math.floor(1e5*Math.random())}`},scopes:[`manage_project:${a}`]},e={host:"https://api.europe-west1.gcp.commercetools.com",fetch};return(new i.Qx).withAnonymousSessionFlow(t).withProjectKey(a).withHttpMiddleware(e).withLoggerMiddleware().build()}},233:(t,e,s)=>{s.d(e,{r4:()=>n});var i=s(631);const a="best-games",n=(t,e)=>{const s={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:a,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",user:{username:t,password:e}},scopes:[`manage_project:${a}`],fetch},n={host:"https://api.europe-west1.gcp.commercetools.com",fetch};return(new i.Qx).withPasswordFlow(s).withProjectKey(a).withHttpMiddleware(n).withLoggerMiddleware().build()}},560:(t,e,s)=>{s.r(e),s.d(e,{default:()=>F});const i="registrationView__inputsGroup--s2afB",a="registrationView__form--yXlDY",n="registrationView__defaultSelect--za2h9";var r,l,o,u,c,d,h,p=s(567);!function(t){t.PASSWORD="password",t.EMAIL="email",t.TEXT="text",t.DATE="date",t.CHECKBOX="checkbox"}(r||(r={})),function(t){t.PASSWORD="password",t.EMAIL="email",t.REPEAT_PASSWORD="repeat-password",t.FIRST_NAME="first-name",t.LAST_NAME="last-name",t.DATE_OF_BIRTH="date-of-birth",t.SHIPPING_CITY="shipping-city",t.SHIPPING_STREET="shipping-street",t.SHIPPING_POSTAL="shipping-postal",t.SHIPPING_COUNTRY="shipping-country",t.BILLING_CITY="billing-city",t.BILLING_STREET="billing-street",t.BILLING_POSTAL="billing-postal",t.BILLING_COUNTRY="country"}(l||(l={})),function(t){t.PASSWORD="Password",t.EMAIL="Email",t.REPEAT_PASSWORD="Repeat password",t.FIRST_NAME="First name",t.LAST_NAME="Last name",t.CITY="City",t.STREET="Street",t.POSTAL="Postal",t.COUNTRY="Country"}(o||(o={})),function(t){t.EMAIL_HINT="Must contain valid email address (example@gmail.com)",t.PASSWORD="Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (!@#$%^&*)",t.PASSWORD_REPEAT="The passwords must match",t.EASY_TEXT="Must contain at least one character",t.DATE_OF_BIRTH_HINT="Only 13 years old or older",t.TEXT="Must contain at least one character and no special characters or numbers",t.POSTAL_HINT="Must follow the format for the country (e.g., 12345 or A1B 2C3 for the U.S. and Canada, respectively)",t.COUNTRY_HINT="Must be a valid country from a predefined list or autocomplete field",t.WRONG_COUNTRY="Select country"}(u||(u={})),function(t){t.PASSWORD="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",t.TEXT="^(?!.*\\d)(?!.*[!@#$%^&*])[А-Яа-яA-Za-z\\d!@#$%^&*]{1,}$",t.DATE_OF_BIRTH_MAX="13",t.EMAIL="[a-z0-9]+[a-z0-9._%+\\-]+@[a-z]+\\.[a-z]{2,}"}(c||(c={})),d||(d={}),function(t){t.SHIPPING_ADDRESS="DELIVERY ADDRESS",t.SHIPPING_ADDRESS_DEFAULT="DELIVERY ADDRESS (default)",t.BILLING_ADDRESS="BILLING ADDRESS",t.BILLING_ADDRESS_DEFAULT="BILLING ADDRESS (default)"}(h||(h={}));var I;!function(t){t.CLICK="click",t.BLUR="blur",t.CHANGE="input"}(I||(I={}));const T=I;var E;!function(t){t.BUTTON_DEFAULT="Make it default",t.BUTTON_UN_DEFAULT="Don`t make it default",t.BUTTON_SUBMIT="REGISTER",t.SHOW_BUTTON="show",t.TITLE="Registration Page",t.DESCRIPTION="After filling in all the fields, press the confirmation button",t.ADD_BILLING_ADDRESS="Add billing address",t.REMOVE_BILLING_ADDRESS="Remove billing address",t.CHECK_VALIDITY="check that all fields are filled in correctly",t.REGISTRATION_OK="You have successfully registered",t.TO_LOGIN="Go to login"}(E||(E={}));const m=E;class S{constructor(t){this.inputElement=document.createElement("input"),this.messageElement=document.createElement(p.Z.SPAN),this.element=document.createElement(p.Z.DIV),this.createElement(t),this.inputElement.addEventListener(T.CHANGE,this.showErrorhandler.bind(this)),t.attributes.title?(this.title=t.attributes.title,this.messageText=this.title):(this.title="",this.messageText=this.inputElement.validationMessage)}setAttribute(t,e){this.inputElement.setAttribute(t,e)}removeAttribute(t){this.inputElement.removeAttribute(t)}removeMessage(){this.messageElement.textContent=""}appendMessage(){this.element.append(this.messageElement)}setMessageError(t){this.messageElement.textContent=t}setCustomValidity(t){this.inputElement.setCustomValidity(t)}setInputValue(t){this.inputElement.value=t}getElement(){return this.element}getInputValue(){return this.inputElement.value}getInput(){return this.inputElement}getTitle(){return this.getInput().title}setTitle(t){this.inputElement.title=t,this.title=t}setPattern(t){this.inputElement.pattern=t}createElement(t){if(this.element.classList.add("input__container--TYJjR"),t.classNames&&this.element.classList.add(...t.classNames),this.createInput(t),void 0!==t.callback){let e;!function(t){t[t.HANDLER=0]="HANDLER",t[t.EVENT=1]="EVENT"}(e||(e={})),t.callback.forEach((t=>{this.setCallback(t[e.HANDLER],t[e.EVENT])}))}this.messageElement=document.createElement(p.Z.SPAN),this.showErrorhandler(),this.messageElement.classList.add("input__symbol--TTeU5"),this.element.append(this.inputElement,this.messageElement)}setCallback(t,e){this.inputElement.addEventListener(e,t)}createInput(t){this.inputElement.classList.add("input--DAGU8"),this.inputElement.required=!0,this.setAttributes(t.attributes),t.attributes.type===r.PASSWORD&&this.showPassword()}setAttributes(t){Object.entries(t).forEach((([t,e])=>{this.inputElement.setAttribute(t,e)}))}showPassword(){const t=document.createElement("input");t.type=r.CHECKBOX,t.classList.add("checkbox--rlIy7");const e=document.createElement("label");e.textContent=m.SHOW_BUTTON,e.append(t),e.classList.add("inputShowPassword--jXW3M"),this.element.append(e),this.inputElement.classList.add("input_password--e4VKU"),t.addEventListener(T.CLICK,this.toggleVisibilityHandler.bind(this))}toggleVisibilityHandler(){this.inputElement.type===r.PASSWORD?this.inputElement.type=r.TEXT:this.inputElement.type=r.PASSWORD}showErrorhandler(){this.messageText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&(this.messageText=this.title),this.messageElement.textContent=this.messageText}}var g,A=s(928);!function(t){t.MAIN="main",t.SHIPPING="shipping",t.BILLING="billing"}(g||(g={}));const N=g;var L;!function(t){t.COUNTRY="country"}(L||(L={}));const _=L;var P;!function(t){t.SUBMIT="submit",t.BUTTON="button"}(P||(P={}));const R=P;var D;!function(t){t[t.EMAIL=0]="EMAIL",t[t.PASSWORD=1]="PASSWORD",t[t.REPEAT_PASSWORD=2]="REPEAT_PASSWORD",t[t.FIRST_NAME=3]="FIRST_NAME",t[t.LAST_NAME=4]="LAST_NAME",t[t.DATE_OF_BIRTH=5]="DATE_OF_BIRTH",t[t.SHIPPING_CITY=6]="SHIPPING_CITY",t[t.SHIPPING_STREET=7]="SHIPPING_STREET",t[t.SHIPPING_POSTAL=8]="SHIPPING_POSTAL",t[t.SHIPPING_COUNTRY=9]="SHIPPING_COUNTRY",t[t.BILLING_CITY=10]="BILLING_CITY",t[t.BILLING_STREET=11]="BILLING_STREET",t[t.BILLING_POSTAL=12]="BILLING_POSTAL",t[t.BILLING_COUNTRY=13]="BILLING_COUNTRY"}(D||(D={}));const C=D;var b;!function(t){t.SIX_DIGITS="^[0-9]{6,6}$",t.FIVE_DIGITS="^[0-9]{5,5}$",t.FOUR_DIGITS="^[0-9]{4,4}$",t.TWO_DIGITS="^[0-9]{2,2}$",t.TWO_LETTERS_THREE_DIGITS="^[A-Z][A-Z][0-9]{3,3}$",t.TWO_LETTERS_FOUR_DIGITS="^[A-Z][A-Z][0-9]{4,4}$",t.TWO_LETTERS_FIVE_DIGITS="^[A-Z][A-Z][0-9]{5,5}$"}(b||(b={}));const y=b;var O;!function(t){t.SIX_DIGITS="must consist of six numbers",t.FIVE_DIGITS="must consist of five numbers",t.FOUR_DIGITS="must consist of four numbers",t.TWO_DIGITS="must consist of two numbers",t.TWO_LETTERS_THREE_DIGITS="must consist of two capital letters and three numbers",t.TWO_LETTERS_FOUR_DIGITS="must consist of two capital letters and four numbers",t.TWO_LETTERS_FIVE_DIGITS="must consist of two capital letters and five numbers"}(O||(O={}));const G=O;var B=s(37),f=s(683),H=s(233);class M{constructor(t){if(this.clientRoot=(0,B.mv)((0,f.p0)()).withProjectKey({projectKey:"best-games"}),t){const e=(0,H.r4)(t.email,t.password);this.clientRoot=(0,B.mv)(e).withProjectKey({projectKey:"best-games"})}}createCustomerDraft(t){const{email:e,password:s,firstName:i,lastName:a,dateOfBirth:n,countryShippingCode:r,countryStreetShipping:l,countryBillingCode:o,countryStreetBilling:u,countryCityShipping:c,countryPostalShipping:d,countryCityBilling:h,countryPostalBilling:p,defaultBillingAddressNum:I,defaultShippingAddressNum:T,key:E}=t;return{email:e,password:s,key:E,dateOfBirth:n,firstName:i,lastName:a,addresses:[{country:r,streetName:l,city:c,postalCode:d},{country:o,streetName:u,city:h,postalCode:p}],defaultShippingAddress:T,defaultBillingAddress:I,shippingAddresses:[0],billingAddresses:[1]}}createCustomer(t){return this.clientRoot.customers().post({body:this.createCustomerDraft(t)}).execute()}}var w,U=s(891),V=s(429),v=s(881),Y=s(296);!function(t){t[t.SWITCH_TO_PAGE=2e3]="SWITCH_TO_PAGE"}(w||(w={}));const W=w;var x;!function(t){t[t.USER_CREATED=201]="USER_CREATED"}(x||(x={}));const k=x;class F extends A.Z{constructor(t){super({tag:p.Z.SECTION,classNames:["registrationView--n6v1f"],textContent:""}),this.DEFAULT_ADDRESS_NUMBER=1,this.router=t,this.observer=Y.Z.getInstance(),this.inputs=[],this.mainInputsGroup=[],this.billingInputsGroup=[],this.shippingInputsGroup=[],this.checkValidityElement=this.createValidMessageElement(),this.buttonDefaultShippingAddress=this.createDefaultButton(m.BUTTON_DEFAULT,[n]),this.buttonDefaultBillingAddress=this.createDefaultButton(m.BUTTON_DEFAULT,[n]),this.buttonAddAddress=this.createDefaultButton(m.REMOVE_BILLING_ADDRESS,["registrationView__buttonAddAdsress--xXsVy"]),this.billingLabel=this.createLabel(h.BILLING_ADDRESS),this.shippingLabel=this.createLabel(h.SHIPPING_ADDRESS),this.isDefaultShippingAddress=!1,this.isDefaultBillingAddress=!1,this.isBillingAddress=!0,this.countryList=this.createCountryListElement(),this.inputsParams=this.createParams(),this.configView()}configView(){const t=this.createTitle(),e=this.createDescription();this.fillInputsGroups();const s=this.createForm(),i=document.createElement(p.Z.BUTTON);i.textContent=m.TO_LOGIN,i.classList.add("button--pcOys"),i.addEventListener(T.CLICK,this.redirectLoginhandler.bind(this)),this.buttonAddAddress.addEventListener(T.CLICK,this.toggleBillingAddressHandler.bind(this)),this.getElement().append(t,e,i,s,this.buttonAddAddress,this.countryList)}redirectLoginhandler(){this.router.navigate(U._.LOGIN)}createValidMessageElement(){const t=document.createElement(p.Z.DIV);return t.textContent=m.CHECK_VALIDITY,t.classList.add("registrationView__checkValidity--z5NU8"),t.addEventListener(T.CLICK,this.removeValidityMessageHandler.bind(this)),t}removeValidityMessageHandler(){this.checkValidityElement.textContent=m.CHECK_VALIDITY,this.getElement().removeChild(this.checkValidityElement)}createLabel(t){const e=document.createElement("label");return e.textContent=t,e.classList.add(i),e}createTitle(){const t=document.createElement("h1");return t.classList.add("registrationView__tittle--nXz7b"),t.textContent=m.TITLE,t}createDescription(){const t=document.createElement("p");return t.classList.add("registrationView__description--qhfiP"),t.textContent=m.DESCRIPTION,t}createCountryListElement(){const t=document.createElement("datalist");return t.id=_.COUNTRY,this.createCountryList().flat().sort().forEach((e=>{const s=this.createOptionElement(e);t.append(s)})),t}createOptionElement(t){const e=document.createElement("option");return e.value=t,e}createCountryList(){return[["Belarus BY","China CN","Colombia CO","Ecuador EC","Kazakhstan KZ","Kyrgyzstan KG","Malawi MW","Nigeria NG","Romania RO","Russia RU","Singapore SG","Tajikistan TJ","Trinidad and Tobago TT","Turkmenistan TM","Uzbekistan UZ","India IN"],["Czech Republic CZ","Greece CR","Slovakia SK","Sweden SE","Algeria DZ","Bhutan BT","Bosnia and Herzegovina BA","Costa Rica CR","Croatia HR","Cuba CU","Dominican Republic DO","Egypt EG","Estonia EE","Finland FI","France FR","Germany DE","Guatemala GT","Indonesia ID","Iraq IQ","Italy IT","Jordan JO","Kenya KE","Korea, South KR","Kosovo XK","Kuwait KW","Laos LA","Malaysia MY","Maldives MV","Mauritius MU","Mexico MX","Mongolia MN","Montenegro ME","Morocco MA","Myanmar MM","Namibia NA","Nepal NP","Nicaragua NI","Pakistan PK","Puerto Rico PR","Senegal SN","Serbia RS","Spain ES","Sri Lanka LK","Sudan SD","Tanzania TZ","Thailand TH","Turkey TR","Ukraine UA","United States US","Uruguay UY","Vietnam VN","Zambia ZM","Saudi Arabia SA","Iran IR","Peru PE","Åland AX","Lebanon LB","Brazil BR","American Samoa AS","Guam GU","Marshall Islands MH","Micronesia FM","Northern Mariana Islands MP","Palau PW","U.S. Virgin Islands VI"],["Guinea","Iceland","Lesotho","Madagascar","Oman","Palestine","Papua New Guinea","Afghanistan AF","Albania AL","Argentina AR","Armenia AM","Australia AU","Austria AT","Bangladesh BD","Belgium BE","Bulgaria BG","Cape Verde CV","Christmas Island CX","Greenland GL","Hungary HU","Liechtenstein LI","Luxembourg LU","New Zealand NZ","Niger NE","North Macedonia MK","Norway NO","Panama PA","Paraguay PY","Philippines PH","Portugal PT","Singapore SG","South Africa ZA","Switzerland CH","Svalbard and Jan Mayen SJ","Tunisia TN","Portugal PT","Slovenia SI","Venezuela VE"],["Jamaica JM","Singapore SG"],["Faroe Islands","Barbados","Andorra AD"],["Azerbaijan AZ","Latvia LV","British Virgin Islands VG","Saint Kitts and Nevis KN","Saint Vincent and the Grenadines VC","Samoa WS","Moldova MD"],["Lithuania LT","Barbados BB"]]}fillInputsGroups(){this.inputsParams.forEach((t=>{const e=new S(t);this.inputs.push(e),t.group&&(t.group===N.MAIN?this.mainInputsGroup.push(e):t.group===N.SHIPPING?this.shippingInputsGroup.push(e):this.billingInputsGroup.push(e))}))}createForm(){const t=document.createElement("form");t.classList.add(a);const e=document.createElement(p.Z.DIV);e.classList.add(i);const s=this.mainInputsGroup.map((t=>t.getElement()));e.append(...s);const n=this.creatLabelWithGroup(h.SHIPPING_ADDRESS,this.shippingInputsGroup),r=this.creatLabelWithGroup(h.BILLING_ADDRESS,this.billingInputsGroup),l=document.createElement(p.Z.BUTTON);l.classList.add("registrationView__button--zQmzn"),l.type=R.BUTTON,l.textContent=m.BUTTON_SUBMIT,l.addEventListener(T.CLICK,this.formSubmitHandler.bind(this));const o=document.createElement(p.Z.DIV);return o.classList.add("registrationView__buttonWrap--Nq_7J"),o.append(l),t.append(e,n,r,o),t}creatLabelWithGroup(t,e){const s=e.map((t=>t.getElement()));let i=document.createElement("label");return t===h.SHIPPING_ADDRESS&&(this.shippingLabel.append(...s),this.shippingLabel.append(this.buttonDefaultShippingAddress),this.buttonDefaultShippingAddress.addEventListener(T.CLICK,this.defaultShippingToggleHandler.bind(this)),i=this.shippingLabel),t===h.BILLING_ADDRESS&&(this.billingLabel.append(...s),this.billingLabel.append(this.buttonDefaultBillingAddress),this.buttonDefaultBillingAddress.addEventListener(T.CLICK,this.defaultBillingToggleHandler.bind(this)),i=this.billingLabel),i}createDefaultButton(t,e){const s=document.createElement(p.Z.BUTTON);return s.type=R.BUTTON,s.textContent=t,s.classList.add(...e),s}passwordCheckHandler(){const t=this.inputs[C.REPEAT_PASSWORD];this.inputs[C.PASSWORD].getInputValue()===t.getInputValue()?(t.setCustomValidity(""),t.removeMessage()):(t.setMessageError(u.PASSWORD_REPEAT),t.setCustomValidity(u.PASSWORD_REPEAT))}validateCountryShippingHandler(){this.validateCountryList(this.inputs[C.SHIPPING_COUNTRY],this.inputs[C.SHIPPING_POSTAL])}validateCountryBillingHandler(){this.validateCountryList(this.inputs[C.BILLING_COUNTRY],this.inputs[C.BILLING_POSTAL])}validateCountryList(t,e){const s=this.createCountryList(),i=t,a=e,n=i.getInputValue();s.flat().includes(n)?(this.changePostalPatternWithCountry(a,s,n),i.setCustomValidity("")):(i.setCustomValidity(u.COUNTRY_HINT),this.changePostalPatternWithOutCountry(a))}changePostalPatternWithCountry(t,e,s){e.forEach(((e,i)=>{if(e.includes(s)){const e=Array.from(Object.values(y))[i];t.setPattern(e);const a=Array.from(Object.values(G))[i],n=`${s.slice(0,-3)}\`s postal ${a}`;t.setTitle(n),t.setMessageError(n),t.setCustomValidity("")}}))}changePostalPatternWithOutCountry(t){t.setTitle(u.WRONG_COUNTRY),t.setMessageError(u.WRONG_COUNTRY),t.setCustomValidity(u.WRONG_COUNTRY)}maxPossibleDate(t){const e=new Date;return`${e.getFullYear()-Number(t)}-${e.getMonth().toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}defaultBillingToggleHandler(){this.isDefaultBillingAddress?(this.isDefaultBillingAddress=!1,this.buttonDefaultBillingAddress.textContent=m.BUTTON_DEFAULT,this.billingLabel.firstChild.textContent=h.BILLING_ADDRESS):(this.isDefaultBillingAddress=!0,this.buttonDefaultBillingAddress.textContent=m.BUTTON_UN_DEFAULT,this.billingLabel.firstChild.textContent=h.BILLING_ADDRESS_DEFAULT)}defaultShippingToggleHandler(){this.isDefaultShippingAddress?(this.isDefaultShippingAddress=!1,this.buttonDefaultShippingAddress.textContent=m.BUTTON_DEFAULT,this.shippingLabel.firstChild.textContent=h.SHIPPING_ADDRESS):(this.isDefaultShippingAddress=!0,this.buttonDefaultShippingAddress.textContent=m.BUTTON_UN_DEFAULT,this.shippingLabel.firstChild.textContent=h.SHIPPING_ADDRESS_DEFAULT)}toggleBillingAddressHandler(){const t=this.shippingLabel.parentNode;this.isBillingAddress?(this.isBillingAddress=!1,this.buttonAddAddress.textContent=m.ADD_BILLING_ADDRESS,t.removeChild(this.billingLabel)):(this.isBillingAddress=!0,this.buttonAddAddress.textContent=m.REMOVE_BILLING_ADDRESS,t.insertBefore(this.billingLabel,this.shippingLabel))}changeInputDateHandler(){!0===this.inputs[C.DATE_OF_BIRTH].getInput().checkValidity()?this.inputs[C.DATE_OF_BIRTH].setMessageError(""):this.inputs[C.DATE_OF_BIRTH].setMessageError(u.DATE_OF_BIRTH_HINT)}getParams(){return{email:this.inputs[C.EMAIL].getInputValue(),password:this.inputs[C.PASSWORD].getInputValue(),firstName:this.inputs[C.FIRST_NAME].getInputValue(),lastName:this.inputs[C.LAST_NAME].getInputValue(),dateOfBirth:this.inputs[C.DATE_OF_BIRTH].getInputValue(),countryStreetShipping:this.inputs[C.SHIPPING_STREET].getInputValue(),countryCityShipping:this.inputs[C.SHIPPING_CITY].getInputValue(),countryPostalShipping:this.inputs[C.SHIPPING_POSTAL].getInputValue(),countryShippingCode:this.inputs[C.SHIPPING_COUNTRY].getInputValue().slice(-2),countryStreetBilling:this.isBillingAddress?this.inputs[C.BILLING_STREET].getInputValue():this.inputs[C.SHIPPING_STREET].getInputValue(),countryCityBilling:this.isBillingAddress?this.inputs[C.BILLING_CITY].getInputValue():this.inputs[C.SHIPPING_CITY].getInputValue(),countryPostalBilling:this.isBillingAddress?this.inputs[C.BILLING_POSTAL].getInputValue():this.inputs[C.SHIPPING_POSTAL].getInputValue(),countryBillingCode:this.isBillingAddress?this.inputs[C.BILLING_COUNTRY].getInputValue().slice(-2):this.inputs[C.SHIPPING_COUNTRY].getInputValue().slice(-2),key:`${Date.now().toString(16)}-${Math.trunc(1e10*Math.random()).toString(16)}`,defaultShippingAddressNum:this.isDefaultShippingAddress?0:void 0,defaultBillingAddressNum:this.getDefaultBillinAddressNum()}}getDefaultBillinAddressNum(){let t;return t=this.isBillingAddress?this.isDefaultBillingAddress?1:void 0:this.isDefaultShippingAddress?1:void 0,t}formSubmitHandler(){if(this.isCheckValidityFormHandler()){const t=new M,e=this.getParams(),s={email:this.inputs[C.EMAIL].getInputValue(),password:this.inputs[C.PASSWORD].getInputValue()};t.createCustomer(e).then((t=>{t.statusCode===k.USER_CREATED&&(this.checkValidityElement.textContent=m.REGISTRATION_OK,this.getElement().append(this.checkValidityElement),setTimeout((()=>this.router.navigate(U._.LOGIN)),W.SWITCH_TO_PAGE))})).then((()=>{this.makeLogin(s)})).catch((t=>{this.checkValidityElement.textContent=t.message,this.getElement().append(this.checkValidityElement)}))}else this.getElement().append(this.checkValidityElement)}makeLogin(t){(new V.Z).getCustomer(t).then((t=>{t.body.customer&&(window.localStorage.setItem("isLogin","true"),this.observer.notify(v.Z.LOGIN))}))}isCheckValidityFormHandler(){let t=!0;return this.mainInputsGroup.forEach((e=>{e.getInput().checkValidity()||(t=!1)})),this.shippingInputsGroup.forEach((e=>{e.getInput().checkValidity()||(t=!1)})),this.isBillingAddress&&this.billingInputsGroup.forEach((e=>{e.getInput().checkValidity()||(t=!1)})),t}createParams(){return[{classNames:[a],group:N.MAIN,attributes:{type:r.EMAIL,name:l.EMAIL,title:u.EMAIL_HINT,placeholder:o.EMAIL,pattern:c.EMAIL}},{classNames:[a],callback:[[this.passwordCheckHandler.bind(this),T.CHANGE]],group:N.MAIN,attributes:{type:r.PASSWORD,name:l.PASSWORD,placeholder:o.PASSWORD,title:u.PASSWORD,pattern:c.PASSWORD}},{classNames:[a],group:N.MAIN,callback:[[this.passwordCheckHandler.bind(this),T.CHANGE]],attributes:{type:r.PASSWORD,name:l.REPEAT_PASSWORD,placeholder:o.REPEAT_PASSWORD,title:u.PASSWORD_REPEAT}},{classNames:[a],group:N.MAIN,attributes:{type:r.TEXT,name:l.FIRST_NAME,placeholder:o.FIRST_NAME,title:u.TEXT,pattern:c.TEXT}},{classNames:[a],group:N.MAIN,attributes:{type:r.TEXT,name:l.LAST_NAME,placeholder:o.LAST_NAME,title:u.TEXT,pattern:c.TEXT}},{classNames:[a],callback:[[this.changeInputDateHandler.bind(this),T.CLICK]],group:N.MAIN,attributes:{type:r.DATE,placeholder:u.DATE_OF_BIRTH_HINT,name:l.DATE_OF_BIRTH,title:u.DATE_OF_BIRTH_HINT,max:this.maxPossibleDate(c.DATE_OF_BIRTH_MAX)}},{classNames:[a],group:N.SHIPPING,attributes:{type:r.TEXT,name:l.SHIPPING_STREET,title:u.EASY_TEXT,placeholder:o.STREET}},{classNames:[a],group:N.SHIPPING,attributes:{type:r.TEXT,name:l.SHIPPING_CITY,title:u.TEXT,placeholder:o.CITY,pattern:c.TEXT}},{classNames:[a],group:N.SHIPPING,attributes:{type:r.TEXT,name:l.SHIPPING_POSTAL,title:u.POSTAL_HINT,placeholder:o.POSTAL}},{classNames:[a],callback:[[this.validateCountryShippingHandler.bind(this),T.CHANGE]],group:N.SHIPPING,attributes:{type:r.TEXT,name:l.SHIPPING_COUNTRY,title:u.COUNTRY_HINT,placeholder:o.COUNTRY,list:_.COUNTRY}},{classNames:[a],group:N.BILLING,attributes:{type:r.TEXT,name:l.BILLING_STREET,title:u.EASY_TEXT,placeholder:o.STREET}},{classNames:[a],group:N.BILLING,attributes:{type:r.TEXT,name:l.BILLING_CITY,title:u.TEXT,placeholder:o.CITY,pattern:c.TEXT}},{classNames:[a],group:N.BILLING,attributes:{type:r.TEXT,name:l.BILLING_POSTAL,title:u.POSTAL_HINT,placeholder:o.POSTAL}},{classNames:[a],callback:[[this.validateCountryBillingHandler.bind(this),T.CHANGE]],group:N.BILLING,attributes:{type:r.TEXT,name:l.BILLING_COUNTRY,title:u.COUNTRY_HINT,placeholder:o.COUNTRY,list:_.COUNTRY}}]}}}}]);