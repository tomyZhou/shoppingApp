<template>
  <div class="home">
    <home-header></home-header>
    <div class="home-main" >
      <transition-group  enter-active-class="slideInRight">
        <ul class="goods animated" :key="animatedCurrentKey"  >
          <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)">
            <one-commodity :itemId="item.id" :imgUrl="item.img" :title="item.title" :content="item.content"
              :price="item.price" :count="0"></one-commodity>
          </li>
        </ul>
        <div :key="'0' + animatedCurrentKey">
          <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
        </div>
      </transition-group>
    </div>

     <!--
          :visible指的是属性绑定，表示弹框的显示隐藏，当:visible的值为ture的时候，弹框显示，当为false的时候，弹框隐藏
          后面的.sync是什么意思呢，指的就是同步动态双向的来表示visible的值，当我们关闭窗口的时候，这个弹框隐藏了，visible的值
          发生了变化，但是关闭窗口这个动作，我们没法用确定的动作去判断这个值，所以用到了vue中的双向绑定的原则，在vue中统一加上了.sync来表示同步的修改了visible的值。
          原文链接：https://blog.csdn.net/zjpjay/article/details/113992083
     -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
      <p>这是手机端应用，用手机微信，或浏览器扫码打开，或chrome浏览器手机调试模式下打开效果更佳哦。</p>

      <img src="/static/url.png" height="280" width="280" style="margin-top: 10px;">

      <div style="margin:20px auto">
        <!--上右下左 子元素 左右居中-->
        <el-button @click="dialogVisible = false">取 消</el-button>
        <!--改变了dialogVisible这个值的属性，相关的UI自动刷新，不用自己控制太爽了。-->
        <el-button type="primary" plain @click="dialogVisible = false">确 定</el-button>
        <!-- <el-button type="primary" round icon="el-icon-search" @click="dialogVisible = false">确 定</el-button>
        <el-button type="primary" circle @click="dialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false" type="success"><span>成功按钮</span></el-button>
        <el-button @click="dialogVisible = false" type="info"><span>信息按钮</span></el-button>
        <el-button @click="dialogVisible = false" type="warning"><span>警告按钮</span></el-button>
        <el-button @click="dialogVisible = false" type="danger"><span>危险按钮</span></el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import OneCommodity from './HomeOneCommodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'home',
  data() {
    var UA = navigator.userAgent;
    var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
      isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
      isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
      isPC = !(isIphone || isAndroid || ipad);
    return {

      goods: [],   //定义一个变量，只要这个变量有重新，与这个变量有关的控件都会自动刷新

      dialogVisible: isPC  //定义一个变量，只要这个变量有重新，与这个变量有关的控件都会自动刷新
    }
  },
  computed: {
    animatedCurrentKey() {
      return this.$store.state.GoodsCurrentSelKind;
    }
  },
  methods: {
    //分类按钮点击时
    isCurrent(itemKind) {
      //全局变量GoodsCurrentSelKind在HomeHeader.vue的点击下发生了变化，依赖它的UI会重新绘制，这里就会重新调用。
      let currentKind = this.$store.state.GoodsCurrentSelKind;

      if (currentKind === 0) {
        //0表示全部商品
        return true;
      } else {
        return itemKind === currentKind;
      }
    },
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  //本地测试：http://localhost:8080/static/data/goods.json
  //gitHub：/shoppingApp/static/data/github-goods.json
  //阿里云：
  mounted() {
    this.axios.get('/static/data/github-goods.json')
      .then(res => {
        this.goods = [...res.data];
      })
      .catch(() => {
        this.axios.get('http://localhost:3333/static/data/goods.json')
          .then(res => {
            this.goods = [...res.data];
          })
      })
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home {
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;
}

.home-main {
  width: 100%;
  overflow-x: hidden;
}

.goods {
  width: 100%;
  list-style: none;
  padding: 0;
}

.goods>li {
  width: 100%;
}

.no-more-goods {
  height: 40px;
  line-height: 40px;
}


/**

C:\workspace\shoppingApp\src\assets\css\vue2-animate.css

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
*/
.slideInRight {
  animation-duration: 1.25s;   //切换动画，listview 整个是从右边切过来的。 覆盖vue中slideInRight的少数属性 
}
 

 
</style>
