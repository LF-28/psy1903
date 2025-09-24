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
// let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
// let getWordLength = [];
// function getWordLengths(words) {
//     for (let word of words) {
//         getWordLength.push(word.length)
//     } return getWordLength
// };

// console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5]

//Q5

// let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

// function getLongestWord(words) {
//     let longestWord = ""
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;

//         }
//     }
//     return longestWord

// }

// console.log(getLongestWord(words)); // Expected output: banana

//Q6

// function getOddNumbers(numbers) {
//     let results = []
//     for (let number of numbers) {
//         if (number % 2 != 0) {
//             results.push(number);
//         }
//     } return results
// }
// console.log(getOddNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5]
// console.log(getOddNumbers([12, 45, 10, 11, 61])); // Expected output: [45, 11, 61]

//Q7
// function filterNumbers(numbers, evenOrOdd) {
//     let results = []
//     for (let number of numbers) {
//         if (evenOrOdd == 'even') {
//             if (number % 2 == 0) {
//                 results.push(number);
//             }
//         } else if (evenOrOdd == 'odd') {
//             if (number % 2 != 0) {
//                 results.push(number);
//             }
//         }
//     } return results
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 'even')); // Expected output: [2, 4]
// console.log(filterNumbers([1, 2, 3, 4, 5], 'odd')); // Expected output: [1, 3, 5]
// console.log(filterNumbers([45, 10, 11, 61], 'even')); // Expected output: [10]
// console.log(filterNumbers([45, 10, 11, 61], 'odd')); // Expected output: [45, 11, 61]


//Q8
alert("Welcome to the even/odd response time task. You are about to see a series of numbers. If the number you see is EVEN, type the letter 'e'.  If the number you see is odd, type the letter 'o'.  Please answer as quickly and accurately as possible.")
results = []
for (let i = 0; i < 5; i++) {
    let num1 = getRandomNumber(1, 10);
    let start = Date.now();
    let response = prompt(`Is ${num1} even or odd? Press e for even and o for odd`);
    let end = Date.now();
    let responseTime = (end - start) / 1000;
    let expected = ""
    if (num1 % 2 == 0) {
        expected = 'e';
    } else {
        expected = 'o';
    }
    let correct = (response == expected);
    trial = {
        number: num1,
        response: response,
        correct: correct,
        responseTime: responseTime,

    };
    results.push(trial);
}

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
};

console.log(results); 