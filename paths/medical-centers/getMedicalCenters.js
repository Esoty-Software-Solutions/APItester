const axios = require('../../services/api');
const {centers} =require('../../validators/medicalCenter.validator')
const getMedicalCenters =() => {
    it('should get all medical centers', async () => {
      const res = await axios.get(`medicalCenters`);
      expect(res.status).toBe(200);
      expect(res.data?.data).toHaveProperty('objectArray');
      let {objectArray} = res.data?.data
      await centers.validateAsync(objectArray)        
    });
  }

  module.exports = getMedicalCenters