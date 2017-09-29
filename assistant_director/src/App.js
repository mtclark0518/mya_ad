import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        test: []
      }
    }
    componentDidMount() {
      this.testing();
    }
    testing(){
      axios.get('api/test')
        .then(response => {
          this.setState({ test: response.data});
        });
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-intro">
          {this.state.test}
        </h1>        
        </header>

      </div>
    );
  }
}

export default App;
