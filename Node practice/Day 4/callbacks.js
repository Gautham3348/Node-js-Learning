function greet(name,shell){
    console.log("Welcome "+name);
    shell();
}
function shell(){
    console.log("welcome to shell")
}

greet("Gowtham",shell);

setTimeout(()=>{console.log("run after 2secs")},2000);