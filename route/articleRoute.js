const express = require('express')
const {
    get,
    add,
    edit,
    remove
} = require('../controller/articleController')
const app = express.Router()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { //cara mengamankan suatu rute implementasi modul passport
    session: false
})


app.get('/', restrict, async (req, res) => {
    const {
        query
    } = req
    res.send(await get({
        userId: req.user.id,
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const {
        body
    } = req
    res.send(await add({
        userId: req.user.id,
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const {
        body,
        params
    } = req
    await edit(params.id, body)
    res.send('Ok')
})

app.delete('/:id', restrict, async (req, res) => {
    const {
        params
    } = req
    await remove(params.id)
    res.send('Ok')
})

module.exports = app