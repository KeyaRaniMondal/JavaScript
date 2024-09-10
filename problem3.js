// ইনপুট যদি স্ট্রিং বাদে অন্য কিছু হয়, তবে "Invalid Input" রিটার্ন করবে।


// SAMPLE INPUT           SAMPLE OUTPUT 
// Raj123                   true
// Suman                    false
// Name2024                 true
// !@#                      false
// ["Raj"]                  Invalid Input





function checkDigitsInName(name) {
    if (typeof name === "string") {
        let flag = false
        for (const num of name) {
            if (!isNaN(parseInt(num))) {
                flag = true;
                break;
            }
        }
        return flag
    }
    else
        return "Invalid Input"
}
console.log(checkDigitsInName("Raj"))
