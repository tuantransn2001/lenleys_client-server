const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadImg = (type) => {
  // ? Create folder where the image is saved
  const made = mkdirp.sync(`./public/img/${type}`);
  const myCustomStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/img/${type}`);
    },
    filename: function (req, file, cb) {
      const extensions = [".png", ".jpg"];
      const extensionFileNameUpload = file.originalname.slice(-4);
      const isValidExtenstion = extensions.includes(extensionFileNameUpload);
      if (isValidExtenstion) {
        // ? Exntenstion valid
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        // ? Full Img name
        const completeFileName = `${file.fieldname}${uniqueSuffix}${extensionFileNameUpload}`;
        const imgPath = `http://localhost:8080/img/${type}/${completeFileName}`;
        cb(null, completeFileName);
        // ? Storge img path
      } else {
        // ! Extenstion in-valid
        cb(new Error("Extenstion in-valid"));
      }
    },
  });

  const upload = multer({ storage: myCustomStorage });

  return upload.single(type);
};

module.exports = { uploadImg };
