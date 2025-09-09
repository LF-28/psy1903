
// Define a varibale to hold our experiment name
let experiment = "Stroop";
let welcomeMessage = `
Welcome to our ` + experiment + `experiment! 
Please read the instructions carefully!
`;

// console.log(welcomeMessage);
// console.log(typeof experiment); //string
// console.log(experiment.charAt(0)); //S

let trialCountMax = 20;
console.log(typeof trialCountMax); //number
// TODO: Randomize colors
let colors = ['red', 'green', 'blue'];

// alert('Welcome to the' + experiment + 'experiment!');

//trialCountMax = 40;

// At the halfway point we will display a pause screen
let halfwayCount = trialCountMax / 2;

// console.log(halfwayCount); // Expected: 20

/* 
multiline comment
*/

let correct = true;
console.log(typeof correct); //boolean values either true or false, help with conditions

console.log(10.15) //false

// let answer1 = prompt('What is 1+1');
// console.log(answer1);

// let answer2 = prompt('What is 9+1');
// console.log(answer2);


let courseName = 'Programming for Psychologists';
console.log(courseName.toUpperCase());
console.log(courseName.indexOf("Psychologists")); // 16
console.log(courseName.replace("Programming", "Coding"));