const express = require("express");
const { getResult, saveResult } = require("../controllers/result");

const router = express.Router();

router.route("/").get(getResult).post(saveResult);

module.exports = router;
