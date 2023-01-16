const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const userRouter = require("./router/user")
const carRouter = require("./router/Cars")
const {  State, City }  = require('country-state-city');

const nodemailer = require("nodemailer");
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/api/user",userRouter)
app.use("/api/cars",carRouter)
.qa 

mongoose.connect("mongodb://localhost/Cars")
    .then((res)=>console.log('database connected'))
    .catch((err)=>console.log(err.message))
app.listen(4000,()=>console.log(`Server startedat http://localhost/4000`))
