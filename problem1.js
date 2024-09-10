// Hints 💡:  income 10000 টাকা এবং expense 3000 টাকা হলে তাঁর আয় এবং খরচের পার্থ্যক্য হবে 
// 10000-3000 = 7000 টাকা।  সুতরাং তার ট্যাক্স হবে (7000 * .20)  =1400  টাকা। 


// SAMPLE INPUT           SAMPLE OUTPUT
// 10000, 3000            1400
// 34000, 1753            6449.400000000001
// 5000, 1500             700
// 7000, 7000              0
// -5000, 2000            Invalid Input
// 6000, -1500            Invalid Input




function calculateTax(income, expenses) {
    const remaining=income-expenses;
    if(remaining<0 || income<0 || expenses<0)
        return  "Invalid Input";
    else
        return remaining *.20;
}
console.log(calculateTax(6000, -1500))























                       




