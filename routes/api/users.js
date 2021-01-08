const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/", (req, res) => {
  const newUser = new User({ ...req.body });
  newUser
    .save()
    .then((success) => res.status(201).json(newUser))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/:id", (req, res) => {
  const userToDelete = User.findById(req.params.id)
    .then((usr) => {
      usr
        .remove()
        .then((success) => res.status(204).json({ success: true }))
        .catch((err) => res.status(500).json({ success: false }));
    })
    .catch((err) => res.status(500).json({ success: false }));
});

module.exports = router;
