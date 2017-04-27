// 1) Temperature conversion
function fahrenheitToCelsius(fDegrees) {
  return (fDegrees-32)*(5/9);
}

function celsiusToFahrenheit(cDegrees) {
  return (9/5 * cDegrees) + 32;
}
// 2) Clock hand angles
function clockHandAngles(seconds) {
  // calculate relevant values
  var minutes = Math.floor(seconds/60);
  // seconds hand
  var remSeconds = seconds%60;
  var hours = Math.floor(minutes/60);
  // mnutes hand
  var remMinutes = minutes%60;
  // which hour?
  var remHours = hours%12;

  // calculate hand angles
  // minAngle 6*/minute + seconds
  var minAngle = 6 * remMinutes + (6*(remSeconds/60));
  // secAngle 6*/sec
  var secAngle = 6 * remSeconds;
  // hrAngle 30*/hour + minutes
  var hrAngle = 30 * remHours + (30 * remMinutes/60);

  console.log('Hour hand: '   + hrAngle);
  console.log('Minute hand: ' + minAngle);
  console.log('Second hand: ' + secAngle);
}

// 3) Date on a deserted island
function weekdayName(weekdayNum) {
  switch (weekdayNum) {
    case 1:
      console.log('Sunday');
      break;
    case 2:
      console.log('Monday');
      break;
    case 3:
      console.log('Tuesday');
      break;
    case 4:
      console.log('Wednesday');
      break;
    case 5:
      console.log('Thursday');
      break;
    case 6:
      console.log('Friday');
      break;
    case 7:
      console.log('Saturday');
      break;
  }
}

// weekdayName(1);

function weekdayName2(weekdayNum) {
  weekdayNum = weekdayNum%7;
  switch (weekdayNum) {
    case 1:
      console.log('Sunday');
      break;
    case 2:
      console.log('Monday');
      break;
    case 3:
      console.log('Tuesday');
      break;
    case 4:
      console.log('Wednesday');
      break;
    case 5:
      console.log('Thursday');
      break;
    case 6:
      console.log('Friday');
      break;
    case 0:
      console.log('Saturday');
      break;
  }
}

function someDays() {
  for(var i = 0; i < 17; i++) {
    var dayNum = Math.floor(Math.random() * 365) + 1;
    weekdayName2(dayNum);
    if (dayNum%7 < 2) {
      console.log('Enjoy your day off!');
    } else {
      console.log('Work hard!');
    }
  }
}

// someDays();
function monthName(monthNum) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthNum-1];
}

function monthToDays(monthNum) {
  switch (monthName(monthNum)) {
    case 'January':
      return 31;
      break;
    case 'February':
      return 28;
      break;
    case 'March':
      return 31;
      break;
    case 'April':
      return 30;
      break;
    case 'May':
      return 31;
      break;
    case 'June':
      return 30;
      break;
    case 'July':
      return 31;
      break;
    case 'August':
      return 31;
      break;
    case 'September':
      return 30;
      break;
    case 'October':
      return 31;
      break;
    case 'November':
      return 30;
      break;
    case 'December':
      return 31;
      break;
  }
}

// console.log(monthToDays(1));
function dayToMonth(dayNum) {
  var monthCounter = 1;
  while(dayNum > 0) {
    dayNum -= monthToDays(monthCounter%12);
    monthCounter++;
  }
  return monthName(monthCounter-1);
}

function fullDate(dayNum) {
  // get month
  var month = dayToMonth(dayNum);
  // get day
  var day = weekdayName2(dayNum);
  // get monthday
  var monthNum = 1;
  var dayNumCopy = dayNum;
  while (dayNumCopy > 0) {
    dayNumCopy = dayNumCopy - monthToDays(monthNum);
    monthNum = monthNum+1 > 12 ? monthNum + 1 - 12 : monthNum + 1;
  }
  // console.log(dayNumCopy);
  var monthDay = monthToDays(monthNum-1) + dayNumCopy;
  // get year
  var year = 2017;
  return day + month + monthDay + year;
}

function fullDate2(dayNum) {
  // get year
  function findYear(numDays){
    var year = 2017;
    while (numDays > 365) {
      year++;
      numDays = year%4 === 0 ? numDays - 366 : numDays - 365;
    }
    return year;
  };

  var year = findyear(dayNum);
  var numYears = year - 2017;
  // get day
  var day = weekdayName2(numDays);
  // get month + monthDay
  var numDays -= numYears*365 + Math.floor(numYears/4);
  var monthNum = 1;
  var dayNumCopy = dayNum;
  while (dayNumCopy > 0) {
    dayNumCopy = dayNumCopy - monthToDays(monthNum);
    monthNum = monthNum+1 > 12 ? monthNum + 1 - 12 : monthNum + 1;
    if (year%4===0 && monthNum = 3) {
      dayNumCopy--;
    }
  }
  return year + day + monthName(monthNum-1) + (monthToDays(monthNum-1) + dayNumCopy);
}
// 4) Taco Truck
function tacoTruck(coordList) {
  function sortify(list) {
    if (list.length < 2) {
      return list;
    }
    var pivot = Math.floor(list.length/2);
    var left = [];
    var right = [];
    var mid = [];
    for (var i = 0; i < list.length; i++) {
      if(list[i] < list[pivot]) {
        left.push(list[i]);
      } else if(list[i] == list[pivot]){
        mid.push(list[i]);
      } else {
        right.push(list[i]);
      }
    }
    return sortify(left) + mid + sortify(right);
  }
  function findMedian(list) {
    // sort the list
    sortedList = sortify(list);
    return list[Math.floor(list.length/2)];
  }
  var xs = [];
  var ys = [];
  for (var i = 0; i < coordList.length; i++) {
    xs.push(coordList[i][0]);
    ys.push(coordList[i][0]);
  }
  return [findMedian(xs), findMedian(ys)];
}
