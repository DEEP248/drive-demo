const express = require("express");
const router = express.Router();
const {upload, uploadToFirebase} = require("../config/multer.config");
const authmiddleware = require("../middlewares/auth");

router.get('/home',authmiddleware,(req,res)=>{
    res.render('home');
})

// Upload route
router.post("/upload",authmiddleware, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded!");
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  res.render("home", { fileUrl });
});

module.exports = router;
