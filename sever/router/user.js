const routes = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


 
routes.post("/register",async(req,res)=>{
    
    try {
        const {Firstname,Lastname,Phone,Email,Password} = req.body.data
            
                const hash = await bcrypt.hash(Password,6)
                console.log(hash)
                const user = await User.create({
                    Firstname,
                    Lastname,
                    Email,
                    Password:hash,
                    Phone
                })
                console.log(user)
                
               res.json({
                    greeting:"Thank You!",
                    message:"Your registration completed.",
                    token:""
               })  
    } catch (error) {
       
        if(error.code === 11000){
           return res.status(401).json({
                error:"User alredy existed!"
            })
        }
        throw Error
        
    }
})
routes.post("/login",async(req,res)=>{
    
    try {
        console.log(req.body)
        const {EmailOrPhone,Password} = req.body.data
        const user = await User.findOne({
            $or:[{Phone:EmailOrPhone},{Email:EmailOrPhone}]
        })
         
        if(!user){
            console.log(user,'no')
            return res.status(401).json({
                error:"Invalid Credintial!"
            })
        }
        if(user){
            console.log(user ,'yes')
            bcrypt.compare(Password,user.Password).then(async (result)=>{
                console.log(result)
                if(result){
                   const token = await jwt.sign({id:user._id},"secret")
                    return res.json({
                        message:"Login Successfully",
                        token
                    })
                }else{
                    return res.status(403).json({
                        error:"Invalid Credential"
                    })
                }
            }).catch(err=>{
                console.log(err)
                throw Error
            })
        }
    } catch (error) {
        
    }
                
})


module.exports = routes