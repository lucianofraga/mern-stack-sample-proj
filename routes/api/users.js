const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const mockUsers = [
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

  res.json(mockUsers);
});

module.exports = router;
