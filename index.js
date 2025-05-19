function convertToCelsius (Fahrenheit) {
  return (Fahrenheit-32) * 5/9;
}

function describeTemperature (Celsius) {
   if (Celsius < 0) {
    return `Very Cold`;
   }
   else if (Celsius < 20) {
    return `Cold`;
   }
   else if (Celsius < 30) {
    return `Warm`;
   }
   else if (Celsius < 40) {
    return `Hot`;
   }
   else if (Celsius >= 40) {
    return `Very Hot`;
   }
}

const userInputFahrenheit = prompt(`Provide a tempurature in Fahrenheit`);
const celsius = convertToCelsius(userInputFahrenheit)
const description = describeTemperature(celsius);
alert(`It is ${celsius}C, which is ${description}!`);

// console.log (convertToCelsius(0));
// console.log (describeTemperature(45))