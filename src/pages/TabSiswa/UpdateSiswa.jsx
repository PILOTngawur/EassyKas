import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateSiswa = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    nama: "",
    status: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim:", values);
    axios
      .put("http://localhost:3030/tabsiswa/update/"+ id, values)
      .then(navigate("/tabsiswa"))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/tabsiswa/getrecord/" + id)
      .then((res) =>
        setValues({
          ...values,
          nama: res.data[0].nama,
          status: res.data[0].status,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Update Data Siswa</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="nama" className="form-label">
            Nama Siswa:
          </label>
          <input
            type="text"
            className="form-control"
            id="nama"
            placeholder="Masukan nama siswa"
            name="nama"
            value={values.nama}
            onChange={(e) =>
              setValues({ ...values, nama: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            placeholder="Masukan status siswa"
            name="status"
            value={values.status}
            onChange={(e) => setValues({ ...values, status: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateSiswa;
