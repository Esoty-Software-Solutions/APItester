// /subscribers/{subscriberId}/appointments

const axios = require('../../services/api');
const createAppointments = require('../../faker/createRandomAppointment');
let appointment = createAppointments()
const createAppointmen =(subscriberId,RealAppointment) => {
    it('should create a appointment', async () => {
     let payload =RealAppointment ? RealAppointment : appointment
      const res = await axios.post(`subscribers/${subscriberId}/appointments`,payload);
      expect(res.status).toBe(201);        
    });
  }

  module.exports = createAppointmen