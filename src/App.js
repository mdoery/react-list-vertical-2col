import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoundedSpan from './RoundedSpan';

const edmNames = ["Kid Cudi", "David Guetta", "Rhianna", "Skrillex", "Martin Garrix",
"Avicii", "Zedd", "Diplo", "Calvin Harris", "Deadmau5", "Afrojack", "Daft Punk",
"Porter Robinson", "DJ Snake", "Swedish House Mafia", "Axwell", "Tiësto"];

class App extends Component {
  render() {
	var count = edmNames.length;
	var rows = [];
	for (var i = 0; i < count; i++) {
		rows.push(<React.Fragment><RoundedSpan edmName={edmNames[i]}/><br/></React.Fragment>);
	}
	return (
		<div className="App">
			<div class='column column-right'>
			{rows}
			</div>
			<div class='column'>
			</div>
		</div>
	);
  }
}

export default App;
