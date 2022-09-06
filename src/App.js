import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import SimpleCart from './components/simpleCart/SimpleCart';
import Cart from './components/cart/Cart';
import { If } from 'react-if';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App(props) {
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
          <SimpleCart />
          <If condition={state.products.length > 0}>
            <Products />
          </If>
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;