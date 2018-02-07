import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div
        className="clearAll"
        onClick={this.props.clearAll} >
        <button>Clear All</button>
      </div >
    );
  }
}


export default Button;
