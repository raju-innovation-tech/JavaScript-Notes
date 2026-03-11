//find a factorial of a number

let factorial=(x)=>{
    let fact = 1;
    for(let i=1; i<=x; i++){
       fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));
