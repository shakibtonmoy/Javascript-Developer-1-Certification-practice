/*
Given a JavaScript decorator, give examples of how to use the decorator.
*/
/*
Decorator can be used to extend the behavior of another function. 
It receives the original function as a parameter & returns another function
*/

//original function
function displayName(name){
    console.log(name);
}

//decorator function
function displayNameWithDecorator(fn){
    return function(name){
        console.log(name);
        nameWithDecorator = `My name is ${name}`;
        fn(nameWithDecorator);
    }
}

const myName = displayNameWithDecorator(displayName);
myName('Shakib Jahan Tonmoy');

//This example shows two functions using same decorator

function printName(name){
    console.log(name);
}

function printAge(age){
    console.log(age);
}

function printNameOrAgeWIthDecorator(fn){
    return function (...args){
        fn(...args);
    }
}

let showName = printNameOrAgeWIthDecorator(printName);
let showAge = printNameOrAgeWIthDecorator(printAge);

showName('My name is Shakib Jahan Tonmoy');
showAge('I am 28 years old');


/* Although higher order function can serve as a decorator function to extend javascript function,
the same can't be used to extend class and methods.
To achieve similar things, we need to pass the object and function  to decorator function and use call() method to call the class method.
*/

class User{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    getUser(){
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
}

//decorator function
function getUserDecorator(obj, fn){
    return function(){
        let val = fn.call(obj);
        return val;
    }
}

let o = new User('Shakib', 28);
//object is passed while calling decorator function
let userDecorator = getUserDecorator(o, o.getUser);

console.log(userDecorator());

/*
The decorator syntax can be used to decorate classes and class methods. The method or class is prefixed with @nameOfDecorator.
1. Decorating class method: The decorator receives three parameters. 
    i. target: refers to the object of the class containing method
    ii. name: refers to the name of the class method
    iii. descriptor: provides access to the decorated method via its value property
2. The decorator receives only the target parameter which refers to the object passed to the decorator.
*/
// @getStudentDecorator
// class Student{
//     constructor(name, grade){
//         this.name = name;
//         this.grade = grade;
//     }

//     // @getStudentDecorator
//     getStudent(){
//         console.log(this);
//     }
// }

// getStudentDecorator(target) {
//     console.log('here');
//     return descriptor;
// }


// let s1 = new Student('Shakib', 3.60);
//// s1.getStudent();


//caching using decorator

function displayNumber(num){
    console.log(`${num} from displayNumber function`);
}

function displayNumberDecorator(fn){
    let numbers = new Array();

    return function(num){
        if(numbers.includes(num)){
            console.log(`${num} from cache`);
        }else{
            numbers.push(num);
            fn(num);
        }
    }
}

let display = displayNumberDecorator(displayNumber);

display(1);
display(1);