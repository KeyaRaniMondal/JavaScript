const Name={id:1,name:'keya',profession:'Software Engineer'}
console.log(Name);//{ id: 1, name: 'keya', profession: 'Software Engineer' }
const n=JSON.stringify(Name)
console.log(n)//{"id":1,"name":"keya","profession":"Software Engineer"}


const shop={
    owner:'keya',
    address:{
        street:'airport road ',
        city:'rajshahi',
        country:'Bangladesh',
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:150000,
    isOpen:true,
    isNew:false
}

console.log(shop)

const shopjson=JSON.stringify(shop);
console.log(shopjson)