import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';
import { removeCalories } from '../../redux/calculate/slice';
import { selectUserName } from '../../redux/auth/selectors';
import AcceptModal from '../AcceptModal/AcceptModal';
import styles from './UserInfo.module.css';

function UserInfo({ burgerActive, displayLocation }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const userInfo =
    displayLocation === 'header' ? styles.headerStyle : styles.appStyle;

  const Logout = () => {
    setIsAcceptModalOpen(false);
    window.document.body.style.overflow = 'unset';
    dispatch(logOut());
    navigate('/');
    dispatch(removeCalories());
  };

  const openAcceptModal = () => {
    setIsAcceptModalOpen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeAcceptModal = () => {
    setIsAcceptModalOpen(false);
    window.document.body.style.overflow = 'unset';
  };

  const location = useLocation();

  return (
    <div
      className={`${styles.userInfoBox} ${userInfo}`}
      burger={burgerActive}
      location={location.pathname}
    >
      <div className={styles.userInfoDetails}>
        <div
          className={`${styles.userDetails} ${
            displayLocation === 'header' ? styles.userDetailsHeader : ''
          }`}
        >
          <p
            className={`${styles.userNameText} ${styles.userNameTextHeader} : ''}`}
          >
            {userName}
          </p>
          <svg
            className={styles.verticalLine}
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="32"
            viewBox="0 0 2 32"
            fill="none"
          >
            <path d="M1 0L0.999999 32" stroke="#E0E0E0" strokeWidth="2" />
          </svg>
          <button
            className={`${styles.signoutBtn} ${
              displayLocation === 'header' ? styles.headerButton : ''
            }`}
            type="button"
            onClick={openAcceptModal}
          >
            Sign out
          </button>
        </div>
        <>
          {isAcceptModalOpen && (
            <div className={styles.mobileBoxForm}>
              <AcceptModal
                closeModal={closeAcceptModal}
                acceptAction={`Leave, ${userName}`}
                agreeButton={{
                  text: 'Leave',
                  action: Logout,
                }}
                desagreeButton={{
                  text: 'Stay',
                  action: closeAcceptModal,
                }}
              ></AcceptModal>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default UserInfo;
