const axios = require('../../services/api');
const {subscriber} = require('../../validators/subscriber.validator')

const getSubscriber =(id) => {
    it('should get all subscribers', async () => {
      const res = await axios.get(`subscribers/${id}`);
      const {data} = res.data
      expect(res.status).toBe(200);        
      await subscriber.validateAsync(data) 
    });
  }

  module.exports = getSubscriber