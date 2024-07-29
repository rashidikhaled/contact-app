import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.container}>
      <h1>Contact App</h1>
      <p>
        <a>K7aled</a> | Reactjs App
      </p>
    </div>
  );
};

export default Header;
