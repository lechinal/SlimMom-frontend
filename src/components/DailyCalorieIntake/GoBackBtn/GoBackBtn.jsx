import React from 'react';
import styles from './GoBackBtn.module.css';
import { useNavigate } from 'react-router-dom';

function GoBackBtn() {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate('/calculate');
  };

  return (
    <div className={styles.goBackBtnBox}>
      <button className={styles.goBackBtn} onClick={handleGoBackClick}>
        <svg
          className={styles.goBackBtnIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
        >
          <path
            d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}

export default GoBackBtn;
