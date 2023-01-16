import {FaCheck} from "react-icons/fa"
import { useNavigate} from "react-router-dom"
import "./Poppop.css"
function AfterBook({setGreeting,greeting}){
    const navigate = useNavigate()
    return <div className="pop-box" id={greeting?"pop":""} >
        <div className="circle">
            <p id="check"><FaCheck id="check-icon"/></p>
        </div>
        <h4>
            {greeting.greeting}
        </h4>
        <p>{greeting.message}</p>
        {greeting.token?
        <button onClick={()=>{
            setGreeting("")
            navigate("/home")
        }}>
            Go Home page
        </button>:<button onClick={()=>setGreeting("")}>
            Ok
        </button>
        }
        
    </div>
}
export default AfterBook