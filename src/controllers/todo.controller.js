const httpStatus = require("http-status");
const { createTodo, getAllTodo } = require("../services/todo.service");

const createTodoController = async (req, res) => {
  try {
    const payload = req.body;
    const todo = await createTodo(payload);

    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "Successfully create todo",
      data: todo,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getAllTodoController = async (req, res) => {
  try {
    const allTodo = await getAllTodo();

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get all todo",
      data: allTodo,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

module.exports = {
  createTodoController,
  getAllTodoController
}
