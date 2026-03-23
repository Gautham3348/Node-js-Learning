const fs = require("fs")

console.log("start");

setTimeout(()=>{console.log("first task")},2000);
setTimeout(()=>{console.log("second task")},1000);

fs.readFile("file.txt",()=>console.log("Read file"));

console.log("end");