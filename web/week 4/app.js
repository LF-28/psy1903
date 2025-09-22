// Part 1. Functions
/* let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(0, 100);

console.log(num1);
console.log(num2);

displayRandomNumber();

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

function displayRandomNumber() {
    alert(getRandomNumber(1, 10));
}
 */

//loops
/* let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
let namesThatStartWithA = [];

for (let name of names) {
    if (name.charAt(0) == 'A') {
        namesThatStartWithA.push(name);
    }
}


console.log(namesThatStartWithA) */

//Pt. 4 Numerical for loops
/* for (let i = 0; i < 3; i++) {

} */

//Pt.5 Objects
// let participantA = ['Alice', 21, true];
// let participantB = {
//     name: 'Alice',
//     age: 21,
//     consent: true
// };
// participantB.consent = false;
// participantB.startTine = '2:00pm';
// delete participantB.age;
// console.log(participantB);

// if (participantA[2]) {
//     //..
// }

// if (participantB.consent) {
//     //...
// }
let person = {
    // Strings
    firstName: 'Elliot',
    lastName: 'Brown',

    // Number
    age: 30,

    // Array
    hobbies: ['reading', 'gaming', 'hiking'],

    // Nested Object
    address: {
        street: '324 Western Ave',
        city: 'Cambridge',
        zipCode: '02139'
    },

    // Functions
    // Observe how the keyword *this* is used in functions to reference other properties within this object
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    greet: function () {
        return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    },

    getAddress: function () {
        return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
    },

    getHobbies: function () {
        return `My hobbies include ${this.hobbies.join(', ')}`;
    }
};

console.log(person.getAddress());

