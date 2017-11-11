import React, { Component } from 'react';
import styles from '../styles/styles';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.hidden
      ? this.props.becomeVisible(this.props.id)
      : this.props.becomeInvisible(this.props.id)
  };

  render() {
    return (
      <div className="cell"
        style={styles.cell(this.props.hidden)}
        onClick={this.handleClick}
      >
      </div >
    );
  }
}

export default Cell;
