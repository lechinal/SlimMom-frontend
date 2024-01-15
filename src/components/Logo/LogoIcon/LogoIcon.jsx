import React from 'react';
import styles from './LogoIcon.module.css';
import logo from '../../../images/icons/Logo.png';

function LogoIcon() {
  return (
    <div>
      <img
        src={logo}
        width={46}
        height={44}
        className={styles.logoIcon}
        alt="Logo"
      />
    </div>
  );
}

export default LogoIcon;
