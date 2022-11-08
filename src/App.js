import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import {BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
