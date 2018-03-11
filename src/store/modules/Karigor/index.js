import axios from 'axios'
import { KARIGOR } from '@/api'

axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

const state = {
  karigor: [
    {
      name: 'Mir Ayman Ali',
      id: 1,
      username: 'ayman',
      email: 'ayman@karigor.io',
      phone: '01761767447',
      role: 'Karigor',
      avatar: 'http://www.gravatar.com/avatar/30800f66cd6b5b4e01cf1234404118ff?s=181'
    }
  ]
}
const getters = {
  karigor: state => state.karigor,
  karigorByUsername: (state) => (username) => state.karigor.find(el => el.username === username),
  karigorByID: (state) => (id) => state.karigor.find(el => el.id === id)
}
const mutations = {
  setKarigor (state, payload) {
    state.karigor = payload
  }
}
const actions = {
  async GET_KARIGOR ({commit}) {
    let { data } = await axios.get(KARIGOR)
    commit('setKarigor', data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
