//data access

const data=[{id:1,name:'abcd',address:'where ever'}];
// console.log(data)    //this is not showing all attributes of object rather showing [ { id: 1, name: 'abcd', address: 'where ever' } ] and we can't access an array like this.

// console.log(data.name)//This will throw error

// console.log(data[0].name)//As the object is in array so we need to access this way


const products={
    count:5000,
    data:[
        {id:1,name:'lenovo laptop',price:65000},
        {id:2,name:'mackbook',price:165000},
    ]
}
// console.log(products)

//need to access all info about id=2 from data
// console.log(products.data[1])

//need to access all info about id=2 from data than get the price
// console.log(products.data[1].price)



//nested Objects

const user={
    id:5001,
    name:'Mina',
    address:{
        street:{
            first:'54/1 uttora',
            second:'poribag er goli',
            third:'no dorai',
        },
        city:'Dhaka'
    }
}
// console.log(user)

//to get address
console.log(user.address)

//to get street from address
console.log(user.address.street)

//to get second street from address
console.log(user.address.street.second)//this is called chaining

console.log(user.address.street?.second)//this is called optional chaining