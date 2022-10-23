import express from 'express'
import conn from './conn.js'
const router = express.Router()

router.get('/example', (req, res) => {
	console.log('accessed')
	conn.connect(function (err) {
		if (err) {
			console.error('error connecting: ' + err.stack)
			return
		}

		console.log('connected as id ' + connection.threadId)
	})
	conn.query('SELECT * FROM tasks', (err, rows, fields) => {
		console.log(rows, fields)
	})
	conn.end()
	return res.json({ bruh: 'here' })
})

export default router
