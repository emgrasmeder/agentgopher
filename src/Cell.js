import React, { Component } from 'react';
import styles from './styles';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {hidden: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log(this.state);
    this.setState({hidden: !this.state.hidden});
  };

  render() {
    return (
      <div className="cell"
        style={styles.cell(this.state.hidden)}
        onClick={this.handleClick}
      >
      </div >
    );
  }
}

export default Cell;
