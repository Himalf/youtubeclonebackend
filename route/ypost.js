const express  = require("express");
const router = express.Router();

const {createYpostControlller,getYPostController} = require("../controller/ypost")
router.post("/",createYpostControlller);
router.get("/",getYPostController);
module.exports = router;