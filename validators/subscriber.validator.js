const Joi = require('joi')

const beneficiary = Joi.object({
  _id: Joi.string(),
  firstName: Joi.string(),
  secondName:Joi.string(),
  thirdName:Joi.string(),
  lastName: Joi.string(),
  birthdate :Joi.string(),
  relationshipToSubscriberId: Joi.any(),
  phoneNumber:Joi.number(),
  medicalFileId:Joi.string().allow(null),
  // institutionId: Joi.string(),Joi.string().allow(null)
  gender:  Joi.object({
    _id: Joi.string(),
    backendName: Joi.string(),
    arabicName: Joi.string(),
    englishName: Joi.string(),
  }),
  city:  Joi.object({
    _id: Joi.string(),
    backendName: Joi.string(),
    arabicName: Joi.string(),
    englishName: Joi.string(),
  }),
}).unknown(true);

  const subscriber = Joi.object({
    _id: Joi.string(),
    firstName: Joi.string(),
    secondName:Joi.string(),
    thirdName:Joi.string(),
    lastName: Joi.string(),
    birthdate :Joi.string(),
    phoneNumber:Joi.number(),
    institution:Joi.any(),
    gender:  Joi.object({
      _id: Joi.string(),
      backendName: Joi.string(),
      arabicName: Joi.string(),
      englishName: Joi.string(),
    }),
    // institutionId: Joi.string(),
    city:  Joi.object({
      _id: Joi.string(),
      backendName: Joi.string(),
      arabicName: Joi.string(),
      englishName: Joi.string(),
    }),
    beneficiaries:Joi.array().items(beneficiary)
}).unknown(true);


const subscribers = Joi.array().items(subscriber)

module.exports = {subscriber,subscribers,beneficiary}