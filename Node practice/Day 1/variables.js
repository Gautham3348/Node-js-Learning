function scoping(){
    var a = 10;
    let b = 10;
    if(true){
        var a = 20;
        let b = 20;
    }
    console.log(a);
    console.log(b);
}