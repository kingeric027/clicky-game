import React, { Component } from 'react';
import Wrapper from "./components/wrapper";
import parks from "./parks.json";
import Navbar from "./components/navbar";
import Factdiv from "./components/factdiv";
import "./App.css";

class App extends Component {
  state = {
    parks,
    guess:"Click on an image to begin",
    score:0,
    high:0,
    fact:""
  }

  //If Item has been clicked add one to the count
  //handleIncrement = () =>{
  //  this.setState({ count: this.state.count + 1 });
  //}
  
  //function to shuffle an array "initial"
  shuffle = (initial) => {
    for (var array=[],i=0;i<initial.length;++i) array[i]=i;
    var tmp, current, top = initial.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
  }
  var newArray = []
  for(var j = 0; j<array.length; j++){
    newArray.push(initial[array[j]]);
  }
  return newArray;
  }

  validate = (event) =>{
    var parkIndex = event.target.id;
    console.log(this.state.parks[parkIndex].count);
    if(this.state.parks[parkIndex].count>0){
      this.reset();
    }else {
      this.setState({guess:"Correct!"});
      this.setState({ score: this.state.score + 1 });
      this.setState({fact:parks[parkIndex].fact});
    }
    parks[parkIndex].count +=1;
    this.setState({parks:this.shuffle(parks)});
    
    
    console.log(this.shuffle(parks));
  }

  reset = () =>{
    this.setState({guess: "Incorrect!"})
    this.setState({score: 0})
    this.setState({fact: ""})
    for(var i=0; i<parks.length; i++){
      parks[i].count = 0;
    }
    this.setState({parks:this.shuffle(parks)})
    if(this.state.score>this.state.high){
      this.setState({high:this.state.score})
    }
  }

  //map over this.state.parks and render a parkcard
  render() {
    return (
      <div>
        <Navbar 
          correct = {this.state.guess}
          score = {this.state.score}
          high = {this.state.high}
        
        />
        <div className="container">
        <Factdiv 
        fact = {this.state.fact}
        />
        <Wrapper>
          {this.state.parks.map((park,index) => ( 
            
              
              <div
                id = {park.id}
                className = "park-div"
                key={index}
                onClick = {this.validate}
                style = { {backgroundImage: "url("+park.url+")"} }
              />
            
          ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
