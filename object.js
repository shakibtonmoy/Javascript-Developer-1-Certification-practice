// Module: Given a business requirement, apply fundamentals of object implementation to solve the business requirement.

/*
BASIC POINTS:
1. In js objects are passed by reference while primitives are passed by values
*/

let user = Object.create({});
user.firstName = 'Shakib';
user.lastName = 'Tonmoy';

console.log(user);


/*
# There are three ways to traverse object
    1. For...in loop
    2. Object.keys(o)
    3. Object.getOwnPropertyNames(o)

# The this keyword can be used within an object method to refer the properties of current object
*/

let user2 = {
    firstName: 'Shakib',
    lastName: 'Tonmoy',
    age: 28,
    company: 'BJIT Limited',
    greeting(greet){
        return `Good ${greet}!`;
    }
}

for(let prop in user2){
    console.log(prop, user2[prop]);
}

console.log(Object.keys(user2));
console.log(Object.getOwnPropertyNames(user2));
console.log(user2.greeting('Morning'));

/*
# A getter can be used to get the value of a property
# A setter can be used to set the value to a property
*/

let scores = {
    quiz: 'Quiz 1',
    scores: [10,20,30,40,50,60,70,80,90,100],

    get average(){
        return this.scores.reduce((sum, number) => sum+number, 0) / this.scores.length;
    },
    set score (score){
        this.scores.push(score);
    }
}

console.log(scores.average);
scores.score = 110;
scores.score = 120;
console.log(scores.average);

/*
Javascript can receive any number of arguments in a function. They are automatically captured in arguments variable
*/

function getAverage(){
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(getAverage(1,2,3,4,5,6,7,8,9,10));

/*
The object class provides access to various static and instance methods. Some of them are:
1. assign: This static method is used to copy all enumerable own properties from one or more objects to target object
2. entries: Can be used to get all key-value pairs of an object
3. values: Can be used to get an array of all values
4. defineProperties: can be used add/modify properties
5. Freezes: freezes an object such that changes can no longer be made to it
*/
