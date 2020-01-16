const request = require('request');
const breed = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2]


request(breed, function (error, response, body) {
  const data = JSON.parse(body)[0]; // body is printed out as array that contains object so we need to select first item in array
  if (data !== undefined) {
    console.log(data.description); 
  } else {
    console.log(`Breed ${process.argv[2]} was not found`);
  }
});
