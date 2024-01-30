import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import hamburgerIcon from '../../images/icons/burger-icon.svg';
import crossIcon from '../../images/icons/close-cross.svg';

import HamburgerModal from 'components/HamburgerModal/HamburgerModal';
import UserInfo from '../UserInfo/UserInfo';
import DesktopMenu from '../DesktopMenu/DesktopMenu';

function Header({ isWideScreen }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isMenuOpen ? styles.modalOpen : ''}`}
    >
      <Logo isLogged={isLoggedIn} />
      {isLoggedIn && isWideScreen && <DesktopMenu />}

      {isLoggedIn && isWideScreen && (
        <div className={styles.userInfoContainer}>
          <UserInfo displayLocation="header" />
        </div>
      )}

      {isLoggedIn ? (
        <div className={styles.modalBox}>
          <button onClick={toggleMenu} className={styles.openClosebtn}>
            <img
              src={isMenuOpen ? crossIcon : hamburgerIcon}
              alt="hamburger-menu"
            />
          </button>

          {isMenuOpen && (
            <HamburgerModal isOpen={isMenuOpen} onClose={toggleMenu} />
          )}
        </div>
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;
