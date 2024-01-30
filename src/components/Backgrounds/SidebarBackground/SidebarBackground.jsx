import React, { useState, useEffect } from 'react';
import styles from './SiderbarBackground.module.css';
import leaves from '../../../images/pictures/Tablet/tablet-leafs-1x.png';
import leavesDesktop from '../../../images/pictures/Desktop/desktop-leafs-1x.png';

function SidebarBackground({ children }) {
  const [clientWidth, setclientWidth] = useState(0);

  const handleResize = () => {
    const width = document.documentElement.clientWidth;
    setclientWidth(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.background}>
      {clientWidth <= 768 ? null : clientWidth <= 1024 ? (
        <>
          <div className={styles.leaves}>
            <img src={leaves} alt="Leaves" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.leaves}>
            <img src={leavesDesktop} alt="Leaves" />
          </div>
        </>
      )}
      {children}
    </div>
  );
}

export default SidebarBackground;
