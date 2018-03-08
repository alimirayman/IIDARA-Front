import axios from 'axios'
import { CARD, UPLOAD_FILE } from '@/api'

axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

const state = {
  cards: [],
  newCard: {
    images: []
  },
  status: [
    'NOT_OCCUPIED',
    'OCCUPIED',
    'STARTED_TO_WORK',
    'DONE_REQUEST',
    'ISSUE',
    'COMPLETED'
  ],
  uploaded: 0
}
const getters = {
  cards: state => state.cards,
  userCard (state) {
    return (id) => {
      return state.cards.filter(el => el.karigor_id === id)
    }
  },
  getCardStatus (state) {
    return (index) => {
      return state.status[state.cards[index].status]
    }
  },
  uploaded: state => state.uploaded
}
const mutations = {
  setCards (state, payload) {
    state.cards = payload
  },
  structNewCard (state, payload) {
    state.newCard.allocated_time = payload.allocated_time
    state.newCard.description = payload.description
    state.newCard.title = payload.title
    state.newCard.karigor_id = payload.karigor_id
  },
  addCard (state, payload) {
    state.cards.push(payload)
  },
  addImage (state, payload) {
    state.newCard.images.push(payload.s3_url)
  },
  uploading (state, payload) {
    state.uploaded = payload
  }
}
const actions = {
  async GET_CARDS ({commit}) {
    let {data} = await axios.get(CARD)
    commit('setCards', data)
  },
  async POST_CARD ({commit, state}, payload) {
    commit('structNewCard', payload)
    try {
      let {data} = await axios.post(CARD, state.newCard)
      commit('addCard', data)
    } catch (err) {
      console.log(err)
    }
  },
  async UPLOAD_CARD_FILE ({commit}, payload) {
    let config = {
      onUploadProgress (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        commit('uploading', percentCompleted)
      }
    }
    try {
      let { data } = await axios.post(UPLOAD_FILE, payload, config)
      commit('addImage', data)
    } catch (err) {
      console.log(err)
    }
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
