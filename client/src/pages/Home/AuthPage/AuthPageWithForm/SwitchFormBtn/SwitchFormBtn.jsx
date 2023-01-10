import React, { useRef, useEffect } from "react";
import Button from "~/components/helpers/Button/Button";
import classNames from "classnames/bind";
import style from "./SwitchFormBtn.module.scss";
const cx = classNames.bind(style);
const SwitchFormBtn = (props) => {
  const swithFormBtnRef = useRef(null);
  useEffect(() => {
    const handleSwitch = (e) => {
      if (props.to === "register") {
        props.setFormSwitcher("isRegister");
      }
      if (props.to === "login") {
        props.setFormSwitcher("isLogin");
      }
    };
    const switchFormBtnEl = swithFormBtnRef.current;
    switchFormBtnEl && switchFormBtnEl.addEventListener("click", handleSwitch);
    return () =>
      switchFormBtnEl &&
      switchFormBtnEl.removeEventListener("click", handleSwitch);
  }, []);
  return (
    <Button size={null} type={null} ref={swithFormBtnRef} ghost>
      <span className={cx("switch-form-link-direction")}>
        {props.to === "register" ? "Sign up" : "Login"}
      </span>
    </Button>
  );
};

export default SwitchFormBtn;
