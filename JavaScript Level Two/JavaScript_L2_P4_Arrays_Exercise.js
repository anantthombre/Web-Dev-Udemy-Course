// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew() {
    var newName = prompt("What would you like to add?");
    roster.push(newName);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove() {
    var remName = prompt("What would you like to remove?");
    i = roster.indexOf(remName);
    roster.splice(i, 1);
}

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.

function display() {
    console.log(roster);
}

// Start by asking if they want to use the web app

var app = prompt("Hey, would you like to start the web app? (y/n)")

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

if (app === "y") {
    var ans = "";
    while (ans != "quit") {
        ans = prompt("What would you like to do? (add/remove/display/quit)");
        if (ans === "add") {
            addNew();
        }else if (ans === "remove"){
            remove();
        }else if (ans === "display") {
            display();
        }
    }
}else {
    alert("Thank you for visiting the page!")
}