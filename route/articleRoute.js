const express = require('express')
const ArticleController = require('../controller/articleController')
const passport = require('../middleware/passportMiddleware')

const article = new ArticleController()
const restrict = passport.authenticate('jwt', { //cara mengamankan suatu rute implementasi modul passport
    session: false
})
const app = express.Router()


app.get('/', restrict, async (req, res) => {
    const {
        query
    } = req
    res.send(await article.get({
        userId: req.user.id,
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const {
        body
    } = req
    res.send(await article.add({
        userId: req.user.id,
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const {
        body,
        params
    } = req
    await article.edit(params.id, body)
    res.send('Ok')
})

app.delete('/:id', restrict, async (req, res) => {
    const {
        params
    } = req
    await article.remove(params.id)
    res.send('Ok')
})

module.exports = app