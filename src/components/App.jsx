import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
const App = () => {

    return (

        // <> se conocen como Francment, me evita un DIV al pedo.
        <>
            <Navbar />
            <ItemListContainer greeting={"Hola"} />
            <ItemCount />
        </>
    );
}

export default App;
