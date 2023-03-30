const ctrl = require('../constrollers/items')
const router = require('express').Router()

router
    .post('/create',ctrl.tambahItem)
    .get('/all',ctrl.tampilAll)
    .get('/:id_pelanggan',ctrl.tampilSatu)
    .put('/update',ctrl.update)
    .delete('/delete/:id',ctrl.delete)

module.exports = router
