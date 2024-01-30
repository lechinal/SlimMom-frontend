import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CalculatorPage.module.css';
import { routes } from '../../helpers/constants';

import CalculatorCalorieForm from '../../components/CalculatorCalorieForm/CalculatorCalorieForm';
import Sidebar from '../../components/SideBar/SideBar';

function CalculatorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.calculatorPageBox}>
      <div className={styles.calculatorCalorieBox}>
        <CalculatorCalorieForm
          onButtonClick={() => navigate(routes.diaryToday)}
        />
      </div>
      <div className={styles.sidebarBox}>
        <Sidebar />
      </div>
    </div>
  );
}

export default CalculatorPage;
