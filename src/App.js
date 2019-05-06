import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from './teams.js'

class App extends React.Component {
  state = {
    teams,
    hasBeenClicked: []
  }
  renderImage = () => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return this.state.teams.map(team => <img src = {team.img} id = {team.team} onClick = {this.handleClick} />)  
  }
  handleClick = (event) => {
    console.log(event.target.id)
    this.setState({
      hasBeenClicked: this.state.hasBeenClicked.concat(event.target.id)
    })
  }
  render() {

    return (
      <div className="App">
      <h1> Clicky Game</h1>
      {this.renderImage()}
    </div>
    );
  }
}

export default App;
