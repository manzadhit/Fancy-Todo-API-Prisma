const prisma = require("../../prisma/client");

const createTodo = async (payload) => {
  const todo = await prisma.todo.create({
    data: payload,
  });

  return todo;
};

const getAllTodo = async () => {
  const allTodo = await prisma.todo.findMany();

  return allTodo;
};

const getTodoById = async (todoId) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: todoId,
    },
  });

  if (!todo) {
    throw new Error(`Todo with id ${todoId} not found`);
  }

  return todo;
};

const updateTodo = async (todoId, payload) => {
  const todoUpdated = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: payload,
  });

  return todoUpdated;
};

const deleteTodo = async (todoId) => {
  await prisma.todo.delete({
    where: {
      id: todoId,
    },
  });
};

module.exports = { createTodo, getAllTodo, getTodoById, updateTodo, deleteTodo };
