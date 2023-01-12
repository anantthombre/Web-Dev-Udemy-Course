alert("Hello Everyone!!!")

function hello () {
    console.log("Hello World!!!")
}

function helloYou(name) {
    console.log("Hello " + name);
}

function addNum(num1, num2) {
    console.log(num1 + num2);
}

function helloSomeone (name = "Frankie") {
    console.log("Hello "+ name);
}

function formal (name = "Sam", title = "Sir") {
    return title + " " + name
}

function timesFive (num) {
    var result = num * 5
    return result
}

// Global Scope

var v = "Global V";
var stuff = "Global stuff"

function fun (stuff) {
    console.log(v);
    stuff = "Reassigning the stuff inside the function";
    console.log(stuff);
}

fun();
console.log(stuff);
