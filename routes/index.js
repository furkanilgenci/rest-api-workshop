const express = require('express')
const router = express.Router()
const User = require('../models/user')

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

// CRUD Operations (Creat, read, update and delete)
router.get('/users', async function (req, res, next) {
  const users = await User.find({})

  res.send(users)
})

router.get('/users/:id', async function (req, res) {
  const user = await User.findById(req.params.id)

  if(!user) {
    res.sendStatus(404)
    return
  }

  res.send(user)
})

router.post('/users', async function (req, res) {
  const { name, email, age } = req.body

  const user = await User.create({
    name,
    email,
    age,
  })

  res.send(user)
})

router.delete('/users/:id', async function (req, res) {
  await User.findByIdAndDelete(req.params.id)

  res.sendStatus(200)
})

module.exports = router
