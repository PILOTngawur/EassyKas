import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatSiswa = () => {
  const [values, setValues] = useState({
    nama: "",
    status: "",
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim:", values);
    axios.post('http://localhost:3030/tabsiswa/create', values)
    .then(navigate('/tabsiswa'))
    .catch(err => console.log(err));
  };
  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Tambah Data Siswa</h1>
      <form className="w-50" onSubmit={(handleSubmit)}>
        <div className="mb-3 mt-3">
          <label htmlFor="nama" className="form-label">
            Nama Siswa:
          </label>
          <input
            type="text"
            class="form-control"
            id="nama"
            placeholder="Masukan nama siswa"
            name="nama"
            onChange={(e) => setValues({...values, nama: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <input
            type="text"
            class="form-control"
            id="status"
            placeholder="Masukan status siswa"
            name="status"
            onChange={(e) => setValues({...values, status: e.target.value})}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatSiswa;
