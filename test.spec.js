
const axios = require('axios');

let url = 'https://testdalil.onrender.com/v1'
// let url ='http://dalildev.esoty.ca/v1'
let user = require('./data/user.json')
const logintests = require('./paths/users/login');
const getUsers = require('./paths/users/getUsers')
const createUser = require('./paths/users/createUser')

// users tests
describe('POST /login',logintests );
describe('POST /users',createUser );
describe('GET /user',getUsers );