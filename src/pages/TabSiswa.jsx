// import React from 'react'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faTrash,
  faPencil
} from '@fortawesome/free-solid-svg-icons'
import styles from './style/TabSiswa.module.css'
import { Link } from "react-router-dom";
import axios from "axios";




function TabSiswa() {
  const [siswas, setSiswas] = useState([]);
  console.log(siswas);
  useEffect(() => {
    axios
      .get("http://localhost:3030/tabsiswa")
      .then((res) => setSiswas(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios.delete("http://localhost:3030/tabsiswa/delete/" + id)
    .then(window.location.reload())
    .catch(err => console.log(err));
  }
  return (
    <div className={styles.siswaContainer}>
      <div className={styles.siswaHeader}>
        <div className={styles.searchBox}>
          <label htmlFor="search">SEARCH :</label>
          <input type="text" id="search" placeholder="Cari nama siswa..." />
          <button to="/tabsiswa/"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <Link to="/tabsiswa/create" className={styles.btnTambah}>+ TAMBAH SISWA</Link>
      </div>

      {siswas.length !== 0 ?
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
          {
                siswas.map(siswa =>
                    <tr key={siswa.id}>
                        <td>{siswa.id}</td>
                        <td>{siswa.nama_siswa}</td>
                        <td>{siswa.status}</td>
                        <td>
                            <Link to={`/tabsiswa/update/${siswa.id}`} className={styles.btnEdit}  ><FontAwesomeIcon icon={faPencil} /> Edit</Link>
                            <button type="button" onClick={() => handleDelete(siswa.id)} className={styles.btnHapus}><FontAwesomeIcon icon={faTrash} /> Hapus</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
      : <h2>Tidak ada data siswa</h2>
      }
    </div>
  )
}

export default TabSiswa
