import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import UserPage from 'pages/UserPage';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={UserPage} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
