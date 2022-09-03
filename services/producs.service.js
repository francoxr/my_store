const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor(){
    this.products = []
    this.generate();
  }

  generate(){
    const limit = 10;

    for (let index = 0; index < limit; index++) {
        this.products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.imageUrl(),
          isBlock: faker.datatype.boolean()
      })
    }

  }

  async get(){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(this.products)
      }, 3000)
    })
  }

  getOne(id){
    const product = this.products.find(item => item.id === id)
    if (!product) {
      throw boom.notFound('Product not Found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is Block')
    }
    return product
  }

  create(data){

    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async update(id, data){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('Product not Found');
      // throw new Error('product not found');
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...data
    }
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return {id}
  }

}

module.exports = ProductsService
