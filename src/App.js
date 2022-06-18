import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Counter from './counter/Counter';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import CartContainer from './components/CartContainer/CartContainer';

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CartProvider } from './utils/CartContext';




class App extends Component {
  render() {
    return (
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}>
                <Route path=':side' element={<ItemListContainer />} />
              </Route>
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer/>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    );
  }
}

export default App;
