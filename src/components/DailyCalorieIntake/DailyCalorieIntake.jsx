import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import styles from './DailyCalorieIntake.module.css';

import GoBackBtn from './GoBackBtn/GoBackBtn';
import { selectCalculateValue } from '../../redux/calculate/selectors';
import StartLosingWeightBtn from '../DailyCaloriesForm/StartLosingWeightBtn/StartLosingWeightBtn';

function DailyCalorieIntake() {
  const { countedCalories: calories, notAllowedFoodCategories } =
    useSelector(selectCalculateValue);

  const navigate = useNavigate();

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <>
      {!isDesktopOrLaptop && <GoBackBtn />}
      <div className={styles.intakeBox}>
        <h1 className={styles.intakeTitle}>
          Your recommended daily calorie intake is
        </h1>
        <div className={styles.intakeCaloriesBox}>
          <p className={styles.intakeCaloriesText}>
            {calories ? (
              <>
                {Math.round(calories)}{' '}
                <span className={styles.intakeCaloriesSpan}>kcal</span>
              </>
            ) : null}
          </p>
        </div>
        <div className={styles.notAllowedFoodBox}>
          <h2 className={styles.intakeSubTitle}>Foods you should not eat</h2>
          <ol className={styles.intakeNotAllowed}>
            {notAllowedFoodCategories &&
              notAllowedFoodCategories.slice(0, 5).map(categorie => {
                return (
                  <li
                    className={styles.intakeNotAllowedElement}
                    key={categorie}
                  >
                    {categorie.charAt(0).toUpperCase() + categorie.slice(1)}
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
      <StartLosingWeightBtn onClick={handleButtonClick} />
    </>
  );
}

export default DailyCalorieIntake;
