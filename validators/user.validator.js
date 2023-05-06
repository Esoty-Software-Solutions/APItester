const Joi = require('joi')
  const user = Joi.object({
    // _id: Joi.string().required(),
    // username: Joi.string().required(),
    // password: Joi.string(),
    firstName:Joi.string().required(),
    // secondName: Joi.string(),
    // thirdName:Joi.string(),
    // lastName: Joi.string().required(),
    // phoneNumber:Joi.number().required(),
    email:Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    // subscriberId: Joi.string(),
    // doctorId: Joi.string(),
    // institutionId:Joi.string().allow(null),
    // pharmacyId: Joi.string().allow(null),
    // laboratoryId:Joi.string().allow(null),
    // ImagingCenterId:Joi.string(),
    // auxiliaryCenterId: Joi.string(),
}).unknown(true);
const users = Joi.array().items(user)

module.exports = {user,users}