const st = require('./stringtime');

let string = st.toString(1000 * 60 * 60 * 24 * 7 * 52 * 1000 * 5);
console.log(string);

let timestamp = st.toTimestamp(['1s', '4000ms']);
console.log(timestamp);
