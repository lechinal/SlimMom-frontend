import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { registration } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/loader/selectors';
import { selectCalculateValue } from '../../redux/calculate/selectors';
import { Loader } from '../../components/Loader/Loader';

import RegistrationBackground from '../../components/Backgrounds/RegistrationBackground/RegistrationBackground';
import styles from './RegistrationPage.module.css';

function RegistrationPage() {
  const dispatch = useDispatch();
  const calculateAndCalorieData = useSelector(selectCalculateValue);
  const isLoading = useSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const nameValue = watch('name');
  const emailValue = watch('email');
  const passwordValue = watch('password');

  const onSubmitForm = async registrationData => {
    const { name, email, password } = registrationData;

    if (calculateAndCalorieData?.countedCalories) {
      const { countedCalories, notAllowedFoodCategories, formData } =
        calculateAndCalorieData;
      const dataForDispatch = {
        name,
        email: email.toLowerCase(),
        password,
        calorie: countedCalories,
        data: formData,
        notRecommendedProduct: notAllowedFoodCategories,
      };
      const result = await dispatch(registration(dataForDispatch));

      toast.error(result.payload.message);
    } else {
      const result = await dispatch(
        registration({
          name,
          email: email.toLowerCase(),
          password,
        })
      );

      toast.error(result.payload.message);
    }
    reset();
  };

  const navigate = useNavigate();

  return (
    <RegistrationBackground>
      {isLoading ? <Loader /> : null}
      <div className={styles.registerFormBox}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
          <div className={styles.titleFormBox}>
            <h1 className={styles.titleForm}>Register</h1>
          </div>

          <div className={styles.labelBox}>
            <label className={styles.labelForm}>
              Name *
              <input
                className={styles.inputForm}
                value={nameValue}
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter your name',
                  },
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters',
                  },
                  maxLength: {
                    value: 254,
                    message: 'Name must not exceed 254 characters',
                  },
                })}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name?.message}</p>
              )}
            </label>

            <label className={styles.labelForm}>
              Email *
              <input
                className={styles.inputForm}
                value={emailValue}
                type="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Please enter your email address',
                  },
                  pattern: {
                    value:
                      /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
                    message: 'Invalid email format',
                  },
                  minLength: {
                    value: 3,
                    message: 'Email must be at least 3 characters',
                  },
                  maxLength: {
                    value: 254,
                    message: 'Email must not exceed 254 characters',
                  },
                })}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email?.message}</p>
              )}
            </label>

            <label className={styles.labelForm}>
              Password *
              <input
                className={styles.inputForm}
                value={passwordValue}
                type="password"
                {...register('password', {
                  minLength: {
                    value: 8,
                    message: 'Your password must be at least 8 characters',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Your password must not exceed 100 characters',
                  },
                  required: {
                    value: true,
                    message: 'Please enter your password',
                  },
                  pattern: {
                    value: /(?=.*[A-Za-z])(?=.*[0-9])/,
                    message: 'Password must include letters and numbers',
                  },
                })}
              />
              {errors.password && (
                <p className={styles.error}>{errors.password?.message}</p>
              )}
            </label>
          </div>

          <div className={styles.buttonsBox}>
            <button className={styles.buttonRegister} type="submit">
              Register
            </button>
            <button
              type="button"
              className={styles.buttonLogin}
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </RegistrationBackground>
  );
}

export default RegistrationPage;
