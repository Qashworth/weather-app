const request = require('request');

let apiKey = 'd2f498f92de957b1e2f1b4ae45e2eee5';
let city = 'baltimore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
