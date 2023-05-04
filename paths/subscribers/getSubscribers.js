const axios = require('../../services/api');
const {subscribers} = require('../../validators/subscriber.validator')
const getSubscribers =() => {
    it('should get all subscribers', async () => {
      const res = await axios.get(`subscribers`);
      expect(res.status).toBe(200);
      expect(res.data?.data).toHaveProperty('objectArray');
      let {objectArray} = res.data?.data
      await subscribers.validateAsync(objectArray)        
    });
  }

  module.exports = getSubscribers