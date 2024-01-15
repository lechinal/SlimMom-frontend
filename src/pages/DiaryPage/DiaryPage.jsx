import React, { useState, useEffect } from 'react';

import SideBar from '../../components/SideBar/SideBar';
import DiaryProductList from '../../components/DiaryProductList/DiaryProductList';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from '../../components/DiaryDateCalendar/DiaryDateCalendar';
import styles from './DiaryPage.module.css';

import arrowImg from '../../images/icons/arrow-left.png';
import addBtnImg from '../../images/icons/Plus.png';

function DiaryPage({ img }) {
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const openModal = () => {
    setIsShowAddForm(!isShowAddForm);
  };

  return (
    <div
      className={`${styles.wrapPage} ${
        isShowAddForm ? styles.addFormOpen : ''
      }`}
    >
      <div
        className={`${styles.wrapForm} ${
          isShowAddForm ? styles.addFormOpen : ''
        }`}
      >
        <div>
          <DiaryDateCalendar />

          {isShowAddForm && !isDesktop && (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: '0',
                top: '122px',
                zIndex: '1',
                backgroundColor: 'white',
              }}
            >
              <div className={styles.mobileBoxForm}>
                <div
                  className={styles.subdirectoryIconWrapper}
                  onClick={() => openModal()}
                >
                  <img
                    className={styles.subdirectoryIcon}
                    src={arrowImg}
                    alt="arrow icon"
                  />
                </div>

                <DiaryAddProductForm
                  img={'Add'}
                  isShowAddForm={isShowAddForm}
                  openModal={openModal}
                />
              </div>
            </div>
          )}

          {isDesktop && (
            <div className={styles.desktopForm}>
              <DiaryAddProductForm
                img={isDesktop ? addBtnImg : 'Add'}
                isShowAddForm={isShowAddForm}
                openModal={openModal}
              />
            </div>
          )}

          <DiaryProductList />
        </div>

        <div className={styles.wrapSideBar}>
          {!isShowAddForm && !isDesktop && (
            <div className={styles.buttonBox}>
              <button className={styles.button} onClick={openModal}>
                <img src={addBtnImg} alt="button to add product" />
              </button>
            </div>
          )}
          {!isShowAddForm && <SideBar />}
        </div>
      </div>
    </div>
  );
}

export default DiaryPage;
