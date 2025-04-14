import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style/Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.saldoBox}>
        <div className="label">Saldo Tersedia</div>
        <div className="amount">Rp 0</div>
      </div>
      <div className={styles.boxContainer}>
        <div className={`${styles.box} ${styles.pemasukan}`}>
          <div className="title">Pemasukan</div>
        </div>
        <div className={`${styles.box} ${styles.pengeluaran}`}>
          <div className="title">Pengeluaran</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
