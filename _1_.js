
/* run on browser 
document.write(10+30);
document.write("welcom to edutech");
//****imp: if first line have error than not execute second line (execute line by line) 
console.log("welcom",10,10+20);  // welcome 10 30
alert("hi,how are you");

*********** variable *********
variable- a container for storing data
var- old and function scoped
let- block scoped
const- block scoped, cann't be re-rassigned
*/

var m=50;
var n=10;
console.log(m+n);     
console.log(m-n);     
console.log(m*n);     
console.log(m/n);     

let x= "chrome usages v8 engine";
console.log(x);

console.log();


// not decelare re-again but change it value
let num = 20;
console.log(num);
console.log(num);
num=60;  // value asign re-again
console.log(num);


let t;    // fun. scoped,if let inside { } then cann't access outside the bracess
{
    t=96;   // value assign
}
console.log(t);


// both n is different,because of first-bldock scoped, second-outsie
{
    const n=78;
    console.log(n);
}
var n = 90;
console.log(n);

// variable naming 
// start with : alphabet, _  , $  
// case-sensitive
// not use reserve word

// Template Literals use- backtick ( ` )

let st="is great place"
console.log(`mumbai ${st} to visit`)

