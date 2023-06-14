const router = require("express").Router();
const { getReq } = require("../controller/getReq.js");

router.route("/getReq").get(getReq);
