import axios from 'axios'
import { CARD } from '@/api'

axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

const state = {
  cards: []
}
const getters = {
  cards: state => state.cards,
  userCard (state) {
    return (id) => {
      return state.cards.filter(el => el.karigor_id === id)
    }
  }
}
const mutations = {
  setCards (state, payload) {
    state.cards = payload
  }
}
const actions = {
  async GET_CARDS ({commit}) {
    let {data} = await axios.get(CARD)
    commit('setCards', data)
  },
  async POST_CARD ({commit}, payload) {
    let {data} = await axios.post(CARD, payload)
    commit('setCards', data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
