const axios = require('../../services/api');
const createDoctors = require('../../faker/createRandomDoctor')
let doctor = createDoctors()
const createDoctor =() => {
    it('should create a doctor', async () => {
      const res = await axios.post(`doctors`,doctor);
      expect(res.status).toBe(201);        
    });
  }

  module.exports = createDoctor