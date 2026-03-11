
// count vowel in a string

/* let vowelLetter ="aeiouAEIOU";
let checkVowel = (str)=>{
    for(let v of str){
        console.log(v,vowelLetter);
    }
}
checkVowel("welcome");
 */

let vowelLetters = "aeiouAEIOU";

let checkVowel = (str) => {
    let count = 0;
    for (let v of str) {
       if(vowelLetters.includes(v)){
        count++;
       }
    }
    return count;
}
console.log(checkVowel("welcome"));