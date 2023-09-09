"use strict";(self.webpackChunkecommerce_application=self.webpackChunkecommerce_application||[]).push([[313],{4121:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(3037),i=s(7683),n=s(5233);class r{constructor(e){if(this.clientRoot=(0,a.mv)((0,i.p0)()).withProjectKey({projectKey:"best-games"}),e){const t=(0,n.r4)(e.email,e.password);this.clientRoot=(0,a.mv)(t).withProjectKey({projectKey:"best-games"})}}createCustomerDraft(e){const{email:t,password:s,firstName:a,lastName:i,dateOfBirth:n,countryShippingCode:r,countryStreetShipping:o,countryBillingCode:l,countryStreetBilling:c,countryCityShipping:d,countryPostalShipping:u,countryCityBilling:m,countryPostalBilling:h,defaultBillingAddressNum:E,defaultShippingAddressNum:T,key:p}=e;return{email:t,password:s,key:p,dateOfBirth:n,firstName:a,lastName:i,addresses:[{country:r,streetName:o,city:d,postalCode:u},{country:l,streetName:c,city:m,postalCode:h}],defaultShippingAddress:T,defaultBillingAddress:E,shippingAddresses:[0],billingAddresses:[1]}}createCustomer(e){return this.clientRoot.customers().post({body:this.createCustomerDraft(e)}).execute()}getCustomer(e){return this.clientRoot.customers().get({queryArgs:{where:`email="${e}"`}}).execute()}changeData(e,t,s,a,i){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:s,[a]:i}]}}).execute()}changePassword(e,t,s,a){return this.clientRoot.customers().password().post({body:{id:e,version:a,currentPassword:s,newPassword:t}}).execute()}addAddress(e,t,s,a,i,n){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"addAddress",address:{streetName:s,postalCode:a,city:i,country:n}}]}}).execute()}makeAddressShipping(e,t,s){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"addShippingAddressId",addressId:s}]}}).execute()}makeAddressBilling(e,t,s){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"addBillingAddressId",addressId:s}]}}).execute()}makeAddressBillingDefault(e,t,s){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"setDefaultBillingAddress",addressId:s}]}}).execute()}makeAddressShippingDefault(e,t,s){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"setDefaultShippingAddress",addressId:s}]}}).execute()}changeAddress(e,t,s,a,i,n,r){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"changeAddress",addressId:s,address:{streetName:a,postalCode:i,city:n,country:r}}]}}).execute()}deleteAdress(e,t,s){return this.clientRoot.customers().withId({ID:e}).post({body:{version:t,actions:[{action:"removeAddress",addressId:s}]}}).execute()}}},7683:(e,t,s)=>{s.d(t,{p0:()=>r});var a=s(9631),i=s(9909);const n="best-games",r=()=>{const e=`best-games-${i.Z.newGuid().slice(0,10)}`;localStorage.setItem("anonymousId",e);const t={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:n,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",anonymousId:e},scopes:[`manage_project:${n}`]};return(new a.Qx).withAnonymousSessionFlow(t).withProjectKey(n).withHttpMiddleware({host:"https://api.europe-west1.gcp.commercetools.com"}).withLoggerMiddleware().build()}},5233:(e,t,s)=>{s.d(t,{r4:()=>n});var a=s(9631);const i="best-games",n=(e,t)=>{const s={host:"https://auth.europe-west1.gcp.commercetools.com",projectKey:i,credentials:{clientId:"A8PxwfHMEiItZ24oahyDGO2A",clientSecret:"RKi7doGwQ75b4wfuLsPuahDT366uOhUY",user:{username:e,password:t}},scopes:[`manage_project:${i}`],fetch},n={host:"https://api.europe-west1.gcp.commercetools.com",fetch};return(new a.Qx).withPasswordFlow(s).withProjectKey(i).withHttpMiddleware(n).withLoggerMiddleware().build()}},6193:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e.BUTTON_DEFAULT="Make it default",e.BUTTON_UN_DEFAULT="Don`t make it default",e.BUTTON_SUBMIT="REGISTER",e.SHOW_BUTTON="show",e.TITLE="Registration Page",e.DESCRIPTION="After filling in all the fields, press the confirmation button",e.ADD_BILLING_ADDRESS="Add billing address",e.REMOVE_BILLING_ADDRESS="Remove billing address",e.CHECK_VALIDITY="check that all fields are filled in correctly",e.REGISTRATION_OK="You have successfully registered",e.TO_LOGIN="Go to login"}(a||(a={}));const i=a},6799:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e.COUNTRY="country"}(a||(a={}));const i=a},423:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e.SIX_DIGITS="^[0-9]{6,6}$",e.FIVE_DIGITS="^[0-9]{5,5}$",e.FOUR_DIGITS="^[0-9]{4,4}$",e.TWO_DIGITS="^[0-9]{2,2}$",e.TWO_LETTERS_THREE_DIGITS="^[A-Z][A-Z][0-9]{3,3}$",e.TWO_LETTERS_FOUR_DIGITS="^[A-Z][A-Z][0-9]{4,4}$",e.TWO_LETTERS_FIVE_DIGITS="^[A-Z][A-Z][0-9]{5,5}$"}(a||(a={}));const i=a},2123:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e.SIX_DIGITS="must consist of six numbers",e.FIVE_DIGITS="must consist of five numbers",e.FOUR_DIGITS="must consist of four numbers",e.TWO_DIGITS="must consist of two numbers",e.TWO_LETTERS_THREE_DIGITS="must consist of two capital letters and three numbers",e.TWO_LETTERS_FOUR_DIGITS="must consist of two capital letters and four numbers",e.TWO_LETTERS_FIVE_DIGITS="must consist of two capital letters and five numbers"}(a||(a={}));const i=a},5311:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e.CLICK="click",e.BLUR="blur",e.CHANGE="input"}(a||(a={}));const i=a},2953:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e.MAIL_ADDRESS="mailAddress"}(a||(a={}));const i=a},4218:(e,t,s)=>{var a;s.d(t,{Z:()=>i}),function(e){e[e.USER_CREATED=201]="USER_CREATED",e[e.USER_VALUE_CHANGED=200]="USER_VALUE_CHANGED"}(a||(a={}));const i=a},9909:(e,t,s)=>{s.d(t,{Z:()=>a});class a{static newGuid(){const e=[];return e.push(a.getHexRandom(268435456,4294967295)),e.push(a.getHexRandom(4096,65535)),e.push(a.getHexRandom(4096,65535)),e.push(a.getHexRandom(4096,65535)),e.push(a.getHexRandom(17592186044416,0xffffffffffff)),e.join("-")}static getHexRandom(e,t){return Math.floor(e+Math.random()*(t+1-e)).toString(16)}}},4957:(e,t,s)=>{var a;s.d(t,{Z:()=>o}),function(e){e.MAIN="main",e.SHIPPING="shipping",e.BILLING="billing"}(a||(a={}));const i=a;var n=s(8717),r=s(6799);class o{getMailParams(e){return{classNames:e,attributes:{type:n.oP.EMAIL,name:n.Ti.EMAIL,title:n.WA.EMAIL_HINT,placeholder:n.I$.EMAIL,pattern:n.uv.EMAIL}}}getPasswordParams(e,t){return{classNames:e,callback:t,attributes:{type:n.oP.PASSWORD,name:n.Ti.PASSWORD,placeholder:n.I$.PASSWORD,title:n.WA.PASSWORD,pattern:n.uv.PASSWORD}}}getPasswordRepeatParams(e,t){return{classNames:e,callback:t,attributes:{type:n.oP.PASSWORD,name:n.Ti.REPEAT_PASSWORD,placeholder:n.I$.REPEAT_PASSWORD,title:n.WA.PASSWORD_REPEAT}}}getFirstNameParams(e){return{classNames:e,attributes:{type:n.oP.TEXT,name:n.Ti.FIRST_NAME,placeholder:n.I$.FIRST_NAME,title:n.WA.TEXT,pattern:n.uv.TEXT}}}getLastNameParams(e){return{classNames:e,attributes:{type:n.oP.TEXT,name:n.Ti.LAST_NAME,placeholder:n.I$.LAST_NAME,title:n.WA.TEXT,pattern:n.uv.TEXT}}}getDateParams(e,t){return{classNames:e,callback:t,group:i.MAIN,attributes:{type:n.oP.DATE,placeholder:`${n.I$.DATE_OF_BIRTH}. ${n.WA.DATE_OF_BIRTH_HINT}`,name:n.Ti.DATE_OF_BIRTH,title:n.WA.DATE_OF_BIRTH_HINT,max:this.maxPossibleDate(n.uv.DATE_OF_BIRTH_MAX)}}}getStreetParams(e){return{classNames:e,attributes:{type:n.oP.TEXT,title:n.WA.EASY_TEXT,placeholder:n.I$.STREET}}}getCityParams(e){return{classNames:e,attributes:{type:n.oP.TEXT,title:n.WA.TEXT,placeholder:n.I$.CITY,pattern:n.uv.TEXT}}}getSPostalParams(e){return{classNames:e,attributes:{type:n.oP.TEXT,name:n.Ti.SHIPPING_POSTAL,title:n.WA.POSTAL_HINT,placeholder:n.I$.POSTAL}}}getCountryParams(e,t){return{classNames:e,callback:t,attributes:{type:n.oP.TEXT,name:n.Ti.SHIPPING_COUNTRY,title:n.WA.COUNTRY_HINT,placeholder:n.I$.COUNTRY,list:r.Z.COUNTRY}}}maxPossibleDate(e){const t=new Date;return`${t.getFullYear()-Number(e)}-${t.getMonth().toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`}}},8717:(e,t,s)=>{var a,i,n,r,o,l,c;s.d(t,{I$:()=>n,Ti:()=>i,WA:()=>r,Yk:()=>c,oP:()=>a,uv:()=>o}),function(e){e.PASSWORD="password",e.EMAIL="email",e.TEXT="text",e.DATE="date",e.CHECKBOX="checkbox"}(a||(a={})),function(e){e.PASSWORD="password",e.EMAIL="email",e.REPEAT_PASSWORD="repeat-password",e.FIRST_NAME="first-name",e.LAST_NAME="last-name",e.DATE_OF_BIRTH="date-of-birth",e.SHIPPING_CITY="shipping-city",e.SHIPPING_STREET="shipping-street",e.SHIPPING_POSTAL="shipping-postal",e.SHIPPING_COUNTRY="shipping-country",e.BILLING_CITY="billing-city",e.BILLING_STREET="billing-street",e.BILLING_POSTAL="billing-postal",e.BILLING_COUNTRY="country"}(i||(i={})),function(e){e.PASSWORD="Password",e.EMAIL="Email",e.REPEAT_PASSWORD="Repeat password",e.FIRST_NAME="First name",e.LAST_NAME="Last name",e.CITY="City",e.STREET="Street",e.POSTAL="Postal",e.COUNTRY="Country",e.DATE_OF_BIRTH="Date of birth"}(n||(n={})),function(e){e.EMAIL_HINT="Must contain valid email address (example@gmail.com)",e.PASSWORD="Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (!@#$%^&*)",e.PASSWORD_REPEAT="The passwords must match",e.EASY_TEXT="Must contain at least one character",e.DATE_OF_BIRTH_HINT="Only 13 years old or older",e.TEXT="Must contain at least one character and no special characters or numbers",e.POSTAL_HINT="Must follow the format for the country (e.g., 12345 or A1B 2C3 for the U.S. and Canada, respectively)",e.COUNTRY_HINT="Must be a valid country from a predefined list or autocomplete field",e.WRONG_COUNTRY="Select country"}(r||(r={})),function(e){e.PASSWORD="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",e.TEXT="^(?!.*\\d)(?!.*[!@#$%^&*])[А-Яа-яA-Za-z\\d!@#$%^&*]{1,}$",e.DATE_OF_BIRTH_MAX="13",e.EMAIL="[a-z0-9]+[a-z0-9._%+\\-]+@[a-z]+\\.[a-z]{2,}"}(o||(o={})),l||(l={}),function(e){e.SHIPPING_ADDRESS="DELIVERY ADDRESS",e.SHIPPING_ADDRESS_DEFAULT="DELIVERY ADDRESS (default)",e.BILLING_ADDRESS="BILLING ADDRESS",e.BILLING_ADDRESS_DEFAULT="BILLING ADDRESS (default)"}(c||(c={}))},5476:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(8717),i=s(1567),n=s(5311),r=s(6193);class o{constructor(e){this.label=this.createLabel(),this.inputElement=document.createElement("input"),this.messageElement=document.createElement(i.Z.SPAN),this.element=document.createElement(i.Z.DIV),this.createElement(e),this.inputElement.addEventListener(n.Z.CHANGE,this.showErrorhandler.bind(this)),e.attributes.title?(this.title=e.attributes.title,this.messageText=this.title):(this.title="",this.messageText=this.inputElement.validationMessage)}setAttribute(e,t){this.inputElement.setAttribute(e,t)}removeAttribute(e){this.inputElement.removeAttribute(e)}removeMessage(){this.messageElement.textContent=""}removeMessageElement(){this.element.removeChild(this.messageElement)}removeMessageElementFromLabel(){this.label.removeChild(this.messageElement)}appendMessage(){this.label.append(this.messageElement)}setMessageError(e){this.messageElement.textContent=e}setCustomValidity(e){this.inputElement.setCustomValidity(e)}setInputValue(e){this.inputElement.value=e}getElement(){return this.element}getInputValue(){return this.inputElement.value}getInput(){return this.inputElement}setLabel(e){this.label.textContent=e,this.label.append(this.inputElement),this.element.append(this.label)}setDisabled(){this.inputElement.disabled=!0}removeDisabled(){this.inputElement.disabled=!1}getTitle(){return this.getInput().title}setTitle(e){this.inputElement.title=e,this.title=e}setPattern(e){this.inputElement.pattern=e}createLabel(){return document.createElement("label")}createElement(e){if(this.element.classList.add("input__container--TYJjR"),e.classNames&&this.element.classList.add(...e.classNames),this.createInput(e),void 0!==e.callback){let t;!function(e){e[e.HANDLER=0]="HANDLER",e[e.EVENT=1]="EVENT"}(t||(t={})),e.callback.forEach((e=>{this.setCallback(e[t.HANDLER],e[t.EVENT])}))}this.messageElement=document.createElement(i.Z.SPAN),this.showErrorhandler(),this.messageElement.classList.add("input__symbol--TTeU5"),this.element.append(this.inputElement,this.messageElement)}setCallback(e,t){this.inputElement.addEventListener(t,e)}createInput(e){this.inputElement.classList.add("input--DAGU8"),this.inputElement.required=!0,this.setAttributes(e.attributes),e.attributes.type===a.oP.PASSWORD&&this.showPassword()}setAttributes(e){Object.entries(e).forEach((([e,t])=>{this.inputElement.setAttribute(e,t)}))}showPassword(){const e=document.createElement("input");e.type=a.oP.CHECKBOX,e.classList.add("checkbox--rlIy7");const t=document.createElement("label");t.textContent=r.Z.SHOW_BUTTON,t.append(e),t.classList.add("inputShowPassword--jXW3M"),this.element.append(t),this.inputElement.classList.add("input_password--e4VKU"),e.addEventListener(n.Z.CLICK,this.toggleVisibilityHandler.bind(this))}toggleVisibilityHandler(){this.inputElement.type===a.oP.PASSWORD?this.inputElement.type=a.oP.TEXT:this.inputElement.type=a.oP.PASSWORD}showErrorhandler(){this.messageText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&(this.messageText=this.title),this.messageElement.textContent=this.messageText}}},5246:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(6799);class i{constructor(){this.countrysList=this.createCountryList(),this.countryListElement=this.createCountryListElement()}getListElement(){return this.countryListElement}getCountryList(){return this.countrysList}getCountryByCode(e){let t="";return this.countrysList.flat().forEach((s=>{s.slice(-2)===e&&(t=s)})),t}createCountryListElement(){const e=document.createElement("datalist");return e.id=a.Z.COUNTRY,this.createCountryList().flat().sort().forEach((t=>{const s=this.createOptionElement(t);e.append(s)})),e}createOptionElement(e){const t=document.createElement("option");return t.value=e,t}createCountryList(){return[["Belarus BY","China CN","Colombia CO","Ecuador EC","Kazakhstan KZ","Kyrgyzstan KG","Malawi MW","Nigeria NG","Romania RO","Russia RU","Singapore SG","Tajikistan TJ","Trinidad and Tobago TT","Turkmenistan TM","Uzbekistan UZ","India IN"],["Czech Republic CZ","Greece CR","Slovakia SK","Sweden SE","Algeria DZ","Bhutan BT","Bosnia and Herzegovina BA","Costa Rica CR","Croatia HR","Cuba CU","Dominican Republic DO","Egypt EG","Estonia EE","Finland FI","France FR","Germany DE","Guatemala GT","Indonesia ID","Iraq IQ","Italy IT","Jordan JO","Kenya KE","Korea, South KR","Kosovo XK","Kuwait KW","Laos LA","Malaysia MY","Maldives MV","Mauritius MU","Mexico MX","Mongolia MN","Montenegro ME","Morocco MA","Myanmar MM","Namibia NA","Nepal NP","Nicaragua NI","Pakistan PK","Puerto Rico PR","Senegal SN","Serbia RS","Spain ES","Sri Lanka LK","Sudan SD","Tanzania TZ","Thailand TH","Turkey TR","Ukraine UA","United States US","Uruguay UY","Vietnam VN","Zambia ZM","Saudi Arabia SA","Iran IR","Peru PE","Åland AX","Lebanon LB","Brazil BR","American Samoa AS","Guam GU","Marshall Islands MH","Micronesia FM","Northern Mariana Islands MP","Palau PW","U.S. Virgin Islands VI"],["Guinea","Iceland","Lesotho","Madagascar","Oman","Palestine","Papua New Guinea","Afghanistan AF","Albania AL","Argentina AR","Armenia AM","Australia AU","Austria AT","Bangladesh BD","Belgium BE","Bulgaria BG","Cape Verde CV","Christmas Island CX","Greenland GL","Hungary HU","Liechtenstein LI","Luxembourg LU","New Zealand NZ","Niger NE","North Macedonia MK","Norway NO","Panama PA","Paraguay PY","Philippines PH","Portugal PT","Singapore SG","South Africa ZA","Switzerland CH","Svalbard and Jan Mayen SJ","Tunisia TN","Portugal PT","Slovenia SI","Venezuela VE"],["Jamaica JM","Singapore SG"],["Faroe Islands","Barbados","Andorra AD"],["Azerbaijan AZ","Latvia LV","British Virgin Islands VG","Saint Kitts and Nevis KN","Saint Vincent and the Grenadines VC","Samoa WS","Moldova MD"],["Lithuania LT","Barbados BB"]]}}}}]);