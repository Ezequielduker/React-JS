import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
// import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

const App = () => {

    return (

        // <> se conocen como Francment, me evita un DIV al pedo.
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/product/:id' element={<ItemDetailContainer />} />
                    <Route path='/category/:category' element={<ItemListContainer />} />
                    <Route path='/cart/:category' element={<ItemListContainer />} />
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
