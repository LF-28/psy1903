//Q2
// function celsiusToFahrenheit(celsius) {

//     celsiusToFahrenheit = (celsius * 1.8) + 32
//     return celsiusToFahrenheit
// };
// console.log(celsiusToFahrenheit(10));

//Q3

// function convertTemp(temp, convertTo) {
//     if (convertTo == 'c') {
//         let convertTemp = (temp - 32) / 1.8;
//         return convertTemp
//     } else {
//         (temp * 1.8) + 32
//         return convertTemp
//     }

// }


//Q4
let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
let getWordLength = [];
function getWordLengths(words) {
    for (let word of words) {
        getWordLength.push(word.length)
    } return getWordLength
};

console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]

