1.
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors=['red', 'blue', 'green', 'yellow', 'orange']

1.
console.log(colors.reverse())

2.
const rev_colors=[]
for(const color of colors)
{
rev_colors.unshift(color)
}
console.log(rev_colors)

3.
for(i=colors.length-1;i>=0;i--)
{
    console.log(colors[i])
}


2.
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers=[12, 98, 5, 41, 23, 78, 46];
new_num=[]
for(i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
        new_num.push(numbers[i])
}
console.log(new_num)


3.
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var number=['Tom', 'Tim', 'Tin', 'Tik']
let number1=' '
for(num of number)
{
    number1+=num
}
console.log(number1)


4.
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'
const new_statement=statement.split(' ').reverse().join(' ')
console.log(new_statement)