import React, { useState } from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

import { useTitle } from "~/customizes/hooks";
import classNames from "classnames/bind";
import style from "./AuthPageWithForm.module.scss";
const cx = classNames.bind(style);

const authFormData = {
  isLogin: {
    h4: "Welcome Back 👏",
    h5: "Access to all features. No credit card required.",
  },
  isRegister: {
    h4: "Start for free Today 👏",
    h5: "Have we meet before?",
  },
};

const AuthForm = ({ formSwitcher, setFormSwitcher }) => {
  if (formSwitcher === "isLogin") {
    return <Login setFormSwitcher={setFormSwitcher} />;
  }

  return <Register setFormSwitcher={setFormSwitcher} />;
};

const AuthPageWithForm = (props) => {
  useTitle("My Account - Lenleys");
  const [formSwitcher, setFormSwitcher] = useState("isLogin");
  return (
    <div className={cx("auth-page-form-container")}>
      <div className={`${cx("auth-page-form")} grid`}>
        <div className="row">
          <div className="c-12 gutter">
            <header className={cx("auth-page-form-header")}>
              <h4 className={cx("auth-page-form-title")}>
                {authFormData[formSwitcher].h4}
              </h4>
              <h5 className={cx("auth-page-form-subtitle")}>
                {authFormData[formSwitcher].h5}
              </h5>
            </header>
          </div>
        </div>

        <div className="row">
          <div className="c-12 gutter">
            <AuthForm
              formSwitcher={formSwitcher}
              setFormSwitcher={setFormSwitcher}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthPageWithForm;
