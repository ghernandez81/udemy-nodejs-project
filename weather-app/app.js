const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');


const getWeather = (location) => {
  geocode(location, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return false;
    }

    forecast({ longitude, latitude }, (error, foreCaseData) => {
      if (error) {
        return false;
      }
      console.log(location)
      console.log(foreCaseData);
    });
  });
}
const [, , locationParam] = process.argv;
if (locationParam) {
  getWeather(locationParam);
} else {
  console.log('There is no input the hell are you doing idiot idiot')
}

