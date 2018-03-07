import Vue from 'vue'
import Vuex from 'vuex'
import Karigor from './Karigor'

Vue.use(Vuex)

const state = {
  data: 'google'
}
const getters = {
  getData (state) { return state.data }
}
const mutations = {}
const actions = {}
const modules = {
  Karigor
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
