const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// {
//   "scheduleId": "string",
//   "beneficiaryId": "string",
//   "appointmentDate": "2019-05-17",
//   "appointmentStatusId": "187e4fca-5b70-4000-840a-5b9f76c20301",
//   "timeSlotId": "187e4fca-5b70-4000-8c39-dca281422b01"
// }

function createRandomMedicalCenter() {
  return {
    scheduleId: faker.database.mongodbObjectId(),
    beneficiaryId: faker.database.mongodbObjectId(),
    appointmentDate:faker.date.future(),
    appointmentStatusId: faker.datatype.mongodbObjectId(),
    timeSlotId: faker.datatype.mongodbObjectId(),
  };
}

module.exports = createRandomMedicalCenter