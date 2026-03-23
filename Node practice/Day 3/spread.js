let arr1 = [1,2,3,4,5]
console.log(arr1)

let arr2 = [...arr1,4,5,6]
console.log(arr2)

let arr3 = [...arr1,3,4,6,6,7,8,...arr2]
console.log(arr3)