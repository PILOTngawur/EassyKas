import React from 'react'
import './style/Catatkas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

function Catatkas() {
  return (
    <div className="catatkas-container">
      <div className="siswa-header">
        <div className="search-box">
          <label htmlFor="search">SEARCH :</label>
          <input type="text" id="search" placeholder="Cari Bulan" />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <button className="btn-tambah">+ TAMBAH BULAN</button>
      </div>
    </div>
  )
}

export default Catatkas