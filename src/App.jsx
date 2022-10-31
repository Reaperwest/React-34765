import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartView from "./Components/CartView/CartView";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './context/cartContext';

function App() {
  let misEstilos = { backgroundColor: "#272727" };
  
  return (
    <div className="main" style={misEstilos}>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/category/:categoryID" element={<ItemListContainer />} />
              <Route path="/game/:itemID" element={<ItemDetailContainer  />}/>
              <Route path="/cart" element={<CartView/>}/>
              <Route path="/thankyou/:orderid" element={<h1 style={{ color: "white", paddingLeft:"40%" }} >Gracias por tu compra</h1>} />
              <Route path="*" element={<h4>Pagina no encontrada Error: 404</h4>} />
            </Routes>
            <Footer />
        </BrowserRouter >
      </CartContextProvider>
    </div>
  );
}

export default App;
