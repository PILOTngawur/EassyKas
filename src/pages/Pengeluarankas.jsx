import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass,
  faPencil,
  faTrash
 } from '@fortawesome/free-solid-svg-icons'
import styles from './style/Pengeluarankas.module.css'

function Pengeluarankas() {
  return (
    <div className={styles.pengeluaranContainer}>
      <div className={styles.pengeluaranHeader}>
        <div className={styles.pengeluaranBox}>
          <label htmlFor="search">SEARCH :</label>
          <input type="text" id="search" placeholder="Cari pengeluaran...." />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <button className={styles.btnTambah}>+ CATAT PENGELUARAN</button>
      </div>

      <table className={styles.siswaTable}>
        <thead>
          <tr>
            <th>NO</th>
            <th>KETERANGAN</th>
            <th>TANGGAL PENGELUARAN</th>
            <th>JUMLAH</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Example</td>
            <td>2025</td>
            <td>5</td>
            <td>
              <button className={styles.btnEdit}>
                <FontAwesomeIcon icon={faPencil} /> Edit
              </button>
              <button className={styles.btnHapus}>
                <FontAwesomeIcon icon={faTrash} /> Hapus
              </button>
            </td>
          </tr>
          {/* Data dinamis nanti bisa ditambahkan di sini */}
        </tbody>
      </table>
    </div>
  )
}

export default Pengeluarankas