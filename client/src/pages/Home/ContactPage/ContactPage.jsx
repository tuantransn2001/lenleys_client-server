import React from "react";
// ? Assets
// ? Component
import ShopAddress from "./ShopAddress/ShopAddress";
import Page from "~/components/helpers/Page/Page";
import ContactForm from "./ContactForm/ContactForm";
import ShopAvailable from "./ShopAvailable/ShopAvailable";
import ContactInfor from "./ContactInfor/ContactInfor";
// ? Custome hook
import { useTitle } from "~/customizes/hooks";
const ContactPage = (props) => {
  useTitle("Contact - Lenleys");
  // ? Render function

  return (
    <Page title="Contact Us">
      <div className="grid wide">
        <div className="row between-line">
          <ShopAddress />
        </div>
        <div className="row">
          <ShopAvailable />
        </div>
        <div className="row y-center">
          <ContactInfor />
          <ContactForm />
        </div>
      </div>
    </Page>
  );
};

export default ContactPage;
