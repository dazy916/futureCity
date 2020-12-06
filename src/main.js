import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
// import { imgsPreloader } from './config/imgPreloader.js';
// import imgPreloaderList from './config/imgList.js';

Vue.config.productionTip = false
Vue.use(Vant);
//预加载图片
// (async () => {
//   await imgsPreloader(imgPreloaderList);
//   //关闭加载弹框
//   document.querySelector('.loading').style.display = 'none';
//   new Vue({
//     router,
//     render: h => h(App)
//   }).$mount('#app');
// })();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
