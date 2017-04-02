/* This is an example of how to write formatted output to a file
   using node.js's console object */

/* NOTE: to use the formatted output, I installed the sprintf-js package. See details at https://github.com/alexei/sprintf.js */

(function() {
    'use strict';

     /***********************************************
     * 
     **********************************************/
    var wasteTime = function(input) {
	if ((input % 2) == 0) {
	    for (var i=0; i<25000; i++) {
		for (var j=0; j<10000; j++) {
		    var x=i+j/2;
		}
	    }
	}
	else {
	    /* do nothing */
	}
	return;
    }
    
    /***********************************************
     * 
     **********************************************/
    var printIt = function(head, val) {
	console.log(head + '  ' + val);
	return;
    }
    
    /***********************************************
     * 
     **********************************************/
    var doSomething = function(theVal, cb) {
	wasteTime(theVal);
	var x = theVal * 2;
	printIt(theVal, x);
	return cb(null, x);
    }
    
    /***********************************************
     * 
     **********************************************/
    var tryIt = function(theIntArray, cb) {
	printIt('', 'Inside tryIt');
	for (var i=0; i<theIntArray.length; i++) {
	    printIt('  considering i =', i);
	    var theVal = theIntArray[i];
	    doSomething(i, function(err, results) {
		printIt('', 'back from doSomething');
	    });
	}
	printIt('', 'leaving tryIt');
	return cb(null, 'tryIt complete');
    }
    
    /***********************************************
     * MAIN
     **********************************************/
    var main = function() {
        console.log('Testing how to do async operations in a for loop...');
	var theIntArray = [1, 2, 3, 4, 5, 6];
        tryIt(theIntArray, function(err, results) {
	    if (err) { console.log('An error occurred!'); }

	    console.log('The results... ' + results);
            console.log('All Done');
        });
    }
    main();

})();
