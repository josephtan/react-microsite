/**
 * Created by Joseph Tan on 30/07/2018.
 */
let basePath ="/projects/react-test";
let axios = require("axios");


let axiosInstance = axios.create({
    baseURL: basePath + "/data/"
});



module.exports = {
    axiosInstance: axiosInstance,
    basePath: basePath
};
