

### stringtime
This module lets you convert time in milliseconds to an Object with time length in hours, minutes etc or an array with strings or string to the corresponding time in milliseconds.


### Installation
```
npm install stringtime --save
```

### Getting started
```js
const st = require('stringtime');
```

### Getting string version of milliseconds
```js
let string = st.toString(6185000);
console.log(string); // { h:1, min:43, s:5 }
```

### Getting milliseconds of string time
```js
let milliseconds = st.toMs(['1s', '750ms', '3min']);
console.log(milliseconds); // 181750

let milliseconds2 = st.toMs('57min');
console.log(milliseconds); // 3420000
```

### Result on invalid input
```
Invalid input
```

### string timeframes
```
ML: Millenium
C: Century
DEC: Decade
YR: Year
WK: Week
D: Day
h: Hour
min: Minute
s: Second
ms: Millisecond
```
