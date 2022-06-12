import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Counter from './counter/Counter';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}>
              <Route path=':side' element={<ItemListContainer />}/>
            </Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
