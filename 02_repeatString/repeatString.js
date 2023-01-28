const repeatString = function(string, num) {
  if (num >= 0) {
    let repeater = '';
    for (let i = 0; i < num; i++) {
      repeater += string;
    }
    return repeater;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
