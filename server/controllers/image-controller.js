const { Image } = require("../models");
class ImageController {
  static async getImgList(req, res) {
    try {
      const imgList = await Image.findAll();
      res.status(200).send(imgList);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async uploadSingleImg(req, res) {
    console.log("upload single img");
    try {
      const { filename, fieldname } = req.file;
      const { image_title, image_description, product_id, option_id } =
        req.headers;
      // ? Check imgae is existed or not
      const foundImage = await Image.findOne({
        where: {
          image_title,
        },
      });
      if (foundImage) {
        // ? Exist -> Stop -> Send message
        res
          .status(404)
          .send("Image is already exist pls check it and try again!");
      } else {
        // ? Doesnt exists -> Create -> Send message
        const completeImgSrc = `http://localhost:8080/img/${fieldname}/${filename}`;
        const newImageInfo = {
          image_title,
          image_description,
          image_src: completeImgSrc,
          product_id,
          option_id,
        };
        console.log(newImageInfo);
        await Image.create(newImageInfo);
        res
          .status(200)
          .send(
            `Upload success! - Img Information: ${JSON.stringify(newImageInfo)}`
          );
      }
    } catch (err) {
      res.status(500).status(err);
    }
  }
  static async deleteImgByID(req, res) {
    try {
      const { id } = req.params;
      const foundImg = await Image.findOne({
        where: {
          id,
        },
      });
      if (foundImg) {
        // ? Founded -> delete
        await foundImg.destroy();
        res.status(201).send(`Delete success image id=${id}`);
      } else {
        // ? Not found
        res.status(404).send("Image not found!");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = ImageController;
