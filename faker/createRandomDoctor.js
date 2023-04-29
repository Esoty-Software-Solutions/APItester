const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// {
//   "firstName": "string",
//   "secondName": "string",
//   "thirdName": "string",
//   "lastName": "string",
//   "specialtyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "levelId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "genderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "birthdate": "2019-05-17"
// }
function createRandomDoctor() {
  return {
    firstName: faker.name.firstName(),
    secondName: faker.name.firstName(),
    thirdName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    specialtyId: faker.database.mongodbObjectId(),
    levelId: faker.database.mongodbObjectId(),
    genderId: faker.database.mongodbObjectId(),
    birthdate :faker.date.birthdate({ min: 1, max: 65, mode: 'age' }),
  };
}

module.exports = createRandomDoctor