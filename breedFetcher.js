// Takes in breedName from index.js and requests it from api.thecatapi

const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(URL, function(error, response, body) {
    const dataLength = JSON.parse(body).length;
    if (response.statusCode === 404) {
      callback('Request failed', null);
    } else if (response.statusCode === 200 && dataLength === 1) {
      const data = JSON.parse(body)[0]; // body is printed out as array that contains object so we need to select first item in array
      callback(null, data.description);
    } else {
      callback(null, 'Breed doesn\'t exist');
    }
  });
};



module.exports = { fetchBreedDescription };
