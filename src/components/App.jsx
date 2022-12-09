import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
// import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {

    return (

        // <> se conocen como Francment, me evita un DIV al pedo.
        <>
            <Navbar />
            {/* <ItemCount /> */}
            <ItemListContainer/>
            <ItemDetailContainer />
        </>
    );
}

export default App;
