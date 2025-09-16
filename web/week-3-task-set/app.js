/* //Identify elements on the page we will update
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

//Generate random numbers to display on page load
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

//Update elements on page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2; */

/* let response = prompt('What is your name?');
let count = response.length;
let firstLetter = response.charAt(0);
let lastLetter = response.charAt(count - 1);
console.log(response.charAt(count - 1)); */

/* let age = 20;
if (age == 25) {
    console.log("Age is 25");
}

let a = 5;
let b = 10;
console.log(a > 3 && b < 15);
 */

/* let over18 = false;
let hasGuardianApproval = true;
console.log(over18 || hasGuardianApproval); */

/* let count = 8;
console.log(count % 2 == 0); */


let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = num1 + num2

let response = prompt('What is ' + num1 + '+' + num2 + '?');

let feedback = '';

if (response == correctAnswer) {
    feedback = 'Correct!';
} else if (response == correctAnswer - 1 || response == correctAnswer + 1) {
    feedback = 'You were close!';
} else {
    feedback = 'Incorrect.';
}

alert(feedback + ' The expected answer is ' + correctAnswer + '.');


