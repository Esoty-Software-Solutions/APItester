const { faker } = require('@faker-js/faker');
faker.setLocale('ar')


// {
//   "deviceToken": "string",
//   "deviceType": "android",
//   "payload": {
//     "title": "string",
//     "body": "string",
//     "clickAction": "string",
//     "iconURL": "string",
//     "data": {}
//   }
// }
function createRandomDevice() {
    return {
    //   _id: faker.datatype.uuid(),
    deviceToken,
    deviceType,
    payload:{
      title,
      body,
      clickAction,
      iconURL,
      data:{}
    }

    };
  }

  module.exports = createRandomDevice