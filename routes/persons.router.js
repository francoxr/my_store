const express = require('express');
const router = express.Router();

router.get('/persons', (req, res) => {
  res.json([
    {
      name: 'juan',
      last_name: 'labe',
      age: 25
    },
    {
      name: 'pedro',
      last_name: 'babel',
      age: 23
    }
  ]);
})

router.get('/persons/:person_id', (req, res) => {
  const { person_id } = req.params;
  res.json(
    {
      person_id,
      name: 'juan',
      last_name: 'labe',
      age: 25
    }
  );
})


module.exports = router;
