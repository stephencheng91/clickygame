import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    title: "Clicky Game",
    roundResult: "",
    score: 0,
    topScore: 0
  };
  componentDidMount(){
    console.log("mount")
    console.log(this.state)
  }
  componentDidUpdate(){
    console.log("update")
    console.log(this.state)
  }

  //setting top score
  topScore = score => {
    if (score > this.state.topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  //When image is click run if function, determine if it has been click before, if not score +1 if yes game end
  game = (clickedId) => {
 
    let score = this.state.score;
    let friendsUpdated = this.shuffle(this.state.friends)
    let indexClicked = friendsUpdated.findIndex(friend => friend.id === clickedId)

    if (friendsUpdated[indexClicked].clicked === "false") {
      console.log("changed")
      friendsUpdated[indexClicked].clicked = "true"
      this.setState({
        score: score += 1, 
        friends: friendsUpdated
      })
    }
    else{
      let newfriends = friendsUpdated.map(friend => {friend.clicked = "false"; return friend})
      console.log("friendsclean", newfriends)
   
      if (this.state.score > this.state.topScore){
        this.setState({
          topScore: this.state.score,
          score: 0,
          friends: this.shuffle(newfriends)
        })
      }
      else{
        this.setState({
          score: 0,
          friends: this.shuffle(newfriends)
        })
      }
    }
  }
  
  shuffle = friends => {

    let newImages = friends.sort(() => Math.random() - 0.5);
    return newImages;
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>{this.state}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
            onClick={this.game}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;