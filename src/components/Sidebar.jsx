import React from 'react'
import Navbar from './navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUsers,
  faSquarePen,
  faReceipt,
  faBook
} from '@fortawesome/free-solid-svg-icons'
import './style/Sidebar.css'

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
      <div className="main-layout">
        <div className="sidebar">
          {menuitem.map((item, index) => (
            <NavLink to={item.path} key={index} 
            className={({ isActive }) => isActive ? "link active" : "link"}>
              <div className="icon"><FontAwesomeIcon icon={item.icon} /></div>
            </NavLink>
          ))}
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
