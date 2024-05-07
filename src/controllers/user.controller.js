const httpStatus = require("http-status");
const { createUser, getAllUser } = require("../services/user.service");

const createUserController = async (req, res) => {
  try {
    const payload = req.body;

    const user = await createUser(payload);
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "Successfully create user",
      data: user,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getAllUserController = async (req, res) => {
  try {
    const allUser = await getAllUser();
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "Successfully get allUser",
      data: allUser,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

module.exports = { createUserController, getAllUserController };
