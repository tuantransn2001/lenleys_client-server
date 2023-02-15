import React, { useEffect, useState } from "react";
import Page from "~/components/helpers/Page/Page";
import FormGroup from "~/components/helpers/FormGroup/FormGroup";
import Button from "~/components/helpers/Button/Button";
import PaymentMethod from "~/components/helpers/PaymentMethod/PaymentMethod";
import ToastMessage from "~/components/helpers/ToastMessage/ToastMessage";
import { requireInfoData } from "./data";
import { useTitle } from "~/customizes/hooks";
import { isEmpty } from "~/common/common";
import { handleCalculateSubtotal } from "~/common/common";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "~/services/utils/fetch";
import classNames from "classnames/bind";
import style from "./CheckoutPage.module.scss";
const cx = classNames.bind(style);

const PolicyAndTerm = (props) => {
  return (
    <div className={cx("policy-and-term-wrapper")}>
      <div className="grid">
        <div className="row">
          <div className="c-12 gutter mb-1">
            <div className={cx("policy-and-term-item-wrapper")}>
              <span className={cx("input-checkbox-wrapper")}>
                <input type="checkbox" />
              </span>
              <span>
                I have read and agree to the website terms and conditions
                <span>*</span>
              </span>
            </div>
          </div>
          <div className="c-12 gutter">
            <div className={cx("policy-and-term-item-wrapper")}>
              <span className={cx("input-checkbox-wrapper")}>
                <input type="checkbox" />
              </span>
              <span>
                Sign me up to receive exclusive discounts and latest offers from
                Lenleys. See our privacy policy for details.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Button type="primary" size="medium" maxSize>
        Checkout
      </Button>
    </div>
  );
};

const Information = (props) => {
  const [promo, setPromo] = useState({});
  const [toastData, setToastData] = useState({});
  useEffect(() => {
    const validatePromo = isEmpty(promo);
    if (!validatePromo) {
      try {
        fetchApi.get(`/promo/check/${promo.postCode}`).then((response) => {
          const isCallApiSuccess = response.status === 201;
          if (isCallApiSuccess) {
            // ? Success
            setToastData((prev) => {
              return {
                ...prev,
                title: "Validate Successfully!",
                message: response.data.message,
                type: "success",
                visible: true,
              };
            });
          } else {
            setToastData((prev) => {
              return {
                ...prev,
                title: "Validate Fail!",
                message: response.data.message,
                type: "warn",
                visible: true,
              };
            });
          }
        });
      } catch (err) {
        setToastData((prev) => {
          return {
            ...prev,
            title: "Validate Fail!",
            message: "The server is working wrong!",
            type: "warn",
            visible: true,
          };
        });
      }
    }
  }, [promo]);

  return (
    <>
      <FormGroup
        getUserDataGetterObj={setPromo}
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
      <FormGroup formFieldsData={requireInfoData} action="Place Order" />
      {!isEmpty(toastData) && (
        <ToastMessage
          title={toastData.title}
          message={toastData.message}
          type={toastData.type}
          visible={toastData.visible}
          clearToast={setToastData}
        />
      )}
    </>
  );
};

const CheckoutOrderReview = (props) => {
  const cartList = useSelector((state) => state.CartReducer.cartList);
  const cartSubTotal = handleCalculateSubtotal(cartList);
  const renderTableBody = () => {
    return cartList.map((cartItem) => {
      const product_subtotal = cartItem.unit_price * cartItem.quantity;

      return (
        <tr key={cartItem.cart_item_id}>
          <td className={cx("default-text")}>{cartItem.product_name}</td>
          <td className={cx("default-text")}>${product_subtotal}</td>
        </tr>
      );
    });
  };

  return (
    <div className={cx("checkout-order-review-wrapper")}>
      <table>
        <thead>
          <tr>
            <th className={cx("strong-text")}>Product</th>
            <th className={cx("strong-text")}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {renderTableBody()}
          <tr>
            <td className={cx("default-text-1")}>Subtotal</td>
            <td className={cx("default-text-1")}>${cartSubTotal}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div className={cx("footer-shipping-options-wrapper")}>
                <span className={cx("default-text")}> Shipping</span>
                <span className={cx("default-text")}>
                  Enter your address to view shipping options!
                </span>
                <a
                  style={{
                    textDecoration: "underline",
                    color: "#272525",
                  }}
                  href="#"
                >
                  Calculate shipping
                </a>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={cx("cart-total-wrapper")}>
        <span className={cx("strong-text-1")}>Total</span>
        <span className={cx("default-text-1")}>
          {`$ ${cartSubTotal}`}
          <span className={cx("default-text")}>{` (Include: $${
            cartSubTotal * 0.2
          } VAT)`}</span>
        </span>
      </div>
      <PaymentMethod
        optionColumn={12}
        optionList={[
          {
            type: "Cash",
            benefit: "Pay 25% deposit",
          },
          {
            type: "Apple Pay",
          },
          {
            type: "Google Pay",
          },
        ]}
      />
      <PolicyAndTerm />
    </div>
  );
};

const CheckoutPage = (props) => {
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
          Have a promo ?{" "}
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
            <Information />
          </div>
          <div className="c-5 gutter">
            <CheckoutOrderReview />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CheckoutPage;
