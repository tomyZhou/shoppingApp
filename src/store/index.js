import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 整个项目里都共用一份的全局数据定义
 * 
 * vue中的全局变量 this.$store.state 的取值与赋值
 * 注：如果不在 store目录下的 index.js 定义 则 在其它  ***.vue 页面 代码中赋值，其它页面的这个全局变量，是不会变化的。
 * 
 */
export default new Vuex.Store({
  state: {
    username: '', // 用户
    isLogin: false,
    address:[
      {
        name: '王小明',
        phone: 13568978546,
        city: '广州',
        detailAdd: '天河区花城大道111号'
      },
      {
        name: '李小丽',
        phone: 13568911546,
        city: '北京',
        detailAdd: '朝阳区朝阳北路111号'
      },
    ],
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
    GoodsCurrentSelKind: 0 // 表示显示全部分类商品  
  },
  mutations: {
    addGoodsToCart (state, item) {
      item.isInCart = true;
      item.count++;
      state.cartGoods.push(item);
      state.cartCounter++;
    },
    deleteGoodsFromCart(state, itemId) {
      state.cartCounter--;
      state.cartGoods.some((val, index, Goods) => {
        if (val.id === itemId) {
          val.isInCart = false;
          val.count--;
          Goods.splice(index, 1);
          return true;
        }
      })
    },
    addGoods(state, itemId){
      state.cartCounter++;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count++
          return true;
        }
      })
    },
    reduceGoods(state, itemId){
      state.cartCounter--;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count--;
          return true;
        }
      })
    },
    changeCurrentSelKind(state, kind){
      state.GoodsCurrentSelKind = kind;
    },
    login(state, username){
      state.username = username;
      state.isLogin = true;
    },
    logout(state){
      state.isLogin = false;
    },
    addNewAddress(state, newAdd){
      state.address.push(newAdd);
    },
    modifyAddress(state, item){
      state.address[item.index] = item.value;
    },
    deleteAddress(state, index){
      state.address.splice(index, 1);
    }
  }
})
