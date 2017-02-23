#!/usr/bin/env nodejs

/****************************************************
 * This is to demonstrate how to use the prompting 
 *
 * See lots of other features and examples at
 *    https://www.npmjs.com/package/prompt
 ****************************************************/
(function() {
    'use strict';
    var prompt = require('prompt');
    prompt.start();

    var basicPrompt = function(callback) {
	/******************************************
	 * Let's prompt for a username and email
	 ******************************************/
	prompt.get(['username', 'email'], function(err, theResult) {
            if (!err) {
                console.log('The username and email are...');
                console.log('   username:  ' + theResult.username);
                console.log('   email:     ' + theResult.email);
            }
            else {
                console.log('An error occurred');
            }
            return callback(err, theResult);
	});
    }

    var pwPrompt = function(callback) {
	/******************************************
	 *  example prompting for a password
	 ******************************************/
	// need to set a property to hide the typed characters
	var properties = [{name: 'username'}, {name: 'password', hidden: true, replace: '*'}];
	prompt.get(properties, function(err, theResult) {
            if (!err) {
		console.log('The username and password are...');
		console.log('    username:   ' + theResult.username);
		console.log('    password:   ' + theResult.password);
            }
            else {
		console.log('An error occurred');
            }
            return callback(err, theResult);
	});
    }

    var main = function() {
        basicPrompt(function(err, theResult) {
            console.log("done with basic prompt");
            pwPrompt(function(err, theResult) {
                console.log("done with pw prompt");
            });
        })
    }

    main();
}
)();
