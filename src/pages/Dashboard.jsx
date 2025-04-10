import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/Dashboard.css'


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="saldo-box">
        <div className="label">Saldo Tersedia</div>
        <div className="amount"></div>
      </div>
      <div className="box-container">
        <div className="box pemasukan">
          <div className="title">Pemasukan</div>
          
        </div>
        <div className="box pengeluaran">
          <div className="title">Pengeluaran</div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard