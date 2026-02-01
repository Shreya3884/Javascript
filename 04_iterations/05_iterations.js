// reduce function
const mynum=[9,8,7]
const mytotal=mynum.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
        return acc+currval
},0)

const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)

const shoopingcart=[
    {
        price:99
    },
    {
        price:88
    },
    {
        price:500
    },

]
shoopingcart.reduce((acc,item)=>acc+item.price,0) 