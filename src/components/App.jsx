import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// componentes
import Navbar from './Navbar/Navbar';
// context
import { DarkModeProvider } from './context/DarkModeContext';

import ItemListContainer from './ItemListContainer/ItemListContainer';
// import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { ToastContainer } from 'react-toastify';


const App = () => {

    return (

        // <> se conocen como Francment, me evita un DIV al pedo.
        <>
            <BrowserRouter>
            <DarkModeProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/product/:id' element={<ItemDetailContainer />} />
                    <Route path='/category/:category' element={<ItemListContainer />} />
                    <Route path='/cart/:category' element={<ItemListContainer />} />
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
                <ToastContainer/>
                </DarkModeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
