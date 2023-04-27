const axios = require('../services/api');

const getUsers =() => {
    it('should get all users', async () => {
      const res = await axios.get(`users`);
    //   console.log(  axios.defaults.headers);
      expect(res.status).toBe(200);
    //   let data = res.data
    //   console.log(res.data.data);
        
    });
  }

  module.exports = getUsers