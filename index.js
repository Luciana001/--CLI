#!/usr/bin/env node
const axios = require('axios').default;

const{getCode} = require('country-list');

var myArgs = process.argv.slice(2); //récupere la valeur du terminal

console.log('my Args:', myArgs);

var code = getCode(myArgs[0]);
//var year = myArgs[0]+'/';


axios.get("https://date.nager.at/api/v2/PublicHolidays/2021/"+code)
  .then(function (response) {
    console.log(response.data);
})
    .catch(function (error) {
        console.log(error);
    });

