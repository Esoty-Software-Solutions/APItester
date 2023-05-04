const axios = require('../../services/api');
const {doctors} =require('../../validators/doctor.validator')
const geteDoctors =() => {
    it('should get all doctors', async () => {
      const res = await axios.get(`doctors`);
      expect(res.status).toBe(200);
      expect(res.data?.data).toHaveProperty('objectArray');
      let {objectArray} = res.data?.data
      await doctors.validateAsync(objectArray)        
    });
  }

  module.exports = geteDoctors