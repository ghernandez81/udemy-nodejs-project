const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=85310f941c9e13785a8f0911bce69d50&query=45,-75&units=m';

const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();

  });
  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('And Error', error);
});

request.end();