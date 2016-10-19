import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import IndexPage from 'pages/IndexPage';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={IndexPage} >
      <IndexRoute component={IndexPage.Login} />
      <Route path="/login" component={IndexPage.Login} />
      <Route path="/signUp" component={IndexPage.SignUp} />
    </Route>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
