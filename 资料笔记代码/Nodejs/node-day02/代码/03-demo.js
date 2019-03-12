function foo() {
    setTimeout(function() {
        console.log(1);
    }, 0)
    console.log(2);
}
function bar() {
    setTimeout(function() {
        console.log(3);
    }, 0);
    console.log(4);
}
foo();
bar();