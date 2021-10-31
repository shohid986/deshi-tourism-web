import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Home/Footer/Footer';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './pages/LogIn/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/service/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>      
    </div>
  );
}

export default App;
