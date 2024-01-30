import React from 'react';
import styles from './DailyCaloriesForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { calculation } from '../../redux/calculate/operations';
import { postSideBarInfo } from '../../redux/products/operations';
import { selectCalculateValue } from '../../redux/calculate/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { addCalories } from '../../redux/calculate/slice';
import { bloodTypes } from '../../helpers/constants';

import { getCategoriesByBloodType } from '../../helpers/getCategoriesByBloodType';
import StartLosingWeightBtn from './StartLosingWeightBtn/StartLosingWeightBtn';
import DailyCaloriesFormBackground from '../Backgrounds/DailyCaloriesFormBackground/DailyCaloriesFormBackground';

function DailyCaloriesForm({ onButtonClick }) {
  const dispatch = useDispatch();

  const { formData } = useSelector(selectCalculateValue);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      height: formData.height,
      age: formData.age,
      currentWeight: formData.currentWeight,
      desiredWeight: formData.desiredWeight,
      bloodType: formData.bloodType,
    },
  });

  const heightValue = watch('height');
  const ageValue = watch('age');
  const currentWeightValue = watch('currentWeight');
  const desiredWeightValue = watch('desiredWeight');
  const bloodTypeValue = watch('bloodType');

  const onSubmitForm = formData => {
    const { height, age, currentWeight, desiredWeight, bloodType } = formData;
    const countedCalories = String(
      10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - desiredWeight)
    );

    const notAllowedFoodCategories = getCategoriesByBloodType(bloodType);

    const dataForDispatch = {
      calorie: countedCalories,
      notRecommendedProduct: notAllowedFoodCategories,
      data: formData,
    };

    if (isLoggedIn) {
      dispatch(calculation(dataForDispatch));
      dispatch(
        postSideBarInfo({
          calorie: countedCalories,
          notRecommendedProduct: notAllowedFoodCategories,
        })
      );
    } else {
      dispatch(addCalories(dataForDispatch));
    }

    onButtonClick();
  };

  return (
    // <DailyCaloriesFormBackground>
    <div className={`${styles.formBox} ${isLoggedIn ? styles.loggedIn : ''}`}>
      <div className={styles.titleFormBox}>
        <h1 className={styles.titleForm}>
          Calculate your daily calorie intake right now
        </h1>
      </div>

      <form
        id="myForm"
        className={styles.form}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className={styles.leftLabelBox}>
          <label className={styles.labelForm}>
            Height *
            <input
              className={styles.inputForm}
              value={heightValue}
              type="number"
              {...register('height', {
                required: 'Please enter your height',
                min: {
                  value: 100,
                  message: 'Minimum height is 100 cm',
                },
                max: {
                  value: 250,
                  message: 'Maximum height is 250 cm',
                },
              })}
            />
            {errors?.height && (
              <p className={styles.error}>{errors?.height?.message}</p>
            )}
          </label>
          <label className={styles.labelForm}>
            Age *
            <input
              className={styles.inputForm}
              value={ageValue}
              type="number"
              {...register('age', {
                required: 'Please enter your age',
                min: {
                  value: 18,
                  message: 'Minimum age is 18 years',
                },
                max: {
                  value: 100,
                  message: 'Maximum age is 100 years',
                },
              })}
            />
            {errors?.age && (
              <p className={styles.error}>{errors?.age?.message}</p>
            )}
          </label>
          <label className={styles.labelForm}>
            Current weight *
            <input
              className={styles.inputForm}
              value={currentWeightValue}
              type="number"
              {...register('currentWeight', {
                required: 'Enter your current weight',
                min: {
                  value: 20,
                  message: 'Minimum weight is 20 kg',
                },
                max: {
                  value: 500,
                  message: 'Maximum weight is 500 kg',
                },
              })}
            />
            {errors?.currentWeight && (
              <p className={styles.error}>{errors?.currentWeight?.message}</p>
            )}
          </label>
        </div>

        <div className={styles.rightLabelBox}>
          <label className={styles.labelFormDweight}>
            Desired weight *
            <input
              className={styles.inputForm}
              value={desiredWeightValue}
              type="number"
              {...register('desiredWeight', {
                required: 'Please enter desired weight',
                min: {
                  value: 20,
                  message: 'Minimum weight is 20 kg',
                },
                max: {
                  value: 500,
                  message: 'Maximum weight is 500 kg',
                },
              })}
            />
            {errors?.desiredWeight && (
              <p className={styles.error}>{errors?.desiredWeight?.message}</p>
            )}
          </label>

          <div className={styles.bloodTypeBox}>
            <label className={styles.labelFormBlood}>Blood type * </label>
            <p className={styles.bloodTypeValue}>{bloodTypeValue}</p>

            <div className={styles.radiobuttonBox}>
              {bloodTypes.map(type => (
                <label key={type} className={styles.radiobuttonLabel}>
                  <input
                    className={styles.radiobutton}
                    {...register('bloodType', {
                      required: 'Choose your blood type',
                    })}
                    type="radio"
                    value={type}
                  />
                  {/* <span></span> */}
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        {errors?.bloodType && (
          <p className={styles.error}>{errors?.bloodType?.message}</p>
        )}
      </form>

      <div className={styles.btnBox}>
        <StartLosingWeightBtn onClick={handleSubmit(onSubmitForm)} />
      </div>
    </div>
    // </DailyCaloriesFormBackground>
  );
}

export default DailyCaloriesForm;
