//Generar la Card producto

const Item = ({ producto }) => {
    return (

        <div className="card border-light mb-3 cardProducto">
            <img src={`../imagenes/${producto.img}`} className="card-img-top" alt="..." />
            <div className="card-body cardBody">
                <h5 className="card-title">{producto.nombre} {producto.modelo}</h5>
                <p className="card-text">*{producto.marca}*</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                <button className="btn btn-dark">Ver Producto</button>
            </div>
        </div>


    );
}

export default Item;
