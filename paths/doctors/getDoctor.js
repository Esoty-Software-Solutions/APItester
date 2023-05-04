const axios = require('../../services/api');
const {doctor} =require('../../validators/doctor.validator')
const geteDoctor =(id) => {
    it('should get doctor data', async () => {
      const res = await axios.get(`doctors/${id}`);
      expect(res.status).toBe(200);
      await doctor.validateAsync(data)    
    });
  }

  module.exports = geteDoctor