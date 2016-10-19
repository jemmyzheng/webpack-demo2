import React, { PropTypes } from 'react';

const MainLayout = ({ children }) => (
  <article>
    <div>
      <div>
        {/* 侧边全局导航 */}
      </div>
      <div>
        {children}
      </div>
    </div>
  </article>
);
MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainLayout;
