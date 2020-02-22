const ERROR = {

  INVALID_INPUT:'Invalid input'

}

const timeframes = {
  ML:1000 * 60 * 60 * 24 * 7 * 52 * 10 * 10 * 10,
  C:1000 * 60 * 60 * 24 * 7 * 52 * 10 * 10,
  DEC:1000 * 60 * 60 * 24 * 7 * 52 * 10,
  YR:1000 * 60 * 60 * 24 * 7 * 52,
  WK:1000 * 60 * 60 * 24 * 7,
  D:1000 * 60 * 60 * 24,
  h:1000 * 60 * 60,
  min:1000 * 60,
  s:1000,
  ms:1
}

module.exports.toString = function(timestamp){

  let string = {};

  timestamp = parseInt(timestamp);

  if(!timestamp) return ERROR.INVALID_INPUT;

  for(let key in timeframes){

    string[key] = Math.floor(timestamp / timeframes[key]);

    timestamp = timestamp - string[key] * timeframes[key];
  }

  return string;

}

module.exports.toTimestamp = function(strings){

  let timestamp = 0;

  if(Array.isArray(strings)){

    for(let i = 0; i < strings.length; i++){

      let splitted = stringSplit(strings[i]);

      if(!splitted) return ERROR.INVALID_INPUT;

      timestamp += splitted.t * timeframes[splitted.tf];

    }

  }

  if(typeof strings === 'string'){

    let splitted = stringSplit(strings);

    timestamp = timeframes[splitted.tf] ? splitted.t * timeframes[splitted.tf] : false;
  }

  return timestamp;
}

function stringSplit(string){

  let t;
  let tf;

  for(let i = 0; i < string.length; i ++){

    if(!parseInt(string[i] + 1)){

      t = string.slice(0, i);
      tf = string.slice(i, string.length);

      if(!t || !tf || !timeframes[tf]) return false;

      return { t:t, tf:tf };
    }
  }
}
