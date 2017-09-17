import React, { Component } from 'react';
import styles from './styles';
import Cell from './Cell.js';


class Grid extends Component {
  render() {
    return (
      <div className="Grid"
           style={styles.grid}
      >
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div >
    );
  }
}

export default Grid;
