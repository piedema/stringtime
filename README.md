

### stringtime
This module lets you convert passed time in milliseconds to a String, Object or Array representation or vice versa.


### Installation
```
npm install stringtime
```

### Getting started
```js
const st = require('stringtime');
```

### Getting string version of milliseconds
```js
let string = st.toString(6185000);
console.log(string); // 1h 43min 5s
```

### Getting object version of milliseconds
```js
let object = st.toObject(6185000);
console.log(object); // { h:1, min:43, s:5 }
```

### Getting array version of milliseconds
```js
let array = st.toArray(6185000);
console.log(array); // [ '1h', '43min', '5s' ]
```

### Getting milliseconds of array, string, object
```js
let milliseconds = st.toMs(['57min', '1h', '5s']);
console.log(milliseconds); // 7025000

let milliseconds2 = st.toMs('57min 1h 5s');
console.log(milliseconds2); // 7025000

let milliseconds3 = st.toMs({ min:57, h:1, s:5 });
console.log(milliseconds3); // 7025000
```

### Result on invalid input
```
Invalid input
```

### Timeframes
```
ML: Millennium
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
