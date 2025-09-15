alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can."

)
let math1 = Math.floor(Math.random() * 10) + 1
let math2 = Math.floor(Math.random() * 10) + 1
let start1 = Date.now()
let answer1 = prompt('What is ' + math1 + '+' + math2);
console.log(answer1);
let end1 = Date.now()
responseTime1 = (end1 - start1) / 1000;

alert("you answered " + answer1 + "in " + responseTime1 + "seconds");

let start2 = Date.now()
math1 = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
let answer2 = prompt('What is ' + math1 + '+' + math2);
console.log(answer2);
let end2 = Date.now()
responseTime2 = (end2 - start2) / 1000;

alert("you answered " + answer2 + "in " + responseTime2 + "seconds");

let start3 = Date.now()
math1 = Math.floor(Math.random() * 10) + 1
math2 = Math.floor(Math.random() * 10) + 1
let answer3 = prompt('What is ' + math1 + '+' + math2);
console.log(answer3);
let end3 = Date.now()
responseTime3 = (end3 - start3) / 1000;

alert("you answered " + answer3 + "in " + responseTime3 + "seconds");




