// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'       //引入之后就可以直接new Vue({ })使用了
import App from './App'     //引入App.vue文件，此时去解析App.vue，然后返回一个组件对象给App
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

//根目录里将要引入的东西基础组件都引入了
import './ui/element-ui.js'
import './ui/my-own-ui.js'

import './assets/css/base.css'
import './assets/css/vue2-animate.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


router.afterEach(() => {
    window.scrollTo(0,0);
});

//这里是整个项目的入口！
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})