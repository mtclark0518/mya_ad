import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from '../App';
import Callback from '../_callback/callback';
import Auth from '../_services/Auth';
import history from '../history';
import StaffPortal from '../_containers/StaffPortal';
import Profile from '../_containers/Profile';
import FamilyPortal from '../_containers/FamilyPortal';
import Center from '../_containers/Center';

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
            <Center auth={auth} {...props} />} 
          />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
                <Redirect to = "/center" />
              ) : (
                <Profile auth={auth} {...props} />
              )
            )} />
        </div>
      </Router>
  );
}
