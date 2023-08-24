import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from './plugins/vuetify'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  store,
  Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
 
