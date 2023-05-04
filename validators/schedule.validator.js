const Joi = require('joi')
// {
//   "_id": "string",

//   "medicalCenter": "?",
//   "doctor": "?",

//   "timeSlot": { },

//   "monday": false,
//   "tuesday": false,
//   "wednesday": false,
//   "thursday": false,
//   "friday": false,
//   "saturday": false,
//   "sunday": false,
//   "price": 0,
//   "startDate": "2019-05-17",
//   "endDate": "2019-05-17",
//   "isActive": false
//   }
  const schedule = Joi.object({
    _id: Joi.string().required(),
    timeSlot:Joi.any(),
    doctor:Joi.any(),
    medicalCenter:Joi.any(),
    name: Joi.string(),
    monday:Joi.string(),
    tuesday:Joi.string(),
    thursday: Joi.string(),
    friday:  Joi.string(),
    saturday: Joi.string(),
    sunday : Joi.string(),
    price:Joi.number(),
    startDate:Joi.string(),
    endDate:Joi.string(),
    isActive:Joi.string(),
}).unknown(true);
const schedules = Joi.array().items(schedule)

module.exports = {schedule,schedules}