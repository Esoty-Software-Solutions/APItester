const axios = require('../../services/api');
const createRandomUser = require('../../faker/createRandomUser')

let user = createRandomUser()

const createUser =() => {
    it('should create user', async () => {
            const res = await axios.post(`users`,user );
            expect(res.status).toBe(201);
    });
  }

  module.exports = createUser