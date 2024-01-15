// import { React, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import styles from './ModalDailyCalorie.module.css';
// import closeIconArrow from '../../images/icons/back-arrow.png';

// const modalContainer = document.getElementById('modal-root');

// function ModalDailyCalorie({ closeModal, children, calculateData }) {
//   useEffect(() => {
//     const keydownHandler = event => {
//       if (event.code === 'Escape') {
//         closeModal();
//       }
//     };
//     window.addEventListener('keydown', keydownHandler);
//     return () => window.removeEventListener('keydown', keydownHandler);
//   });

//   const onBackdropClickHandler = event => {
//     if (event.target === event.currentTarget) {
//       closeModal();
//     }
//   };

//   return createPortal(
//     <div className={styles.modalBackdrop} onClick={onBackdropClickHandler}>
//       <div className={styles.modalDailyCalorie}>
//         <div className={styles.closeIconCross} onClick={() => closeModal()} />
//         <div className={styles.closeRectMobile} onClick={() => closeModal()}>
//           <img
//             className={styles.closeIconArrow}
//             src={closeIconArrow}
//             alt="back arrow"
//           />
//         </div>

//         {children}
//       </div>
//     </div>,
//     modalContainer
//   );
// }

// export default ModalDailyCalorie;
