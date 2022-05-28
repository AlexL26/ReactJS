import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Itemliscontainer from './components/itemlistcontainer/Itemlistcontainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Itemliscontainer greeting={'Segundo Desafio Entregable. Alexis Lopez. ReactJS'}/>
      </div>
    );
  }
}

export default App;
