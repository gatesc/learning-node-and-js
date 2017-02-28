/* This is an example of how to write formatted output to a file
   using node.js's console object */

/* NOTE: to use the formatted output, I installed the sprintf-js package. See details at https://github.com/alexei/sprintf.js */

(function() {
    'use strict';

    /***********************************************
     * Create some objects that can be output to a file
     **********************************************/
    var car1 = {
        model:    'honda',
        extColor: 'blue',
        intColor: 'tan',
        type:     'car',
        year:     1978,
        years_owned: 5
    }

    var car2 = {
        model:    'toyota',
        extColor: 'red',
        intColor: 'tan',
        type:     'car',
        year:     1990,
        years_owned: 3
    }

    var car3 = {
        model:    'ford',
        extColor: 'black',
        intColor: 'gray',
        type:     'car',
        year:     1991,
        years_owned: 12
    }

    var boat1 = {
        model:    'seaquest',
        extColor: 'white',
        intColor: 'white',
        type:     'boat',
        year:     1987,
        years_owned: 5
    }

    /***********************************************
     * writeObjsToOutput
     **********************************************/
    var writeObjsToOutput = function(outFile, cb) {
        var sprintf = require('sprintf-js').sprintf;
        var s;
        s = sprintf('%-10s %-8s %-8s %-5s %-4s %-2s', 'model', 'extColor', 'intColor', 'type', 'year', 'owned'); outFile.log(s);
        s = sprintf('%-10s %-8s %-8s %-5s %-4s %-2s', '-----', '--------', '--------', '----', '----', '-----'); outFile.log(s);

        s = sprintf('%-10s %-8s %-8s %-5s %-4d %-2d', car1.model, car1.extColor, car1.intColor, car1.type, car1.year, car1.years_owned); outFile.log(s);
        s = sprintf('%-10s %-8s %-8s %-5s %-4d %-2d', car2.model, car2.extColor, car2.intColor, car2.type, car2.year, car2.years_owned); outFile.log(s);
        s = sprintf('%-10s %-8s %-8s %-5s %-4d %-2d', car3.model, car3.extColor, car3.intColor, car3.type, car3.year, car3.years_owned); outFile.log(s);
        s = sprintf('%-10s %-8s %-8s %-5s %-4d %-2d', boat1.model, boat1.extColor, boat1.intColor, boat1.type, boat1.year, boat1.years_owned); outFile.log(s);

        return cb(null, null);
    }

    /***********************************************
     * MAIN
     **********************************************/
    var main = function() {
        var fs = require('fs');
        var Console = require('console');

        // Connect console to a output file stream
        var outFilename = './outFile.txt';
        var outStream = fs.createWriteStream(outFilename);
        var outFile = new console.Console(outStream);

        console.log('Writing output to outFile.txt');
        writeObjsToOutput(outFile, function() {
            console.log('Finished writing output to outFile.txt');
        });
    }
    main();



})();