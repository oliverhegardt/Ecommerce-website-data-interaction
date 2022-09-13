//user route for updating user

//POST is used to send data to a server to create/update a resource

const { verfiyToken } = require("./verifyToken");

const router = require("express").Router();

//Put is used to update a resource.

//Decide wheter token belongs to admin or client

router.put("/:id", verfiyToken, (req, res) => {});

//exporting router

module.exports = router;
