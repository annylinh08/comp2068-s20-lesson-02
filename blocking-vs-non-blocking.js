console.clear();

//blocking (sync)
const sayHi = name => console.log(`Hello, ${name}`)
// function sayHi(name){
//     console.log
// }
sayHi('Linh');
sayHi('Jane');
sayHi('Quyen');
//non-blocking (async)
setTimeout(sayHi, 2500, 'Micheal')
setTimeout(sayHi, 3500, 'Baby')
setTimeout(sayHi, 1500, 'Katie')
sayHi('Layla')
//callbacks
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback) => {
    console.log(`Hello, ${name}`);
    callback(name);
}

greeting('Shaun McKinnon', farewell)