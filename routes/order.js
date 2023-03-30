const ctrl = require('../constrollers/orders')
const router = require('express').Router()

router
    .post('/create',ctrl.tambahOrder)
    .get('/all',ctrl.tampilSemua)
    .get('/:id',ctrl.tampilSatu)
    .put('/update',ctrl.update)
    .delete('/delete',ctrl.delete)

module.exports = router
