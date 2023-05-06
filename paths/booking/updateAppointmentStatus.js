// /appointments/{appointmentId}

const axios = require('../../services/api');
const updateRandomAppointmentStatus = require('../../faker/updateRandomAppointmentStatus');
let appointmentStatus = updateRandomAppointmentStatus()
const updateAppointmentStatus =(id,RealAppointmentStatus) => {
    it('should create a appointment', async () => {
     let payload = RealAppointmentStatus ? RealAppointmentStatus : appointmentStatus
      const res = await axios.post(`appointments/${id}`,payload);
      expect(res.status).toBe(200);        
    });
  }

  module.exports = updateAppointmentStatus