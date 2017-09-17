import React, { Component } from 'react';
import styles from './styles';
import Cell from './Cell.js';


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 }
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  _onMouseDown(e) {
    this.setState({
      initialX: this.state.x,
      initialY: this.state.y,
    });
    setTimeout(() => {
      console.log(this.state);
    }, 1000)
  }

  render() {
    return (
      <div
        style={styles.grid}
        onMouseMove={this._onMouseMove.bind(this)}
        onMouseDown={this._onMouseDown.bind(this)}
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
