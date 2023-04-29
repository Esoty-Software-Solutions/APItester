const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// `
// "username": "string",
//   "password": "string",
//   "firstName": "string",
//   "secondName": "string",
//   "thirdName": "string",
//   "lastName": "string",
//   "phoneNumber": "string",
//   "email": "user@example.com",
//   "subscriberId": "string",
//   "doctorId": "string",
//   "institutionId": "string",
//   "pharmacyId": "string",
//   "laboratoryId": "string",
//   "ImagingCenterId": "string",
//   "auxiliaryCenterId": "string"
// `
function createRandomUser() {
  return {
    //   _id: faker.database.mongodbObjectId(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    secondName: faker.name.firstName(),
    thirdName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    //   phoneNumber:faker.phone.number() ,
    phoneNumber: faker.datatype.number({ min: 1111111111 }),
    email: faker.internet.email(),
    subscriberId: faker.database.mongodbObjectId(),
    doctorId: faker.database.mongodbObjectId(),
    institutionId: faker.database.mongodbObjectId(),
    pharmacyId: faker.database.mongodbObjectId(),
    laboratoryId: faker.database.mongodbObjectId(),
    ImagingCenterId: faker.database.mongodbObjectId(),
    auxiliaryCenterId: faker.database.mongodbObjectId(),
  };
}

module.exports = createRandomUser