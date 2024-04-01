//assignment no 12

//array
//define an array of names
let names: string[] = ["nehal", "muneeb", "ameen", "daniyal"];


//for loop
for (let i = 0; i < names.length; i++){
console.log(`hello, ${names[i]}! how are you today?`);
}


//for each
names.forEach(friend => {
    console.log(`hi, ${friend}! how are you today?`);
});

//for of loop
for (let friendname of names) {
    console.log(`dear, ${friendname}! hoe are you today?`);
}
