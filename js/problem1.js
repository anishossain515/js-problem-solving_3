//problem 1
// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
// }
  
//   scopeTest();


/*problem 2  

Write a function greet that takes two parameters, name and greeting.
greeting should have a default value of "Hello". If only the name is provided,
the function should return the greeting followed by the name. If both are provided,
it should return the custom greeting followed by the name.*/

function greet(name,greeting ="Hello"){
    return `${greeting}, ${name}`
}

console.log(greet("Alice!")); // "Hello, Alice!"
console.log(greet("Bob!", "Good morning,")); // "Good morning, Bob!"




//problem 3  

//Write a function sum that takes any number of arguments and returns their sum using the rest parameter.

function sum(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5



//problem 4 

//Given the following arrays, use the spread operator to merge them into a new array mergedArray.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray =[...array1,...array2,...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



/* problem 5 

Write an object person using the object literal syntax extensions.
The object should have properties name and age, and a method greet that returns a greeting message.*/

const Myname = "John";
const Myage = 30;

let person = {
    greet(){
        console.log(`Hi, I'm ${Myname} and I'm ${Myage} years old`)
    }
}

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."



//problem 6 

//Write a `for...of` loop to iterate over the following array and print each element to the console.

const fruits = ["apple", "banana", "cherry"];

for(let fruit of fruits){
    console.log(fruit)
};


//problem 7  

//Use template literals to create a string that includes variables name and age.


const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old`;

console.log(message); // "My name is Alice and I am 25 years old."

//problem 8

/*You have an array of objects representing students and their grades.
Use a for...of loop to iterate over the array and print each student's name and grade.*/

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
for (let student of students){
    console.log(`My name is ${student.name} and my grade is ${student.grade}`)
};

//problem 9

//You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
let arrsum = 0; 

for(let arr of nestedArrays){
    console.log(arr)
    for(let i = 0; i<arr.length;i++){
        arrsum +=arr[i]
    }
};

console.log(`Total sum of nestedArrays ${arrsum}`);


//problem 10

//Use template literals to create a string that includes variables `a` and `b`, as well as the result of their addition.

const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a+b}`;

console.log(result); // "The sum of 5 and 10 is 15."

