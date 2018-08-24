// var thePets = [
//     {"name" : "Meowsalot",
//     "species" : "cat",
//     "favFood" : "tuna"},
//     {
//     "name" : "berkey",
//     "species" : "dog",
//     "favFood" : "carrots"}
// ]

// console.log(thePets[1].favFood);

// JSON ( Javascript Object Notation )= objects and arrays nested inside each other

//AJAX - Asynchronous Javascript And XML 
//XMLHttpRequest

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log (ourData[0]);
};
ourRequest.send();
