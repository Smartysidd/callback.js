let array=[2,3,4,5,6,,7,8]
let totalsum=array.reduce(function(accumulator,num){
    accumulator=accumulator+num
    return accumulator
},0)
console.log(totalsum)