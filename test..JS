
// calculating Area

let  myradiusarray=[2,3,4,5,8]
function calculatearea(radiusarray){   
    let result=[]
    for(let i=0;i<radiusarray.length;i++){
        result.push(3.14*radiusarray[i]*radiusarray[i])
    }
    return result
}
let FINALAREAS=calculatearea(myradiusarray)
console.log(FINALAREAS)

// calculating circumference

let mycircumradiusarray=[2,3,4,5,8]
function calculatecircumference(radiusarray){
    let result=[]
    for(let i=0;i<radiusarray.length;i++){
        result.push(2*3.14*radiusarray[i])
    }
    return result
}
let finalcircumferance=calculatecircumference(mycircumradiusarray)
console.log(finalcircumferance)

//calculating diameter

let mycirclediameter=[2,3,4,5,8]
function calculatediameter(radiusarray){
    let result=[]
    for(let i=0;i<mycircumradiusarray.length;i++){
        result.push(2*radiusarray[i])
    }
    return result
}
let finaldiameter=calculatediameter(mycirclediameter)
console.log(finaldiameter)