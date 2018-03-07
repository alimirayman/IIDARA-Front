import axios from 'axios'
import { KARIGOR } from '@/api'

axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

const state = {
  karigor: []
}
const getters = {
  karigor: state => state.karigor
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
