import React from 'react';
import styles from './LogoText.module.css';
import logoText from '../../../images/icons/SlimMom.svg';

function LogoText() {
  return (
    <div className={styles.logoTextBox}>
      <img
        src={logoText}
        width={106}
        className={styles.logoTextSvg}
        alt="Logo Text"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="30"
        viewBox="0 0 2 32"
        fill="none"
        className={styles.logoSeparator}
      >
        <path d="M1 0L0.999999 32" stroke="#E0E0E0" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default LogoText;
