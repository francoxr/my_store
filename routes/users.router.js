const express = require('express');
const UsersService = require('./../services/users.service');
const router = express.Router();

const service = new UsersService();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  const users = service.get(limit, offset);
  res.json(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.getOne(id);
  res.json(user)
})

module.exports = router;
