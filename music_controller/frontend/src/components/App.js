import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App'>
        <Homepage />
      </div>
    );
  }
}

const root = document.getElementById('app');
render(<App />, root);
