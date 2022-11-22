import './App.css';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import './Main/Main.css'
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
    return (

        // <> se conocen como Francment, me evita un DIV al pedo.
        <>
            <Navbar />
            <Main />
            <ItemListContainer greeting={"Hola"}/>
        </>
    );
}

export default App;