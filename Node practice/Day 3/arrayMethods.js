let arr = [1,2,3,4,5,6]
let newarr = arr.map(n => n+1)
console.log(newarr)

let arr1 = [1,2,3,4,5,6,7,8,9,10]
let evenno = arr1.filter(n=>n%2==0)
console.log(evenno)

let arr2 = [2,4,54,452,24,542,23]
let returnone = arr2.reduce((total,a)=>total+a,0)
console.log(returnone)