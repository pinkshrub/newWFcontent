// [1,2,3,4,5],1 => [5,1,2,3,4]
// [1,2,3,4,5],2 => [4,5,1,2,3]
// 1,2,3,4,5,1,2,3,4
// 5,1,2,3,4,1,2,3,4
// 5,1,2,3,4
// 1,2,3,4,5,1,2,3
// extend array
// swap + chop

function rotateArray(arr, shift) {
  // cache original array length
  var len0 = arr.length;
  // extend array
  for (var i = 0; i < len0 - shift; i++) {
    arr[len0 + i] = arr[i];
  };
  // swap the array values to front
  var offset = len0-shift;
  for (var i = offset; i < arr.length; i++) {
    arr[i-offset] = arr[i];
  };
  // chop
  arr.length = len0;
  return arr;
}

console.log(rotateArray([1,2,3,4,5],1));

function rotateArray2(arr, shift) {
  if (shift < 0) {
    shift = shift % arr.length;
    shift = arr.length + shift;
  }
  rotateArray(arr, shift);
}

function rotateArray3(arr, shift) {
  while (shift) {
    var temp = arr[arr.length-1];
    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = temp;
    shift--;
  }
  return arr;
}
