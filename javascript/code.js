/*
Create an application that will have an array of numbers as below
let numbers = [12, 18, 11, 5, 8, 2];
Please display the middle number.
since the above array's size is an even number you should return two elements
otherwise, return a single element.
*/

// let numbers = [12, 18, 11, 5, 8, 2];

// function MiddleValue(arr) {
//     if(numbers.length % 2 == 0) {
//         console.log(numbers[(numbers.length /2) -1], numbers[numbers.lenght /2 -1]);
//         console.log(x);
// }
// }

// let a = 3
// console.log(a++);
// console.log(a);

// CONTINUE function:

// for(let i = 0; i<=10; i++) {
//     if(i == 5) {
//         continue
//     }
//     console.log(i);
// }


// WHILE function:
// let cnt = 0
// while(cnt <= 10) {
//     console.log(cnt);
//     If we don't have the below code it will produce an infinite loop.
//     cnt++;
// }


// let cnt = 0
// do {
//     console.log(cnt);
//     cnt++
// }while(cnt <=10)


// FOREACH function:
// let numbers = [12, 18, 11, 5, 8, 2];
//  for(let i =0; i<numbers.length; i++) {
//     console.log(`${i} => ${numbers[i]}`);
// }

// numbers.forEach((number)=> {
//     console.log(number);
// })

// THE TWO FUNCTIONS ABOVE & BELOW DISPLAYS THE SAME OUTPUT JUST DIFFERENT FUNCTION:

// numbers.forEach(display)
// function display(number) {
//     console.log(number);
// }

// numbers.forEach((number, i)=>{
//     console.log(number , i);
// })

// numbers.forEach((number) => {
//     if (number %2 == 0){console.log(number);}
// })


// FOR IN:
// for(let i in numbers) {
//  console.log(i, numbers[i]);   
// }


// FOR OF:
// for(let number of numbers) {
//     console.log(number);
// }


// FUNCTION 1:
// let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
// let unique = []
// numbers.forEach((number) => {
//     if(!unique.includes(number)) {
//         unique.push(number)
//     }
// })
// console.log(unique);

// JOELS FUNCTION:
// let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
// console.log(Array.from(new Set (numbers) ));


// FUNCTIONS:
// Named function or function declaration
// function constName(firstName = "Jeff") {
//     console.log(`My names ${firstName}`);
 // console.log(`My names ${firstName || 'Jeff'}`);

// }
// constName()
// constName("Inosuke")



// Anonymous Function or Function Expression:
// let test = function(numb1, numb2) {
//     return numb1 + numb2
// }
// console.log(test(2, 8));

// (function(numb1, numb2) {
//     console.log(numb1 + numb2)
// })(3, 4)

/*
Example.
NB: There are issues with the below example; try to fix them.
FYI, I solved it; now it's your turn. Let me know how long it took you to fix it. It only
took me a minute and 10 seconds.
It has to display numbers from 1 to 10.
*/
// function repeat(limit) {
//     let cnt = 1
//     if(cnt < limit) {
//         console.log(cnt);
//         cnt+
//         repeat(limit <10)
//     }
// }
// repeat(10)


// ==================== Challenge ==================== //

// let greeting = " Hello World "

// Convert the above string to array of characters:

// const str = greeting
// const arr = Array.from(str);
// console.log(arr);

// Remove spaces before H and after d:

// const geek = '   Hello World   ';
 
// console.log(geek);
 
// console.log(`${geek.trim()}`);

// Remove basis:


// ========================== MY EXAMPLES ============================== \\

// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials.map((material) => material.length));

// const obj = {
//     num: 100,
//   };
  
  // Setting "num" on globalThis to show how it is NOT used.
//   globalThis.num = 42;
  
  // A simple traditional function to operate on "this"
//   const add = function (a, b, c) {
    // return this.num + a + b + c;
//   };
  
//   console.log(add.call(obj, 1, 2, 3)); 
//   console.log(add.apply(obj, [1, 2, 3])); 
//   const boundAdd = add.bind(obj);
//   console.log(boundAdd(1, 2, 3)); 
  

// Hosting a Function:

// debugger
// display()
// function display() {
//     console.log("Hosting a function");
// }


// debugger
// console.log("Accessing a value");
// x = 3
// console.log(x);
// console.log("Create a variable");
// var x

// let addition = function (numb1, numb2) {
//     return numb1 + numb2
// }
// console.log(addition(3, 2));



// let spider = function() {
//     console.log("Spider Man");
// }

// function jobTitle() {
//     console.log("Ah hee");
//     spider
// }


// Recursive function:

// ===== THIS FUNCTION IS NOT CORRECT ATTEMPT TO FIX IT ===== \\
// function repeat(limit) {
//     let cnt <= 1            [you place (  let cnt <= 1 ) ontop of the function]
//     if(cnt <limit) {
//         console.log(cnt);
//         cnt++
//         repeat(limit--)     [you remove the (  -  ) symbols]
//     }
// }
// repeat(10)


// ===== THIS IS THE CORRECT WAY FOR A RECURSIVE FUNCTION ===== \\
// let cnt = 1
// function repeat(limit) {
//     if(cnt <= limit) {
//         console.log(cnt);
//         cnt++
//         repeat(limit)
//     }
// }
// repeat(10)

// function display() {
//     let numb1 = 9
//     console.log(`Inside a function: ${numb1}`);
// }
// display()
// console.log(`Outside a function: ${numb1}`);


//  LITERAL OBJECT:
// let person = {
//   firstName: 'Tangiro
//   lastName: 'Ronaldo'
// }
// console.log(person);
// console.log("Object.create()");
// let smartPhone = Object.create(
//   {
//     make: "Samsung",
//     model: "A 51"

//   }
// )
// console.log(smartPhone);
// console.log('new keyword | Object constructor');
// let computer = new Object( {
//   brand: "Dell",
//   amount: 18000
// })
// console.log(computer);

// FACTORTY FUNCTIONS:
// A factory function allows us to create and return and object.
function person() {
  let data = {
    firstName: 'Nezuko-Chan',
    age: 20
  }
}

function person(firstName, lastName, age, hrs, rate) {
  return {
    // name: firstName,
    // surname: lastName,
    // userAge: age,
    // hrsWorked: hrs,
    // userRate: rate,
    firstName, lastName, age, hrs, rate
  }
}
let person1 = person('Inosuke', 'Hashibira', 3, 60, 500)
let person2 = person('Kazuma', 'Sato', 1, 20, 350)
console.log(person1);
console.log(person2);


function Laptop(make, amount) {
  this.make = make
  this.amount = amount 
}
function SmartPhone(amount) {
  this.amount = amount
}
let laptop1 = new Laptop('HP', 18000)
let laptop2 = new Laptop('Dell', 20000)
let samsungA51 = new SmartPhone (20000)
console.log(laptop1);
console.log(laptop2);

console.log(laptop2 instanceof SmartPhone);
