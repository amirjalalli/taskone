import { useState } from "react";
import Loigin from "../Login/Loigin";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ value, searchHandler, setValue, data }) => {
  const [lenghtData, setLenghtData] = useState(data);

  //   console.log(value);

  return (
    <header className="header-container">
      <div className="link-container">
        <Link to="/" className="link">
          log out
        </Link>

        {/* <Loigin /> */}
        {/* link router home and log out */}
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </div>
      <div className="post-count">post count: {lenghtData.length}</div>
    </header>
  );
};

export default Header;
