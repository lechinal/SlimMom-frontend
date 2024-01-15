import React from 'react';
import styles from './LogoText.module.css';
import logoText from '../../../images/icons/SlimMom.svg';

function LogoText() {
  return (
    <div className={styles.LogoTextBox}>
      <img
        src={logoText}
        width={106}
        className={styles.LogoTextSvg}
        alt="Logo Text"
      />
    </div>

    // if (isLogged) {
    //   return (
    //     <div className={styles.LogoTextBox}>
    //       <img
    //         src={logoText}
    //         width={106}
    //         className={styles.LogoTextSvg}
    //         alt="Logo Text"
    //       />
    //     </div>
  );
}

export default LogoText;
