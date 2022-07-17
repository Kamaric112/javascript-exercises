const ftoc = function(fTemp) {
  const result = ((fTemp - 32) / 1.8);
  return parseFloat(result.toFixed(1));
};

const ctof = function(cTemp) {
  const result = cTemp * 1.8 + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
