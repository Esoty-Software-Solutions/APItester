const axios = require('../../services/api');
const createCenter = require('../../faker/createRandomMedicalCenter')
let center = createCenter()
const createMedicalCenter =() => {
    it('should create a doctor', async () => {
      const res = await axios.post(`medicalCenters`,center);
      expect(res.status).toBe(201);        
    });
  }

  module.exports = createMedicalCenter