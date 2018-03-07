import axios from 'axios'
import { LOGIN } from '@/api'

const state = {
  user: {
    email: 'admin@karigor.io',
    password: '123456'
  }
}
const getters = {
  user: state => state.user
}
const mutations = {
  login (state, payload) {
    state.user.token = payload.token
    localStorage.setItem('token', payload.token)
  }
}
const actions = {
  async LOGIN ({commit, getters}, payload) {
    let { data } = await axios.post(LOGIN, payload = getters.user)
    commit('login', data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
