import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/home/home.vue'

Vue.config.productionTip = false

var routes = [
    {
        path:  "/",
        component: Home
    }
]

var router = new VueRouter(routes);

Vue.use(router)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
