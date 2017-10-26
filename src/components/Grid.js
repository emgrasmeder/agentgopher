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

  createCells() {
    this.cells = [];
    Array.from(Array(324).keys()).forEach((n) => {
      this.cells.push(<Cell
        key={n.toString()}
        id={n}
        becomeVisible={(n)=>this.props.becomeVisible(n)}
        becomeInvisible={(n)=>this.props.becomeInvisible(n)}
      />)
    });
  };

  render() {
    this.createCells();
    return (
      <div className="Grid" style={styles.grid} >
        {this.props.cells.map((cell, index) =>
          (<Cell
            key={index}
            id={cell.id}
            becomeVisible={()=>this.props.becomeVisible(cell.id)}
            becomeInvisible={()=>this.props.becomeInvisible(cell.id)}
          />),
        )}
      </div >
    );
  }
}


export default Grid;
