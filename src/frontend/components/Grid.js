import React, { Component } from 'react';
import styles from '../styles/styles';
import Cell from '../components/Cell.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.props.socketConnect()
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
