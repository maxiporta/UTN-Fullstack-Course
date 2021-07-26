import './style.css'

import { Link } from "react-router-dom"

function Navbar(){
    return(<div className="navbar">
   <div className="options">

    <Link to="/libro/listadolibro" className="link left">Listado de libros</Link>
    <Link to="/persona/listadopersona" className="link middle">Listado de personas</Link>
   {/* <Link to="/listadoGenero" className="link right">Listado de generos</Link>  */}
   
   </div>
    </div>)
}


export default Navbar