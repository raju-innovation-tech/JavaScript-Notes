/*
let he = document.querySelector('#he');
let well = document.querySelector('#well');
let btn = document.querySelector('button');

//1st method
btn.onclick = changeItem;
function changeItem() {
    let temp = he.innerHTML;
    he.innerHTML = well.innerHTML;
    well.innerHTML = temp;
} 

// 2nd method
btn.addEventListener('click',()=>{
    let temp = he.innerHTML;
    he.innerHTML = well.innerHTML;
    well.innerHTML = temp;
})


// Q 2 

let list = document.querySelectorAll('li');
console.log(list[0]) ;
console.log(list[0].innerHTML) ;

console.log(list[2]) ;
console.log(list[2].innerHTML) ;

list.forEach((item,index)=>{
    console.log(item);
})

*/

/* Q 3 */
let btn = document.querySelector('#btn');
let heading = document.querySelector('h1');

btn.addEventListener('click', () => {
    heading.style.color = "red";
    heading.style.fontSize = "25px";
});

// Q 3 other que

btn.addEventListener(('click'),(e)=>{
    console.log(e.targe);
    console.log(e.type);
    console.log(e.preventDefault());
})

