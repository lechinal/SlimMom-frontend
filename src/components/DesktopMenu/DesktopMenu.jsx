import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { routes } from '../../helpers/constants';
import styles from './DesktopMenu.module.css'; // asigurați-vă că calea este corectă

function DesktopMenu({ className }) {
  const matchDiary = useMatch(routes.diaryToday);
  const matchCalculator = useMatch(routes.calculate);

  return (
    <div className={styles.desktopMenuBox}>
      <ul className={styles.desktopMenulist}>
        <li className={styles.menuListElement}>
          <Link
            to={routes.diaryToday}
            className={matchDiary ? styles.navLinkActive : styles.navLink}
          >
            Diary
          </Link>
        </li>
        <li>
          <Link
            to={routes.calculate}
            className={matchCalculator ? styles.navLinkActive : styles.navLink}
          >
            Calculator
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;
