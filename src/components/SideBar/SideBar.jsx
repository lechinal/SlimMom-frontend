import React from 'react';
import styles from './SideBar.module.css';
import { useSelector } from 'react-redux';

// import { selectUser } from '../../redux/auth/selectors';
import { selectIsLoading } from '../../redux/loader/selectors';
import { productsList } from '../../redux/products/selectors';
import { selectCalculateValue } from '../../redux/calculate/selectors';
import { getSelectedDate } from '../../redux/date/selectors';
import { Loader } from '../Loader/Loader';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { initialDate } from '../../helpers/constants';
import SidebarBackground from '../Backgrounds/SidebarBackground/SidebarBackground';

function SideBar() {
  const isLoading = useSelector(selectIsLoading);
  const selectedDate = useSelector(getSelectedDate);
  // const { calorie } = useSelector(selectUser);

  const { countedCalories, notAllowedFoodCategories } =
    useSelector(selectCalculateValue);
  const products = useSelector(productsList);

  const totalCalories = products
    .reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.productCalories),
      0
    )
    .toFixed(2);
  const diffCalories = (Number(countedCalories) - totalCalories).toFixed(2);
  const percentage = ((totalCalories / Number(countedCalories)) * 100).toFixed(
    2
  );

  return (
    <SidebarBackground>
      <section className={styles.sidebarBox}>
        <div className={styles.contentBox}>
          <div className={styles.summaryBox}>
            {isLoading ? <Loader /> : null}
            <div className={styles.summaryTitleBox}>
              <h2 className={styles.summaryTitle}>
                Summary for{' '}
                <span>
                  {selectedDate
                    ? selectedDate
                    : initialDate.split('-').join('.')}
                </span>
              </h2>
            </div>
            <div className={styles.summaryTextBox}>
              <ul className={styles.summaryTextBoxDetails}>
                <li>
                  <p>
                    <span>Left</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Consumed</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Daily rate</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>n% of normal</span>
                  </p>
                </li>
              </ul>

              <ul className={styles.summaryTextBoxResults}>
                <li>
                  <p>
                    <span> {diffCalories} kcal</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>{totalCalories} kcal</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>{countedCalories ?? 0} kcal</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>{isNaN(percentage) ? 0 : percentage} %</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.notRecomandedFoodBox}>
            <div className={styles.TitleBox}>
              <h2 className={styles.notRecomandedFoodBoxTitle}>
                Food not recommended
              </h2>
            </div>
            {countedCalories ? (
              <ul className={styles.notRecomandedFoodBoxProducts}>
                {notAllowedFoodCategories &&
                  notAllowedFoodCategories.slice(0, 4).map(product => {
                    return (
                      <li key={product}>
                        <p>
                          <span>{capitalizeFirstLetter(product)}</span>
                        </p>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <div className={styles.ifNotCalories}>
                <p>Your diet will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </SidebarBackground>
  );
}

export default SideBar;
