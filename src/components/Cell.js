import React, { Component } from 'react';
import styles from '../styles/styles';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.color === "white"
      ? this.props.setCellColor(this.props.id, "cadetblue")
      : this.props.setCellColor(this.props.id, "white")
  };

  render() {
    return (
      <div className="cell"
        style={styles.cell(this.props.color)}
        onClick={this.handleClick}
      >
      </div >
    );
  }
}

export default Cell;
