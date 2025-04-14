import React from "react";
import { useLocation } from "react-router-dom";
import EassyKaslogo from "../assets/EassyKaslogo.png"
import "./style/Navbar.css"; // optional

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
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo"><img src={EassyKaslogo} alt="Logo" /></div>
        <span className="title">{title}</span>
      </div>
      <div className="navbar-right">
        <div className="user-icon"></div>
      </div>
    </div>
  );
}

export default Navbar;
