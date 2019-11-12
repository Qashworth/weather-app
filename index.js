const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'd2f498f92de957b1e2f1b4ae45e2eee5';
let city = argv.c || 'baltimore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let message = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
