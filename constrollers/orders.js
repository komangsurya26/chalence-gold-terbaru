const {Orders, User,Items} = require ('../models')

exports.tambahOrder = async (req,res,next)=>{
try {
    const{id_order,alamat,status} = req.body
    const order = await Orders.create({
        id_order,
        alamat,
        status
    })
    console.log(order)
    return res.json({message : "sukses order !!!"})
 } catch (error) {
    console.log(error)
    return res.json(error)
    }
}

exports.tampilSemua = async (req,res,next)=>{
    try {
        const all = await Orders.findAll({
            include: [{
                model: Items
            }]
        })
        return res.json(all)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.tampilSatu = async (req,res,next)=>{
    try {
        const {id} = req.params
        const satu = await Orders.findOne({
            where : {id},
            include: [{
                model: Items
            }]
        })
        if (!satu) {
            return res.json(`data ${id} tidak ada boss !!!`)
        }
        console.log(satu)
        return res.json(satu)
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

exports.update = async (req,res,next)=>{
    try {
        const {status} =req.body
        const updates = await Orders.update({
            status
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
        const order = await Orders.findOne({ where: { id_order : req.body.id_order} })
        if (!order) {
            return res.status(404).json({ message: `Order dengan id tersebut tidak ada` })
        }
        const deletes = await Orders.destroy({where : {id_order : req.body.id_order}})
        console.log(deletes)
        return res.json({ message: `Order '${order.id_order}' telah dihapus !!!` })
    
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}