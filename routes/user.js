const ctrl = require('../constrollers/user')
const router = require('express').Router()

router
    .post('/register', ctrl.register)
    .post('/login',ctrl.login)
    .delete('/delete',ctrl.delete)
    .get('/all',ctrl.tampilAll)
    .put('/update',ctrl.update)
    .get('/:id',ctrl.tampilSatu)
module.exports = router
