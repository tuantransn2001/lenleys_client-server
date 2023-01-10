const addProductFormData = [
  {
    columnNum: 6,
    label: "Name",
    fieldName: "name",
    placeholder: "Type here",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Price",
    fieldName: "price",
    placeholder: "Type here",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 12,
    label: "Description",
    fieldName: "description",
    placeholder: "Type here",
    type: "text",
    regex_check_type: "string",
  },
  {
    columnNum: 6,
    label: "Category",
    fieldName: "category",
    type: "dropdown",
    options: [
      {
        value: "Sofas & Chairs",
        content: "Sofas & Chairs",
      },
      {
        value: "Beds & Bedroom",
        content: "Beds & Bedroom",
      },
      {
        value: "Dining",
        content: "Dining",
      },
      {
        value: "Living Room",
        content: "Living Room",
      },
      {
        value: "Interiors",
        content: "Interiors",
      },
      {
        value: "Accessories",
        content: "Accessories",
      },
      {
        value: "Garden",
        content: "Garden",
      },
      {
        value: "Clearance",
        content: "Clearance",
      },
    ],
    regex_check_type: null,
  },
  {
    columnNum: 6,
    label: "Sub-Category",
    fieldName: "subCategory",
    type: "dropdown",
    options: [
      {
        value: "Sofas & Chairs",
        content: "Sofas & Chairs",
      },
      {
        value: "Beds & Bedroom",
        content: "Beds & Bedroom",
      },
      {
        value: "Dining",
        content: "Dining",
      },
      {
        value: "Living Room",
        content: "Living Room",
      },
      {
        value: "Interiors",
        content: "Interiors",
      },
      {
        value: "Accessories",
        content: "Accessories",
      },
      {
        value: "Garden",
        content: "Garden",
      },
      {
        value: "Clearance",
        content: "Clearance",
      },
    ],
    regex_check_type: null,
  },
];

export { addProductFormData };
