const axios = require('../../services/api');
const {users} = require('../../validators/user.validator')
const Joi = require('joi')
const getUsers =() => {
    it('should get all users', async () => {
      const res = await axios.get(`users`);
      expect(res.status).toBe(200);
      expect(res.data?.data).toHaveProperty('objectArray');
      let {objectArray} = res.data?.data
      // expect(objectArray).toEqual(await users.validateAsync(objectArray))
      await users.validateAsync(objectArray)
        
    });
  }

  module.exports = getUsers