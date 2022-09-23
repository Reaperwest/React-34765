import { Nav } from 'reactstrap';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <h2>Las ofertas de la semana</h2>
      <ItemListContainer greating = {"Catálgo"} />
    </>
  );
}

export default App;
