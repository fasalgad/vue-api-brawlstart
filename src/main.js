import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiBrawl from './services/brawlstart'

Vue.config.productionTip = false
Vue.use(apiBrawl)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
