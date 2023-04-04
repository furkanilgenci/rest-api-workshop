const uuid = require("uuid").v4;

const users = [];

function getAll() {
  return users.slice();
}

function createOne({ email, name, age }) {
  const user = {
    id: uuid(),
    email,
    name,
    age,
  };

  users.push(user);
}

function findByIdAndUpdate(id, { email, name, age }) {
  const indexToUpdate = users.find((u) => u.id === id);

  if (indexToUpdate === -1) {
    console.log("skip");
    return;
  }

  array[indexToUpdate] = { id, email, name, age };
}

function findByIdAndDelete(id) {
  const indexToDelete = users.find((u) => u.id === id);

  if (indexToDelete === -1) {
    console.log("skip");
    return;
  }

  users.splice(indexToDelete, 1);
}

module.exports = { getAll, createOne, findByIdAndUpdate, findByIdAndDelete };
