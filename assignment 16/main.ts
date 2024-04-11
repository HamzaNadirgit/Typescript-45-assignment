// assignment no 16

let guestlist:string[] = ["ashar", "nehal", "hamza nadir",];
console.log("great news! we found a biggest table");

// unshift
guestlist.unshift("shahriyar");

// splice
guestlist.splice(Math.floor(guestlist.length/2),0,"muneed");
 // push();
 guestlist.push("hafsa");
 

 // invite foreach
 guestlist.forEach(guest =>{
    console.log(`Dear ${guest}, all are cordially invited to dinner`);
 });