//Q2
// function celsiusToFahrenheit(celsius) {

//     celsiusToFahrenheit = (celsius * 1.8) + 32
//     return celsiusToFahrenheit
// };
// console.log(celsiusToFahrenheit(10));

//Q3

function convertTemp(temp, convertTo) {
    if (convertTo == 'c') {
        let convertTemp = (temp - 32) / 1.8;
        return convertTemp
    } else {
        (temp * 1.8) + 32
        return convertTemp
    }

}

