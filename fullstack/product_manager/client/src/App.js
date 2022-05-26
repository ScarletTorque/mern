import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import OneProduct from './components/OneProduct';
import EditProductFrom from './components/EditProductFrom';

function App() {
  
  const [newProductToggle, setNewProductToggle] = useState(false);


  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Wall of Products</h1>
        <Link to = "/new">Add new Product</Link>
        <Switch>
          <Route exact path = "/">
            <AllProducts newProductToggle = {newProductToggle}></AllProducts>
          </Route>
          <Route exact path="/new">
          <NewProductForm newProductToggle = {newProductToggle} setNewProductToggle = {setNewProductToggle}></NewProductForm>
          </Route>
          <Route exact path="/products/:_id">
            <OneProduct></OneProduct>
          </Route>
          <Route exact path="/edit/:_id">
            <EditProductFrom></EditProductFrom>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
