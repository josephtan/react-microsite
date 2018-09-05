/**
 * Created by Joseph Tan on 30/07/2018.
 */
var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: "/src/data/",
    /* other custom settings */
});

module.exports = axiosInstance;