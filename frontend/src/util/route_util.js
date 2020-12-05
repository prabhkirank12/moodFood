import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

// Redirects if the user is logged in
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
  const moodsExist = state.session.user && state.session.user.moodsExist;
  return ({
    loggedIn: state.session.isAuthenticated,
    moodsExist,
  })
};

// Redirects if user isn't logged in or the user hasn't set up their moodsExist
const Protected = ({ component: Component, loggedIn, moodsExist, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!loggedIn) {
        return <Redirect to="/login" />
      } else if (!moodsExist) {
        return <Redirect to="/quiz" />
      } else {
        return <Component {...props} />
      }
    }}
  />
);

const semiProtectedMapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

// Redirects if the user isn't logged in
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