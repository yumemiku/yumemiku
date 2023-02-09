//Change the below number to set your temperature in kelvin.
kelvin = prompt("Enter value");
const resultstext = document.getElementById("results")
console.log(resultstext)
//Celsius is always (constantly) 273 degrees less than Kelvin
const celsius = kelvin - 273;
//Below is the equation for converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//We will need to round down the temperature so that we don't get a decimal
fahrenheit = Math.floor(fahrenheit);
//This will be the first line
resultstext.innerHTML += `If the temperature is ${kelvin} degrees Kelvin, then:<br>`;
//Temperature in Fahrenheit
resultstext.innerHTML +=`The temperature is ${fahrenheit} degrees Fahrenheit.`+ "<br>";
//Temperature in Celsius
resultstext.innerHTML +=`The temperature is ${celsius} degrees Celsius.`+ "<br>";
//Extra: converting to Newton
let newton = celsius * (33/100);
//We will need to round down the temperature so that we don't get a decimal
newton = Math.floor(newton);
//Temperature in Newton
resultstext.innerHTML +=`The temperature is ${newton} degrees Newton.`+ "<br>";
