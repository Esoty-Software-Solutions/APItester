const axios = require('../../services/api');
const createSubscribers = require('../../faker/createRandomSubscriber')
let subscriber = createSubscribers()
const createSubscriber =() => {
    it('should create a subscriber', async () => {
      const res = await axios.post(`subscribers`,subscriber);
      expect(res.status).toBe(201);        
    });
  }

  module.exports = createSubscriber