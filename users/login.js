const axios = require('../services/api');
let user = require('../data/user.json')

const logintests =() => {
    it('should login user', async () => {
      const res = await axios.post(`login`,user );
      let token = res.data.token
      expect(res.status).toBe(200);
      axios.defaults.headers.common['Authorization'] = token;
    });
  }

  module.exports = logintests