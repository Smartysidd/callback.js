// calculating square of array by using  map function

// let arr=[1,2,3,4,5]
// let squaredarray =arr.map(function (sidd){
// return sidd*sidd
// })
// console.log(squaredarray)

// calculating square of array without using  map function

// let array=[1,2,3,4,5]
// let squarearray=[]
// for(let i=0;i<array.length;i++){
//     squarearray.push(array[i]*array[i])
// }
// console.log(squarearray)

// calculating addition of array elements without using  map function

// let array=[1,2,3,4,5]
// let additionarray=[]
// for(let i=0;i<array.length;i++){
//     additionarray.push(array[i]+array[i])
// }
// console.log(additionarray)
 
// calculating addition of array elements using  map function

// let array=[1,2,3,4,5]
// let additionarray=array.map(function(sidd){
//     return sidd+sidd
// })
// console.log(additionarray)

// calculating substraction of array elements without  using  map function

// let array=[1,2,3,4,5]
// let substractionarray=[]
// for(let i=0;i<array.length;i++){
//     substractionarray.push(array[i]-array[i])
// }
// console.log(substractionarray)

// calculating substraction of array elements by using  map function


// let array=[500,400,3,2,1]
// let substractionarray=array.map(function(sidd){
//     return sidd-sidd
// })
// console.log(substractionarray)


// calculating area of circle by using  map function

// let array=[2,3,4,5,6]
// let circlearea=array.map(function(num){
//     return Math.PI*num*num
// })
// console.log(circlearea)

// calculating area of circle without using map  function

// let array=[2,3,4,5,6]
// let circlearea=[]
// for(let i=0;i<array.length;i++){
//     circlearea.push(Math.PI*array[i]*array[i])
// }
// console.log(circlearea)

// calculating circumference of circle without  map  function

let circumarray=[2,3,4,5]
let circumferencearray=[]
for(let i=0;i<circumarray.length;i++){
    circumferencearray.push(2*Math.PI*circumarray[i])
}
console.log(circumferencearray)

// calculating circumference of circle by using  map  function

// let circumarray=[2,3,4,5]
// let circumferencearray=circumarray.map(function(num){
//     return 2*Math.PI*num
// })
// console.log(circumferencearray)

//Question:

const transactions=[1000,3000,4000,2000,-898,3800,-4500];
const inrtoUsd=80;

//use map

let conversiontodollars=transactions.map(function(amount){
    return amount/inrtoUsd
})
console.log(conversiontodollars)
console.log(transactions)
