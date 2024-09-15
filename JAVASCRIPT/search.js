const products=[
    {id:1,name:'Oppo phone',price:12000},
    {id:1,name:'hp laptop',price:70000},
    {id:1,name:'Macbook air',price:120000},
    {id:1,name:'lenovo',price:4000},
    {id:1,name:'iphone',price:100000},
    {id:1,name:'samsung galaxy',price:32000}
]

function matchedProducts(products,search)
{
    const matched=[]
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
            matched.push(product)
    }
    return matched
}
console.log(matchedProducts(products,'phone'))