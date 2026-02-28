/* 
// what is function
// reusable block of code designed to perform a particular task.

// Syntax: 
function functionName(){
    //block of code
}

//Example:
function greet(){
    console.log("hello,javascript is programming language");
}
greet();  


displayData();  // concept of hoisting - call before fun declaration
function displayData(){
    console.log("welcom to CSwithRAJU")
}
displayData();
console.log("hello");
displayData();


//fun call whenever click on submit button
// <button onclick="showAlert()">Submit</button>
function showAlert(){
    alert("good byyy"); 
}

 

// function with parameter
function greetUser(name){
    console.log("welcome to " + name);
    console.log(`welcome to ${name}`)
}
greetUser("prince");
greetUser("ravi");



function sum(a,b){
    console.log(a + b);
}
sum(100,40);
sum(30,120);

function sum(num1,num2){
    console.log(num1,num2);  // 80 undefined
    console.log(num1 + num2); // NaN : when arithematic problem cann't solve then show
}
sum(80);


function subtract1(p,q=10){
    console.log(p - q);
}
subtract1(100);


// q1 default value 10 (override) with 30
function subtract2(p1,q1=10){
    console.log(p1 - q1);
}
subtract1(100, 30);



//  imp  ans is= 50
function sum(allElement){
    console.log(allElement)
}
sum(50,60,30,120);



//use spreed operattor  ------- spread return array
function sumData(...allElement){
    console.log(allElement)
}
sumData(50,60,30,120);



//==========================  return type ======================================//
 function productPrice(p){
    return p * 0.10
 }
 let price= 5000;

 let profit = productPrice(price + 10)
 console.log(profit);

// ================= Anonymous Function =======================

// Def: anonymous fn. has no name . it's usually stored in a variable or used directly as a callback.


const showMsg= function(){
    console.log("Learning Anonymous function");
}
showMsg();



//=============== callback =======================

//Def: A callback function is a function passed to another function an argument and executed later .

function addData(num1,num2){
    return (num1 + num2);
}
function minData(num1,num2){
    return(num1-num2);
}

function calculate(num1,num2, callback){
   // console.log(num1);
   // console.log(num2);
   // console.log(callback);
    console.log("final result",callback(num1,num2));
}
calculate(30,20,addData);
calculate(50,10,minData);

//2. ques.  */

function greet(callback){
    console.log("welcome to innovationTech");
    callback();
}
function display(){
    console.log("hello,bye...");
}
greet(display);


//================== Arrow function (ES6)========================

//def: arrow function offer ashorter syntax than regular function
//syntax:
 
const functionName= (para1,para2)=>{
    // code
}


//1.
let show= ()=>{
    console.log("WELCOME");
}
show();

//2.
let sum=(n1,n2)=>{
    return n1 + n2;
}
let addData1= sum(50,70);
console.log(addData1);
// console.log(sum(50,70)); 

//3.
let square = (x) =>  x*x;
console.log(square(5));
// or
let square1 = x =>  x*x;
console.log(square1(6));
// or  curli-braces hi to return likhna jaruri hi
let square3 = (x) => {
    return x*x;
} 
console.log(square3(10));