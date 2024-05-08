const express = require("express");
const router = express.Router();

const {
  createUserController,
  getAllUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/user.controller");

router.route("/").post(createUserController).get(getAllUserController);

router
  .route("/:userId")
  .get(getUserByIdController)
  .patch(updateUserController)
  .delete(deleteUserController);

module.exports = router;
