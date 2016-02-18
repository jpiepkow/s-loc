var locator = require('./index')();
var orig = function() {
    console.log('THIS HAPPENED');
};
locator.register('testGet',orig);
var testGet = locator.get('testGet');
testGet();