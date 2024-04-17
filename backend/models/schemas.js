const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userSchema = new Schema ({
    name: {type:String}, 
    email: {type:String},
    pwd: {type:String},
})


const Users = mongoose.model('Users', userSchema, 'users')
const mySchemas = {'Users': Users}

module.exports = mySchemas