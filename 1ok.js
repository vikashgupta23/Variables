/*
Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.

Test Case1:
Explanation:
If the birth date is 22, the birth  is May and the birth year is 2001 then
Output:
22
May
2001
*/
const input=require("readline-sync")
let dd=input.questionInt("Enter the value of date:")
let mm=input.question("Enter the name of month:")
let yy=input.questionInt("Enter the value of year:")
console.log("Date of:",dd);
console.log("Month of:",mm);
console.log("Year of",yy);