import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.mixin({
  data () {
    return {
      // eslint-disable-next-line no-undef
      APP_CONFIG
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
