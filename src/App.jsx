import React, { Component } from 'react';
// import Navigation from './components/Navigation';
import Ligma from './components/Ligma';

// App should be the 'Home Page'
// Doesn't do much except to encompass the app with the Navigation and Footer

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <Ligma />
      </div>
    );
  }
}

export default App;
