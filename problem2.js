// যদি ইনপুটটি একটি valid email না হয় অর্থাৎ ইমেইলে @ না থাকে তাহলে একটি এরোর মেসেজ "Invalid Email" রিটার্ন করবে। 

// Hints :  split() , indexOf() মেথড ব্যবহার করতে পারো। 




// SAMPLE INPUT                    SAMPLE OUTPUT
// zihad@gmail.com                 zihad sent you an email from gmail.com
// farhan34@yahoo.com              farhan34 sent you an email from yahoo.com
// nadim.naem5@outlook.com         nadim.naem5 sent you an email from outlook.com
// fahim234.hotmail.com            Invalid Email
// sadia8icloud.com                Invalid Email





function sendNotification(email) {
    const i = email.indexOf('@')
    const notify = email.slice(0, i) + " sent you an email from " + email.slice(i + 1)
    if (email.includes('@'))
        return notify;
    else
        return "Invalid Email";
}
console.log(sendNotification('nadim.naem5@outlook.com'))

