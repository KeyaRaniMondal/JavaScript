1.
//Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
    return a * b * c * d;
}
const m = multiply(5, 6, 7, 8)
const m1 = multiply(1, 2, 3, 4)
console.log(m, m1)


2.
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function evenOddMultiply(n) {
    if (n % 2 === 1)
        return n * 2
    else
        return n / 2
}
const eo = evenOddMultiply(10)
const eo1 = evenOddMultiply(15)
console.log(eo, eo1)


3.
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arr, size) {
    let sum = 0
    for (const a of arr) {
        sum += a;
    }
    return sum / size;
}
const arr = [2, 3, 4, 5, 6, 7, 8]
const avg = make_avg(arr, arr.length)
console.log(avg)


4.
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(binary)
{
    let count=0;
    for(i=0;i<binary.length;i++)
    {
        if(binary[i]==='0')
            count++;
    }
    return count
}
const str='001010100'
console.log(count_zero(str))


5.
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(n) {
    if(n%2===0)
        return 'even';
    else
    return 'odd';
}
const n1=odd_even(10)
const n2=odd_even(3)
const n3=odd_even(0)
console.log(n1,n2,n3)


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}