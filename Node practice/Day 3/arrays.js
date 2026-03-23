let arr = [1,2,3,4,5];

console.log(arr[2])

console.log(arr.length)

arr.push(8);

console.log(arr)

arr.pop()

console.log(arr)

for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

console.log();

arr.forEach(n=>console.log(n+1));