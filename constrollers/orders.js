const { response } = require('express')
const {Order} = require ('../models')

exports.tambahOrder = async (req,res,next)=>{
    try {
        Order.create({
            id_produk:  req.body.id_produk,
            id_order:   req.body.id_produk,
            alamat:     req.body.id_produk,
            jumlah:     req.body.id_produk,
            subtotal:   req.body.id_produk,
            total_harga:    req.body.id_produk,
            status_order:   req.body.id_produk
        })
        if (!id_produk || !id_order || !alamat || !jumlah || !subtotal || !total_harga || !status_order) {
            return res.status(400).json({ message: 'inputan gagal !!!' });
          }
        console.log(tambah)
        return res.json(`tambah orderan suksess !!!`); 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
exports.tampilSemua = async (req,res,next)=>{
    try {
        const all = await Order.findAll()
        return res.json(all)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.tampilSatu = async (req,res,next)=>{
    try {
        const {id} = req.params
        const satu = await Order.findOne({where : {id}})
        if (!satu) {
            return res.json(`data ${id} tidak ada boss !!!`)
        }
        console.log(satu)
        return res.jso(satu)
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

exports.update = async (req,res,next)=>{
    try {
        const {alamat} =req.body
        const updates = await Order.update({
            alamat,
            status_order
        },{
            where : {id_order : req.body.id_order}
        })
    if (updates[0]=== 0) {
            return res.json(`data salah boss !!!`)
        }
        return res.json('update sukses !!!')
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

exports.delete = async (req,res,next)=>{
    try {
        const {id} = req.params

        const order = await Order.findOne({ where: { id } })
        if (!order) {
            return res.status(404).json({ message: `Order dengan id ${id} tidak ada` })
        }
        const deletes = await Order.destroy({where : {id}})
        console.log(deletes)
        return res.json({ message: `Order '${order.nama}' dengan id ${id} telah dihapus !!!` })
    
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}