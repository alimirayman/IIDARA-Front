// const root = 'http://27.147.185.112'
// const port = '5205'
const root = 'http://103.230.6.198'
const port = '8005'
const version = '1'

const api = `${root}:${port}/api/v${version}/`

// Auth
export const LOGIN = api + 'login'

// Card
export const CARD = api + 'card'

// Karigor
export const KARIGOR = api + 'karigor'
export const KARIGOR_USER = (user) => `${KARIGOR}/${user}`

// Uploader
export const UPLOAD_FILE = 'http://159.65.236.201:9000/upload'
