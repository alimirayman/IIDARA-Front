import axios from '@/helpers/axios'
import { LOGIN, KARIGOR_USER } from '@/api'

const state = {
  user: {}
}
const getters = {
  user: state => state.user
}
const mutations = {
  login (state, payload) {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')

    // Store to vuex
    state.user.id = payload.id || id
    state.user.token = payload.token || token
    state.user.name = payload.name
    state.user.username = payload.username
    state.user.role = payload.role
    state.user.avatar = payload.avatar

    // Store Token and ID
    localStorage.setItem('token', (payload.token || token))
    localStorage.setItem('id', (payload.id || id))
  },
  clearUser (state, payload) {
    state.user = {}
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
}
const actions = {
  async LOGIN ({commit, getters}, payload) {
    if (payload) {
      let { data } = await axios.post(LOGIN, payload)
      commit('login', data)
    } else {
      let { data } = await axios.get(KARIGOR_USER(localStorage.getItem('id')))
      commit('login', data)
    }
  },
  LOGOUT ({ commit, getters }, payload) {
    commit('clearUser')
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
