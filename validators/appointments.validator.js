const Joi = require('joi')
const {schedule} = require('./schedule.validator')
const {beneficiary} = require('./subscriber.validator')

// {
//   "_id": "string",
//   "appointmentDate": "2019-05-17",
//   "appointmentStatus": { },

//   "timeSlot": { },
//   "beneficiary": {
//   "_id": "string",
//   "firstName": "string",
//   "secondName": "string",
//   "thirdName": "string",
//   "lastName": "string",
//   "birthdate": "2019-05-17",
//   "relationshipToSubscriber": { },
//   "gender": { },
//   "medicalFileId": "string"
//   },
//   "schedule": {
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
//   }}
  const appointment = Joi.object({
    _id: Joi.string().required(),
    appointmentDate: Joi.string(),
    appointmentStatus:Joi.any(),
    timeSlot:Joi.any(),
    beneficiary:beneficiary,
    schedule:schedule,    
}).unknown(true);
const appointments = Joi.array().items(appointment)

module.exports = {appointments,appointment}