import React, { useState } from "react";
import DataMain from "./DataMain/DataMain";
import Header from "./Header/Header";
import Datas from "./../JSON_DATA/POST_DATA.json";

const Content = () => {
  const [value, setValue] = useState("");
  const searchHandler = () => {
    setValue(value);
  };
  return (
    <div>
      <Header
        searchHandler={searchHandler}
        value={value}
        setValue={setValue}
        data={Datas}
      />
      <DataMain value={value} data={Datas} />
    </div>
  );
};

export default Content;
