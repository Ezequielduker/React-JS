// Cambiar o modificar mi array de objetos

import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    
    return (
        <div>
            {productsList.map(producto => <Item key={producto.id} producto = {producto}/>)}
        </div>
    );
}

export default ItemList;
