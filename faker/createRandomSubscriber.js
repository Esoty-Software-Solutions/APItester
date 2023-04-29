const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// {
//   "firstName": "string",
//   "secondName": "string",
//   "thirdName": "string",
//   "lastName": "string",
//   "birthdate": "string",
//   "phoneNumber": "string",
//   "genderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "beneficiaries": [
//     {
//       "firstName": "string",
//       "secondName": "string",
//       "thirdName": "string",
//       "lastName": "string",
//       "birthdate": "2019-05-17",
//       "relationshipToSubscriberId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "genderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//     }
//   ],
//   "institutionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "cityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// }
function createRandomSubscriber() {
  return {
    firstName: faker.name.firstName(),
    secondName: faker.name.firstName(),
    thirdName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthdate :faker.date.birthdate({ min: 1, max: 65, mode: 'age' }),
    phoneNumber: faker.datatype.number({ min: 1111111111 }),
    genderId: faker.database.mongodbObjectId(),
    beneficiaries:createArray(2),
    institutionId: faker.database.mongodbObjectId(),
    cityId: faker.database.mongodbObjectId(),
  };
}

let createArray = (num)=>{
  let beneficiaries =[]
for (let index = 0; index < num; index++) {
  beneficiaries.push({
      firstName: faker.name.firstName(),
      secondName: faker.name.firstName(),
      thirdName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    birthdate :faker.date.birthdate({ min: 1, max: 65, mode: 'age' }),
    relationshipToSubscriberId: faker.database.mongodbObjectId(),
    genderId: faker.database.mongodbObjectId(),
  })
  
}
return beneficiaries
}

module.exports = createRandomSubscriber