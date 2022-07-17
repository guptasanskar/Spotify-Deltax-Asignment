var multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.env.UPLOAD_PATH)
    }
    , filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
}
);
var upload = multer({ storage: storage });
var uploadFile = upload.single('file');

module.exports = uploadFile;



