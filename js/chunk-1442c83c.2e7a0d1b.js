(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1442c83c"],{ac6a:function(t,e,s){for(var a=s("cadf"),i=s("0d58"),r=s("2aba"),c=s("7726"),n=s("32e9"),o=s("84f2"),l=s("2b4c"),v=l("iterator"),u=l("toStringTag"),d=o.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(_),m=0;m<f.length;m++){var h,p=f[m],C=_[p],y=c[p],L=y&&y.prototype;if(L&&(L[v]||n(L,v,d),L[u]||n(L,u,p),o[p]=d,C))for(h in a)L[h]||r(L,h,a[h],!0)}},c7b8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container mt-5"},[t._m(0),s("section",{staticClass:"step1 border mb-5 mx-auto"},t._l(t.cartData,function(e,a){return s("div",{key:a,staticClass:"py-4"},[s("div",{staticClass:"flex-center mx-auto w-75 position-relative"},[s("img",{attrs:{src:e.imgUrl,height:"70px"}}),s("div",[s("a",[s("h5",[t._v(t._s(e.fullId)+" "+t._s(e.title)+"-"+t._s(e.gender))])]),s("h5",[t._v("規格: "+t._s(e.colorObject.name)+" - "+t._s(e.sizeObject.name))])]),s("div",{staticClass:"flex-center ml-auto"},[t._v("\n          "+t._s(e.qty)+"件\n        ")]),s("div",{staticClass:"flex-center ml-4"},[t._v("$ "+t._s(e.qty*e.price))])])])}),0),s("section",{staticClass:"price-section d-flex mb-5"},[s("table",{staticClass:"ml-auto w-50 text-right p-2"},[s("td",[s("tr",[t._v("共"+t._s(t.totalNum)+"件")]),s("tr"),s("tr"),s("tr")]),t._m(1),s("td",[s("tr",[t._v("$"+t._s(t.totalPrice))]),s("tr",[t._v("$0")]),s("tr",[t._v("$0")]),s("tr",{staticClass:"text-price h5"},[t._v("$"+t._s(t.totalPrice))])])])]),s("section",{staticClass:"border w-100"},[t._m(2),s("div",{staticClass:"w-75 mx-auto border-bottom py-3 d-flex"},[s("div",{staticClass:"w-25 h4"},[t._v("付款方式")]),s("div",{staticClass:"w-75 h4"},[t._v(t._s(t.payType))])]),s("div",{staticClass:"w-75 mx-auto border-bottom py-3 d-flex"},[s("div",{staticClass:"w-25 h4"},[t._v("訂購姓名")]),s("div",{staticClass:"w-75 h4"},[t._v(t._s(t.receiverData.name))])]),s("div",{staticClass:"w-75 mx-auto border-bottom py-3 d-flex"},[s("div",{staticClass:"w-25 h4"},[t._v("收貨地址")]),s("div",{staticClass:"w-75 h4"},[t._v(t._s(t.receiverData.address))])]),s("div",{staticClass:"w-75 mx-auto py-3 d-flex"},[s("div",{staticClass:"w-25 h4"},[t._v("發票類型")]),s("div",{staticClass:"w-75 h4"},[t._v(t._s(t.receiverData.invoice))])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mb-5 text-center py-6"},[s("h1",[t._v("親愛的顧客您好，感謝您的訂購。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("tr",[t._v("商品金額")]),s("tr",[t._v("運費小計")]),s("tr",[t._v("帳戶扣抵")]),s("tr",[t._v("總計")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border-bottom"},[s("div",{staticClass:"w-75 mx-auto py-3 h4"},[t._v("取貨人資訊")])])}],r=(s("ac6a"),{name:"check3",data:function(){return{cartData:[],receiverData:{},payType:""}},computed:{step:function(){return this.$store.state.checkStep},totalNum:function(){var t=0;return this.cartData.forEach(function(e){t+=e.qty}),t},totalPrice:function(){var t=0;return this.cartData.forEach(function(e){t+=e.qty*e.price}),t}},created:function(){this.cartData=this.$store.state.cart,this.receiverData=this.$store.state.receiverData,this.payType=this.$store.state.payType,this.$store.commit("CHECKSTEP",3)}}),c=r,n=(s("f575"),s("2877")),o=Object(n["a"])(c,a,i,!1,null,"7e37c0e7",null);e["default"]=o.exports},df24:function(t,e,s){},f575:function(t,e,s){"use strict";var a=s("df24"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-1442c83c.2e7a0d1b.js.map