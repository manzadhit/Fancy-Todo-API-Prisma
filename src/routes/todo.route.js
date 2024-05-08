const express = require("express");
const router = express.Router();

const {
  createTodoController,
  getAllTodoController,
  getTodoByIdController,
  updateTodoController,
  deleteTodoController,
} = require("../controllers/todo.controller");

router.route("/").post(createTodoController).get(getAllTodoController);

router
  .route("/:todoId")
  .get(getTodoByIdController)
  .patch(updateTodoController)
  .delete(deleteTodoController);

module.exports = router;
