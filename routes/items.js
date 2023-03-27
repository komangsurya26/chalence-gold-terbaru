const ctrl = require('../constrollers/items')
const router = require('express').Router()

router
    .post('/create',ctrl.createOne)
    .put('/edit/:id',ctrl.updateOne)
    .get('/all',ctrl.findAll)
    .get('/mine/:id_pelanggan',ctrl.mine)

module.exports = router
