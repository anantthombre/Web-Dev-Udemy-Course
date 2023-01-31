// Grab the restart button

var restart = document.querySelector("#b");

// Grab all the squares

var squares = document.querySelectorAll("td");

// Clear all the squares

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

restart.addEventListener("click", clearBoard);

// Check the square maker



// For Loop to add event listners to all the squares