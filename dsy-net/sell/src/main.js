import Vue from 'vue'
import App from './App'
import router from './router'
import Kpc from 'kpc'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(Kpc);
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
