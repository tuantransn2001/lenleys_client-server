import React, { useContext } from "react";
import InputContext from "../InputFieldContext";
import classNames from "classnames/bind";
import style from "./LabelTag.module.scss";
const cx = classNames.bind(style);
const LabelTag = (props) => {
  const { label } = useContext(InputContext);
  return (
    <label htmlFor="form-input" className={cx("form-label")}>
      {label}
    </label>
  );
};
export default LabelTag;
