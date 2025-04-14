import React from 'react';
import styles from './style/Cardkas.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Cardkas({ bulan, tahun, uangKas, mingguan }) {
    return (
        <div className={styles.cardKas}>
            <div className={styles.cardHeader}>
                <span>{bulan}</span>
                <span>{tahun}</span>
            </div>
            <hr />
            <p className={styles.kasMingguan}>Rp. {mingguan}/minggu</p>
            <p>Total uang kas bulan ini:</p>
            <div className={styles.totalKas}>Rp. {uangKas.toLocaleString()}</div>
            <button className={styles.btnCatat}>
                CATAT KAS <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className={styles.btnHapus}>
                HAPUS BULAN <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default Cardkas;
