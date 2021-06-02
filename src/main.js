import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'

const router = new VueRouter
({
    mode: 'history',
    routes
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
