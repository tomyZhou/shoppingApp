<template>
  <div class="one-commodity" @click="goToDetailsPage">
    <div class="left" v-loading="loadingImg">   <!--v-loading 加载中效果 -->
      <img :src="imgUrl" >
    </div>
    <div class="right">
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p class="content">{{ content }}</p>
        <div>
          <span class="price"> ￥
            <span class="price-number">{{ price }}</span>
          </span>
        </div>
      </div>
      <div class="cart-btn">
        <el-button icon="el-icon-goods" type="danger" @click.stop.native="addGoodsToCart" v-show="counter === 0" circle> </el-button>
        <my-input-number :count="counter" v-show="counter > 0" @changeNumberEvent="getOperator"></my-input-number>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'one-commodity',
  //只有在props里定义的的属性才能在调用它的地方的标签里赋值
  props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
  
  data () {
    return {
      loadingImg: true,
      oneCommodity: {
        id: this.itemId,
        img: this.imgUrl,
        title: this.title,
        content: this.content,
        price: this.price,
        count: this.count,
        isInCart: false,
      }
    }
  },
  computed: {
    counter () {
      let that = this;
      let cartGoods = this.$store.state.cartGoods;
      let result = 0;
      cartGoods.some(good => {
        if (good.id === that.itemId) {
          result = good.count;
        }
      });
      return result;
    }
  },
  methods: {
    addGoodsToCart () {
      this.$store.commit('addGoodsToCart', this.oneCommodity);
    },
    getOperator (op) {
      let id = this.oneCommodity.id;
      if (op === 'plus') {
        this.$store.commit('addGoods', id);
      } else {
        let count = this.$store.state.cartGoods.filter(val => {
          return val.id === id;
        })[0].count;
        if (count === 1) {
          this.$store.commit('deleteGoodsFromCart', id);
        } else {
          this.$store.commit('reduceGoods', id);
        }
      }
    },
    goToDetailsPage () {
      this.$router.push({
        path: '/DetailsPage',
        query: this.oneCommodity
      });
      //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    },
  },
  created () {
    let img = new Image();
    img.src = this.imgUrl;
    img.onload = () => {
      this.loadingImg = false;
    }
  }
}

</script>

<style lang="scss" scoped>

//引入scss中定义的变量
@import "../assets/css/variable.scss";

.one-commodity{
  height: $OneCommodityWrapHeight;
  width: 100%;
  font-size: 0;
  border-bottom: 1px solid #e4e7ed;  //通过border-bottom实现底部分隔线
  background-color: #ffffff;
}


// /**
//  *   https://blog.csdn.net/weixin_30613433/article/details/97448356
//  *
// *    sass是一种基于ruby语言开发的CSS预处理器。它可以使用变量，嵌套，混入，继承，运算，函数等编程语言具有的特性进行CSS的开发，使得CSS的开发变得简单粗暴清晰可维护。
// *    sass有两种后缀文件格式：一种是sass后缀形式；一种是scss后缀形式。我选择的后缀是scss
// *
// *    变量的声明必须是$开头，后面接着变量名，（就像php一样），而变量名和变量值之间则用：连接（就像写CSS一样）。在值的后面加上!default表示默认值。如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。
// *
// *    src/assets/css/variable.scss 中定义了这些变量
// */
.one-commodity>div{
  font-size: $GobalFontSize;   
  display: inline-block;
  vertical-align: middle;
}
.left{
  width: 40%;
  height: 100%;
  text-align: left;  //覆盖掉父容器的居中效果，对非text也有效
  // background-color: #ff65af;
}
.left>img{
  height: 80%;
  margin-left: 50px;
  transform: translateY(10%);
}
.right{
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 60%;
  text-align: left;
  padding-left: 10px;
  .text{
    position: absolute;
    line-height: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .title{

  }

  .test{
    width: $HelloWrapWidth;
    height: $HelloWrapHeight;
  }

  .price {

    .price-number{
      color: #ff65af;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .cart-btn{
    position: absolute;  //绝对布局，只写了bottom,right就表示是靠下，靠右
    bottom: 15px;
    right: 30px;
    .el-button--danger{
      background-color: #ff65af;
      border-color: #ff65af;
    }
  }

}

//响应式布局，根据屏幕尺寸动态调整item的高度
@media screen and (min-width: 600px) {
  .one-commodity{
    height: $OneCommodityWrapHeight600;   
  }
}
@media screen and (min-width: 800px) {
  .one-commodity{
    height: $OneCommodityWrapHeight800;
  }
}
  @media screen and (min-width: 1025px) {
  .one-commodity{
    height: $OneCommodityWrapHeight1025;  
  }
}
</style>