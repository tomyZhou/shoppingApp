webpackJsonp([1],{"+1eQ":function(t,e){},"+Kih":function(t,e){},"3j9/":function(t,e){},"5Ixc":function(t,e){},"7T6w":function(t,e){},"7l8u":function(t,e){},EIsY:function(t,e){},"Iw1+":function(t,e){},KfY9:function(t,e){},L8ge:function(t,e){},N2lN:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("MVMM"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"app-nav"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/Home"}},[s("div",{staticClass:"homeImg",class:t.homeImgOn,on:{click:t.changeNavImg}})]),t._v(" "),s("router-link",{staticClass:"nav-item",attrs:{to:"/Cart"}},[s("div",{staticClass:"cartImg",class:t.cartImgOn,on:{click:t.changeNavImg}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.cartCounter>0,expression:"cartCounter > 0"}],staticClass:"cart-counter"},[t._v(t._s(t.cartCounter))])])]),t._v(" "),s("router-link",{staticClass:"nav-item",attrs:{to:"/Profile"}},[s("div",{staticClass:"profileImg",class:t.profileImgOn,on:{click:t.changeNavImg}})])],1)},staticRenderFns:[]};var a={name:"App",components:{"app-nav":s("Z0/y")({name:"home",data:function(){return{homeImgOn:"",cartImgOn:"",profileImgOn:"",imgLoadCount:0}},methods:{changeNavImg:function(t){var e=t.target.className;e.includes("home")?(this.homeImgOn="homeImgOn",this.cartImgOn="",this.profileImgOn=""):e.includes("cart")?(this.homeImgOn="",this.cartImgOn="cartImgOn",this.profileImgOn=""):e.includes("profile")?(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="profileImgOn"):(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="")},autoChangeCurrentImg:function(){var t=this.currentPath;t.includes("Home")?(this.homeImgOn="homeImgOn",this.cartImgOn="",this.profileImgOn=""):t.includes("Cart")?(this.homeImgOn="",this.cartImgOn="cartImgOn",this.profileImgOn=""):t.includes("Profile")?(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="profileImgOn"):(this.homeImgOn="",this.cartImgOn="",this.profileImgOn="")}},computed:{cartCounter:function(){return this.$store.state.cartCounter},currentPath:function(){return this.$route.path}},mounted:function(){this.autoChangeCurrentImg()},updated:function(){this.autoChangeCurrentImg()}},o,!1,function(t){s("aSoD")},"data-v-8e10fdf8",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),this._v(" "),e("app-nav")],1)},staticRenderFns:[]};var i=s("Z0/y")(a,r,!1,function(t){s("h4v4")},null,null).exports,c=s("zO6J"),d=s("IHPB"),l=s.n(d),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"one-commodity",on:{click:t.goToDetailsPage}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.imgUrl}})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),s("div",[s("span",{staticClass:"price"},[t._v(" ￥\n          "),s("span",{staticClass:"price-number"},[t._v(t._s(t.price))])])])]),t._v(" "),s("div",{staticClass:"cart-btn"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:0===t.counter,expression:"counter === 0"}],attrs:{icon:"el-icon-goods",type:"danger",circle:""},nativeOn:{click:function(e){return e.stopPropagation(),t.addGoodsToCart(e)}}}),t._v(" "),s("my-input-number",{directives:[{name:"show",rawName:"v-show",value:t.counter>0,expression:"counter > 0"}],attrs:{count:t.counter},on:{changeNumberEvent:t.getOperator}})],1)])])},staticRenderFns:[]};var m=s("Z0/y")({name:"one-commodity",props:["itemId","imgUrl","title","content","price","count"],data:function(){return{oneCommodity:{id:this.itemId,img:this.imgUrl,title:this.title,content:this.content,price:this.price,count:this.count,isInCart:!1}}},computed:{counter:function(){var t=this,e=0;return this.$store.state.cartGoods.some(function(s){s.id===t.itemId&&(e=s.count)}),e}},methods:{addGoodsToCart:function(){this.$store.commit("addGoodsToCart",this.oneCommodity)},getOperator:function(t){var e=this.oneCommodity.id;"plus"===t?this.$store.commit("addGoods",e):1===this.oneCommodity.count?this.$store.commit("deleteGoodsFromCart",e):this.$store.commit("reduceGoods",e)},goToDetailsPage:function(){this.$router.push({path:"/DetailsPage",query:this.oneCommodity}),this.$store.state.cartCounter++,this.$store.state.cartCounter--}}},u,!1,function(t){s("5Ixc")},"data-v-5b4ec771",null).exports,h=s("cUn4"),p=s.n(h),f={name:"home-header",data:function(){return{kindToType:new p.a([["全部",0],["水果",1],["蔬菜",2],["肉蛋",3],["速冻",4],["酒饮",5],["乳品",6],["零食",7]]),goodsType:"全部"}},methods:{changeGoodsType:function(){this.$store.state.GoodsCurrentSelKind=this.kindToType.get(this.goodsType)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"home-header"},[s("h4",{staticClass:"top-text"},[t._v(" 一小时达 ")]),t._v(" "),s("div",{staticClass:"tap-menu"},[s("el-tabs",{staticStyle:{height:"40px"},attrs:{"tab-position":"top",type:"border-card"},on:{"tab-click":t.changeGoodsType},model:{value:t.goodsType,callback:function(e){t.goodsType=e},expression:"goodsType"}},[s("el-tab-pane",{attrs:{label:"全部",name:"全部"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"水果",name:"水果"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"蔬菜",name:"蔬菜"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"肉蛋",name:"肉蛋"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"速冻",name:"速冻"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"酒饮",name:"酒饮"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"乳品",name:"乳品"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"零食",name:"零食"}})],1)],1)])},staticRenderFns:[]};var g={name:"home",data:function(){return{goods:[],animatedCurrentKey:0}},computed:{},methods:{isCurrent:function(t){var e=this.$store.state.GoodsCurrentSelKind;return this.animatedCurrentKey=e,0===e||t===e}},components:{OneCommodity:m,HomeHeader:s("Z0/y")(f,v,!1,function(t){s("7l8u")},"data-v-2336ce13",null).exports},mounted:function(){var t=this;this.axios.get("/shoppingApp/static/data/github-goods.json").then(function(e){t.goods=[].concat(l()(e.data))}).catch(function(){t.axios.get("http://localhost:8080/static/data/goods.json").then(function(e){t.goods=[].concat(l()(e.data))})})}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("home-header"),t._v(" "),s("div",{staticClass:"home-main"},[s("transition-group",{attrs:{"enter-active-class":"slideInRight"}},[s("ul",{key:t.animatedCurrentKey,staticClass:"goods animated"},t._l(t.goods,function(e){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.isCurrent(e.kind),expression:"isCurrent(item.kind)"}],staticClass:"one-com"},[s("one-commodity",{attrs:{itemId:e.id,imgUrl:e.img,title:e.title,content:e.content,price:e.price,count:0}})],1)})),t._v(" "),s("div",{key:"0"+t.animatedCurrentKey},[s("p",{staticClass:"no-more-goods"},[t._v("没有更多商品啦，敬请期待!!!")])])])],1)],1)},staticRenderFns:[]};var C=s("Z0/y")(g,_,!1,function(t){s("xsgU")},"data-v-20d5a800",null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-one-item"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.imgUrl}})]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),s("div",[s("span",{staticClass:"price"},[t._v(" ￥\n          "),s("span",{staticClass:"price-number"},[t._v(t._s(t.price))])])])]),t._v(" "),s("div",{staticClass:"cart-btn"},[s("my-input-number",{attrs:{count:t.counter},on:{changeNumberEvent:t.getOperator}})],1)]),t._v(" "),s("div",{staticClass:"dialog-box",on:{click:function(t){t.stopPropagation()}}},[s("el-dialog",{attrs:{visible:t.dialogVisible,width:"80%","show-close":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("span",[t._v("你确定删除该商品么？")]),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.confirmDelete}},[t._v("删除")])],1)])],1)])},staticRenderFns:[]};var y={name:"cart",components:{"cart-one-item":s("Z0/y")({name:"one-commodity",props:["itemId","imgUrl","title","content","price","count"],data:function(){return{dialogVisible:!1}},computed:{id:function(){return this.itemId},counter:function(){var t=this,e=0;return this.$store.state.cartGoods.some(function(s){s.id===t.id&&(e=s.count)}),e}},methods:{getOperator:function(t){"plus"===t?this.$store.commit("addGoods",this.id):1===this.counter?this.dialogVisible=!0:this.$store.commit("reduceGoods",this.id)},confirmDelete:function(){this.dialogVisible=!1,this.$store.commit("deleteGoodsFromCart",this.id)}}},b,!1,function(t){s("vEJQ")},"data-v-0981f0d0",null).exports},data:function(){return{redPackets:[{id:1,money:10,limit:70,label:"10元红包(满70可用)"},{id:2,money:20,limit:100,label:"20元红包(满100可用)"},{id:3,money:30,limit:150,label:"30元红包(满150可用)"}],redPacket:"",redPacketPlaceholder:"无可用红包",postage:6,needPostage:!0}},computed:{cartGoods:function(){return this.$store.state.cartGoods},amount:function(){var t=0;return this.$store.state.cartGoods.forEach(function(e){t+=e.price*e.count}),t},pay:function(){var t=this.amount-this.redPacket;return this.needPostage=!(t>=49),this.needPostage&&(t+=this.postage),t}},methods:{isRedPacketDisabled:function(t){var e=this;return this.amount<this.redPackets[0].limit?(this.redPacket="",this.redPacketPlaceholder="无可用红包",!0):(this.redPackets.concat().reverse().some(function(t){if(t.limit<=e.amount)return e.redPacket=t.money,!0}),this.amount<t||(this.redPacketPlaceholder="请选择红包",!1))},toOrderForm:function(){this.$store.state.isLogin?this.cartGoods.length>0&&this.$router.push({path:"/OrderForm",query:{cartGoods:this.cartGoods,pay:this.pay}}):this.$router.push({path:"/Login"})}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart"},[t._m(0),t._v(" "),t.cartGoods.length>0?s("main",{staticClass:"cart-body"},[s("div",{staticClass:"wrap"},[s("ul",{staticClass:"goods-wrap"},t._l(t.cartGoods,function(t){return s("li",{staticClass:"cartGoodsItem"},[s("cart-one-item",{attrs:{itemId:t.id,imgUrl:t.img,title:t.title,content:t.content,price:t.price,count:t.count}})],1)})),t._v(" "),s("div",{staticClass:"price-wrap"},[s("div",{staticClass:"amount"},[t._v("商品总价：\n            "),s("span",{staticClass:"float-right"},[t._v("￥"+t._s(t.amount))])]),t._v(" "),s("div",{staticClass:"red-packet"},[s("div",[t._v("红包：\n              "),s("el-select",{attrs:{placeholder:t.redPacketPlaceholder},model:{value:t.redPacket,callback:function(e){t.redPacket=e},expression:"redPacket"}},t._l(t.redPackets,function(e){return s("el-option",{key:e.id,attrs:{label:e.label,value:e.money,disabled:t.isRedPacketDisabled(e.limit)}})})),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.redPacket,expression:"redPacket"}],staticClass:"float-right"},[t._v("-￥"+t._s(t.redPacket))])],1)]),t._v(" "),s("div",{staticClass:"pay"},[s("div",[t._v("商品实付：\n              "),s("span",{staticClass:"float-right"},[t._v("￥"+t._s(t.amount-t.redPacket))])]),t._v(" "),s("div",[s("span",[t._v("运费（实付满49免邮）：")]),t._v(" "),s("span",{staticClass:"float-right"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.needPostage,expression:"needPostage"}],staticClass:"postage"},[t._v("￥"+t._s(t.postage))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.needPostage,expression:"!needPostage"}],staticClass:"postage"},[t._v("免邮")])])]),t._v(" "),s("div",[s("span",{staticClass:"text-left"},[t._v("合计：\n                "),s("span",{staticClass:"float-right"},[t._v("￥"+t._s(t.pay))])])])])])])]):t._e(),t._v(" "),s("footer",{directives:[{name:"show",rawName:"v-show",value:t.cartGoods.length>0,expression:"cartGoods.length > 0"}],staticClass:"cart-footer"},[s("div",{staticClass:"toPay"},[s("el-button",{staticClass:"text-right",attrs:{type:"danger"},on:{click:t.toOrderForm}},[t._v("去结算"),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)]),t._v(" "),0===t.cartGoods.length?s("div",{staticClass:"empty-wrap"},[t._v("\n      你还没有添加任何商品哦~\n    ")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"cart-header"},[e("h3",[this._v("我的购物车")])])}]};var $=s("Z0/y")(y,w,!1,function(t){s("lqN5")},"data-v-6d7134e3",null).exports,A={data:function(){return{addressPlaceHolder:"请选择地址",selectAddress:0}},computed:{cartGoods:function(){return this.$route.query.cartGoods},pay:function(){return this.$route.query.pay},address:function(){return this.$store.state.address}},methods:{toCart:function(){this.$router.push({path:"/Cart"}),this.$store.state.cartCounter++,this.$store.state.cartCounter--},toPay:function(){this.$store.state.cartGoods=[],this.$store.state.cartCounter=0,this.$router.push({path:"/Cart"}),this.$store.state.cartCounter++,this.$store.state.cartCounter--,alert("支付成功")}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-form"},[s("header",[s("span",{staticClass:"toProfile",on:{click:t.toCart}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("h3",[t._v("填写订单")])]),t._v(" "),s("main",[s("div",{staticClass:"order-form-item"},t._l(t.cartGoods,function(e){return t.cartGoods.length>0?s("div",{staticClass:"goods"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:e.img}})]),t._v(" "),s("div",{staticClass:"right"},[s("p",[t._v(t._s(e.count))])])]):t._e()})),t._v(" "),s("div",{staticClass:"order-form-item"},[s("p",[t._v("合计：\n        "),s("span",{staticClass:"price"},[t._v("￥"+t._s(t.pay))])])]),t._v(" "),s("div",{staticClass:"order-form-item"},[s("span",[t._v("地址：")]),t._v(" "),t.address.length>0?s("el-select",{attrs:{placeholder:t.addressPlaceHolder},model:{value:t.selectAddress,callback:function(e){t.selectAddress=e},expression:"selectAddress"}},t._l(t.address,function(t,e){return s("el-option",{key:e,attrs:{label:t.name+t.phone+t.city+t.detailAdd,value:e}})})):t._e()],1)]),t._v(" "),s("footer",{staticClass:"order-form-footer"},[s("div",[s("span",{staticClass:"price-wrap"},[t._v("付款"),s("span",{staticClass:"price"},[t._v("￥"+t._s(t.pay))])]),t._v(" "),s("el-button",{staticClass:"text-right",attrs:{type:"danger"},on:{click:t.toPay}},[t._v("去支付"),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)])])},staticRenderFns:[]};var k=s("Z0/y")(A,P,!1,function(t){s("qT9j")},"data-v-1a64b820",null).exports,I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-page"},[s("header",[s("span",{staticClass:"toPrePage",on:{click:t.toPrePage}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("h3",[t._v("登录")])]),t._v(" "),s("main",[s("div",{staticClass:"login"},[s("el-form",[s("el-form-item",[s("el-input",{attrs:{placeholder:"请输入帐号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("el-form-item",[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("登录")]),t._v(" "),s("el-button",[t._v("注册")])],1)],1)],1)])])},staticRenderFns:[]};var F=s("Z0/y")({name:"login",data:function(){return{username:"王小明",password:"123456"}},methods:{login:function(){this.$store.commit("login",this.username),this.$router.go(-1)},toPrePage:function(){this.$router.go(-1)}}},I,!1,function(t){s("TfK6")},"data-v-2716145c",null).exports,x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-page",on:{click:t.updatedNavImg}},[s("header",{staticClass:"dp-header"},[s("span",{staticClass:"dp-header-toRoot"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"el-icon-arrow-left"})])],1),t._v(" "),s("h3",[t._v("商品详情")])]),t._v(" "),s("main",{staticClass:"dp-main"},[s("div",{staticClass:"goods-img-wrap"},[s("img",{attrs:{src:t.goods.img}})]),t._v(" "),s("div",{staticClass:"goods-card"},[s("h3",[t._v(t._s(t.goods.title))]),t._v(" "),s("p",[t._v(t._s(t.goods.content))]),t._v(" "),s("div",[s("span",[t._v("￥\n          "),s("span",{staticClass:"goods-price"},[t._v(t._s(t.goods.price))])])])]),t._v(" "),s("div",{staticClass:"goods-intruction"},t._l(30,function(e){return s("p",[t._v("\n        这是"+t._s(t.goods.title)+" 的商品详细介绍\n      ")])}))]),t._v(" "),s("footer",{staticClass:"dp-footer"},[s("span",[s("router-link",{attrs:{to:"/Cart"}},[s("el-button",{attrs:{icon:"el-icon-goods"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.cartCounter>0,expression:"cartCounter > 0"}],staticClass:"cart-counter"},[t._v(t._s(t.cartCounter))])])],1)],1),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.addGoodsToCart}},[t._v("加入购物车")])],1)])},staticRenderFns:[]};var O=s("Z0/y")({name:"detail-page",data:function(){return{}},computed:{cartCounter:function(){return this.$store.state.cartCounter},goods:function(){return this.$route.query}},methods:{addGoodsToCart:function(){this.goods.isInCart?this.$store.commit("addGoods",this.goods.id):this.$store.commit("addGoodsToCart",this.goods)},updatedNavImg:function(){this.$store.state.cartCounter++,this.$store.state.cartCounter--}}},x,!1,function(t){s("KfY9")},"data-v-7d273f88",null).exports,G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[t.isLogin?s("div",{staticClass:"user"},[s("header",{staticClass:"profile-header"},[s("h3",[t._v("当前用户："+t._s(t.username))])]),t._v(" "),s("main",{staticClass:"profile-body"},[s("div",{staticClass:"address"},[s("el-button",{on:{click:function(e){return e.stopPropagation(),t.toEditAddressPage(e)}}},[t._v("我的地址"),s("i",{staticClass:"el-icon-arrow-right"})])],1)]),t._v(" "),s("footer",{staticClass:"profile-footer"},[s("div",[s("el-button",{attrs:{type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1)])]):s("div",{staticClass:"login"},[s("el-button",{attrs:{type:"success"},on:{click:t.toLogin}},[t._v("登录")])],1),t._v(" "),s("transition",{attrs:{"enter-active-class":"slideInRight"}},[s("router-view")],1)],1)},staticRenderFns:[]};var E=s("Z0/y")({name:"profile",data:function(){return{}},computed:{username:function(){return this.$store.state.username},isLogin:function(){return this.$store.state.isLogin}},methods:{toLogin:function(){this.$router.push({path:"/Login"})},toEditAddressPage:function(){this.$router.push({path:"/Profile/EditAddressPage"})},logout:function(){this.$store.commit("logout"),this.$router.push({path:"/Profile"})}}},G,!1,function(t){s("Q1dv")},"data-v-62419169",null).exports,N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-address-page"},[s("header",[s("span",{staticClass:"toProfile",on:{click:t.toProfile}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("h3",[t._v("我的收货地址")])]),t._v(" "),s("main",[t.allAddress.length>0?s("ul",{staticClass:"all-address"},t._l(t.allAddress,function(e,n){return s("li",{staticClass:"address"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v(t._s(e.phone))]),t._v(" "),s("p",[t._v(t._s(e.city+e.detailAdd))]),t._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(e){t.toModifyAddress(n)}}},[t._v("编辑")])],1)})):t._e()]),t._v(" "),s("footer",[s("el-button",{attrs:{type:"danger"},on:{click:t.toAdressInputForm}},[t._v("\n      新增收货地址\n    ")])],1)])},staticRenderFns:[]};var T=s("Z0/y")({data:function(){return{}},computed:{allAddress:function(){return this.$store.state.address}},methods:{toProfile:function(){this.$router.push({path:"/Profile"}),this.$store.state.cartCounter++,this.$store.state.cartCounter--},toAdressInputForm:function(){this.$router.push({path:"/Profile/AddNewAddress"})},toModifyAddress:function(t){this.$router.push({path:"/Profile/ModifyAddress",query:{index:t}})}}},N,!1,function(t){s("Sr/0")},"data-v-7725d044",null).exports,q={data:function(){return{newAddForm:{name:"",phone:"",city:"",detailAdd:""},rules:{name:[{required:!0,message:"请输入名字",trigger:"blur"}],phone:[{required:!0,validator:function(t,e,s){return e?/^1[3-9]{1}[0-9]{9}$/.test(e)?void s():s(new Error("手机号不正确")):s(new Error("手机号不能为空"))},trigger:"blur"}],city:[{required:!0,message:"请输入所在城市",trigger:"blur"}],detailAdd:[{required:!0,message:"请输入详细地址",trigger:"blur"}]}}},methods:{toProfile:function(){this.$router.push({path:"/Profile/EditAddressPage"}),this.$store.state.cartCounter++,this.$store.state.cartCounter--},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$store.commit("addNewAddress",e.newAddForm),e.$router.push({path:"/Profile/EditAddressPage"})})},resetForm:function(t){this.$refs[t].resetFields()}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-new-address"},[s("header",[s("span",{staticClass:"toProfile",on:{click:t.toProfile}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("h3",[t._v("新增收货地址")])]),t._v(" "),s("main",[s("el-form",{ref:"newAddForm",staticClass:"newAddForm",attrs:{model:t.newAddForm,rules:t.rules,"label-position":"left","label-width":"100px"}},[s("el-form-item",{attrs:{label:"收货人",prop:"name"}},[s("el-input",{model:{value:t.newAddForm.name,callback:function(e){t.$set(t.newAddForm,"name",e)},expression:"newAddForm.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"电话",prop:"phone"}},[s("el-input",{model:{value:t.newAddForm.phone,callback:function(e){t.$set(t.newAddForm,"phone",t._n(e))},expression:"newAddForm.phone"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"所在城市",prop:"city"}},[s("el-input",{model:{value:t.newAddForm.city,callback:function(e){t.$set(t.newAddForm,"city",e)},expression:"newAddForm.city"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"收货地址",prop:"detailAdd"}},[s("el-input",{model:{value:t.newAddForm.detailAdd,callback:function(e){t.$set(t.newAddForm,"detailAdd",e)},expression:"newAddForm.detailAdd"}})],1)],1)],1),t._v(" "),s("footer",[s("el-form",[s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("newAddForm")}}},[t._v("保存收货地址")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(e){t.resetForm("newAddForm")}}},[t._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var K=s("Z0/y")(q,R,!1,function(t){s("+1eQ")},"data-v-6722994f",null).exports,Z={data:function(){return{rules:{name:[{required:!0,message:"请输入名字",trigger:"blur"}],phone:[{required:!0,validator:function(t,e,s){return e?/^1[3-9]{1}[0-9]{9}$/.test(e)?void s():s(new Error("手机号不正确")):s(new Error("手机号不能为空"))},trigger:"blur"}],city:[{required:!0,message:"请输入所在城市",trigger:"blur"}],detailAdd:[{required:!0,message:"请输入详细地址",trigger:"blur"}]}}},computed:{itemIndex:function(){return this.$route.query.index},newAddForm:function(){return this.$store.state.address[this.itemIndex]}},methods:{toProfile:function(){this.$router.push({path:"/Profile/EditAddressPage"}),this.$store.state.cartCounter++,this.$store.state.cartCounter--},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$store.commit("modifyAddress",{index:e.itemIndex,value:e.newAddForm}),e.$router.push({path:"/Profile/EditAddressPage"})})},deleteAddress:function(){this.$store.commit("deleteAddress",this.itemIndex),this.$router.push({path:"/Profile/EditAddressPage"})}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modify-address"},[s("header",[s("span",{staticClass:"toProfile",on:{click:t.toProfile}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("h3",[t._v("修改收货地址")])]),t._v(" "),s("main",[s("el-form",{ref:"newAddForm",staticClass:"newAddForm",attrs:{model:t.newAddForm,rules:t.rules,"label-position":"left","label-width":"100px"}},[s("el-form-item",{attrs:{label:"收货人",prop:"name"}},[s("el-input",{model:{value:t.newAddForm.name,callback:function(e){t.$set(t.newAddForm,"name",e)},expression:"newAddForm.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"电话",prop:"phone"}},[s("el-input",{model:{value:t.newAddForm.phone,callback:function(e){t.$set(t.newAddForm,"phone",t._n(e))},expression:"newAddForm.phone"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"所在城市",prop:"city"}},[s("el-input",{model:{value:t.newAddForm.city,callback:function(e){t.$set(t.newAddForm,"city",e)},expression:"newAddForm.city"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"收货地址",prop:"detailAdd"}},[s("el-input",{model:{value:t.newAddForm.detailAdd,callback:function(e){t.$set(t.newAddForm,"detailAdd",e)},expression:"newAddForm.detailAdd"}})],1)],1)],1),t._v(" "),s("footer",[s("el-form",[s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("newAddForm")}}},[t._v("保存修改")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.deleteAddress}},[t._v("删除收货地址")])],1)],1)],1)])},staticRenderFns:[]};var S=s("Z0/y")(Z,L,!1,function(t){s("7T6w")},"data-v-bbf943b6",null).exports;n.default.use(c.a);var M=new c.a({routes:[{path:"*",redirect:"/Home"},{path:"/Home",component:C,meta:{index:1}},{path:"/Cart",component:$},{path:"/OrderForm",component:k},{path:"/Login",component:F},{path:"/Profile",component:E,children:[{path:"EditAddressPage",component:T},{path:"AddNewAddress",component:K},{path:"ModifyAddress",component:S}]},{path:"/DetailsPage",component:O}]}),H=s("9rMa");n.default.use(H.a);var j=new H.a.Store({state:{username:"",isLogin:!1,address:[{name:"王小明",phone:13568978546,city:"广州",detailAdd:"天河区花城大道111号"},{name:"李小丽",phone:13568911546,city:"北京",detailAdd:"朝阳区朝阳北路111号"}],cartGoods:[],cartCounter:0,GoodsCurrentSelKind:0},mutations:{addGoodsToCart:function(t,e){e.isInCart=!0,e.count++,t.cartGoods.push(e),t.cartCounter++},deleteGoodsFromCart:function(t,e){t.cartCounter--,t.cartGoods.some(function(t,s,n){if(t.id===e)return t.isInCart=!1,t.count--,n.splice(s,1),!0})},addGoods:function(t,e){t.cartCounter++,t.cartGoods.some(function(t){if(t.id===e)return t.count++,!0})},reduceGoods:function(t,e){t.cartCounter--,t.cartGoods.some(function(t){if(t.id===e)return t.count--,!0})},changeCurrentSelKind:function(t,e){t.GoodsCurrentSelKind=e},login:function(t,e){t.username=e,t.isLogin=!0},logout:function(t){t.isLogin=!1},addNewAddress:function(t,e){t.address.push(e)},modifyAddress:function(t,e){t.address[e.index]=e.value},deleteAddress:function(t,e){t.address.splice(e,1)}}}),D=s("aozt"),U=s.n(D),V=s("qbg9"),Q=s.n(V),Y=(s("vfIS"),s("tV6h"),s("VTag")),B=s.n(Y),J=(s("L8ge"),s("N5e6")),z=s.n(J),W=(s("hNqO"),s("i5RB")),X=s.n(W),tt=(s("+Kih"),s("gZws")),et=s.n(tt),st=(s("xIex"),s("wCKp")),nt=s.n(st),ot=(s("t5Ke"),s("HNWp")),at=s.n(ot),rt=(s("m8Cl"),s("MrOs")),it=s.n(rt),ct=(s("n3Sy"),s("YGKM")),dt=s.n(ct),lt=(s("fE9y"),s("yWGh")),ut=s.n(lt),mt=(s("EIsY"),s("EjZ/")),ht=s.n(mt),pt=(s("ajFv"),s("bRqE")),ft=s.n(pt),vt=(s("OeGC"),s("KAis")),gt=s.n(vt),_t=(s("3j9/"),s("/6s/")),Ct=s.n(_t),bt=(s("N2lN"),s("8lvO")),yt=s.n(bt),wt=(s("Iw1+"),s("0iz1")),$t=s.n(wt),At=(s("Z/nt"),s("6u3b")),Pt=s.n(At);n.default.use(Pt.a),n.default.use($t.a),n.default.use(yt.a),n.default.use(Ct.a),n.default.use(gt.a),n.default.use(ft.a),n.default.use(ht.a),n.default.use(ut.a),n.default.use(dt.a),n.default.use(it.a),n.default.use(at.a),n.default.use(nt.a),n.default.use(et.a),n.default.use(X.a),n.default.use(z.a),n.default.use(B.a);var kt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-input-number",on:{click:function(t){t.stopPropagation()}}},[e("i",{staticClass:"el-icon-remove-outline",on:{click:this.minus}}),this._v(" "),e("span",{staticClass:"inputText"},[this._v(this._s(this.number))]),this._v(" "),e("i",{staticClass:"el-icon-circle-plus",on:{click:this.plus}})])},staticRenderFns:[]};var It=s("Z0/y")({name:"MyInputNumber",props:["count"],data:function(){return{operator:""}},computed:{number:function(){return this.count}},methods:{minus:function(){this.operator="minus",this.changeNumber()},plus:function(){this.operator="plus",this.changeNumber()},changeNumber:function(){this.$emit("changeNumberEvent",this.operator)}}},kt,!1,function(t){s("ffqB")},"data-v-2ba6e3cc",null).exports,Ft={install:function(t){t.component("MyInputNumber",It)}};n.default.use(Ft);s("Qbok"),s("iOvl");n.default.use(Q.a,U.a),n.default.config.productionTip=!1,M.afterEach(function(){window.scrollTo(0,0)}),new n.default({el:"#app",router:M,store:j,components:{App:i},template:"<App/>"})},OeGC:function(t,e){},Q1dv:function(t,e){},Qbok:function(t,e){},"Sr/0":function(t,e){},TfK6:function(t,e){},"Z/nt":function(t,e){},aSoD:function(t,e){},ajFv:function(t,e){},fE9y:function(t,e){},ffqB:function(t,e){},h4v4:function(t,e){},hNqO:function(t,e){},iOvl:function(t,e){},lqN5:function(t,e){},m8Cl:function(t,e){},n3Sy:function(t,e){},qT9j:function(t,e){},t5Ke:function(t,e){},tV6h:function(t,e){},vEJQ:function(t,e){},vfIS:function(t,e){},xIex:function(t,e){},xsgU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a123710ae1ee22284d9e.js.map