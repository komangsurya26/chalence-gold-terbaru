const ctrl = require('../constrollers/orders')
const router = require('express').Router()

router
    .post('/create',ctrl.tambahOrder)
    .put('/update',ctrl.update)
    .get('/all',ctrl.tampilSemua)
    .get('/:id',ctrl.tampilSatu)
    .delete('/delete',ctrl.delete)

module.exports = router
