import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from './Navigation.module.css';
import { routes } from 'helpers/constants';

function Navigation() {
  const matchLogin = useMatch(routes.login);
  const matchSignup = useMatch(routes.signup);

  return (
    <nav className={styles.navigation}>
      <Link
        to={routes.login}
        className={matchLogin ? styles.navLinkActive : styles.navLink}
      >
        log in
      </Link>
      <Link
        to={routes.signup}
        className={matchSignup ? styles.navLinkActive : styles.navLink}
      >
        registration
      </Link>
    </nav>
  );
}

export default Navigation;
