import { Link } from "react-router-dom";

export const Item = ({producto}) => {
  return (
    <div className="item" key={producto.id}>
            <img src={producto.img} />
            <p className="nombre"> {producto.nombre} </p>
            <p>precio ${producto.precio}</p>
            <Link className="detalle" to={"/detalle/" + producto.id}>ver detalle</Link>
            </div>
  )
}

export default Item;