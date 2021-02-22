const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
    res.send("Hello from Auth API")
})

module.exports = app