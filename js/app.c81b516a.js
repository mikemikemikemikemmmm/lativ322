(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],i[r]&&d.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d6c24e12","chunk-00ca8116":"970d93e3","chunk-05f77b14":"6b63086f","chunk-1442c83c":"2e7a0d1b","chunk-16e684e4":"967682af","chunk-2d0bff42":"d143e5ed","chunk-2d20fb44":"6b85d463","chunk-2d230ab2":"43a412fc","chunk-5d01b2b8":"30d8d7f6","chunk-7762ba96":"77708091","chunk-7e245861":"3144f797","chunk-866a08ee":"d393b651"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={about:1,"chunk-05f77b14":1,"chunk-1442c83c":1,"chunk-5d01b2b8":1,"chunk-7762ba96":1,"chunk-7e245861":1,"chunk-866a08ee":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"62ba15b5","chunk-00ca8116":"31d6cfe0","chunk-05f77b14":"2baae241","chunk-1442c83c":"a398eddf","chunk-16e684e4":"31d6cfe0","chunk-2d0bff42":"31d6cfe0","chunk-2d20fb44":"31d6cfe0","chunk-2d230ab2":"31d6cfe0","chunk-5d01b2b8":"630213cb","chunk-7762ba96":"93727131","chunk-7e245861":"071818b6","chunk-866a08ee":"1f1e4fa4"}[t]+".css",i=o.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,delete r[t],h.parentNode.removeChild(h),n(s)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/lativ32/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("7bb1"),r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto ",attrs:{id:"app"}},[t.isLoading?n("Loading",{staticClass:"w-100 h-100 flex-center ",attrs:{id:"loading"}}):t._e(),n("Nav"),n("router-view"),n("Foot")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"position-relative bg-white"},[n("section",{staticClass:"mt-2 d-none d-sm-flex flex-column mb-3 container"},[t._m(0),n("div",{staticClass:"row d-flex"},[n("router-link",{staticClass:"nav-logo col-2 text-primary h1 mb-0",attrs:{to:"/"}},[t._v("Lativ")]),n("div",{staticClass:"col-10 d-flex align-items-end"},[n("ul",{staticClass:"d-inline-flex align-items-center mb-0"},[n("li",{staticClass:"px-2"},[n("router-link",{staticClass:"nav_link px-2",class:{nav_link_select:"women"===t.$route.params.gender},attrs:{to:{name:"cardList",params:{gender:"women",category:"all"}}}},[t._v("WOMEN")])],1),n("div",{staticClass:"py-1 border-right"})]),n("ul",{staticClass:"d-inline-flex align-items-end mb-0 ml-auto"},[n("li",{staticClass:"ml-auto d-flex text-primary"},[n("a",{staticClass:"line-r mx-2 h6",attrs:{href:""}},[t._v("訂閱電子報")]),n("a",{staticClass:"mx-2 h6",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.routerToUser(e)}}},[t.user_email?n("span",[t._v("會員專區")]):n("span",[t._v("登入/註冊")])]),t.user_email?n("a",{staticClass:"mx-2 h6",on:{click:function(e){return e.preventDefault(),t.loginOut(e)}}},[t._v("登出")]):t._e(),n("span",{staticClass:"ml-2 position-relative h6",attrs:{href:""},on:{mouseenter:function(e){t.isHoverCart=!0},mouseleave:function(e){t.isHoverCart=!1}}},[t._v("\n              "+t._s(t.allQty)+"個商品\n              "),t.isAddToCart?n("div",{staticClass:"add-cart-show position-absolute border"},[n("h6",{staticClass:"text-center text-primary my-3"},[t._v("本商品已經加入購物車")]),n("div",{staticClass:"border-top border-bottom w-75 mb-3 py-3 mx-auto"},[n("img",{staticClass:"d-inline-block w-25",attrs:{src:t.lastCartProduct.imgUrl,alt:""}}),n("h6",{staticClass:"d-inline-block w-75 pl-1"},[t._v(t._s(t.showCartProduct(t.cart.length-1)))])]),n("div",{staticClass:"d-flex mb-3 mr-3"},[n("router-link",{staticClass:"check-btn ml-auto bg-primary text-white px-3 py-1 rounded",attrs:{to:"/check"}},[t._v("前往結帳")])],1)]):t._e(),t.isHoverCart?n("div",{staticClass:"add-cart-show position-absolute border"},[0!==t.cart.length?n("div",[n("table",{staticClass:"text-center w-75 py-3 mx-auto"},[t._m(1),t._l(t.cart,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.colorObject.colorName))]),n("td",[t._v(t._s(e.sizeObject.sizeName))]),n("td",[t._v(t._s(e.qty))])])})],2),n("div",{staticClass:"d-flex mb-3 mr-3"},[n("router-link",{staticClass:"check-btn ml-auto bg-primary text-white px-3 py-1 rounded",attrs:{to:"/check"}},[t._v("前往結帳")])],1)]):n("div",{staticClass:"text-center py-5"},[t._v("目前你還沒選購商品喔")])]):t._e()])])])])],1)]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ml-auto"},[n("input",{staticClass:"px-2",attrs:{type:"text",placeholder:"SEARCH"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"border-bottom"},[n("th",[t._v("商品名稱")]),n("th",[t._v("顏色")]),n("th",[t._v("尺寸")]),n("th",[t._v("數量")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mobile-header d-block d-sm-none position-fixed bg-white w-100 p-2"},[n("div",{staticClass:"d-flex w-100"},[n("div",{staticClass:"text-white bg-primary px-1 py-1 flex-center"},[t._v("Lativ")]),n("div",{staticClass:"rounded d-flex mx-3 flex-grow-1"},[n("i",{staticClass:"nav-search px-3 fas fa-search flex-center"}),n("input",{staticClass:"nav-search flex-grow-1 mr-2 border-0",attrs:{type:"text",name:"",id:"",placeholder:"輸入關鍵字"}})]),n("div",{staticClass:"px-1 py-1 position-relative h6"},[n("i",{staticClass:"far fa-comment"}),t._v("\n        消息\n      ")])]),n("ul",{staticClass:"d-flex text-unclick mb-0 mt-2"},[n("li",{staticClass:"px-2"},[t._v("首頁")]),n("li",{staticClass:"px-2"},[t._v("女裝")])])])}],l=(n("a481"),n("7508")),u={data:function(){return{selectedNav:"",isHoverCart:!1,user_email:""}},computed:{allQty:function(){return this.$store.state.cart.length},isAddToCart:function(){return this.$store.state.isAddToCart},lastCartProduct:function(){return this.$store.state.cart[this.$store.state.cart.length-1]},cart:function(){return this.$store.state.cart}},methods:{routerToUser:function(){"admin@gmail.com"===this.user_email?this.$router.push("/admin"):this.user_email?this.$router.push("/user"):this.$router.push("/login")},showCartProduct:function(t){return"".concat(this.cart[t].title,"-").concat(this.cart[t].gender," ").concat(this.cart[t].colorObject.colorName,"-").concat(this.cart[t].sizeObject.sizeName," NT$").concat(this.cart[t].totalPrice)},loginOut:function(){var t=this,e=new l["a"]("login_out","get",{},!0);e.doAxios(t,function(e){t.checkCookie()})},checkCookie:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)user_email\s*\=\s*([^;]*).*$)|^.*$/,"$1");t=decodeURIComponent(t),console.log(t),console.log(this.user_email),this.user_email=t||""}},created:function(){this.checkCookie()},watch:{$route:function(t,e){this.checkCookie()}}},d=u,h=(n("cdcd"),n("2877")),f=Object(h["a"])(d,c,o,!1,null,"826fd164",null),p=f.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"section-footer"}},[n("section",{staticClass:"d-sm-flex d-none py-3 border-top container"},[n("span",{staticClass:"d-flex"},[n("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("聯絡lativ")]),n("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("購物說明")]),n("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("最新消息")]),n("a",{staticClass:"text-primary px-lg-4 px-2",attrs:{href:""}},[t._v("品牌日誌")])]),n("span",{staticClass:"d-flex ml-auto"},[n("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("網站使用條款")]),n("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("隱私權政策")]),n("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("免責聲明")]),n("a",{staticClass:"text-primary px-lg-4 px-2",attrs:{href:""}},[t._v("© 2019 lativ")])])]),n("section",{staticClass:"mobile-footer border-top d-flex d-sm-none position-fixed bg-white w-100 pt-2"},[n("div",{staticClass:"w-25 text-center py-1"},[n("i",{staticClass:"fas fa-home"}),t._v("\n      首頁\n    ")]),n("div",{staticClass:"w-25 text-center py-1"},[n("i",{staticClass:"fas fa-bars"}),t._v("分類")]),n("div",{staticClass:"w-25 text-center py-1"},[n("i",{staticClass:"fas fa-shopping-cart"}),t._v("購物車")]),n("div",{staticClass:"w-25 text-center py-1"},[n("i",{staticClass:"fas fa-user"}),t._v("個人")])])])}],v={},C=v,_=(n("b475"),Object(h["a"])(C,m,b,!1,null,null,null)),x=_.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"loading_box"},[n("div",{staticClass:"loading-outside py-6 px-6 border border-primary rounded flex-center"},[n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])])])}],y=(n("68e0"),{}),w=Object(h["a"])(y,g,k,!1,null,"448b641e",null),E=w.exports,T={components:{Nav:p,Foot:x,Loading:E},computed:{isLoading:function(){return this.$store.state.isLoading}}},O=T,$=(n("5c0b"),Object(h["a"])(O,i,s,!1,null,null,null)),A=$.exports,j=n("8c4f");r["a"].use(j["a"]);var L=new j["a"]({mode:"history",base:"/lativ32/",routes:[{path:"/",name:"index",component:function(){return n.e("chunk-00ca8116").then(n.bind(null,"b8eb"))}},{path:"/admin",name:"",component:function(){return n.e("chunk-2d0bff42").then(n.bind(null,"405e"))},children:[{path:"",name:"admin_product",component:function(){return n.e("chunk-7762ba96").then(n.bind(null,"4ac2"))}},{path:"admin_order",name:"admin_order",component:function(){return n.e("chunk-2d20fb44").then(n.bind(null,"b583"))}},{path:"admin_category",name:"admin_category",component:function(){return n.e("chunk-2d230ab2").then(n.bind(null,"ecec"))}}]},{path:"/user",name:"user",component:function(){return n.e("chunk-7e245861").then(n.bind(null,"95a8"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-16e684e4").then(n.bind(null,"a62e"))}},{path:"/check",name:"",component:function(){return n.e("chunk-866a08ee").then(n.bind(null,"f7c7"))},children:[{path:"",name:"Check1",component:function(){return n.e("chunk-05f77b14").then(n.bind(null,"0516"))}},{path:"2",name:"Check2",component:function(){return n.e("chunk-5d01b2b8").then(n.bind(null,"1bf8"))}},{path:"3",name:"Check3",component:function(){return n.e("chunk-1442c83c").then(n.bind(null,"c7b8"))}}]},{path:"/:gender",name:"",component:function(){return n.e("about").then(n.bind(null,"1bad"))},children:[{path:"detail/:product_id",name:"productDetail",component:function(){return n.e("about").then(n.bind(null,"db8c"))}},{path:":category",name:"cardList",component:function(){return n.e("about").then(n.bind(null,"bbc2"))}},{path:"",name:"cardListIndex",component:function(){return n.e("about").then(n.bind(null,"bbc2"))}}]}]}),P=n("2f62");r["a"].use(P["a"]);var N=new P["a"].Store({state:{cart:[],isAddToCart:!1,asideData:{activity:{},women:[{title:"上身類",url:"tshirt",subCategory:[{name:"印花短T",url:"g-st"}]}]},checkStep:0,totalPrice:0,receiverData:{name:"",phone:"",address:"",invoice:"",invoiceData:""},payType:"",isLoading:!1,user_email:""},mutations:{ADDTOCART:function(t,e){t.cart.push(e),t.isAddToCart=!0,setTimeout(function(){t.isAddToCart=!1},1e3)},CHECKSTEP:function(t,e){t.checkStep=e},CHECKCART:function(t,e){t.cart=e},TOTALPRICE:function(t,e){t.totalPrice=e},SET_RECEIVE:function(t,e){t.receiverData=e},SETPAYTYPE:function(t,e){t.payType=e},LOADING:function(t,e){t.isLoading=e},SET_USER_EMAIL:function(t,e){t.user_email=e},SET_receiverData:function(t,e){t.receiverData=e}},actions:{}});n("4989");r["a"].use(a["a"]),r["a"].config.productionTip=!1,new r["a"]({router:L,store:N,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},"68e0":function(t,e,n){"use strict";var a=n("b83a"),r=n.n(a);r.a},7508:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("d225"),r=n("b0b4"),i=n("bc3a"),s=n.n(i),c=function(){function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(a["a"])(this,t),this.url="https://nodetest-234616.appspot.com/"+e,this.method=n,this.data=r,this.withCredentials=i}return Object(r["a"])(t,[{key:"doAxios",value:function(t,e,n){t.$store.commit("LOADING",!0),s()({url:this.url,method:this.method,data:this.data,withCredentials:this.withCredentials}).then(function(a){a.data.success?(e(a),t.$store.commit("LOADING",!1)):(n(a),t.$store.commit("LOADING",!1))}).catch(function(t){n(t)})}}]),t}()},"7a38":function(t,e,n){},b475:function(t,e,n){"use strict";var a=n("7a38"),r=n.n(a);r.a},b83a:function(t,e,n){},cdcd:function(t,e,n){"use strict";var a=n("d6e7"),r=n.n(a);r.a},d6e7:function(t,e,n){}});
//# sourceMappingURL=app.c81b516a.js.map