import React from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '../AcceptModal/AcceptModal.module.css';
// import Wrapper from '../Wrapper/Wrapper';
// import backArrow from '../../images/icons/back-arrow.png';
import crossIcon from '../../images/icons/close-cross.svg';
// const modalContainer = document.getElementById('modal-root');

function AcceptModal({
  closeModal,
  acceptAction,
  agreeButton,
  desagreeButton,
  children,
}) {
  const [modalContainer, setModalContainer] = useState(null);
  useEffect(() => {
    setModalContainer(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    const keydownHandler = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [closeModal]);

  const onBackdropClickHandler = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (!modalContainer) {
    return null;
  }

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onBackdropClickHandler}>
      <div className={styles.modalDailyCalorie}>
        <span className={styles.closeIconCross} onClick={() => closeModal()}>
          <img src={crossIcon} alt="cross" />
        </span>
        {/* <div className={styles.closeRectMobile} onClick={() => closeModal()}>
            <img
              className={styles.backArrow}
              src={backArrow}
              alt="back arrow"
            />
          </div> */}
        <p className={styles.acceptQuestion}>
          Are you sure you want to {acceptAction}?
        </p>
        {children}

        <div className={styles.buttonBox}>
          <button
            className={styles.agreeButton}
            type="button"
            onClick={() => agreeButton.action()}
          >
            {agreeButton.text}
          </button>

          <button
            className={styles.desagreeButton}
            type="button"
            onClick={() => desagreeButton.action()}
          >
            {desagreeButton.text}
          </button>
        </div>
      </div>
    </div>,
    modalContainer
  );
}

export default AcceptModal;
