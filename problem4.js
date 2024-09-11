// যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি  "Invalid Input"
// Input :  একটি অব্জেক্ট ইনপুট হিসেবে নেবে।  অবজেক্ট এ অবশ্যই name,  testScore, schoolGrade, isFFamily প্রোপার্টি গুলো থাকবে।  যেখানে 
// typeof name = string 
// typeof testScore= number ( testScore <= 50) 
// typeof schoolGrade = number ( schoolGrade <=30) 
// typeof  isFFamily = boolean


// SAMPLE INPUT                                                                          SAMPLE OUTPUT
// { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }                  true
// { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }                  false
// "hello"                                                                                Invalid Input 
// { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }                  false               




function calculateFinalScore(obj) {
    if (typeof obj !== "object")
        return "Invalid Input"
    let result = 0
    if (obj.testScore <= 50)
        result += obj.testScore
    if (obj.schoolGrade <= 30)
        result += obj.schoolGrade
    if (obj.isFFamily === true)
        result += 20
    if(result>=80)
        return true
    else
        return false
}

const input = {
    name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  
};

console.log(calculateFinalScore(input))
