import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/UseFirebase';

const PriveteRoute = ({ children, ...rest }) => {
    let {user, isLoading} = useAuth();
    if(isLoading){
      return <Spinner animation="border" variant="primary" />
  }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
        />
    );
};

export default PriveteRoute;