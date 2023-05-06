const Joi = require('joi')

// {
//   "_id": "string",
//   "firstName": "string",
//   "secondName": "string",
//   "thirdName": "string",
//   "lastName": "string",
//   "specialty": {
//   "_id": "string",
//   "backendName": "string",
//   "arabicName": "string",
//   "englishName": "string"
//   },
//   "level": {
//   "_id": "string",
//   "backendName": "string",
//   "arabicName": "string",
//   "englishName": "string"
//   },
//   "gender": {
//   "_id": "string",
//   "backendName": "string",
//   "arabicName": "string",
//   "englishName": "string"
//   },
//   "birthdate": "2019-05-17"
//   }

  const doctor = Joi.object({
    _id: Joi.string().required(),
    firstName: Joi.string(),
    secondName:Joi.string(),
    thirdName:Joi.string(),
    lastName: Joi.string(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    specialty:  Joi.object({
      _id: Joi.string(),
      backendName: Joi.string(),
      arabicName: Joi.string(),
      englishName: Joi.string(),
    }),
    level:  Joi.object({
      _id: Joi.string(),
      backendName: Joi.string(),
      arabicName: Joi.string(),
      englishName: Joi.string(),
    }),
    gender:  Joi.object({
      _id: Joi.string(),
      backendName: Joi.string(),
      arabicName: Joi.string(),
      englishName: Joi.string(),
    }),
    birthdate : Joi.string(),
}).unknown(true);
const doctors = Joi.array().items(doctor)

module.exports = {doctor,doctors}