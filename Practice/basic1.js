// const Product = {
//   Name : "Parker",
//   price : 270,
//   title : "Ball pen",
//   rating : 4
// };
// Product["Name"] = "Reynolds"; // if u want to update the value.
// console.log(Product.Name);

// find the multiple of 5

// let num = prompt("enter a number");
// if(num%5 ===0){
//  console.log("Multiple of 5")
// }
// else{
//   console.log("Not");
// }

// let student;
// let score = 90;
// let grade;
// if(score>=90 && score<=100){
//    console.log("grade id A");
// }
// else if(score>=70 && score<=89){
//   console.log("grade is B");
// }
// else if(score>=60 && score<=69){
//   console.log("grade is C");
// }
// else{
//   console.log("Fail");
// }

// find the even num from 0 to 100

//   for(let num=0; num<=100; num++){
//     if(num%2===0){
//     console.log(num);
//   }
// }
// let num = 20;
// let user = prompt("enter the num");

// while(user != num){
//   user = prompt("enter again");
// }

// console.log("right num");

//for of loop
// let str = "abcdef"
// for(let val of str){
//   console.log(val);
// }

// for in loop
// let student ={
//   name : "john",
//   age : 28,
//   branch: "mechanical"
// }
// for(let key in student){
//   console.log(key, student[key]);
// }

//String

// let fullName = prompt("Enter the full name");
// let userName = "@"+fullName;
// console.log(userName);

//Arrays

// let marks = [67,98,30,60,70,40];
// let sum = 0;
// for(let val of marks){
//   sum += val;
// }
// let avg = sum/marks.length;
// console.log(avg);


//Reverse String

// function reverseStr(){
//   let str = "Good vives"
//   return str.split("").reverse().join("")
// };
// console.log(reverseStr());

// // Palindrome
// function isPalindrome(str){
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome("rare"));
// console.log(isPalindrome("madam"));

// // find the Prime num

// function isPrime(num) {
//   if (num <= 1) {
//       return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//           return false;
//       }
//   }
//   return true;
// }
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(10)); // Output: false

//Arrow function

// let multi = (a,b)=>{
//   console.log(a*b);
// }
// multi(3,8);


// find out how many vowels in a string

// const countvowels =(str)=>{
//   let count=0;
//   for( let char of str){
//     if(char==="a" || char==="e" || char==="i" || char==="o"|| char==="u"){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countvowels("lovethe way"));

//Print the square of given array using forEach loop

// let arr = [5,7,6,9,3];
// arr.forEach((val)=>{
//   console.log(val**2)
// })

// find the largest no from an array

const arr = [7,2,6,9,46];
const Output = arr.reduce((res, curr)=>{
  return res>curr?res:curr;
});
console.log(Output);

