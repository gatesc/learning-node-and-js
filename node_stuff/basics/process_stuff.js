#!/usr/bin/env nodejs

/* This is to demonstrate some of the stuff you can do with the PROCESS module of node.js */

/* NOTE: since it is global to node.js, the process stuff doesn't require a "require" */

/* NOTE: I'm using a notation that defines stuff inside a function to limit its scope. An example of this
   can be found at http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/ */

(function() {
    'use strict';

    /***************************************************************
    * Set up some hooks to handle when the program is about to end 
    ***************************************************************/
    process.on('beforeExit', function() {
	console.log('At the moment before I exit...')
	showMemoryUse();
	showTimeRunning();
    });

    process.on('exit', function(code) {
	console.log('Exiting with code: ' + code);
    });

    
    /***************************************************************
    * Handle the command line arguments
    ***************************************************************/
    var processArgs = function(theArgs) {
	/* process the arguments to the program */
	console.log("The arguments array...");
	console.log(theArgs);
	console.log("Showing them with their index...");
	theArgs.forEach( function(theVal, theIndex) {
	    console.log(`theArgs[${theIndex}] = ${theVal}`);
	});
    }

    /***************************************************************
    * Show the environment variables
    ***************************************************************/
    var processEnv = function(theEnv) {
	/* process the environmental variables */
	console.log("The env object...");
	console.log(theEnv);
	console.log("The hostname is... " + theEnv["HOSTNAME"]);
	console.log("The user is... " + theEnv["USER"]);
    }

    /***************************************************************
    * Show the memory usage
    ***************************************************************/
    var showMemoryUse = function() {
	printMsg('The memory usage info is:');
	console.log(process.memoryUsage());
    }

    /***************************************************************
    * Show some system info
    ***************************************************************/
    var showSysInfo = function() {
	printMsg('The pid is ' + process.pid);
	printMsg('Running on platform ' + process.platform);
    }
    
    /***************************************************************
    * Show the running time
    ***************************************************************/
    var showTimeRunning = function() {
	console.log('Running for ' + process.uptime() + ' seconds');
    }
    
    /***************************************************************
    * Function that represents a function that does "work"
    ***************************************************************/
    var printMsg = function(message) {
	console.log("<msg>:  " + message);
    }

    /***************************************************************
    * Main
    ***************************************************************/
    var main = function() {
	/* NOTE: this stuff is processed sequentially.  In reality, this may need
	   to have callbacks to handle the async case */
	
	/* process the args */
	processArgs(process.argv);

	/* process the env vars */
	processEnv(process.env);

	/* show some system info */
	showSysInfo();
	
	/* do some work */
	printMsg('Hi Mom');

	/* get CWD */
	let cwd = process.cwd();
	printMsg('The current working directory is:  ' + cwd);

	/* change to /tmp */
	let tmp = '/tmp';
	printMsg('Changing to directory ' + tmp);
	process.chdir(tmp);
	printMsg('The current working directory is:  ' + process.cwd());
	printMsg('Changing back to the original directory');
	process.chdir(cwd);
	printMsg('The current working directory is:  ' +  process.cwd());
	
	/* exit */
	//process.exit(0);
    }

    /***************************************************************
    * CALL the MAIN function
    ***************************************************************/
    main();
})();
