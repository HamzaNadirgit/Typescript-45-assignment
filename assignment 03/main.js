"use strict";
//storing a person name in a variable
let personname = "Hamza Nadir";
//printing a person name in lowercase
console.log("lowercase:", personname.toLowerCase());
//printing a person name in uppercase
console.log("uppercase:", personname.toUpperCase());
//printing a person name in titlecase
console.log("titlecase:", personname.replace(/\bw/g, c => c.toUpperCase()));
