const prisma = require("../../prisma/client");

const createUser = async (payload) => {
  const { name, email, phone } = payload;

  const user = await prisma.user.create({
    data: {
      name, email, phone
    }
  });

  return user;
}

const getAllUser = async() =>  allUser = await prisma.user.findMany();

module.exports = { createUser, getAllUser }