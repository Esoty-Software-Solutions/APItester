const axios = require('axios');
const api =  axios.create({
    baseURL: `https://testdalil.onrender.com/v1/`,
    // headers: {
    //   Authorization: `Bearer ${}`
    // }
  })



module.exports = api