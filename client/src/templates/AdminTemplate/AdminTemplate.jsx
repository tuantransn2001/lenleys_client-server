import React from "react";
import { useTitle } from "~/customizes/hooks";
import Slidebar from "./Slidebar/Slidebar";
import MainDashboard from "./MainDashboard/MainDashboard";
import classNames from "classnames/bind";
import style from "./AdminTemplate.module.scss";
const cx = classNames.bind(style);
const AdminTemplate = (props) => {
  useTitle("Sample title - Ecommerce admin dashboard template");
  return (
    <div className={cx("admin-template-wrapper")}>
      <Slidebar />
      <MainDashboard />
    </div>
  );
};
export default AdminTemplate;
