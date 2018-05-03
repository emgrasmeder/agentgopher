import React, { Component } from 'react';
import GridContainer from '../containers/GridContainer.js';

class App extends Component {
  render() {
    return (
      <div >
        Agent <strike>Gopher</strike><bold> Clojure</bold>!
        <GridContainer />
      </div >
    );
  }
}

export default App;
