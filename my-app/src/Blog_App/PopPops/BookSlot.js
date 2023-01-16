import {Box, Button, MenuItem, TextField} from "@mui/material"
import Axios from "axios"
import {useState} from "react"
import dotenv from "dotenv"
import "./BookSlot.css"
function BookSlot({states,getCars,cars}){
    dotenv.config()
    const [state,setState] = useState("")
    const [city,setCity] = useState()
    const [cities,setCities] = useState()
    const handleSubmit = ()=>{
        if(state && city){

            const options = {
                method: 'GET',
                url: 'https://booking-com.p.rapidapi.com/v1/car-rental/search',
                params: {
                pick_up_datetime: '2023-04-04 19:00:00',
                pick_up_longitude: '14.421133',
                pick_up_latitude: '50.08773',
                drop_off_latitude: '50.08773',
                drop_off_datetime: '2023-04-05 19:00:00',
                drop_off_longitude: '14.421133',
                from_country: 'it',
                sort_by: 'recommended',
                locale: 'en-gb',
                currency: 'INR'
                },
                headers: {
                'X-RapidAPI-Key': process.env.Rapid_key,
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                }
            };

            Axios.request(options).then(function (response) {
                // console.log(response.data.search_results);
                let Cars = response.data.search_results 
                let carArr = []
                for(let i=0;i<10;i++){
                        carArr.push(Cars[i])
                }
                getCars(carArr)
                console.log(carArr)
            }).catch(function (error) {
                console.error(error);
            });
             
        }
    }
    const handleCities =(e)=>{
        setState(e.target.value)
       
        const st = e.target.value
      
        console.log(st)
        
        Axios.post("http://localhost:4000/api/cars/cities",{st})
            .then((res)=>{console.log(res)
                setCities(res.data.cities)
            })
            .catch((err)=>console.log(err))
      
    }
   
    return <div className="location" id={cars?"pop1":""}>
        <h1>Select State and City</h1>
        <Box>
            <TextField 
                label="Select State" 
                select 
                fullWidth
                helperText="Please select your state"
                onChange={e=>handleCities(e)}
                    
            >
               {states.map((item,index)=>{
                  return  <MenuItem value={item.isoCode}>{item.name}</MenuItem>
               })} 
                
            </TextField>
            <TextField 
                label="Select City" 
                select 
                fullWidth
                helperText="Please select your city"
                margin="1rem"
                onChange={(e)=>setCity(e.target.value)}
            >
             {cities && cities.map((item,index)=>{
                  return  <MenuItem value={item.name}>{item.name}</MenuItem>
               })} 
            </TextField>
            <Button variant="contained"
                onClick={handleSubmit}
            >Confirm</Button>
        </Box>
        
    </div>
}
export default BookSlot