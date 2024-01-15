import React from 'react';
import styles from './ModalDailyIntake.module.css';
// import Wrapper from '../Wrapper/Wrapper';
import closeBtn from '../../images/icons/close-cross.svg';

function ModalDailyIntake({ children, onClose }) {
  return (
    // <Wrapper>
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeBtn} onClick={onClose}>
          <img src={closeBtn} alt="Close" />
        </button>
      </div>
    </div>
    // </Wrapper>
  );
}

export default ModalDailyIntake;
