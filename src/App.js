import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
function App() {
  return (
    <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal />
    </React.Fragment>
  );
}

export default App;
