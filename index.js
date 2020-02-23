const st = require('./stringtime');

let string = st.toString(3785000);
console.log(string);

let ms = st.toMs(['1s', '750ms', '3min']);
console.log(ms);
