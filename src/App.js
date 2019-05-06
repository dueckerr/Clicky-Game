import React, {Component} from 'react';
import './App.css';
import teams from './teams.json'
import LogoCard from './components/LogoCard';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";


class App extends Component {
  state = {
    teams,
    hasBeenClicked: [],
    count: 0,
    highscore: 0
  };
  renderImage = () => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return this.state.teams.map(team => <img src = {team.image} id = {team.team} onClick = {this.handleClick} />)  
  }
  // handles the clicking of the logos
  handleClick = (event) => {
    // console.log(event.target.id)
    console.log(this.state.count)
    this.setState({
      // hasBeenClicked: this.state.hasBeenClicked.concat(event.target.id),
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.count} highscore={this.state.highscore}>Clicky Game</Title>
        {this.state.teams.map(team => (
          <LogoCard
            clickCount={this.handleClick}
            key={team.id}
            team={team.team}
            image={team.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

