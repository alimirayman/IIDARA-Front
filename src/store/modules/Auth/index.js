import axios from '@/helpers/axios'
import { LOGIN } from '@/api'

const state = {
  user: {
    email: 'ayman@karigor.io',
    password: '123456',
    name: 'Mir Ayman Ali',
    username: 'ayman',
    role: 'Karigor',
    avater: 'http://www.gravatar.com/avatar/30800f66cd6b5b4e01cf1234404118ff?s=512&r=g'
  }
}
const getters = {
  user: state => state.user
}
const mutations = {
  login (state, payload) {
    state.user.token = payload.token
    state.user.name = payload.name || state.user.name
    state.user.username = payload.username || state.user.username
    state.user.role = payload.role || state.user.role
    state.user.avater = payload.avater || state.user.avater
    localStorage.setItem('token', payload.token)
  }
}
const actions = {
  async LOGIN ({commit, getters}, payload) {
    let { data } = await axios.post(LOGIN, payload = getters.user)
    commit('login', data)
    console.log(data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
