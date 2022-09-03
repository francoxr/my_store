const { faker } = require('@faker-js/faker');

class UsersService {

  constructor(){
    this.users = []
    this.generate();
  }

  generate() {
    const limit = 10;

    for (let index = 0; index < limit; index++) {
        this.users.push({
          id: faker.datatype.uuid(),
          name: faker.name.firstName("male"),
          last_name: faker.name.lastName("female"),
          active: faker.datatype.boolean()
        })
    }
  }

  get(limit, offset){
    if (limit && offset){
      return this.users.slice(offset,this.users.length).slice(0,limit)
    } else if (offset) {
      return this.users.slice(offset,this.users.length)
    } else if (limit) {
      return this.users.slice(0,limit)
    } else {
      return this.users
    }
  }

  getOne(id){
    return this.users.find(item => item.id === id);
  }


}

module.exports = UsersService
