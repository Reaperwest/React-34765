import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  let misEstilos = { backgroundColor: "#272727" };
  
  return (
    <>
      <div className="main" style={misEstilos}>
        <NavBar />
        <ItemListContainer greeting="Ofertas" />
        <Footer />
      </div>
    </>
  );
}

export default App;
