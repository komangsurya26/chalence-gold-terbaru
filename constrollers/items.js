const {User,Items} = require('../models')

exports.createOne = async(req,res,next)=>{
    try {
        Items.create({
            id_pelanggan: req.body.id_pelanggan,
            nama: req.body.nama,
            harga: req.body.harga,
            jumlah: req.body.jumlah,
            deskripsi: req.body.deskripsi

        }).then(item => {
            console.log(item)
            return res.status(200).json(item)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.findAll = async(req,res,next)=>{
    try {
        Items.findAll({
            include: [{
                model: User
            }]
        })
        .then(items => {
            console.log(items)
            return res.status(200).json(items)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.mine = async(req,res,next)=>{
    try {
        Items.findAll({
            where: {id_pelanggan: req.params.id_pelanggan},
            include: [{
                model: User
            }]
        })
        .then(items => {
            console.log(items)
            return res.status(200).json(items)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.updateOne = async(req,res,next)=>{
    try {
        Items.update({
                nama: req.body.nama,
                harga: req.body.harga,
                jumlah: req.body.jumlah
            },
            {
                where : {id : req.params.id}
            })
            .then(item => {
                console.log(item)
                return res.status(200).json(item)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
