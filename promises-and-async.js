console.clear();

//callbacks

const washUp = () => {
    console.log("Wash your hands!!!");
}

const callMe = async name => {
    await new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log(`Time for dinner, ${name}!!!`)
    // washUp();
    return resolve();
    }, 2000);
})
}
// setTimeout(name => {
//     console.log("Done like dinner");
//     callMe(name);
// },2000, 'Linh');


// //promises 
// new Promise((resolve, reject) =>{
//     setTimeout(name => {
//         console.log('Done like dinner');
//         resolve();
//     },2000);
// })
// .then(()=> callMe('Linh'))



//Async/Wait
const main = async (name) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DOne like dinner");
            return resolve();
        });
    });
    await callMe(name);
    washUp();
};
main('Linh');

(async () => {
    console.log("I'am iffy about IFFEs");
}) ();