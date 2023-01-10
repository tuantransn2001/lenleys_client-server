import React, { useState } from "react";

import LoadingPage from "~/pages/LoadingPage/LoadingPage";
import FormGroup from "~/components/helpers/FormGroup/FormGroup";
import Button from "~/components/helpers/Button/Button";

import { useSelector } from "react-redux";

import classNames from "classnames/bind";
import style from "./UserInformation.module.scss";
import { useGet } from "~/services/utils/fetch";
const cx = classNames.bind(style);

const ProfileInfo = (props) => {
  return (
    <div className={cx("profile-info")}>
      <div className={cx("user-avatar-wrapper")}>
        <img
          src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/315962549_1634029717029656_3090241731460772052_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=IPJPu0DSIb8AX-gPlMs&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfD4eT7y97RqYV8hmAwTD5cJcRPMkSRO5kEYtdrau6s0ZQ&oe=6395F70D"
          alt="user avatar"
        />
      </div>
      <div className={cx("user-info")}>
        <span className={cx("user-name")}>Tuấn</span>
        <span className={cx("order-amount")}>0 order</span>
      </div>
      <div className={cx("user-actions")}>
        <Button type="primary" size="small" maxSize>
          Log out
        </Button>
        <Button type="primary" size="small" maxSize>
          View basket
        </Button>
      </div>
    </div>
  );
};

const UserInformation = (props) => {
  const user_detail = useSelector((state) => state.AuthReducer.user_detail);
  const { fetchResultData, isLoading } = useGet(`user/${user_detail.id}`);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className={cx("user-information-wrapper")}>
      <div className="grid wide">
        <div className="row">
          <div className="c-12 gutter">
            <h3 className="h4-size-xl">Personal details</h3>
            <p className="paragraph-text-style-strong">Used for tracking you</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="c-8 gutter">
            <FormGroup
              formFieldsData={[
                {
                  columnNum: 12,
                  label: "Full name",
                  fieldName: "fullName",
                  placeholder: `${fetchResultData.data.firstName} ${fetchResultData.data.lastName}`,
                  type: "string",
                  regex_check_type: "string",
                },
                {
                  columnNum: 12,
                  label: "Phone No.",
                  fieldName: "phoneNumber",
                  placeholder: `${fetchResultData.data.phoneNumber}`,
                  type: "string",
                  regex_check_type: "string",
                },
                {
                  columnNum: 12,
                  label: "Email Address",
                  fieldName: "emailAddress",
                  placeholder: `${fetchResultData.data.email}`,
                  type: "string",
                  regex_check_type: "string",
                },
                {
                  columnNum: 12,
                  label: "Address",
                  fieldName: "address",
                  placeholder: `${fetchResultData.data.address}`,
                  type: "string",
                  regex_check_type: "string",
                },
              ]}
            />
          </div>
          <div className="c-4 gutter">
            <ProfileInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
