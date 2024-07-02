#!/usr/bin/node
/* function that executes x times a function. */
function executeXTimes(x, theFunction) {
    for (i = 0; i < x; i++) {
        theFunction();
    }
}

function printHello() {
    console.log('Hello');
}

executeXTimes(5, printHello);
