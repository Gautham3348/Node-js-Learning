function sync(){
    console.log("first");
    console.log("second");
}
sync()

function async(){
    setTimeout(()=>{console.log("one")},1000);

    setTimeout(()=>{console.log("two")},2000);

    setTimeout(()=>{console.log("third")},500);

}

async()