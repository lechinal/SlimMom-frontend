import { React, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './MainPage.module.css';

import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import DailyCalorieIntake from '../../components/DailyCalorieIntake/DailyCalorieIntake';
import ModalDailyIntake from 'components/ModalDailyIntake/ModalDailyIntake';

function MainPage() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleCloseModal = () => {
    setIsButtonClicked(false);
  };

  return (
    <div className={styles.mainPage}>
      {isButtonClicked && isDesktopOrLaptop && (
        <ModalDailyIntake onClose={handleCloseModal}>
          <DailyCalorieIntake />
        </ModalDailyIntake>
      )}
      {!isDesktopOrLaptop && isButtonClicked ? (
        <DailyCalorieIntake />
      ) : (
        <DailyCaloriesForm onButtonClick={handleButtonClick} />
      )}
    </div>
  );
}

export default MainPage;
