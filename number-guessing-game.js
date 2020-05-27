/*
    Author:Linh
    Objective: Create a number of guessing game

 */

 console.clear();
 //readline allow us to read ad interpret input and output from the console window 
 const readline = require('readline');
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

//(10-1) + 1 mean the limit of random from 1 - 10
 const number = Math.round(Math.random() *(10-1)+1);
//  console.log(number);


//asynchronous guess function wehich we had to wrap in a promise(bc rl does not support await ). then resolve the number - return in true false 
const guess = async guess => {
    return new Promise((resolve, reject) => {
        rl.question("Guess a number between 1 and 10...\n\n" , answer => {
            return resolve(number == answer);
        })
    })
};

//asynchronous iffy. just check if the guess is true or not. if false, keep guessing until true
let cont = false;
(async () =>{
    while(!cont){
        cont = await guess();
        if (!cont) console.error("You were wrong")
    }
   console.log("congratulations");
   rl.close();
})();