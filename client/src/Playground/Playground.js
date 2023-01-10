import React from "react";
const productList = [
  {
    id: 1,
    product_name: "ALEX 2.5 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
  {
    id: 2,
    product_name: "BANTAM MIDNIGHT LEATHER OCCASIONAL CHAIR AND STOOL",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
  {
    id: 3,
    product_name: "BOUTIQUE ROYAL BLUE 3 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543953385-520548364.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
  {
    id: 4,
    product_name: "BOUTIQUE TEAL 2 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543972680-94693546.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
  {
    id: 5,
    product_name: "BOUTIQUE TEAL 3 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543988947-747078912.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
  {
    id: 6,
    product_name: "GRACE 2 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669544020949-727293147.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
  {
    id: 7,
    product_name: "GRACE 3 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_price: "3,179.00",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669544038636-46808369.png",
    product_category: "Sofas & Chairs",
    product_orderID: null,
    createdAt: "2022-11-29T05:43:14.000Z",
    updatedAt: "2022-11-29T05:43:14.000Z",
  },
];
const productOptionList = [
  {
    option_id: 1,
    product_id: 1,
    option_name: "Wood Finish",
    option_description: "Choose kind of wood for your product",
    image_title: "haza",
    image_src:
      "http://localhost:8080/img/imageList/imageList1669699636763-111856667.png",
  },
  {
    option_id: 1,
    product_id: 1,
    option_name: "Wood Finish",
    option_description: "Choose kind of wood for your product",
    image_title: "frost",
    image_src:
      "http://localhost:8080/img/imageList/imageList1669699761500-763490703.png",
  },
  {
    option_id: 1,
    product_id: 1,
    option_name: "Wood Finish",
    option_description: "Choose kind of wood for your product",
    image_title: "mist",
    image_src:
      "http://localhost:8080/img/imageList/imageList1669699810442-706814496.png",
  },
];

const product_with_options = [
  {
    product_id: 1,
    product_name: "ALEX 2.5 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
    option_id: 1,
    option_name: "Wood Finish",
    option_description: "Choose kind of wood for your product",
    image_option_item_id: 11,
    image_item_title: "haza",
    image_item_description: "ALEX 2.5 SEATER SOFA - options -wood",
    image_item_src:
      "http://localhost:8080/img/imageList/imageList1669699636763-111856667.png",
  },
  {
    product_id: 1,
    product_name: "ALEX 2.5 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
    option_id: 1,
    option_name: "Wood Finish",
    option_description: "Choose kind of wood for your product",
    image_option_item_id: 12,
    image_item_title: "frost",
    image_item_description: "ALEX 2.5 SEATER SOFA - options -wood",
    image_item_src:
      "http://localhost:8080/img/imageList/imageList1669699761500-763490703.png",
  },
  {
    product_id: 1,
    product_name: "ALEX 2.5 SEATER SOFA",
    product_description:
      "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
    product_imgSrc:
      "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
    option_id: 2,
    option_name: "Wood Finish",
    option_description: "Choose kind of wood for your product",
    image_option_item_id: 13,
    image_item_title: "mist",
    image_item_description: "ALEX 2.5 SEATER SOFA - options -wood",
    image_item_src:
      "http://localhost:8080/img/imageList/imageList1669699810442-706814496.png",
  },
];
const handleFormartProductList = (productList, optionList) => {
  return productList.map((product) => {
    const newProductFormat = { ...product };
    optionList.forEach((option) => {
      // ? Check option có thuộc product hiện tại hay không = id
      if (option.product_id === product.id) {
        // ? Nếu thuộc -> Add Options

        if (!product.options) {
          // ? Nếu option chưa tồn tại
          const {
            image_src,
            image_title,
            option_description,
            option_id,
            option_name,
            product_id,
          } = option;
          const options = [
            {
              image_src,
              image_title,
              option_description,
              option_id,
              option_name,
              product_id,
            },
          ];
          product["options"] = options;
        } else {
          // ? Nếu option đã tồn tại
        }
      } else {
        // ? Nếu không thuộc product hiện tại
      }
    });

    return newProductFormat;
  });
};

const handleFormatProductWithOptionList = (ArrSource) => {
  const finalResult = {};

  ArrSource.forEach((product_info, index) => {
    if (index === 0) {
      // ? Khởi tạo phần tử đầu tiên
      const newProductInfoObj = {
        id: product_info.product_id,
        name: product_info.product_name,
        description: product_info.product_description,
        src: product_info.product_imgSrc,
        options: [
          {
            id: product_info.option_id,
            name: product_info.option_name,
            description: product_info.option_description,
            option_list: [
              {
                title: product_info.image_item_title,
                description: product_info.image_item_description,
                imgSrc: product_info.image_item_src,
              },
            ],
          },
        ],
      };
      Object.assign(finalResult, newProductInfoObj);
    } else {
      // ? Tư phần tử thứ 2 check tiếp option id =>

      const optionIndex = finalResult.options.findIndex((el) => {
        return el.id === product_info.option_id;
      });

      console.log(`index: ${index} - result: ${optionIndex}`);

      if (optionIndex !== -1) {
        // ? Nếu cùng option id
        const optionItem = {
          title: product_info.image_item_title,
          description: product_info.image_item_description,
          imgSrc: product_info.image_item_src,
        };

        finalResult.options[optionIndex].option_list.push(optionItem);
      } else {
        // ! Nếu không cùng option id -> tạo option mới
        const newOption = {
          id: product_info.option_id,
          name: product_info.option_name,
          description: product_info.option_description,
          option_list: [
            {
              title: product_info.image_item_title,
              description: product_info.image_item_description,
              imgSrc: product_info.image_item_src,
            },
          ],
        };

        finalResult.options.push(newOption);
      }
    }
  });

  return finalResult;
};

export default function Playground() {
  // handleFormartProductList(productList, productOptionList);
  console.log(
    "Final result: ",
    handleFormatProductWithOptionList(product_with_options)
  );
  return <div>Playground</div>;
}
