import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/TabSiswa.css'
import { 
  faMagnifyingGlass,
  faTrash,
  faPencil
 } from '@fortawesome/free-solid-svg-icons';

function TabSiswa() {
  return (
    <div className="siswa-container">
      <div className="siswa-header">
        <div className="search-box">
          <label htmlFor="search">SEARCH :</label>
          <input type="text" id="search" placeholder="Cari nama siswa..." />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <button className="btn-tambah">+ TAMBAH SISWA</button>
      </div>

      <table className="siswa-table">
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
              <button className="btn-edit"><FontAwesomeIcon icon={faPencil} />Edit</button>
              <button className="btn-hapus"><FontAwesomeIcon icon={faTrash} />Hapus</button>
            </td>
          </tr>
          {/* Data dinamis nanti bisa ditambahkan di sini */}
        </tbody>
      </table>
    </div>
  );
}

export default TabSiswa