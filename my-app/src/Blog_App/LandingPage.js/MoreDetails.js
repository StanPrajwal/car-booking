import Navbar from "./Navbar"
import "./Styles/MoreDetails.css"
import { MdLocalCarWash } from 'react-icons/md'
import { AiTwotoneCar } from 'react-icons/ai'
import { ImPower} from 'react-icons/im'
import { AiOutlineCar } from 'react-icons/ai'
import {BsFillCaretRightFill} from 'react-icons/bs'
import { Box } from "@mui/system"
import { MenuItem, TextField } from "@mui/material"
import {GiPayMoney} from "react-icons/gi"
import {BiRupee} from "react-icons/bi"
import AfterBook from "../PopPops/AfterBook"
import { useState } from "react"
import { useLocation } from "react-router-dom"

import Axios from "axios"
function MoreDetails({greeting,setGreeting}){
    // const [details,getDetails] = useState()
    const {state} = useLocation()
    const [slot,getSlot] = useState({time:"",date:"",pay_mode:""})
    
    console.log(state)
    
    const submitHandler = () =>{
        console.log(slot)
        if(slot.time && slot.date && slot.pay_mode){
            const data = {
                price:state.pricing_info.price,
                name:state.vehicle_info.v_name,
                slot_time:slot.time,
                slot_date:slot.date,
                pay_mode:slot.pay_mode,
                token:localStorage.getItem("token")
            }
            console.log(data)
            Axios.post('http://localhost:4000/api/cars/book',{data})
                .then((res)=>{
                    console.log(res)
                    setGreeting(res.data)
                })
                .catch((err)=>console.log(err.message))
        }
    }
    const getSlotDetails =(e)=>{
        const {name,value} = e.target
        getSlot(prev=>{
            return {...prev,[name]:value}
        })
    }
    return <div className="main-section">

            <Navbar/>
            
            <h3 className="detail-title">To Start Journey Book the Slot</h3>
            <div className="details-contaainer">
                <section className="detail-image">
                    <img 
                        src={state.vehicle_info.image_url}
                        alt={state.vehicle_info.v_name}
                    />
                </section>
            
                <article className="details">

                    <h2 id="car-name">
                        {state.vehicle_info.v_name}</h2> 
                    <p>Address:<span id="address">{state.supplier_info.address}</span></p>
                    <p><AiTwotoneCar/> Seats:<span>{state.vehicle_info.seats}</span></p>
                    <p><MdLocalCarWash/> Fuel Type:<span>{state.vehicle_info.fuel_type}</span></p>
                    <p><BsFillCaretRightFill/> Airbags:<span>{state.vehicle_info.airbags}</span></p>
                    <p><ImPower/> Accesibility:<span>{state.accessibility.transmission}</span></p>
                    <p><AiOutlineCar/> Review:<span>{`rating ${state.rating_info.average} and ${state.rating_info.no_of_ratings}+ reviwed `}</span></p>
                    <h4>Book Slot</h4>
                    <div className="slot-book">
                        
                        <fieldset className="slot">
                            <legend>Slot Date:</legend> 
                                <input 
                                    type="date"
                                    name="date"
                                    onChange={(e)=>getSlotDetails(e)}
                                />
                        </fieldset>
                        <fieldset className="slot">
                            <legend>Slot Timing:</legend> 
                                <input 
                                    type="time" 
                                    name="time"
                                    onChange={(e)=>getSlotDetails(e)}
                                />
                        </fieldset>
                        
                    </div>
                </article>
                
            </div>
            <div className="Payment">
                <Box>
                    <TextField 
                        label="Payment Mode" 
                        select 
                        name="pay_mode"
                        onChange={(e)=>getSlotDetails(e)}
                        helperText="Select Your payment Option"
                    >
                        <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
                        <MenuItem value="PayTm">PayTm</MenuItem>
                        <MenuItem value="Google Pay">Google Pay</MenuItem>
                    </TextField>
                </Box>
                <p className="pay"><GiPayMoney className="pay-symbol"/> Total Price:<span><BiRupee className="pay-symbol"/>{state.pricing_info.price}</span></p>
                <button 
                    
                    id="proceed"
                    onClick={submitHandler}
                >Proceed</button>
            </div>
            
            
            
        
        <AfterBook greeting={greeting} setGreeting={setGreeting}/>   
    </div>
}
export default MoreDetails