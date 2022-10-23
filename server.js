import express from 'express'
import router from './api.js'

const app = express()

app.use('/', router)
const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})
