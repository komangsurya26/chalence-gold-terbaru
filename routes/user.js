const ctrl = require('../constrollers/user')
const router = require('express').Router()

router
    .post('/register', ctrl.register)
    .post('/login',ctrl.login)
    .delete('/delete',ctrl.RemoveAccount)
    .get('/all',ctrl.findAll)
    .put('/update',ctrl.updateOne)

module.exports = router
