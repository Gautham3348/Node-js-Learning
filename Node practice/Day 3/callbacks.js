function greet(name, shell) {
    console.log("Hello " + name);
    shell();
}

function shell() {
    console.log("Welcome to shell");
}


greet("Gowtham", shell);

setTimeout(() => {
    console.log("run after 2secs");
}, 2000);
