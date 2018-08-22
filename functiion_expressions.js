// setTimeout has two parameters. 1. handler. 2. No. of milli seconds need to wait
// function expression = I never want to use that function again, but I wanted some functionality to be done into the setTimeout
// Functions can take functions as input parameters. 
/*setTimeout(function (){
    console.log ('I waited 5 seconds'); 
}, 5000);*/


// Calling the same function inside the function
// let counter = 0;
// function timeOut() {
//     setTimeout(function(){
//         console.log('hi ' + counter++);
//         timeOut();
//     }, 2000)
// }

// timeOut();
// ctrl + C to stop the execution


// function expression
// function invokation
//group this whole things together and execute
// Immediately Invoked Function Expression (IIFE)
(function(){
    console.log('Immediately Invoked Function expression (IIFE)');
})();