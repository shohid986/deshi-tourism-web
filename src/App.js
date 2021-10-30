import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Home/Footer/Footer';
import Service from './pages/Home/Service/Service';

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
          <Route path="/service/:id">
            <Service></Service>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>      
    </div>
  );
}

export default App;
