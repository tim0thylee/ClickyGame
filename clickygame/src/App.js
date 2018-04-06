import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card"
import image from "./image.json"

class App extends Component {

  state = {
    image,
    clickedImage: [],
    score: 0
  };

  clicked = event => {
    const currentImage = event.target.alt;
    const alreadyClicked = this.state.clickedImage.indexOf(currentImage) >-1;

    if(alreadyClicked){
      this.setState({
        image: this.state.image.sort(function(x,y){
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
      alert("You suck. Play again!")
    } else{
      this.setState(
        {
        image: this.state.image.sort(function(x,y){
          return 0.5 - Math.random();
        }),
        clickedImage: this.state.clickedImage.concat(
          currentImage
        ),
        score: this.state.score + 1
      },

      () => {
         if (this.state.score === 4){
           alert("You won!")
           this.setState({
             image: this.state.image.sort(function(x,y){
               return 0.5 - Math.random();
             }),
             clickedImage: [],
             score:0
           });
         }
        }
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar 
          score={this.state.score}  
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.image.map(image => (
            <Card
              clicked = {this.clicked}
              id = {image.id}
              key = {image.id}
              image = {image.image}
            />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
