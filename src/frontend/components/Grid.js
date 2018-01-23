import React, { Component } from 'react';
import styles from '../styles/styles';
import Cell from '../components/Cell.js';
import messageType from "../messageTypes";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
    };

    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.onmessage = (payload) => {
      const messageFromServer = JSON.parse(payload.data);
      switch (messageFromServer.type) {
        case messageType.update_color:
          this.props.setCellColor(messageFromServer.id, messageFromServer.color);
          console.log('message from server: ', messageFromServer)
          break;
        case 'announcement':
          console.log("Received message from server: ", messageFromServer);
          break;
        default:
          console.warn("Unexpected message type from server")
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.socket.send('ready');
    }, 1000);
  }

  render() {
    return (
      <div className="Grid" style={styles.grid} >
        {this.props.cells.map((cell, index) =>
          (<Cell
            key={index}
            id={cell.id}
            setCellColor={this.props.setCellColor}
            color={cell.color}
          />),
        )}
      </div >
    );
  }
}


export default Grid;
