// assignment no 11
//array
//define an array of names
let names: string[] = ["nehal", "muneeb", "ameen", "daniyal"];

//loop
//for each
//for of loop

//loop
for (let i = 0; i < names.length; i++) {
console.log(names[i]);
    
}

//for each
names.forEach(name => {
    console.log(name);
    
});

//for of loop
for (const friendName of names) {
    console.log(friendName);
    
}
