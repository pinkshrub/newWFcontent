// CCV
function isCCV(digitArr) {
  // digitArr has len 13-19
  // 0:[5,2,2,8,2]
  // 1) set aside last value
  // [5,2,2,8]
  // 2) starting from back multiply values in odd positions by 2
  // [5,4,2,16]
  // 2b) if a value is greater than 9, subtract 9
  // [5,4,2,7]
  // 3) sum all values together
  // 18
  // 4) add last digit in, sum should be divisible by 10
  // 20
  // if (digitArr.length < 13 || digitArr.length > 19){
  //   return false;
  // }
  for(var i = digitArr.length-2; i > 0; i-=2){
    // mulitply by 2 and make small enough
    if (digitArr[i] > 5){
      digitArr[i] = digitArr[i]*2 - 9;
      console.log('changeA');
    } else {
      digitArr[i] =digitArr[i]*2;
      console.log('changeB');
    }
  }
  // add all stuff together
  var sum = 0;
  console.log('digitArr is:', digitArr);
  for (var i = 0; i<digitArr.length; i++) {
    sum += digitArr[i];
  }
  console.log(sum);
  return sum%10===0;
}

console.log(isCCV([5,2,2,8,2]));

// Book Index
function bookIndex (arr){
    var result = "";
    var start_span, end_span; //These are the only important elements to page ranges, or spans.
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1] - 1 && arr[i] != arr[i-1] + 1){ //If the next and previous page weren't consecutive, then it's ALONE- just add it to the result.
            result = result + arr[i] + ",";
        } //If it's not ALONE, let's see if it's the start, middle, or end of a span
        else if(arr[i] == arr[i+1] - 1 && arr[i -1] != arr[i]-1){ //spans start if the next index is consecutive, AND the last one wasn't consecutive
            start_span = arr[i];
        }
        else if(arr[i] == arr[i-1] + 1 && arr[i] == arr[i + 1] - 1){ //check if its mid-span by seeing if the previous and next pages are consecutive
            continue; //If I had more time we might be able to factor this middle check out...
        }
        else{ //If we're here, it means it's not ALONE, it's not the START or MIDDLE of a span, it MUST be the END of a span
            end_span = arr[i];
            result = result + start_span + "-" + end_span + ",";
        };
    };
    result = result.slice(0, -1); //shave off the last comma.
    return result;
};
var test = [1,3,4,5,7,8,10];
console.log(bookIndex(test));

// Roman Numerals
function toRoman(n) {
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < decimals.length; i++) {
        if(n < 1)
            return "";

        if(n >= decimals[i]) {
            return roman[i] + toRoman(n - decimals[i]);
        }
    }
}

function toNum(string){

}


// Linked Lists
