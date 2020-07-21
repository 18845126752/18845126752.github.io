import Vue from 'vue'
import App from './App'
import router from './router'
import Kpc from 'kpc'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(Kpc);
Vue.use(VueRouter)
//Vue.use(ElementUI)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
//默认页面
//router.go('realName');
