import moment from 'moment';

const format = "DD-MM-YYYY HH:MM:SS";

let now = moment(); // todays DATE 
let newDate = now.format(format); // STRING

console.log(newDate);

const addedDate = moment(newDate, format).add(2, 'days').add(4, 'hours').add(3, 'minutes');
console.log(addedDate);

now.add(2, 'days').add(4, 'hours').add(3, 'minutes');
console.log(now);

const date1 = moment("2023-08-08", "YYY-MM-DD");
const date2 = moment("2022-01-09", "YYY-MM-DD");

console.log(date1.isBefore(date2));
console.log(date1.isSame(date2));

