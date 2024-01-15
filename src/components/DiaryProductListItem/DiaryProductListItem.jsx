import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeDiaryListItem } from '../../redux/products/operations';

import styles from './DiaryProductListItem.module.css';
import AcceptModal from '../AcceptModal/AcceptModal';

import closeIcon from '../../images/icons/close-cross.svg';

function DiaryProductListItem({
  _id,
  productName,
  productWeight,
  productCalories,
}) {
  const dispatch = useDispatch();

  const [isAcceptModalOpen, setIsAcceptModalopen] = useState(false);

  const openAcceptModal = () => {
    setIsAcceptModalopen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeAcceptModal = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
  };

  const deleteAction = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
    dispatch(removeDiaryListItem(_id));
  };

  return (
    <>
      <div className={styles.productListItemBox}>
        <div className={styles.diaryProductListItem}>
          <li>
            <p className={styles.productName}>{productName}</p>
            <p className={styles.productWeight}>{productWeight} g</p>
            <p className={styles.productCalories}>
              {productCalories} <span className={styles.Kcal}>kcal</span>
            </p>

            <button
              className={styles.removeButton}
              type="button"
              onClick={openAcceptModal}
            >
              <img
                src={closeIcon}
                className={styles.closeIcon}
                alt="close icon"
              />
            </button>
            <div className={styles.modal}>
              {isAcceptModalOpen && (
                <AcceptModal
                  closeModal={closeAcceptModal}
                  acceptAction={`Delete ${productName}`}
                  agreeButton={{
                    text: 'Delete',
                    action: deleteAction,
                  }}
                  desagreeButton={{
                    text: 'Cancel',
                    action: closeAcceptModal,
                  }}
                ></AcceptModal>
              )}
            </div>
          </li>
        </div>
      </div>
    </>
  );
}

export default DiaryProductListItem;
