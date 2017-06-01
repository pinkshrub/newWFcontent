// balancepoint
// move left to right
// sum all values to left and right of 'index'
// if equivalent at any point, return true
// if reach end, return false
function balancePoint(arr) {
  var sumLeft = 0;
  var sumRight = 0;
  // sum right side
  for (var i = 0; i<arr.length; i++) {
    sumRight+=arr[i];
  }
  if (sumRight === 0) {
    return true;
  }
  // move through checking if index is balanced
  for (var i = 0; i < arr.length; i++) {
    if (sumRight == sumLeft) {
      return true;
    }
    sumLeft+=arr[i];
    sumRight-=arr[i];
  }
  return false;
}

console.log(balancePoint([9,9]));

function balanceIdx(arr) {
  // same as above, but not including the current index
  var leftSum = rightSum = 0;
  for (var i = 1; i < arr.length; i++) {
    rightSum+=arr[i];
  }
  // now have right sume and left sume, time to do the stuff
  for (var i = 0; i<arr.length-1; i++) {
    if (leftSum===rightSum) {
      return i;
    }
    leftSum+=arr[i+1];
    rightSum-=arr[i+1];
  }
  if (leftSum===0){
    return arr.length-1;
  }
  return -1;
}


function starArt(width=75) {
  return {
    drawLeftStars: function(num) {
      var resultString = '';
      var i = 0;
      while (i < num) {
        resultString+='*';
      }
      while(i<width) {
        resultString+=' ';
      }
      return resultString;
    },
    drawRightStars: function(num) {
      var resultString = '';
      var i = 0;
      while (i < num) {
        resultString+='*';
      }
      while (i < width) {
        resultString = ' '+resultString;
      }
      return resultString;
    },
    drawCenteredStars: function(num) {
      var resultString = '';
      var i = 0;
      while (i < num) {
        resultString+='*';
      }
      while (i < width) {
        if (i%2===0) {
          resultString = ' '+resultString;
        } else {
          resultString+=' ';
        }
      }
      return resultString;
    }
  }
}


// cows and bulls
function cowsBulls(guess, answer) {
  // inputs is strings, array-ification!
  var guess = guess.split('');
  var answer = answer.split('');
  var bulls = 0, cows = 0;
  for(var i = 0; i < guess.length; i++) {
    // test if bull
    if (guess[i] == answer[i]) {
      // increment bulls
      bulls++;
    } else if (answer.indexOf(guess[i]) >= 0) {
      // is cow
      cows++;
    }
  }
  return bulls + "A" + cows + "B";
}
console.log(cowsBulls("7810", "1807"));

// combine arrays
// Key thing to note here is how we choose to interpret the problem. there are two ways to look at this, in-place means without using excess memory. Doesnt exactl make sense with 2 arrays, so 1 way is to interpret that as removing and adding 1 index fromm arr2 into arr1 at a time. Bbut that is somethng you can do. We will look at this in teh conext of the mergesort algorithm wich works by breaking up an array into sorted sub arrays(of length 1) and then merging them. So we will assume we are given the starting and ending indices of 2 sorted subarrays inside another array. We have a couple of approaches here, im going to go ahead and just roll with use being caught 'mid insertion sort'
function combineArrs(arr, left_start, left_end, right_start, right_end) {
  // gonna need an insertion point
  var ins = left_start;
  // loop through second array
  for (var i = right_start; i <= right_end; i++) {
    while (arr[ins] <= arr[i]) {
      ins++;
    }
    // shift arr[i] to ins
    for(var j = i; j > ins; j--) {
      var t = arr[j-1];
      arr[j-1] = arr[j];
      arr[j] = t;
    }
  }
}

var bob = [1,3,5,7,9,2,4,6,8,10];
combineArrs(bob,0,4,5,9);
console.log(bob);

function mergeSort1(arr, left_bound, right_bound) {
  // take advantage of mergeSort on length of 1 arrays!
  // so we need to check base case, and think about what we can pass to our combineArrs function
  // at a higher level, we need tour list to be two sorted halves that we merge together
  // so, this is something that abstractly makes some sense at the the moment:
  // return combineArrs(arr, 0,mid,mid+1, end);
  // the trick is to implement our base case here and make a recursive call or return the merged halves
  // so what is base case? 'length of arr is 1'
  var left = left_bound || 0;
  var right = right_bound || arr.length-1;
  var mid = Math.floor(arr.length/2);
  if (right-left <= 1) {
    return arr;
  }

  return combineArrs(arr, 0, mid++, mid, arr.length-1);
}
