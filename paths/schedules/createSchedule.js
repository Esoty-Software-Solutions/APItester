const axios = require('../../services/api');
const createSchedules = require('../../faker/createRandomSchedules')
let schedule = createSchedules()
const createSchedule =() => {
    it('should create a schedule', async () => {
      const res = await axios.post(`schedules`,schedule);
      expect(res.status).toBe(201);        
    });
  }

  module.exports = createSchedule