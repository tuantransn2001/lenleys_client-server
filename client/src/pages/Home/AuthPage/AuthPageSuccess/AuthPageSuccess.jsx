import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGet } from "~/services/utils/fetch";

import LoadingPage from "~/pages/LoadingPage/LoadingPage";

import Tooltip from "~/components/helpers/Tooltip/Tooltip";
import Button from "~/components/helpers/Button/Button";
import ToastMessage from "~/components/helpers/ToastMessage/ToastMessage";

import UserInformation from "./UserInformation/UserInformation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./AuthPageSuccess.module.scss";
const cx = classNames.bind(style);

const authSuccessStatusContent = {
  register: {
    title: "Congratulate! Now you are a member of lenleys family.",
    content: "The Lenleys team will be in touch soon.",
  },
  login: {
    title: "Hi! Welcome back.",
    content: "Hope you have happy time shopping in leyleys.",
  },
};

const DirectionButtons = ({ authStatus }) => {
  const navigate = useNavigate();

  const handleNavigateTo = (directionPath) => {
    navigate(directionPath);
  };

  if (authStatus === "login") {
    return (
      <>
        <Tooltip
          placement="top"
          promptText="Feature is on develop state"
          maxSize
        >
          <Button size="small" type="primary" maxSize>
            Continue shopping
          </Button>
        </Tooltip>
        <Button
          size="small"
          type="primary"
          maxSize
          onClick={(e) => {
            handleNavigateTo("/");
          }}
        >
          Back to home
        </Button>
      </>
    );
  }

  if (authStatus === "register") {
    return (
      <>
        <Button size="small" type="primary" maxSize>
          Log in
        </Button>
        <Button
          size="small"
          type="primary"
          maxSize
          onClick={(e) => {
            handleNavigateTo("/");
          }}
        >
          Back to home
        </Button>
      </>
    );
  }
};

const AuthFormContent = ({ authStatus, user_detail }) => {
  if (authStatus === "login") {
    return (
      <>
        <h1 className={cx("auth-page-success-title")}>
          {/* THANK YOU FOR YOUR SUBSCRIPTION. */}
          {authSuccessStatusContent[authStatus].title}
        </h1>
        <span className={cx("auth-page-success-subtitle")}>
          {authSuccessStatusContent[authStatus].content}
        </span>
      </>
    );
  }
};

const AuthPageSuccess = (props) => {
  const { title, content } = props;
  const authStatus = useSelector((state) => state.AuthReducer.authStatus);
  const user_detail = useSelector((state) => state.AuthReducer.user_detail);
  const { fetchResultData, isLoading } = useGet(`user/${user_detail.id}`);

  const renderAuthPageContent = () => {
    return (
      <div className={cx("auth-page-success")}>
        <div className={`${cx("auth-page-icon-wrapper")} flex-center`}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <AuthFormContent
          authStatus={authStatus}
          user_detail={fetchResultData.data}
          title={title}
          content={content}
        />
        <div className={cx("direction-btns")}>
          <DirectionButtons authStatus={authStatus} />
        </div>
      </div>
    );
  };

  return (
    <div className={cx("auth-page-success-wrapper")}>
      {isLoading ? <LoadingPage /> : <>{renderAuthPageContent()}</>}
    </div>
  );
};

export default AuthPageSuccess;

// TODO: Handle switch to user detail page
