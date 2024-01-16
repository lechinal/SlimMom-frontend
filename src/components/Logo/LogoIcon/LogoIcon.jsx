import React, { useState, useEffect } from 'react';
import styles from './LogoIcon.module.css';
import logo from '../../../images/icons/Logo.png';
import logoDesktop from '../../../images/icons/Logo-Desktop.png';

function LogoIcon() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentLogo, setCurrentLogo] = useState(logo);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentLogo(windowWidth >= 1024 ? logoDesktop : logo);
  }, [windowWidth]);
  return (
    <div>
      <img src={currentLogo} className={styles.logoIcon} alt="Logo" />
    </div>
  );
}

export default LogoIcon;
