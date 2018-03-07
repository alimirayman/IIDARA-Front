import axios from 'axios'
import { karigor } from '../../api'

const state = {
  karigor: [
    {
      address: 'Mohakhali',
      avatar: null,
      email: 'tahmid@karigor.io',
      id: 1,
      name: 'Tahmid Choyon',
      phone: '01741778025',
      role: 'karigor'
    },
    {
      address: 'Uttara',
      avatar: null,
      email: 'ayman@karigor.io',
      id: 2,
      name: 'Mir Ayman Ali',
      phone: '017xxxxxxxx',
      role: 'karigor'
    }
  ]
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
    let { data } = await axios.get(karigor)
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
