import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import BookSlot from "../PopPops/BookSlot"
import Navbar from "./Navbar"

import "./Styles/ShowCar.css"

function ShowCars({states,cars,getCars}){
    const navigate = useNavigate()
    const showCarDetails = (car) =>{
        navigate("/moredetails",{state:car})
    }

    return <div className="showcars-container">
        <Navbar/>
        <div className="car-container">
                <div className="show-cars">
                    {cars && cars.map((car)=>{
                        return (<div className="card" key={car.vehicle_info.v_id}>
                        <div className="image">
                            <img 
                                src={car.vehicle_info.image_thumbnail_url} 
                                alt={car.vehicle_info.v_name}
                            />
                        </div>
                        <h2>{car.vehicle_info.v_name}</h2>
                        <p>Rent Name: {car.supplier_info.name}</p>
                        <p>
                           Rating: {car.rating_info.average}
                        </p>
                        <p>Seats:{car.vehicle_info.seats}</p>
                        <p>Price:{`${car.pricing_info.price} ${car.pricing_info.currency}}`}</p>
                        <Button
                            onClick={()=>showCarDetails(car)}
                        >Show Details</Button>
                    </div>)
                    })}
                

            </div>
            
        </div>
        <BookSlot states={states} getCars={getCars} cars={cars}/>
    </div>
}
export default ShowCars