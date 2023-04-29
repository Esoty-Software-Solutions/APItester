const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// {
//   "medicalCenterId": "string",
//   "doctorId": "string",
//   "timeSlotId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//  monday: true,
//   tuesday: true,
//   wednesday: true,
//   thursday: true,
//   friday: true,
//   saturday: true,
//   sunday: true,
//   "price": 0,
//   "startDate": "2019-05-17",
//   "endDate": "2019-05-17"
// }

function createRandomMedicalCenter() {
  return {
    medicalCenterId: faker.database.mongodbObjectId(),
    doctorId: faker.database.mongodbObjectId(),
    timeSlotId: faker.database.mongodbObjectId(),
    monday: faker.datatype.boolean(),
    tuesday: faker.datatype.boolean(),
    wednesday: faker.datatype.boolean(),
    thursday: faker.datatype.boolean(),
    friday: faker.datatype.boolean(),
    saturday: faker.datatype.boolean(),
    sunday: faker.datatype.boolean(),
    price: faker.datatype.number({ min: 20, max:100 }),
    startDate:faker.date.future(),
    endDate:faker.date.future(),
  };
}

module.exports = createRandomMedicalCenter