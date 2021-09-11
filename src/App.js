import './App.css';
import Home from './screeens/home/Home';
import Login from './screeens/login/Login';
import Logup from './screeens/logup/Logup';
import Product from './screeens/product/Product';
import ActivateUser from './screeens/activateUser/Activate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppContext from './context/AppContext';

function App() {
  return (
    <AppContext>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/logup">
              <Logup/>
            </Route>
            <Route path="/activate">
              <ActivateUser/>
            </Route>
            
          </Switch>

        </div>
      </Router>
    </AppContext>

  );
}

export default App;
