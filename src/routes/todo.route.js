const express = require("express");
const router = express.Router();

const { createTodoController, getAllTodoController } = require("../controllers/todo.controller");

router.route("/").post(createTodoController).get(getAllTodoController);

module.exports = router;