import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // WHERE WE REDIRECT LOGGED-IN USERS
      <Redirect to="/dashboard" />
    )
  )} />
);

const protectedMapStateToProps = state => {
  const moods = state.session.user && state.session.user.moods && Object.keys(state.session.user.moods).length > 0;
  return ({
    loggedIn: state.session.isAuthenticated,
    moods,
  })
};


const Protected = ({ component: Component, loggedIn, moods, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn && moods ? (
        <Component {...props} />
      ) : (
        <Redirect to="/quiz" />
      )
    }
  />
);

const semiProtectedMapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

const SemiProtected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }
  />
);

const mapStateToProps = state => (
  { loggedIn: state.session.isAuthenticated }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(protectedMapStateToProps)(Protected));

export const SemiProtectedRoute = withRouter(connect(semiProtectedMapStateToProps)(SemiProtected));