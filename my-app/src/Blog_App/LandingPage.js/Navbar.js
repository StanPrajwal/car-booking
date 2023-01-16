import {Link} from "react-router-dom"
import "./Styles/Navbar.css"

function Navbar(){
    
    return <header>
        <span id="rapid">RAPID<span id="qube">QUBE</span></span>
        <nav className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/showcars">Book Slot</Link>
            <Link>View Cars</Link>
            {localStorage.getItem("token")?"":<Link to="/register">Register</Link>}
            <Link to="/" onClick={()=>{
                if(localStorage.getItem("token")){
                    localStorage.clear("token")
                }
            }}>{localStorage.getItem("token")?"Logout":"Login"}</Link>
           
        </nav>
    </header>
}
export default Navbar