const routes = require("express").Router()
const {  State, City }  = require('country-state-city');
const Car = require("../model/CarModel")
const jwt = require("jsonwebtoken");
const User = require("../model/user");

routes.get("/state",async(req,res)=>{
    try {
        
        const states = await State.getStatesOfCountry("IN")
      const cities = await City.getCitiesOfCountry("IN").filter((itam)=>{
            if(itam.stateCode === "TN"){
                return itam
            }
        })
        // console.log(cities)
        res.json({
            states
        })

    } catch (error) {
        throw Error
    }
})
routes.post("/cities",async(req,res)=>{
    try {
        
        console.log(req.body)
        const cities = await City.getCitiesOfCountry("IN").filter((item)=>{
            if(item.stateCode === req.body.st){
                return item.name
            }
        })
        
        res.json({
            cities
        })
        console.log("After")
    } catch (error) {
        throw Error
    }
})



routes.post("/book",async(req,res)=>{
    try {
        
        
        console.log(req.body)
        const {price,name,slot_time,slot_date,pay_mode,token} = req.body.data
        const tokenDecode = await  jwt.verify(token,"secret")
        console.log(tokenDecode)
        if(tokenDecode.id){
            const user = await User.findOne({_id:tokenDecode.id})
            console.log(user)
            if(user){
                console.log(user)
                const car = await Car.create({
                    Name:name,
                    price,
                    payment_type:pay_mode,
                    slot_time,
                    slot_date,
                    user:user._id,
                    bookIsCompleted:true
                })
                res.json({
                    greeting:"Thank You!",
                    message:"Your Booking is Completed!",
                    token:tokenDecode.id
                })
            }
        }
    } catch (error) {
        throw Error
    }
})

// routes.get("/fetch",async(req,res)=>{
//     try {
//         const cars = await Car.find()
//         res.json({
//             cars
//         })
//     } catch (error) {
//         res.status(500).json({
//             error:error.message
//         })
//     }
// })

module.exports = routes