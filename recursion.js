//print factorial using recursion
function fact(number){
    if(number>=1){
        return number*fact(number-1)
    }else {
        return 1;
    }
}

console.log(fact(5));


//Get sum of natural numbers
function sum(number){
    if(number >= 1) return (number+sum(number-1));
    else return 0;
}

console.log(sum(10));