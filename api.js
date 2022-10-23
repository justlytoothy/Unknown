import express from 'express'

const router = express.Router()

router.get('/example', (req, res) => {
	console.log('accessed')
	return res.json({ bruh: 'here' })
})

export default router
