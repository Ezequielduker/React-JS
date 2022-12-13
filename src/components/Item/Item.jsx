//Generar la Card producto
import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return (
        <div className='card mb-3 cardProducto border-light p-3'>
                        <img src={`../imagenes/${producto.img}`}className="card-img-top" alt="..." />
                        <div className='card-body cardBody'>
                            <h5 className="card-title">{producto.nombre} {producto.modelo}</h5>
                            <p className="card-text">*{producto.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                            <button className='btn btn-primary'><Link className="nav-link" to={`/product/${producto.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
