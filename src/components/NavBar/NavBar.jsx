import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { TbLetterF } from "react-icons/tb"; 
import { Link } from "react-router-dom";
import { PiPlantLight } from "react-icons/pi";


const NavBar = () => {
  return (
    <nav className="NavBar">
        <Link className="brand" to="/">
        <TbLetterF className="icono"/>
        <h1>ICUS</h1>
        </Link>
            <ul className="categorias">
                <Link className="categoria" to="/categoria/plantas">
                <h3>Plantas</h3>
                <PiPlantLight/>
                </Link>
                <Link className="categoria" to="/categoria/macetas">
                <h3>Macetas</h3> 
                <img className="maceta" src="../image/maceta.png" alt="" />
                </Link>
                <Link className="categoria" to="/categoria/sustratos">
                <h3>Sustratos</h3> 
                <img className="tierra" src="../image/tierra.png" alt="" />
                </Link>
            </ul>
        <CartWidget/>
    </nav>
    
  )
}

export default NavBar