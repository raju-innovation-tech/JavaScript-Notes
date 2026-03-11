/* console.log(window); // alert window ka hi fn. hi
 
// 1  getElementById


let heading1=document.getElementById('heading');
console.log(heading1);


let first= document.getElementById('demo');
console.log(first);
console.log(first.innerHTML);
console.log(first.innerText);

// innerText vs innerHTML 
  //    Property                description
 //   1. innerText        -returns or set of plain Text
//    2. innerHTML        -returns or set of HTML content  




// 2  getElementByClass





// 3 quarySelector
// quarySelector at a time ek hi element select kr skta hi
let num1 = document.querySelector('#num');
num.placeholder= "enter your name";

let num2 = document.querySelector('.num');
let num3 = document.querySelector('input');

console.log(num1);
console.log(num2);
console.log(num3);
 */

// 4 quarySelectorAll
let demoQue= document.querySelectorAll('li');
console.log(demoQue);

//console.log(demoQue[0].innerHTML);
//console.log(demoQue[1].innerHTML);

// forEach - to target all element at a time for nodeList
demoQue.forEach((items, index)=>{
  //console.log(items);
  console.log(items.innerHTML);
});