import React, { useEffect, useState } from "react";
import Page from "~/components/helpers/Page/Page";
import FormGroup from "~/components/helpers/FormGroup/FormGroup";
import CheckoutOrderReview from "~/components/CheckoutOrderReview/CheckoutOrderReview";

import ToastMessage from "~/components/helpers/ToastMessage/ToastMessage";
import { requireInfoData } from "./data";
import { useTitle } from "~/customizes/hooks";
import { validateObjectWithKeyList } from "~/common/common";
import { fetchApi } from "~/services/utils/fetch";
import classNames from "classnames/bind";
import style from "./CheckoutPage.module.scss";

const cx = classNames.bind(style);

const CheckoutPage = (props) => {
  const [promo, getPromo] = useState({});
  const [userOrderInformation, getUserOrderInformation] = useState({});
  const [toastData, setToastData] = useState({});
  const [visibleToast, setVisibleToast] = useState(false);

  useEffect(() => {
    const validatePromo = validateObjectWithKeyList(["postCode"], promo);
    if (validatePromo) {
      try {
        fetchApi
          .get(`/order-detail/check_promo/${promo.postCode}`)
          .then((response) => {
            console.log(response);
            const isCallApiSuccess = response.status === 200;
            if (isCallApiSuccess) {
              // ? Success
              setToastData((prev) => {
                return {
                  ...prev,
                  title: "Validate Successfully!",
                  message: `You have been added successfully ${response.data.discount_price}`,
                  type: "success",
                };
              });
            } else {
              setToastData((prev) => {
                return {
                  ...prev,
                  title: "Validate Fail!",
                  message: "Your promo is invalid or out date!",
                  type: "warn",
                };
              });
            }

            setVisibleToast(true);
          });
      } catch (err) {
        setToastData((prev) => {
          return {
            ...prev,
            title: "Validate Fail!",
            message: "The server is working wrong!",
            type: "warn",
          };
        });
        setVisibleToast(true);
      }
    }
  }, [promo]);

  useTitle("Checkout - Lenleys");

  return (
    <Page
      title="Checkout"
      subTitle={
        <span
          style={{
            fontSize: "13px",
          }}
        >
          Have a promo ?
          <a
            href="#"
            style={{
              color: "#272525",
              textDecoration: "underline",
            }}
          >
            Click here to search it
          </a>
        </span>
      }
    >
      <div className="grid wide" style={{ width: "1000px" }}>
        <div className="row">
          <div className="c-7 gutter">
            <>
              <FormGroup
                getUserDataGetterObj={getPromo}
                formFieldsData={[
                  {
                    columnNum: 5,
                    label: "PostCode Search",
                    fieldName: "postCode",
                    type: "text",
                    regex_check_type: "string",
                    placeholder: "Search for post code",
                    description: "Enter Address Manually (Uppercase)",
                    isRequire: false,
                  },
                ]}
                actionBtnColumn="3"
                customSubmitBtnStyle={{ height: "40px", marginTop: "6px" }}
                formCustomStyle={{
                  marginBottom: "30px",
                  paddingBottom: "30px",
                  borderBottom: "1px solid #272525",
                }}
                action="Search"
              />
              <FormGroup
                formFieldsData={requireInfoData}
                getUserDataGetterObj={getUserOrderInformation}
                customSubmitBtnStyle={{
                  display: "none",
                }}
                action="Place Order"
              />
              {visibleToast && (
                <ToastMessage
                  title={toastData.title}
                  message={toastData.message}
                  type={toastData.type}
                  visible
                  handleCloseToast={() => {
                    setVisibleToast(false);
                  }}
                />
              )}
            </>
          </div>
          <div className="c-1 gutter"></div>
          <div className="c-4 gutter">
            <CheckoutOrderReview />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CheckoutPage;
