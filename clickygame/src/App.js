import React, { Component } from "react";
import Wrapper from "./component/Wrapper/Wrapper";
import NavBar from "./component/Navbar/navbar";
import NameCard from "./component/NameCard/nameCard";


class App extends Component {
  //Setting initial State
  state = {
    title: "Clicky Game",
    roundResult: "Win",
    score: "1",
    topScore: "2"
  };

  //Ensure the component is ready
  componentDidMount() {

  }

  //Functions to change the state
  setTitle() {
    this.setState({
      title: "Clicky Game"
    })
  }

  shuffleImage = id => {

  }

  //Map over all the images and render
  render() {
    return (
      //Wrapper for default format
      <Wrapper>
        <NavBar
          title={this.state.title}
          roundResult={this.state.roundResult}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <NameCard
          title={this.state.title}
        />
      </Wrapper>
        )
      }
    }
    
    export default App;
