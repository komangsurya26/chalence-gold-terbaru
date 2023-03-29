const ctrl = require('../constrollers/items')
const router = require('express').Router()

router
    .post('/create',ctrl.tambahItem)
    .put('/update',ctrl.update)
    .get('/all',ctrl.tampilAll)
    .get('/:id',ctrl.tampilSatu)
    .delete('/delete/:id',ctrl.delete)

module.exports = router