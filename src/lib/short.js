const cast = require("../_helpers/cast");

const numBits = 16;

const short = {
  castValue: Math.pow(2, numBits),
  maxValue: Math.pow(2, numBits - 1) - 1,
  minValue: 0 - Math.pow(2, numBits - 1)
};

short.cast = cast(true).bind(short);
short.unsigned = {
  cast: cast(false).bind(short)
};

module.exports = short;
