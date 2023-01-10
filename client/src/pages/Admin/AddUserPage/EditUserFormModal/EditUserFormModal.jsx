import React, { useState } from "react";
import Modal from "~/components/helpers/Modal/Modal";
import FormGroup from "~/components/helpers/FormGroup/FormGroup";

const editUserFormData = [
  {
    columnNum: 6,
    label: "First name",
    placeholder: "Type here",
    fieldName: "firstName",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Last name",
    placeholder: "Type here",
    fieldName: "lastName",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Email address",
    placeholder: "Type here",
    fieldName: "email",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Phone number",
    placeholder: "Type here",
    fieldName: "phoneNumber",
    regex_check_type: "string",
  },
];

const EditUserFormModal = (props) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Modal isOn={isOn}>
      <div className="edit-user-form-wrapper">
        <section>
          <FormGroup formFieldsData={editUserFormData} />
        </section>
      </div>
    </Modal>
  );
};

export default EditUserFormModal;

// Todo: Fix edit modal
