  const express = require("express");
  const router = express.Router();
  const userRouter = require("./user.route");
  const todoRouter = require("./todo.route");

  const listRoute = [
    {
      path: "/user",
      route: userRouter
    },
    {
      path: "/todo",
      route: todoRouter
    }
  ]

  listRoute.forEach((route) => {
    router.use(route.path, route.route);
  })

  module.exports = router;