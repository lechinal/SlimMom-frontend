import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Logo.module.css';
import { routes } from '../../helpers/constants';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import LogoIcon from './LogoIcon/LogoIcon';
import LogoText from './LogoText/LogoText';

function Logo() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? routes.diaryToday : routes.main;

  const [isTabletOrLarger, setIsTabletOrLarger] = useState(
    window.innerWidth >= 768
  );

  // show Logo text only on tablet and larger screens
  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.logo}>
      <Link to={path} className={styles.link}>
        <LogoIcon />
        {(isLoggedIn || isTabletOrLarger) && <LogoText />}
      </Link>
    </div>
  );
}

export default Logo;
