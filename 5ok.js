/*
Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

Note: Print the output in the order as mentioned in the question.

Test Case1:
Input:
12
5

Output:
2
2

*/
const input=require("readline-sync")
let a=input.questionInt("Enter the value of a:")
let b=input.questionInt("Enter the value of b:")
console.log("Integer division is:",Math.floor(a/b));
console.log("Modulus is:",a%b);