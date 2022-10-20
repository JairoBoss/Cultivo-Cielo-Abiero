module.exports = (app) => {
  const variableController = require("../controllers/variable.controller.js");
  const router = require("express").Router();

  router.get("/:datos", variableController.create);
  router.get("/", variableController.findAll);

  app.use("/api/variable", router);
};
