var player1 = prompt("Player One: Enter Your Name, You Will Be Blue");
var player1ColorClass = "p-1 w-24 h-24 rounded-full bg-gradient-to-bl from-blue-900 via-blue-400 to-blue-900";

var player2 = prompt("Player Two: Enter Your Name, You Will Be Red");
var player2ColorClass = "p-1 w-24 h-24 rounded-full bg-gradient-to-bl from-red-900 via-red-400 to-red-900";

//Current color class of the cell
var initialColorClass = "p-1 w-24 h-24 rounded-full bg-gradient-to-bl from-indigo-800 via-indigo-300 to-indigo-800";

var game_on = true;
var table = $("table tr");


// To report the win in the console tab
function reportWin(rowNum, colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

// To change the color using class attribute
function changeColorClass(rowIndex, colIndex, colorClass) {
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").attr("class", colorClass);
}


// To report the color of the cell using class attribute
function reportColorClass(rowIndex,colIndex) {
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").attr("class");
}

// To check the color of the bottom cell of a column using class attribute
function checkBottom(colIndex) {
    var colorReport = reportColorClass(5,colIndex);
    for (var row = 5; row > -1; row--) {
        colorReport = reportColorClass(row, colIndex);
        if (colorReport === initialColorClass) {
            return row;
        }
    }
}

// To check the color matach of the four cells using class attribute
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== initialColorClass && one !== undefined)
}

// To check for the horizontal wins
function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(reportColorClass(row, col), reportColorClass(row, col+1), reportColorClass(row, col+2), reportColorClass(row, col+3) ) ) {
                console.log("horizontal");
                reportWin(row, col);
                return true;
            }else {
                continue;
            }
        }
    }
}

// To check for the vertical wins
function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 3; row++) {
            if (colorMatchCheck(reportColorClass(row, col), reportColorClass(row+1, col), reportColorClass(row+2, col), reportColorClass(row+3,col) ) ) {
                console.log("vertical");
                reportWin(row, col);
                return true;
            }else {
                continue;
            }
        }
    }
}

// To check for the diagonal wins
function diagonalWinCheck() {
    for (var col = 0; col < 5; col++) {
        for (var row = 0; row < 7; row++) {
            if (colorMatchCheck(reportColorClass(row,col), reportColorClass(row+1,col+1), reportColorClass(row+2, col+2),reportColorClass(row+3,row+3))) {
                console.log("diagonal");
                reportWin(row, col);
                return true;
            }else if (colorMatchCheck(reportColorClass(row, col), reportColorClass(row-1,col+1),reportColorClass(row-2, col+2), reportColorClass(row-3, col+3))) {
                console.log("diagonal");
                reportWin(row, col);
                return true;
            }else {
                continue;
            }
        }
    }
}

// Start Game
// Start with player1
var currentPlayer = 1;
var currentName = player1;
var currentColorClass = player1ColorClass;

// Start with Player One
$("h3").text(player1 + " it is your turn, pick a column to drop in!")

// Defining Click Function
$(".board button").on("click", function () {

    // Recognize what column was chosen
    var col = $(this).closest('td').index();

    // Get back bottom available row to chang
    var bottomAvail = checkBottom(col);

    // Drop the chip in that column at the bottomAvail Row
    changeColorClass(bottomAvail, col, currentColorClass);

    // Check for a win or a tie.
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        $('h1').text(currentName+ " You have won!");
        $('h2').fadeOut("fast");
        $("h3").fadeOut("fast");
    }

    // If no win or tie, continue to next player
    currentPlayer = currentPlayer * -1;

    // Re-Check who the current Player is
    if (currentPlayer === 1) {
        currentName = player1;
        $("h3").text(currentName + ", it is your turn.");
        currentColorClass = player1ColorClass;
    }else {
        currentName = player2;
        $("h3").text(currentName + ", it is your turn.")
        currentColorClass = player2ColorClass;
    }
})

