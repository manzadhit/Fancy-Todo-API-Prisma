const httpStatus = require("http-status");
const { createUser, getAllUser, getUserById, updateUser } = require("../services/user.service");

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
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
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

const getUserByIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await getUserById(userId);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully get user",
      data: user,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const payload = req.body;
    await getUserById(userId);
    const userUpdated = await updateUser(userId, payload);

    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "Successfully update user",
      data: userUpdated,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};


module.exports = {
  createUserController,
  getAllUserController,
  getUserByIdController,
  updateUserController
};
