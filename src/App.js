import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Home/Footer/Footer';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './pages/LogIn/Login';
import PriveteRoute from './PriveteRoute/PriveteRoute';
import AuthProvider from './Context/AuthProvider';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PriveteRoute path="/service/:id">
            <PlaceOrder></PlaceOrder>
          </PriveteRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>      
    </AuthProvider>
  );
}

export default App;
