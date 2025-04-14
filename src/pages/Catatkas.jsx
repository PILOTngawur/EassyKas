import React from 'react'
import styles from './style/Catatkas.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Cardkas from '../components/Cardkas'

function Catatkas() {
  return (
    <div className={styles.catatkasContainer}>
      <div className={styles.catatkasHeader}>
        <div className={styles.catatkasBox}>
          <label htmlFor="search">SEARCH :</label>
          <input type="text" id="search" placeholder="Cari Bulan" />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <button className={styles.btnTambah}>+ TAMBAH BULAN</button>
      </div>

      <div className={styles.cardList}>
        <Cardkas bulan="JANUARI" tahun="2025" uangKas={100000} mingguan={2000} />
        <Cardkas bulan="FEBRUARI" tahun="2025" uangKas={100000} mingguan={2000} />
      </div>
    </div>
  )
}

export default Catatkas
