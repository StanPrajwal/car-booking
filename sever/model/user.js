const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Firstname:{
        type:String,
        require:true,
    },
    Lastname:{
        type:String,
        require:true,
    },
    Phone:{
        type:String,
        require:true,
        unique:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User