import React from 'react';
import styles from './HamburgerModal.module.css';
import { routes } from '../../helpers/constants';
import { Link, useMatch } from 'react-router-dom';

function HamburgerModal({ isOpen, onClose }) {
  const matchDiary = useMatch(routes.diaryToday);
  const matchCalculator = useMatch(routes.calculate);
  return (
    <div
      className={isOpen ? styles.modalOverlay : styles.hidden}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <ul className={styles.modalList}>
          <li className={styles.modalListElement}>
            <Link
              to={routes.diaryToday}
              onClick={onClose}
              className={matchDiary ? styles.navLinkActive : styles.navLink}
            >
              Diary
            </Link>
          </li>
          <li>
            <Link
              to={routes.calculate}
              onClick={onClose}
              className={
                matchCalculator ? styles.navLinkActive : styles.navLink
              }
            >
              Calculator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerModal;
