import React, { Component } from 'react';
import Grid from '../components/Grid.js';
import Button from '../components/Button.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.socketConnect()
  }
  render() {
    return (
      <div >
        <Grid
          cells={this.props.cells}
          setCellColor={this.props.setCellColor}
        />
        <Button clearAll={this.props.clearAll}/>
      </div >
    );
  }
}

export default App;
