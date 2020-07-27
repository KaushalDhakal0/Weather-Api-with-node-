const request = require('request');

const dotenv = require("dotenv").config();
const address = process.argv[2];

const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metrics&appid=${process.env.API_KEY}`;

if (!address){
    return console.log("please enter name and country of city");
}
request(url , (error , response, body) =>{

    const data = JSON.parse(body);
   // console.log(`It's ${data.main.temp} outside`);
  // console.log(data);
    console.log(` the temperature in ${address} is ${data.main.temp} and humidity is ${data.main.humidity}`);
    

});