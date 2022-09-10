//here below we created 2 functions, this can be used again and again and make our task easier

function greet(name, greetings){  //this is a void function i.e. it returns nothing
    console.log(greetings + ' ' + name);
}

function sum(a,b,c){  //this is function which returns something
    let d = a+b+c;
    return d;
}

let name1 = 'pritish';
let name2 = 'ritwik';
let greeting = 'good morning';

greet(name1,greeting);
greet(name2,greeting);

let a = 2;
let b = 3;
let c = 4;
let d = sum(a,b,c);
console.log(d);
