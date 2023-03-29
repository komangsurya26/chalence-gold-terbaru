const { where } = require('sequelize')
const {User} = require('../models')

exports.register = async (req,res,next)=>{
    try {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(respon=>{
            console.log(respon)
            return res.json(respon)
        })
       } catch (error) {
        console.log(error)
            return res.json(error)
        }
}


exports.login = async (req,res,next)=>{
    try {
        const login = await User.findOne({ where : { email : req.body.email}})
        if (login && login.password === req.body.password ) {
            return res.json(`login sukses !!!, selamat datang ${login.username}`)
        } else {
            return res.json(`maaf masukan data dengan benar !!!`)
        }
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

exports.update = async (req, res, next) => {
    try {
      const { email, username, password_baru} = req.body;
      const updates = await User.update({password: password_baru}, { where: { email, username } });
      if (updates[0] === 0) {
        return res.status(404).json({ message: 'update gagal !!!' });
      }
      return res.json({ message: 'update sukses !!!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

exports.delete = async (req,res,next)=>{
    try {
        const hapus = await User.findOne({ where : { email : req.body.email}})
        if (hapus && hapus.password === req.body.password) {
            await User.destroy({
                where : {email : req.body.email}
            })
            return res.json(`DELETE SUKSES !!`)
        } else {
            return res.json(`SORY MASUKAN DATA DENGAN BENAR`)
        }
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
  
}
        
exports.tampilAll = async (req,res,next)=>{
    try {
        const all = await User.findAll()
        console.log(all)
        return res.json(all)
    } catch (error) {
        console.log(error)
        return res.json(error)
    }

}

exports.tampilSatu = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });
      if (!user) {
        return res.status(404).json(`user tidak ada !!!`);
      }
      return res.json(user);
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
  };

  