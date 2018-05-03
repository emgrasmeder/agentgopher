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

    this.socket = new WebSocket('ws://localhost:8080/echo');
    this.socket.onmessage = (message) => {
      switch (message.data) {
        case messageType.SETUP_DEFAULT:
          return this.props.setupDefault()
        default:
          return this.setState({messages: message.data})
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.socket.send('Hello Server!');
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
