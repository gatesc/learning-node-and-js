/* This is an example of how to write formatted output to a file
   using node.js's console object */

/* NOTE: to use the formatted output, I installed the sprintf-js package. See details at https://github.com/alexei/sprintf.js */

(function() {
    'use strict';

     /***********************************************
     * 
     **********************************************/
    var wasteTime = function(input, cb) {
	if ((input % 2) == 0) {
	    setTimeout(cb, input * 1000);
	}
	else {
	    /* do nothing */
	    return cb(null, true);
	}
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
	wasteTime(theVal, function(err, result) {
	    var x = theVal * 2;
	    printIt(theVal, x);
	    return cb(null, x);
	});
    }
    
    /***********************************************
     * 
     **********************************************/
    var tryIt = function(theIntArray, cb) {
	printIt('', 'Inside tryIt');

	var async = require('async');
	async.eachSeries(theIntArray,
		   function(theInt, cb) {
		       doSomething(theInt, function(err, results) {
			   printIt('', 'back from doSomething');
			   return cb(null);
		       })
		   },
		   function(err) {
		       if (err) { printIt('an error occurred'); }
		       
		       printIt('  done processing items');
		   });

	/*
	for (var i=0; i<theIntArray.length; i++) {
	    printIt('  considering i =', i);
	    var theVal = theIntArray[i];
	    doSomething(i, function(err, results) {
		printIt('', 'back from doSomething');
	    });
	    printIt('  done with doSomething callback');
	}
	*/
	
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
