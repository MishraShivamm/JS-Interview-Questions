// let x = prompt("Enter x");
// let z = x.split('').reverse().join('');

// if (x === z) {
//   console.log("true");
// } else {
//   console.log("false");
// }
const checkPalindrome = (x)=>{
    return x === +x.toString().split("").reverse().join("");
}
// 121 => "121"->["1","2","1"]=> ["1","2","1"]=>"121"
const res = checkPalindrome(x);
console.log(res);
