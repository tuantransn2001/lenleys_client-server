import React from "react";

import { useSelector } from "react-redux";

import AuthPageWithForm from "./AuthPageWithForm/AuthPageWithForm";
import AuthPageSuccess from "./AuthPageSuccess/AuthPageSuccess";

const AuthPage = (props) => {
  const authStatus = useSelector((state) => state.AuthReducer.authStatus);

  if (!authStatus) {
    return <AuthPageWithForm />;
  }

  if (authStatus === "login" || "register") {
    return <AuthPageSuccess authStatus={authStatus} />;
  }
};

export default AuthPage;
