// Assignment no 19

let guestlist:string[] = ["hafsa", "umer", "ahmed"];

// print message 
console.log("unfortunately! the new dinner table table wont arrive so we can invite only 2 guest");
guestlist.unshift("nehriza", "meeshan");

//print message updated list
console.log("updated list of guest:", guestlist);

//remove guest from the list.
while (guestlist.length > 2) {
    let removedguest : string | undefined = guestlist.pop();
    if (removedguest !== undefined) {
        console.log(`sorry, ${removedguest}, we cant invite you`);
    }
}

//print a message to each of the two people still on list, letting them know they're still invited.

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you both are for the dinner`)
    
})

//remove two name from the list
guestlist.splice(0, guestlist.length)

//print updatedempty list
console.log("updated list of guest:", guestlist);

