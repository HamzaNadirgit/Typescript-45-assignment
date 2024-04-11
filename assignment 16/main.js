// assignment no 16
var guestlist = ["ashar", "nehal", "hamza nadir",];
console.log("great news! we found a biggest table");
// unshift
guestlist.unshift("shahriyar");
// splice
guestlist.splice(Math.floor(guestlist.length / 2), 0, "muneed");
// push();
guestlist.push("hafsa");
// invite foreach
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", all are cordially invited to dinner"));
});
