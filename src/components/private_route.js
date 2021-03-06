import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Child, ...props }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      render={(routeProps) => (props.authenticated ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Child {...routeProps} />
      ) : (
        <Redirect to="/signin" />
      ))}
    />
  );
}

function mapStateToProps(reduxState) {
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
