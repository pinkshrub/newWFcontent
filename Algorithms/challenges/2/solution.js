// Hey all!
//
// Here are your weekly algorithm challenges! A few quick reminders:
// These algorithms covera  braod range of topics and difficulties, if you only can get 1 or 2, that is okay! These algorithms are intended to be discussed in the algorithm slack channel and a review video of these
//
// 1) Rotate Array
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.  Second: allow negative shiftBy (shift L, not R).  Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.  Fourth: minimize the touches of each element.

function rotateArray1(arr, shiftBy) {
  var len = arr.length;
  // extend
  for (var i = 0; i <= len - shiftBy; i++){
    arr[len + i] = arr[i];
  }
  // swap
  var off = len - shiftBy;
  for (var i = off; i < arr.length; i++) {
    arr[i - off] = arr[i];
  }
  // chop
  arr.length = len;
  return arr;
}
console.log(rotateArray1([1,2,3,4,5],5));

function rotateArray2(arr, shiftBy) {
  var shift = (arr.length + shiftBy) % arr.length;
  return rotateArray1(arr, shift);
};
console.log(rotateArray2([1,2,3,4,5,6],-5));

// the previous 2 implementations use memory space equal to the size of the offset. to reduce it further without creating a new array is 'lvl 4', ima treat this lvl 3 as another approach to lvl 1
function rotateArray3(arr, shiftBy) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray[(i + shiftBy) % arr.length] = arr[i];
  };
  return newArray;
}
console.log(rotateArray3([1,2,3,4,5],4));

function rotateArray4(array, shift) {
  shift = shift || 1;
  var len = array.length;
  shift = shift % len;
  // Trick is to 'juggle'
  // Need to find an interval we can use that will allow us to efficiently traverse the array in a happy way
  var interval = gcd(len, shift);
  function gcd(num1, num2) {
    var gcd = num1 >= num2 ? num1 : num2;
    for (gcd ; gcd > 1; gcd--) {
      if (num1 % gcd === 0 && num2 % gcd === 0) {
        console.log('gcd of ,' + num1 + ' and ' + num2 + ' is ' + gcd);
        return gcd;
      }
    }
    console.log('gcd of ' + num1 + ' and ' + num2 + ' is ' + gcd);
    return gcd;
  }

  // Outer loop advances us through 'sets'
  var touches = 0;
  for ( var startOfSet = 0; startOfSet < interval; startOfSet++){
    // inner loop advances us through each set for swapping
    // temp is value we are juggling around
    var t = array[startOfSet];
    var setIndex = startOfSet;
    while (1) {
      var index = setIndex + shift >= len ? setIndex + shift - len : setIndex + shift;
      if (index == startOfSet) {
        break;
      }
      touches++;
      array[setIndex] = array[index];
      setIndex = index;
    }
    touches++;
    array[setIndex] = t;

  }
  console.log('touches: '+ touches +' length '+ len);
  console.log(array);
}

//
// 2) Extract-o-matic
//   Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.
//   Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.
//   Third: handle negative num values as well, doing what you think is appropriate.

function extractDigit1(num, digitNum) {
  var slicer = Math.pow(10, digitNum);
  var rem = Math.floor(num / slicer);
  if (rem) {
    if (rem > 10) {
      return Math.floor(rem/ Math.pow(10, digitNum - 1))
    } else {
      return rem;
    }
  } else {
    return 0;
  }
}

// level 2
function extractDigit2(num, digitNum) {
  if (digitNum >= 0) {
    return extractDigit1(num, digitNum);
  };
  while(digitNum !== 0) {
    num = num % 1;
    num*=10;
    digitNum++;
  };
  return Math.floor(num);
}

// level 3
function extractDigit3(num, digitnum) {
  if (num < 0) {
    num = Math.abs(num);
  };
  return extractDigit2(num, digitNum);
}

// 3) Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
//
// Second: can you simplify/shorten your code?
//
// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.
function coinChange1(cents) {
  // quarters!
  var numQ = Math.floor(cents/25);
  console.log('You received ' + numQ + ' Quarters');
  cents = cents % 25;
  var numD = Math.floor(cents/10);
  console.log('You received ' + numD + ' Dimes!');
  cents = cents % 10;
  var numN = Math.floor(cents/5);
  console.log('You received ' + numN + ' Nickels');
  cents = cents % 5;
  console.log('You received ' + cents + ' Pennies!');
};

function coincChange2(cents) {
  function changer(coinage, value) {
    var num = Math.floor(cents / value);
    console.log('You received ' + num + coinage + 's');
    cents = cents % value;
  };
  changer('Quarter', 25);
  changer('Dime', 10);
  changer('Nickel', 5);
  changer('Pennie', 1);
}

function coincChange3(cents) {
  function changer(coinage, value) {
    var num = Math.floor(cents / value);
    console.log('You received ' + num + coinage + 's');
    cents = cents % value;
  };
  var coins = ['Dollar', 'Half-Dollar', 'Quarter', 'Dime', 'Nickel', 'Penny'];
  var vals =  [100     ,       50     ,    25    ,   10  ,     5   ,   1    ];
  for (var i = 0; i < coins.length; i++) {
    changer(coins[i], vals[i]);
  }
}
// 4) rFib
// Write rFib(num). Recursively compute and return numth Fibonacci value. Treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
function rFib(num) {
  if (num < 2) {
    return num;
  } else {
    return rFib(num-1) + rFib(num-2);
  }
};
