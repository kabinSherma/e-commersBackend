"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require('multer');
const storage = multer.diskStorage({
    // desitnation file name
    destination: function (req, file, cb) {
        const allowFiles = ['image/png', 'image/jpg', 'image/jpeg'];
        if (!allowFiles.includes(file.mimetype)) {
            cb(new Error("This types of file doesn't support"));
        }
        cb(null, "./storage");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
module.exports = { multer, storage };
//# sourceMappingURL=multerConfig.js.map