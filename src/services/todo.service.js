const prisma = require("../../prisma/client");

const createTodo = async (payload) => {
  const todo = await prisma.todo.create({
    data: payload,
  });

  return todo;
}

const getAllTodo = async () => {
  const allTodo = await prisma.todo.findMany();

  return allTodo;
}

module.exports = { createTodo, getAllTodo };