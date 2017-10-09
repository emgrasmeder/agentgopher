import React, { Component } from 'react';
import styles from './styles';
import Cell from './Cell.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
    };
    
    this.socket = new WebSocket('ws://localhost:8080/echo');
    this.socket.onmessage = (message) => {
      this.setState({messages: message.data})
    };

  }

  componentDidMount() {
    setTimeout(() => {
      this.socket.send('Hello Server!');
    }, 1000);
  }

  render() {
    const cells = [];
    Array.from(Array(324).keys()).forEach((n) => {
      cells.push(<Cell key={n.toString()}/>)
    });

    return (
      <div
        className="Grid"
        style={styles.grid}
      >
        {cells}
      </div >
    );
  }
}

export default Grid;
