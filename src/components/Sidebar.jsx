import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUsers,
  faSquarePen,
  faReceipt,
  faBook
} from '@fortawesome/free-solid-svg-icons'
import styles from './style/Sidebar.module.css'

function Sidebar({ children }) {
  const menuitem = [
    { path: "/dashboard", name: "Dashboard", icon: faHome },
    { path: "/tabsiswa", name: "TabSiswa", icon: faUsers },
    { path: "/catatkas", name: "Catatkas", icon: faSquarePen },
    { path: "/pengeluarankas", name: "Pengeluarankas", icon: faReceipt },
    { path: "/laporan", name: "Laporan", icon: faBook },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.mainLayout}>
        <div className={styles.sidebar}>
          {menuitem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.mainContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
