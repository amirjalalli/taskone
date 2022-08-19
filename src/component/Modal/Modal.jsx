import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const Modaledit = ({ id, title, body, closeModal }) => {
  return (
    <div className="modal">
      <form className="modal-content">
        <div className="input-container">
          <p className="input">{title}</p>
          <p className="input">{body}</p>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => closeModal()}>
            save
          </button>
          <button className="btn" onClick={() => closeModal()}>
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modaledit;
