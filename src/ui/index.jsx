import React from 'react';
import ReactDom from 'react-dom';
import { Landing } from './Landing';
import {
  injectGlobalStyle,
  injectResetStyle,
} from 'reactackle';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const App = (props) => {
  return <Landing {...props} />;
};

ReactDom.render( 
  <Router>
    <Route  path="/:id" component={App} />
  </Router>,
    document.getElementById('root'));

injectGlobalStyle();
injectResetStyle();
