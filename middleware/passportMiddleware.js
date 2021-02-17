const passport = require('passport') // kerangkanya aja
const {
    Strategy,
    ExtractJwt
} = require('passport-jwt') // mesinnya --> punya strategy
const {
    Users
} = require('../models')

passport.use(
    new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET, //gunakan secret key yang sama di authentication
    }, (payload, done) => { //sebuah parameter yang diisi oleh passport diisi menggunakan anon function.
        Users.findByPk(payload.id) // mencari id ke user karena kita mau tau keberadaan akun user pada database, kalo misal dah delete acc gabisa login
            .then(user => done(null, user)) //parameter pertama error kl data gada, hasilnya jika berhasil akan masuk ke variable user di parameter 2
            .catch(err => done(err, false))
    })
)

module.exports = passport