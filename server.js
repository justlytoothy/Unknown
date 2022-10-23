import express from 'express'
import router from './api.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', router)
const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})
