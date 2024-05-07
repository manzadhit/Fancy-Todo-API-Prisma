  const express = require("express");
  const router = express.Router();
  const userRouter = require("./user.route");

  const listRoute = [
    {
      path: "/user",
      route: userRouter
    }
  ]

  listRoute.forEach((route) => {
    router.use(route.path, route.route);
  })

  module.exports = router;