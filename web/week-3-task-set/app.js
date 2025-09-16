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

//Randomized Addition Quiz with correct/close/incorrect responses 
/* let num1 = Math.floor(Math.random() * 10) + 1;
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
 */


//Display alerts based on age
/* let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
else if (age < 18 && age >= 12) {
    alert('Teenager');
}
else (age >= 18) {
    alert('Adult');
} */

//Display if even or odd numbered entered
/* let number = prompt("Please enter a whole number");
if (number % 2 == 0) {
    alert("The number you entered was even")
} else {
    alert("The number you entered is odd.")
};  */

//Adding correct/incorrect to Math quiz
/* alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can."

)
let math1 = Math.floor(Math.random() * 10) + 1
let math2 = Math.floor(Math.random() * 10) + 1
let start1 = Date.now()
let answer1 = prompt('What is ' + math1 + '+' + math2);
console.log(answer1);
let end1 = Date.now()
responseTime1 = (end1 - start1) / 1000;
let correctAnswer = math1 + math2 //to evaluate if their response is correct to add to a conditional statement

if (answer1 == correctAnswer) {
    alert("you answered " + answer1 + "in " + responseTime1 + "seconds. You are CORRECT")
}
else { alert("you answered " + answer1 + "in " + responseTime1 + "seconds. You are INCORRECT") };

let start2 = Date.now()
math1 = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
correctAnswer = math1 + math2 //have it here again so it updates between trials
let answer2 = prompt('What is ' + math1 + '+' + math2);
console.log(answer2);
let end2 = Date.now()
responseTime2 = (end2 - start2) / 1000;
if (answer2 == correctAnswer) {
    alert("you answered " + answer2 + "in " + responseTime2 + "seconds. You are CORRECT.")
}
else { alert("you answered " + answer2 + "in " + responseTime2 + "seconds. You are INCORRECT.") };


let start3 = Date.now()
math1 = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
let answer3 = prompt('What is ' + math1 + '+' + math2);
correctAnswer = math1 + math2 
console.log(answer3);
let end3 = Date.now()
responseTime3 = (end3 - start3) / 1000;
if (answer3 == correctAnswer) {
    alert("you answered " + answer3 + "in " + responseTime3 + "seconds. You are CORRECT.")
}
else { alert("you answered " + answer3 + "in " + responseTime3 + "seconds. You are INCORRECT") };

 */
//Q11

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');
//Generate random numbers to display on page load
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
let start1 = Date.now()
let correctAnswer = randomNum1 + randomNum2

//Update elements on page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2;

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {
    let end1 = Date.now()
    responseTime1 = (end1 - start1) / 1000;
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let answer = form.elements['answer'].value;


    let resultsMessage = '';

    if (answer == correctAnswer) {
        resultsMessage = " You answered " + answer + " in " + responseTime1 + " seconds. You are CORRECT."
    }
    else { resultsMessage = "You answered " + answer + " in " + responseTime1 + " seconds. You are INCORRECT" };

    // Report the results
    results.innerHTML = resultsMessage;

    //How to hide content
    form.style.display = 'none';

});