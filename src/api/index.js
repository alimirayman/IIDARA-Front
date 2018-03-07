const root = '27.147.185.112'
const port = '5205'
const version = '1'

const api = `${root}:${port}/v${version}/`

// Auth
export const login = api + 'login'

// Card
export const card = api + 'card'

// Karigor
export const karigor = api + 'karigor'
