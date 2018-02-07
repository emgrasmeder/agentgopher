import React, { Component } from 'react';
import styles from '../styles/styles';
import Cell from '../components/Cell.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.props.socketConnect()
  }

  render() {
    var cells = this.props.cells ?
      this.props.cells.map((cell, index) =>
        (<Cell
          key={index}
          id={cell.id}
          setCellColor={this.props.setCellColor}
          color={cell.color}
        />)) : <div/>;

    return (
      <div className="Grid" style={styles.grid} >
        {cells}
      </div >
    );
  }
}


export default Grid;
