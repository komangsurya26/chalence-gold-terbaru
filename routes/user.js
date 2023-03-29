const ctrl = require('../constrollers/user')
const router = require('express').Router()

router
//registrasi
    .get('/register', (req,res,next)=>{
        res.render('register')
})
    .post('/register',ctrl.register)

//login
    .get('/login', (req,res,next)=>{
        res.render('login')
})
    .post('/login',ctrl.login)


    .delete('/delete',ctrl.delete)
    .get('/all',ctrl.tampilAll)
    .put('/update',ctrl.update)
    .get('/:id',ctrl.tampilSatu)


    module.exports = router
