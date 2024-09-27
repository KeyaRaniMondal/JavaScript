//------------------------------------------------data access-----------------------------------------------------

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



//------------------------------------------------- nested Objects ---------------------------------------------------------------------

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



//--------------------------------------------------  MAP  --------------------------------------------------------------------

//loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array


const num=[2,4,6,8,20]
function double(num){
    return num*2;
}
const result=num.map(double)
console.log(result)

const double2=n=>n*2;
const out=num.map(double2)

//map in short way
const out1=num.map(n=>n*2)
console.log(out1)




//------------------------------------------------------  FOR EACH LOOP  -------------------------------------------------------------------------

// for each loop doesn't return anything.it can't be assigned to varaible and can't use return
const number=[1,3,4,5,7,8]
number.forEach(n=>console.log(n*2))




//--------------------------------------------------------- Filter --------------------------------------------------------------------------------

//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition and if the value is not present than it returns an empty array

const player=[20,478,468,80,90,60]
const selected=player.filter(p=>p>80)
console.log(selected)





//--------------------------------------------------------- Find --------------------------------------------------------------------------------

//find selects elements based on a condition and returns an array with the elements that fulfilled the condition and if the value is not present than it returns undefined

const players=[20,478,468,80,90,60]
const selectes=player.filter(p=>p>80)
console.log(selectes)

