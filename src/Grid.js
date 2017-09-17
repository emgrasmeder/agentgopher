import React, { Component } from 'react';
import styles from './styles';
import Cell from './Cell.js';

class Grid extends Component {
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
