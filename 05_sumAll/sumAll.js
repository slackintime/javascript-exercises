const sumAll = function(first, last) {
  let allTotal = 0;
    if(!Number(first) || !Number(last)) { return "ERROR"};
    if(first <= 0 || last <= 0) { return "ERROR"};
    if(first > last) {
      let switchNumbers = first;
      first = last;
      last = switchNumbers;
  }
  if(Number.isInteger(first) && Number.isInteger(last)) {
      for(let i = first; i <= last; i++) {
      allTotal += i;
      };
      return allTotal;
  } else {
      return "ERROR";
  }
console.log('test');
console.log(allTotal);
};

// Do not edit below this line
module.exports = sumAll;
