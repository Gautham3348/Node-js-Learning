function name(name, callback){
    console.log(name);
    callback(name);
}

function bye(name){
    console.log("Bye")
}

name("Gowtham",bye)