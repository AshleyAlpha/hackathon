import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
const Layaout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layaout;
