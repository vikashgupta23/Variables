/*
Write a program to take two inputs from the user and swap them without using a temporary or third variable.

Test Case1:
Input:
2
3

Output:
3
2

*/
const input=require("readline-sync")
let a=input.questionInt("Enter the value of a:")
let b=input.questionInt("Enter the value of b:")
a=b+a;
b=a-b;
a=a-b;
console.log("a is:",a);
console.log("b is:",b);
