const st = require('./stringtime');

let string = st.toString(6185000);
console.log(string); // 1h 43min 5s

let object = st.toObject(6185000);
console.log(object); // { h:1, min:43, s:5 }

let array = st.toArray(6185000);
console.log(array); // [ 0, 0, 0, 0, 0, 0, 1, 43, 5, 0 ]

let milliseconds = st.toMs(['57min', '1h', '5s']);
console.log(milliseconds); // 7025000

let milliseconds2 = st.toMs('57min 1h 5s');
console.log(milliseconds2); // 7025000

let milliseconds3 = st.toMs({ min:57, h:1, s:5 });
console.log(milliseconds3); // 7025000
