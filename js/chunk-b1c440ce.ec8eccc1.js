(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1c440ce"],{"5fb7":function(t,e,s){},db63:function(t,e,s){"use strict";var i=s("5fb7"),r=s.n(i);r.a},f7c7:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoading?t._e():s("article",[t.isEmptyShow?s("section",{staticClass:"text-center py-6"},[s("h1",[t._v("你的購物車是空的喔")])]):s("section",[s("Step",{attrs:{step:t.nowStep}}),s("router-view",{on:{"set-step":t.setStep}})],1)])},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"step-arrow-group flex-center"},[s("div",{staticClass:"step-arrow d-flex align-items-center",class:{active:t.step>=1}},[t._m(0),s("div",{staticClass:"line"}),t._m(1)]),s("div",{staticClass:"step-arrow d-flex align-items-center",class:{active:t.step>=2}},[t._m(2),s("div",{staticClass:"line"}),t._m(3)]),s("div",{staticClass:"step-arrow d-flex align-items-center",class:{active:t.step>=3}},[t._m(4)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle rounded-circle flex-center position-relative"},[t._v("1\n      "),s("h6",{staticClass:"step-text text-center position-absolute text-black"},[t._v("購物車與運送")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"arrow-group"},[s("div",{staticClass:"up-arrow arrow"}),s("div",{staticClass:"down-arrow arrow"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle rounded-circle flex-center position-relative"},[t._v("2\n      "),s("h6",{staticClass:"step-text text-center position-absolute text-black"},[t._v("填寫資料")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"arrow-group"},[s("div",{staticClass:"up-arrow arrow"}),s("div",{staticClass:"down-arrow arrow"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle rounded-circle flex-center position-relative"},[t._v("3\n      "),s("h6",{staticClass:"step-text text-center position-absolute text-black"},[t._v("完成訂購")])])}],c=(s("cadf"),s("551c"),s("f751"),s("097d"),{props:["step"]}),o=c,l=(s("db63"),s("2877")),u=Object(l["a"])(o,a,n,!1,null,"74fa81b4",null),p=u.exports,f=(s("7508"),{data:function(){return{nowStep:1}},components:{Step:p},computed:{isLoading:function(){return this.$store.state.isLoading},user_email:function(){return this.$store.state.user_email},isEmptyShow:function(){return 3!==this.nowStep&&0===this.$store.state.cart.length}},methods:{setStep:function(t){this.nowStep=t},checkCookie:function(){""===this.user_email&&this.$router.push("/login")}},created:function(){this.checkCookie()},watch:{$route:function(t,e){this.checkCookie()}}}),d=f,v=Object(l["a"])(d,i,r,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-b1c440ce.ec8eccc1.js.map