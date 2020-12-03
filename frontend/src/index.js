import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import {setAuthToken} from "./util/session_api_util";
import {logout} from "./actions/session_actions"

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    //initialize google maps api
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${decodedUser.mapsAPIKey}`;
    document.head.appendChild(script);

    delete decodedUser.mapsAPIKey;

    const preloadedState = { session: {
      isAuthenticated: true,
      user: decodedUser,
    }}

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }

  

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});