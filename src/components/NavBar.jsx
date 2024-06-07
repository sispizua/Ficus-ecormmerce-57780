import "./NavBar.css"
import CartWidget from "./CartWidget"
import { TbLetterF } from "react-icons/tb";


const NavBar = () => {
  return (
    <nav className="NavBar">
        <div className="brand">
        <TbLetterF className="icono"/>
        <h1>ICUS</h1>
        </div>
            <ul className="categorias">
                <li>Plantas</li>
                <li>Macetas</li>
                <li>Sustratos</li>
            </ul>
        <CartWidget/>
    </nav>
    
  )
}

export default NavBar