import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
