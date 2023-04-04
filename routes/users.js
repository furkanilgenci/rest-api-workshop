const express = require("express");
const User = require("../models/user");

const router = express.Router();
/*
 GET    -> get resource(s)
 POST   -> create a new resource
 DELETE -> delete an existing resource
 PATCH  -> update an existing resource
 PUT    -> replace an existing resource
 ...

Get all users:  GET /users
Get one user:   GET /users/:id
Create a user:  POST /users
Delete a user:  DELETE /users/:id
Update a user:  PATCH /users/:id

Endpoint is address to the resource
Request method is the action

Requests has:
* request method
* endpoint
* headers
* query params
* body

Response has:
* headers
* body
* status code
*/

router.get("/", (req, res) => {
  const users = User.getAll(); // mock

  res.status(200).send(users);
});

router.post("/", (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    res.sendStatus(400);
    return;
  }

  User.createOne({ email, name, age }); // mock

  res.sendStatus(201);
});

router.delete("/:id", (req, res) => {
  const id = req.params;

  User.findByIdAndDelete(id); // mock

  res.sendStatus(204);
});

module.exports = router;
