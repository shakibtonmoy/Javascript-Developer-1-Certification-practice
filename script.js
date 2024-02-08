'use strict';
var number = 10;
console.log('Type of number: ', typeof number);

number = 'Shakib';

console.log('Type of number: ', typeof number);

const pi = 3.14;



let visits;

if(typeof visits == 'undefined'){
    console.log('UNDEFINED');
}

if(visits == null){
    console.log('NULL');
}


var s = 10;
var s = 'name';

printName();

function printName() { 
    var s = 'Astro';
    console.log(s);
}
console.log(s);
{
    let s = 'abc';
    console.log(s);
}

console.log(s);


var animal = [
    {
        type: 'Dog'
    },
    {
        type: 1
    }
]

animal[1].type = 'Cat';
console.log(animal);
// animal.sound();

let ar = [1,2,3,4];
console.log(ar[1]);

const dimensions = [1,2,3,4,5,6,];
let[h,w] = dimensions;

console.log(h);
console.log(w);








