s-loc
==
Description: Basic service locator 

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

	locator.register('func',obj.last);

	var func = locator.get('func');





	func(); //LOGS 'real lastone'
	
###locator.register	(NAME, Anything)

This is used to register a var in the locator. Note registering objects expose some extra things.


