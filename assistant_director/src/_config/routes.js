import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from '../App';
import Callback from '../_callback/callback';
import Auth from '../_services/Auth';
import history from '../history';
import Landing from '../_containers/Landing';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => 
            <App auth={auth} {...props} />} 
          />
          
          <Route path="/landing" render={(props) => 
            <Landing auth={auth} {...props} />} 
          />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
