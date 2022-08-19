import { useState, useEffect } from "react";
import Modaledit from "../Modal/Modal";
import Pagination from "react-bootstrap/Pagination";
import "./DataMain.css";
import datas from "./../../JSON_DATA/POST_DATA.json";

const DataMain = ({ value, searchDatas, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState([]);
  const [todos, setTodos] = useState(datas);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTodos, setPaginatedTodos] = useState([]);

  const editshowModal = (id) => {
    setShowModal(!showModal);
    let findId = data.find((item) => {
      return item.id === id;
    });
    setEdit(findId);
  };

  const showModalfunc = () => {
    setShowModal(!showModal);
  };

  let pageSize = 10;
  let pagesNumbers;

  useEffect(() => {
    setTodos(datas);
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodos = datas.slice(startIndex, endIndex);
    setPaginatedTodos(allShownTodos);
  }, []);

  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodos = todos.slice(startIndex, endIndex);
    setPaginatedTodos(allShownTodos);
  }, [currentPage]);

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  const pagesCount = Math.ceil(todos.length / pageSize);
  pagesNumbers = Array.from(Array(pagesCount).keys());
  return (
    <div className="content">
      <main className="main-container">
        {paginatedTodos
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
                  onClick={() => editshowModal(id)}
                >
                  Eddit
                </button>
              </div>
            );
          })}

        {showModal && (
          <Modaledit
            id={edit.id}
            title={edit.title}
            body={edit.body}
            closeModal={showModalfunc}
          />
        )}

        {/* <nav className="d-flex justify-content-center">
        <ul className="pagination" aria-current="page">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {pagesNumbers.map((pageNumber) => (
            <li
              style={{ cursor: "pointer" }}
              className={
                pageNumber + 1 === currentPage
                  ? "page-item active"
                  : "page-item"
              }
              key={pageNumber + 1}
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}


          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
      </main>

      <div className="pagination">
        {pagesNumbers.map((pageNumber) => (
          <li
            style={{ cursor: "pointer" }}
            className={
              pageNumber + 1 === currentPage ? "page-item active" : "page-item"
            }
            key={pageNumber + 1}
            onClick={() => changePaginate(pageNumber + 1)}
          >
            <span className="page-link">{pageNumber + 1}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DataMain;

{
  /* <div class="pagination">
  {pagesNumbers.map((pageNumber) => (
    <li
      style={{ cursor: "pointer" }}
      className={
        pageNumber + 1 === currentPage ? "page-item active" : "page-item"
      }
      key={pageNumber + 1}
      onClick={() => changePaginate(pageNumber + 1)}
    >
      <span className="page-link">{pageNumber + 1}</span>
    </li>
  ))}
</div>; */
}
