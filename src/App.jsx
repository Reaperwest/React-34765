import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  let misEstilos = { backgroundColor: "#272727" };
  
  return (
    <div className="main" style={misEstilos}>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/game/:itemID" element={<ItemDetailContainer  />}/>
            <Route path="*" element={<h4>Pagina no encontrada Error: 404</h4>} />
          </Routes>
          <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
