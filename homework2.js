//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log("========= 1st method ===============")

for (let i=0; i<Object.keys(person3).length; i++){
    console.log(Object.values(person3)[i])
}

console.log("========= 2nd method ===============")

for (let i=0; i<Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])) {
        for (let j=0; j<Object.keys(person3)[i].length; j++){
            console.log(Object.values(person3)[i][j]);
        }
    }
}

console.log("========= 3rd method ===============")

for (let i=0; i<Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])) {
        for (let j=0; j<Object.keys(person3)[i].length; j++){
            console.log(Object.values(person3)[i][j]);
        }
    } else{ 
        console.log(Object.values(person3)[i])
    }
}


// console.log("========= Shoha's method ===============")

// const foundObject =(obj) => {
//     for (let key of Object.keys(obj)){
//         letsParse(obj[key])
//     }
// }
// const foundString = (str) => { 
//     console.log(str)
// }

// const foundList = (arr) => {
//     for (let elem of arr){
//         letsParse(elem)
//     }
// }


// const letsParse = (my_var) => {
//     if (Array.isArray(my_var)){
//         foundList(my_var)
//     } else if (typeof my_var =='object'){
//         foundObject(my_var)
//     } else {
//         foundString(my_var)
//     }
// }
// letsParse(person3)








//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age){
    this.name = name;
    this.age=age

// Use an arrow to create the printInfo method
this.printinfo= ()=> {
    console.log(`${this.name} is ${this.age} years old`)}

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
this.addage =(num) =>{
    this.age += num
}
}

let person1= new Person ('Baby', 1)
let person2= new Person ('Cat', 5)
person1.printinfo();
person2.printinfo();
person1.addage(1)
person1.printinfo()
person1.addage(1)
person1.printinfo()


// console.log("========= Shoha's method ===============")

// function Person(name, age){
//     this.name = name;
//     this.age = age;


// // Use an arrow to create the printInfo method
// this.printInfo = ()  => {
//     console.log(`${this.name} is ${this.age} years old.`)
//     return
// }

// // Create another arrow function for the addAge method that takes a single parameter
// // Adding to the age 
// this.addAge = () => {
//     this.age += num
//     return
// }
// }
// let p=new Person("Shoha", 22):
// let person2 = new Person("ivan", 25);
// person1.printInfo(); 
// person1.printInfo(); 
// person1.addAge(); 
// person1.addAge(2); 
// person1.printInfo(); 

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const lengthIsGreater = (str) => {
    return new Promise ((resolve, reject) => {
        if (str.length>10){
            resolve("Big word")
        } else {
            reject("Small Number")
        }
    })
}
console.log(lengthisgreat("hello"))
console.log(lengthisgreat("hellooooooooo"))



console.log("========= 2nd using regular method ===============")

function lengthisgreat(str){
    if (str.length>10){
        return "Big word"
    } else {
        return "Small Number"
    }
}
console.log(lengthisgreat("hellooooooooo"))
console.log(lengthisgreat("hello"))



// console.log("========= Shoha's method ===============")
// const isGreaterThanTen = (num) => {
//     return new Promise(     (resolve, reject)  =>   {
//         if (num>10) {
//             resolve(true);
//         }else {
//             reject (false);
//         }
//     })
// }
// isGreaterThanTen(15)
//     .then(  (resolut)=>{console.log("Big Word", result)}   )
//     .catch(   (error)=>{console.log("Small Number", error)} )

// isGreaterThanTen(4)
//     .then(  (resolut)=>{console.log("Big Word", result)}   )
//     .catch(   (error)=>{console.log("Small Number", error)} )



console.log("=============Exercise 4 from Code War==========")

/*
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.


function main [verb, noun]
  return verb + noun
}
*/

function main (verb, noun)  {
    return verb + noun
  }


  console.log("=============Exercise 5 from Code War==========")

/*
  Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

*/


function greet(name){
    if(name == "Johnny"){
        return "Hello, my love!";
  } else{
        return "Hello, " + name + "!";
}}
console.log(greet("Johnny"))


console.log("=============Exercise 6 from Code War==========")

/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

a (operation) b*

*/

function add(a,b){
    return a+b
}
console.log(add(1,2))

function divide(a,b){
    return a/b
}
console.log(divide(4,2))

function multiply(a,b){
    return a*b
}
console.log(multiply(3,3))

function mod(a,b){
    return a%b
}
console.log(mod(2,2))

function exponent(a,b){
    return a**b
}
console.log(exponent(4,2))

function subt(a,b){
    return a-b
}
console.log(subt(4,2))