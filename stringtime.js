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

module.exports.toString = function(ms){
  let string = '';
  ms = parseInt(ms);

  if(!ms) return ERROR.INVALID_INPUT;

  for(let key in timeframes){
    let stringtime = Math.floor(ms / timeframes[key]);
    if(stringtime > 0){
      if(string.length > 0) string += ' ';
      string += stringtime + key;
      ms = ms - stringtime * timeframes[key];
    }
  }
  return string;
}

module.exports.toObject = function(ms){
  let obj = {};
  ms = parseInt(ms);

  if(!ms) return ERROR.INVALID_INPUT;

  for(let key in timeframes){
    let stringtime = Math.floor(ms / timeframes[key]);
    if(stringtime > 0){
      obj[key] = stringtime;
      ms = ms - obj[key] * timeframes[key];
    }
  }
  return obj;
}

module.exports.toArray = function(ms){
  let array = Array.apply(undefined, Array(10)).map(() => { return 0 })
  ms = parseInt(ms);

  if(!ms) return ERROR.INVALID_INPUT;

  let timeframeIndex = 0

  for(let key in timeframes){
    let stringtime = Math.floor(ms / timeframes[key]);
    if(stringtime > 0){
      array[timeframeIndex] = stringtime;
      ms = ms - stringtime * timeframes[key];
    }
    timeframeIndex++
  }
  return array;
}

module.exports.toMs = function(time){
  let ms = 0;

  if(Array.isArray(time)){
    for(let i = 0; i < time.length; i++){
      let splitted = stringSplit(time[i]);
      if(!splitted) return ERROR.INVALID_INPUT;
      ms += splitted.t * timeframes[splitted.tf];
    }
  }

  if(typeof time === 'object' && typeof time !== null){
    for(let t in time){
      if(timeframes[t]) ms += timeframes[t] * time[t]
    }
  }

  if(typeof time === 'string'){
    let times = time.split(' ')
    for(let i = 0; i < times.length; i++){
      let splitted = stringSplit(times[i]);
      if(!splitted) return ERROR.INVALID_INPUT;
      ms += timeframes[splitted.tf] ? splitted.t * timeframes[splitted.tf] : false;
    }
  }

  return ms;
}

function stringSplit(time){

  let t;
  let tf;

  for(let i = 0; i < time.length; i ++){
    if(!parseInt(time[i] + 1)){
      t = time.slice(0, i);
      tf = time.slice(i, time.length);
      if(!t || !tf || !timeframes[tf]) return false;
      return { t:t, tf:tf };
    }
  }
}
