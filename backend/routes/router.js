const  express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/register', async(req, res) => {
    const {name, email, pwd} = req.body
    const registerData = { name, email, pwd };
        const newRegister = new schemas.Users(registerData)
        const saveRegister = await newRegister.save()
        
        if (saveRegister) {
            // console.log(name +' | '+ email +' | '+ pwd)
            res.send('Message sent.')
        } else {
            res.send('Failed to send.')
        }
    res.end()
  });


module.exports = router