1.
/*Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk*/

const Burger=450;
if(Burger>500)
{
    console.log("free Coke");
}
else
{
    console.log("Coke=30 tk");
}


2.
// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

const weight=42
const height=5*0.3048;  //foot to meter
const BMI=weight/(height*height);
console.log(BMI)
if(BMI<18.5)
    console.log("you are underweight.")
else if(BMI >= 18.5 && BMI <=24.9)
    console.log("you are normal.")
else if(BMI >=25 && BMI <= 29.9)
    console.log("you are overweight")
else
console.log(" you are obese.")


3.
// you have two numbers in two variables, called: num1, num2

// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.

const num1=1
const num2=2
let result=0
num1>num2 ? result=num1*2 : result=num1+num2;
console.log(result)