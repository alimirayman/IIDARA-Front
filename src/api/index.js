const root = 'http://27.147.185.112'
const port = '5205'
const version = '1'

const api = `${root}:${port}/api/v${version}/`

// Auth
export const LOGIN = api + 'login'

// Card
export const CARD = api + 'card'

// Karigor
export const KARIGOR = api + 'karigor'

// Uploader
export const UPLOAD_IMG = 'http://159.89.38.56:5202/upload'
