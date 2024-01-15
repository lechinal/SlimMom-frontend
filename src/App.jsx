import React from 'react';
import { Suspense, useEffect, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
} from './redux/auth/selectors';

import { routes } from 'helpers/constants';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Wrapper from './components/Wrapper/Wrapper';
import { Loader } from './components/Loader/Loader';
import Header from './components/Header/Header';
import UserInfo from './components/UserInfo/UserInfo';
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage/CalculatorPage')
);

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { calorie } = useSelector(selectUser);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  // const path = !calorie ? routes.calculate : routes.diaryToday;

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Wrapper>
      <Header isWideScreen={isWideScreen} />
      {isLoggedIn && !isWideScreen && <UserInfo displayLocation="app" />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={routes.main}
            // element={<RestrictedRoute redirectTo={path} component={MainPage} />}
            element={
              <RestrictedRoute
                redirectTo={routes.calculate}
                component={MainPage}
              />
            }
          />
          <Route
            path={routes.signup}
            // element={
            //   <RestrictedRoute redirectTo={path} component={RegistrationPage} />
            // }
            element={
              <RestrictedRoute
                redirectTo={routes.calculate}
                component={RegistrationPage}
              />
            }
          />
          <Route
            path={routes.login}
            // element={
            //   <RestrictedRoute redirectTo={path} component={LoginPage} />
            // }
            element={
              <RestrictedRoute
                redirectTo={routes.calculate}
                component={LoginPage}
              />
            }
          />
          <Route
            path={routes.diaryPath}
            element={
              <PrivateRoute
                redirectTo={!calorie ? routes.main : routes.login}
                component={DiaryPage}
              />
            }
          />
          <Route
            path={routes.calculate}
            element={
              <PrivateRoute
                redirectTo={!calorie ? routes.main : routes.login}
                component={CalculatorPage}
              />
            }
          />
          <Route path="*" element={<Navigate to={routes.main} replace />} />
        </Routes>
      </Suspense>
    </Wrapper>
  );
};
