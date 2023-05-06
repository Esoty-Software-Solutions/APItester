const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// {
//   "_id": "string",
//   "appointmentStatusId": "187eb015-ba30-4000-8f8a-44f89c344801",
//   "timeSlotId": "187eb015-ba30-4000-85e8-cd6d0d3a0401",
//   "appointmentDate": "2019-05-17"
// }
function updateRandomAppointmentStatus() {
  return {
    _id: faker.database.mongodbObjectId(),
    appointmentStatusId: faker.database.mongodbObjectId(),
    timeSlotId: faker.database.mongodbObjectId(),
    appointmentDate:faker.date.future(),
  };
}

module.exports = updateRandomAppointmentStatus