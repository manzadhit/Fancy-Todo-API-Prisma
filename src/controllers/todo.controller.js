const httpStatus = require("http-status");
const { createTodo, getAllTodo, updateTodo, getTodoById, deleteTodo } = require("../services/todo.service");

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

const getTodoByIdController = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await getTodoById(todoId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get todo by id",
      data: todo,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const updateTodoController = async (req, res) => {
  try {
    const { todoId } = req.params;
    const payload = req.body;
    await getTodoById(todoId);
    const todoUpdated = await updateTodo(todoId, payload);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully update todo",
      data: todoUpdated,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const deleteTodoController = async (req, res) => {
  try {
    const { todoId } = req.params;
    await getTodoById(todoId);
    await deleteTodo(todoId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully delete todo",
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
  getAllTodoController,
  getTodoByIdController,
  updateTodoController,
  deleteTodoController
};
