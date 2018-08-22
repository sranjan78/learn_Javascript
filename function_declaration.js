//Function Declaration
// function sayHello(){
//     console.log('.........');
//     console.log('Hello');
//     console.log('.........');
// }

//sayHello();
/*let a = sayHello;
a();
a();
a();*/

// Passing an argument
// function sayHello(name){
//     console.log('.........');
//     console.log('Hello ' + name + '!');

//     console.log('.........');
// }

// sayHello ('Siva');
// sayHello ('Ranjan');
// sayHello ('Maharana');

function calculateTax(amount){
    let result = amount * 0.0525;
    return result;
}

// Function invokation expression, which is going to give a value back that I can assign to new variable. 
let tax = calculateTax (100);
console.log(tax);