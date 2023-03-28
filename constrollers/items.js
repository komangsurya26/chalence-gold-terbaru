const {User,Items} = require('../models')

exports.tambahItem = async(req,res,next)=>{
    try {
       const {id_pelanggan,nama,harga,jumlah,deskripsi} = req.body
       const tambah = await Items.create({
        id_pelanggan,
        nama,
        jumlah,
        harga,
        deskripsi,
    })   
    if (!id_pelanggan || !nama || !harga || !jumlah || !deskripsi) {
        return res.status(400).json({ message: 'inputan gagal !!!' });
      }
    console.log(tambah)
    return res.json(`tambah item suksess !!!`);  
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.tampilAll = async(req,res,next)=>{
    try {
       const all = await Items.findAll()
       return res.json(all)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.tampilSatu = async(req,res,next)=>{
    try {
        const {id} = req.params
        const item = await Items.findOne({
            where: {id}})
        if (!item) {
            return res.status(404).json(`user tidak ada !!!`);
          }
          return res.json(item);
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
      };

exports.update = async(req,res,next)=>{
    try {
       const {id_pelanggan,nama,harga,jumlah,deskripsi} = req.body
       const updates = await Items.update({
        nama,
        harga,
        jumlah,
        deskripsi
    },{
        where : {id_pelanggan}})
    if (updates[0] === 0) {
        return res.status(404).json({ message: 'update gagal !!!' });
      }
      return res.json({ message: 'update sukses !!!' });
    }catch (error) {
        console.log(error)
        return res.json(error)
    }
}

exports.delete = async (req,res,next)=>{
    try {
        const {id} = req.params

        const item = await Items.findOne({ where: { id } })
        if (!item) {
            return res.status(404).json({ message: `Item dengan id ${id} tidak ada` })
        }
        const deletes = await Items.destroy({where : {id}})
        console.log(deletes)
        return res.json({ message: `Item '${item.nama}' dengan id ${id} telah dihapus !!!` })
    
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}
