const axios = require('../../services/api');
const createRandomUser = require('../../faker/createRandomUser')
const fs = require('fs')

let user = createRandomUser()

const createUser =() => {
    it('should create user', async () => {
        try {
            console.log(user);
            const res = await axios.post(`users`,user );
            expect(res.status).toBe(201);
        } catch (error) {
            console.log(error);
        }
     
    });
  }

  module.exports = createUser