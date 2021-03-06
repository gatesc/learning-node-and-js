/* demonstrating that a javascript object is a 
   associative array that contains multiple
   key-value pairs */

(function() {
    var main = function() {
	console.log("Demonstrating that javascript objects are associative array");

	// Using dot notation
	var obj1 = new Object();
	obj1.model = "Honda";
	obj1.color = "Red";
	obj1.type  = "car";

	console.log("The object is..."); console.log(obj1);
	console.log("The object.model is..."); console.log(obj1.model);


	// Using array notation
	var obj2 = {};
	obj2["model"] = "Toyota";
	obj2["color"] = "Blue";
	obj2["type"]  = "car";

	console.log("The object is..."); console.log(obj2);
	console.log("The object['model'] is..."); console.log(obj2["model"]);
	let f = 'color';
	console.log("The color is..."); console.log(obj2[f]);    

	console.log("NOTE: although both notations can be used, the dot notation is useful when you know the field name you're looking up. The array notation is useful when lookingup fields dynamically (ie, via a variable)");

	// You can create a fixed object by just setting the fields,
	// But the syntax is different (again)
	// Here's an example...
	console.log("creating an object with literal values");
	var obj3 = {
	    model: "Mazda",
	    color: "Gray",
	    type:  "car"
	};
	console.log("The object is..."); console.log(obj3);
	console.log("The object['model'] is..."); console.log(obj3["model"]);

	// creating a nested object
	var obj4 = {};
	obj4['model'] = "Volvo";
	obj4['color'] = {};
	obj4['color']['exterior'] = "Gray";
	obj4['color']['interior'] = "Tan";
	obj4['type'] = 'car';
	console.log('Nested object...');
	console.log(obj4);
	
	var obj5 = {
	    model: 'Ford',
	    color: {
		exterior: 'Black',
		interior: 'Gray'
	    },
	    type: 'car'
	}
	console.log('Another nested object...');
	console.log(obj5);

	// Example storing an array in the associative array
	console.log('Storing an array in a javascript assocative array (ie, object)');
	var obj6 = {
	    base_ints: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	    even_ints: [2, 4, 6, 8, 10],
	    odd_ints:  [1, 3, 5, 7, 9]
	}
	console.log('The obj is...'); console.log(obj6);


	// showing arrays using a function
	showAssocArray("obj6", obj6);
    }

    var showAssocArray = function(assocArrName, theAssocArray) {
	console.log("Showing associative array..." + assocArrName);
	for (var k in theAssocArray) {
	    console.log(assocArrName + "[" + k + "] = " + theAssocArray[k]);
	}
    }

    
    /* call main */
    main();
    
})();
