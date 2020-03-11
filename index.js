const st = require('./stringtime');

let string = st.toString(3785000);
console.log(string); // { h:1, min:43, s:5 }

let ms = st.toMs(['1s', '750ms', '3min']);
console.log(ms); // 181750

let ms2 = st.toMs('57min');
console.log(ms2); // 3420000
