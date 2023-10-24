const convertToCelsius = function(fahrenheit) {
  
  // calculates according to formula
  convertedFahrenheit = (fahrenheit - 32) * (5/9);

  //rounds the output
  convertedFahrenheit = (Math.round(convertedFahrenheit * 10)) / 10;
  
  return convertedFahrenheit;
};

const convertToFahrenheit = function(celsius) {

  // calculates according to formula
  convertedCelsius = celsius * (9/5) + 32;

  // rounds the output
  convertedCelsius = (Math.round(convertedCelsius * 10)) / 10;

  return convertedCelsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
