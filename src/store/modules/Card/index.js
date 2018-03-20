import axios from '@/helpers/axios'
import { CARD, UPLOAD_FILE } from '@/api'
import image from '@/helpers/image'
import {cards} from './cards'

const state = {
  cards: cards,
  newCard: {
    title: '',
    description: '',
    karigor_id: '0',
    attocated_time: '',
    images: [],
    images64: [],
    attachments: [],
    files64: []
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
  newCard: state => state.newCard,
  uploadCard ({newCard}) {
    return {
      title: newCard.title,
      description: newCard.description,
      karigor_id: newCard.karigor_id,
      attocated_time: newCard.allocated_time,
      images: newCard.images,
      attachments: newCard.attachments
    }
  },
  getCardsById (state) {
    return (id) => {
      return state.cards.filter(el => el.karigor_id === id)
    }
  },
  getCardsByUsername (state) {
    return (username) => {
      return state.cards.filter(el => el.username === username)
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
  resetNewCard (state) {
    state.newCard = {
      title: '',
      description: '',
      karigor_id: '0',
      attocated_time: '',
      images: [],
      images64: [],
      attachments: [],
      files64: []
    }
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
  addImage (state, {image, image64}) {
    state.newCard.images.push(image.s3_url)
    state.newCard.images64.push(image64)
  },
  addAttachment (state, {data}) {
    state.newCard.attachments.push(data.s3_url)
    // state.newCard.files64.push(file64)
  },
  uploading (state, payload) {
    state.uploaded = payload
  }
}
const actions = {
  async GET_CARDS ({commit}, payload = [0]) {
    let config = {
      params: {
        status: payload
      }
    }
    let {data} = await axios.get(CARD, config)
    commit('setCards', data)
  },
  async POST_CARD ({commit, getters}, payload) {
    commit('structNewCard', payload)
    try {
      let { data } = await axios.post(CARD, getters.uploadCard)
      commit('addCard', data)
      commit('resetNewCard')
    } catch (err) {
      console.log(err)
    }
  },
  async UPLOAD_CARD_FILE ({commit}, file) {
    let config = {
      onUploadProgress (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        commit('uploading', percentCompleted)
      }
    }
    const fd = new FormData()
    fd.append('file', file, file.name)
    try {
      let { data } = await axios.post(UPLOAD_FILE, fd, config)
      image.toBase64(file, (file64) => {
        if (image.isImageFile(file64)) {
          commit('addImage', {image: data, image64: file64})
          commit('uploading', 0)
        } else {
          commit('addAttachment', {data})
          commit('uploading', 0)
        }
      })
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
