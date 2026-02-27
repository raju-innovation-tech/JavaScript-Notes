// data type 

// premitive: string, Number,Boolean, Null, Undefined, Symbol, BigInt

// Non-Premitive: Object, Array, Function

let n= 10;
console.log(n,typeof(n));

let n1 = 10.6;
console.log(n1,typeof(n1));

let s="welcome"
console.log(s,typeof(s));

let q;
console.log(q);

let Status = true;
console.log(typeof(Status));

// true ki value 1 hoti hi  , implecit type conversion  kr 1 + 6 = 6
console.log(true + 5);

//currently null, but future me yha value asign ho skta hi
let g= null;
console.log(typeof(g));

// symbol that makes unique value
let p1= Symbol("hello123");
let p2= Symbol("hello123");

console.log(typeof(p1));
console.log(p1,p2);

let obj={
    name:"raju kumar",  // or "name":"raju"
    branch:"CSE-AI",
    role: "full stack developer"
}
console.log(obj);
console.log(typeof(obj));

let arr=[55,96,125,"raju",86,false,99,52.8];
console.log(arr);
console.log(typeof(arr));


function show(){
  console.log("hello");
}
show();
console.log(typeof(show))

let d= 10;
console.log(d * "20");
console.log("60" * 3);
console.log(10 + 30);

// append concat
console.log(d + "30");
console.log("hello" + 20);
console.log("hi" - 90);


let num1 = prompt("enter the number:"); //take input on browser (eg; hello ,56 ,etc)
console.log(num1,typeof(num1));  // string by default

let num2= parseInt(prompt("enter the no.")); //only takes integer 56.33 = 56 answer
console.log(num2); 

// explicit type conversion
let num3 = Number(prompt("enter no:")); 
console.log(num3);  // gives both integer & float 

