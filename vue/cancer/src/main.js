import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import HighchartsVue from 'highcharts-vue';
// import VConsole from 'vconsole';
import dayjs from 'dayjs'
// import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Cookies from 'js-cookie'

import VCalendar from 'v-calendar';
Vue.use(VCalendar, {

});


Vue.use(VueAxios, axios)
Vue.use(HighchartsVue);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(dayjs)
// Vue.use(VConsole)
// Vue.use(Cookies)

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')

// 跳轉頁面時，頁面會從最頂部開始
// (原本是頁面會在我現在這頁的位置 ex.我滑到中間跳轉頁面，下一頁畫面會在中間)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});