import express from 'express'
import router from './api'

const app = express()

app.use('/', router)
const PORT = process.env.REACT_APP_PORT || 3500
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})
