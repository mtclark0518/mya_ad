import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Button} from 'semantic-ui-react';


class App extends Component {
    goTo(route) {this.props.history.replace( `/${route}` )}
    login() { this.props.auth.login(); }
    logout() { this.props.auth.logout(); }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <header className="App-header">
        <Button
            className="primary"
            onClick={this.goTo.bind(this, 'landing')}>
            Home
        </Button>
          {!isAuthenticated() && (<Button className="primary" onClick={this.login.bind(this)}>log in</Button>)}
          {isAuthenticated() && (<Button className="secondary" onClick={this.logout.bind(this)}>log out</Button>)}
  
        </header>

      </div>
    );
  }
}

export default App;
