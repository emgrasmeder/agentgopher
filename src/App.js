import React, { Component } from 'react';
import Grid from './Grid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.socket = new WebSocket('ws://localhost:8080/echo');
  }

  componentDidMount() {
    this.socket.onmessage = (message) => {
      this.setState({messages: message.data})
      console.log(this.state);
    };

    setTimeout(() => {
      this.socket.send('Hello World!');
    }, 3000);

  }

  render() {
    return (
      <div >
        Agent Gopher!
        <Grid />
      </div >
    );
  }
}


export default App;
