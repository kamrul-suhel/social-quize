// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import VueResource from 'vue-resource'
import Vue2Filters from 'vue2-filters'
import './assets/bootstrap.min.css'

// vue validation plugin
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(Vue2Filters)

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
