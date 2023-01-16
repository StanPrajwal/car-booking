import Axios from "axios";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "./Styles/Home.css"
function Home({setStates}){
    useEffect(()=>{
        Axios.get("http://localhost:4000/api/cars/state")
            .then((res)=>{console.log(res)
                setStates(res.data.states)
            })
            .catch((err)=>console.log(err))
    }) 
    return <div className="body">
        <Navbar/>
        <div className="home-container">
            <section className="service-image">
                <img 
                    src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?s=612x612&w=0&k=20&c=MkM3U9ruXp2wKCgYKeL6DyZ9H5WFIHtyRWsbOMokrFg="
                    alt="home-page"
                />
            </section>
            <section className="service-info">
                <article >
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet tincidunt vulputate. Aenean ut justo sed magna eleifend maximus. Cras sollicitudin eu elit a ultricies. Nulla vel pellentesque metus. 
                        Quisque non nisi eu ipsum molestie tincidunt non id mi. Aliquam non placerat leo. In metus orci, sollicitudin a neque nec, pulvinar semper sem. Praesent quis orci nunc.   
                    </p>
                    <p>
                        Nulla viverra euismod tellus, nec mollis sem. 
                        Donec interdum erat quis massa malesuada cursus. Maecenas at ligula tristique est malesuada convallis. Integer orci dolor, viverra at metus vitae, pellentesque luctus odio.
                        Fusce faucibus massa sit amet erat aliquam pharetra. Suspendisse et malesuada quam. Integer facilisis diam nec nunc maximus fermentum. Praesent tincidunt neque tellus, at faucibus lectus tincidunt sit amet. Nunc pretium, justo id lacinia fermentum, ante libero lacinia lacus, vulputate mollis eros ligula sit amet lorem. Nulla fermentum ullamcorper lectus, vitae cursus libero sollicitudin in. Proin luctus hendrerit vehicula. 
                        Donec aliquet maximus nulla, vel pretium ex imperdiet sed.
                    </p>
                    <p>
                        Cras dapibus leo eu lectus suscipit, sit amet pellentesque sem placerat. Pellentesque faucibus viverra rutrum. 
                        Praesent laoreet ultricies quam, eget convallis velit ullamcorper non. Sed sollicitudin turpis diam, sed dictum erat dapibus ac. Fusce vitae porta ipsum. Donec ut elit vel felis placerat malesuada.
                    </p>
                </article>
               
               
            </section>
        </div>
        
    </div>
}
export default Home