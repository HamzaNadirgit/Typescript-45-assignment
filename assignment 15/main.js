"use strict";
// assignment no 15
let guestlist = ["ashar", "uzair", "nehal"];
// print the name who cant make the dinner
let unableAttend = guestlist.splice(1, 1)[0];
console.log(`${unableAttend} cant make dinner`);
// push
guestlist.push("hamza nadir");
// print a message
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
});
