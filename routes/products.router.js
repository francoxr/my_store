const express = require('express');

const ProductsService = require('./../services/producs.service')
const router = express.Router();
const service = new ProductsService();

// getAll
router.get('/', async (req, res) => {
  const products = await service.get()
  res.json(products)
})

// este endpoint especifico tiene que ir antes de de endpoint dinamicos
router.get('/filter', (req, res) => {
  res.send('Soy un filtro')
})

// getOne
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const product = service.getOne(id);
    res.json(product);
  } catch (error) {
    // call middleware type error
    next(error);
  }
})

// create
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message : 'Created',
    data : newProduct
  })
})

// updated partial
router.patch('/:id', async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body)
    res.json({
      message : 'updated partial',
      data : product
    })
  } catch (error) {
    // call middleware type error
    next(error)
  }
})

// delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id)
  res.json({
    message : 'deleted',
    data : product,
  })
})

module.exports = router;
