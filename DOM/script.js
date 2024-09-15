console.log("Hello")
console.dir(document.body)
console.log(document.body)

// DOM manipulation


// selecting with id
let heading=document.getElementById("heading");
console.dir(heading)
console.log(heading)

// selecting with class
let heading2=document.getElementsByClassName("heading2");
console.dir(heading2)
console.log(heading2)

// selecting with tags
let p=document.getElementsByTagName("p");
console.dir(p)
console.log(p)


// QUERY selector:

// This is used for tags: If wew need to select only first element
let fele=document.querySelector("p")
console.log(fele)
console.dir(fele)

// This is used for tags: If wew need to select all element. This returns node list
let allele=document.querySelectorAll("p")
console.log(allele)
console.dir(allele)


// used for class: need to write class name using .
let Class=document.querySelector(".heading2")
console.log(Class)
console.dir(Class)

// used for id: need to write class name using #
let ID=document.querySelector("#heading")
console.log(ID)
console.dir(ID)