import {api} from '@/api'
import io from 'socket.io-client'

const socket = io(api)

socket.on('connection', function () {
  console.log('Connected')
})

export default socket
