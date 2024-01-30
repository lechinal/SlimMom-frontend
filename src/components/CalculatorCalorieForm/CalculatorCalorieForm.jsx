import React from 'react';

import styles from './CalculatorCalorieForm.module.css';
import DailyCaloriesForm from '../DailyCaloriesForm/DailyCaloriesForm';

function CalculatorCalorieForm({ onButtonClick }) {
  return (
    <>
      <div className={styles.calculatorFormBox}>
        <DailyCaloriesForm onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default CalculatorCalorieForm;
/* test PR */
