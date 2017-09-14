import React, { Component } from 'react';
import Grid from './Grid.js';
// import WebSocket from 'ws';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      timestamp: 'no timestamp yet',
    };
    this.socket = new WebSocket('ws://localhost:8080/echo');
  }

  componentDidMount() {
    this.socket.onmessage = (message) => {
      const messageData = JSON.stringify(message);

      console.log(messageData);
    }

    // Give some time for socket to establish connection
    setTimeout(() => {
      this.socket.send('Hello World!');
    }, 3000);

  }


  render() {
    return (
      <div >
        This is the timer value: {this.state.timestamp}
        Agent Gopher!
        <Grid />
        <ul >
          {this.state.messages.map((msg, idx) => (
            <li key={'msg-' + idx} >{msg}</li >
          ))}
        </ul >
      </div >
    );
  }
}


export default App;
