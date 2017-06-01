// #1)


// #2)longest suffix
function longestSuffic(words) {
  // basic checks...
  function compareWords(string1, string2) {
    var suffix = '', i=0;
    for (var i = 0; i< string1.length; i++) {
      var char1 = string1.charAt(string1.length-1-i);
      var char2 = string2.charAt(string2.length-1-i);
      if (char1 = char2) {
        suffix+=char1;
      }
    }
    return suffix;
  }
  var suffix = words[0];
  for (var i =0; i < words.length; i++) {
    suffix = compareWords(suffix, words[i]);
  }
  return suffix;
}

// #3)isPrime?
function isPrime1(num) (
  var div = num-1;
  while(div>1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
)

// #4) Blobs
function blobTimer(blobList) {
  // do we need to go now?
  // advance blobbs
  function willBlow(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 50) {
        return true;
      }
    }
    return false;
  }
  var hours = 0;
  if (!willBlow(blobList)) {
    do{
      // build new array
      // find 2 mins and combine
      var min1, min2;
      var mindices = [Infinity, Infinity];
      for (var i = 0; i < blobList.length; i++) {
        if (blobList[i]<min1) {
          min2 = min1, mindices[1] = mindices[0];
          min1 = blobList[i], mindices[0] = i;
        } else if (blobList[i]<min2) {
          min2 = bloblist[i], mindices[1] = i;
        }
      }
      // swapsies and movesies
      swap(mindices[0],arr.length);
      swap(mindices[1],arr.length-1);
      arr[arr.length-1] = min1+min2;
      arr.length--;
      // increment hours
      hours++;
    } while(!willBlow(blobList));
  }
  return hours;
}
