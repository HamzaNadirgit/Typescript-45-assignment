// Assignment no 18
let placetovisit: string [] = ["paris", "new york", "italy", "chine", "japan"];

// print in original order

console.log("original order:", placetovisit);

// print array in alphabetical order without modifying the actual list.

console.log("alphabetical order:", placetovisit.slice().sort());

//array is still in its original order by printing it.

console.log("original order:", placetovisit);

// print array in reverse alphabetical order without changing the order of the original list

console.log("reverse order:", placetovisit.slice().sort().reverse());

// array is still in its original order by printing it againe.

console.log("original order:", placetovisit);

// reverse the order of list. print the array to show that its order has changed.

console.log("reverse order changed");
placetovisit.reverse();
console.log(placetovisit);

// reverse the order of list again. print the list to show its back to its original order.

console.log("reverse order changed");
placetovisit.reverse();
console.log(placetovisit);


// sort array so its stored in alphabetical order. print the array to show that its order has been changed.
console.log("original order:", placetovisit.sort());
console.log(placetovisit);

//sort to change array so its stored in reverse alphabetical order. print the list to show that its order has changed.
console.log("reverse alphabetical order changed:", placetovisit.sort().reverse());
console.log(placetovisit);









