const {Order} = require ('../models')

exports.tambahOrder = async (req,res,next)=>{
try {
    const{id_order,id_produk,status_order} = req.body
    if (!id_order || !id_produk || !status_order) {
        return res.status(400).json({ error: 'Data tidak lengkap!' })
    } 
    const order = await Order.create({
        id_order : id_order,
        id_produk : id_produk,
        status_order : status_order
    })
    return res.json({message : "sukses order !!!"})
 } catch (error) {
    console.error
    return res.json(error)
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
        const {status_order} =req.body
        const updates = await Order.update({
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
        const order = await Order.findOne({ where: { id_order : req.body.id_order} })
        if (!order) {
            return res.status(404).json({ message: `Order dengan id tersebut tidak ada` })
        }
        const deletes = await Order.destroy({where : {id_order : req.body.id_order}})
        console.log(deletes)
        return res.json({ message: `Order '${order.id_order}' telah dihapus !!!` })
    
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}