const axios = require('../../services/api');
const {center} =require('../../validators/medicalCenter.validator')
const geteDoctor =(id) => {
    it('should get medical center data', async () => {
      const res = await axios.get(`medicalCenters/${id}`);
      expect(res.status).toBe(200);
      await center.validateAsync(data)    
    });
  }

  module.exports = geteDoctor