import React, { Component } from 'react';
import styles from './styles';
import Cell from './Cell.js';

class Grid extends Component {
  render() {
    return (
      <div style={styles.grid} >
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        &nbsp;
      </div >
    );
  }
}

export default Grid;
