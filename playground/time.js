/**
 * Created by starsky on 4/25/17.
 */
// Jan 1st 1970 00:00:00 am
let moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

// let date = moment();
// console.log(date.format('h:mm a'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));
// 10:35
// 6:01 am