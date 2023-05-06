
const axios = require('axios');

let url = 'https://testdalil.onrender.com/v1'
// let url ='http://dalildev.esoty.ca/v1'
let user = require('./data/user.json')
const logintests = require('./paths/users/login');
const getUsers = require('./paths/users/getUsers')
const createUser = require('./paths/users/createUser')
const createSubscriber = require('./paths/subscribers/createSubscriber')
const createDoctor = require('./paths/doctors/createDoctor')
const getDoctors = require('./paths/doctors/getDoctors')
const getSubscribers = require('./paths/subscribers/getSubscribers')
const createMedicalCenter = require('./paths/medical-centers/createMedicalCenter')
const getMedicalCenters = require('./paths/medical-centers/getMedicalCenters')
const createSchedule = require('./paths/schedules/createSchedule')
const requestAppointment = require('./paths/booking/requestAppointment')
const updateAppointmentStatus = require('./paths/booking/updateAppointmentStatus')

// 1.	Create User 1
// 2.	Login
// 3.	List users
describe('POST /login',logintests );
// describe('POST /users',createUser );
// describe('GET /user',getUsers );


// 4.	Create get subscribers 
// describe('POST /subscribers', createSubscriber );
describe('GET /subscribers', getSubscribers );

// 5.	Create get medical center 
// describe('POST /medicalCenters', createMedicalCenter );
describe('GET /medicalCenters', getMedicalCenters );

// 6.	Create get doctors 
// describe('POST /doctors', createDoctor );
describe('GET /doctors', getDoctors );

// 7.	Create schedule 
// describe('POST /schedules',createSchedule );


// 8.	Request appointment 
// describe('POST /appointments',requestAppointment );

// 9.	Update appointment status
// describe('POST /appointments',updateAppointmentStatus );

