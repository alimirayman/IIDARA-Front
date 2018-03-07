const root = ''
const port = ''
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
