import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './HelloWorld.css';

class HelloWorld extends React.Component{
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello'};
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  
  frenchify(){
    this.setState({ greeting: 'Bonjour'});
  }

  removeGreeting(){
    this.props.removeGreeting(this.props.name);
  }
  render(){
  return(
    <div className="HelloWorld">{this.state.greeting} {this.props.name}!
    <br/>
    <button bstyle="success" onClick={this.frenchify}>Frenchify!</button>  
    <Button bsStyle="warning" onClick={this.removeGreeting}>Remove me!</Button>
    </div>
  );
 }
}

export default HelloWorld;
