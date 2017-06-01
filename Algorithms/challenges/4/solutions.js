// #1) Skyline Heights
function skyline(buildings) {
  // iterate through and put buildings encountered higher than current height into a new array
  var visible = [];
  var curHeight = 0;
  for (var i = 0; i < buildings.length; i++) {
    if( buildings[i] > curHeight) {
      visible.push(buildings[i]);
      curHeight = buildings[i];
    }
  }
  return visible;
}

// Poor Kenny & What Happened to Kenny
function whatHappensToday() {
  // generate random number 1-100
  var rnum = randomNumber = Math.floor((Math.random()*100) + 1) ;
  console.log(randomNumber);
  if (rnum <= 10) { // 10% - volcano - 1-10
    console.log('Volcanoed');
  } else if (rnum <= 25) { // 15% - tsunami - 11 -25
    console.log('Tsunami"d');
  } else if (rnum <= 45) {  // 20% - earthquake - 26 - 45
    console.log('earthquaked!');
  } else if (rnum <= 70) { // 25% - blizzard - 46 - 70
    console.log('Blizzarded!');
  } else {
    console.log('meteorited!'); // 30% - meteor strike - 70 -100
  };
}

function whatReallyHappensToday() {
  var died = false;
  var rnum = randomNumber = Math.floor((Math.random()*100) + 1);
  // console.log(rnum);
  if (rnum <= 10) {
    console.log('Volcanoed');
    died = true;
  }
  // reroll since each event is Independant
  var rnum = randomNumber = Math.floor((Math.random()*100) + 1);
  // console.log(rnum);
  if (rnum <= 15) {
    console.log('Tsunamied');
    died = true;
  }
  var rnum = randomNumber = Math.floor((Math.random()*100) + 1);
  // console.log(rnum);
  if (rnum <= 20) {
    console.log('Earthquaked');
    died = true;
  }
  var rnum = randomNumber = Math.floor((Math.random()*100) + 1);
  // console.log(rnum);
  if (rnum <= 25) {
    console.log('Blizzarded');
    died = true;
  }
  var rnum = randomNumber = Math.floor((Math.random()*100) + 1);
  // console.log(rnum);
  if (rnum <= 30) {
    console.log('Meteored');
    died = true;
  }
  if (!died) {
    // console.log(died);
    console.log('YO! he is alive!');
  }
}

// #3) rotateString
function rotateString(string, shift) {
  var result = '';
  var len = string.length;
  for (var i = 0; i < len; i++){
    var idx =  ((len - shift) + i) % len;
    console.log('idk: ' + idx);
    result += string.charAt(idx);
  }
  return result;
}

console.log(rotateString('Boris Godunov',5));

// #4 map & reduce
function map(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i],i,arr);
  }
}

function reduce(arr, cb) {
  var holder;
  for (var i = arr.length - 1; i >= 0; i--) {
    cb(arr[i], holder, i, arr);
  }
  return holder;
}
