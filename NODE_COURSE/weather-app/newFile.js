const request = require('request');
const { url } = require('./app');

request({ url: url, json: true }, (error, response) => {
    //   const data = JSON.parse(response.body)
    console.log(response.body.current);
});
