// assignment no 11
//array
//define an array of names
var names = ["nehal", "muneeb", "ameen", "daniyal"];
//loop
//for each
//for of loop
//loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (name) {
    console.log(name);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
