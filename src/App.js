import './App.css';
import Home from './screeens/home/Home.jsx';
import Login from './screeens/login/Login.jsx';
import Logup from './screeens/logup/Logup.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/logup">
            <Logup/>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
