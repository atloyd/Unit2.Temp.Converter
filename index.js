//Temp Converter

let userInput = prompt(
    "Please enter the temperature you would like to convert: ",
    "75"
  );
  
  function convertToCelsius(fahrenheit) {
    const tempCelsius = (fahrenheit - 32) * (5 / 9);
    return Math.floor(tempCelsius);
  }
  
  function convertToKelvin(celsius) {
    const tempKelvin = celsius + 273.15;
    return Math.floor(tempKelvin);
  }
  
  console.log(
    `Your temperature converted to Celsius is: ${convertToCelsius(userInput)}`
  );
  console.log(
    `Your temperature converted to Kelvin is: ${convertToKelvin(
      convertToCelsius(userInput)
    )}`
  );