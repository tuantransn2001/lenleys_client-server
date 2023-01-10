const { Product } = require("../models");
const { sequelize } = require("../models");
const { queryGetProductWithOptions } = require("../data/query-data");

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

class ProductController {
  static async getProductList(req, res) {
    try {
      const [data, metaData] = await sequelize.query(
        "select  options.id as option_id , products.id as product_id ,options.option_name , products.product_price, options.option_description , lenleys_database.images.image_title , lenleys_database.images.image_src  from lenleys_database.options left join lenleys_database.products on options.product_id = products.id right join lenleys_database.images on options.id = images.option_id where images.option_id is not null"
      );
      const ProductList = await Product.findAll();
      res.status(200).send(ProductList);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findOne({
        where: {
          id,
        },
      });
      if (foundProduct) {
        const [productDataWithOptions, metaData1] = await sequelize.query(
          `
          select 
              products.id as product_id, 
              products.product_category,
              products.product_name,
              products.product_price,
              products.product_description, 
              products.product_imgSrc, 
              options.id as option_id,
              options.option_name,
              options.option_description,
              images.id as image_option_item_id,
              images.image_title as image_item_title,
            images.image_description as image_item_description,
              images.image_src as image_item_src
          from lenleys_database.products 
          left join lenleys_database.options
          on lenleys_database.products.id = lenleys_database.options.product_id
          right join lenleys_database.images
          on lenleys_database.options.id = lenleys_database.images.option_id
          where products.id is not null and products.id = ${id}
          `
        );

        const [productThumbnailImgs, metaData2] = await sequelize.query(
          `
        select 
          lenleys_database.images.image_src , 
          lenleys_database.images.image_title , 
          lenleys_database.images.image_description 
        from lenleys_database.products
        left join lenleys_database.images
        on products.id = images.product_id
        where lenleys_database.products.id = ${id} and lenleys_database.images.option_id is null
        `
        );

        const handleFormatProductWithOptionList = (ArrSource) => {
          const finalResult = {};

          ArrSource.forEach((product_info, index) => {
            if (index === 0) {
              // ? Khởi tạo phần tử đầu tiên
              const newProductInfoObj = {
                id: product_info.product_id,
                product_name: product_info.product_name,
                product_price: product_info.product_price,
                product_category: product_info.product_category,
                product_description: product_info.product_description,
                product_imgSrc: product_info.product_imgSrc,
                product_thumbnails: productThumbnailImgs,
                product_options: [
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

              const optionIndex = finalResult.product_options.findIndex(
                (el) => {
                  return el.id === product_info.option_id;
                }
              );

              if (optionIndex !== -1) {
                // ? Nếu cùng option id
                const optionItem = {
                  title: product_info.image_item_title,
                  description: product_info.image_item_description,
                  imgSrc: product_info.image_item_src,
                };

                finalResult.product_options[optionIndex].option_list.push(
                  optionItem
                );
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

                finalResult.product_options.push(newOption);
              }
            }
          });

          return finalResult;
        };

        res
          .status(200)
          .send(
            isEmpty(handleFormatProductWithOptionList(productDataWithOptions))
              ? foundProduct
              : handleFormatProductWithOptionList(productDataWithOptions)
          );
      } else {
        res.status(404).send("Product not found !!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async getCategoryProductListByCategoryName(req, res) {
    try {
      const { name } = req.params;
      const [productList, metaData3] = await sequelize.query(
        `
        SELECT
        products.id,
        products.product_name,
        products.product_category as category ,
        products.product_description,
        products.product_price,
        products.product_imgSrc
    FROM
        lenleys_database.categories
            RIGHT JOIN
        lenleys_database.products ON lenleys_database.products.product_category = lenleys_database.categories.name
    WHERE
        lenleys_database.categories.name = "${name}"
         `
      );
      res.status(200).send(productList);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async createProduct(req, res) {
    try {
      const {
        name,
        price,
        description,
        imgSrc,
        category,
        subCategory,
        orderID,
      } = req.body;
      // ? Check product is exist or not
      const newProduct = {
        name,
        description,
        price,
        imgSrc,
        category,
        subCategory,
        orderID,
      };
      const ProductList = await Product.findAll();
      const isExist = ProductList.findIndex((el) => el.name === name);
      if (isExist === -1) {
        await Product.create(newProduct);
        res.status(201).send("Created!!");
      } else {
        res.status(404).send("Product is already exist!!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async deleteProductById(req, res) {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findOne({
        where: {
          id,
        },
      });
      if (foundProduct) {
        // ? Found
        await foundProduct.destroy();
        res.status(201).send("Delete success product!!!");
      } else {
        // ? Not Found
        res.status(404).send("Product not found !!!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async createProductWithImgUpload(req, res) {
    try {
      const { filename, fieldname } = req.file;
      const {
        product_name,
        product_description,
        product_price,
        product_category,
      } = req.headers;
      const ProductList = await Product.findAll();
      const isExist = ProductList.findIndex(
        (el) => el.product_name === product_name
      );
      if (isExist === -1) {
        const productImgSrc = `http://localhost:8080/img/${fieldname}/${filename}`;
        const newProduct = {
          product_name,
          product_description,
          product_price,
          product_category,
          product_imgSrc: productImgSrc,
        };
        await Product.create(newProduct);
        res.status(201).send("Created!!");
      } else {
        res.status(404).send("Product is already exist!!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = ProductController;
