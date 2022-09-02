//POST is used to send data to a server to create/update a resource

const { verfiyToken } = require("./verifyToken");

const router = require("express").Router();

//Put is used to create or replace a resource, update a resource.

//Decide wheter token belongs to admin or client
router.put("/:id", verfiyToken, (req, res) => {});

module.exports = router;
