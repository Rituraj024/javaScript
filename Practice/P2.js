function revStr(str){
  let rev = str.split("").reverse().join("");
  return rev;
}
console.log(revStr("Hate"));

// palindrome

const isPalindrome = function(s){
  let rev = s===s.split("").reverse().join("");
  return rev;
}
console.log(isPalindrome("name"));

// Largest no in an array

// let arr = [5,3,7,8,45];
// let largest = arr[0];
// function largestArr(){
//  for(let i=0; i<arr.length; i++){
//    if(arr[i]>largest){
//     return largest = arr[i];
//    }
//  }
// }
// console.log(largestArr(largest));
//or
let arr = [24,75,24,74,85];
let largest;
arr.sort(function(a,b){
  return largest = a>b ? a:b;// Ternary operator
});
console.log(largest);

// Prime no


function primeNo(n){
  for(let i=2; i<n; i++ ){
    if(n%i !==0){
      i++;
    }
  }
}
console.log(primeNo(n));
