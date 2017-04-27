// Shuffle Array
function shuffle(arr) {
  // randomly grab an index and put it at 'back'
  for (var i = arr.length-1; i >= 0; i--) {
    // grab random index
    var idx = Math.floor(Math.random() * i);
    // put it in index
    var t = arr[i];
    arr[i] = arr[idx];
    arr[idx] = t;
  }
  return arr;
}

// console.log(shuffle([1,2,3,4,5]));
// Where is Claire?
var Claire = {
  location: [0, 0],

  reset: function() {
    Claire.location = [0, 0];
  },
  move: function(x, y) {
    Claire.location = [Claire.location[0] + x, Claire.location[1] + y];
    return Claire;
  },
  showX: function() {
    return Claire.location[0];
  },
  showY: function() {
    return Claire.location[1];
  },
  show: function() {
    console.log(Claire.showX() + ", " + Claire.showY());
  },
  distanceFromHome: function() {
    // a2 + b2 = c2
    return Math.sqrt(Math.pow(Claire.showX(),2) + Math.pow(Claire.showY(), 2));
  },
  distanceFromPoint: function(coordinates) {
    var d_x = Claire.showX() - coordinates[0];
    var d_y = Claire.showY() - coordinates[1];
    return Math.sqrt(Math.pow(d_x,2) + Math.pow(d_y, 2));
  }
}
// Parens/Braces valid?
function validParens(string) {
  // need to make sure that we have 'matching' number of Parens
  // and need to make sure that for eachopen we have a close
  var counter = 0;
  var stack = [];
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == '(') {
      stack.push('(');
      counter++;
    } else if (string.charAt(i) == ')') {
      counter--;
      if (stack.pop() !== '(' || counter < 0) {
        return false;
      }
    }
  }
  return counter === 0;
}

// console.log(validParens('a(b)cd(()(()()())efg'));
function bracesValid(string) {
  var ref = {
    '}': '{',
    ')': '(',
    ']': '['
  };
  var stack = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char == '{' || char == '[' || char == '(') {
      stack.push(char);
    } else if (ref[char]) {
      if (ref[char] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(bracesValid('A(1)s[O (n]0{t) 0}k'));
// Invert/compare hash
function invertHash(obj) {
  for (var key in obj) {
    var val = obj[key];
    obj[val] = key;
    delete obj[key];
  }
}
