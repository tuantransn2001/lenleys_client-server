import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  STORE_CURRENT_USER_TOKEN,
  SET_AUTH_STATUS,
} from "~/redux/constants/AuthConstants/AuthConstants";

import LoadingPage from "~/pages/LoadingPage/LoadingPage";
import FormGroup from "~/components/helpers/FormGroup/FormGroup.jsx";
import SwitchFormBtn from "../SwitchFormBtn/SwitchFormBtn";
import { usePost } from "~/services/utils/fetch";
import { validateObjectWithKeyList } from "~/common/common";
import classNames from "classnames/bind";
import style from "./Register.module.scss";
const cx = classNames.bind(style);

const signUpFieldsData = [
  {
    columnNum: 12,
    label: "First name",
    fieldName: "firstName",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 12,
    label: "Last name",
    fieldName: "lastName",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 12,
    label: "Adress",
    fieldName: "address",
    type: "text",
    regex_check_type: "letter",
  },
  {
    columnNum: 12,
    label: "Email",
    fieldName: "email",
    type: "text",
    regex_check_type: "email",
  },
  {
    columnNum: 12,
    label: "Phone number",
    fieldName: "phoneNumber",
    type: "text",
    regex_check_type: "number",
  },
  {
    columnNum: 12,
    label: "Password",
    fieldName: "password",
    type: "password",
    regex_check_type: "password",
    description: "Must be at least 8 characters.",
  },
];

const Register = ({ setFormSwitcher }) => {
  const [userInfo, setUserInfo] = useState({});

  useRegister(userInfo);

  return (
    <>
      <FormGroup
        formFieldsData={signUpFieldsData}
        getUserDatagetterObj={setUserInfo}
        action="Sign up"
      />

      <span className={cx("already-have-account")}>
        Already have an account?
        <SwitchFormBtn to="login" setFormSwitcher={setFormSwitcher} />
      </span>
    </>
  );
};
export default Register;

const useRegister = (userInfo) => {
  const dispatch = useDispatch();
  const isCorrect = validateObjectWithKeyList(
    ["firstName", "lastName", "password", "email", "address", "phoneNumber"],
    userInfo
  );

  const { fetchResultData, isLoading } = usePost(
    "user/register",
    isCorrect,
    userInfo
  );

  if (fetchResultData.status === "success") {
    // ? Register success
    dispatch({
      type: SET_AUTH_STATUS,
      payload: {
        status: "register",
      },
    });
    dispatch({
      type: STORE_CURRENT_USER_TOKEN,
      payload: {
        data: userInfo,
      },
    });
  } else {
    // ! Fail
  }

  return isLoading && <LoadingPage />;
};
