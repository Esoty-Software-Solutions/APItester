const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// `
// name *
// string

// cityId *
// string($uuid)

// description
// string

// address
// string

// phoneNumber *
// array

// email
// string($email)

// facebookLink
// string

// googleMapLink
// string

// website
// string

// file
// array
// `
function createRandomMedicalCenter() {
    return {
    //   _id: faker.datatype.uuid(),
      name:faker.internet.fullName(),
      cityId:faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      phoneNumber: faker.datatype.number({ min: 1111111111 }),
      description: faker.lorem.text(),
      address:faker.address.streetAddress(),
      facebookLink:faker.internet.url(),
      googleMapLink:faker.internet.url(),
      website:faker.internet.url(),
      file:[faker.internet.avatar()]
    };
  }

  module.exports = createRandomMedicalCenter