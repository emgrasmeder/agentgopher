import React, { Component } from 'react';
import Grid from './Grid.js';
// import Websocket from 'react-websocket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    console.log('setting up websocket...', this.state)
    this.handleData = this.handleData.bind(this)
  }

  componentDidMount() {
    // this is an "echo" websocket service for testing pusposes
    this.connection = new WebSocket('wss://localhost:3000');
    // listen to onmessage event
    this.connection.onmessage = evt => {
      // add the new message to state
      this.setState({
        messages: this.state.messages.concat([evt.data])
      })
    };

    // for testing: sending a message to the echo service every 2 seconds,
    // the service sends it right back
    setInterval(_ => {
      this.connection.send(Math.random())
    }, 2000)
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({ messages: result });
  }

  render() {
    return (
      <div >
        {/*<Websocket url='ws://localhost:3000/stream/'*/}
                   {/*onMessage={this.handleData} />*/}
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
