// consultar BDD
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import { consultarBDD } from "../../assets/funciones.js";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productList => {
            
            const cardProductos = ItemList({ productList })
            setProductos(cardProductos)
        })

    }, []);

    return (
        <div className="row cardProductos">
            {productos}
        </div>

    );
}

export default ItemListContainer;
