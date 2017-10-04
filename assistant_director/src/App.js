import React, { Component } from 'react';
import './App.css';
import {Button} from 'semantic-ui-react';


class App extends Component {
    goTo(route) {this.props.history.replace( `/${route}` )}
    login() { this.props.auth.login(); }
    logout() { this.props.auth.logout(); }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
