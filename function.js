/*
Module: Given a business requirement, locate the best function implementation.
*/
/*
The main difference between function declarations and function expressions is that function declarations are hoisted. 
This means they are available at all times even if they are defined later in the code.  
*/



let name = 'Tonmoy';

function sum (num1, num2){
    console.log(`NAME: ${this}`)
    return num1 + num2;
}

const arr = [10, 20, sum];

let result = arr[2](arr[0], arr[1]);

console.log(result);

const greeting = (name) => {
    console.log('Global Name: ', this);
    return `Good Morning ${name} ${this.name}!`;
};

console.log(greeting('Shakib'));

// Higher Order Functions
// It return function as well

const subtractByFunction = (num) => {
    return num1 => num - num1;
}

console.log(subtractByFunction(5)(10));

const subtractFromNumber = subtractByFunction(10);
console.log(subtractFromNumber(5));


let start = document.getElementById('start');

let date = new Date();
let intro = "Today's date is";

function showDate(){
    console.log(`${intro} ${date}`);
}

start.addEventListener('click', showDate);

console.log('HERE');


// CLOSURE

function increase() {
    let counter = 0;
    return function (){
        counter++;
        console.log(counter);
        return counter;
    }
}
const add = increase();

add();
add();
add();
add();


/*
APPLY:
The apply() method invokes a function and assigns the object passed in to the keyword ‘this’. 
Arguments for the function are passed in as an array.
*/

/*
CALL:
The call() method invokes a function and assigns the object passed in to the keyword ‘this’. 
Arguments for the function are passed in as a comma separated list.
*/

/*
BIND:
The bind() method returns a new function. 
The object passed in is assigned to the keyword ‘this’ when that new function is invoked. 
Arguments may be bound to the new function as well.
*/

function morningGreet(punctuation){
    console.log(`Good Morning ${this.firstName}${punctuation}`);
}

function eveningGreet(punctuation){
    console.log(`Good Evening ${this.firstName}${punctuation}`);
}

const user1 = {
    firstName: 'Shakib'
}

const user2 = {
    firstName: 'Tonmoy'
}

morningGreet.apply(user1, ['!']);
morningGreet.call(user2, '!!');
eveningGreet.bind(user1, '.')();


//IIFE example
(function (a, b) {
    console.log(a+b);
    return a + b;
})(2, 3);