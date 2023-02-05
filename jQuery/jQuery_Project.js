var player1 = prompt("Player One: Enter Your Name, You Will Be Blue");
var player1ColorClass = "p-1 w-24 h-24 rounded-full bg-gradient-to-bl from-blue-900 via-blue-400 to-blue-900";

var player2 = prompt("Player Two: Enter Your Name, You Will Be Red");
var player2ColorClass = "p-1 w-24 h-24 rounded-full bg-gradient-to-bl from-red-900 via-red-400 to-red-900";


var game_on = true;
var table = $("table tr");


// To report the win in the console tab
function reportWin(rowNum, colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

// To change the color
function changeColor(rowIndex, colIndex, colorClass) {
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").toggleClass(colorClass);
}


// To report the color of the cell
function reportColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").attr("class")
}
