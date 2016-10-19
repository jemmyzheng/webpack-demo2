import 'layouts/global.less';
import React, { PropTypes } from 'react';
import Login from 'components/Login/Login';
import SignUp from 'components/SignUp/SignUp';
import styles from './IndexPage.less';

const IndexPage = ({ children, location }) => {
  const { pathname } = location;
  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.headerLayout} container`}>
          <h1 className={styles.logo}>logo</h1>
          <h2 className={styles.logoTitle}>{(pathname === '/' || pathname === '/login') ? '登录' : '注册'}</h2>
          <ul className={styles.headerNav}>
            <li>首页</li>
            <li>用户指南</li>
          </ul>
        </div>
      </header>
      { children }
    </div>
  );
};

IndexPage.propTypes = {
  children: PropTypes.element,
  location: PropTypes.any,
};
IndexPage.Login = Login;
IndexPage.SignUp = SignUp;
export default IndexPage;
