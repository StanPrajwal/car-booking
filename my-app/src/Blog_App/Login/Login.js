
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import Axios from "axios"
import Navbar from "../LandingPage.js/Navbar";
import "./Register.css"


function Login(){
    const errorCss = {
        color:"red",
        fontWeight:"100"
    }
    const [error,setError] = useState("")
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()
   
    const registerSchema = yup.object().shape({
        Password:yup.string().required(),
        EmailOrPhone:yup.string().required(),
        

    })
   const {register,formState:{errors},handleSubmit} = useForm({
    resolver:yupResolver(registerSchema)
   })
   const onSubmit = (data)=>{
        console.log(data)

        setFlag(!flag)
        Axios.post("http://localhost:4000/api/user/login",{data})
            .then((res)=>{
                navigate('/')
                console.log(res.data.token)
                localStorage.setItem("token",res.data.token)
                setFlag(!flag)
               
            })
            .catch((err)=>{
                console.log(err)
                setError(err.response.data.error)
            })
    }
   
    return (<>
       <Navbar/>
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} >
                {error?<p className="error">{error}</p>:""}  
                <h1>Login Here</h1>
                <div className="box">
                    
                    <input

                       {...register("EmailOrPhone")} 
                       placeholder="Username"
                       autoComplete="off"
                    />
                    
                    <label style={errors.EmailOrPhone?.message?errorCss:{}}>Email / Phone</label>
                </div>
                <p className="error">{errors.EmailOrPhone?.message}</p>
                
                <div className="box">
                    
                    <input 
                        type="password"
                        {...register("Password")} 
                        placeholder="Password"
                        autoComplete="off"
                    />
                    <label style={errors.Password?.message?errorCss:{}}>Password</label>
                      
                </div>
                <p className="error">{errors.Password?.message}</p>
                
                <button>Sign In</button>
                <span 
                    className="forget-password"
                    onClick={()=>navigate("/forgetpassword")}
                >
                    Forget Password?
                </span>

                <p className="singup-page">New User? 
                    <span 
                        className="singUp"
                        onClick={()=>navigate('/register')}
                    > SIGN UP</span>
                </p>
                    
            </form>
        </div>
        </> 
    );
}
export default Login