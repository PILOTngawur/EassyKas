import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faTrash,
  faPencil
} from '@fortawesome/free-solid-svg-icons'
import styles from './style/TabSiswa.module.css'

function TabSiswa() {
  return (
    <div className={styles.siswaContainer}>
      <div className={styles.siswaHeader}>
        <div className={styles.searchBox}>
          <label htmlFor="search">SEARCH :</label>
          <input type="text" id="search" placeholder="Cari nama siswa..." />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <button className={styles.btnTambah}>+ TAMBAH SISWA</button>
      </div>

      <table className={styles.siswaTable}>
        <thead>
          <tr>
            <th>NO</th>
            <th>NAMA SISWA</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Example</td>
            <td>Aktif</td>
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

export default TabSiswa
