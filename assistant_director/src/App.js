import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    goTo(route) {this.props.history.replace( `/${route}` )}
    login() { this.props.auth.login(); }
    logout() { this.props.auth.logout(); }

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     test: []
    //   }
    // }
    // componentDidMount() {
    //   this.testing();
    // }
    // testing(){
    //   axios.get('api/location')
    //     .then(response => {
    //       this.setState({ test: response.data});
    //       console.log(this.state.test)
    //     });
    // }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.goTo.bind(this, 'landing')}>home</button>
          {!isAuthenticated() && (<button onClick={this.login.bind(this)}>log in</button>)}
          {isAuthenticated() && (<button onClick={this.logout.bind(this)}>log out</button>)}
  
        </header>

      </div>
    );
  }
}

export default App;
