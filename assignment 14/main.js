// Assignment no 14
var guestlist = ["ashar", "uair", "nehal"];
// invite each guest for dinner
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner"));
});
// map 
// invite guest 
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner"); });
invitation.forEach(function (invitations) {
    console.log("inivitation");
});
