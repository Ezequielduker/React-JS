//Generar la Card producto
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../context/DarkModeContext";
const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className={`card mb-3 p-3 cardProducto ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}>
                        <img src={producto.img} className="card-img-top" alt="..." />
                        <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody' }`}>
                            <h5 className="card-title">{producto.nombre} {producto.modelo}</h5>
                            <p className="card-text">*{producto.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                            <button className='btn btn-primary'><Link className="nav-link" to={`/product/${producto.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
