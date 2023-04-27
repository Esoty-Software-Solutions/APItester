
const axios = require('axios');

let url = 'https://testdalil.onrender.com/v1'
// let url ='http://dalildev.esoty.ca/v1'
let user = require('./data/user.json')
const {createRandomUser} = require('./faker');
const logintests = require('./users/login');
const getUsers = require('./users/getUsers')
describe('POST /user',logintests );


describe('GET /user',getUsers );