const Joi = require('joi')
// "_id": "string",
// "name": "string",
// "description": "string",
// "address": "string",
// "email": "user@example.com",
// "facebookLink": "string",
// "googleMapLink": "string",
// "website": "string",
// "thumbnailLink": "string",

// "fileLink": [
// "string"
// ]
// "phoneNumber": [
// "string"
// ],
// "city": {
// "_id": "string",
// "backendName": "string",
// "arabicName": "string",
// "englishName": "string"
// },
  const center = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string(),
    description:Joi.string(),
    address:Joi.string(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    facebookLink: Joi.string(),
    googleMapLink:  Joi.string(),
    website: Joi.string(),
    thumbnailLink : Joi.string(),
    fileLink:Joi.array().items(Joi.string()),
    phoneNumber:Joi.array().items(Joi.string()),
    city:Joi.object({
      _id: Joi.string(),
      backendName: Joi.string(),
      arabicName: Joi.string(),
      englishName: Joi.string(),
    })
}).unknown(true);
const centers = Joi.array().items(center)

module.exports = {center,centers}