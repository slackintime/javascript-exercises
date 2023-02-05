const removeFromArray = function(...args) {
  const array = args[0];
  return array.filter(bollocks => !args.includes(bollocks));
};

// Do not edit below this line
module.exports = removeFromArray;
