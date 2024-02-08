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

