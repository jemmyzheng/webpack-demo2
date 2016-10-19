import React, { PropTypes } from 'react';
import 'layouts/global.less';

const UserPage = ({ children }) => (
  <div>
    User
    { children }
  </div>
);

UserPage.propTypes = {
  children: PropTypes.element,
};
export default UserPage;
