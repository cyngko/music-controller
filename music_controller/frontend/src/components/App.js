import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Testing React</h1>;
  }
}

const root = document.getElementById('app');
render(<App />, root);