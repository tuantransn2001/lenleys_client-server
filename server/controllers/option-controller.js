const { Option } = require("../models");
class OptionController {
  static async getOptionList(req, res) {
    try {
      const OptionList = await Option.findAll();
      res.status(200).send(OptionList);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async getOptionById(req, res) {
    try {
      const { id } = req.params;
      const foundOption = await Option.findOne({
        where: {
          id,
        },
      });
      if (foundOption) {
        res.status(200).send(foundOption);
      } else {
        res.status(404).send("Option not found !!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async createOption(req, res) {
    try {
      const { name, description, product_id } = req.body;
      // ? Check Option is exist or not
      const newOption = {
        name,
        description,
        product_id,
      };
      const OptionList = await Option.findAll();
      const isExist = OptionList.findIndex((el) => el.name === name);
      if (isExist === -1) {
        await Option.create(newOption);
        res.status(201).send("Created!!");
      } else {
        res.status(404).send("Option is already exist!!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async deleteOptionById(req, res) {
    try {
      const { id } = req.params;
      const foundOption = await Option.findOne({
        where: {
          id,
        },
      });
      if (foundOption) {
        // ? Found
        await foundOption.destroy();
        res.status(201).send("Delete success Option!!!");
      } else {
        // ? Not Found
        res.status(404).send("Option not found !!!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async createOptionWithImgUpload(req, res) {
    try {
      const { filename, fieldname } = req.file;
      const { name, description, price, category, subcategory } = req.headers;
      const OptionList = await Option.findAll();
      const isExist = OptionList.findIndex((el) => el.name === name);
      if (isExist === -1) {
        const OptionImgSrc = `http://localhost:8080/img/${fieldname}/${filename}`;
        const newOption = {
          name,
          description,
          price,
          category,
          subCategory: subcategory,
          imgSrc: OptionImgSrc,
        };
        await Option.create(newOption);
        res.status(201).send("Created!!");
      } else {
        res.status(404).send("Option is already exist!!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = OptionController;
