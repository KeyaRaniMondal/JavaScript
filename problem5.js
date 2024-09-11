// যদি প্রথম ইনপুট Array না হয় এবং ২য় ইনপুট যদি নাম্বার না হয় তাহলে Invalid Input রিটার্ন করবে।

// ফাংশন টি ২ টি ইনপুট নেবে ,  
// একটি হলো Array ( যাদের ভাইভা হয়েছে তাদের সময় )  , অন্যটি হলো  ইসরাতের সিরিয়াল নাম্বার।
// Serial Number >  length of array 



// SAMPLE INPUT                           SAMPLE OUTPUT
// [ 3, 5, 7, 11, 6 ], 10                   24
// [13, 2], 6                               24
// [13, 2, 6, 7, 10], 6                      0
// [6], 4                                   12
// 7 , 10                                 Invalid Input
// "[6,2]", 9                             Invalid Input
// [7, 8, 3, 4, 5], "9"                   Invalid Input




function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== "number")
        return "Invalid Input"

    let sum = 0
    for (const time of waitingTimes) {
        sum += time
    }
    const avg = Math.round(sum / waitingTimes.length)
    const serial = (serialNumber - 1) - waitingTimes.length
    return avg * serial;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10))















