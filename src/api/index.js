const root = '27.147.185.112'
const port = '5205'
const version = '1'

const api = `${root}:${port}/v${version}/`

// Auth
const login = api + 'login'

// Card
const card = api + 'card'

// Karigor
const karigor = api + 'karigor'

export default {
  login,
  card,
  karigor
}
