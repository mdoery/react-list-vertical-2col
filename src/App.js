import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      /**
       * I want the divs to wrap, as described in this Stack Overflow question:
       * https://stackoverflow.com/questions/11517415/how-can-i-wrap-divs
       */
      <div className="App">
        <span className="roundedItem">Kid Cudi</span>
        <span className="roundedItem">David Guetta</span>
        <span className="roundedItem">Rhianna</span>
        <span className="roundedItem">Skrillex</span>
        <span className="roundedItem">Martin Garrix</span>
        <span className="roundedItem">Avicii</span>
        <span className="roundedItem">Zedd</span>
        <span className="roundedItem">Diplo</span>
        <span className="roundedItem">Calvin Harris</span>
        <span className="roundedItem">Deadmau5</span>
        <span className="roundedItem">Afrojack</span>
        <span className="roundedItem">Daft Punk</span>
        <span className="roundedItem">Porter Robinson</span>
        <span className="roundedItem">DJ Snake</span>
        <span className="roundedItem">Swedish House Mafia</span>
        <span className="roundedItem">Axwell</span>
        <span className="roundedItem">Tiësto</span>
      </div>
    );
  }
}

export default App;
