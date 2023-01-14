carInfo = {make: "Toyota", year: 2007, model: "Camry"}
{make: 'Toyota', year: 2007, model: 'Camry'}
carInfo['make']
'Toyota'
carInfo["year"] = 1990
1990
carInfo
{make: 'Toyota', year: 1990, model: 'Camry'}
var myNewObj = {a: "hello", b: [1,2,3], c: {inside: ["a","b"]}}; 
undefined
myNewObj
{a: 'hello', b: Array(3), c: {…}}a: "hello"b: (3) [1, 2, 3]c: {inside: Array(2)}inside: (2) ['a', 'b'][[Prototype]]: Object[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
myNewObj["a"]
'hello'
myNewObj["b"][1]
2
 myNewObj["c"]["inside"][1]
'b'
carInfo
{make: 'Toyota', year: 1990, model: 'Camry'}
carInfo["year"] += 1
1991
carInfo
{make: 'Toyota', year: 1991, model: 'Camry'}
console.dir(carInfo)
VM950:1 Object
for (key in carInfo) {
    console.log(key)
}
VM1144:2 make
VM1144:2 year
VM1144:2 model
undefined
for (jelly in carInfo) {
    console.log(jelly)
}
VM1271:2 make
VM1271:2 year
VM1271:2 model
undefined
for (k in carInfo) {
    console.log(k)
}
VM1363:2 make
VM1363:2 year
VM1363:2 model
undefined
for (k in carInfo) {
    console.log(k)
    console.log(carInfo[k])
}
VM1580:2 make
VM1580:3 Toyota
VM1580:2 year
VM1580:3 1991
VM1580:2 model
VM1580:3 Camry
undefined
for (k in carInfo) {
    console.log(k)
    console.log(carInfo[k])
}
VM1580:2 make
VM1580:3 Toyota
VM1580:2 year
VM1580:3 1991
VM1580:2 model
VM1580:3 Camry
undefined
carInfo
{make: 'Toyota', year: 1991, model: 'Camry'}
carInfo.carAlert = function () {
    alert("We have got a car here!. And that is"+ this.make + this.model);
}
ƒ () {
    alert("We have got a car here!. And that is"+ this.make + this.model);
}
carInfo
{make: 'Toyota', year: 1991, model: 'Camry', carAlert: ƒ}carAlert: ƒ ()arguments: nullcaller: nulllength: 0name: ""prototype: {constructor: ƒ}[[FunctionLocation]]: VM2045:1[[Prototype]]: ƒ ()make: "Toyota"model: "Camry"year: 1991[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
carInfo.carAlert()
undefined
carInfo.carAlert = function () {
    alert("We have got a car here!. And that car is "+ this.make + " " + this.model + "!");
}
ƒ () {
    alert("We have got a car here!. And that car is "+ this.make + " " + this.model + "!");
}
carInfo.carAlert()
undefined
var simple = {
    prop : "Hello",
    myMethod : function () {
        console.log("the myMethod is called")
    }
}
undefined
simple
{prop: 'Hello', myMethod: ƒ}myMethod: ƒ ()arguments: nullcaller: nulllength: 0name: "myMethod"prototype: {constructor: ƒ}[[FunctionLocation]]: VM2435:3[[Prototype]]: ƒ ()prop: "Hello"[[Prototype]]: Object
console.dir(simple)
VM2508:1 ObjectmyMethod: ƒ ()arguments: nullcaller: nulllength: 0name: "myMethod"prototype: {constructor: ƒ}[[FunctionLocation]]: VM2435:3[[Prototype]]: ƒ ()prop: "Hello"[[Prototype]]: Object
undefined
simple.myMethod
ƒ () {
        console.log("the myMethod is called")
    }
simple.myMethod()
VM2435:4 the myMethod is called
undefined
var myObj = {
    name : "Anant",
    greet : function () {
        console.log("Hello " + this.name)
    }
}
undefined
myObj["name"]
'Anant'
myObj.greet()
VM2889:4 Hello Anant
undefined
