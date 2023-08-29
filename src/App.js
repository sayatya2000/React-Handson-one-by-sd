import './App.css';
import ClassComponent from './ClassComponent'
import FunctionComponent from "./FunctionComponent"
// import React from 'react';
import { Component } from "react";

class App extends Component {

  constructor()
  {
    super();
    this.state = 
    {
        FunctionClick: false,
        ClassClick: false
    }
  }
  render(){

  

  return (
    <div className="App">
       <span class="love">
       <h1 >Styling Using Function And Class Component</h1>
       </span>

        <center class="all">
        <button onClick={()=>this.setState({FunctionClick:!this.state.FunctionClick})}> To See Styling In Function Component</button>
       <button onClick={()=>this.setState({ClassClick:!this.state.ClassClick})}>To See Styling In Class Component</button>
        </center>


       {this.state.FunctionClick && <FunctionComponent/>}
       {this.state.ClassClick && <ClassComponent/>}
    </div>
  );
  }
}

export default App;
