const express = require("express");
const router = express.Router();

const { createUserController, getAllUserController } = require("../controllers/user.controller");

router.route("/").post(createUserController).get(getAllUserController);

module.exports = router;