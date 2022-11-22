import { useState } from "react";
const ItemListContainer = ({greeting}) => {
    
    const [numero, setNumero] = useState(0)
    return (
        <div>
            <p>{numero}</p>
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
