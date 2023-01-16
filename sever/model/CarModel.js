const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    payment_type:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    slot_time:{
        type:String,
        require:true
    },
    slot_date:{
        type:String,
        require:true
    },
    bookIsCompleted:{
        type:Boolean,
        required:true,
        default:false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Car = mongoose.model("Blog",carSchema)

module.exports = Car