const express = require("express");
const router = express.Router();

let mockUsers = [
  {
    id: 1,
    name: "Luciano user 1",
    age: 37,
  },
  {
    id: 2,
    name: "Luciano user 2",
    age: 37,
  },
  {
    id: 3,
    name: "Luciano user 3",
    age: 37,
  },
];

router.get("/", (req, res) => {
  res.json(mockUsers);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  mockUsers.push(newUser);
  res.status(200).json(mockUsers);
});

router.delete("/:id", (req, res) => {
  const userToDelete = mockUsers.find(
    (usr) => usr.id === parseInt(req.params.id)
  );
  if (userToDelete) {
    mockUsers = mockUsers.filter((usr) => usr.id !== parseInt(req.params.id));
    res.status(204).json(userToDelete);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
module.exports = router;
