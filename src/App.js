import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
    <Layout>
      <Switch>
        <Route
          path="/home"
          render={() => <ItemListContainer greating = {"Catálgo"} />}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </Layout>
    </>
  );
}

export default App;
