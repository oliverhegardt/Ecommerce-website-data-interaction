const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

//POST is used to send data to a server to create/update a resource
router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("your username is: " + username);
});

module.exports = router;
