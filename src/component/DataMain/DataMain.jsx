import { useState } from "react";
import Modal from "../Modal/Modal";
import "./DataMain.css";

const DataMain = ({ value, searchDatas, data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="main-container">
      {data
        .filter((val) => {
          if (val.title.toLowerCase().includes(value.toLowerCase())) {
            return val;
          } else if (val.body.toLowerCase().includes(value.toLowerCase())) {
            return val;
          } else if (value === "") {
            return value;
          }
        })

        .map((data) => {
          const { userId, id, title, body } = data;
          return (
            <div className="main-data" key={id}>
              <h3 className="main-title">{title}</h3>
              <p className="main-body">{body}</p>
              <button
                type="button"
                className="btn"
                onClick={() => setShowModal(!showModal)}
              >
                Eddit
              </button>
            </div>
          );
        })}
      {showModal && <Modal {...data} />}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>

          <li className="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default DataMain;
