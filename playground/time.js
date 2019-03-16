var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp)
var createdAt = 1234;
var date = moment(createdAt);
// date.add(200, 'year').subtract(9, 'month');
console.log(date.format('LT :: h:mm A'));