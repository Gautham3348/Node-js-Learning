function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("1 done"), 2000)
    })
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 done"), 3000)
    })
}

Promise.all([task1(), task2()]).then(result =>{console.log(result)})