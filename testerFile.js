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
var testGet = locator.get('testGet');



func();
