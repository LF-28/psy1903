// Initialize an empty array you will populate with your conditions
let conditions = [];

for (let i = 0; i < 3; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 + num2
    let altAnswer = Math.floor(Math.random() * 20) + 1
    while (altAnswer === correctAnswer) {
        altAnswer = Math.floor(Math.random() * 20) + 1;
    } //AI showed me 'while' loops, which check to see if a condition is true, and if it is then it executes what's in the statement until it passes condition. the === checks two things to see if equal
    conditions.push({
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
        altAnswer: altAnswer
    })

}

// Output the resulting conditions array to make sure it is set up correctly
console.log(conditions);