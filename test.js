class Dog {
    constructor(name, breed, color, sex, age) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.sex = sex;
        this.age = age;
    }
    toString() {
        return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Sex: ${this.sex}, Age: ${this.age}`;
    }
    valueOf(){
        return this.age;
    }
}

const theDog = new Dog("Gabby", "Lab", "chocolate", "female", 8);

console.log(theDog);


const user1 = {
    id: 1,
    name: 'Shakib',
    toString: function(){
        return `[User Id: ${this.id}][User Name: ${this.name}]`
    }
}

const user2 = {
    id: 2,
    name: 'Tonmoy',
    toString: function(){
        return `[User Id: ${this.id}][User Name: ${this.name}]`
    },
    valueOf: function(){
        return this.id;
    }
}

console.log("User 1: " + user1);
console.log("User 2: " + user2);



const json = '{"result": true, "count": 1}'
const json2 = '"text"';

console.log(JSON.parse(json));
console.log(JSON.parse(json2));