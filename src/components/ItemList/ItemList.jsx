// Cambiar o modificar mi array de objetos

import Item from "../Item/Item";

const ItemList = ({productList}) => {
    
    return (
        <div>
            {productList.map(producto => <Item key={producto.id} producto = {producto}/>)}
        </div>
    );
}

export default ItemList;
