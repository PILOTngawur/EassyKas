import React from "react";
import { useLocation } from "react-router-dom";
import EassyKaslogo from "../assets/EassyKaslogo.png"
import styles from './style/Navbar.module.css';
import '@fontsource/candal';

function Navbar() {
  const location = useLocation();

  // Map path ke judul yang ingin ditampilkan
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/tabsiswa": "TabSiswa",
    "/catatkas": "Catatkas",
    "/pengeluarankas": "Pengeluarankas",
    "/laporan": "Laporan",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className={styles.navBar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logo}>
          <img src={EassyKaslogo} alt="Logo" />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.userIcon}></div>
      </div>
    </div>
  );
}

export default Navbar;
