
console.log("This program does a simple test of const/var/let.");
console.log("I want to see the scoping of javascript variables inside functions/loops/etc");

var aGlblVar = 9999;
var aGlblLet = 1111;

(function() {
    "use strict";

    var aAnonVar = 0;
    let aAnonLet = 1;

    var main = function() {
        var aMainVar = 2;
        let aMainLet = 3;

        showVariables("Inside main", aAnonVar, aAnonLet, aMainVar, aMainLet);
    }

    var showVariables = function(calledFrom, aAnonVar, aAnonLet, aMainVar, aMainLet) {
        console.log("================================");
        console.log("CALLED FROM..." + calledFrom);

        if (aGlblVar) {
            console.log("aGlblVar...  " + aGlblVar);
        }
        else {
            console.log("aGlblVar is not defined");
        }
        if (aGlblLet) {
            console.log("aGlblLet...  " + aGlblLet);
        }
        else {
            console.log("aGlblLet is not defined");
        }

        if (aMainVar) {
            console.log("aMainVar...  " + aMainVar);
        }
        else {
            console.log("aMainVar is not defined");
        }
        if (aMainLet) {
            console.log("aMainLet...  " + aMainLet);
        }
        else {
            console.log("aMainLet is not defined");
        }
    }

    // Run main
    showVariables("Outside Main, Inside Anon Function", aAnonVar, aAnonLet, null /*aMainVar*/, null /*aMainLet*/);
    main();

})();

/* The following statement is invalid because showVariables is inside the anon function so it is no longer defined */
//showVariables("Outside Anon Function", aAnonVar, aAnonLet, null /*aMainVar*/, null /*aMainLet*/);
