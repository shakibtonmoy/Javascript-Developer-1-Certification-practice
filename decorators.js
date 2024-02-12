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