const prisma = require("../../prisma/client");

const createUser = async (payload) => {
  const user = await prisma.user.create({
    data: payload,
  });

  return user;
};

const getAllUser = async () => {
  const allUser = await prisma.user.findMany();
  return allUser;
};

const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      todos: true
    }
  });

  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  return user;
};

const updateUser = async (userId, payload) => {
  const userUpdated = await prisma.user.update({
    where: {
      id: userId
    },
    data: payload
  });

  return userUpdated;
};

const deleteUser = async (userId) => {
  await prisma.user.delete({
    where: {
      id: userId
    }
  })
} 

module.exports = { createUser, getAllUser, getUserById, updateUser, deleteUser };
