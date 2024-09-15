// convert inch to feet
function inchToFeet(inch) {
    const feet = inch / 12
    return feet
}
const height = inchToFeet(75)
console.log(height)

function inchToFeet2(inch) {
    //converts decimal nuumber into integer number. 6.25 would be shown as 6
    const feet2 = inch / 12
    const feetnum = parseInt(feet2)
    const inchi = inch % 12
    const result = feetnum + ' ft ' + inchi + ' inch '
    return result
}
const height2 = inchToFeet2(75)
console.log(height2)




// Mile to kilometer conversion
function mileToKilometer(mile) {
    const kilo = mile * 1.60934
    return kilo
}
console.log(mileToKilometer(1000))



// fulty technique
// Year will be leap year if it is divisible by 4
function isLeapYear(year) {
    if (year % 4 == 0)
        return true
    else
        return false
}
console.log(isLeapYear(2043))

// justified technique
function isLeapYear(year) {
    // if((year %100!=0 && year%4==0) || year%400==0)
    //     return true

    if (year % 100 != 0 && year % 4 == 0)
        return true
    else if (year % 100 == 0 && year % 400 == 0)
        return true
    return false
}
console.log(isLeapYear(2024))





// Remove Dublicate elements from an array

function unique(items) {
    const unq = []
    for (const item of items) {
        if (unq.includes(item) === false)
            unq.push(item)
    }
    return unq
}
const dub_array = [1, 3, 5, 2, 5, 7, 9, 1]
console.log(unique(dub_array))





//                    min function 

// creating min function using object

// const Math={
//     min:function min(num1,num2){
//         return num2
//     }      
// }
// console.log(Math.min);

// we have built in min function in javaScript
const min=Math.min(2,100,50,0,200,-10)
console.log(min)

// we have built in max function in javaScript
const mx=Math.max(2,100,50,0,200,-10)
console.log(mx)


// *********************************************************

// round,ceil,floor,random check all those functions

// *********************************************************