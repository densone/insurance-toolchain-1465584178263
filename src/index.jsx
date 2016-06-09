import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from '../components/App';
import Admin from '../components/Admin';
import ApplicationList from '../components/ApplicationList';
import ApplicationStatus from '../components/ApplicationStatus';
import ApplicationForm from '../components/ApplicationForm';
import Home from '../components/Home';

//Needed for React Developer Tools
window.React = React;


injectTapEventPlugin();


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRedirect to="/home"/>
          <Route path="home" component={Home} />
          <Route path="/admin" component={Admin}/>
          <Route path="/apply" component={ApplicationForm}/>
          <Route path="/applications/:id" component={ApplicationStatus} />
      </Route>
  </Router>,
  document.getElementById("root")
);
