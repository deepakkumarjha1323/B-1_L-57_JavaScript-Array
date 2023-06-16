// javaScript Array

// This is a JavaScript Array
var friends = ['Suman', "Harry", "Anmol", 'Sumit', "Ritik", 'Shubham', 'Rahul', "Bunty", 'Saurabh', 'Nikhil', "Aman"];

// Fat Arrow
//define
let greet=(n)=>{ // 'n' is a Formal argument
    console.log('Hello '+n+', How are you...?');
}

/*
    for loop syntax

    for(initialization; conditions; increment/decrement){

    }
*/
for(var i=0; i<=11; i++){
    greet(friends[i]);
}
