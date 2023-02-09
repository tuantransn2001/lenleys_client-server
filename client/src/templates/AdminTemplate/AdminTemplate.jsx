import React from "react";
import { useTitle } from "~/customizes/hooks";
import Sidebar from "./Sidebar/Sidebar";
import MainDashboard from "./MainDashboard/MainDashboard";
import classNames from "classnames/bind";
import style from "./AdminTemplate.module.scss";
const cx = classNames.bind(style);
const AdminTemplate = (props) => {
  useTitle("Sample title - Ecommerce admin dashboard template");
  return (
    <div className={cx("admin-template-wrapper")}>
      <Sidebar />
      <MainDashboard />
    </div>
  );
};
export default AdminTemplate;
