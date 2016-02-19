s-loc
==
Description: Service locator with some functionality behond basic register/get

	var locator = require('s-loc')();
	
	var locator = require('./index')();
	var obj = {
    orig : function() {
    console.log('THIS HAPPENED');
	},
    backup: function() {
        console.log('THIS RIGHT HERE')
    },
    third: function() {
        console.log('last one happened');
    },
    last: function() {
        console.log('real lastone');
    }


	};

	locator.register('testGet',obj);
	locator.register('func',obj.last);

	var func = locator.get('func');

	var testGet = locator.get('testGet');
	var testSecond = locator.get('testGet',true);
	var testThird = locator.get('testGet',true,'third');




	func(); //LOGS 'real lastone'
	testGet(); //LOGS 'THIS HAPPENED'
	testSecond(); //LOGS 'THIS RIGHT HERE'
	testThird(); //LOGS 'last one happened'
	
###locator.register	(NAME, Anything)

This is used to register a var in the locator. Note registering objects expose some extra things.

###locator.get(NAME,OVERRIDE(optional,boolean),OVERRIDE_NAME(optional,string))

locator.get is used to get something back out of the registry.

*IF NOT OBJECT:* If you registered a non object you ONLY pass in name to this function. Everything else will error.

*IF OBJECT:*

	just name passed in === Will return first property of object
	
	name and override = true === Will return second property of object
	
	name and overridename === Will return the property with override name

