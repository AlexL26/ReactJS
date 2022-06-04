import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Itemliscontainer from './components/itemlistcontainer/Itemlistcontainer'
import Counter from './counter/Counter';
import ProductList from './components/ItemListConteiner/ItemListConteiner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Itemliscontainer greeting={'Tercer Desafio Entregable. Alexis Lopez. ReactJS'}/>
        <ProductList/>
      </div>
    );
  }
}

export default App;
