#!/usr/bin/env nodejs

/* Code to read a file via node.js and display it to the screen
   Used to demonstrate (1) how to read the file and (2) using
   node.js callback mechanism
*/

(function() {
    "use strict";
    var fs = require('fs');
    var inputFile = "input.txt";

    /* trivial method */
    var theData = fs.readFile(inputFile);
    console.log(theData);
})();


