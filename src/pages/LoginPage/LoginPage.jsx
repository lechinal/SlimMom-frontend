import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { login } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/loader/selectors';

import { Loader } from '../../components/Loader/Loader';
import LoginBackground from '../../components/Backgrounds/LoginBackground/LoginBackground';
import styles from './LoginPage.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const emailValue = watch('email');
  const passwordValue = watch('password');

  const onSubmitForm = async credentials => {
    const { email, password } = credentials;
    const result = await dispatch(
      login({
        email: email.toLowerCase(),
        password,
      })
    );
    toast.error(result.payload.message);
    reset();
  };

  const navigate = useNavigate();

  return (
    <LoginBackground>
      {isLoading ? <Loader /> : null}
      <div className={styles.signinFormBox}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
          <div className={styles.titleFormBox}>
            <h1 className={styles.titleForm}>Log In</h1>
          </div>
          <div className={styles.labelBox}>
            <label className={styles.labelForm}>
              Email *
              <input
                className={styles.inputForm}
                value={emailValue}
                type="email"
                {...register('email', {
                  required: 'Please enter your email',
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
                    message: 'Password must be at least 8 characters',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Password must not exceed 100 characters',
                  },
                  required: 'Please enter your password',
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
            <button className={styles.buttonLogin} type="submit">
              Log In
            </button>
            <button
              type="button"
              className={styles.buttonRegister}
              onClick={() => navigate('/signup')}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </LoginBackground>
  );
}

export default LoginPage;
