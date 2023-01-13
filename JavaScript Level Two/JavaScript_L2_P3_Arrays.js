country1 = "USA"
'USA'
country2 = "India"
'India'
country3 = "Canada"
'Canada'
var countries = ["USA", "India", "Canada"]
undefined
countries[0]
'USA'
countries['length']
3
countries["USA"]
undefined
countries[1]
'India'
countries[2]
'Canada'
countries[2] = "France"
'France'
countries
(3) ['USA', 'India', 'France']
country1[2]
'A'
country1[2] = "B"
'B'
country1
'USA'
var mixed = [true, 20, "string"]
undefined
mixed
(3) [true, 20, 'string']
mixed.length
3
var myArr = ["One", "Two", "Three"]
undefined
myArr
(3) ['One', 'Two', 'Three']0: "One"1: "Two"2: "Three"length: 3[[Prototype]]: Array(0)
var lastItem = myArr.pop()
undefined
lastItem
'Three'
myArr
(2) ['One', 'Two']
myArr.push("new_item")
3
myArr
(3) ['One', 'Two', 'new_item']
myArr[myArr.length - 1]
'new_item'
var matrix = [[1,2,3], [4,5,6], [7,8,9]]
undefined
matrix
(3) [Array(3), Array(3), Array(3)]0: (3) [1, 2, 3]1: (3) [4, 5, 6]2: (3) [7, 8, 9]length: 3[[Prototype]]: Array(0)
matrix.length
3
var arr = ["A", "B", "C"]
undefined
for (var index = 0; index < arr.length; index++) {
}
undefined
for (var index = 0; index < arr.length; index++) {
    console.log(arr[index])
}
VM2169:2 A
VM2169:2 B
VM2169:2 C
undefined
for (letter of arr) {
    console.log(letter)
}
VM2364:2 A
VM2364:2 B
VM2364:2 C
undefined
for (jelly of arr) {
    console.log(jelly)
}
VM2504:2 A
VM2504:2 B
VM2504:2 C
undefined
for (jelly of arr) {
    console.log("Hello")
}
3VM2647:2 Hello
undefined
for (letter of arr) {
    alert(letter)
}
undefined
arr.forEach(alert)
undefined
function addAwesome (name) {
    console.log(name + " is Awesome!!!")
}
undefined
addAwesome("Django")
VM3110:2 Django is Awesome!!!
undefined
var topics = ["Python", "Django", "Science"]
undefined
topics.forEach(addAwesome)
VM3110:2 Python is Awesome!!!
VM3110:2 Django is Awesome!!!
VM3110:2 Science is Awesome!!!
