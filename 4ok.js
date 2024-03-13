/*
Write a program to take two numbers from the user and perform Six basic operations:- 
(addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
        
Note: Print the output in the order as mentioned in the question.

Test Case1:
Input: 
12 
5
Output: 
17
7
60
2.4
2
2
*/
const input=require("readline-sync")
let a=input.questionInt("Enter the value of a:")
let b=input.questionInt("Enter the value of b:")
console.log("Addition is:",a+b);
console.log("Subtraction is:",a-b);
console.log("Multiplication is:",a*b);
console.log("Division is:",a/b);
console.log("Integer division is:",Math.floor(a/b));
console.log("Modulus is:",a%b);