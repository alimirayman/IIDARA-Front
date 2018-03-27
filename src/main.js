// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { soc } from '@/api'
import io from 'socket.io-client'
import VueSocketio from 'vue-socket.io'

const socket = io(soc)

Vue.config.productionTip = false

Vue.use(VueSocketio, socket, store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
