var fName = prompt("Please Enter Your First Name");
var lName = prompt("Please Enter Your Last Name");
var age = prompt("Please Enter Your Age");
var height = prompt("Please Enter Your Height in centimeters");
var pet = prompt("Please Enter Your Pet Name");

if (fName[0] === lName[0] && age > 20 && age < 30 && height >= 170 && pet[pet.length - 1] === "y") {
    console.log("Hey, Great! You Have Passed The Spy Test!!!");
} else {
    console.log("Nothing to see here.")
}