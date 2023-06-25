let array=[1,2,3,4,5,6,7,8,9,10]
let evenvalues=array.map(function(num){
    return num%2==0
})
console.log(evenvalues)

 const transactions=[1000,2000,3000,4000,5000,6000,8000,-898]
let positivevalues=transactions.filter(function(numm){
    return numm > 0
})
console.log(positivevalues)