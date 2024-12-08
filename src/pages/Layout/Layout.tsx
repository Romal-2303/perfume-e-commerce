import React from "react";
import classes from "./Layout.module.scss";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className={classes["layout-container"]}>
      <Header />
    </div>
  );
};

export default Layout;
