import React from 'react';
import styles from './StartLosingWeightBtn.module.css';

function StartLosingWeightBtn({ onClick }) {
  return (
    <div className={styles.buttonBox}>
      <button type="submit" className={styles.buttonSubmit} onClick={onClick}>
        Start losing weight
      </button>
    </div>
  );
}

export default StartLosingWeightBtn;
